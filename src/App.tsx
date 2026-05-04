import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import AIAssistant from './components/AIAssistant';
import { QuickDictionaryPopup } from './components/QuickDictionaryPopup';
import { motion, AnimatePresence } from 'motion/react';
import { BookMarked, MessageSquare, Menu, X, Sparkles, Search, ArrowUp } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [activeView, setActiveView] = useState<'lessons' | 'practice'>('lessons');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-bg-main text-[#2D2D2D] font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-100">
              汉
            </div>
            <span className="font-bold text-2xl tracking-tighter text-orange-600">Hanyubutainan</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setActiveView('lessons')}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-all px-4 py-2 rounded-xl",
                activeView === 'lessons' ? "bg-orange-100 text-orange-700" : "text-gray-500 hover:bg-orange-50"
              )}
            >
              BÀI HỌC
            </button>
            <button
              onClick={() => setActiveView('practice')}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-all px-4 py-2 rounded-xl flex items-center gap-2",
                activeView === 'practice' ? "bg-orange-100 text-orange-700" : "text-gray-500 hover:bg-orange-50"
              )}
            >
              LUYỆN TẬP AI <Sparkles size={14} className="text-orange-500" />
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-orange-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <button
                onClick={() => { setActiveView('lessons'); setIsMobileMenuOpen(false); }}
                className={cn(
                  "text-2xl font-bold flex items-center gap-4 p-4 rounded-3xl transition-all",
                  activeView === 'lessons' ? "bg-orange-50 text-orange-700" : "text-gray-800 hover:bg-gray-50"
                )}
              >
                <BookMarked size={28} /> BÀI HỌC
              </button>
              <button
                onClick={() => { setActiveView('practice'); setIsMobileMenuOpen(false); }}
                className={cn(
                  "text-2xl font-bold flex items-center gap-4 p-4 rounded-3xl transition-all",
                  activeView === 'practice' ? "bg-orange-50 text-orange-700" : "text-gray-800 hover:bg-gray-50"
                )}
              >
                <MessageSquare size={28} /> LUYỆN TẬP AI
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <AnimatePresence mode="wait">
          {activeView === 'lessons' ? (
            <motion.div
              key="lessons"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <Dashboard />
            </motion.div>
          ) : (
            <motion.div
              key="practice"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="max-w-4xl mx-auto px-4 py-8"
            >
              <div className="mb-12 text-center">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">Giao tiếp thông minh</div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Luyện tập cùng Xiao Ai</h1>
                <p className="text-gray-500 max-w-xl mx-auto">Nói chuyện, sửa lỗi ngữ pháp và học cách phát âm pinyin chuẩn xác với giáo viên AI của riêng bạn.</p>
              </div>
              <AIAssistant />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-100 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">汉</div>
            <span className="font-bold text-lg tracking-tight text-orange-600">Hanyubutainan</span>
          </div>
          <div className="text-sm font-medium text-gray-400">
            © 2026 Hanyubutainan. Designed for Learners.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-[60] p-4 bg-orange-500 text-white rounded-full shadow-xl shadow-orange-500/30 hover:bg-orange-600 transition-colors focus:outline-none focus:ring-4 focus:ring-orange-500/30"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Quick Dictionary Popup (Floating Button Bottom Left) */}
      <QuickDictionaryPopup />
    </div>
  );
}
