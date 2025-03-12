"use client";

export default function MessageList({ messages }) {
  // Filter out system messages
  const visibleMessages = messages.filter(msg => msg.role !== 'system');
  
  if (visibleMessages.length === 0) {
    return (
      <div className="text-center text-gray-500 my-8">
        <p>Your conversation will appear here.</p>
        <p className="mt-2">Try asking something like:</p>
        <ul className="mt-2 text-gray-600">
          <li>"What is the main finding of this paper?"</li>
          <li>"Summarize the methodology section"</li>
          <li>"What are the limitations mentioned in this study?"</li>
        </ul>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {visibleMessages.map((message, index) => (
        <div
          key={index}
          className={`p-3 rounded-lg ${
            message.role === 'user'
              ? 'bg-blue-100 ml-auto max-w-3/4'
              : 'bg-gray-100 mr-auto max-w-3/4'
          }`}
        >
          <div className="font-bold mb-1">
            {message.role === 'user' ? 'You' : 'AI Assistant'}
          </div>
          <div className="whitespace-pre-wrap">{message.content}</div>
        </div>
      ))}
    </div>
  );
}