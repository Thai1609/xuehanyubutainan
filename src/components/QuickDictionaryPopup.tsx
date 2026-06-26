import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Search, X, Volume2, Globe, FileText, 
  Trash2, Heart, Star, Sparkles, BookOpen,
  ChevronDown, ChevronUp, History, PenTool, Check, Notebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { dictionaryData, DictionaryEntry } from '../data/dictionaryData';
import { CHINESE_DATA, Vocabulary } from '../data/chineseData';
import { CHINESE_301_TOPICS } from '../data/chinese301Data';
import { BASIC_GRAMMAR_STRUCTURES, GrammarStructure } from '../data/grammarData';
import StrokeWriter from './StrokeWriter';
import { cn } from '../lib/utils';

type SearchResult = 
  | { type: 'dict'; data: DictionaryEntry }
  | { type: 'vocab'; data: Vocabulary }
  | { type: 'grammar'; data: GrammarStructure };

// Helper to determine tone-colored CSS based on Pinyin characters
function getToneColorClass(pinyin: string): string {
  const norm = pinyin.toLowerCase();
  if (/[āēīōūǖ]/.test(norm)) return 'text-sky-500 font-extrabold'; // 1st tone (flat blue)
  if (/[áéíóúǘ]/.test(norm)) return 'text-emerald-500 font-extrabold'; // 2nd tone (rising green)
  if (/[ǎěǐǒǔǚ]/.test(norm)) return 'text-amber-500 font-extrabold'; // 3rd tone (falling-rising yellow)
  if (/[àèìòùǜ]/.test(norm)) return 'text-rose-500 font-extrabold'; // 4th tone (falling red)
  return 'text-gray-500 font-medium'; // Neutral tone
}

export const QuickDictionaryPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'search' | 'notebook'>('search');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Local storage for Saved words (Notebook)
  const [savedWords, setSavedWords] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('hanyu_saved_words');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Local storage for Search history
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('hanyu_search_history');
      return saved ? JSON.parse(saved) : ["学习", "人工智能", "开心", "给力", "面包"];
    } catch {
      return ["学习", "人工智能", "开心", "给力", "面包"];
    }
  });

  // Sync saved words to storage
  useEffect(() => {
    localStorage.setItem('hanyu_saved_words', JSON.stringify(savedWords));
  }, [savedWords]);

  // Sync search history to storage
  useEffect(() => {
    localStorage.setItem('hanyu_search_history', JSON.stringify(searchHistory));
  }, [searchHistory]);

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

  // Filter dictionary or notebook based on search query
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

      // Search in lessons vocab
      allLessonVocab.forEach(v => {
        const normalizedPinyin = v.pinyin.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
        if (v.character.includes(query) || 
            v.pinyin.toLowerCase().includes(lowerQuery) || 
            normalizedPinyin.includes(normalizedQuery) ||      
            v.meaning.toLowerCase().includes(lowerQuery)) {
          // Avoid key collision with exact dictionary word
          if (!matchedResults.some(r => r.type === 'dict' && r.data.word === v.character)) {
            matchedResults.push({ type: 'vocab', data: v });
          }
        }
      });

      // Search in grammar structures
      BASIC_GRAMMAR_STRUCTURES.forEach(g => {
        if (g.title.toLowerCase().includes(lowerQuery) || 
            g.structure.toLowerCase().includes(lowerQuery) ||
            g.explanation.toLowerCase().includes(lowerQuery)) {
          matchedResults.push({ type: 'grammar', data: g });
        }
      });

      // Limit results for rapid responsive rendering and smooth scrolling
      setResults(matchedResults.slice(0, 25));
    } else {
      setResults([]);
    }
  }, [query, allLessonVocab]);

  // Handle click outside popup container
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

  // Toggle saving bookmark to Local Notebook
  const handleToggleSave = (item: any, type: 'dict' | 'vocab') => {
    const wordKey = type === 'dict' ? item.word : item.character;
    const isAlreadySaved = savedWords.some(w => w.word === wordKey);

    if (isAlreadySaved) {
      setSavedWords(savedWords.filter(w => w.word !== wordKey));
    } else {
      const entryToSave = {
        id: item.id || `saved_${Date.now()}`,
        type,
        word: wordKey,
        pinyin: item.pinyin,
        meaning: item.meaning,
        examples: item.examples || [],
        timestamp: Date.now()
      };
      setSavedWords([...savedWords, entryToSave]);
    }
  };

  const isItemSaved = (word: string) => {
    return savedWords.some(w => w.word === word);
  };

  // Slices composite Chinese words into individual characters for mini definition breakdowns
  const decomposeWord = (word: string) => {
    if (word.length <= 1) return [];
    const chars = word.split('');
    return chars.map(char => {
      // Find in dict
      const found = dictionaryData.find(d => d.word === char);
      if (found) {
        return { char, pinyin: found.pinyin, meaning: found.meaning };
      }
      // Or lesson list
      const vocabFound = allLessonVocab.find(v => v.character === char);
      if (vocabFound) {
        return { char, pinyin: vocabFound.pinyin, meaning: vocabFound.meaning };
      }
      return null;
    }).filter((x): x is { char: string; pinyin: string; meaning: string } => x !== null);
  };

  // Generates related compounds from dictionaryData
  const getRelatedCompounds = (word: string) => {
    if (!word || word.length === 0) return [];
    // Grab first character to scan compounds
    const leadChar = word[0];
    const matches: DictionaryEntry[] = [];
    for (const entry of dictionaryData) {
      if (entry.word.includes(leadChar) && entry.word !== word) {
        matches.push(entry);
        if (matches.length >= 6) break;
      }
    }
    return matches;
  };

  // Executed on clicking history or suggested tag
  const handleQuickSearch = (keyword: string) => {
    setQuery(keyword);
    setActiveTab('search');
    
    // Add to history and push front
    setSearchHistory(prev => {
      const filtered = prev.filter(h => h !== keyword);
      return [keyword, ...filtered].slice(0, 8);
    });
  };

  const clearHistory = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSearchHistory([]);
  };

  // Filtered saved words if on the saved tab
  const displayedSavedWords = useMemo(() => {
    if (!query.trim()) return savedWords;
    const lower = query.toLowerCase();
    return savedWords.filter(w => 
      w.word.includes(lower) || 
      w.pinyin.toLowerCase().includes(lower) || 
      w.meaning.toLowerCase().includes(lower)
    );
  }, [savedWords, query]);

  return (
    <div className="fixed bottom-24 right-6 z-[60]" ref={popupRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            className="absolute bottom-20 right-0 w-[340px] sm:w-[400px] max-h-[80vh] sm:max-h-[540px] bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden flex flex-col"
          >
            {/* Header / Tabs */}
            <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 border-b border-orange-100/50">
              <div className="flex border-b border-gray-100/50">
                <button 
                  onClick={() => setActiveTab('search')}
                  className={cn(
                    "flex-1 py-3 text-xs font-black tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 border-b-2",
                    activeTab === 'search' 
                      ? "text-orange-600 border-orange-500 bg-orange-50/20" 
                      : "text-gray-400 border-transparent hover:text-gray-600 hover:bg-gray-50/50"
                  )}
                >
                  <Search size={14} /> Tra cứu
                </button>
                <button 
                  onClick={() => setActiveTab('notebook')}
                  className={cn(
                    "flex-1 py-3 text-xs font-black tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 border-b-2",
                    activeTab === 'notebook' 
                      ? "text-orange-600 border-orange-500 bg-orange-50/20" 
                      : "text-gray-400 border-transparent hover:text-gray-600 hover:bg-gray-50/50"
                  )}
                >
                  <Heart size={14} className={cn(savedWords.length > 0 && "fill-rose-500 text-rose-500")} /> Sổ tay ({savedWords.length})
                </button>
              </div>

              {/* Search text box inside Header */}
              <div className="p-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                  <input 
                    type="text"
                    autoFocus
                    placeholder={activeTab === 'search' ? "Nhập Hán tự, Pinyin, Tiếng Việt..." : "Lọc trong sổ tay từ vựng..."}
                    className="w-full pl-11 pr-10 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-300 transition-all font-medium text-gray-700"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      if (activeTab === 'search') {
                        setExpandedId(null);
                      }
                    }}
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
            </div>

            {/* Content list of items found */}
            <div className={cn(
              "flex-1 overflow-y-auto w-full custom-scrollbar bg-white divide-y divide-gray-50",
              ((activeTab === 'notebook' && displayedSavedWords.length > 0) || (activeTab === 'search' && query.trim() !== '' && results.length > 0))
                ? "max-h-[255px]" 
                : "max-h-[380px]"
            )}>
              
              {/* SAVED WORDS / NOTEBOOK TAB SCENARIO */}
              {activeTab === 'notebook' ? (
                displayedSavedWords.length === 0 ? (
                  <div className="p-10 text-center flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-rose-50/50 rounded-full flex items-center justify-center text-rose-400">
                      <Notebook size={28} />
                    </div>
                    <div className="text-gray-400 text-xs font-semibold max-w-xs leading-relaxed">
                      {query ? "Không tìm thấy từ tương thích trong sổ tay." : "Sổ tay học tập đang trống! Hãy nhắm biểu tượng Trái Tim ❤️ ở các từ bạn muốn lưu lại khi tra cứu để ôn tập."}
                    </div>
                  </div>
                ) : (
                  displayedSavedWords.map((word, idx) => {
                    const isExpanded = expandedId === `saved_${word.word}_${idx}`;
                    return (
                      <div key={idx} className="hover:bg-orange-50/20 transition-all">
                        <div 
                          onClick={() => setExpandedId(isExpanded ? null : `saved_${word.word}_${idx}`)}
                          className="p-4 flex items-start justify-between gap-3 cursor-pointer"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-xl font-serif font-bold text-gray-900">{word.word}</span>
                              <span className={cn("text-xs font-bold px-1.5 py-0.5 rounded-lg bg-orange-50/60", getToneColorClass(word.pinyin))}>
                                {word.pinyin}
                              </span>
                            </div>
                            <div className="text-xs text-gray-500 line-clamp-1 mt-1 font-medium">{word.meaning}</div>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0" onClick={e => e.stopPropagation()}>
                            <button 
                              onClick={() => handleSpeak(word.word)}
                              className="p-2 bg-gray-50 hover:bg-orange-50 hover:text-orange-500 rounded-xl transition-colors text-gray-400"
                            >
                              <Volume2 size={14} />
                            </button>
                            <button 
                              onClick={() => setSavedWords(savedWords.filter(w => w.word !== word.word))}
                              className="p-2 bg-gray-50 hover:bg-red-50 hover:text-red-500 rounded-xl transition-colors text-gray-400"
                              title="Xóa khỏi sổ tay"
                            >
                              <Trash2 size={14} />
                            </button>
                            {isExpanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                          </div>
                        </div>

                        {/* Saved word EXPANDED PANEL DETAILS */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-gray-50/50 border-t border-gray-100"
                            >
                              <div className="p-4 space-y-4 text-xs font-medium text-gray-600">
                                <div>
                                  <span className="font-extrabold text-orange-600 block mb-1 uppercase tracking-wider text-[10px]">Định nghĩa đầy đủ:</span>
                                  <p className="bg-white p-3 rounded-2xl border border-gray-100 text-gray-800 leading-relaxed font-semibold">
                                    {word.meaning}
                                  </p>
                                </div>

                                {/* Call Stroke animations directly */}
                                <div>
                                  <span className="font-extrabold text-orange-600 block mb-1.5 uppercase tracking-wider text-[10px]">Bút thuận từng nét (Bản đồ):</span>
                                  <div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-gray-100">
                                    {/* Traditional Calligraphy Grid representation */}
                                    <div className="relative border border-red-200 bg-red-50/20 rounded-xl p-1.5 flex items-center justify-center w-14 h-14 shadow-inner overflow-hidden">
                                      <div className="absolute inset-0 pointer-events-none opacity-20">
                                        <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-red-500"></div>
                                        <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-red-500"></div>
                                      </div>
                                      <div className="relative z-10">
                                        <StrokeWriter character={word.word} size={44} strokeColor="#991b1b" radicalColor="#b91c1c" />
                                      </div>
                                    </div>
                                    <div className="text-gray-400 text-[10px] leading-normal font-sans">
                                      Nhấp vào khung chữ để xem hoạt họa tập viết thứ tự nét vẽ.
                                    </div>
                                  </div>
                                </div>

                                {/* Composite decomposition breakdown */}
                                {word.word.length > 1 && (
                                  <div>
                                    <span className="font-extrabold text-orange-600 block mb-1.5 uppercase tracking-wider text-[10px]">Phân tích từng chữ:</span>
                                    <div className="bg-white p-3 rounded-2xl border border-gray-100 space-y-2">
                                      {decomposeWord(word.word).map((dc, dIdx) => (
                                        <div key={dIdx} className="flex justify-between items-center bg-gray-50 px-2 py-1.5 rounded-lg">
                                          <div className="flex items-center gap-1.5">
                                            <span className="font-serif font-bold text-gray-900 text-sm">{dc.char}</span>
                                            <span className={cn("text-[10px]", getToneColorClass(dc.pinyin))}>({dc.pinyin})</span>
                                          </div>
                                          <span className="text-gray-500 text-[11px] font-semibold text-right max-w-[180px] truncate">{dc.meaning}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })
                )
              ) : (
                /* SEARCH AND EXPLORATION TAB SCENARIO */
                query.trim() === '' ? (
                  /* Standard initial empty screen with options */
                  <div className="p-6 space-y-6">
                    {/* Search history layout */}
                    {searchHistory.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-gray-400">
                          <span className="flex items-center gap-1"><History size={11} /> Lịch sử tra cứu:</span>
                          <button onClick={clearHistory} className="text-red-400 hover:text-red-600 transition-colors">Xóa sạch</button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {searchHistory.map((keyword, hIdx) => (
                            <button
                              key={hIdx}
                              onClick={() => handleQuickSearch(keyword)}
                              className="text-[11px] font-semibold text-gray-600 bg-gray-50 hover:bg-orange-50 hover:text-orange-500 transition-all border border-gray-100/50 py-1 px-2.5 rounded-full"
                            >
                              {keyword}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Suggestions list helpful for quick study */}
                    <div className="space-y-3">
                      <div className="text-[10px] uppercase font-black tracking-widest text-gray-400 flex items-center gap-1">
                        <Sparkles size={11} className="text-orange-400" /> Từ vựng đề xuất cực hot:
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {[
                          { w: "人工智能", t: "AI Trí Tuệ Nhân Tạo" },
                          { w: "给力", t: "Tuyệt Vời / Đỉnh" },
                          { w: "吃货", t: "Tâm Hồn Ăn Uống" },
                          { w: "学霸", t: "Học Bá Siêu Đẳng" },
                          { w: "扫码", t: "Quét Mã QR" },
                          { w: "外卖", t: "Đồ Ăn Giao Tận Nơi" }
                        ].map((sug, sIdx) => (
                          <div 
                            key={sIdx}
                            onClick={() => handleQuickSearch(sug.w)}
                            className="p-2.5 bg-gradient-to-r from-orange-50/30 to-orange-50/10 border border-orange-100/30 rounded-xl hover:border-orange-200 hover:bg-orange-50/20 cursor-pointer transition-all flex flex-col gap-0.5 text-left"
                          >
                            <span className="font-serif font-bold text-gray-900 text-sm flex items-center gap-1.5">
                              {sug.w} <span className="text-[10px] text-orange-400 font-sans tracking-wide">→</span>
                            </span>
                            <span className="text-[10px] text-gray-400 font-bold truncate">{sug.t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : results.length > 0 ? (
                  /* RENDER SEARCH RESULTS */
                  results.map((result, idx) => {
                    const isDict = result.type === 'dict';
                    const isGrammar = result.type === 'grammar';
                    
                    let id = isDict ? result.data.id : isGrammar ? `g_${result.data.title}` : `v_${result.data.character}`;
                    let isExpanded = expandedId === id;

                    if (isDict || result.type === 'vocab') {
                      const word = isDict ? result.data.word : result.data.character;
                      const pinyin = isDict ? result.data.pinyin : result.data.pinyin;
                      const meaning = isDict ? result.data.meaning : result.data.meaning;
                      const savedStatus = isItemSaved(word);

                      return (
                        <div key={idx} className="hover:bg-orange-50/20 transition-all">
                          {/* Sled bar component row */}
                          <div 
                            onClick={() => {
                              setExpandedId(isExpanded ? null : id);
                              // Add to history search query on expand
                              handleToggleSave
                              setSearchHistory(prev => {
                                const filtered = prev.filter(h => h !== word);
                                return [word, ...filtered].slice(0, 8);
                              });
                            }}
                            className="p-4 flex items-start justify-between gap-3 cursor-pointer"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <span className={cn("text-xl font-serif font-bold", isDict ? "text-gray-900" : "text-orange-600")}>
                                  {word}
                                </span>
                                <span className={cn("text-xs font-bold px-1.5 py-0.5 rounded-lg bg-orange-50/60", getToneColorClass(pinyin))}>
                                  {pinyin}
                                </span>
                                {!isDict && (
                                  <span className="text-[9px] font-black tracking-wide text-white bg-orange-400 px-1 py-0.2 rounded font-sans uppercase">
                                    Bài học
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-gray-600 font-medium leading-relaxed mt-1 line-clamp-1">
                                {meaning}
                              </div>
                            </div>

                            {/* Options action buttons row */}
                            <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
                              <button 
                                onClick={() => handleSpeak(word)} 
                                className="p-2 bg-gray-50 hover:bg-orange-50 hover:text-orange-500 rounded-xl transition-colors text-gray-400"
                                title="Phát âm tiếng Trung"
                              >
                                <Volume2 size={14} />
                              </button>
                              
                              <button 
                                onClick={() => handleToggleSave(result.data, result.type as any)} 
                                className="p-2 bg-gray-50 hover:bg-rose-50 text-gray-400 hover:text-rose-500 rounded-xl transition-colors shrink-0"
                                title={savedStatus ? "Xóa khỏi sổ tay" : "Lưu vào sổ tay học tập"}
                              >
                                <Heart size={14} className={cn(savedStatus && "fill-rose-500 text-rose-500")} />
                              </button>

                              {isExpanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                            </div>
                          </div>

                          {/* EXPANDED PANEL WITH COMPREHENSIVE RICH DETAILS */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-gray-50 hover:bg-gray-50/80 border-t border-gray-100"
                              >
                                <div className="p-4 space-y-4 text-xs font-semibold text-gray-600">
                                  {/* Meaning Box */}
                                  <div>
                                    <span className="font-extrabold text-orange-600 block mb-1 uppercase tracking-wider text-[10px]">☘️ Định nghĩa tiếng Việt:</span>
                                    <div className="bg-white p-3.5 rounded-2xl border border-gray-100 text-gray-800 leading-relaxed font-bold shadow-sm">
                                      {meaning}
                                    </div>
                                  </div>

                                  {/* Animated Stroke Order Box in traditional grid style */}
                                  <div>
                                    <span className="font-extrabold text-orange-600 block mb-1.5 uppercase tracking-wider text-[10px]">✍️ Thứ tự nét vẽ & Bút thuận:</span>
                                    <div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                                      {/* Traditional Mizige Square */}
                                      <div className="relative border-2 border-red-200 bg-red-50/20 rounded-xl p-1.5 flex items-center justify-center w-16 h-16 shadow-inner overflow-hidden">
                                        <div className="absolute inset-0 pointer-events-none opacity-20">
                                          <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-red-500"></div>
                                          <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-red-500"></div>
                                          <div className="absolute inset-0 border-b border-t border-dashed border-red-500 rotate-45 transform origin-center scale-150"></div>
                                          <div className="absolute inset-0 border-b border-t border-dashed border-red-500 -rotate-45 transform origin-center scale-150"></div>
                                        </div>
                                        <div className="relative z-10">
                                          <StrokeWriter character={word} size={54} strokeColor="#991b1b" radicalColor="#b91c1c" />
                                        </div>
                                      </div>
                                      <div className="flex-1 space-y-1">
                                        <div className="text-gray-800 text-[11px] font-extrabold">Cách viết chính tả chữ "Hán"</div>
                                        <div className="text-gray-400 text-[10px] leading-relaxed font-sans font-medium">Nhấp vào khung chữ để xem tốc độ tay viết chuẩn từng nét, màu đỏ hiển thị bộ thủ.</div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Word breaking breakdown (Decomposition) */}
                                  {word.length > 1 && (
                                    <div>
                                      <span className="font-extrabold text-orange-600 block mb-1.5 uppercase tracking-wider text-[10px]">🧩 Phân tách chiết tự ghép:</span>
                                      <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                                        {decomposeWord(word).map((dc, dIdx) => (
                                          <div key={dIdx} className="flex justify-between items-center bg-gray-50/60 p-2 rounded-xl border border-gray-100/50">
                                            <button 
                                              onClick={() => handleQuickSearch(dc.char)}
                                              className="flex items-center gap-1.5 text-left hover:text-orange-600 transition-colors"
                                              title={`Nhấp để tra chữ '${dc.char}'`}
                                            >
                                              <span className="font-serif font-bold text-gray-900 text-sm underline decoration-dotted decoration-gray-300 hover:decoration-orange-500">{dc.char}</span>
                                              <span className={cn("text-[10px]", getToneColorClass(dc.pinyin))}>({dc.pinyin})</span>
                                            </button>
                                            <span className="text-gray-500 text-[11px] font-semibold text-right max-w-[200px] truncate">{dc.meaning}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Examples view list */}
                                  {isDict && result.data.examples && result.data.examples.length > 0 && (
                                    <div>
                                      <span className="font-extrabold text-orange-600 block mb-1.5 uppercase tracking-wider text-[10px]">💡 Ví dụ thực tế:</span>
                                      <div className="space-y-2">
                                        {result.data.examples.map((ex, exIdx) => (
                                          <div key={exIdx} className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm space-y-1 font-sans">
                                            <div className="flex items-start justify-between gap-1.5">
                                              <span className="font-serif font-black text-gray-900 text-[13px] leading-relaxed select-all">
                                                {ex.chinese}
                                              </span>
                                              <button 
                                                onClick={() => handleSpeak(ex.chinese)}
                                                className="text-orange-500 hover:text-orange-700 bg-orange-50 p-1.5 rounded-lg transition-colors scale-90"
                                              >
                                                <Volume2 size={12} />
                                              </button>
                                            </div>
                                            <div className="font-mono text-[10px] text-orange-600/95 font-semibold tracking-wide">
                                              {ex.pinyin}
                                            </div>
                                            <div className="text-[11px] text-gray-500 italic">
                                              Dịch: "{ex.translation}"
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Compounds words matches from dictionaryData */}
                                  {getRelatedCompounds(word).length > 0 && (
                                    <div>
                                      <span className="font-extrabold text-orange-600 block mb-1.5 uppercase tracking-wider text-[10px]">🔗 Từ ghép liên quan:</span>
                                      <div className="flex flex-wrap gap-2">
                                        {getRelatedCompounds(word).map((cp, cIdx) => (
                                          <button
                                            key={cIdx}
                                            onClick={() => handleQuickSearch(cp.word)}
                                            className="bg-white hover:bg-orange-50 px-2.5 py-1.5 rounded-xl border border-gray-100 shadow-sm hover:border-orange-200 hover:scale-[1.02] transform transition-all text-left flex items-center gap-1.5"
                                          >
                                            <span className="font-serif font-bold text-gray-900">{cp.word}</span>
                                            <span className="text-[10px] text-gray-400 font-bold font-mono">({cp.pinyin})</span>
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Deep web Google look up button */}
                                  <div className="pt-2">
                                    <button
                                      onClick={() => handleGoogleSearch(word)}
                                      className="w-full flex items-center justify-center gap-1 bg-white border border-gray-200 hover:border-blue-300 text-blue-500 hover:text-blue-700 transition-all font-bold py-2.5 rounded-xl shadow-xs text-[11px]"
                                    >
                                      <Globe size={12} /> Tra cứu chi tiết học thuật trên Google →
                                    </button>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    } else {
                      // GRAMMAR TYPE SEARCH RESULT CARD
                      const grammar = result.data;
                      return (
                        <div key={idx} className="p-4 hover:bg-indigo-50/30 transition-colors group">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center shrink-0 border border-indigo-100">
                              <FileText size={18} />
                            </div>
                            <div className="flex-1">
                              <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block mb-0.5">Cấu trúc Ngữ Pháp</span>
                              <h3 className="font-bold text-gray-900 text-sm mb-1">{grammar.title}</h3>
                              <div className="text-xs font-mono font-bold bg-indigo-100 bg-opacity-40 text-indigo-700 px-2.5 py-1 rounded-xl inline-block mb-2">
                                {grammar.structure}
                              </div>
                              <p className="text-xs text-gray-600 leading-relaxed font-semibold">
                                {grammar.explanation}
                              </p>
                              {grammar.examples && grammar.examples.length > 0 && (
                                <div className="mt-3 space-y-1.5 border-l-2 border-indigo-150 pl-2.5">
                                  {grammar.examples.slice(0, 2).map((ex, gExIdx) => (
                                    <div key={gExIdx} className="text-xs space-y-0.5">
                                      <div className="font-serif font-black text-gray-900 flex items-center gap-1">
                                        <span>{ex.chinese}</span>
                                        <button 
                                          onClick={() => handleSpeak(ex.chinese)}
                                          className="text-indigo-500 hover:text-indigo-700 p-0.5 hover:bg-indigo-50 rounded"
                                        >
                                          <Volume2 size={10} />
                                        </button>
                                      </div>
                                      <div className="font-mono text-[9px] text-indigo-600/90 font-medium tracking-wide">{ex.pinyin}</div>
                                      <div className="text-[10px] text-gray-400 font-semibold italic">Dịch: "{ex.translation}"</div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })
                ) : (
                  /* NO RESULTS FOUND */
                  <div className="p-10 text-center flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-gray-50/50 rounded-full flex items-center justify-center text-gray-300">
                      <X size={28} />
                    </div>
                    <div className="text-gray-400 text-xs font-semibold max-w-xs leading-relaxed">
                      Không tìm thấy kết quả phù hợp cho "{query}".
                      <div className="mt-3 text-[10px] text-gray-400 font-sans leading-normal font-medium bg-gray-50 px-3 py-2 rounded-xl">
                        Bạn có thể thử tra cứu cụ thể bằng <b>Tiếng Trung, Pinyin (viết liền không dấu) hoặc nghĩa Tiếng Việt</b>.
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
            "p-4 rounded-full shadow-2xl transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/30 flex items-center justify-center ring-offset-2",
            isOpen 
              ? "bg-white text-gray-600 hover:bg-gray-100 hover:scale-95 border border-gray-200" 
              : "bg-gradient-to-tr from-orange-500 via-orange-500 to-amber-500 text-white hover:shadow-orange-500/40 hover:scale-105 active:scale-95"
        )}
        title="Tra từ nhanh từ điển thông minh"
      >
        {isOpen ? <X size={24} /> : (
          <div className="relative">
            <Search size={24} />
            {savedWords.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-rose-500 border-2 border-white text-white text-[8px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center scale-90">
                {savedWords.length}
              </span>
            )}
          </div>
        )}
      </button>
    </div>
  );
};

