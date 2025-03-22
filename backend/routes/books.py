from fastapi import APIRouter
from database import SessionLocal, Book

router = APIRouter()

@router.get("/get_books")
def get_books():
    db = SessionLocal()
    books = db.query(Book).all
    return {
        "books":books
    }
    