import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Volume2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { dictionaryData, DictionaryEntry } from '../data/dictionaryData';
import { cn, searchDictionary } from '../lib/utils';

export const QuickDictionaryPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DictionaryEntry[]>([]);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchDictionary(query, dictionaryData);
      setResults(filtered.slice(0, 10));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSpeak = (text: string) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'zh-CN';
    window.speechSynthesis.speak(speech);
  };

  return (
    <>
      {/* Floating Toggle Button - Adjusted position to be lower as requested */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-[70] top-40 right-6 w-14 h-14 bg-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-orange-700 transition-all hover:scale-110 active:scale-95 group border-2 border-white/20"
        title="Tra từ nhanh"
      >
        {isOpen ? <X size={24} /> : <Search size={24} className="group-hover:rotate-12 transition-transform" />}
      </button>

      {/* Popup Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[65] flex items-start justify-end pr-20 pt-40 pointer-events-none">
            <motion.div
              ref={popupRef}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className="w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden pointer-events-auto mr-4"
            >
              <div className="p-4 border-b border-orange-50 bg-orange-50/30">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                  <input
                    autoFocus
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Tra từ nhanh..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="max-h-[400px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-orange-200 scrollbar-track-transparent">
                {results.length > 0 ? (
                  <div className="space-y-1">
                    {results.map((entry) => (
                      <div
                        key={entry.id}
                        className="p-3 rounded-xl hover:bg-orange-50 transition-colors border border-transparent hover:border-orange-100 group"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-gray-800 font-serif">{entry.word}</span>
                            <span className="text-xs font-medium text-orange-600 bg-orange-100/50 px-2 py-0.5 rounded">
                              {entry.pinyin}
                            </span>
                          </div>
                          <button
                            onClick={() => handleSpeak(entry.word)}
                            className="p-1.5 text-gray-400 hover:text-orange-500 hover:bg-white rounded-lg transition-all"
                          >
                            <Volume2 size={16} />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                          {entry.meaning}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : query ? (
                  <div className="py-12 text-center">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search size={20} className="text-gray-300" />
                    </div>
                    <p className="text-xs text-gray-400">Không tìm thấy kết quả cho "{query}"</p>
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-xs text-info/50 italic">Nhập từ vựng để bắt đầu tra...</p>
                  </div>
                )}
              </div>

              <div className="p-3 bg-gray-50 border-t border-orange-50 flex justify-center">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Đóng cửa sổ
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
