import faiss
import json
import numpy as np 


def retrieve_passages(query, model, metadata_file, book_name):
    index = faiss.read_index("../../data/processed/{book_name}_faiss.index")
    query_embedding = model.encode([query])[0]
    query_vector = np.array([query_embedding]).astype("float32")
    distances, indices = index.search(query_vector, k=5)
    with open(metadata_file, "r") as f:
        texts = json.load(f)
    results = [texts[idx] for idx in indices[0]]
    return results