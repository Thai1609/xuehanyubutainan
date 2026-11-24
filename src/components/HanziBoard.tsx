import React, { useEffect, useRef, useState } from 'react';
import HanziWriter from 'hanzi-writer';
import { motion } from 'motion/react';
import { Play, RotateCcw, PenTool, Lightbulb, Volume2, Sparkles, HelpCircle } from 'lucide-react';
import { VOCABULARY_DATA, VocabWord } from '../data/vocabulary';

interface HanziBoardProps {
  selectedChar: string;
  onSelectChar: (char: string) => void;
  onAskAIAboutChar: (char: string) => void;
}

export const HanziBoard: React.FC<HanziBoardProps> = ({
  selectedChar,
  onSelectChar,
  onAskAIAboutChar
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  const [statusText, setStatusText] = useState<string>('Sẵn sàng luyện tập nét viết.');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [currentWord, setCurrentWord] = useState<VocabWord | undefined>(
    VOCABULARY_DATA.find(w => w.hanzi === selectedChar) || VOCABULARY_DATA[0]
  );

  useEffect(() => {
    const word = VOCABULARY_DATA.find(w => w.hanzi === selectedChar);
    setCurrentWord(word);
    initWriter(selectedChar);
  }, [selectedChar]);

  const initWriter = (char: string) => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';
    setIsSuccess(false);

    try {
      writerRef.current = HanziWriter.create(containerRef.current, char, {
        width: 250,
        height: 250,
        padding: 15,
        showOutline: true,
        strokeAnimationSpeed: 1.2,
        delayBetweenStrokes: 180,
        strokeColor: '#dc2626',   // Đỏ son truyền thống
        radicalColor: '#2563eb',  // Xanh dương nổi bật bộ thủ
        outlineColor: '#e7e5e4',  // Nét viền xám mờ
        drawingColor: '#059669',  // Màu xanh lục khi người dùng vẽ đúng
        drawingWidth: 18
      });
      setStatusText(`Đã tải chữ "${char}". Bạn có thể xem mô phỏng hoặc bắt đầu tự viết tay.`);
    } catch (e) {
      console.error(e);
      setStatusText(`Không thể tải dữ liệu nét cho chữ "${char}".`);
    }
  };

  const handleAnimate = () => {
    if (!writerRef.current) return;
    setIsSuccess(false);
    setStatusText(`Đang chạy hoạt ảnh thứ tự nét của chữ "${selectedChar}"...`);
    writerRef.current.animateCharacter({
      onComplete: () => {
        setStatusText(`Đã hoàn thành hoạt ảnh chữ "${selectedChar}".`);
      }
    });
  };

  const handleQuiz = () => {
    if (!writerRef.current) return;
    setIsSuccess(false);
    setStatusText(`Chế độ tự viết: Hãy dùng chuột hoặc ngón tay cảm ứng để vẽ từng nét.`);
    writerRef.current.quiz({
      onMistake: (strokeData) => {
        setStatusText(`Sai nét rồi. Còn lại ${strokeData.strokesRemaining} nét.`);
      },
      onCorrectStroke: (strokeData) => {
        setStatusText(`Chính xác! Đã viết đúng nét thứ ${strokeData.strokeNum + 1}.`);
      },
      onComplete: (summary) => {
        setIsSuccess(true);
        setStatusText(`🎉 Xuất sắc! Bạn đã viết hoàn thành chữ "${selectedChar}" với ${summary.totalMistakes} lần thử lại!`);
        playAudio(selectedChar);
      }
    });
  };

  const handleHint = () => {
    if (!writerRef.current) return;
    writerRef.current.animateStroke(0);
    setStatusText(`Gợi ý nét đầu tiên cho chữ "${selectedChar}".`);
  };

  const handleReset = () => {
    initWriter(selectedChar);
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

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 max-w-3xl mx-auto space-y-6">
      {/* Header & Character Selector */}
      <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-stone-100 gap-3">
        <div>
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            ✍️ Bảng Tập Viết Chữ Hán <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold border border-red-200">Hanzi Writer</span>
          </h2>
          <p className="text-xs text-stone-500">Mô phỏng bút thuận chuẩn và tự vẽ cảm ứng</p>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-stone-500">Chọn chữ:</label>
          <select
            value={selectedChar}
            onChange={(e) => onSelectChar(e.target.value)}
            className="bg-stone-50 border border-stone-300 text-stone-800 text-sm font-bold rounded-xl px-3 py-1.5 focus:ring-2 focus:ring-red-500"
          >
            {VOCABULARY_DATA.map((w) => (
              <option key={w.id} value={w.hanzi}>
                {w.hanzi} - {w.pinyin} ({w.meaning})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="flex flex-col items-center justify-center">
        {/* Tianzige (田字格) Grid Container */}
        <div className="relative p-2 rounded-3xl bg-amber-50/50 border-2 border-red-200 shadow-inner">
          <div
            ref={containerRef}
            className="w-[250px] h-[250px] bg-stone-50 flex items-center justify-center rounded-2xl relative overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(220, 38, 38, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(220, 38, 38, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '50% 50%',
              backgroundPosition: 'center'
            }}
          />
        </div>

        {/* Word Details */}
        {currentWord && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center space-y-1"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl font-bold text-red-600">{currentWord.pinyin}</span>
              <button
                onClick={() => playAudio(currentWord.hanzi)}
                className="p-1 rounded-full hover:bg-stone-100 text-stone-400 hover:text-red-600 transition"
                title="Nghe phát âm"
              >
                <Volume2 size={18} />
              </button>
            </div>
            <p className="text-sm font-semibold text-stone-800">
              {currentWord.meaning} <span className="text-xs text-amber-700 font-normal">({currentWord.sinoVietnamese})</span>
            </p>
            <p className="text-xs text-stone-400">Bộ thủ: {currentWord.radical}</p>
          </motion.div>
        )}
      </div>

      {/* Control Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-stone-100">
        <button
          onClick={handleAnimate}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-semibold shadow-sm transition flex items-center gap-1.5"
        >
          <Play size={16} /> Xem nét viết
        </button>
        <button
          onClick={handleQuiz}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition flex items-center gap-1.5"
        >
          <PenTool size={16} /> Tự viết tay (Quiz)
        </button>
        <button
          onClick={handleHint}
          className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-sm font-medium transition flex items-center gap-1"
        >
          <Lightbulb size={16} /> Gợi ý nét
        </button>
        <button
          onClick={handleReset}
          className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-sm font-medium transition flex items-center gap-1"
        >
          <RotateCcw size={16} /> Làm mới
        </button>
      </div>

      {/* AI Integration Quick Link */}
      <div className="flex justify-center">
        <button
          onClick={() => onAskAIAboutChar(selectedChar)}
          className="text-xs px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-50 to-red-50 border border-amber-200 text-amber-800 hover:border-amber-300 font-semibold transition flex items-center gap-1.5 shadow-xs"
        >
          <Sparkles size={14} className="text-amber-600" />
          Hỏi Gia sư AI Gemini phân tích chiết tự chữ "{selectedChar}"
        </button>
      </div>

      {/* Status Bar */}
      <div className={`text-center text-xs font-semibold py-2.5 px-4 rounded-xl border transition-all ${
        isSuccess
          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
          : 'bg-stone-50 text-stone-600 border-stone-200'
      }`}>
        {statusText}
      </div>
    </div>
  );
};
