import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, Target as TargetIcon, Lightbulb, CheckCircle, Flame, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface BeginnerRoadmapViewProps {
  onNavigate?: (tab: any) => void;
}

export function BeginnerRoadmapView({ onNavigate }: BeginnerRoadmapViewProps) {
  return (
    <div className="bg-white rounded-3xl sm:rounded-[40px] border border-gray-100 shadow-sm p-4 sm:p-6 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 mb-10">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-rose-500 text-white rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 shrink-0">
          <Flame size={32} />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Lịch học đơn giản nhất</h2>
          <p className="text-gray-500 mt-2 sm:text-lg">Duy trì 30-45 phút mỗi ngày, hiệu quả hơn học nhiều một lần.</p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Lịch học 30 phút */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-6 sm:p-8 rounded-[32px] bg-blue-50/50 border-2 border-blue-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Clock size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Nếu bạn bận (30 phút/ngày)</h3>
          </div>
          <ul className="space-y-4">
            {[
              { time: '5 phút', text: 'ôn bài cũ', color: 'text-blue-600', bg: 'bg-blue-100' },
              { time: '10 phút', text: 'nghe và đọc theo', color: 'text-purple-600', bg: 'bg-purple-100' },
              { time: '10 phút', text: 'học từ mới + mẫu câu', color: 'text-rose-600', bg: 'bg-rose-100' },
              { time: '5 phút', text: 'tập nói hoặc viết chữ', color: 'text-orange-600', bg: 'bg-orange-100' },
            ].map((item, i) => (
              <li key={i} className="flex sm:items-center flex-col sm:flex-row gap-3 sm:gap-4 bg-white p-4 rounded-2xl shadow-sm">
                <span className={cn("px-3 py-1 rounded-xl font-bold text-sm shrink-0 w-fit", item.bg, item.color)}>{item.time}</span>
                <span className="font-medium text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Lịch học trong tuần */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 sm:p-8 rounded-[32px] bg-emerald-50/50 border-2 border-emerald-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Calendar size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Kế hoạch trong tuần</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-emerald-50 shadow-sm flex gap-4">
              <div className="w-1.5 h-auto bg-emerald-400 rounded-full shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-900">Thứ 2 – Thứ 6</h4>
                <p className="text-gray-600 mt-1">Học bài mới mỗi ngày</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-emerald-50 shadow-sm flex gap-4">
              <div className="w-1.5 h-auto bg-teal-400 rounded-full shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-900">Thứ 7</h4>
                <p className="text-gray-600 mt-1">Ôn lại toàn bộ từ và mẫu câu trong tuần</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-emerald-50 shadow-sm flex gap-4">
              <div className="w-1.5 h-auto bg-green-400 rounded-full shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-900">Chủ nhật</h4>
                <p className="text-gray-600 mt-1">Nghe hội thoại ngắn, luyện nói lại, không cần học quá nặng</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mục tiêu mỗi ngày */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-4 sm:p-6 md:p-8 rounded-[32px] bg-orange-50/50 border-2 border-orange-100 lg:col-span-2 flex flex-col xl:flex-row gap-6 md:gap-8">
           <div className="flex-1">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                 <TargetIcon size={24} />
               </div>
               <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Mục tiêu mỗi ngày</h3>
             </div>
             <p className="text-gray-600 font-medium mb-4">Mỗi ngày chỉ cần đạt 4 việc:</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
               {[
                 'Nhớ 5–10 từ mới',
                 'Biết 1 mẫu câu mới',
                 'Nghe và đọc theo 10 phút',
                 'Tự nói được vài câu đơn giản'
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                   <CheckCircle className="text-orange-500 shrink-0" size={20} />
                   <span className="font-medium text-gray-800">{item}</span>
                 </div>
               ))}
             </div>
           </div>

           <div className="xl:w-[420px] shrink-0 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-orange-100 flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
               <MessageCircle size={120} />
             </div>
             <span className="text-xs font-black uppercase tracking-widest text-orange-500 mb-4 block">Ví dụ kết quả đạt được</span>
             <p className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed mb-6 relative z-10 w-fit">
               <span className="block border-b-2 border-orange-100 pb-2 mb-2">你好，我叫 Minh。</span>
               <span className="block border-b-2 border-orange-100 pb-2 mb-2">我是越南人。</span>
               <span className="block">我学中文。</span>
             </p>
             <p className="text-gray-500 font-medium relative z-10 text-sm leading-relaxed border-l-2 border-orange-200 pl-4 space-y-1">
               <span className="block">Xin chào, tôi tên là Minh.</span>
               <span className="block">Tôi là người Việt Nam.</span>
               <span className="block">Tôi học tiếng Trung.</span>
             </p>
           </div>
        </motion.div>

        {/* Nguyên tắc quan trọng */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-6 sm:p-8 rounded-[32px] bg-slate-50 border-2 border-slate-100 lg:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Nguyên tắc quan trọng</h3>
          </div>
          
          <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-8 border-l-4 border-rose-400 pl-4 md:pl-6 py-1">
            <span className="text-rose-600 font-bold">Đừng học quá nhiều trong một ngày.</span><br className="hidden sm:block" /> Với tiếng Trung, <span className="font-bold text-slate-900">học đều mỗi ngày</span> quan trọng hơn học nhiều một lần.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 mb-6">
             <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
               <TargetIcon size={16} /> Công thức dễ nhớ
             </h4>
             
             <div className="flex flex-wrap items-center gap-2 sm:gap-3">
               {[
                 'Ôn bài cũ',
                 'Nghe',
                 'Đọc theo',
                 'Học từ',
                 'Đặt câu',
                 'Nói lại',
                 'Viết chữ'
               ].map((step, i, arr) => (
                 <React.Fragment key={i}>
                   <div className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-xl text-xs sm:text-sm whitespace-nowrap shadow-sm border border-slate-200/50">
                     {step}
                   </div>
                   {i < arr.length - 1 && (
                     <ArrowRight className="text-slate-300 shrink-0" size={16} />
                   )}
                 </React.Fragment>
               ))}
             </div>
          </div>

          <div className="bg-emerald-50 text-emerald-800 p-5 rounded-2xl font-medium flex items-start sm:items-center gap-4 border border-emerald-100/50">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
               <Flame size={20} />
            </div>
            <p className="leading-relaxed">Chỉ cần giữ đều <span className="font-bold text-emerald-700">30–45 phút</span> mỗi ngày, sau <span className="font-bold text-emerald-700">1 tháng</span> bạn sẽ có nền tảng phát âm, từ vựng và câu giao tiếp cơ bản.</p>
          </div>

        </motion.div>
      </div>

    </div>
  );
}

