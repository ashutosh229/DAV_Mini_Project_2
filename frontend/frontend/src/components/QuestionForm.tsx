"use client";

import { useState } from "react";
import { uploadDocument } from "@/app/api/upload";
import { fetchAnswer } from "@/app/api/fetchAnswer";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function QuestionForm() {
  const [docId, setDocId] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // File upload handler
  const handleUpload = async (file: File) => {
    setIsUploading(true);
    setError(null);

    try {
      const data = await uploadDocument(file);
      setDocId(data.doc_id);
    } catch (err) {
      setError("File upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  // Question submission handler
  const handleQuestionSubmit = async () => {
    if (!docId || !question) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchAnswer(question, docId);
      setAnswer(data.answer);
    } catch (err) {
      setError("Failed to fetch answer.");
    } finally {
      setIsLoading(false);
    }
  };

  // React Dropzone
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    onDrop: (acceptedFiles) => handleUpload(acceptedFiles[0]),
  });

  return (
    <div className="max-w-xl mx-auto p-4">
      <Card className="p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Document QA System</h2>

        {/* File Upload */}
        <div
          {...getRootProps()}
          className="border-dashed border-2 p-4 text-center cursor-pointer"
        >
          <input {...getInputProps()} />
          {isUploading ? "Uploading..." : "Drop a PDF or click to upload"}
        </div>

        {docId && (
          <p className="text-green-500 mt-2">File uploaded successfully!</p>
        )}

        {/* Question Input */}
        <Input
          className="mt-4"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={!docId}
        />

        <Button
          className="mt-4 w-full"
          onClick={handleQuestionSubmit}
          disabled={!docId || isLoading}
        >
          {isLoading ? "Processing..." : "Get Answer"}
        </Button>

        {/* Display Answer */}
        {answer && (
          <CardContent className="mt-4">
            <p className="font-semibold">Answer:</p>
            <p className="text-blue-600">{answer}</p>
          </CardContent>
        )}

        {/* Error Message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </Card>
    </div>
  );
}
