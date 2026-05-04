import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Volume2, Globe, Book, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { dictionaryData, DictionaryEntry } from '../data/dictionaryData';
import { CHINESE_DATA, Vocabulary } from '../data/chineseData';
import { CHINESE_301_TOPICS } from '../data/chinese301Data';
import { BASIC_GRAMMAR_STRUCTURES, GrammarStructure } from '../data/grammarData';
import { cn } from '../lib/utils';

type SearchResult = 
  | { type: 'dict'; data: DictionaryEntry }
  | { type: 'vocab'; data: Vocabulary }
  | { type: 'grammar'; data: GrammarStructure };

export const QuickDictionaryPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const popupRef = useRef<HTMLDivElement>(null);

  const allLessonVocab = useMemo(() => {
    let vocab: Vocabulary[] = [];
    [...CHINESE_DATA, ...CHINESE_301_TOPICS].forEach(topic => {
      vocab = [...vocab, ...topic.vocabulary];
      if (topic.lessons) {
        topic.lessons.forEach(l => vocab = [...vocab, ...l.vocabulary]);
      }
    });
    return vocab;
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      const normalizedQuery = lowerQuery.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");

      const matchedResults: SearchResult[] = [];

      // Search in dictionary
      dictionaryData.forEach(entry => {
        const normalizedPinyin = entry.pinyin.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
        if (entry.word.includes(query) || 
            (entry.traditional && entry.traditional.includes(query)) ||
            entry.pinyin.toLowerCase().includes(lowerQuery) || 
            normalizedPinyin.includes(normalizedQuery) ||      
            entry.meaning.toLowerCase().includes(lowerQuery)) {
          matchedResults.push({ type: 'dict', data: entry });
        }
      });

      // Search in lesson vocabulary
      allLessonVocab.forEach(v => {
        const normalizedPinyin = v.pinyin.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
        if (v.character.includes(query) || 
            v.pinyin.toLowerCase().includes(lowerQuery) || 
            normalizedPinyin.includes(normalizedQuery) ||      
            v.meaning.toLowerCase().includes(lowerQuery)) {
          // Avoid duplicates if already in dict
          if (!matchedResults.some(r => r.type === 'dict' && r.data.word === v.character)) {
            matchedResults.push({ type: 'vocab', data: v });
          }
        }
      });

      // Search in grammar
      BASIC_GRAMMAR_STRUCTURES.forEach(g => {
        if (g.title.toLowerCase().includes(lowerQuery) || 
            g.structure.toLowerCase().includes(lowerQuery) ||
            g.explanation.toLowerCase().includes(lowerQuery)) {
          matchedResults.push({ type: 'grammar', data: g });
        }
      });

      setResults(matchedResults);
    } else {
      setResults([]);
    }
  }, [query, allLessonVocab]);

  // Handle click outside
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
  
  const handleGoogleSearch = (word: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(word + ' từ điển tiếng trung')}`, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-[60]" ref={popupRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-[320px] sm:w-[360px] bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden flex flex-col"
          >
            {/* Header / Search input */}
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-white">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                <input 
                  type="text"
                  autoFocus
                  placeholder="Tra từ nhanh..."
                  className="w-full pl-11 pr-10 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-300 transition-all font-medium text-gray-700"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                  <button 
                    onClick={() => setQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 p-1 rounded-full transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[350px] overflow-y-auto w-full custom-scrollbar">
              {query.trim() === '' ? (
                <div className="p-10 text-center flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                    <Search className="text-orange-300" size={28} />
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    Nhập Hán tự, Pinyin hoặc Tiếng Việt để tra cứu.
                  </div>
                </div>
              ) : results.length > 0 ? (
                <div className="divide-y divide-gray-50/80">
                  {results.map((result, idx) => {
                    if (result.type === 'dict' || result.type === 'vocab') {
                      const word = result.type === 'dict' ? result.data.word : result.data.character;
                      const pinyin = result.type === 'dict' ? result.data.pinyin : result.data.pinyin;
                      const meaning = result.type === 'dict' ? result.data.meaning : result.data.meaning;
                      const isVocab = result.type === 'vocab';

                      return (
                        <div key={idx} className="p-4 hover:bg-orange-50/50 transition-colors group">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                <span className={cn("text-2xl font-serif font-bold", isVocab ? "text-orange-600" : "text-[#D63031]")}>
                                  {word}
                                </span>
                                <span className="text-sm font-medium text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-md">
                                  {pinyin}
                                </span>
                                {isVocab && (
                                  <span className="text-[10px] font-bold text-orange-400 border border-orange-200 px-1.5 rounded uppercase">
                                    Lesson
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-gray-600 leading-relaxed font-medium">
                                {meaning}
                              </div>
                            </div>
                            <div className="flex flex-col gap-1.5 shrink-0 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                              <button onClick={() => handleSpeak(word)} className="p-2 bg-white border border-gray-200 text-gray-500 hover:text-orange-600 hover:border-orange-200 rounded-xl shadow-sm transition-colors">
                                <Volume2 size={16} />
                              </button>
                              <button onClick={() => handleGoogleSearch(word)} className="p-2 bg-white border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-200 rounded-xl shadow-sm transition-colors">
                                <Globe size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      // Grammar result
                      return (
                        <div key={idx} className="p-4 hover:bg-indigo-50/50 transition-colors group">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-indigo-50 text-indigo-500 rounded-lg flex items-center justify-center shrink-0">
                              <FileText size={16} />
                            </div>
                            <div className="flex-1">
                              <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-1">Cấu trúc ngữ pháp</div>
                              <div className="font-bold text-gray-900 mb-1">{result.data.title}</div>
                              <div className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded inline-block mb-1.5 font-mono">
                                {result.data.structure}
                              </div>
                              <div className="text-xs text-gray-500 italic line-clamp-2">
                                {result.data.explanation}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              ) : (
                <div className="p-10 text-center flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    <X className="text-gray-300" size={28} />
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    Không tìm thấy kết quả phù hợp.
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
            "p-4 rounded-full shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/30 flex items-center justify-center",
            isOpen ? "bg-gray-100 text-gray-600 shadow-none hover:bg-gray-200 hover:scale-95 border border-gray-200" : "bg-gradient-to-tr from-orange-500 to-orange-400 text-white hover:shadow-orange-500/40 hover:scale-105"
        )}
        title="Tra từ nhanh"
      >
        {isOpen ? <X size={24} /> : <Search size={24} />}
      </button>
    </div>
  );
};
