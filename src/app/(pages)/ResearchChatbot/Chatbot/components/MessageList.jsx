"use client"

import { motion } from "framer-motion"
import { Bot, User } from "lucide-react"

export default function MessageList({ messages, onSuggestionClick }) {
  // Filter out system messages
  const visibleMessages = messages.filter((msg) => msg.role !== "system")

  if (visibleMessages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400 my-8 space-y-4">
        <Bot className="h-12 w-12 text-gray-300 dark:text-gray-600" />
        <div>
          <p className="font-medium text-gray-700 dark:text-gray-300">Ask me about your research paper</p>
          <p className="mt-1 text-sm">I can help you understand the content, methodology, and findings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 w-full max-w-md">
          {[
            "What is the main finding of this paper?",
            "Summarize the methodology section",
            "What are the limitations mentioned?",
            "Explain the key concepts in simple terms",
          ].map((suggestion, index) => (
            <button
              key={index}
              className="text-left p-2 text-sm border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => {
                if (typeof onSuggestionClick === "function") {
                  onSuggestionClick(suggestion)
                }
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {visibleMessages.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`flex  ${message.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`rounded-lg p-3 max-w-[85%]  shadow-sm ${
              message.role === "user"
                ? "bg-gradient-to-tr from-cyan-400 to-blue-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            }`}
          >
            <div className="flex items-center space-x-2 mb-1 border-b-[0.1px] border-opacity-30 border-white">
              {message.role === "user" ? (
                <>
                  <User className="h-5 w-5" />
                  <span className="font-medium">You</span>
                </>
              ) : (
                <>
                  <Bot className="h-5 w-5" />
                  <span className="font-medium">AI Assistant</span>
                </>
              )}
            </div>
            <div className="whitespace-pre-wrap text-sm">{message.content}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

