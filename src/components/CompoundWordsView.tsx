import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Puzzle, Volume2, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { dictionaryData } from '../data/dictionaryData';
import { CHINESE_DATA } from '../data/chineseData';
import { CHINESE_301_TOPICS } from '../data/chinese301Data';

interface CompoundWordsViewProps {
  playAudio: (text: string) => void;
}

const COMMON_ROOTS = ['一', '不', '上', '下', '人', '大', '小', '天', '心', '好', '出', '学', '看', '多', '生', '日', '月', '中', '水', '火', '电', '车', '书'];

export function CompoundWordsView({ playAudio }: CompoundWordsViewProps) {
  const [activeRoot, setActiveRoot] = useState('一');
  const [searchTerm, setSearchTerm] = useState('');

  const displayedRoot = searchTerm.trim() || activeRoot;

  const compoundWords = useMemo(() => {
    const searchLower = searchTerm.trim().toLowerCase();
    const targetSource = searchLower || activeRoot;
    if (!targetSource) return [];
    
    const found: {word: string; pinyin: string; translation: string}[] = [];
    const seen = new Set<string>();

    const addWord = (word: string, pinyin: string, translation: string) => {
      if (word.length > 1 && !seen.has(word)) {
        seen.add(word);
        found.push({ word, pinyin, translation });
      }
    };

    const isMatch = (word: string, pinyin: string, translation: string) => {
      if (!searchLower) {
        return word.includes(activeRoot);
      }
      const normalizedPinyin = pinyin.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      const normalizedSearch = searchLower.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

      return word.includes(searchLower) || 
             pinyin.toLowerCase().includes(searchLower) ||
             normalizedPinyin.includes(normalizedSearch) || 
             translation.toLowerCase().includes(searchLower);
    };

    // Search in global topics vocabulary first
    const topics = [...CHINESE_DATA, ...CHINESE_301_TOPICS];
    for (const topic of topics) {
      if (topic.vocabulary) {
        for (const v of topic.vocabulary) {
           if (isMatch(v.character, v.pinyin, v.meaning)) {
             addWord(v.character, v.pinyin, v.meaning);
           }
        }
      }
    }

    // Search in dictionaryData
    for (const entry of dictionaryData) {
       if (isMatch(entry.word, entry.pinyin, entry.meaning)) {
         addWord(entry.word, entry.pinyin, entry.meaning);
       }
    }

    // Sort:
    // If not searching by text, prioritize words starting with activeRoot
    // If searching by text, prioritize words that exactly match or start with it
    found.sort((a, b) => {
        if (!searchLower) {
          const aStarts = a.word.startsWith(activeRoot) ? 0 : 1;
          const bStarts = b.word.startsWith(activeRoot) ? 0 : 1;
          if (aStarts !== bStarts) return aStarts - bStarts;
          return a.word.length - b.word.length;
        } else {
          const normalizedSearch = searchLower.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
          const normPinyinA = a.pinyin.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
          const normPinyinB = b.pinyin.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

          // Priority 1: exact match
          const aExact = (a.word === searchLower || a.pinyin.toLowerCase() === searchLower || normPinyinA === normalizedSearch || a.translation.toLowerCase() === searchLower) ? 0 : 1;
          const bExact = (b.word === searchLower || b.pinyin.toLowerCase() === searchLower || normPinyinB === normalizedSearch || b.translation.toLowerCase() === searchLower) ? 0 : 1;
          if (aExact !== bExact) return aExact - bExact;
          return a.word.length - b.word.length;
        }
    });

    return found.slice(0, 100); // Limit to 100 items
  }, [searchTerm, activeRoot]);

  return (
    <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6 md:p-10 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
        <div>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <Puzzle size={20} />
            </div>
            Từ ghép (Từ vựng mở rộng)
          </h3>
          <p className="text-gray-500 mt-2 text-base md:text-lg">
            Khám phá 500+ từ ghép dựa trên một gốc từ để mở rộng vốn từ nhanh chóng
          </p>
        </div>

        <div className="relative max-w-sm w-full">
          <input
            type="text"
            placeholder="Nhập chữ Hán (ví dụ: 一, 不, 心)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
          />
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {!searchTerm && (
        <div className="mb-8">
          <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Các gốc từ phổ biến</div>
          <div className="flex flex-wrap gap-2">
            {COMMON_ROOTS.map(root => (
              <button
                key={root}
                onClick={() => setActiveRoot(root)}
                className={cn(
                  "w-10 h-10 rounded-xl text-lg font-bold flex items-center justify-center transition-all",
                  activeRoot === root ? "bg-blue-600 text-white shadow-md shadow-blue-200 scale-110 z-10" : "bg-gray-50 text-gray-600 border border-gray-100 hover:border-blue-200 hover:text-blue-600"
                )}
              >
                {root}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative z-10">
        <AnimatePresence mode="popLayout">
          {compoundWords.map((word, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={word.word}
              className="bg-white border-2 border-gray-100 rounded-2xl p-4 flex flex-col group hover:border-blue-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => playAudio(word.word)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {word.word.split('').map((char, i) => (
                      <span key={i} className={char === displayedRoot ? "text-blue-600" : ""}>{char}</span>
                    ))}
                  </div>
                </div>
                <button className="text-gray-300 group-hover:text-blue-500 transition-colors P-1">
                  <Volume2 size={18} />
                </button>
              </div>
              <div className="text-sm font-mono text-blue-500 mb-1">{word.pinyin}</div>
              <div className="text-sm text-gray-600 italic line-clamp-2">{word.translation}</div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {compoundWords.length === 0 && (
           <div className="col-span-full py-16 text-center text-gray-500 flex flex-col items-center">
              <Puzzle size={48} className="text-gray-200 mb-4" />
              <p>Không tìm thấy từ ghép nào chứa chữ "{displayedRoot}"</p>
           </div>
        )}
      </div>
    </div>
  );
}
