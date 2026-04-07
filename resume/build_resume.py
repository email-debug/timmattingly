from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
)
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER

W, H = letter
LEFT = 0.8 * inch
RIGHT = 0.8 * inch
TOP = 0.75 * inch
BOTTOM = 0.75 * inch
USABLE = W - LEFT - RIGHT

RULE_COLOR = colors.HexColor('#888888')
TEXT_DARK = colors.HexColor('#1a1a1a')
TEXT_MID = colors.HexColor('#444444')
TEXT_LIGHT = colors.HexColor('#777777')

SANS = 'Helvetica'
SANS_B = 'Helvetica-Bold'
SANS_I = 'Helvetica-Oblique'
SERIF_B = 'Times-Bold'

def style(name, font=SANS, size=10, color=TEXT_DARK, leading=None, space_before=0, space_after=2, alignment=TA_LEFT, left_indent=0):
    return ParagraphStyle(
        name, fontName=font, fontSize=size, textColor=color,
        leading=leading or size * 1.3, spaceBefore=space_before,
        spaceAfter=space_after, alignment=alignment, leftIndent=left_indent,
    )

s_name       = style('name',       SERIF_B,  22, TEXT_DARK, leading=26, space_after=2)
s_contact    = style('contact',    SANS,      8,  TEXT_LIGHT, leading=11, space_after=8)
s_section    = style('section',    SANS_B,    7.5, TEXT_LIGHT, leading=10, space_before=10, space_after=2)
s_body       = style('body',       SANS,      9.5, TEXT_DARK, leading=13, space_after=2)
s_body_small = style('bsmall',     SANS,      8.5, TEXT_LIGHT, leading=12, space_after=1)
s_italic     = style('italic',     SANS_I,    9,   TEXT_MID, leading=12, space_after=2, left_indent=0)
s_bullet     = style('bullet',     SANS,      9.5, TEXT_DARK, leading=13, space_after=1, left_indent=0)
s_competency = style('competency', SANS,      9,   TEXT_MID, leading=13, space_after=0, alignment=TA_CENTER)

# ATS-safe company/date style: single paragraph with right-tab simulation
s_company    = style('company',    SANS_B,    10,  TEXT_DARK, leading=13, space_after=0)
s_date_r     = style('date_r',     SANS,      8.5, TEXT_LIGHT, leading=13, alignment=TA_RIGHT)
s_sub_role   = style('sub_role',   SANS_B,    9,   TEXT_DARK, leading=12, space_before=2, space_after=1)
s_curr_name  = style('curr_name',  SANS_B,    9.5, TEXT_DARK, leading=13, space_after=1)
s_curr_desc  = style('curr_desc',  SANS,      9,   TEXT_MID, leading=12, space_after=4, left_indent=0)

def section_header(title):
    return [
        Spacer(1, 6),
        Paragraph(title.upper(), s_section),
        HRFlowable(width='100%', thickness=0.5, color=RULE_COLOR, spaceAfter=4),
    ]

def company_date_row(company, date):
    """Company bold left, date right on same line — single Paragraph for perfect alignment."""
    # Use a single paragraph with the date right-floated via spacer hack
    # This avoids Table offset issues entirely
    return Paragraph(
        f'{company} <font color="#777777" size="8.5">&nbsp;&nbsp;{date}</font>',
        s_company
    )

def bullet(text):
    return Paragraph(f'\u2022\u2002{text}', s_bullet)

def spacer(n=4):
    return Spacer(1, n)

story = []

# ── NAME & CONTACT (plain text, no links) ──────────────────────────────────
story.append(Paragraph('Tim Mattingly', s_name))
story.append(Paragraph(
    'Ballwin, MO (St. Louis) &nbsp;\u00b7&nbsp; 636-675-6067 &nbsp;\u00b7&nbsp; timmattingly@outlook.com &nbsp;\u00b7&nbsp; '
    'linkedin.com/in/timothywmattingly &nbsp;\u00b7&nbsp; timmattingly.com',
    s_contact
))
# Section headers already have their own rule — skip the extra one here

# ── SUMMARY ─────────────────────────────────────────────────────────────────
story += section_header('Summary')
story.append(Paragraph(
    '30 years building companies, leading teams, and shipping products \u2014 Fortune 25 to early-stage startups. '
    'EE undergrad, MBA (4.0), 3 patents, founded and grew a company to 300 people.',
    s_body
))
story.append(Paragraph(
    'Built a custom AI agent orchestration engine and used it to ship a production SaaS without writing code.',
    s_body
))
story.append(Paragraph(
    'Open to full-time leadership, fractional CTO/CIO, and strategic advisory.',
    s_body
))

# ── CORE COMPETENCIES ───────────────────────────────────────────────────────
story += section_header('Core Competencies')
story.append(Paragraph(
    'Technology Strategy &amp; Roadmap \u00b7 AI &amp; Automation \u00b7 Product Innovation \u00b7 '
    'Enterprise Architecture \u00b7 Healthcare Technology \u00b7 Digital Transformation \u00b7 '
    'Startup Advisory \u00b7 M&amp;A Integration \u00b7 Team Building &amp; Org Design \u00b7 '
    'Strategic Partnerships \u00b7 P&amp;L Ownership \u00b7 SAFe Agile \u00b7 Blockchain &amp; Emerging Tech',
    s_competency
))

# ── EXPERIENCE ─────────────────────────────────────────────────────────────
# Single "Experience" section for ATS — subsections for Current vs Prior
story += section_header('Experience')

# Current roles sub-header
story.append(Paragraph('<b>Current Roles</b>', style('curr_sub', SANS_B, 9.5, TEXT_DARK, leading=13, space_before=0, space_after=4)))

curr_items = [
    ('Smarter Travel Planner', 'Founder',
     'AI-powered trip planning app with conversational concierge, interactive maps, itinerary management, and payments \u2014 smartertravelplanner.com. Full production SaaS built entirely by AI agents without writing a line of code.'),
    ('AI Vibe Coding CI/CD Engine', 'Architect &amp; Builder',
     'Custom AI agent orchestration system built on Claude Code: epic planning, bead decomposition, parallel agents, smoke gates, failure recovery, and automated quality gates. A repeatable model for autonomous software delivery.'),
    ('BioSTL Innovation Advisory', 'Executive Advisor',
     'Ongoing strategic advisory to healthcare startups through BioSTL/Biogenerator, St. Louis\'s leading life sciences accelerator. (2023\u2013Present)'),
    ('Woodsmill HOA', 'President',
     'Leading the drafting &amp; adoption of new governing legal docs &amp; the largest series of capital improvement projects in the 58 year history of the subdivision.'),
]

for name, role, desc in curr_items:
    story.append(Paragraph(f'<b>{name}</b> \u2014 {role}', s_curr_name))
    story.append(Paragraph(desc, s_curr_desc))

story.append(spacer(4))

# Prior roles
story.append(HRFlowable(width='100%', thickness=0.3, color=colors.HexColor('#cccccc'), spaceAfter=6))

# BioSTL
story.append(company_date_row(
    'BioSTL / Biogenerator \u2014 Head of Innovation Advisory \u00b7 Executive Advisor \u00b7 EIR',
    '2023 \u2013 2025'
))
story.append(Paragraph('<i>St. Louis\'s leading life sciences and digital health accelerator</i>', s_italic))
for b in [
    'Took over a dormant advisory practice \u2014 25 advisors, 10 active, near-zero clients \u2014 rebuilt from the ground up',
    'Grew to 100+ advisors (50+ active) and ~15 active retainer clients at any given time',
    'Grew client engagements 75% within the first 180 days; grew advisor roster 400% over two years',
    'Negotiated and structured a joint venture between BioSTL and Redesign Health to launch the St. Louis Digital Health Venture Studio',
    'Produced two BioSTL Health Innovation Summits \u2014 largest in org\'s history; 2025: 40 companies, 10 countries, 350 attendees',
    'Coached junior associate through multiple promotions to Director-level',
]:
    story.append(bullet(b))
story.append(spacer(4))

# Centene
story.append(company_date_row('Centene Corporation \u2014 Sr. Director, Enterprise Innovation &amp; Digital Strategy', '2018 \u2013 2023'))
story.append(Paragraph('<i>$160B Fortune 25 managed care organization, 28M members</i>', s_italic))
for b in [
    'Led enterprise innovation strategy \u2014 AI/ML, blockchain, automation, and digital product portfolio from ideation through launch',
    'Digital products strategy lead for $20B line of business; aligned strategy with technology investment and product roadmaps',
    'Identified $30M in new savings opportunities and led programs to capture them',
    'Increased live agent call containment 250% deploying a virtual call center agent built on AI, ML, and NLP',
    'Led COVID-19 digital outreach to 25 million customers \u2014 enterprise-wide launch in under 60 days',
    'Led enterprise blockchain partnerships including the Synaptic Health Alliance',
]:
    story.append(bullet(b))
story.append(spacer(4))

# Mastercard
story.append(company_date_row('Mastercard \u2014 Conceived and built the foundations of 5 product lines \u00b7 3 patents', '2011 \u2013 2018'))
story.append(Paragraph('<i>VP of Enterprise Partnerships \u00b7 VP of Product Development \u00b7 VP of Technology</i>', s_italic))
for b in [
    'Conceived the architecture behind Mastercard Safety Net and led the first 8 months of development \u2014 now blocks 70B+ fraudulent transactions',
    'Invented Mastercard In Control \u2014 cardholder geolocation signals for issuer cross-border spend controls \u2014 led development through handoff. Patent granted (US11620628B2)',
    'Contributed pivotal early ideas and led the Microsoft pilot that proved the model for Mastercard Track ($120T B2B market). Patent filed (US20170270493A1)',
    'Built the Singapore/IMDA relationship and authored blockchain architecture white papers \u2014 foundation of TradeTrust, now backed by 17+ global firms',
    'Led the team that designed the blockchain identity/verification architecture behind Mastercard Provenance Solution. Patent granted (US11062038B2)',
    'Global product management for $10B wholesale travel payments program \u2014 $100M gross income',
]:
    story.append(bullet(b))
story.append(spacer(4))

# United Mortgage Partners
story.append(company_date_row('United Mortgage Partners \u2014 President &amp; Founder', '2009 \u2013 2011'))
for b in [
    'Originated concept for a new mortgage platform business model for the post-2008 regulatory environment',
    'Led the merger and integration of 6 mortgage companies to create a unified lending operation',
]:
    story.append(bullet(b))
story.append(spacer(4))

# Equilliance
story.append(company_date_row('Equilliance Companies \u2014 President &amp; Founder', '2003 \u2013 2011'))
story.append(Paragraph('<i>Mortgage lending and real estate services \u2014 Orlando, FL</i>', s_italic))
for b in [
    'Founded from scratch; grew to 300+ employees within 24 months',
    'Acquired 4 competing firms and launched 5 subsidiary companies',
    'Built proprietary platform for loan origination, marketing, HR, compliance \u2014 reduced onboarding cost 75%, origination costs 50%',
    'Full P&amp;L ownership across the entire family of companies',
]:
    story.append(bullet(b))
story.append(spacer(4))

# Sypris
story.append(company_date_row('Sypris Electronics \u2014 Director of Sales &amp; Product Management', '1999 \u2013 2003'))
for b in [
    'Led IT systems consolidation across 6 subsidiaries; managed IT staff of 60',
    'Developed and launched CALWEB \u2014 electronic instrumentation software; retained as key differentiator through acquisition',
    'Managed global sales and strategy for $10M magnetic sensor product line',
]:
    story.append(bullet(b))
story.append(spacer(4))

# EY
story.append(company_date_row('Ernst &amp; Young \u2014 Manager, Technology Consulting', '1998 \u2013 1999'))
for b in [
    'Reduced IT operating costs 75% for a $1.5B manufacturer through ERP consolidation and infrastructure optimization',
    'Rescued two consecutive failing system implementations for the same client; won >$1M of new work in year one',
]:
    story.append(bullet(b))
story.append(spacer(4))

# Berg
story.append(company_date_row('Berg Electronics \u2014 Global Manager of Business Technology', '1994 \u2013 1998'))
story.append(Paragraph('<i>$800M electronic-component manufacturing company</i>', s_italic))
for b in [
    'Progressed from entry-level to global technology leadership in 4 years',
    'Managed global telecom, email, and internet services across 40 locations in 14 countries',
    'Improved order management transaction times 70% by redesigning a system used across North America',
]:
    story.append(bullet(b))

# ── EDUCATION ────────────────────────────────────────────────────────────────
story += section_header('Education')
story.append(Paragraph('<b>Executive MBA \u2014 4.0 GPA</b> &nbsp;\u00b7&nbsp; Concentrations in Finance and International Business', s_body))
story.append(Paragraph('Crummer Graduate School of Business, Rollins College', s_body_small))
story.append(spacer(4))
story.append(Paragraph('<b>BS, Electrical Engineering</b>', s_body))
story.append(Paragraph('University of Missouri \u2014 Columbia', s_body_small))

# ── PATENTS ──────────────────────────────────────────────────────────────────
story += section_header('Patents')
for num, title in [
    ('US11062038B2 \u00b7 2021', 'Method and System for Identity and Credential Protection and Verification via Blockchain'),
    ('US20170004486A1', 'Method and System for Fraud Control Based on Geolocation'),
    ('US20170270493A1', 'Method and System for Recording Point-to-Point Transaction Processing'),
]:
    story.append(Paragraph(f'<b>{num}</b> &nbsp; {title}', s_body))
    story.append(spacer(3))

# ── RECOGNITION ──────────────────────────────────────────────────────────────
story += section_header('Recognition')
story.append(Paragraph('Orlando Business Journal \u2014 Entrepreneur of the Month &amp; 40 Under 40', s_body))

# ── BUILD ─────────────────────────────────────────────────────────────────────
output_path = r'C:\Users\timma\stp\TimCo\resume\versions\Tim Mattingly - Current.pdf'

doc = SimpleDocTemplate(
    output_path,
    pagesize=letter,
    leftMargin=LEFT,
    rightMargin=RIGHT,
    topMargin=TOP,
    bottomMargin=BOTTOM,
)
doc.build(story)
print(f'Done: {output_path}')
