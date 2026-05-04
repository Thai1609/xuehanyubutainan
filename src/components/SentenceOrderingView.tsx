
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, RefreshCw, CheckCircle2, XCircle, Info, ChevronRight, Trophy } from 'lucide-react';
import { HSK_SENTENCES, SentenceExercise } from '../data/sentenceOrderingData';
import { cn } from '../lib/utils';

interface SentenceOrderingViewProps {
  onBack: () => void;
}

export const SentenceOrderingView: React.FC<SentenceOrderingViewProps> = ({ onBack }) => {
  const [selectedLevel, setSelectedLevel] = useState<'HSK1' | 'HSK2' | 'HSK3' | 'HSK4' | 'HSK5' | 'HSK6'>('HSK1');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [shuffledSentences, setShuffledSentences] = useState<SentenceExercise[]>([]);

  // Function to shuffle an array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const list = [...array];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };

  useEffect(() => {
    const filtered = HSK_SENTENCES.filter(s => s.level === selectedLevel);
    // Shuffle the sentences and their internal scrambled words
    const randomized = shuffleArray(filtered).map(s => ({
      ...s,
      scrambled: shuffleArray(s.scrambled)
    }));
    setShuffledSentences(randomized);
    resetState();
  }, [selectedLevel]);

  const currentSentence = shuffledSentences[currentIndex];

  const availableWords = useMemo(() => {
    if (!currentSentence) return [];
    
    // Calculate which words from scrambled have been used
    const usedCounts: Record<string, number> = {};
    selectedWords.forEach(w => usedCounts[w] = (usedCounts[w] || 0) + 1);

    const result: string[] = [];
    const sourceWords = [...currentSentence.scrambled];
    
    sourceWords.forEach(word => {
        if (!usedCounts[word] || usedCounts[word] === 0) {
            result.push(word);
        } else {
            usedCounts[word]--;
        }
    });

    return result;
  }, [currentSentence, selectedWords]);

  const resetState = () => {
    setCurrentIndex(0);
    setScore(0);
    setFinished(false);
    resetSentence();
  };

  const resetLevel = () => {
    const filtered = HSK_SENTENCES.filter(s => s.level === selectedLevel);
    const randomized = shuffleArray(filtered).map(s => ({
      ...s,
      scrambled: shuffleArray(s.scrambled)
    }));
    setShuffledSentences(randomized);
    resetState();
  };

  const resetSentence = () => {
    setSelectedWords([]);
    setIsCorrect(null);
    setShowAnswer(false);
  };

  const handleWordClick = (word: string) => {
    if (isCorrect !== null) return;
    setSelectedWords([...selectedWords, word]);
  };

  const handleRemoveWord = (index: number) => {
    if (isCorrect !== null) return;
    const newWords = [...selectedWords];
    newWords.splice(index, 1);
    setSelectedWords(newWords);
  };

  const checkAnswer = () => {
    const combined = selectedWords.join('').replace(/[，。？！、]/g, '');
    const target = currentSentence.chinese.replace(/[，。？！、]/g, '');
    
    if (combined === target) {
      setIsCorrect(true);
      setScore(s => s + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const nextSentence = () => {
    if (currentIndex < shuffledSentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetSentence();
    } else {
      setFinished(true);
    }
  };

  if (!currentSentence && !finished) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header */}
      <div className="flex items-center justify-center">
        <div className="flex gap-1.5 p-1 bg-gray-100 rounded-xl">
          {['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'].map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level as any)}
              className={cn(
                "px-3 py-1.5 rounded-lg font-bold text-xs transition-all",
                selectedLevel === level ? "bg-orange-500 text-white shadow-lg shadow-orange-200" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              )}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {finished ? (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[32px] p-8 text-center shadow-xl border border-orange-100"
          >
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-5 text-orange-500">
              <Trophy size={40} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-1">Hoàn thành bài tập!</h3>
            <p className="text-sm text-gray-500 mb-6">Bạn đã hoàn thành các câu trong trình độ {selectedLevel}</p>
            <div className="text-4xl font-black text-orange-500 mb-8">
              {score} / {shuffledSentences.length}
            </div>
            <div className="flex gap-4 justify-center">
                <button 
                onClick={resetLevel}
                className="px-6 py-3 bg-orange-500 text-white rounded-xl font-bold text-sm hover:bg-orange-600 transition-all shadow-lg"
                >
                Luyện tập thêm
                </button>
                <button 
                onClick={onBack}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all"
                >
                Về trang chủ
                </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key={currentSentence.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Progress */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Câu hỏi {currentIndex + 1} / {shuffledSentences.length}</span>
                 <span className="text-[10px] font-bold text-gray-400">{selectedLevel}</span>
               </div>
               <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-orange-500 transition-all duration-500" 
                   style={{ width: `${((currentIndex + 1) / shuffledSentences.length) * 100}%` }}
                 />
               </div>
            </div>

            {/* Translation Area */}
            <div className="bg-orange-50 rounded-2xl p-6 text-center border-2 border-orange-100 border-dashed">
                <p className="text-xl font-bold text-gray-800 leading-relaxed italic">"{currentSentence.translation}"</p>
            </div>

            {/* Selection Area */}
            <div className="min-h-[100px] bg-white rounded-2xl p-5 shadow-inner border-2 border-gray-100 flex flex-wrap gap-2.5 justify-center items-center">
                {selectedWords.length === 0 && (
                    <span className="text-sm text-gray-300 font-medium whitespace-nowrap">Nhấn các từ bên dưới để sắp xếp...</span>
                )}
                <AnimatePresence>
                    {selectedWords.map((word, idx) => (
                        <motion.button
                            key={`${word}-${idx}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            onClick={() => handleRemoveWord(idx)}
                            className={cn(
                                "px-3 py-2 bg-white border rounded-xl text-xl font-serif transition-all shadow-sm",
                                isCorrect === true ? "border-green-200 text-green-700 bg-green-50" :
                                isCorrect === false ? "border-red-200 text-red-700 bg-red-50" :
                                "border-orange-100 text-gray-800 hover:border-orange-300"
                            )}
                        >
                            {word}
                        </motion.button>
                    ))}
                </AnimatePresence>
            </div>

            {/* Available Words */}
            <div className="flex flex-wrap gap-3 justify-center pt-2">
                {availableWords.map((word, idx) => (
                    <motion.button
                        key={`avail-${word}-${idx}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleWordClick(word)}
                        disabled={isCorrect !== null}
                        className="px-5 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-2xl font-serif text-gray-800 hover:shadow-md hover:border-orange-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        {word}
                    </motion.button>
                ))}
            </div>

            {/* Controls */}
            <div className="pt-6 flex flex-col items-center gap-4">
                {isCorrect === null ? (
                    <button
                        onClick={checkAnswer}
                        disabled={selectedWords.length === 0}
                        className="px-10 py-4 bg-orange-500 text-white rounded-[1.5rem] font-black text-base shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
                    >
                        KIỂM TRA ĐÁP ÁN
                    </button>
                ) : (
                    <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4">
                        <div className={cn(
                            "w-full rounded-[2rem] p-5 flex items-center justify-between mb-6 shadow-sm border",
                            isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                        )}>
                            <div className="flex items-center gap-4">
                                <div className={cn(
                                    "p-3 rounded-full",
                                    isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
                                )}>
                                    {isCorrect ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                                </div>
                                <div className="text-left">
                                    <div className={cn("text-lg font-black", isCorrect ? "text-green-700" : "text-red-700")}>
                                        {isCorrect ? "Chính xác!" : "Chưa đúng rồi!"}
                                    </div>
                                    <button 
                                        onClick={() => setShowAnswer(!showAnswer)}
                                        className="text-[10px] font-bold text-gray-500 hover:text-gray-700 underline underline-offset-4"
                                    >
                                        {showAnswer ? "Ẩn đáp án" : "Xem đáp án đúng"}
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={nextSentence}
                                className={cn(
                                    "px-6 py-3 rounded-2xl font-black text-white flex items-center gap-2 shadow-lg hover:scale-105 transition-all text-sm",
                                    isCorrect ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                                )}
                            >
                                {currentIndex < shuffledSentences.length - 1 ? "TIẾP" : "KẾT QUẢ"}
                                <ChevronRight size={16} />
                            </button>
                        </div>

                        {showAnswer && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="w-full bg-white rounded-2xl p-6 border border-gray-100 text-center space-y-2 shadow-sm"
                            >
                                <div className="text-2xl font-serif font-black text-gray-900">{currentSentence.chinese}</div>
                                <div className="text-base font-medium text-orange-500">{currentSentence.pinyin}</div>
                            </motion.div>
                        )}
                    </div>
                )}

                <button 
                  onClick={resetSentence}
                  className="flex items-center gap-2 text-sm font-black text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <RefreshCw size={14} /> LÀM LẠI CÂU NÀY
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
