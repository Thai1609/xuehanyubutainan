import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Info, X } from 'lucide-react';
import { cn } from '../lib/utils';

const INITIALS = [
  ['b', 'p', 'm', 'f'],
  ['d', 't', 'n', 'l'],
  ['g', 'k', 'h'],
  ['j', 'q', 'x'],
  ['z', 'c', 's'],
  ['zh', 'ch', 'sh', 'r']
];

const FINALS = [
  ['a', 'o', 'e', 'i', 'u', 'ü'],
  ['ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er'],
  ['an', 'en', 'in', 'un', 'ün'],
  ['ang', 'eng', 'ing', 'ong']
];

const TONES = [
  { mark: 'ā', name: 'Thanh 1', description: 'Đọc ngang, êm, kéo dài (như không dấu trong tiếng Việt).', graphPath: 'M 15 20 L 85 20', graphLabel: '5-5' },
  { mark: 'á', name: 'Thanh 2', description: 'Đọc từ dưới lên, giống dấu sắc trong tiếng Việt.', graphPath: 'M 15 60 L 85 20', graphLabel: '3-5' },
  { mark: 'ǎ', name: 'Thanh 3', description: 'Đọc xuống rồi lên, giống dấu hỏi nhưng kéo dài hơn.', graphPath: 'M 15 80 L 50 100 L 85 40', graphLabel: '2-1-4' },
  { mark: 'à', name: 'Thanh 4', description: 'Đọc mạnh, dứt khoát từ trên xuống, không giống dấu huyền.', graphPath: 'M 15 20 L 85 100', graphLabel: '5-1' },
  { mark: 'a', name: 'Khinh thanh', description: 'Đọc nhẹ, ngắn gọn.', graphPath: 'M 45 60 A 5 5 0 1 0 55 60 A 5 5 0 1 0 45 60', graphLabel: 'Nhẹ' }
];

const PRONUNCIATION_TIPS: Record<string, string> = {
  'b': 'Đọc giống "p" trong tiếng Việt (mím hai môi lại) nhưng không bật hơi.',
  'p': 'Đọc giống "b" ở trên nhưng mím môi và bật mạnh hơi ra.',
  'm': 'Giống chữ "m" trong tiếng Việt.',
  'f': 'Giống chữ "ph" trong tiếng Việt.',
  'd': 'Đọc giống chữ "t" trong tiếng Việt.',
  't': 'Đọc giống chữ "th" trong tiếng Việt, nhớ bật hơi mạnh.',
  'n': 'Giống chữ "n" trong tiếng Việt.',
  'l': 'Giống chữ "l" trong tiếng Việt.',
  'g': 'Đọc giống chữ "c" hoặc "k" (nhẹ, không bật hơi) trong tiếng Việt.',
  'k': 'Giống "g" nhưng bật hơi rất mạnh ở cuống họng.',
  'h': 'Giống chữ "h" trong tiếng Việt nhưng lấy hơi sâu hơn, xát nhẹ ở cổ họng giống tiếng khạc nhẹ.',
  'j': 'Đọc gần giống "ch", hai khóe môi kéo bẹt sang hai bên.',
  'q': 'Giống "j" nhưng phải bật hơi thật mạnh ra ngoài.',
  'x': 'Giống chữ "x" trong tiếng Việt nhưng môi nằm ngang.',
  'z': 'Đầu lưỡi thẳng chạm mặt sau răng cửa trên, đọc giống "ch" không bật hơi.',
  'c': 'Giống "z" nhưng bật hơi mạnh, đẩy hơi qua kẽ răng.',
  's': 'Giống "x" nhưng đầu lưỡi ở vị trí giữa hai hàm răng.',
  'zh': 'Uốn cong đầu lưỡi lên ngạc cứng (vòm họng trên), đọc giống "tr".',
  'ch': 'Giống "zh" nhưng phải bật hơi ra.',
  'sh': 'Giống chữ "s" (nặng, cong lưỡi) trong tiếng Việt.',
  'r': 'Giống chữ "r" trong tiếng Việt nhưng không chạm lưỡi lên vòm họng, không rung.',
  
  'a': 'Há miệng to, phát ra âm "a".',
  'o': 'Tròn môi, phát ra âm hơi lai giữa "ô" và "uo".',
  'e': 'Đọc nằm giữa âm "ơ" và "ưa" của tiếng Việt.',
  'i': 'Nếu đứng sau zh, ch, sh, r, z, c, s đọc là "ư". Đứng sau các âm khác đọc là "i".',
  'u': 'Chu môi, đọc như "u" tiếng Việt.',
  'ü': 'Chu nhọn vẩu môi ra lồng hơi phát âm chữ "i" (không di chuyển môi).',
  'ai': 'Đọc giống "ai" trong tiếng Việt.',
  'ei': 'Đọc giống "ây" trong tiếng Việt.',
  'ui': 'Đủ âm là "uei", đọc nhanh giống "uây" trong tiếng Việt.',
  'ao': 'Đọc giống "ao" trong tiếng Việt.',
  'ou': 'Đọc giống "âu" trong tiếng Việt.',
  'iu': 'Đủ âm là "iou", đọc nhanh giống "yêu" trong tiếng Việt.',
  'ie': 'Đọc giống "ia" hoặc "yê" trong tiếng Việt.',
  'üe': 'Tròn môi phát âm chữ "uê" (lai giữa uy và yê).',
  'er': 'Đọc "ơ" rồi uốn cong lưỡi lên vòm họng ngạc cứng (không phải chữ r).',
  'an': 'Đọc giống "an" trong tiếng Việt.',
  'en': 'Đọc giống "ân" trong tiếng Việt.',
  'in': 'Đọc giống "in" trong tiếng Việt.',
  'un': 'Đủ âm là "uen", đọc nhanh giống "uân" trong tiếng Việt.',
  'ün': 'Tròn môi phát âm giống "uynh" hoặc "uân" nhẹ.',
  'ang': 'Đọc giống "ang" trong tiếng Việt.',
  'eng': 'Đọc giống "âng" trong tiếng Việt.',
  'ing': 'Đọc giống "inh" trong tiếng Việt.',
  'ong': 'Đọc giống "ung" trong tiếng Việt, nhưng môi tròn hơn.',
};

interface PinyinPronunciationViewProps {}

export function PinyinPronunciationView({}: PinyinPronunciationViewProps) {
  const [activeTab, setActiveTab] = useState<'initials' | 'finals' | 'tones'>('initials');
  const [selectedTip, setSelectedTip] = useState<{ char: string, tip: string } | null>(null);
  const [selectedTone, setSelectedTone] = useState<typeof TONES[0] | null>(null);

  const handleTabChange = (tab: 'initials' | 'finals' | 'tones') => {
    setActiveTab(tab);
    setSelectedTip(null);
    setSelectedTone(null);
  };

  return (
    <div className="bg-white rounded-3xl sm:rounded-[40px] border border-gray-100 shadow-sm p-4 sm:p-6 md:p-10 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 relative z-10">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
              <Mic size={24} />
            </div>
            Phát âm & Thanh điệu
          </h2>
          <p className="text-gray-500 mt-2 text-base md:text-lg">
            Nền tảng quan trọng nhất: Thanh mẫu, Vận mẫu và 4 Thanh điệu
          </p>
        </div>
      </div>

      <div className="flex bg-gray-50 p-1.5 rounded-2xl sm:rounded-[20px] w-full mb-6 max-w-full overflow-x-auto no-scrollbar relative z-10 gap-1 sm:gap-0">
        <button
          onClick={() => handleTabChange('initials')}
          className={cn(
            "px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm font-bold transition-all whitespace-nowrap flex-1 sm:flex-none",
            activeTab === 'initials' ? "bg-white text-emerald-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
          )}
        >
          Thanh mẫu (Phụ âm)
        </button>
        <button
          onClick={() => handleTabChange('finals')}
          className={cn(
            "px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm font-bold transition-all whitespace-nowrap flex-1 sm:flex-none",
            activeTab === 'finals' ? "bg-white text-emerald-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
          )}
        >
          Vận mẫu (Nguyên âm)
        </button>
        <button
          onClick={() => handleTabChange('tones')}
          className={cn(
            "px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm font-bold transition-all whitespace-nowrap flex-1 sm:flex-none",
            activeTab === 'tones' ? "bg-white text-emerald-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
          )}
        >
          Thanh điệu
        </button>
      </div>

      <div className="relative z-10 w-full">
          {activeTab === 'initials' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="bg-emerald-50/50 rounded-2xl p-4 flex gap-3 text-emerald-800 text-sm mb-6">
                <Info size={20} className="shrink-0 text-emerald-600" />
                <p>Thanh mẫu trong tiếng Trung tương đương với phụ âm đầu trong tiếng Việt. Có 21 thanh mẫu cơ bản.</p>
              </div>
              {INITIALS.map((group, i) => (
                <div key={i} className="flex flex-wrap gap-3 sm:gap-4">
                  {group.map(char => (
                    <button
                      key={char}
                      onClick={() => {
                        if (PRONUNCIATION_TIPS[char]) {
                          setSelectedTip({ char, tip: PRONUNCIATION_TIPS[char] });
                        }
                      }}
                      className={cn(
                        "w-[3.5rem] h-[3.5rem] sm:w-16 sm:h-16 bg-white border-2 hover:border-emerald-200 rounded-[1.25rem] flex flex-col items-center justify-center gap-1 group shadow-sm hover:shadow-md transition-all active:scale-95",
                        selectedTip?.char === char ? "border-emerald-300 ring-2 ring-emerald-100/50" : "border-gray-100"
                      )}
                    >
                      <span className={cn("text-xl sm:text-2xl font-bold transition-colors", selectedTip?.char === char ? "text-emerald-600" : "text-gray-900 group-hover:text-emerald-600")}>{char}</span>
                    </button>
                  ))}
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'finals' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="bg-emerald-50/50 rounded-2xl p-4 flex gap-3 text-emerald-800 text-sm mb-6">
                 <Info size={20} className="shrink-0 text-emerald-600" />
                 <p>Vận mẫu trong tiếng Trung tương đương với nguyên âm/vần trong tiếng Việt. Có 36 vận mẫu cơ bản.</p>
              </div>
              {FINALS.map((group, i) => (
                <div key={i} className="flex flex-wrap gap-3 sm:gap-4">
                  {group.map(char => (
                    <button
                      key={char}
                      onClick={() => {
                        if (PRONUNCIATION_TIPS[char]) {
                          setSelectedTip({ char, tip: PRONUNCIATION_TIPS[char] });
                        }
                      }}
                      className={cn(
                        "h-[3.5rem] sm:h-16 px-5 sm:px-6 min-w-[3.5rem] sm:min-w-[4rem] bg-white border-2 hover:border-emerald-200 rounded-[1.25rem] flex items-center justify-center group shadow-sm hover:shadow-md transition-all active:scale-95",
                        selectedTip?.char === char ? "border-emerald-300 ring-2 ring-emerald-100/50" : "border-gray-100"
                      )}
                    >
                      <span className={cn("text-lg sm:text-xl font-bold transition-colors", selectedTip?.char === char ? "text-emerald-600" : "text-gray-900 group-hover:text-emerald-600")}>{char}</span>
                    </button>
                  ))}
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'tones' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {TONES.map(tone => (
                 <button
                   key={tone.name}
                   onClick={() => setSelectedTone(tone)}
                   className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-3xl border-2 border-gray-100 bg-white transition-all text-left shadow-sm hover:border-emerald-200 active:scale-[0.98]"
                 >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <span className="text-2xl sm:text-3xl font-black text-emerald-600">{tone.mark}</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{tone.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{tone.description}</p>
                    </div>
                 </button>
              ))}
            </motion.div>
          )}
        
        <AnimatePresence>
          {selectedTone && activeTab === 'tones' && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-gray-900/40 backdrop-blur-sm"
                onClick={() => setSelectedTone(null)}
              />
              <motion.div
                 layout
                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.9, y: 20 }}
                 className="fixed z-[101] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm p-6 lg:p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-[32px] border border-purple-100 shadow-2xl"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-purple-100 flex items-center justify-center">
                         <span className="text-3xl font-black text-purple-600">{selectedTone.mark}</span>
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-gray-900">{selectedTone.name}</h3>
                         <span className="text-sm font-bold text-purple-500 uppercase tracking-widest">{selectedTone.graphLabel}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedTone(null)}
                      className="w-10 h-10 bg-white hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full flex items-center justify-center transition-colors shadow-sm self-start"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm relative">
                     {/* Pitch Graph Generator */}
                     <svg viewBox="-5 10 105 100" className="w-full h-auto drop-shadow-sm">
                        {/* Grid lines (pitch levels 1 to 5) */}
                        <line x1="10" y1="20" x2="90" y2="20" stroke="#f3e8ff" strokeWidth="2" strokeDasharray="4 4" />
                        <line x1="10" y1="40" x2="90" y2="40" stroke="#f3e8ff" strokeWidth="2" strokeDasharray="4 4" />
                        <line x1="10" y1="60" x2="90" y2="60" stroke="#f3e8ff" strokeWidth="2" strokeDasharray="4 4" />
                        <line x1="10" y1="80" x2="90" y2="80" stroke="#f3e8ff" strokeWidth="2" strokeDasharray="4 4" />
                        <line x1="10" y1="100" x2="90" y2="100" stroke="#f3e8ff" strokeWidth="2" strokeDasharray="4 4" />
                        
                        {/* Numbers */}
                        <text x="0" y="23" fontSize="8" fill="#d8b4fe" fontWeight="bold">5</text>
                        <text x="0" y="43" fontSize="8" fill="#d8b4fe" fontWeight="bold">4</text>
                        <text x="0" y="63" fontSize="8" fill="#d8b4fe" fontWeight="bold">3</text>
                        <text x="0" y="83" fontSize="8" fill="#d8b4fe" fontWeight="bold">2</text>
                        <text x="0" y="103" fontSize="8" fill="#d8b4fe" fontWeight="bold">1</text>
                        
                        {/* Path Line */}
                        <path 
                           d={selectedTone.graphPath} 
                           fill={selectedTone.name === 'Khinh thanh' ? '#a855f7' : 'none'} 
                           stroke="#a855f7" 
                           strokeWidth="6" 
                           strokeLinecap="round" 
                           strokeLinejoin="round" 
                        />
                     </svg>
                  </div>

                  <div>
                     <p className="text-gray-700 text-lg leading-relaxed font-medium text-center">
                       {selectedTone.description}
                     </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Tips section */}
        <AnimatePresence>
          {selectedTip && (activeTab === 'initials' || activeTab === 'finals') && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-gray-900/40 backdrop-blur-sm"
                onClick={() => setSelectedTip(null)}
              />
              <motion.div
                 layout
                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.9, y: 20 }}
                 className="fixed z-[101] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm p-6 lg:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[32px] border border-emerald-100 shadow-2xl"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-emerald-100 flex items-center justify-center">
                         <span className="text-5xl font-black text-emerald-600">{selectedTip.char}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedTip(null)}
                      className="w-10 h-10 bg-white hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full flex items-center justify-center transition-colors shadow-sm self-start"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <div>
                     <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-3 flex items-center gap-2">
                       <Mic size={16} /> Mẹo phát âm
                     </h4>
                     <p className="text-gray-700 text-lg leading-relaxed font-medium">
                       {selectedTip.tip}
                     </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
