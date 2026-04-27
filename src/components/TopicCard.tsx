import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Topic } from '../data/chineseData';
import { icons } from '../lib/icons';

interface TopicCardProps {
  topic: Topic;
  onClick: (topic: Topic) => void;
}

export default function TopicCard({ topic, onClick }: TopicCardProps) {
  const Icon = icons[topic.icon] || BookOpen;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={() => onClick(topic)}
      className="bg-white p-8 rounded-[40px] border-b-8 border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all cursor-pointer group relative overflow-hidden"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="p-4 bg-orange-50 text-orange-500 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
          <Icon size={28} />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-orange-100 group-hover:text-orange-500 transition-colors">
          <ChevronRight size={20} />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3 tracking-tight">{topic.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{topic.description}</p>
      
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
           {topic.vocabulary.length + (topic.lessons?.reduce((acc, l) => acc + l.vocabulary.length, 0) || 0)} Từ mới
        </span>
        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
           {topic.radicals.length} Bộ thủ
        </span>
      </div>
    </motion.div>
  );
}
