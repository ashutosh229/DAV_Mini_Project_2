import faiss
import numpy as np
import json

dimension = 384 
index = faiss.IndexFlatL2(dimension)

def store_embeddings(book_name,texts,embeddings):
    vectors = np.array(embeddings).astype("float32")
    index.add(vectors)
    with open(f"../../data/processed/{book_name}_metadata.json","w") as f:
        json.dump(texts, f)
    faiss.write_index(index, f"../../data/processed/{book_name}_faiss.index")