import { useState } from 'react';

export default function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSend(message);
    setMessage("");
  }

  return (
    <div className="bg-white p-4 border-t flex items-center">
      <form onSubmit={handleSubmit} className="flex w-full">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-lg p-2 mr-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
          Send
        </button>
      </form>
    </div>
  );
}
