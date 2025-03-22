from fastapi import APIRouter
from pipeline.retrieval.query_faiss import retrieve_passages
from pipeline.retrieval.answer_generator import generate_answer


router = APIRouter()

@router.post("/ask_question")
def ask_question(question, book_name):
    context = retrieve_passages(question, book_name)
    answer = generate_answer(context, question)
    return {"question":question, "answer": answer,"context":context}