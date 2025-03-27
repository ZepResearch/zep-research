"use client"

import { useState, useEffect, useRef } from "react"

const Chat = ({ pdfContent, onRelevantPageFound }) => {
  const [messageLimit, setMessageLimit] = useState({ count: 0, isPremium: false })
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef(null)

  // Fetch message limit on component mount
  useEffect(() => {
    const fetchMessageLimit = async () => {
      try {
        const { getUserMessageLimit } = await import("@/lib/message-limit")
        const userLimit = await getUserMessageLimit()
        if (userLimit) {
          setMessageLimit({
            count: userLimit.messageCount,
            isPremium: userLimit.isPremium,
          })

          // If user has already reached their limit and is not premium, redirect to payment page
          if (userLimit.messageCount >= 5 && !userLimit.isPremium) {
            setMessages((prev) => [
              ...prev,
              {
                role: "assistant",
                content: "You've reached your message limit. Please upgrade to continue chatting.",
              },
            ])

            setTimeout(() => {
              window.location.href = "/payment"
            }, 2000)
          }
        }
      } catch (error) {
        console.error("Error fetching message limit:", error)
      }
    }

    fetchMessageLimit()
  }, [])

  const handleSubmit = async (e) => {
    e?.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Check message limit before processing
      const { incrementMessageCount } = await import("@/lib/message-limit")
      const limitResult = await incrementMessageCount()

      // Update the message limit state
      setMessageLimit({
        count: limitResult.messageCount,
        isPremium: limitResult.isPremium,
      })

      // If limit reached and not premium, redirect to payment page
      if (limitResult.reachedLimit && !limitResult.isPremium) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "You've reached your message limit. Please upgrade to continue chatting.",
          },
        ])

        setTimeout(() => {
          window.location.href = "/payment"
        }, 2000)

        setIsLoading(false)
        return
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          pdfContent,
          findRelevantPage: true,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to get response")
      }

      const data = await response.json()

      // Update messages with AI response
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }])

      // If a relevant page was found, notify parent component
      if (data.relevantPage && onRelevantPageFound) {
        onRelevantPageFound(data.relevantPage)
      }
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Sorry, there was an error: ${error.message || "Error processing your request."}`,
        },
      ])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    <div className="flex flex-col h-full">
      {!messageLimit.isPremium && (
        <div className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 text-xs flex justify-between">
          <span>Free messages: {5 - messageLimit.count} remaining</span>
          <a href="/payment" className="underline">
            Upgrade
          </a>
        </div>
      )}
      {messageLimit.isPremium && (
        <div className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 text-xs">
          <span>Premium account: Unlimited messages</span>
        </div>
      )}
      <div className="p-3 border-b dark:border-gray-700">
        <h3 className="font-medium">Chat with your document</h3>
      </div>
      {/* Chat content will go here */}
      <div className="flex-1 overflow-y-auto p-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-md ${
              message.role === "user" ? "bg-gray-100 dark:bg-gray-700" : "bg-blue-100 dark:bg-blue-700"
            }`}
          >
            <p className="text-sm font-medium">{message.role === "user" ? "You" : "Assistant"}</p>
            <p className="text-sm">{message.content}</p>
          </div>
        ))}
        {isLoading && (
          <div className="mb-2 p-2 rounded-md bg-blue-100 dark:bg-blue-700">
            <p className="text-sm font-medium">Assistant</p>
            <p className="text-sm">Loading...</p>
          </div>
        )}
      </div>
      <div className="p-3">
        <form onSubmit={handleSubmit} className="flex">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-l-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 disabled:bg-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat

