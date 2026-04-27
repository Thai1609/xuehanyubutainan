import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Vocabulary } from '../types';

interface WordCardProps {
  word: Vocabulary;
  onAskAI: (word: Vocabulary) => void;
}

export default function WordCard({ word, onAskAI }: WordCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group hover:border-slate-700 transition-all shadow-sm"
      id={`word-card-${word.id}`}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="chinese-text text-6xl text-teal-400 block mb-2 leading-none">
            {word.word}
          </span>
          <span className="mono-text text-sm text-slate-500 uppercase tracking-[0.2em]">
            {word.pinyin}
          </span>
        </div>
        <div className="bg-teal-500/10 text-teal-500 text-[10px] font-bold px-2.5 py-1.5 rounded-lg border border-teal-500/20 uppercase tracking-tighter">
          Tự Học
        </div>
      </div>

      <p className="text-xl font-bold text-white mb-6 serif-text italic tracking-wide">
        {word.meaning}
      </p>

      <div className="bg-slate-950/60 p-5 rounded-2xl border-l-4 border-teal-600 relative">
        <p className="text-[10px] text-teal-500/70 font-bold mb-2 uppercase tracking-widest flex items-center gap-1.5">
          <Sparkles size={10} /> Ví dụ từ AI
        </p>
        <p className="chinese-text text-lg text-slate-300 leading-relaxed italic mb-1">
          “{word.example}”
        </p>
        <p className="text-xs text-slate-500 tracking-wide font-medium italic">
          ({word.exampleMeaning})
        </p>
      </div>

      <button
        onClick={() => onAskAI(word)}
        className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-500/60 hover:text-teal-400 transition-colors group-hover:gap-3"
      >
        <span>Hỏi AI về từ này</span>
        <ArrowRight size={14} />
      </button>
    </motion.div>
  );
}
