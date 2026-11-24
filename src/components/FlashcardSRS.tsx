import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Sparkles, PenTool, CheckCircle2, Flame, RotateCw } from 'lucide-react';
import { VOCABULARY_DATA, VocabWord } from '../data/vocabulary';
import { SRSCardState, SRSRating, calculateSM2, initCardSRS, isCardDue } from '../services/srs';

interface FlashcardSRSProps {
  onGoToWriter: (char: string) => void;
  onAskAI: (prompt: string) => void;
}

export const FlashcardSRS: React.FC<FlashcardSRSProps> = ({
  onGoToWriter,
  onAskAI
}) => {
  const [srsState, setSrsState] = useState<Record<string, SRSCardState>>(() => {
    const saved = localStorage.getItem('hanyubutainan_srs');
    return saved ? JSON.parse(saved) : {};
  });

  const [queue, setQueue] = useState<VocabWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Khởi tạo queue từ vựng đến hạn ôn
  useEffect(() => {
    const updatedState = { ...srsState };
    VOCABULARY_DATA.forEach(word => {
      if (!updatedState[word.id]) {
        updatedState[word.id] = initCardSRS(word.id);
      }
    });
    setSrsState(updatedState);
    localStorage.setItem('hanyubutainan_srs', JSON.stringify(updatedState));

    // Lọc các từ đến hạn ôn
    const dueWords = VOCABULARY_DATA.filter(word => isCardDue(updatedState[word.id]));
    setQueue(dueWords.length > 0 ? dueWords : [...VOCABULARY_DATA]);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, []);

  const currentWord = queue[currentIndex] || VOCABULARY_DATA[0];

  const handleFlip = () => {
    setIsFlipped(prev => !prev);
    if (!isFlipped && currentWord) {
      playAudio(currentWord.hanzi);
    }
  };

  const handleRate = (rating: SRSRating) => {
    if (!currentWord) return;
    const wordId = currentWord.id;
    const currentState = srsState[wordId] || initCardSRS(wordId);
    const newState = calculateSM2(currentState, rating);

    const updatedMap = {
      ...srsState,
      [wordId]: newState
    };
    setSrsState(updatedMap);
    localStorage.setItem('hanyubutainan_srs', JSON.stringify(updatedMap));

    // Next Card
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % queue.length);
  };

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (isFlipped) {
        if (e.key === '1') handleRate(1);
        if (e.key === '2') handleRate(2);
        if (e.key === '3') handleRate(3);
        if (e.key === '4') handleRate(4);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, currentWord]);

  // Thống kê
  const dueCount = VOCABULARY_DATA.filter(w => isCardDue(srsState[w.id])).length;
  const masteredCount = VOCABULARY_DATA.filter(w => (srsState[w.id]?.repetitions || 0) >= 3).length;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* SRS Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
          <p className="text-xs text-stone-500 font-medium">Cần ôn hôm nay</p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-bold text-red-600">{dueCount}</span>
            <span className="text-xs text-stone-400">từ</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
          <p className="text-xs text-stone-500 font-medium">Đã thuộc lòng</p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-bold text-emerald-600">{masteredCount}</span>
            <span className="text-xs text-stone-400">từ</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
          <p className="text-xs text-stone-500 font-medium">Tổng số từ</p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-bold text-stone-800">{VOCABULARY_DATA.length}</span>
            <span className="text-xs text-stone-400">từ</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
          <p className="text-xs text-stone-500 font-medium">Chuỗi học tập</p>
          <div className="flex items-baseline gap-1 mt-1 text-amber-500 font-bold text-2xl">
            <Flame size={20} className="fill-amber-500 text-amber-500" /> 1
            <span className="text-xs text-stone-400 font-normal">ngày</span>
          </div>
        </div>
      </div>

      {/* 3D Interactive Flashcard */}
      <div className="relative min-h-[380px] w-full cursor-pointer select-none" onClick={handleFlip}>
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ transformStyle: 'preserve-3d' }}
          className="w-full h-full min-h-[380px] relative"
        >
          {/* Card Front */}
          <div
            style={{ backfaceVisibility: 'hidden' }}
            className={`absolute inset-0 bg-white rounded-3xl border-2 border-stone-200 shadow-lg p-6 sm:p-8 flex flex-col justify-between ${
              isFlipped ? 'pointer-events-none' : ''
            }`}
          >
            <div className="flex justify-between items-center text-xs">
              <span className="px-2.5 py-1 rounded-full font-bold bg-red-50 text-red-700 border border-red-200">
                HSK {currentWord.hskLevel}
              </span>
              <span className="text-stone-400 font-medium">{currentWord.category}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio(currentWord.hanzi);
                }}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-red-600 transition"
              >
                <Volume2 size={18} />
              </button>
            </div>

            <div className="text-center py-8">
              <div className="chinese-font text-8xl font-bold text-stone-800 tracking-wide mb-3">
                {currentWord.hanzi}
              </div>
              <p className="text-xs text-stone-400">
                Chạm vào thẻ hoặc bấm <kbd className="px-1.5 py-0.5 rounded bg-stone-100 border text-stone-600 font-mono">Space</kbd> để lật thẻ
              </p>
            </div>

            <div className="text-center text-xs text-stone-400">
              Thẻ {currentIndex + 1} / {queue.length}
            </div>
          </div>

          {/* Card Back */}
          <div
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            className={`absolute inset-0 bg-white rounded-3xl border-2 border-red-200 shadow-lg p-6 sm:p-8 flex flex-col justify-between ${
              !isFlipped ? 'pointer-events-none' : ''
            }`}
          >
            <div className="flex justify-between items-center text-xs">
              <span className="px-2.5 py-1 rounded-full font-bold bg-red-50 text-red-700 border border-red-200">
                HSK {currentWord.hskLevel}
              </span>
              <span className="text-xs px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded font-medium">
                Hán-Việt: {currentWord.sinoVietnamese}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio(currentWord.hanzi);
                }}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-red-600 transition"
              >
                <Volume2 size={18} />
              </button>
            </div>

            <div className="text-center space-y-3 py-2">
              <div className="text-3xl font-bold text-red-600">{currentWord.pinyin}</div>
              <p className="text-lg font-semibold text-stone-800">{currentWord.meaning}</p>
              
              <div className="bg-stone-50 rounded-2xl p-3 text-left border border-stone-200 text-xs space-y-1">
                <p className="text-stone-400 font-medium">Ví dụ câu:</p>
                <p className="font-semibold text-stone-800 text-sm">{currentWord.example.cn}</p>
                <p className="text-red-600">{currentWord.example.pinyin}</p>
                <p className="text-stone-600">{currentWord.example.vi}</p>
              </div>

              {/* Sync Actions to Other Modules */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onGoToWriter(currentWord.hanzi);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold flex items-center gap-1 transition"
                >
                  <PenTool size={14} /> Tập viết chữ này
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAskAI(`Hãy phân tích chiết tự và các từ ghép thông dụng của chữ ${currentWord.hanzi}`);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold flex items-center gap-1 transition"
                >
                  <Sparkles size={14} className="text-amber-600" /> Hỏi Gia sư AI chiết tự
                </button>
              </div>
            </div>

            <div className="text-center text-xs text-stone-400">
              Đánh giá mức độ nhớ bên dưới (Phím 1, 2, 3, 4)
            </div>
          </div>
        </motion.div>
      </div>

      {/* SM-2 SRS Rating Buttons */}
      <div className={`grid grid-cols-4 gap-2 transition-all duration-200 ${isFlipped ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
        <button
          onClick={() => handleRate(1)}
          className="flex flex-col items-center py-2.5 px-1 bg-red-50 hover:bg-red-100 border border-red-200 rounded-2xl text-red-700 transition"
        >
          <span className="text-xs font-bold">1. Lại</span>
          <span className="text-[10px] text-red-500 mt-0.5">Quên (1 ngày)</span>
        </button>
        <button
          onClick={() => handleRate(2)}
          className="flex flex-col items-center py-2.5 px-1 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-2xl text-amber-700 transition"
        >
          <span className="text-xs font-bold">2. Khó</span>
          <span className="text-[10px] text-amber-600 mt-0.5">Nhớ chậm</span>
        </button>
        <button
          onClick={() => handleRate(3)}
          className="flex flex-col items-center py-2.5 px-1 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-2xl text-emerald-700 transition"
        >
          <span className="text-xs font-bold">3. Tốt</span>
          <span className="text-[10px] text-emerald-600 mt-0.5">Chuẩn hạn</span>
        </button>
        <button
          onClick={() => handleRate(4)}
          className="flex flex-col items-center py-2.5 px-1 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-2xl text-blue-700 transition"
        >
          <span className="text-xs font-bold">4. Dễ</span>
          <span className="text-[10px] text-blue-600 mt-0.5">Rất thuộc</span>
        </button>
      </div>
    </div>
  );
};
