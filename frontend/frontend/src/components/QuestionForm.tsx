"use client";

import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadDocument, fetchAnswer } from "../utils/api";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function QuestionForm() {
  const [docId, setDocId] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures the component is mounted before rendering client-side data
  }, []);

  const uploadMutation = useMutation({
    mutationFn: uploadDocument,
    onSuccess: (data) => setDocId(data.doc_id),
  });

  const getAnswerMutation = useMutation({
    mutationFn: () => fetchAnswer(question, docId!),
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    onDrop: (acceptedFiles) => uploadMutation.mutate(acceptedFiles[0]),
  });

  if (!isMounted) {
    return null; // Prevents hydration mismatch by skipping rendering on SSR
  }

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
          {uploadMutation.isPending
            ? "Uploading..."
            : "Drop a PDF or click to upload"}
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
          onClick={() => getAnswerMutation.mutate()}
          disabled={!docId || getAnswerMutation.isPending}
        >
          {getAnswerMutation.isPending ? "Processing..." : "Get Answer"}
        </Button>

        {/* Display Answer */}
        {getAnswerMutation.data && (
          <CardContent className="mt-4">
            <p className="font-semibold">Answer:</p>
            <p className="text-blue-600">{getAnswerMutation.data.answer}</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
