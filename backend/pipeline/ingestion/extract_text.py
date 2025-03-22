import fitz
import os 

def extract_text_from_pdf(pdf_path):
    text = ""
    doc = fitz.open(pdf_path)
    for page in doc:
        text = text + page.get_text("text")+"\n"
    return text.strip()

def extract_text_from_folder(path):
    all_text = ""
    pdf_files = sorted([f for f in os.listdir(path) if f.endswith(".pdf")])
    for pdf_file in pdf_files:
        pdf_path = os.path.join(path,pdf_file)
        all_text = all_text + extract_text_from_pdf(pdf_path) + "\n\n"
    return all_text.strip()

if __name__=="__main__":
    folder_path = "../../data/books/class_10_science"
    extracted_text = extract_text_from_folder(folder_path)
    with open("../../data/books_text/class10_science_text.txt", "w", encoding="utf-8") as f:
        f.write(extracted_text)
    print(extracted_text[:500])
    