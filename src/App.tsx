import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { ChatContainer } from './components/ChatContainer';
import { ChatInput } from './components/ChatInput';
import { Message } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (text: string, sender: 'user' | 'other') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = (text: string) => {
    addMessage(text, 'user');
    // Simulate a response after 1 second
    setTimeout(() => {
      addMessage('Thanks for your message! This is a demo response.', 'other');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white p-4 flex items-center gap-2">
          <MessageCircle />
          <h1 className="text-xl font-semibold">Chat App</h1>
        </div>
        
        {/* Chat Container */}
        <div className="flex flex-col h-[600px]">
          <ChatContainer messages={messages} />
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;