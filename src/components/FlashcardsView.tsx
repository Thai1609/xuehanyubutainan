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
        className="w-full aspect-[4/3] sm:aspect-video relative cursor-pointer perspective-1000 mb-8"
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
          <div className="absolute inset-0 bg-white rounded-[40px] shadow-sm border-2 border-orange-100 flex flex-col items-center justify-center p-8 text-center"
               style={{ backfaceVisibility: 'hidden' }}>
            <StrokeWriter character={currentWord.character} size={120} className="mb-4" />
            <button 
              onClick={(e) => { e.stopPropagation(); playAudio(currentWord.character); }}
              className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-colors"
            >
              <Volume2 size={24} />
            </button>
            <div className="mt-8 text-sm text-gray-400">Chạm để lật mặt thẻ</div>
          </div>
          
          {/* Back */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 rounded-[40px] shadow-inner border-2 border-orange-200 flex flex-col items-center justify-center p-8 text-center"
               style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}>
            <div className="text-3xl sm:text-4xl font-mono text-orange-600 mb-2">{currentWord.pinyin}</div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">{currentWord.meaning}</div>
            
            {currentWord.example && (
              <div className="mt-2 flex flex-col items-center gap-1.5 max-w-sm">
                 <div className="text-lg sm:text-xl font-medium text-gray-700">{currentWord.example}</div>
                 {currentWord.examplePinyin && <div className="text-sm sm:text-base text-orange-600/80 font-mono">{currentWord.examplePinyin}</div>}
                 {currentWord.exampleTranslation && <div className="text-sm sm:text-base text-gray-500">"{currentWord.exampleTranslation}"</div>}
              </div>
            )}
            
            <div className="mt-6 text-sm text-gray-400 absolute bottom-6">Chạm để lật mặt thẻ</div>
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
