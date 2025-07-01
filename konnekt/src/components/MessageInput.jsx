export default function MessageInput() {
  return (
    <div className="bg-white p-4 border-t flex items-center">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 border rounded-lg p-2 mr-2"
      />
      <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
        Send
      </button>
    </div>
  )
}
