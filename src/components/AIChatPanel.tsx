import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User, Bot, Loader2, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { askAI } from '../services/gemini';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export default function AIChatPanel({ isOpen, onClose, initialContext }: AIChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialContext && isOpen) {
      handleSend(`Hãy giải thích thêm về từ vựng này: ${initialContext}`);
    }
  }, [initialContext, isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const result = await askAI(text);
    const botMessage: Message = { role: 'assistant', content: result };
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-slate-950 border-l border-slate-800 shadow-2xl z-50 flex flex-col pt-safe"
            id="ai-panel"
          >
            <div className="p-6 border-b border-slate-900 flex justify-between items-center bg-slate-900/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-slate-950 shadow-lg shadow-teal-500/20 text-xl font-bold">
                  AI
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Trợ lý HanziQuest</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold text-teal-500/60 tracking-wider">Hệ thống đang hoạt động</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth"
            >
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6 opacity-20">
                  <Bot size={64} className="text-teal-500" />
                  <p className="max-w-[240px] text-lg italic serif-text text-white">
                    Chào bạn! Hãy đặt câu hỏi về Hán ngữ hoặc ngữ pháp cho tôi.
                  </p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-4 max-w-[90%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-slate-950 font-bold text-[10px] ${m.role === 'user' ? 'bg-slate-700 text-slate-300' : 'bg-teal-500'}`}>
                      {m.role === 'user' ? <User size={14} /> : 'AI'}
                    </div>
                    <div className={`p-5 rounded-2xl text-sm leading-relaxed ${
                      m.role === 'user' 
                        ? 'bg-slate-800 text-slate-200 rounded-tr-none border border-slate-700' 
                        : 'bg-slate-900 text-slate-300 rounded-tl-none border border-slate-800 p-6'
                    }`}>
                      <div className="markdown-body prose prose-invert prose-sm max-w-none">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-4 items-center text-slate-400">
                    <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-bold text-[10px]">
                      AI
                    </div>
                    <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-2xl rounded-tl-none">
                      <Loader2 className="animate-spin text-teal-500" size={16} />
                      <span className="text-xs font-bold uppercase tracking-widest text-teal-500/60">AI đang xử lý...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 border-t border-slate-900 bg-slate-950">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-4"
              >
                <div className="flex-1 relative">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Giải thích ngữ pháp cơ bản..."
                    className="w-full pl-6 pr-6 py-4 bg-slate-900/50 border border-slate-800 focus:border-teal-500 focus:bg-slate-900 rounded-xl text-slate-200 text-sm transition-all focus:ring-4 focus:ring-teal-500/5 outline-hidden italic placeholder:text-slate-700"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-12 h-12 flex items-center justify-center bg-teal-500 text-slate-950 rounded-xl disabled:opacity-30 hover:bg-teal-400 transition-all shadow-lg hover:shadow-teal-500/20"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
