import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Volume2, BookOpen, Layers, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { dictionaryData, DictionaryEntry } from '../data/dictionaryData';
import { cn } from '../lib/utils';
import StrokeWriter from './StrokeWriter';

interface DictionarySearchProps {
  onEntrySelect?: (entry: DictionaryEntry) => void;
}

export const DictionarySearch: React.FC<DictionarySearchProps> = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DictionaryEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<DictionaryEntry | null>(
    dictionaryData[0]
  );
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      // Remove tones from query just in case user types them, though usually they don't
      const normalizedQuery = lowerQuery.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");

      const filtered = dictionaryData.filter(entry => {
        const normalizedPinyin = entry.pinyin.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
        
        return entry.word.includes(query) || 
               (entry.traditional && entry.traditional.includes(query)) ||
               entry.pinyin.toLowerCase().includes(lowerQuery) || // Keep exact match with tones
               normalizedPinyin.includes(normalizedQuery) ||      // Match without tones and without spaces
               entry.meaning.toLowerCase().includes(lowerQuery);
      });
      setResults(filtered); // Find all results
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSpeak = (text: string) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'zh-CN';
    window.speechSynthesis.speak(speech);
  };

  const handleGoogleSearch = (word: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(word + ' từ điển tiếng trung')}`, '_blank');
  };

  const guessPartOfSpeech = (meaning: string) => {
    const m = meaning.trim().toLowerCase();
    if (/^sự |^con |^cái |^người |^việc |^tiền |^nước |^tên |^dân tộc|^thời |^họ |^bánh|^cà phê/.test(m)) return 'Danh từ';
    if (/^làm |^đi |^đứng |^yêu |^nhớ |^hét |^gọi |^nói |^cười |^khóc |^nhìn |^chơi |^học /.test(m)) return 'Động từ';
    if (/^rất |^lạnh |^đẹp |^nhỏ |^lớn |^to |^xấu |^vui |^buồn |^tốt |^khó |^dễ |^mệt/.test(m)) return 'Tính từ';
    if (/^thán từ|^trợ từ/.test(m)) return 'Trợ từ';
    return 'Nghĩa khác';
  };

  const parsedMeanings = selectedEntry ? selectedEntry.meaning.split(/;|\//).map(m => m.trim()).filter(Boolean) : [];

  // Group meanings by part of speech
  const groupedMeanings: Record<string, string[]> = {};
  parsedMeanings.forEach(m => {
    const pos = guessPartOfSpeech(m);
    if (!groupedMeanings[pos]) groupedMeanings[pos] = [];
    groupedMeanings[pos].push(m);
  });

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#FDF9F3] pb-12 overflow-x-hidden font-sans">
      {/* Top Search Area */}
      <div className="w-full max-w-3xl mx-auto pt-8 px-4 flex flex-col items-center relative z-50" ref={searchRef}>
        <div className={cn("w-full relative bg-white transition-all duration-300 shadow-md border border-orange-100", isOpen ? 'rounded-t-3xl rounded-b-none border-b-0' : 'rounded-full hover:shadow-lg')}>
          <div className="flex items-center px-6 py-4">
            <Search className="text-orange-400 mr-3" size={20} />
            <input 
              type="text"
              className="flex-1 bg-transparent border-none focus:ring-0 text-base text-gray-800 placeholder-gray-400 outline-none"
              placeholder="Tìm kiếm từ vựng tiếng Trung, pinyin, nghĩa..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => query.trim() && setIsOpen(true)}
            />
            <div className="flex items-center gap-3 text-gray-400">
              {query && (
                <button onClick={() => setQuery('')} className="p-1 hover:bg-orange-50 hover:text-orange-500 rounded-full transition-colors">
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Autocomplete Dropdown */}
          <AnimatePresence>
            {isOpen && query && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                className="absolute left-0 right-0 top-full bg-white rounded-b-3xl shadow-xl border border-t-0 border-orange-100 overflow-hidden max-h-[400px] overflow-y-auto"
              >
                {results.length > 0 ? (
                  <div className="py-2">
                    {results.map((entry) => (
                      <button
                        key={entry.id}
                        onClick={() => {
                          setSelectedEntry(entry);
                          setIsOpen(false);
                          setQuery('');
                        }}
                        className="w-full text-left px-6 py-3 hover:bg-orange-50 flex flex-col gap-1 transition-all border-b border-orange-50 last:border-b-0"
                      >
                        <div className="flex items-center gap-3 text-gray-800">
                          <span className="text-lg font-bold text-orange-600">{entry.word}</span>
                          <span className="text-sm font-medium text-orange-500 opacity-80">【{entry.pinyin}】</span>
                          {entry.traditional && <span className="text-xs text-gray-400">P.thể: {entry.traditional}</span>}
                        </div>
                        <div className="text-gray-600 text-sm truncate">{entry.meaning}</div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-gray-500 text-sm">Không tìm thấy từ vựng phù hợp...</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Content Layout */}
      {selectedEntry && (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-start gap-6 px-4 mt-6 relative z-10">
          
          <div className="w-full bg-white rounded-3xl shadow-sm border border-orange-100 p-6 sm:p-10 relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 point-events-none"></div>

            {/* Word Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 gap-6 relative z-10">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <h1 className="text-6xl sm:text-8xl font-serif text-gray-900 leading-none">{selectedEntry.word}</h1>
                  {selectedEntry.traditional && selectedEntry.traditional !== selectedEntry.word && (
                    <span className="text-4xl text-gray-400 font-serif leading-none mt-2"> / {selectedEntry.traditional}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-lg border border-orange-200">
                    {selectedEntry.pinyin}
                  </span>
                  <button onClick={() => handleSpeak(selectedEntry.word)} className="p-2 bg-gray-50 hover:bg-orange-100 text-gray-500 hover:text-orange-600 rounded-lg transition-colors border border-gray-200 hover:border-orange-200">
                    <Volume2 size={20} />
                  </button>
                  <button 
                    onClick={() => handleGoogleSearch(selectedEntry.word)}
                    className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 text-sm font-medium rounded-lg transition-colors"
                  >
                    <Globe size={16} /> Tìm trên Google
                  </button>
                </div>
              </div>
              
              {/* Draw Character Card Idea */}
              <div className="shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-orange-50/50 border border-orange-100 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner">
                  <div className="absolute inset-2 border border-dashed border-orange-200 opacity-60 z-0">
                    <div className="absolute inset-0 border-b border-dashed border-orange-200 top-1/2" />
                    <div className="absolute inset-0 border-l border-dashed border-orange-200 left-1/2" />
                  </div>
                  <div className="relative z-10 hidden sm:block">
                    <StrokeWriter 
                      character={selectedEntry.word.charAt(0)}
                      size={100}
                      strokeColor="#ea580c"
                      radicalColor="#ea580c"
                    />
                  </div>
                  <div className="relative z-10 sm:hidden">
                    <StrokeWriter 
                      character={selectedEntry.word.charAt(0)}
                      size={70}
                      strokeColor="#ea580c"
                      radicalColor="#ea580c"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Definitions Section */}
            <div className="space-y-6 relative z-10">
              {Object.entries(groupedMeanings).map(([pos, meanings], posIdx) => (
                <div key={posIdx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                    <h3 className="font-bold text-[#D63031] flex items-center gap-2 text-lg">
                       <span className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-transparent border-l-[#D63031]"></span>
                       {pos}
                    </h3>
                  </div>

                  <div className="p-6 space-y-6">
                    {meanings.map((m, i) => {
                       // Try to assign examples evenly to meanings if there are examples
                       const meaningExamples = selectedEntry.examples.filter((_, exIdx) => exIdx % meanings.length === i);
                       return (
                        <div key={i} className="space-y-4">
                          <h4 className="text-lg font-semibold text-gray-800">
                            {i + 1}. {m}
                          </h4>
                          
                          {meaningExamples.length > 0 && (
                            <div className="space-y-4 pt-2">
                              {meaningExamples.map((ex, exIdx) => (
                                <div key={exIdx} className="pl-4 border-l-2 border-orange-200">
                                  <div className="flex gap-3">
                                    <button onClick={() => handleSpeak(ex.chinese)} className="text-gray-400 hover:text-orange-500 mt-1 shrink-0 p-1 rounded-md transition-colors">
                                      <Volume2 size={16} />
                                    </button>
                                    <div className="flex-1">
                                      <div className="text-lg text-gray-900 font-medium font-serif mb-1">
                                        {ex.chinese}
                                        {ex.traditional && ex.traditional !== ex.chinese && (
                                          <span className="text-gray-400 font-normal ml-2">【 {ex.traditional} 】</span>
                                        )}
                                      </div>
                                      <div className="text-sm text-orange-600 font-medium mb-1.5">{ex.pinyin}</div>
                                      <div className="text-gray-600">{ex.translation}</div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}

              {/* Dummy: Lượng từ (Quantifiers) */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
                 <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                    <h3 className="font-bold text-[#D63031] flex items-center gap-2 text-lg">
                       <span className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-transparent border-l-[#D63031]"></span>
                       Lượng từ
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="text-gray-800 font-medium">个 [gè], 种 [zhǒng]</div>
                  </div>
              </div>

              {/* Dummy: Từ ghép (Compound words) */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                    <h3 className="font-bold text-[#D63031] flex items-center gap-2 text-lg">
                       <span className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-transparent border-l-[#D63031]"></span>
                       Từ ghép:
                    </h3>
                    <Layers size={18} className="text-gray-400" />
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div className="flex gap-2"><span className="text-gray-400">1.</span> <span className="font-medium text-[#D63031]">{selectedEntry.word}</span> <span className="text-gray-600">học 【{selectedEntry.word}学】</span></div>
                    <div className="flex gap-2"><span className="text-gray-400">2.</span> <span className="font-medium text-[#D63031]">{selectedEntry.word}</span> <span className="text-gray-600">tập 【{selectedEntry.word}习】</span></div>
                    <div className="flex gap-2"><span className="text-gray-400">3.</span> <span className="text-gray-600">tốt</span> <span className="font-medium text-[#D63031]">{selectedEntry.word} 【好{selectedEntry.word}】</span></div>
                  </div>
              </div>

              {/* Dummy: Từ cận nghĩa (Synonyms) */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
                 <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                    <h3 className="font-bold text-[#D63031] flex items-center gap-2 text-lg">
                       <span className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-transparent border-l-[#D63031]"></span>
                       Từ cận nghĩa:
                    </h3>
                  </div>
                  <div className="p-6 flex flex-wrap gap-6 text-sm">
                    <div className="flex gap-2"><span className="text-gray-400">1.</span> <span className="text-[#D63031] font-medium">相似</span> 【TƯƠNG TỰ】</div>
                    <div className="flex gap-2"><span className="text-gray-400">2.</span> <span className="text-[#D63031] font-medium">相同</span> 【TƯƠNG ĐỒNG】</div>
                  </div>
              </div>

              {/* Dummy: Phân biệt (Distinguish) */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
                 <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                    <h3 className="font-bold text-[#D63031] flex items-center gap-2 text-lg">
                       <span className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-transparent border-l-[#D63031]"></span>
                       Phân biệt "{selectedEntry.word}"
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="text-gray-700 leading-relaxed text-sm">
                      Mục này giúp phân biệt cách sử dụng của <strong>{selectedEntry.word}</strong> với các từ có nghĩa tương đương trong các ngữ cảnh khác nhau. Tính năng này vẫn đang trong quá trình phát triển.
                    </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
