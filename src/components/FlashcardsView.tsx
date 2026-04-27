import React, { useState } from 'react';
import { Vocabulary } from '../data/chineseData';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, RotateCcw, Volume2 } from 'lucide-react';
import { cn } from '../lib/utils';
import StrokeWriter from './StrokeWriter';

export function FlashcardsView({ vocabList, playAudio }: { vocabList: Vocabulary[], playAudio: (t: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

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

  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center">
      <div className="w-full mb-8 text-center text-gray-400 font-medium tracking-widest text-sm uppercase">
        Thẻ {currentIndex + 1} / {vocabList.length}
      </div>
      
      <div 
        className="w-[90%] sm:w-full h-[320px] sm:h-[400px] relative cursor-pointer perspective-1000 mb-6 sm:mb-8 max-w-lg mx-auto"
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
          <div className="absolute inset-0 bg-white rounded-3xl sm:rounded-[40px] shadow-xl shadow-orange-100/50 border-2 border-orange-50 flex flex-col items-center justify-center p-6 text-center"
               style={{ backfaceVisibility: 'hidden' }}>
            <StrokeWriter character={currentWord.character} size={80} className="mb-4 sm:mb-6 sm:!w-[100px] sm:!h-[100px] !w-[80px] !h-[80px]" />
            <button 
              onClick={(e) => { e.stopPropagation(); playAudio(currentWord.character); }}
              className="p-3 bg-orange-50 rounded-full text-orange-500 hover:text-white hover:bg-orange-500 transition-colors shadow-sm"
            >
              <Volume2 size={20} className="sm:w-6 sm:h-6" />
            </button>
            <div className="mt-6 text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-widest absolute bottom-6">Chạm để lật mặt thẻ</div>
          </div>
          
          {/* Back */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl sm:rounded-[40px] shadow-xl shadow-orange-200/50 border-2 border-orange-200 flex flex-col items-center justify-center p-6 text-center"
               style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}>
            <div className="text-xl sm:text-2xl font-mono text-orange-600 mb-2">{currentWord.pinyin}</div>
            <div className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{currentWord.meaning}</div>
            
            {currentWord.example && (
              <div className="mt-2 flex flex-col items-center gap-1 max-w-[260px] sm:max-w-sm">
                 <div className="text-sm sm:text-base font-medium text-gray-700">{currentWord.example}</div>
                 {currentWord.examplePinyin && <div className="text-[10px] sm:text-xs text-orange-600/80 font-mono">{currentWord.examplePinyin}</div>}
                 {currentWord.exampleTranslation && <div className="text-[10px] sm:text-xs text-gray-500">"{currentWord.exampleTranslation}"</div>}
              </div>
            )}
            
            <div className="text-[10px] sm:text-xs text-orange-400/80 font-medium uppercase tracking-widest absolute bottom-6">Chạm để lật mặt thẻ</div>
          </div>
        </motion.div>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-6 mt-2 sm:mt-4">
        <button 
          onClick={prevCard}
          className="p-3 sm:p-4 bg-white rounded-full shadow-sm text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition-all border border-gray-100"
        >
          <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
        </button>
        <button 
          onClick={() => { setIsFlipped(false); setCurrentIndex(0); }}
          className="p-2 sm:p-3 text-gray-300 hover:text-orange-500 transition-colors"
        >
          <RotateCcw size={20} className="sm:w-6 sm:h-6" />
        </button>
        <button 
           onClick={nextCard}
          className="p-3 sm:p-4 bg-orange-500 rounded-full shadow-lg shadow-orange-200 text-white hover:bg-orange-600 hover:scale-105 transition-all"
        >
          <ChevronRight size={24} className="sm:w-8 sm:h-8" />
        </button>
      </div>
    </div>
  );
}
