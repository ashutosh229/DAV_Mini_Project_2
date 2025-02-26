from fastapi import FastAPI, File, UploadFile, Form
from pydantic import BaseModel
from transformers import pipeline
import fitz  # PyMuPDF

app = FastAPI()

# Load the NLP model
qa_pipeline = pipeline("question-answering", model="deepset/roberta-base-squad2")

# Store uploaded document text
documents = {}

class QuestionInput(BaseModel):
    question: str
    doc_id: str  # Reference to uploaded document

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    """
    Uploads a PDF file and extracts text from it.
    """
    contents = await file.read()
    doc = fitz.open(stream=contents, filetype="pdf")
    
    text = "\n".join([page.get_text() for page in doc])
    doc_id = file.filename  # Use filename as document ID

    documents[doc_id] = text  # Store text in memory

    return {"message": "File uploaded successfully", "doc_id": doc_id}

@app.post("/answer/")
async def get_answer(data: QuestionInput):
    """
    Processes the question based on the uploaded document.
    """
    if data.doc_id not in documents:
        return {"error": "Document not found"}

    context = documents[data.doc_id]  # Retrieve document text
    result = qa_pipeline(question=data.question, context=context)

    return {"answer": result["answer"], "score": result["score"]}
