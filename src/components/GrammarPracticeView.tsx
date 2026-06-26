import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  BookOpen, 
  Sparkles, 
  Award, 
  HelpCircle,
  Play
} from 'lucide-react';
import { cn } from '../lib/utils';
import { GRAMMAR_PRACTICE_QUESTIONS, GrammarQuestion } from '../data/grammarPracticeData';

// Grouping definitions for the Practice Catalog
interface CatalogCategory {
  id: string;
  title: string;
  description: string;
  colorClass: string;
  bgHex: string;
  icon: React.ReactNode;
  grammarIds: string[]; // Specific grammarIds to pull
}

interface GrammarPracticeViewProps {
  onBackToDashboard: () => void;
  playAudio: (text: string) => void;
  isPlaying: string | null;
}

export const GrammarPracticeView: React.FC<GrammarPracticeViewProps> = ({ 
  onBackToDashboard, 
  playAudio,
  isPlaying
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CatalogCategory | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [wrongAnswersList, setWrongAnswersList] = useState<GrammarQuestion[]>([]);

  // Definitions of our beautifully structured Grammar Practice Catalog Categories
  const categories: CatalogCategory[] = useMemo(() => [
    {
      id: "cat-1",
      title: "1. Cấu trúc câu cơ bản",
      description: "Thực hành về S+V+O, Định nghĩa chữ '是' (Là), và Định ngữ sở hữu '的'.",
      colorClass: "from-blue-500 to-indigo-600 text-blue-600 bg-blue-50 border-blue-100",
      bgHex: "#3b82f6",
      icon: <BookOpen className="w-5 h-5" />,
      grammarIds: ["basic-1", "basic-8", "basic-9"]
    },
    {
      id: "cat-2",
      title: "2. Địa điểm, Thời gian & Phủ định",
      description: "Đặt trạng ngữ chỉ địa điểm, mốc thời gian và cách phân biệt phủ định '不' & '没'.",
      colorClass: "from-emerald-500 to-teal-600 text-emerald-600 bg-emerald-50 border-emerald-100",
      bgHex: "#10b981",
      icon: <Sparkles className="w-5 h-5" />,
      grammarIds: ["basic-3", "basic-4", "basic-5"]
    },
    {
      id: "cat-3",
      title: "3. So sánh & Câu hỏi chính phản",
      description: "Sử dụng cấu trúc so sánh chữ '比' và dạng đặt câu hỏi lặp V+不+V.",
      colorClass: "from-purple-500 to-violet-600 text-purple-600 bg-purple-50 border-purple-100",
      bgHex: "#a855f7",
      icon: <HelpCircle className="w-5 h-5" />,
      grammarIds: ["basic-7", "basic-10"]
    },
    {
      id: "cat-4",
      title: "4. Lượng từ & Thể nghi vấn",
      description: "Luyện tập lượng từ đặc trưng (本, 张, 个) và từ nghi vấn (吗, 什么, 谁).",
      colorClass: "from-orange-500 to-amber-600 text-orange-600 bg-orange-50 border-orange-100",
      bgHex: "#f97316",
      icon: <Award className="w-5 h-5" />,
      grammarIds: ["basic-6", "basic-12", "basic-14"]
    },
    {
      id: "cat-5",
      title: "5. Các mẫu liên từ mở rộng",
      description: "Mẫu câu nhân quả (因为...所以...), nhượng bộ (虽然...但是...) và vừa...vừa...",
      colorClass: "from-pink-500 to-rose-600 text-pink-600 bg-pink-50 border-pink-100",
      bgHex: "#ec4899",
      icon: <Sparkles className="w-5 h-5" />,
      grammarIds: ["basic-15", "basic-16", "basic-21"]
    },
    {
      id: "cat-6",
      title: "🚀 Đấu trường Ngữ pháp tổng hợp",
      description: "Làm bài kiểm tra ngẫu nhiên 10 câu hỏi bao hàm toàn bộ 21 cấu trúc đã học.",
      colorClass: "from-indigo-600 to-purple-600 text-indigo-600 bg-indigo-50 border-indigo-100",
      bgHex: "#4338ca",
      icon: <Award className="w-5 h-5" />,
      grammarIds: [] // Empty means all questions
    }
  ], []);

  // Filter and randomize questions based on the targeted category
  const activeQuestions = useMemo(() => {
    if (!selectedCategory) return [];

    let filtered = GRAMMAR_PRACTICE_QUESTIONS;

    if (selectedCategory.grammarIds.length > 0) {
      filtered = GRAMMAR_PRACTICE_QUESTIONS.filter(q => 
        selectedCategory.grammarIds.includes(q.grammarId)
      );
    }

    // Shuffle and pick max 10
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }, [selectedCategory]);

  const currentQuestion: GrammarQuestion | undefined = activeQuestions[currentQuestionIndex];

  const handleStartPractice = (category: CatalogCategory) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setWrongAnswersList([]);
  };

  const handleAnswerSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option === currentQuestion?.answer;
    if (isCorrect) {
      setScore(s => s + 1);
    } else if (currentQuestion) {
      setWrongAnswersList(w => [...w, currentQuestion]);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRetry = () => {
    if (selectedCategory) {
      // Force reshuffle by re-triggering start with same category
      handleStartPractice(selectedCategory);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-0">
      <AnimatePresence mode="wait">
        {!selectedCategory ? (
          /* SECTION 1: Practice Catalog Dashboard */
          <motion.div
            key="catalog"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            {/* Header banner */}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-6 md:p-8 text-white shadow-md relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-y-1/4 translate-x-1/8">
                <BookOpen className="w-80 h-80 text-white" />
              </div>
              <div className="relative z-10 max-w-xl">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase inline-block mb-3">
                  Hệ thống luyện tập sinh động
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                  Đấu Trường Ngữ Pháp
                </h1>
                <p className="text-white/90 text-sm md:text-base font-medium">
                  Rèn luyện tư duy đặt câu, phân bổ trạng ngữ, cấu trúc so sánh và liên từ thông qua các danh mục bài học phân nhánh riêng biệt.
                </p>
              </div>
            </div>

            {/* Catalog Grid */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                📂 Danh mục luyện tập:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => handleStartPractice(cat)}
                    className="group bg-white p-6 rounded-3xl border border-gray-100 hover:border-indigo-200 hover:shadow-md cursor-pointer transition-all hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:scale-110",
                        cat.colorClass.split(' ')[2], // Pick target text-xxx
                        cat.colorClass.split(' ')[3]  // Pick target bg-xxx
                      )}>
                        {cat.icon}
                      </div>
                      <h3 className="text-lg font-extrabold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Bắt đầu luyện <Play size={10} className="fill-current" />
                      </span>
                      <span className="text-[10px] font-mono font-bold text-gray-400 bg-gray-50 py-1 px-2.5 rounded-full border border-gray-100/50">
                        {cat.grammarIds.length === 0 ? "25+ Câu" : "10 Câu hỏi"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : quizFinished ? (
          /* SECTION 2: Final Summary / Results Screen */
          <motion.div
            key="summary"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100 text-center space-y-8"
          >
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto text-indigo-600 shadow-inner">
              <Award size={40} />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-black text-gray-950">Hoàn thành thử thách!</h3>
              <p className="text-sm font-medium text-gray-500 px-4 max-w-lg mx-auto">
                Bằng cách nỗ lực hoàn thiện kỹ năng, bạn đang ngày càng làm chủ các cấu trúc ngữ pháp thông dụng này.
              </p>
            </div>

            {/* Score Ring / Metrics */}
            <div className="bg-gray-50/50 py-6 px-10 rounded-2xl w-fit mx-auto border border-gray-100 flex items-center gap-8 justify-center">
              <div>
                <div className="text-4xl md:text-5xl font-black text-indigo-600 mb-1">
                  {score} <span className="text-2xl text-gray-400">/ {activeQuestions.length}</span>
                </div>
                <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  Điểm số của bạn
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <div className="text-xl font-bold text-gray-800 mb-1">
                  {Math.round((score / activeQuestions.length) * 100)}%
                </div>
                <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  Độ chính xác
                </div>
              </div>
            </div>

            {/* Explanations Recap block for items missed */}
            {wrongAnswersList.length > 0 && (
              <div className="text-left space-y-4 max-w-2xl mx-auto pt-4 border-t border-gray-100">
                <h4 className="text-md font-extrabold text-gray-900 flex items-center gap-2">
                  <span>💡</span> Nhìn lại các câu chưa trả lời đúng để ôn tập:
                </h4>
                <div className="grid grid-cols-1 gap-3 max-h-72 overflow-y-auto pr-2">
                  {wrongAnswersList.map((q, idx) => {
                    const completeSentence = q.question.replace("__", q.answer);
                    return (
                      <div key={idx} className="p-4 bg-red-50/40 rounded-2xl border border-red-100/50 text-sm space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-red-600 bg-red-100/60 px-2 py-0.5 rounded-full uppercase leading-none">
                            {q.category}
                          </span>
                          <button 
                            onClick={() => playAudio(completeSentence)}
                            className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50"
                          >
                            <Volume2 size={14} />
                          </button>
                        </div>
                        <div className="font-bold text-gray-900 text-base">{completeSentence}</div>
                        <div className="font-mono text-xs text-gray-500">{q.pinyin}</div>
                        <div className="text-gray-700 italic">Dịch: "{q.translation}"</div>
                        <div className="text-xs text-gray-500 bg-white p-2 rounded-lg border border-red-100/30 font-medium">
                          <span className="font-bold text-gray-700 block mb-0.5">Quy tắc ngữ pháp:</span>
                          {q.explanation}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Buttons control */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <button
                onClick={handleRetry}
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-100"
              >
                <RotateCcw size={16} /> Luyện lại danh mục này
              </button>
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all"
              >
                Chọn danh mục khác
              </button>
            </div>
          </motion.div>
        ) : (
          /* SECTION 3: Active Question View */
          <motion.div
            key="question-box"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            {/* Header row: Back to Catalog and progress */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-4 py-2 rounded-full bg-white border border-gray-100 hover:bg-gray-50 text-xs font-bold text-gray-600 transition-colors flex items-center gap-2"
              >
                <ChevronLeft size={14} /> Danh mục luyện tập
              </button>

              <div className="text-xs font-black text-indigo-500 px-3 py-1 bg-indigo-50 rounded-full border border-indigo-100">
                Chủ đề: {selectedCategory.title.replace(/^\d+\.\s*/, '')}
              </div>
            </div>

            {/* Progression details card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                  Câu hỏi {currentQuestionIndex + 1} / {activeQuestions.length}
                </span>
                <span className="text-[10px] font-bold text-gray-400">Đúng: {score}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-500" 
                  style={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* The Question Card */}
            {currentQuestion && (
              <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col items-center justify-center min-h-[14rem] relative">
                <span className="absolute top-4 left-4 text-[10px] uppercase font-black tracking-widest text-gray-400">
                  {currentQuestion.category}
                </span>

                <div className="text-center space-y-4 my-6">
                  {/* Blanks text displays with oversized typography */}
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide font-serif leading-relaxed select-none">
                    {/* Format with stylized blank bar */}
                    {currentQuestion.question.split("__").map((part, index, arr) => (
                      <React.Fragment key={index}>
                        {part}
                        {index < arr.length - 1 && (
                          <span className={cn(
                            "px-4 mx-2 border-b-4 inline-block min-w-[3.5rem] text-center",
                            selectedAnswer ? "text-indigo-600 border-indigo-400" : "bg-gray-100 border-gray-300 h-10 w-14 rounded-lg transform translate-y-1 animate-pulse"
                          )}>
                            {selectedAnswer || ""}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Vietnamese explanation translation container */}
                  <p className="text-md sm:text-lg font-medium text-gray-500 tracking-tight leading-relaxed italic max-w-lg mx-auto">
                    "{currentQuestion.translation}"
                  </p>
                </div>
              </div>
            )}

            {/* Answer Options Grid */}
            {currentQuestion && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options.map((opt, index) => {
                  const isSelected = selectedAnswer === opt;
                  const isCorrect = opt === currentQuestion.answer;
                  
                  let btnColor = "bg-white border-gray-100 hover:border-indigo-200 text-gray-800 hover:bg-indigo-50/20";
                  
                  if (isAnswered) {
                    if (isCorrect) {
                      btnColor = "bg-green-500 border-green-600 text-white shadow-lg shadow-green-200 pointer-events-none scale-[1.02]";
                    } else if (isSelected) {
                      btnColor = "bg-red-500 border-red-600 text-white shadow-sm pointer-events-none";
                    } else {
                      btnColor = "bg-gray-50 border-gray-100 text-gray-400 opacity-50 pointer-events-none";
                    }
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={!isAnswered ? { scale: 1.01 } : {}}
                      whileTap={!isAnswered ? { scale: 0.99 } : {}}
                      onClick={() => handleAnswerSelect(opt)}
                      disabled={isAnswered}
                      className={cn(
                        "p-5 rounded-2xl border-2 font-bold text-lg min-h-[4rem] flex items-center justify-center transition-all relative overflow-hidden",
                        btnColor
                      )}
                    >
                      <span>{opt}</span>
                      {isAnswered && isCorrect && <CheckCircle2 className="absolute right-4 text-white" size={20} />}
                      {isAnswered && isSelected && !isCorrect && <XCircle className="absolute right-4 text-white" size={20} />}
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* Detailed Correct Explanation panel */}
            <AnimatePresence>
              {isAnswered && currentQuestion && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="bg-indigo-50/50 border border-indigo-100/80 rounded-2xl p-5 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1 text-center sm:text-left">
                      <div className="text-xs font-black tracking-wider text-indigo-400 uppercase">
                        Ký tự chuẩn & Phiên âm pinyin:
                      </div>
                      <div className="text-xl font-bold font-serif text-gray-900">
                        {currentQuestion.question.replace("__", currentQuestion.answer)}
                      </div>
                      <div className="text-sm font-mono text-indigo-600 font-semibold">
                        {currentQuestion.pinyin}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Audio Speaker */}
                      <button 
                        onClick={() => playAudio(currentQuestion.question.replace("__", currentQuestion.answer))}
                        className="p-3 bg-white hover:bg-indigo-50 text-indigo-600 hover:text-indigo-800 rounded-full shadow-sm transition-all border border-indigo-100"
                        title="Nghe phát âm chuẩn"
                      >
                        <Volume2 size={20} className={isPlaying === currentQuestion.question.replace("__", currentQuestion.answer) ? "animate-bounce" : ""} />
                      </button>

                      {/* Next button row */}
                      <button
                        onClick={handleNextQuestion}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-black transition-all shadow-md shadow-indigo-100 flex items-center gap-1"
                      >
                        {currentQuestionIndex < activeQuestions.length - 1 ? "CÂU TIẾP THEO" : "XEM KẾT QUẢ"}
                      </button>
                    </div>
                  </div>

                  <div className="h-px bg-indigo-100/50"></div>

                  <div className="text-xs md:text-sm text-gray-700 leading-relaxed font-medium">
                    <span className="font-extrabold text-indigo-700 block mb-1">📖 Quy luật dùng từ:</span>
                    {currentQuestion.explanation}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
