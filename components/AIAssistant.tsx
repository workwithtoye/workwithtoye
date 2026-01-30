import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getAIResponse } from '../services/gemini';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "> INITIALIZING ZENITH V1.0...\n> SYSTEM READY.\n> WAITING FOR INPUT..." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    const response = await getAIResponse(input);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-black border-2 border-black dark:border-white w-[320px] md:w-[400px] h-[500px] flex flex-col shadow-none font-mono text-xs">
          {/* Terminal Header */}
          <div className="bg-black dark:bg-white text-white dark:text-black px-3 py-2 flex justify-between items-center select-none">
            <span className="uppercase tracking-widest font-bold">Terminal -- Zenith</span>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white px-1">
              [X]
            </button>
          </div>
          
          {/* Terminal Output */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-black text-black dark:text-white">
            {messages.map((m, i) => (
              <div key={i} className="flex flex-col gap-1 break-words">
                <span className={`uppercase opacity-50 mb-0.5 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                  {m.role === 'user' ? 'USER@LOC' : 'ROOT@ZENITH'}
                </span>
                <div className={`${m.role === 'user' ? 'text-right' : 'text-left whitespace-pre-wrap'}`}>
                  <span className="mr-2 opacity-50">{m.role === 'assistant' ? '>' : ''}</span>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="animate-pulse">> PROCESSING REQUEST...</div>
            )}
          </div>

          {/* Terminal Input */}
          <div className="p-3 border-t-2 border-black dark:border-white bg-white dark:bg-black">
            <div className="flex gap-2 items-center">
              <span className="text-black dark:text-white animate-pulse">_</span>
              <input 
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="TYPE COMMAND..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-black dark:text-white placeholder-gray-500 uppercase outline-none p-0"
              />
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black dark:bg-white text-white dark:text-black w-12 h-12 flex items-center justify-center border border-transparent hover:border-black dark:hover:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-300 mono text-[10px] font-bold"
        >
          CMD
        </button>
      )}
    </div>
  );
};