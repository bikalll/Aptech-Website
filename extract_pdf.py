import sys
import subprocess
import os

try:
    import pypdf
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf

pdf_path = "src/components/Aptech Broucher.pdf"

if not os.path.exists(pdf_path):
    print(f"Error: {pdf_path} not found.")
    sys.exit(1)

reader = pypdf.PdfReader(pdf_path)
text = []
for i, page in enumerate(reader.pages):
    text.append(f"--- PAGE {i+1} ---")
    page_text = page.extract_text()
    if page_text:
        text.append(page_text)
    else:
        text.append("<NO TEXT EXTRACTED>")

with open("brochure_text.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(text))

print("Extraction complete. Text saved to brochure_text.txt")
