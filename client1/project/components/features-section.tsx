"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, Zap, Shield, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Multiple Document Formats",
    description: "Upload PDF, TXT, DOCX and other document formats for analysis."
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Intelligent Search",
    description: "Ask questions in natural language and get precise answers from your documents."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast Processing",
    description: "Get answers in seconds, no matter how large your document is."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure & Private",
    description: "Your documents are processed securely and never shared with third parties."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Save Time",
    description: "Extract information quickly without reading through entire documents."
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered",
    description: "Advanced AI models understand context and provide relevant answers."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-accent/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            DocuQuery combines advanced AI with an intuitive interface to help you extract information from your documents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/80">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}