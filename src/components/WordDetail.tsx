import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Volume2, BookOpen, RotateCcw, Flame, BrainCircuit, ChevronLeft, ChevronRight } from 'lucide-react';
import StrokeWriter, { StrokeWriterRef } from './StrokeWriter';
import { cn } from '../lib/utils';

export interface WordItem {
  type: 'vocab' | 'radical';
  character: string;
  pinyin: string;
  meaning: string;
  topicId: string;
  topicTitle: string;
  lessonId?: string;
  example?: string;
  exampleTranslation?: string;
  variants?: string[];
  mnemonic?: string;
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
        pinyin: '', // The data might not have pinyin for the example
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

    // Add manual examples for radicals
    if (word.type === 'radical' && RADICAL_EXAMPLES[currentColChar]) {
      RADICAL_EXAMPLES[currentColChar].forEach(ex => {
        if (!found.some(e => e.chinese === ex.chinese)) {
          found.push(ex);
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
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Back Button */}
      <div className="mb-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="px-5 py-2 rounded-full bg-white border border-gray-100 text-xs font-bold text-gray-600 hover:bg-gray-50 flex items-center gap-2 transition-colors shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Quay lại</span>
        </button>

        <div className="flex items-center gap-2">
          {onPrev && (
            <button 
              onClick={onPrev}
              className="px-4 py-2 rounded-full bg-white border border-gray-100 text-xs font-bold text-gray-600 hover:bg-gray-50 flex items-center gap-2 transition-colors shadow-sm"
            >
              <ChevronLeft size={14} />
              <span className="hidden sm:inline">Trước đó</span>
            </button>
          )}
          {onNext && (
            <button 
              onClick={onNext}
              className="px-4 py-2 rounded-full bg-white border border-gray-100 text-xs font-bold text-gray-600 hover:bg-gray-50 flex items-center gap-2 transition-colors shadow-sm"
            >
              <span className="hidden sm:inline">Tiếp theo</span>
              <ChevronRight size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden p-6 flex flex-col gap-5">
          
          {/* Top small character selector like "汉 字 漢" / Multiple character words */}
          {characters.length > 1 && (
            <div className="flex items-center gap-1.5 bg-gray-50 w-fit p-1 rounded-xl mb-1">
              {characters.map((char, index) => (
                <button 
                  key={index} 
                  onClick={() => setSelectedCharIndex(index)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${index === selectedCharIndex ? 'bg-blue-900 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  {char}
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
            {/* Left Side: Character Display */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <div 
                className={cn(
                  "relative bg-[#f8f9fa] rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center transition-all",
                  word.type !== 'radical' && "group cursor-pointer hover:border-blue-200"
                )}
                style={{ width: 160, height: 160 }}
                onClick={word.type !== 'radical' ? playAnimation : undefined}
              >
                {/* Top right rotate icon */}
                {word.type !== 'radical' && (
                  <div className="absolute top-2.5 right-2.5 text-gray-400 group-hover:text-blue-600 transition-colors z-10 bg-gray-100 p-1 rounded-full pointer-events-none">
                    <RotateCcw size={14} />
                  </div>
                )}

                {/* Background Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                  <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-gray-600"></div>
                  <div className="absolute left-1/2 top-0 h-full border-l border-dashed border-gray-600"></div>
                  <div className="absolute inset-0 border-[0.5px] border-dashed border-gray-600 transform -rotate-45"></div>
                  <div className="absolute inset-0 border-[0.5px] border-dashed border-gray-600 transform rotate-45"></div>
                </div>
                
                {/* Stroke Writer */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <StrokeWriter 
                    ref={strokeWriterRef}
                    character={characters[selectedCharIndex]} 
                    size={130} 
                    strokeColor="#1e3a8a" // dark blue
                    radicalColor="#dc2626" // red
                  />
                </div>
              </div>
              
              {word.type !== 'radical' && (
                <button 
                  onClick={startQuiz}
                  className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm rounded-xl transition-colors"
                >
                  Tập viết
                </button>
              )}
            </div>

            {/* Right Side: Details */}
            <div className="flex-1 flex flex-col pt-1">
              <div className="flex flex-col gap-3.5 text-[14px]">
                
                {/* Bính âm */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-20">Bính âm:</span>
                  <div className="flex items-center gap-2 bg-gray-50 px-2.5 py-1 rounded-lg">
                    <span className="font-bold text-gray-900 text-base">{word.pinyin}</span>
                    <button 
                      onClick={() => playAudio(word.character)}
                      className={`transition-colors ${isPlaying ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'}`}
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Ý nghĩa */}
                <div className="flex items-start gap-3">
                  <span className="text-gray-500 w-20 mt-0.5">Ý nghĩa:</span>
                  <span className="text-gray-800 flex-1 text-base font-bold uppercase tracking-tight">{word.meaning}</span>
                </div>

                {/* Lục thư (placeholder) */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-20">Lục thư:</span>
                  <span className="text-gray-800 font-medium">hội ý</span>
                </div>

                {/* Bộ / Phân loại */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-20">Phân loại:</span>
                  <span className="text-gray-800 text-xs">
                    <span className="font-bold">{word.type === 'radical' ? 'Bộ thủ' : 'Từ vựng'}</span> 
                    <span className="text-gray-400 ml-2">(Chủ đề: {word.topicTitle})</span>
                  </span>
                </div>

                {/* Độ phổ biến */}
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1.5 text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full text-[11px] font-black uppercase">
                    <Flame size={12} className="fill-orange-500" />
                    Độ phổ biến: Rất cao
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Mnemonic Section (Mẹo nhớ) */}
        {word.mnemonic && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[24px] border border-green-100 shadow-sm p-6">
            <h3 className="text-lg font-black text-emerald-900 mb-3 flex items-center gap-2 tracking-tighter">
              <BrainCircuit size={18} className="text-emerald-600" />
              Mẹo ghi nhớ (Mnemonic)
            </h3>
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-emerald-100/50">
              <p className="text-emerald-800 font-medium leading-relaxed italic text-base">
                "{word.mnemonic}"
              </p>
            </div>
          </div>
        )}

        {/* Examples Section */}
        {examples.length > 0 && (
          <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2 tracking-tighter">
              <BookOpen size={18} className="text-blue-600" />
              {word.type === 'radical' ? 'Từ vựng phổ biến chứa bộ này' : `Ví dụ (${examples.length})`}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {examples.map((ex, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between group hover:bg-blue-50 transition-all cursor-pointer">
                  <div className="flex-1">
                    <div className="text-lg font-bold text-gray-900 mb-1 tracking-tight group-hover:text-blue-900">{ex.chinese}</div>
                    <div className="flex items-center gap-2">
                       {ex.pinyin && <div className="text-blue-600 text-[10px] font-mono leading-none">{ex.pinyin}</div>}
                       <div className="text-gray-400 text-[10px] italic leading-none">{ex.translation}</div>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio(ex.chinese);
                    }}
                    className="p-2 text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
