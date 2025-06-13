import { useState } from "react";
import Dialer from "./Dialer";

const initialMessages = [
  {
    id: "1",
    content: "Called from Yealink H5vDx1 (HW-2018)",
    sender: "contact",
    timestamp: "Outbound Call • 0:38",
    timeAgo: "12 days ago",
    isCall: true,
  },
  {
    id: "2",
    content: "Updated conversation sync from May 1st to 25th, 2023",
    sender: "system",
    timestamp: "",
    timeAgo: "11 minutes ago",
  },
  {
    id: "3",
    content: "Hi, this is Paul from Acme Inc. How can I help you know about our product?",
    sender: "user",
    timestamp: "",
    timeAgo: "11 minutes ago",
  },
  {
    id: "4",
    content: "Hello, lorem ipsum dolor sit amet adipiscing elit alala lipore site amet everest adipisement",
    sender: "contact",
    timestamp: "",
    timeAgo: "10 minutes ago",
  },
  {
    id: "5",
    content: "Called from Yealink H5vDx1 (HW-2018)",
    sender: "contact",
    timestamp: "Outbound Call • 0:38",
    timeAgo: "8 minutes ago",
    isCall: true,
  },
];

function ChatPanel({ selectedContact }) {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [showDialer, setShowDialer] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: String(messages.length + 1),
          content: newMessage,
          sender: "user",
          timestamp: "",
          timeAgo: "Just now",
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full border-r border-gray-200">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{selectedContact.name}</span>
          <span className="text-xs text-gray-500">Saturday, May 1st</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[#3b82f6] text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Mark all as Read
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            {message.sender === "contact" && !message.isCall && (
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-2 mt-1">
                <img
                  src={selectedContact.avatar || "/placeholder.svg"}
                  alt={selectedContact.name}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className={`max-w-[80%] ${message.sender === "user" ? "order-1" : "order-2"}`}>
              {message.isCall ? (
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-gray-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <div className="text-sm">{message.content}</div>
                    <div className="text-xs text-gray-500">{message.timestamp}</div>
                  </div>
                </div>
              ) : message.sender === "system" ? (
                <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-center">{message.content}</div>
              ) : (
                <div
                  className={`rounded-lg px-3 py-2 text-sm ${
                    message.sender === "user" ? "bg-[#3b82f6] text-white" : "bg-gray-100"
                  }`}
                >
                  {message.content}
                </div>
              )}

              {message.timeAgo && (
                <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <span>{message.timeAgo}</span>
                </div>
              )}
            </div>

            {message.sender === "user" && (
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 ml-2 mt-1">
                P
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-4 mb-2">
          <button className="text-xs text-gray-600 hover:text-gray-900">Text</button>
          <button className="text-xs text-gray-600 hover:text-gray-900">Files</button>
          <button className="text-xs text-gray-600 hover:text-gray-900">Email</button>
          <button className="text-xs text-gray-600 hover:text-gray-900">Note</button>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <button
            onClick={handleSendMessage}
            className="px-3 py-2 bg-[#3b82f6] text-white rounded-md flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-1"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            Send Text
          </button>
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>To: +1 (236) 3855</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Privacy</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
      {showDialer && (
        <Dialer onClose={() => setShowDialer(false)} name={selectedContact.name} phoneNumber={selectedContact.phone} />
      )}
    </div>
  );
}

export default ChatPanel;