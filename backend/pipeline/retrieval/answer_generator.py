from transformers import pipeline, AutoModelForTokenClassification, AutoTokenizer

qa_pipeline = pipeline("text-generation", model="mistralai/Mistral-7B-Instruct-v0.1", device_map="auto")

def generate_answer(context, question):
    prompt = f"Context: {context}\n\nQuestion: {question}\nAnswer:"
    response = qa_pipeline(prompt, max_length = 500, num_return_sequences=1)
    return response[0]["generated_text"].split("Answer:")[-1].strip()