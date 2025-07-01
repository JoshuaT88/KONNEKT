import { useState } from 'react';

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'


function App() {
  const [messages, setMessages] = useState([]);

  function handleSend(newMessage) {
  setMessages([...messages, newMessage]);
}

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <ChatWindow />
        <MessageInput onSend={handleSend} />

      </div>
      <div>
  {messages.map((msg, index) => (
    <p key={index}>{msg}</p>
  ))}
</div>

    </div>
  )
}

export default App