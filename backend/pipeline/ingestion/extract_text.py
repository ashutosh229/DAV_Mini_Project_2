import fitz
import os 

def extract_text_from_pdf(pdf_path):
    text = ""
    doc = fitz.open(pdf_path)
    for page in doc:
        text = text + page.get_text("text")+"\n"
    return text.strip()

if __name__=="__main__":
    pdf_path = "../../data/books/class10_science.pdf"
    extracted_text = extract_text_from_pdf(pdf_path)