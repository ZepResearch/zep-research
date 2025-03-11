"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Send, Upload } from "lucide-react"



export default function DemoChatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I've analyzed your research papers on quantum computing and neural networks. What would you like to know about them?",
    },
  ])

  const [input, setInput] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])
    setInput("")

    // Simulate AI response after a short delay
    setTimeout(() => {
      const responses = [
        "Based on the papers you've uploaded, the key finding is that quantum neural networks can achieve a 30% improvement in classification tasks compared to classical approaches.",
        "The methodology section in your quantum computing paper describes a novel approach using topological qubits that showed a 42% reduction in decoherence.",
        "When comparing the two papers, I notice that both use similar mathematical frameworks but apply them to different domains. Would you like me to elaborate on the connections?",
        "The limitations section mentions scalability issues when quantum circuits exceed 50 qubits. Recent research suggests this can be mitigated using the techniques described on page 14.",
      ]

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: responses[Math.floor(Math.random() * responses.length)],
        },
      ])
    }, 1000)
  }

  const simulateUpload = () => {
    setIsUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)

          // Add system message about upload
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                "I've successfully processed your new research paper on 'Advanced Quantum Computing Applications in Machine Learning'. You now have 3 papers uploaded. What would you like to know about them?",
            },
          ])

          return 0
        }
        return prev + 5
      })
    }, 100)
  }

  return (
    <div className="flex flex-col h-[500px] rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950">
      {/* Chat Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-white">Research Assistant</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">2 PDFs uploaded</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={simulateUpload}
          disabled={true}
        >
          <Upload className="h-4 w-4" />
          <span>Upload PDF</span>
        </Button>
      </div>

      {/* Upload Progress */}
      {isUploading && (
        <div className="px-4 py-2 bg-primary/5 border-b border-primary/10">
          <div className="flex justify-between text-xs mb-1">
            <span>Uploading quantum-ml-research.pdf...</span>
            <span>{uploadProgress}%</span>
          </div>
          <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${uploadProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <div className="flex gap-2">
          <Input
            placeholder="Ask about your research papers..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

