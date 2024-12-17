import React from 'react';
import { MessageSquare } from 'lucide-react';
import { ChatBubble } from './ChatBubble';
import { Message } from '../types';

interface ChatContainerProps {
  messages: Message[];
}

export function ChatContainer({ messages }: ChatContainerProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-gray-500">
          <MessageSquare size={48} className="mb-2" />
          <p>No messages yet. Start a conversation!</p>
        </div>
      ) : (
        messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))
      )}
    </div>
  );
}