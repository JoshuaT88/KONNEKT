import React from "react";

export default function ChatWindow({ messages }) {
  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
      {messages.map((msg, index) => (
        <div key={index} className="bg-white shadow p-2 rounded mb-2">
          {msg}
        </div>
      ))}
    </div>
  );
}
