import React, { useState } from 'react';
import { Vocabulary } from '../data/chineseData';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, RotateCcw, Volume2 } from 'lucide-react';
import { cn } from '../lib/utils';
import StrokeWriter from './StrokeWriter';

export function FlashcardsView({ vocabList, playAudio }: { vocabList: Vocabulary[], playAudio: (t: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  React.useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [vocabList]);

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex(p => (p + 1) % vocabList.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex(p => (p - 1 + vocabList.length) % vocabList.length);
  };

  if(!vocabList || vocabList.length === 0) return <div>Không có từ vựng</div>;

  const currentWord = vocabList[currentIndex];
  const charCount = currentWord.character ? currentWord.character.length : 1;
  const writerSize = charCount >= 4 ? 60 : charCount >= 3 ? 80 : charCount === 2 ? 100 : 140;

  return (
    <div className="w-full max-w-sm sm:max-w-2xl mx-auto flex flex-col items-center">
      <div className="w-full mb-6 text-center text-gray-400 font-medium tracking-widest text-sm uppercase">
        Thẻ {currentIndex + 1} / {vocabList.length}
      </div>
      
      <div 
        className="w-full h-[380px] sm:h-[420px] relative cursor-pointer perspective-1000 mb-8"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: '1000px' }}
      >
        <motion.div
          animate={{ rotateX: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-white rounded-[40px] shadow-sm border-2 border-orange-100 flex flex-col items-center justify-center p-6 sm:p-8 text-center"
               style={{ backfaceVisibility: 'hidden' }}>
            <StrokeWriter character={currentWord.character} size={writerSize} className="mb-6" />
            <button 
              onClick={(e) => { e.stopPropagation(); playAudio(currentWord.character); }}
              className="p-4 bg-gray-50 rounded-full text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-colors"
            >
              <Volume2 size={24} />
            </button>
            <div className="mt-8 text-sm text-gray-400">Chạm để lật mặt thẻ</div>
          </div>
          
          {/* Back */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 rounded-[40px] shadow-inner border-2 border-orange-200 flex flex-col items-center justify-center p-6 sm:p-8 text-center"
               style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}>
            <div className="text-3xl sm:text-4xl font-mono text-orange-600 mb-6">{currentWord.pinyin}</div>
            <div className="flex-1 w-full overflow-y-auto px-2 custom-scrollbar flex flex-col items-center justify-center">
              <div className="text-xl sm:text-3xl font-bold text-gray-800 leading-tight w-full">
                {currentWord.meaning.includes(';') 
                  ? currentWord.meaning.split(';').map((m, i) => (
                      <div key={i} className={i !== 0 ? "mt-3 pt-3 border-t border-orange-200/50" : ""}>
                        {m.trim()}
                      </div>
                    ))
                  : currentWord.meaning
                }
              </div>
              {currentWord.mnemonic && (
                <div className="mt-6 px-4 text-sm text-gray-500 italic">
                  Mẹo nhớ: {currentWord.mnemonic}
                </div>
              )}
              {currentWord.customExamples && currentWord.customExamples.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {currentWord.customExamples.map((ex, i) => (
                    <span key={i} className="bg-orange-600/10 text-orange-700 px-3 py-1 rounded-full text-xs font-bold border border-orange-200">
                       {ex}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {currentWord.level && (
              <div className="mt-4 px-3 py-1 bg-white/60 rounded-full text-[10px] font-black text-orange-400 uppercase tracking-widest border border-orange-100 shrink-0">
                {currentWord.level}
              </div>
            )}
            <div className="mt-6 text-sm text-gray-400 shrink-0">Chạm để lật mặt thẻ</div>
          </div>
        </motion.div>
      </div>
      
      <div className="flex items-center gap-6 mt-4">
        <button 
          onClick={prevCard}
          className="p-4 bg-white rounded-full shadow-sm text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition-all border border-gray-100"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={() => { setIsFlipped(false); setCurrentIndex(0); }}
          className="p-3 text-gray-300 hover:text-orange-500 transition-colors"
        >
          <RotateCcw size={24} />
        </button>
        <button 
           onClick={nextCard}
          className="p-4 bg-orange-500 rounded-full shadow-lg shadow-orange-200 text-white hover:bg-orange-600 hover:scale-105 transition-all"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
