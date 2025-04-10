"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, CheckCheck } from "lucide-react";
import { motion } from "framer-motion";

interface AnswerDisplayProps {
  question: string;
  answer: string;
}

export function AnswerDisplay({ question, answer }: AnswerDisplayProps) {
  const [copied, setCopied] = useState(false);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!answer) {
      setDisplayedAnswer("");
      setCurrentIndex(0);
      return;
    }

    // Reset when a new answer comes in
    if (currentIndex === 0 || displayedAnswer.length === answer.length) {
      setDisplayedAnswer("");
      setCurrentIndex(0);
    }

    // Typewriter effect
    const interval = setInterval(() => {
      if (currentIndex < answer.length) {
        setDisplayedAnswer(prev => prev + answer[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 15); // Speed of typing

    return () => clearInterval(interval);
  }, [answer, currentIndex]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(answer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!question || !answer) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="overflow-hidden border-primary/20 shadow-lg">
        <div className="bg-primary/5 p-4 border-b">
          <h3 className="font-medium">Question:</h3>
          <p className="text-sm mt-1">{question}</p>
        </div>
        <CardContent className="p-4 relative">
          <div className="flex justify-between items-start">
            <h3 className="font-medium mb-2">Answer:</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={copyToClipboard}
            >
              {copied ? (
                <CheckCheck className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="whitespace-pre-line min-h-[100px]">
              {displayedAnswer}
              {currentIndex < answer.length && (
                <span className="animate-pulse">|</span>
              )}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}