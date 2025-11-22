import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Zap, Terminal } from 'lucide-react';
import { generateRecruitResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: 'ようこそ！ZAGAROのAI先輩だ。Web、AI、ゲーム開発...君は何に興味がある？なんでも聞いてくれ。' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    
    // Add User Message
    const newMessages: ChatMessage[] = [
      ...messages, 
      { id: Date.now().toString(), role: 'user', text: userText }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    // Prepare history for API
    const history = newMessages.map(m => ({
      role: m.role === 'user' ? 'user' as const : 'model' as const,
      parts: [{ text: m.text }]
    }));

    // Call API
    const responseText = await generateRecruitResponse(userText, history);

    setMessages(prev => [
      ...prev,
      { id: (Date.now() + 1).toString(), role: 'model', text: responseText }
    ]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-6 z-50 font-sans">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-5 rounded-none shadow-2xl hover:bg-emerald-600 transition-all duration-300 flex items-center gap-3 group border border-emerald-500/50"
        >
          <Terminal size={20} className="text-emerald-400 group-hover:text-white" />
          <span className="hidden md:inline text-xs font-bold font-syncopate tracking-widest">ASK AI SENPAI</span>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      <div
        className={`bg-stone-900 rounded-none shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-in-out origin-bottom-right border border-emerald-500/30 ${
          isOpen
            ? 'w-[90vw] md:w-[380px] h-[550px] opacity-100 scale-100 translate-y-0'
            : 'w-0 h-0 opacity-0 scale-90 translate-y-12 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-black text-white p-4 flex justify-between items-center border-b border-emerald-900">
          <div className="flex items-center gap-3">
            <Terminal size={16} className="text-emerald-500" />
            <span className="font-bold tracking-widest text-xs font-syncopate text-emerald-500">ZAGARO_AI_BOT</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:text-emerald-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 bg-black/90 space-y-6 scroll-smooth font-mono text-sm bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center flex-shrink-0 border ${
                  msg.role === 'user' ? 'bg-stone-800 text-white border-stone-600' : 'bg-emerald-900/20 text-emerald-400 border-emerald-500/50'
                }`}
              >
                {msg.role === 'user' ? <div className="w-2 h-2 bg-white rounded-full"></div> : <Zap size={14} />}
              </div>
              <div
                className={`max-w-[85%] p-3 text-xs leading-relaxed border ${
                  msg.role === 'user'
                    ? 'bg-stone-800 border-stone-700 text-stone-200'
                    : 'bg-emerald-900/10 border-emerald-500/30 text-emerald-100'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-emerald-500/50 text-xs ml-12">
              <span className="animate-pulse">PROCESSING...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-black border-t border-emerald-900">
          <div className="flex items-center gap-2 bg-stone-900 border border-stone-700 p-2 focus-within:border-emerald-500 transition-colors">
            <span className="text-emerald-500 font-bold px-2">{'>'}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Input command..."
              className="bg-transparent flex-1 focus:outline-none text-xs text-white placeholder-stone-600 font-mono"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={`text-stone-400 hover:text-emerald-500 transition-colors ${
                !input.trim() ? 'opacity-30' : ''
              }`}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;