import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, BookOpen, CheckCircle, Volume2, Key } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { sendTutorMessage, ChatMessage, TutorMode } from '../services/gemini';

interface GeminiTutorProps {
  apiKey: string;
  onUpdateApiKey: (key: string) => void;
  initialPrompt?: string;
  onClearInitialPrompt?: () => void;
}

export const GeminiTutor: React.FC<GeminiTutorProps> = ({
  apiKey,
  onUpdateApiKey,
  initialPrompt,
  onClearInitialPrompt
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: '你好！我是你的中文AI助教 (Chào bạn! Tôi là Gia sư AI Tiếng Trung của bạn). Học Hán ngữ không quá khó (学汉语不太难)! Bạn muốn tôi giúp gì hôm nay?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<TutorMode>('chat');
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [tempKey, setTempKey] = useState(apiKey);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Tự động nhận initialPrompt nếu chuyển từ Flashcard / Hanzi Writer sang
  useEffect(() => {
    if (initialPrompt && initialPrompt.trim()) {
      handleSend(initialPrompt);
      if (onClearInitialPrompt) onClearInitialPrompt();
    }
  }, [initialPrompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const reply = await sendTutorMessage(apiKey, mode, text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      // Lọc các ký tự chữ Hán để phát âm
      const chineseChars = text.match(/[\u4e00-\u9fa5]+/g)?.join('') || text;
      const utterance = new SpeechSynthesisUtterance(chineseChars);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const quickPrompts = [
    { label: '🔍 Chiết tự chữ "学"', prompt: 'Hãy chiết tự và giải thích ý nghĩa nguồn gốc của chữ 学', targetMode: 'etymology' as TutorMode },
    { label: '💬 Đóng vai gọi món', prompt: 'Hãy đóng vai nhân viên phục vụ quán ăn ở Bắc Kinh và bắt đầu cuộc trò chuyện với tôi', targetMode: 'chat' as TutorMode },
    { label: '📝 Sửa câu HSK', prompt: 'Tôi viết câu này đã đúng ngữ pháp chưa: "今天我有很高兴认识你"', targetMode: 'grammar' as TutorMode }
  ];

  return (
    <div className="flex flex-col h-[650px] bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
      {/* Top Bar */}
      <div className="p-4 border-b border-stone-100 bg-stone-50/50 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white shadow-sm">
            <Bot size={22} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              Gia Sư AI Gemini <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold border border-red-200">2.5 Flash</span>
            </h2>
            <p className="text-xs text-stone-500">Đối thoại, chiết tự chữ Hán & sửa lỗi ngữ pháp</p>
          </div>
        </div>

        {/* Mode Selector & API Key Button */}
        <div className="flex items-center gap-2">
          <div className="flex bg-stone-200/60 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setMode('chat')}
              className={`px-3 py-1.5 rounded-lg transition ${mode === 'chat' ? 'bg-white text-red-600 shadow-sm' : 'text-stone-600 hover:text-stone-900'}`}
            >
              💬 Đối thoại
            </button>
            <button
              onClick={() => setMode('etymology')}
              className={`px-3 py-1.5 rounded-lg transition ${mode === 'etymology' ? 'bg-white text-red-600 shadow-sm' : 'text-stone-600 hover:text-stone-900'}`}
            >
              🔍 Chiết tự
            </button>
            <button
              onClick={() => setMode('grammar')}
              className={`px-3 py-1.5 rounded-lg transition ${mode === 'grammar' ? 'bg-white text-red-600 shadow-sm' : 'text-stone-600 hover:text-stone-900'}`}
            >
              📝 Ngữ pháp
            </button>
          </div>

          <button
            onClick={() => setShowKeyModal(true)}
            className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 transition"
            title="Cài đặt Gemini API Key"
          >
            <Key size={16} />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {messages.map(msg => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-white ${msg.sender === 'user' ? 'bg-stone-800' : 'bg-red-600'}`}>
              {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>

            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
              msg.sender === 'user'
                ? 'bg-red-600 text-white rounded-tr-none'
                : 'bg-stone-100 text-stone-800 rounded-tl-none border border-stone-200'
            }`}>
              <div className="prose prose-sm max-w-none text-inherit leading-relaxed">
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>

              <div className="flex items-center justify-between mt-2 pt-1 border-t border-black/5 text-[10px] opacity-70">
                <span>{msg.timestamp}</span>
                {msg.sender === 'ai' && (
                  <button
                    onClick={() => speakText(msg.text)}
                    className="hover:opacity-100 flex items-center gap-1 transition"
                    title="Phát âm chữ Hán"
                  >
                    <Volume2 size={12} /> Nghe
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
              <Bot size={16} />
            </div>
            <div className="bg-stone-100 border border-stone-200 rounded-2xl px-4 py-3 rounded-tl-none text-xs text-stone-500 flex items-center gap-2">
              <Sparkles className="animate-spin text-amber-500" size={14} /> Gia sư AI đang suy nghĩ câu trả lời...
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Bar */}
      <div className="px-4 py-2 bg-stone-50 border-t border-stone-100 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-stone-400 shrink-0 font-medium">Gợi ý:</span>
        {quickPrompts.map((qp, i) => (
          <button
            key={i}
            onClick={() => {
              setMode(qp.targetMode);
              handleSend(qp.prompt);
            }}
            className="shrink-0 px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:border-red-300 hover:text-red-600 text-stone-600 transition"
          >
            {qp.label}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <div className="p-4 border-t border-stone-200 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === 'chat'
                ? 'Nhập câu tiếng Trung hoặc câu hỏi cần giải đáp...'
                : mode === 'etymology'
                ? 'Nhập chữ Hán cần phân tích (ví dụ: 好, 学, 汉, 难)...'
                : 'Nhập câu bạn muốn kiểm tra ngữ pháp...'
            }
            className="flex-1 px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="px-4 py-2.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white rounded-xl text-sm font-semibold transition flex items-center gap-1.5 shadow-sm"
          >
            <Send size={16} /> Gửi
          </button>
        </form>
      </div>

      {/* API Key Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
              <Key size={18} className="text-amber-500" /> Cài đặt Gemini API Key
            </h3>
            <p className="text-xs text-stone-500">
              Khóa API được lưu cục bộ trên trình duyệt của bạn để gọi trực tiếp mô hình Google Gemini 2.5 Flash qua SDK <code className="bg-stone-100 px-1 py-0.5 rounded">@google/genai</code>.
            </p>
            <input
              type="password"
              value={tempKey}
              onChange={(e) => setTempKey(e.target.value)}
              placeholder="Dán AIzaSy... vào đây"
              className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm font-mono focus:ring-2 focus:ring-red-500"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:bg-stone-100 transition"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  onUpdateApiKey(tempKey);
                  setShowKeyModal(false);
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-red-600 text-white hover:bg-red-700 transition"
              >
                Lưu Khóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
