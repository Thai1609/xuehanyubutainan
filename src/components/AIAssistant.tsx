import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Loader2, Volume2, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { chatWithTutor } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Chào bạn! Tôi là **Xiao Ai**. Tôi sẽ giúp bạn chinh phục **301 mẫu câu đàm thoại** và các trình độ HSK. Bạn muốn bắt đầu với chủ đề nào?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [level, setLevel] = useState('301 Đàm thoại');
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const playAudio = (text: string, index: number) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    
    // Remove markdown symbols for better pronunciation
    const cleanText = text.replace(/[*#]/g, '');
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.includes('zh-CN') && v.name.includes('Google')) || 
                    voices.find(v => v.lang.includes('zh-CN')) ||
                    voices.find(v => v.lang.includes('zh'));
    
    if (zhVoice) utterance.voice = zhVoice;
    utterance.lang = 'zh-CN';
    utterance.rate = 0.7;
    
    setIsPlaying(index);
    utterance.onend = () => setIsPlaying(null);
    utterance.onerror = () => setIsPlaying(null);
    
    window.speechSynthesis.speak(utterance);
  };

  const levels = ['301 Đàm thoại', 'HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithTutor(userMessage, history, level);
    setMessages(prev => [...prev, { role: 'model', text: response || 'Lỗi kết nối' }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] min-h-[500px] border border-orange-100 rounded-[40px] bg-white shadow-2xl overflow-hidden relative">
      {/* Header */}
      <div className="p-8 border-b border-gray-50 bg-white flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-3xl shadow-sm border-2 border-white">
            🤖
          </div>
          <div>
            <h3 className="font-bold text-xl text-gray-800 leading-none mb-1">Xiao Ai</h3>
            <div className="text-[10px] text-green-500 flex items-center gap-1.5 font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Đang trực tuyến
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-end max-w-[200px]">
          {levels.map(l => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={cn(
                "px-2 py-0.5 rounded-full text-[9px] font-bold transition-all",
                level === l 
                  ? "bg-orange-500 text-white shadow-md shadow-orange-100" 
                  : "bg-gray-50 text-gray-400 hover:bg-gray-100"
              )}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-8 space-y-6 bg-[#FAFAFA]/50 scroll-smooth"
      >
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={cn(
              "flex w-full items-start gap-4",
              m.role === 'user' ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div className={cn(
              "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 mt-1 shadow-sm font-bold text-lg",
              m.role === 'user' ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"
            )}>
              {m.role === 'user' ? 'Me' : '汉'}
            </div>
            <div className={cn(
              "max-w-[75%] rounded-[28px] px-6 py-4 text-sm shadow-sm leading-relaxed relative group",
              m.role === 'user' 
                ? "bg-orange-500 text-white rounded-tr-none shadow-orange-100" 
                : "bg-white border border-gray-100 text-gray-700 rounded-tl-none"
            )}>
              <div className="prose prose-sm prose-slate max-w-none dark:prose-invert prose-headings:text-inherit">
                <ReactMarkdown>{m.text}</ReactMarkdown>
              </div>
              
              {m.role === 'model' && (
                <button 
                  onClick={() => playAudio(m.text, i)}
                  className={cn(
                    "absolute -right-12 top-2 p-2 rounded-xl transition-all opacity-0 group-hover:opacity-100",
                    isPlaying === i ? "bg-green-500 text-white opacity-100 animate-pulse" : "bg-white border border-gray-100 text-gray-400 hover:text-green-500 hover:border-green-200"
                  )}
                >
                  <Volume2 size={16} />
                </button>
              )}
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-3 text-gray-400 pl-4">
            <Loader2 className="animate-spin" size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Xiao Ai đang soạn...</span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-8 bg-white border-t border-gray-50">
        <div className="bg-gray-50 rounded-[28px] p-2 flex items-center gap-2 border border-gray-100 shadow-inner group focus-within:border-orange-200 transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Viết pinyin hoặc câu tiếng Trung của bạn..."
            className="flex-1 bg-transparent border-none px-6 py-3 text-sm focus:ring-0 outline-none placeholder:text-gray-400 font-medium"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="w-12 h-12 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition-all disabled:opacity-30 disabled:grayscale flex items-center justify-center shadow-lg shadow-orange-100"
          >
            <Send size={20} />
          </button>
        </div>
        
        {/* Voice Hint */}
        <div className="mt-4 flex flex-col items-center gap-4">
           <div className="flex gap-1.5 items-center h-4">
              <div className="w-1 h-2 bg-orange-200 rounded-full"></div>
              <div className="w-1 h-3 bg-orange-300 rounded-full"></div>
              <div className="w-1 h-4 bg-orange-400 rounded-full"></div>
              <div className="w-1 h-3 bg-orange-300 rounded-full"></div>
              <div className="w-1 h-2 bg-orange-200 rounded-full"></div>
           </div>
           <button className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.2em] hover:text-orange-600 transition-colors">
              Hỗ trợ luyện phát âm thủ công
           </button>
        </div>
      </div>
    </div>
  );
}
