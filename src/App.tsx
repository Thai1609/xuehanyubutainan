import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, PenTool, Bot, Sparkles, BookMarked, Search, Volume2 } from 'lucide-react';
import { FlashcardSRS } from './components/FlashcardSRS';
import { HanziBoard } from './components/HanziBoard';
import { GeminiTutor } from './components/GeminiTutor';
import { VOCABULARY_DATA, VocabWord } from './data/vocabulary';

type Tab = 'srs' | 'writer' | 'tutor' | 'vocab';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('srs');
  const [selectedChar, setSelectedChar] = useState<string>('你');
  const [aiPrompt, setAiPrompt] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hskFilter, setHskFilter] = useState<'ALL' | 1 | 2>('ALL');

  // Quản lý Gemini API Key từ localStorage hoặc .env
  const [apiKey, setApiKey] = useState<string>(() => {
    return localStorage.getItem('gemini_api_key') || '';
  });

  const handleUpdateApiKey = (newKey: string) => {
    setApiKey(newKey);
    localStorage.setItem('gemini_api_key', newKey);
  };

  // Đồng bộ: Từ bất kỳ đâu chuyển sang Tập viết
  const handleGoToWriter = (char: string) => {
    setSelectedChar(char);
    setActiveTab('writer');
  };

  // Đồng bộ: Từ bất kỳ đâu chuyển sang Hỏi Gia sư AI
  const handleAskAI = (prompt: string) => {
    setAiPrompt(prompt);
    setActiveTab('tutor');
  };

  const filteredVocab = VOCABULARY_DATA.filter(w => {
    const matchLevel = hskFilter === 'ALL' || w.hskLevel === hskFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchQuery = !q || 
      w.hanzi.includes(q) || 
      w.pinyin.toLowerCase().includes(q) || 
      w.meaning.toLowerCase().includes(q) ||
      w.sinoVietnamese.toLowerCase().includes(q);
    return matchLevel && matchQuery;
  });

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const navItems = [
    { id: 'srs' as Tab, label: 'Flashcard SRS', icon: BookMarked },
    { id: 'writer' as Tab, label: 'Tập Viết Hanzi', icon: PenTool },
    { id: 'tutor' as Tab, label: 'Gia Sư AI Gemini', icon: Bot },
    { id: 'vocab' as Tab, label: 'Từ Vựng HSK', icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
              学
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
                Học Hán Ngữ Không Quá Khó
                <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold border border-red-200">
                  学汉语不太难
                </span>
              </h1>
              <p className="text-xs text-stone-500">Đồng bộ: Flashcard SRS • Hanzi Writer • Gemini AI</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 bg-stone-100 p-1 rounded-2xl">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 ${
                    isActive ? 'text-red-700' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-white rounded-xl shadow-xs"
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon size={16} />
                    <span className="hidden md:inline">{item.label}</span>
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content View */}
      <main className="max-w-6xl mx-auto px-4 py-6 flex-1 w-full">
        <AnimatePresence mode="wait">
          {/* MODULE 1: FLASHCARD SRS */}
          {activeTab === 'srs' && (
            <motion.div
              key="srs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <FlashcardSRS
                onGoToWriter={handleGoToWriter}
                onAskAI={handleAskAI}
              />
            </motion.div>
          )}

          {/* MODULE 2: HANZI WRITER BOARD */}
          {activeTab === 'writer' && (
            <motion.div
              key="writer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <HanziBoard
                selectedChar={selectedChar}
                onSelectChar={setSelectedChar}
                onAskAIAboutChar={(char) =>
                  handleAskAI(`Hãy phân tích chiết tự, nguồn gốc tượng hình và các từ ghép thông dụng của chữ "${char}"`)
                }
              />
            </motion.div>
          )}

          {/* MODULE 3: GEMINI AI TUTOR */}
          {activeTab === 'tutor' && (
            <motion.div
              key="tutor"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <GeminiTutor
                apiKey={apiKey}
                onUpdateApiKey={handleUpdateApiKey}
                initialPrompt={aiPrompt}
                onClearInitialPrompt={() => setAiPrompt('')}
              />
            </motion.div>
          )}

          {/* TAB 4: VOCABULARY SEARCH & EXPLORER */}
          {activeTab === 'vocab' && (
            <motion.div
              key="vocab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Filter & Search Bar */}
              <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {(['ALL', 1, 2] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setHskFilter(level)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                        hskFilter === level
                          ? 'bg-red-600 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {level === 'ALL' ? 'Tất cả từ' : `HSK ${level}`}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-72">
                  <Search size={16} className="absolute left-3 top-2.5 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm theo chữ Hán, Pinyin, nghĩa..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Vocab Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredVocab.map((word) => (
                  <div
                    key={word.id}
                    className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-[11px] px-2 py-0.5 rounded font-bold bg-red-50 text-red-600 border border-red-100">
                          HSK {word.hskLevel}
                        </span>
                        <span className="text-xs text-stone-400">{word.category}</span>
                      </div>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-4xl font-bold text-stone-900">{word.hanzi}</span>
                        <span className="text-lg font-bold text-red-600">{word.pinyin}</span>
                      </div>
                      <p className="text-xs text-amber-700 font-medium mt-1">Hán-Việt: {word.sinoVietnamese}</p>
                      <p className="text-sm font-semibold text-stone-800 mt-1">{word.meaning}</p>
                      <p className="text-xs text-stone-400 mt-1">{word.radical}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <button
                        onClick={() => playAudio(word.hanzi)}
                        className="text-stone-500 hover:text-red-600 flex items-center gap-1 font-medium transition"
                      >
                        <Volume2 size={14} /> Nghe
                      </button>

                      <div className="flex gap-1.5">
                        <button
                          onClick={() => handleGoToWriter(word.hanzi)}
                          className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition flex items-center gap-1"
                          title="Luyện viết chữ Hán"
                        >
                          <PenTool size={12} /> Viết
                        </button>
                        <button
                          onClick={() => handleAskAI(`Hãy phân tích chiết tự và ví dụ cho chữ "${word.hanzi}"`)}
                          className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 font-medium transition flex items-center gap-1"
                          title="Hỏi AI chiết tự"
                        >
                          <Sparkles size={12} /> Hỏi AI
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-4 text-center text-xs text-stone-400">
        Học Hán Ngữ Không Quá Khó (学汉语不太难) — Hệ thống học tiếng Trung thông minh với React 19, Gemini AI & Hanzi Writer.
      </footer>
    </div>
  );
}
