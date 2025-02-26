import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FileText, Brain, Shield, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                About DocuQuery
              </h1>
              <p className="text-xl text-muted-foreground">
                Transforming how you interact with documents through AI-powered question answering.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-8">
                DocuQuery was created to solve a common problem: extracting specific information from large documents quickly and accurately. Our mission is to make document analysis effortless through intuitive AI technology.
              </p>
              
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Document Upload</h3>
                    <p className="text-muted-foreground">
                      Upload your documents in various formats including PDF, TXT, and DOCX. Our system processes and indexes the content for quick retrieval.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary shrink-0">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
                    <p className="text-muted-foreground">
                      Our advanced AI models analyze the document content, understanding context, relationships, and key information points.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary shrink-0">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instant Answers</h3>
                    <p className="text-muted-foreground">
                      Ask questions in natural language and receive precise answers extracted directly from your document, saving you time and effort.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Privacy & Security</h3>
                    <p className="text-muted-foreground">
                      Your documents and questions are processed securely. We prioritize data privacy and implement robust security measures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
              <p className="text-lg mb-8">
                DocuQuery combines cutting-edge natural language processing, machine learning, and information retrieval techniques to deliver accurate answers from document content.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                  <p className="text-muted-foreground">
                    Built with Next.js and React, our interface provides a smooth, responsive experience with modern animations and intuitive design.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Backend</h3>
                  <p className="text-muted-foreground">
                    Powered by FastAPI, our backend processes documents and questions efficiently, leveraging advanced AI models for accurate information extraction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}