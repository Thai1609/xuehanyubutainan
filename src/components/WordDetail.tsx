import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Volume2, BookOpen, RotateCcw, Flame, BrainCircuit, ChevronLeft, ChevronRight } from 'lucide-react';
import StrokeWriter, { StrokeWriterRef } from './StrokeWriter';
import { cn } from '../lib/utils';

export interface WordItem {
  type: 'vocab' | 'radical' | 'measure_word';
  character: string;
  pinyin: string;
  meaning: string;
  topicId: string;
  topicTitle: string;
  lessonId?: string;
  example?: string;
  examplePinyin?: string;
  exampleTranslation?: string;
  variants?: string[];
  mnemonic?: string;
  customExamples?: string[];
  components?: string[];
}

interface WordDetailProps {
  word: WordItem;
  onBack: () => void;
  playAudio: (text: string) => void;
  isPlaying: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}

import { CHINESE_DATA } from '../data/chineseData';
import { CHINESE_301_TOPICS } from '../data/chinese301Data';
import { dictionaryData } from '../data/dictionaryData';

export default function WordDetail({ word, onBack, playAudio, isPlaying, onNext, onPrev }: WordDetailProps) {
  const characters = React.useMemo(() => {
    const chars = Array.from(word.character);
    if (word.variants) {
      word.variants.forEach(v => {
        if (!chars.includes(v)) chars.push(v);
      });
    }
    return chars;
  }, [word.character, word.variants]);

  const [selectedCharIndex, setSelectedCharIndex] = useState(0);
  const strokeWriterRef = useRef<StrokeWriterRef>(null);

  const currentColChar = characters[selectedCharIndex];

  useEffect(() => {
    setSelectedCharIndex(0);
  }, [word]);

  const startQuiz = () => {
    strokeWriterRef.current?.quiz();
  };

  const playAnimation = () => {
    strokeWriterRef.current?.animate();
  };

  // Extract examples containing the word from all dialogues
  const examples = React.useMemo(() => {
    const found: { chinese: string; pinyin: string; translation: string }[] = [];
    
    // Add primary example from the word data if available
    if (word.example) {
      found.push({
        chinese: word.example,
        pinyin: word.examplePinyin || '', 
        translation: word.exampleTranslation || '',
      });
    }

    const searchInDialogues = (dialogues?: any[]) => {
      if (!dialogues) return;
      for (const line of dialogues) {
        if (line.chinese && line.chinese.includes(currentColChar)) {
          // avoid duplicates
          if (!found.some(e => e.chinese === line.chinese)) {
            found.push({
              chinese: line.chinese,
              pinyin: line.pinyin || '',
              translation: line.translation || ''
            });
          }
        }
      }
    };

    const allTopics = [...CHINESE_301_TOPICS, ...CHINESE_DATA];
    for (const topic of allTopics) {
      searchInDialogues(topic.dialogue);
      if (topic.lessons) {
        topic.lessons.forEach((l: any) => searchInDialogues(l.dialogue));
      }
    }

    // Radical specific examples mapping
    const RADICAL_EXAMPLES: Record<string, { chinese: string; pinyin: string; translation: string }[]> = {
      '氵': [
        { chinese: '水', pinyin: 'shuǐ', translation: 'Nước' },
        { chinese: '海', pinyin: 'hǎi', translation: 'Biển' },
        { chinese: '泳', pinyin: 'yǒng', translation: 'Bơi' },
        { chinese: '洗', pinyin: 'xǐ', translation: 'Rửa' },
        { chinese: '汉', pinyin: 'hàn', translation: 'Hán (dòng sông)' }
      ],
      '扌': [
        { chinese: '手', pinyin: 'shǒu', translation: 'Tay' },
        { chinese: '打', pinyin: 'dǎ', translation: 'Đánh' },
        { chinese: '提', pinyin: 'tí', translation: 'Nâng/Cầm' },
        { chinese: '找', pinyin: 'zhǎo', translation: 'Tìm' },
        { chinese: '拍', pinyin: 'pāi', translation: 'Vỗ/Đập' }
      ],
      '亻': [
        { chinese: '人', pinyin: 'rén', translation: 'Người' },
        { chinese: '你', pinyin: 'nǐ', translation: 'Bạn' },
        { chinese: '他', pinyin: 'tā', translation: 'Anh ấy' },
        { chinese: '们', pinyin: 'men', translation: 'Các (số nhiều)' },
        { chinese: '件', pinyin: 'jiàn', translation: 'Kiện/Cái (lượng từ)' }
      ],
      '艹': [
        { chinese: '草', pinyin: 'cǎo', translation: 'Cỏ' },
        { chinese: '花', pinyin: 'huā', translation: 'Hoa' },
        { chinese: '药', pinyin: 'yào', translation: 'Thuốc' },
        { chinese: '茶', pinyin: 'chá', translation: 'Trà' },
        { chinese: '菜', pinyin: 'cài', translation: 'Rau/Món ăn' }
      ],
      '讠': [
        { chinese: '言', pinyin: 'yán', translation: 'Lời nói' },
        { chinese: '说', pinyin: 'shuō', translation: 'Nói' },
        { chinese: '语', pinyin: 'yǔ', translation: 'Ngôn ngữ' },
        { chinese: '请', pinyin: 'qǐng', translation: 'Mời' },
        { chinese: '谢', pinyin: 'xiè', translation: 'Cảm ơn' }
      ],
      '女': [
        { chinese: '妈', pinyin: 'mā', translation: 'Mẹ' },
        { chinese: '好', pinyin: 'hǎo', translation: 'Tốt' },
        { chinese: '姐', pinyin: 'jiě', translation: 'Chị' },
        { chinese: '她', pinyin: 'tā', translation: 'Cô ấy' },
        { chinese: '姓', pinyin: 'xìng', translation: 'Họ' }
      ],
      '口': [
        { chinese: '吃', pinyin: 'chī', translation: 'Ăn' },
        { chinese: '喝', pinyin: 'hē', translation: 'Uống' },
        { chinese: '叫', pinyin: 'jiào', translation: 'Gọi là' },
        { chinese: '吗', pinyin: 'ma', translation: 'Nghi vấn từ' },
        { chinese: '和', pinyin: 'hé', translation: 'Và' }
      ],
      '辶': [
        { chinese: '这', pinyin: 'zhè', translation: 'Đây' },
        { chinese: '送', pinyin: 'sòng', translation: 'Tặng/Đưa' },
        { chinese: '进', pinyin: 'jìn', translation: 'Vào' },
        { chinese: '还', pinyin: 'hái', translation: 'Còn' },
        { chinese: '远', pinyin: 'yuǎn', translation: 'Xa' }
      ],
      '宀': [
        { chinese: '家', pinyin: 'jiā', translation: 'Nhà' },
        { chinese: '定', pinyin: 'dìng', translation: 'Định' },
        { chinese: '安', pinyin: 'ān', translation: 'An' },
        { chinese: '字', pinyin: 'zì', translation: 'Chữ' },
        { chinese: '学', pinyin: 'xué', translation: 'Học' }
      ],
      '纟': [
        { chinese: '红', pinyin: 'hóng', translation: 'Đỏ' },
        { chinese: '给', pinyin: 'gěi', translation: 'Cho' },
        { chinese: '级', pinyin: 'jí', translation: 'Cấp' },
        { chinese: '绍', pinyin: 'shào', translation: 'Thiệu' },
        { chinese: '经', pinyin: 'jīng', translation: 'Kinh (qua)' }
      ],
      '彳': [
        { chinese: '很', pinyin: 'hěn', translation: 'Rất' },
        { chinese: '得', pinyin: 'de', translation: 'Được' },
        { chinese: '行', pinyin: 'xíng', translation: 'Đi/Được' },
        { chinese: '往', pinyin: 'wǎng', translation: 'Hướng về' },
        { chinese: '德', pinyin: 'dé', translation: 'Đức' }
      ],
      '忄': [
        { chinese: '快', pinyin: 'kuài', translation: 'Nhanh' },
        { chinese: '怕', pinyin: 'pà', translation: 'Sợ' },
        { chinese: '忙', pinyin: 'máng', translation: 'Bận' },
        { chinese: '懂', pinyin: 'dǒng', translation: 'Hiểu' },
        { chinese: '性', pinyin: 'xìng', translation: 'Tính cách' }
      ],
      '目': [
        { chinese: '看', pinyin: 'kàn', translation: 'Xem/Nhìn' },
        { chinese: '睡', pinyin: 'shuì', translation: 'Ngủ' },
        { chinese: '睛', pinyin: 'jīng', translation: 'Con mắt' }
      ],
      '广': [
        { chinese: '店', pinyin: 'diàn', translation: 'Cửa hàng' },
        { chinese: '应', pinyin: 'yīng', translation: 'Nên/Ứng' },
        { chinese: '床', pinyin: 'chuáng', translation: 'Cái giường' }
      ],
      '疒': [
        { chinese: '病', pinyin: 'bìng', translation: 'Bệnh' },
        { chinese: '疼', pinyin: 'téng', translation: 'Đau' },
        { chinese: '瘦', pinyin: 'shòu', translation: 'Gầy' }
      ]
    };

    // Add manual examples for radicals from RADICAL_EXAMPLES
    if (word.type === 'radical' && RADICAL_EXAMPLES[currentColChar]) {
      RADICAL_EXAMPLES[currentColChar].forEach(ex => {
        if (!found.some(e => e.chinese === ex.chinese)) {
          found.push(ex);
        }
      });
    }

    // Add examples from the new customExamples array
    if (word.customExamples) {
      word.customExamples.forEach(exStr => {
        let chinese = '';
        let pinyin = '';
        let translation = '';
        
        const dashParts = exStr.split('-');
        if (dashParts.length >= 2) {
           const beforeDash = dashParts[0].trim();
           translation = dashParts.slice(1).join('-').trim();
           
           const parenMatch = beforeDash.match(/^(.+?)\s*\((.+?)\)$/);
           if (parenMatch) {
              chinese = parenMatch[1].trim();
              pinyin = parenMatch[2].trim();
           } else {
              chinese = beforeDash;
           }
           
           if (!found.some(e => e.chinese === chinese)) {
             found.push({ chinese, pinyin, translation });
           }
        } else if (exStr.trim()) {
           // Fallback if no dash
           if (!found.some(e => e.chinese === exStr.trim())) {
             found.push({ chinese: exStr.trim(), pinyin: '', translation: '' });
           }
        }
      });
    }

    // Also search in dictionaryData for words containing the character
    dictionaryData.forEach(entry => {
      if (entry.word.includes(currentColChar) || (entry.traditional && entry.traditional.includes(currentColChar))) {
        if (!found.some(e => e.chinese === entry.word)) {
          found.push({
            chinese: entry.word,
            pinyin: entry.pinyin,
            translation: entry.meaning
          });
        }
      }
    });
    
    return found;
  }, [word, currentColChar]);

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-10 bg-[#faf9f6] min-h-[80vh] rounded-[32px] shadow-sm border border-gray-100">
      {/* Back Button */}
      <div className="mb-8 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors shadow-sm"
        >
          <ArrowLeft size={16} />
          <span>Quay lại</span>
        </button>

        <div className="flex items-center gap-2">
          {onPrev && (
            <button 
              onClick={onPrev}
              className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center transition-colors shadow-sm"
              title="Trước đó"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {onNext && (
            <button 
              onClick={onNext}
              className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center transition-colors shadow-sm"
              title="Tiếp theo"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col mt-4">
        
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-10 sm:gap-16">
           {/* Left side: Pinyin, Hanzi, Sino-Vietnamese */}
           <div className="flex flex-col items-center sm:w-1/2">
              <div className="text-3xl sm:text-4xl font-medium text-gray-800 mb-4">{word.pinyin}</div>
              
              <div 
                className="relative cursor-pointer transition-transform hover:scale-105 active:scale-95 my-2" 
                onClick={word.type !== 'radical' ? playAnimation : undefined}
                title={word.type !== 'radical' ? "Nhấp để xem nét viết" : undefined}
              >
                 <StrokeWriter 
                   ref={strokeWriterRef}
                   character={characters[selectedCharIndex]} 
                   size={160} 
                   strokeColor="#111827" // strong dark gray/black
                   radicalColor="#dc2626"
                 />
                 <button 
                   onClick={(e) => { e.stopPropagation(); playAudio(word.character); }}
                   className="absolute -right-4 -top-4 p-2.5 bg-gray-100/80 hover:bg-gray-200 rounded-full text-gray-600 hover:text-black transition-colors"
                 >
                   <Volume2 size={24} />
                 </button>
              </div>

              <div className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-gray-900 mt-6 text-center">
                 {word.meaning}
              </div>
           </div>

           {/* Right side: Metadata */}
           <div className="flex flex-col gap-6 flex-1 pt-4 sm:pt-14 text-lg">
             <div className="flex items-start gap-3">
               <span className="font-bold text-gray-800 min-w-[110px] uppercase text-sm tracking-wider self-center">Phân loại:</span>
               <span className="text-gray-700 font-medium">
                 {word.type === 'radical' ? 'Bộ thủ' : word.type === 'measure_word' ? 'Lượng từ' : 'Từ vựng'}
               </span>
             </div>
             <div className="flex items-start gap-3">
               <span className="font-bold text-gray-800 min-w-[110px] uppercase text-sm tracking-wider self-center">Chủ đề:</span>
               <span className="text-gray-700 font-medium">{word.topicTitle}</span>
             </div>
             {word.components && word.components.length > 0 && (
               <div className="flex flex-col gap-3 mt-2">
                 {word.components.map((comp, idx) => {
                   const parts = comp.split(':');
                   if (parts.length >= 2) {
                     return (
                       <div key={idx} className="flex gap-2 text-lg sm:text-xl">
                         <span className="font-bold whitespace-nowrap text-gray-900">{parts[0]}:</span>
                         <span className="text-gray-700">{parts.slice(1).join(':')}</span>
                       </div>
                     );
                   }
                   return <div key={idx} className="text-gray-800 text-lg sm:text-xl">{comp}</div>;
                 })}
               </div>
             )}
             {characters.length > 1 && (
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gray-800 min-w-[110px] uppercase text-sm tracking-wider self-center mt-1">Ký tự:</span>
                  <div className="flex gap-2 flex-wrap">
                    {characters.map((char, index) => (
                      <button 
                        key={index} 
                        onClick={() => setSelectedCharIndex(index)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-colors ${index === selectedCharIndex ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      >
                        {char}
                      </button>
                    ))}
                  </div>
                </div>
             )}
           </div>
        </div>

        {/* Measure word advanced formula */}
        {word.type === 'measure_word' && (
          <div className="mt-12 sm:mt-16 bg-emerald-50/50 rounded-3xl p-5 md:p-8 border-2 border-emerald-100">
            <h4 className="text-emerald-800 font-bold mb-4 text-lg flex items-center gap-3">
              <span className="bg-emerald-200 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center text-base">💡</span>
              Cấu trúc nâng cao
            </h4>
            <div className="bg-white px-2 py-4 sm:px-4 sm:py-5 rounded-2xl border border-emerald-200 font-bold text-center text-gray-900 shadow-sm flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-3 text-sm md:text-base w-full overflow-x-auto">
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-xl whitespace-nowrap border border-blue-100">Số từ/Đại từ</span>
              <span className="text-gray-300 font-black shrink-0">+</span>
              <span className="px-3 py-1.5 bg-emerald-500 text-white rounded-xl font-black whitespace-nowrap shadow-sm ring-2 ring-emerald-200 ring-offset-1 shrink-0">{word.character}</span>
              <span className="text-gray-300 font-black shrink-0">+</span>
              <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-xl whitespace-nowrap border border-dashed border-orange-200 shrink-0">(Tính từ)</span>
              <span className="text-gray-300 font-black shrink-0">+</span>
              <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-xl whitespace-nowrap border border-purple-100 shrink-0">Danh từ</span>
            </div>
            <p className="mt-5 text-emerald-700 text-center font-medium bg-white/60 py-2 px-4 rounded-lg w-fit mx-auto border border-emerald-200/50 text-sm">
              Ví dụ: Một cái bàn lớn = 一 (số) + 张 (lượng từ) + 大 (tính từ) + 桌子 (danh từ)
            </p>
          </div>
        )}

        {/* Middle Section: Câu chuyện gợi ý */}
        {word.type !== 'measure_word' && (
          <div className="mt-16 sm:mt-20">
            <h3 className="text-2xl font-serif italic text-gray-900 border-b border-gray-300 pb-2 mb-6 w-fit pr-10">
              Câu chuyện gợi ý:
            </h3>
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-900 font-medium">
               {word.mnemonic ? (
                 <span dangerouslySetInnerHTML={{ __html: word.mnemonic.replace(/(Mắt|Miệng|Tim|Tâm hồn|Tai|Mũi|Tự mình|Lưỡi|Răng|Tay|Chân|Thân thể|Xương|Thịt|Người|Phụ nữ|Cha|Trẻ con|Đánh|Kim loại)/g, '<span class="text-red-700 font-bold">$1</span>').replace(/([\u4e00-\u9fa5\u2E80-\u2FD5]+)/g, '<span class="text-red-700 font-bold text-2xl mx-1">$1</span>') }} />
               ) : (
                  <span className="text-gray-400 italic">Chưa có câu chuyện gợi ý.</span>
               )}
            </p>
          </div>
        )}

        {/* Bottom Section: Nghĩa và ví dụ */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-2xl font-serif italic text-gray-900 border-b border-gray-300 pb-2 mb-6 w-fit pr-10">
            Nghĩa và ví dụ:
          </h3>
          <div className="flex flex-col gap-5">
             {examples.length > 0 ? examples.map((ex, idx) => (
               <div 
                 key={idx} 
                 className="flex flex-col gap-2 text-xl sm:text-2xl group cursor-pointer hover:bg-gray-100/50 p-3 -mx-3 rounded-xl transition-colors" 
                 onClick={() => playAudio(ex.chinese)}
               >
                  <div className="flex items-start gap-3">
                    <span className="text-gray-500 font-bold w-4 select-none mt-1">-</span>
                    <span className="text-gray-900 font-bold leading-relaxed">{ex.translation}:</span>
                  </div>
                  <div className="flex items-center ml-7 gap-3 flex-wrap">
                    <span className="text-red-700 font-bold">{ex.chinese}</span>
                    {ex.pinyin && <span className="text-gray-600 font-mono text-lg sm:text-xl">/{ex.pinyin}/</span>}
                    <Volume2 size={20} className="text-gray-300 group-hover:text-blue-600 transition-colors hidden sm:block" />
                  </div>
               </div>
             )) : (
               <div className="text-gray-500 italic text-lg p-2">Chưa có ví dụ.</div>
             )}
          </div>
        </div>

      </div>
    </div>
  );
}
