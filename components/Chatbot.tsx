
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";

const ChatIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
    </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
);


interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm Sammy's virtual assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the chat session
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    chatRef.current = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are Sammy Jay, a friendly and professional creative specializing in web design, 2D/3D illustration, and animation. You are chatting with a potential client on your portfolio website. Your goal is to be helpful and answer their questions. Use the information provided on the site to answer questions about your services, process, and background. Keep your answers concise and engaging, reflecting a passion for art and technology.",
      },
    });
  }, []);

  useEffect(() => {
    // Auto-scroll to the latest message
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage: Message = { text: userInput, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
        if (chatRef.current) {
            const response = await chatRef.current.sendMessage({ message: userInput });
            const botMessage: Message = { text: response.text, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
        }
    } catch (error) {
        console.error("Chatbot error:", error);
        const errorMessage: Message = { text: "Sorry, I'm having trouble connecting right now. Please try again later.", sender: 'bot' };
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      <div className={`fixed bottom-24 right-5 sm:right-10 w-80 sm:w-96 h-[500px] bg-gray-800 rounded-lg shadow-2xl flex flex-col transition-all duration-300 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-gray-900 p-4 flex justify-between items-center rounded-t-lg">
          <h3 className="font-bold text-white">Chat with Sammy</h3>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div ref={chatContainerRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
                 <div className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                    </div>
                 </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700 flex items-center">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask something..."
            className="flex-1 bg-gray-700 border-none rounded-full py-2 px-4 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
            disabled={isLoading}
          />
          <button type="submit" className="ml-3 text-cyan-400 hover:text-cyan-300 disabled:text-gray-500" disabled={isLoading || !userInput.trim()}>
            <SendIcon className="w-6 h-6" />
          </button>
        </form>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 sm:right-10 bg-cyan-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-cyan-600 transition-all duration-300 ease-in-out z-50 transform hover:scale-110"
        aria-label="Open chat"
      >
        <ChatIcon className="w-8 h-8"/>
      </button>
    </>
  );
};

export default Chatbot;