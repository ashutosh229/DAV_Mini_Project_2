"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadDocument } from "@/app/api/upload";
import { fetchAnswer } from "@/app/api/fetchAnswer";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function QuestionForm() {
  const [docId, setDocId] = useState<string | null>(null);
  const [question, setQuestion] = useState("");

  // Mutation for file upload
  const uploadMutation = useMutation({
    mutationFn: uploadDocument,
    onSuccess: (data) => setDocId(data.doc_id),
  });

  // Mutation for fetching answer
  const answerMutation = useMutation({
    mutationFn: async () => {
      if (!docId) throw new Error("No document uploaded");
      return fetchAnswer(question, docId);
    },
  });

  // File upload handler using react-dropzone
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    onDrop: (acceptedFiles) => uploadMutation.mutate(acceptedFiles[0]),
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

        {/* Get Answer Button */}
        <Button
          className="mt-4 w-full"
          onClick={() => answerMutation.mutate()}
          disabled={!docId || answerMutation.isPending}
        >
          {answerMutation.isPending ? "Processing..." : "Get Answer"}
        </Button>

        {/* Display Answer */}
        {answerMutation.data && (
          <CardContent className="mt-4">
            <p className="font-semibold">Answer:</p>
            <p className="text-blue-600">{answerMutation.data.answer}</p>
          </CardContent>
        )}

        {/* Error Message */}
        {answerMutation.isError && (
          <p className="text-red-500 mt-2">{answerMutation.error?.message}</p>
        )}
      </Card>
    </div>
  );
}
