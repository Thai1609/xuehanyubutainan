import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryCard({ category, isActive, onClick }: CategoryCardProps) {
  const Icon = (LucideIcons as any)[category.icon] || LucideIcons.HelpCircle;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative flex flex-col items-center p-6 rounded-2xl transition-all duration-300 border ${
        isActive 
          ? 'bg-slate-800 border-teal-500/50 shadow-[0_0_20px_rgba(20,184,166,0.1)]' 
          : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
      }`}
      id={`category-${category.id}`}
    >
      <div className={`p-3 rounded-xl mb-4 transition-colors ${isActive ? 'text-teal-400' : 'text-slate-600'}`}>
        <Icon size={24} />
      </div>
      <h3 className={`text-sm font-bold uppercase tracking-wider mb-2 transition-colors ${isActive ? 'text-teal-400' : 'text-slate-400'}`}>
        {category.name}
      </h3>
      {isActive && (
        <motion.div 
          layoutId="active-indicator"
          className="absolute -bottom-px left-1/2 -translate-x-1/2 w-8 h-[2px] bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,1)]"
        />
      )}
    </motion.button>
  );
}
