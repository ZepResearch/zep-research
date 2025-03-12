"use client";

import { useState, useRef, useEffect } from 'react';
import MessageList from './MessageList';

export default function Chat({ pdfContent, onRelevantPageFound }) {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'I am an AI assistant that helps with research papers. Ask me anything about the uploaded paper.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          pdfContent,
          findRelevantPage: true, // Add this flag to request page info
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();
      
      // Update messages with AI response
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      
      // If a relevant page was found, notify parent component
      if (data.relevantPage && onRelevantPageFound) {
        onRelevantPageFound(data.relevantPage);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: `Sorry, there was an error: ${error.message || 'Error processing your request.'}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col h-full border rounded-lg shadow-sm">
      <div className="flex-1 overflow-y-auto p-4">
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="border-t p-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about the paper..."
          className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`px-4 py-2 rounded-r ${
            isLoading
              ? 'bg-gray-400'
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
          disabled={isLoading}
        >
          {isLoading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
}