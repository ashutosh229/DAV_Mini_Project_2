"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function QuestionForm({ 
  onAskQuestion, 
  isFileUploaded 
}: { 
  onAskQuestion: (question: string) => void;
  isFileUploaded: boolean;
}) {
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) return;
    
    setIsLoading(true);
    
    try {
      // In a real implementation, this would call the backend API
      await onAskQuestion(question);
      
      // Clear the question after successful submission
      setQuestion("");
    } catch (error) {
      console.error("Error asking question:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.form 
        onSubmit={handleSubmit}
        className="w-full space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Textarea
          placeholder={isFileUploaded ? "Ask a question about your document..." : "Upload a document first to ask questions"}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="min-h-[100px] resize-none focus-visible:ring-primary"
          disabled={!isFileUploaded || isLoading}
        />
        <div className="flex justify-end">
          <Button 
            type="submit" 
            disabled={!isFileUploaded || !question.trim() || isLoading}
            className="gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Ask Question
              </>
            )}
          </Button>
        </div>
      </motion.form>
    </AnimatePresence>
  );
}