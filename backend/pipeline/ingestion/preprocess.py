import re
from langdetect import detect

def preprocess_text(text):
    text = re.sub(r'\n+', " ", text)
    text = re.sub(r'\s+'," ", text)
    language = detect(text)
    return text.strip(), language
