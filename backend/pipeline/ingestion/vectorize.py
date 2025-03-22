from sentence_transformers import SentenceTransformer

english_model = SentenceTransformer("all-MiniLM-L6-v2")
hindi_model = SentenceTransformer("ai4bharat/indic-bert")

def get_embedding(text, language):
    model = english_model if language == "en" else hindi_model
    return model.encode(text)    