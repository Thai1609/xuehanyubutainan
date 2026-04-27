import React, { useState, useRef } from 'react';
import { ArrowLeft, Volume2, BookOpen, RotateCcw, Flame } from 'lucide-react';
import StrokeWriter, { StrokeWriterRef } from './StrokeWriter';

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
}

interface WordDetailProps {
  word: WordItem;
  onBack: () => void;
  playAudio: (text: string) => void;
  isPlaying: boolean;
}

import { CHINESE_DATA } from '../data/chineseData';
import { CHINESE_301_TOPICS } from '../data/chinese301Data';

export default function WordDetail({ word, onBack, playAudio, isPlaying }: WordDetailProps) {
  const characters = Array.from(word.character);
  const [selectedCharIndex, setSelectedCharIndex] = useState(0);
  const strokeWriterRef = useRef<StrokeWriterRef>(null);

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
        if (line.chinese && line.chinese.includes(word.character)) {
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
    
    return found;
  }, [word]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Back Button */}
      <div className="mb-6 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="px-6 py-2 rounded-full bg-white border border-gray-100 text-sm font-bold text-gray-600 hover:bg-gray-50 flex items-center gap-2 transition-colors shadow-sm"
        >
          <ArrowLeft size={16} />
          <span>Quay lại</span>
        </button>
      </div>

      <div className="flex flex-col gap-6">
        <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden p-6 sm:p-8 flex flex-col gap-6">
          
          {/* Top small character selector like "汉 字 漢" / Multiple character words */}
          {characters.length > 1 && (
            <div className="flex items-center gap-2 bg-gray-50 w-fit p-1 rounded-[16px] mb-2">
              {characters.map((char, index) => (
                <button 
                  key={index} 
                  onClick={() => setSelectedCharIndex(index)}
                  className={`px-4 py-1.5 rounded-xl font-medium transition-all ${index === selectedCharIndex ? 'bg-blue-900 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  {char}
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {/* Left Side: Character Display */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div 
                className="relative bg-[#f8f9fa] rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center group cursor-pointer" 
                style={{ width: 180, height: 180 }}
                onClick={playAnimation}
              >
                {/* Top right rotate icon */}
                <div className="absolute top-3 right-3 text-gray-400 group-hover:text-blue-600 transition-colors z-10 bg-gray-100 p-1.5 rounded-full pointer-events-none">
                  <RotateCcw size={16} />
                </div>

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
                    size={140} 
                    strokeColor="#1e3a8a" // dark blue
                    radicalColor="#dc2626" // red
                  />
                </div>
              </div>
              
              <button 
                onClick={startQuiz}
                className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors"
              >
                Tập viết
              </button>
            </div>

            {/* Right Side: Details */}
            <div className="flex-1 flex flex-col pt-2">
              <div className="flex flex-col gap-4 text-[15px]">
                
                {/* Bính âm */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-24">Bính âm:</span>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-xl">
                    <span className="font-bold text-gray-900 text-lg">{word.pinyin}</span>
                    <button 
                      onClick={() => playAudio(word.character)}
                      className={`transition-colors ${isPlaying ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'}`}
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Ý nghĩa */}
                <div className="flex items-start gap-3">
                  <span className="text-gray-500 w-24 mt-1">Ý nghĩa:</span>
                  <span className="text-gray-800 flex-1 text-lg font-medium">{word.meaning}</span>
                </div>

                {/* Lục thư (placeholder) */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-24">Lục thư:</span>
                  <span className="text-gray-800 font-medium">hội ý</span>
                </div>

                {/* Bộ / Phân loại */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-24">Phân loại:</span>
                  <span className="text-gray-800">
                    <span className="font-medium">{word.type === 'radical' ? 'Bộ thủ' : 'Từ vựng'}</span> 
                    <span className="text-gray-400 text-sm ml-2">(Chủ đề: {word.topicTitle})</span>
                  </span>
                </div>

                {/* Độ phổ biến */}
                <div className="flex items-center gap-3 mt-4">
                  <span className="flex items-center gap-1.5 text-orange-500 bg-orange-50 px-3 py-1 rounded-full text-sm font-bold">
                    <Flame size={14} className="fill-orange-500" />
                    Độ phổ biến: Rất cao
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        {examples.length > 0 && (
          <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-600" />
              Ví dụ ({examples.length})
            </h3>
            <div className="flex flex-col gap-4">
              {examples.map((ex, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-xl font-medium text-gray-900 mb-2">{ex.chinese}</div>
                  {ex.pinyin && <div className="text-blue-600 font-medium mb-1">{ex.pinyin}</div>}
                  <div className="text-gray-600 text-lg">{ex.translation}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
