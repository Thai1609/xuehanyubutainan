import React, { useState, useMemo } from 'react';
import { Vocabulary } from '../data/chineseData';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { cn } from '../lib/utils';
import StrokeWriter from './StrokeWriter';

function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function QuizView({ vocabList }: { vocabList: Vocabulary[] }) {
  const [started, setStarted] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  // Generate Questions
  const questions = useMemo(() => {
    if (!vocabList || vocabList.length < 4) return [];
    
    // We will make 10 questions randomly
    const qCount = Math.min(10, vocabList.length);
    const shuffledVocab = shuffle([...vocabList]);
    const qs = [];
    
    for (let i = 0; i < qCount; i++) {
        const correct = shuffledVocab[i];
        
        // Randomly choose question type: 
        // 0: Given Chinese, what is meaning?
        // 1: Given Chinese, what is pinyin?
        const qType = Math.random() > 0.5 ? 'meaning' : 'pinyin';
        
        // Let's get 3 wrong answers
        const wrongAnswers = shuffle(vocabList.filter(v => v.character !== correct.character)).slice(0, 3);
        
        const options = shuffle([correct, ...wrongAnswers]).map(v => 
             qType === 'meaning' ? ({ id: v.character, text: v.meaning }) : ({ id: v.character, text: v.pinyin })
        );
        
        qs.push({
            id: i,
            correctAnswerId: correct.character,
            questionText: correct.character,
            qType,
            options
        });
    }
    return qs;
  }, [vocabList, started]);

  if (!vocabList || vocabList.length < 4) {
    return <div className="text-center text-gray-500 py-12">Cần ít nhất 4 từ vựng để bắt đầu trắc nghiệm.</div>;
  }

  if (!started) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-24 h-24 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Trắc nghiệm Từ Vựng</h2>
        <p className="text-gray-500 mb-8 max-w-md text-center">Làm bài kiểm tra ngắn 10 câu để xem bạn đã nhớ hết các từ vựng trong bài chưa nhé.</p>
        <button 
          onClick={() => { setStarted(true); setCurrentQIndex(0); setScore(0); setFinished(false); setSelectedAnswer(null); }}
          className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold shadow-lg shadow-orange-200 transition-all hover:scale-105"
        >
          Bắt đầu ngay
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-6xl font-black text-orange-500 mb-4">{score} / {questions.length}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Bạn đã hoàn thành!</h2>
        <button 
          onClick={() => { setStarted(false); }}
          className="px-8 py-4 bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-full font-bold transition-all flex items-center gap-2"
        >
          <RotateCcw size={20} /> Làm lại
        </button>
      </div>
    );
  }

  const q = questions[currentQIndex];

  const handleSelect = (id: string) => {
    if (selectedAnswer) return; // Prevent clicking again
    setSelectedAnswer(id);
    
    if (id === q.correctAnswerId) {
        setScore(s => s + 1);
    }
    
    setTimeout(() => {
        if (currentQIndex < questions.length - 1) {
            setCurrentQIndex(currentQIndex + 1);
            setSelectedAnswer(null);
        } else {
            setFinished(true);
        }
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-8">
        <div className="text-sm font-bold text-gray-400">Câu {currentQIndex + 1} / {questions.length}</div>
        <div className="text-sm font-bold text-orange-500">Điểm: {score}</div>
      </div>
      
      <div className="bg-white p-10 rounded-[40px] border-b-8 border-gray-100 w-full mb-8 shadow-sm flex flex-col items-center">
        <div className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-4">
            {q.qType === 'meaning' ? 'Chọn nghĩa đúng' : 'Chọn Pinyin đúng'}
        </div>
        <div className="pointer-events-none">
            <StrokeWriter character={q.questionText} size={90} className="mb-2" />
        </div>
      </div>
      
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {q.options.map((opt) => {
            const isSelected = selectedAnswer === opt.id;
            const isCorrect = opt.id === q.correctAnswerId;
            const showStatus = selectedAnswer !== null; // someone clicked
            
            let btnClass = "bg-white border-gray-100 text-gray-700 hover:border-orange-200 hover:bg-orange-50";
            if (showStatus) {
                if (isCorrect) {
                  btnClass = "bg-green-500 border-green-600 text-white shadow-lg shadow-green-200 scale-[1.02]";
                } else if (isSelected && !isCorrect) {
                  btnClass = "bg-red-50 border-red-100 text-red-500 opacity-50";
                } else {
                  btnClass = "bg-gray-50 border-gray-100 text-gray-400 opacity-50";
                }
            }
            
            return (
                <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    disabled={showStatus}
                    className={cn(
                        "p-6 rounded-3xl border-2 font-bold text-lg transition-all flex items-center justify-center relative",
                        btnClass
                    )}
                >
                    {opt.text}
                    {showStatus && isCorrect && <CheckCircle2 className="absolute right-4" size={20} />}
                    {showStatus && isSelected && !isCorrect && <XCircle className="absolute right-4" size={20} />}
                </button>
            );
        })}
      </div>
    </div>
  );
}
