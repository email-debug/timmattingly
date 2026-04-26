"""
Outlook COM Interop - Connect to local Outlook via Windows COM.

Requires: pip install pywin32
Requires: Outlook desktop app running (or it will launch it)
"""

import win32com.client
import pythoncom
from datetime import datetime, timedelta


def connect_outlook():
    """Connect to the running Outlook instance (or launch it).

    NOTE: Outlook may show a security prompt ("A program is trying to access
    e-mail addresses..."). You must click Allow in the Outlook dialog.
    To suppress this permanently, see:
    https://support.microsoft.com/en-us/topic/how-to-suppress-programmatic-access-warnings
    """
    try:
        pythoncom.CoInitialize()
        outlook = win32com.client.Dispatch("Outlook.Application")
        namespace = outlook.GetNamespace("MAPI")
        # Don't call Logon() — it opens the profile wizard.
        # Dispatch attaches to the already-running Outlook instance.

        # Test the connection by accessing Inbox (less restricted than CurrentUser)
        inbox = namespace.GetDefaultFolder(6)  # olFolderInbox
        print(f"Connected to Outlook. Inbox: {inbox.Name} ({inbox.Items.Count} items)")
        return outlook, namespace
    except Exception as e:
        print(f"Failed to connect to Outlook: {e}")
        print("Make sure Outlook desktop app is running.")
        print("If you see a security prompt in Outlook, click 'Allow'.")
        raise


def list_folders(namespace, indent=0):
    """List all top-level folders and their subfolders."""
    for folder in namespace.Folders:
        print(f"{'  ' * indent}{folder.Name}")
        for subfolder in folder.Folders:
            print(f"{'  ' * (indent + 1)}{subfolder.Name} ({subfolder.Items.Count} items)")


def get_inbox(namespace):
    """Get the default Inbox folder."""
    # 6 = olFolderInbox
    return namespace.GetDefaultFolder(6)


def get_recent_emails(inbox, count=10):
    """Get the most recent emails from a folder."""
    messages = inbox.Items
    messages.Sort("[ReceivedTime]", True)  # Sort descending
    results = []
    for i, msg in enumerate(messages):
        if i >= count:
            break
        try:
            results.append({
                "subject": msg.Subject,
                "sender": msg.SenderName,
                "received": str(msg.ReceivedTime),
                "unread": msg.UnRead,
            })
        except Exception:
            continue
    return results


def search_emails(inbox, subject_query, days_back=30):
    """Search emails by subject within a date range."""
    cutoff = datetime.now() - timedelta(days=days_back)
    cutoff_str = cutoff.strftime("%m/%d/%Y")

    messages = inbox.Items
    restriction = (
        f"@SQL=\"urn:schemas:httpmail:subject\" LIKE '%{subject_query}%' "
        f"AND \"urn:schemas:httpmail:datereceived\" >= '{cutoff_str}'"
    )
    filtered = messages.Restrict(restriction)

    results = []
    for msg in filtered:
        try:
            results.append({
                "subject": msg.Subject,
                "sender": msg.SenderName,
                "received": str(msg.ReceivedTime),
            })
        except Exception:
            continue
    return results


def get_calendar_events(namespace, days_ahead=7):
    """Get upcoming calendar events."""
    # 9 = olFolderCalendar
    calendar = namespace.GetDefaultFolder(9)
    items = calendar.Items
    items.IncludeRecurrences = True
    items.Sort("[Start]")

    now = datetime.now()
    end = now + timedelta(days=days_ahead)

    restriction = (
        f"[Start] >= '{now.strftime('%m/%d/%Y %H:%M %p')}' "
        f"AND [Start] <= '{end.strftime('%m/%d/%Y %H:%M %p')}'"
    )
    filtered = items.Restrict(restriction)

    results = []
    for item in filtered:
        try:
            results.append({
                "subject": item.Subject,
                "start": str(item.Start),
                "end": str(item.End),
                "location": item.Location,
            })
        except Exception:
            continue
    return results


def get_contacts(namespace, count=20):
    """Get contacts from the default Contacts folder."""
    # 10 = olFolderContacts
    contacts_folder = namespace.GetDefaultFolder(10)
    results = []
    for i, contact in enumerate(contacts_folder.Items):
        if i >= count:
            break
        try:
            results.append({
                "name": contact.FullName,
                "email": contact.Email1Address,
                "company": contact.CompanyName,
            })
        except Exception:
            continue
    return results


def send_email(outlook, to, subject, body, html=False):
    """Create and display a new email (does NOT send automatically)."""
    # 0 = olMailItem
    mail = outlook.CreateItem(0)
    mail.To = to
    mail.Subject = subject
    if html:
        mail.HTMLBody = body
    else:
        mail.Body = body
    mail.Display()  # Opens in Outlook for review — use mail.Send() to send directly
    print(f"Email drafted to {to} — displayed in Outlook for review.")


# ---------------------------------------------------------------------------
# Demo
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    outlook, ns = connect_outlook()

    print("\n--- Mailbox Folders ---")
    list_folders(ns)

    inbox = get_inbox(ns)
    print(f"\n--- Recent Inbox ({inbox.Items.Count} total) ---")
    for email in get_recent_emails(inbox, count=5):
        unread = " [UNREAD]" if email["unread"] else ""
        print(f"  {email['received'][:19]}  {email['sender'][:30]:30s}  {email['subject'][:60]}{unread}")

    print("\n--- Upcoming Calendar (7 days) ---")
    for event in get_calendar_events(ns, days_ahead=7):
        print(f"  {event['start'][:19]}  {event['subject'][:50]}  @ {event['location'] or 'No location'}")

    print("\nDone.")
