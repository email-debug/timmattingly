from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch

W, H = letter
LEFT = 0.8 * inch
RIGHT = 0.8 * inch
USABLE = W - LEFT - RIGHT

print(f"Page width: {W}pt = {W/72}in")
print(f"Margins: L={LEFT/72}in  R={RIGHT/72}in")
print(f"Usable: {USABLE}pt = {USABLE/72:.3f}in")
print(f"Company col: {USABLE - 1.1*inch}pt = {(USABLE - 1.1*inch)/72:.3f}in")
print(f"Date col: {1.1*inch}pt = {1.1*inch/72:.3f}in")
print(f"Col sum: {(USABLE - 1.1*inch + 1.1*inch)/72:.3f}in (should match usable)")
print()
print(f"Bullet left_indent: 10pt")
print(f"curr_desc left_indent: 12pt")
print(f"Italic left_indent: 0pt")
print()
print("Issue: table colWidths may not sum to exactly USABLE.")
print(f"Table total = {USABLE - 1.1*inch + 1.1*inch}pt")
print(f"Frame usable = {USABLE}pt")
print(f"Match: {abs(USABLE - (USABLE - 1.1*inch + 1.1*inch)) < 0.001}")
