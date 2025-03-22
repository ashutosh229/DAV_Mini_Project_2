from fastapi import FastAPI

app = FastAPI(title="DBQAS for NCERT Books")

@app.get("/")
def home():
    return {
        "message":"Welcome to application"
    }