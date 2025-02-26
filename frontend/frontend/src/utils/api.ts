import axios from "axios";

const API_BASE_URL = "http://localhost:8080";  // Backend URL

export const uploadDocument = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${API_BASE_URL}/upload/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};

export const fetchAnswer = async (question: string, docId: string) => {
  const response = await axios.post(`${API_BASE_URL}/answer/`, { question, doc_id: docId });
  return response.data;
};
