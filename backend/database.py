import os   
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from dotenv import load_dotenv

load_dotenv()

database_url = os.getenv("DATABASE_URL")

print(database_url)

engine = create_engine(database_url)
SessionLocal = sessionmaker(autoflush=False, bind=engine)
Base =  declarative_base()

class Book(Base):
    __tablename__ = "books"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    class_number = Column(Integer, index=True)
    subject = Column(String, index=True)
    language = Column(String, index=True)
    file_path = Column(String)
    
def init_db():
    Base.metadata.create_all(bind = engine)
