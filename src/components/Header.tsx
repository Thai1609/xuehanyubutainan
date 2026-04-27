import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-16 px-6 text-center border-b border-slate-900 bg-slate-950/50 backdrop-blur-md sticky top-0 z-40"
      id="main-header"
    >
      <div className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-xl text-slate-950 mb-6 shadow-lg shadow-teal-500/20">
        <ShieldCheck size={32} strokeWidth={2.5} />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        AI-Mandarin <span className="text-teal-400 font-serif italic font-normal ml-2 tracking-wide text-3xl opacity-80">Quest</span>
      </h1>
      <p className="text-slate-400 max-w-xl mx-auto text-base">
        Hệ thống học tiếng Trung tối ưu hóa bởi trí tuệ nhân tạo.
      </p>
    </motion.header>
  );
}
