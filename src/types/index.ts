export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'other';
  timestamp: Date;
}

export interface ChatMessage {
  messages: Message[];
  addMessage: (text: string, sender: 'user' | 'other') => void;
}