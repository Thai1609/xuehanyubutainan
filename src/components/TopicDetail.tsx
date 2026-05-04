import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, MessageSquare, Type, Languages, Book, 
  MessageCircle, Volume2, Search, Zap, Layers, RefreshCcw, ChevronDown
} from 'lucide-react';
import { Topic, DialogueLine, Vocabulary, Radical } from '../data/chineseData';
import StrokeWriter from './StrokeWriter';
import { cn } from '../lib/utils';
import { ScrollableTabContainer } from './ScrollableTabContainer';

export interface TopicDetailProps {
  topic: Topic;
  onBack: () => void;
  onWordClick: (word: any) => void;
  playAudio: (text: string) => void;
  isPlaying: string | null;
  voiceGender: 'female' | 'male';
  setVoiceGender: (v: 'female' | 'male') => void;
}

export default function TopicDetail({ 
  topic, 
  onBack, 
  onWordClick,
  playAudio, 
  isPlaying,
  voiceGender,
  setVoiceGender
}: TopicDetailProps) {
  const hasLessons = !!topic.lessons;
  const [activeTab, setActiveTab] = useState<'radicals' | 'vocab' | 'grammar' | 'dialogue'>(
    hasLessons ? 'dialogue' : 'vocab'
  );
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(
    topic.lessons && topic.lessons.length > 0 ? topic.lessons[0].id : null
  );

  const currentLesson = useMemo(() => {
    if (!topic.lessons || !selectedLessonId) return null;
    return topic.lessons.find(l => l.id === selectedLessonId);
  }, [topic.lessons, selectedLessonId]);

  const activeVocabulary = currentLesson ? currentLesson.vocabulary : topic.vocabulary;
  const activeDialogue = currentLesson ? currentLesson.dialogue : (hasLessons ? topic.dialogue : null);

  const activeGrammar = useMemo(() => {
    if (currentLesson?.grammar && currentLesson.grammar.length > 0) {
      return currentLesson.grammar;
    }
    return topic.grammar;
  }, [currentLesson, topic.grammar]);

  const [vocabSearch, setVocabSearch] = useState('');
  const [vocabMode, setVocabMode] = useState<'list' | 'flashcard'>('list');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [hidePinyin, setHidePinyin] = useState(false);
  const [hideTranslation, setHideTranslation] = useState(false);

  const filteredVocab = useMemo(() => {
    return activeVocabulary.filter(v => 
      v.character.includes(vocabSearch) || 
      v.pinyin.toLowerCase().includes(vocabSearch.toLowerCase()) ||
      v.meaning.toLowerCase().includes(vocabSearch.toLowerCase())
    );
  }, [activeVocabulary, vocabSearch]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <button 
        onClick={onBack}
        className="mb-6 px-5 py-2 rounded-full bg-white border border-orange-100 text-xs font-bold text-orange-600 hover:bg-orange-50 flex items-center gap-2 w-fit transition-colors shadow-sm"
      >
        <ChevronRight size={14} className="rotate-180" />
        Quay lại
      </button>

      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tighter">{topic.title}</h1>
          <p className="text-lg text-gray-500 max-w-2xl">{topic.description}</p>
        </div>
        <div className="flex gap-3">
           <span className="px-3 py-1.5 bg-orange-100 text-orange-700 rounded-xl text-xs font-bold uppercase tracking-widest">{topic.level}</span>
        </div>
      </div>

      {topic.lessons && (
        <div className="mb-6 flex flex-col items-center bg-white p-4 rounded-[32px] border border-orange-50 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-100" />
          
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-300 mb-2">Chọn bài học</div>
          
          <div className="flex gap-2 w-full max-w-2xl">
            <button 
              onClick={() => {
                const currentIndex = topic.lessons!.findIndex(l => l.id === selectedLessonId);
                if (currentIndex > 0) {
                  setSelectedLessonId(topic.lessons![currentIndex - 1].id);
                }
              }}
              disabled={topic.lessons.findIndex(l => l.id === selectedLessonId) === 0}
              className="p-3 rounded-2xl bg-orange-100 text-orange-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-200 transition-all"
              title="Bài trước"
            >
              <ChevronRight size={20} className="rotate-180" />
            </button>

            <div className="relative flex-1">
              <select
                value={selectedLessonId || ''}
                onChange={(e) => setSelectedLessonId(e.target.value)}
                className="w-full appearance-none bg-orange-50/50 border border-orange-100 text-gray-800 py-3 pl-5 pr-10 rounded-2xl font-black text-base focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all cursor-pointer hover:bg-orange-50"
              >
                {topic.lessons.map((lesson) => (
                  <option key={lesson.id} value={lesson.id} className="font-bold py-2">
                    {lesson.title}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-orange-500">
                <ChevronDown size={20} />
              </div>
            </div>

            <button 
              onClick={() => {
                const currentIndex = topic.lessons!.findIndex(l => l.id === selectedLessonId);
                if (currentIndex < topic.lessons!.length - 1) {
                  setSelectedLessonId(topic.lessons![currentIndex + 1].id);
                }
              }}
              disabled={topic.lessons.findIndex(l => l.id === selectedLessonId) === topic.lessons.length - 1}
              className="p-3 rounded-2xl bg-orange-100 text-orange-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-200 transition-all"
              title="Bài tiếp theo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <ScrollableTabContainer className="mb-0" containerClassName="flex p-1.5 bg-white rounded-2xl border border-orange-50 gap-1.5 w-fit shadow-sm">
          {[
            { id: 'dialogue', label: 'Hội thoại', icon: MessageSquare, color: 'bg-blue-600', show: !!activeDialogue },
            { id: 'radicals', label: 'Bộ thủ', icon: Type, color: 'bg-green-500', show: topic.radicals.length > 0 },
            { id: 'vocab', label: 'Từ vựng', icon: Languages, color: 'bg-orange-500', show: activeVocabulary.length > 0 },
            { id: 'grammar', label: 'Ngữ pháp', icon: Book, color: 'bg-purple-500', show: (topic.grammar.length > 0) || (!!currentLesson?.grammar && currentLesson.grammar.length > 0) },
          ].filter(t => t.show).map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
              }}
              className={cn(
                "px-3 md:px-5 py-2.5 text-xs font-bold rounded-xl flex items-center gap-2.5 transition-all whitespace-nowrap",
                activeTab === tab.id 
                  ? `${tab.color} text-white shadow-lg` 
                  : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
              )}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </ScrollableTabContainer>

        <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-orange-50 shadow-sm">
          <button 
            onClick={() => setHidePinyin(!hidePinyin)}
            className={cn(
              "px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all whitespace-nowrap", 
              hidePinyin ? "bg-orange-100 text-orange-600" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
            )}
          >
            {hidePinyin ? 'Ẩn Pinyin: Bật' : 'Ẩn Pinyin'}
          </button>
          <div className="w-px h-5 bg-gray-100" />
          <button 
            onClick={() => setHideTranslation(!hideTranslation)}
            className={cn(
              "px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all whitespace-nowrap", 
              hideTranslation ? "bg-orange-100 text-orange-600" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
            )}
          >
            {hideTranslation ? 'Ẩn Dịch: Bật' : 'Ẩn Dịch'}
          </button>
          <div className="w-px h-5 bg-gray-100" />
          <div className="flex p-0.5 bg-gray-50 rounded-xl gap-0.5">
            <button 
              onClick={() => setVoiceGender('female')}
              className={cn(
                "px-2 py-1 rounded-lg text-[9px] font-bold transition-all flex items-center gap-1",
                voiceGender === 'female' ? "bg-white text-orange-600 shadow-sm" : "text-gray-400"
              )}
            >
              👧 Nữ
            </button>
            <button 
              onClick={() => setVoiceGender('male')}
              className={cn(
                "px-2 py-1 rounded-lg text-[9px] font-bold transition-all flex items-center gap-1",
                voiceGender === 'male' ? "bg-white text-orange-600 shadow-sm" : "text-gray-400"
              )}
            >
              👦 Nam
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + (selectedLessonId || '')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
            {activeTab === 'dialogue' && (currentLesson?.dialogueSections || activeDialogue) && (
              <div className="space-y-6 max-w-5xl mx-auto">
                <div className="bg-blue-50 p-6 rounded-[40px] border-2 border-blue-100 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="text-blue-500" size={24} />
                    <h3 className="text-xl font-bold text-blue-900">Nội dung đàm thoại</h3>
                  </div>
                  <div className="space-y-12">
                    {currentLesson?.dialogueSections && currentLesson.dialogueSections.length > 0 ? (
                      currentLesson.dialogueSections
                        .filter(section => !section.title?.toLowerCase().includes('mẫu câu'))
                        .map((section, sectionIdx) => (
                        <div key={sectionIdx} className="space-y-6">
                          {section.title && (
                            <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4 border-b border-blue-50 pb-2">
                              {section.title}
                            </h4>
                          )}
                          <div className="space-y-8">
                            {section.dialogue.map((line, i) => {
                              const speakers = Array.from(new Set(section.dialogue.map(l => l.speaker)));
                              const isRight = speakers.indexOf(line.speaker) === 1;

                              return (
                                <div key={i} className={cn("flex gap-3 sm:gap-4 items-start", isRight ? "flex-row-reverse" : "flex-row")}>
                                  <div className={cn(
                                    "w-12 h-12 rounded-2xl flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 text-center p-1 leading-tight shadow-sm border transition-transform hover:scale-105",
                                    isRight ? "bg-purple-100 text-purple-600 border-purple-200" : "bg-blue-100 text-blue-600 border-blue-200"
                                  )}>
                                    {line.speaker}
                                  </div>
                                  <div className={cn(
                                    "flex-1 p-5 rounded-3xl shadow-sm border relative group transition-all hover:shadow-md",
                                    isRight ? "bg-purple-50 border-purple-100 rounded-tr-none" : "bg-white border-blue-50 rounded-tl-none"
                                  )}>
                                    <div className="text-xl font-medium text-gray-900 mb-1">{line.chinese}</div>
                                    <div className={cn("text-blue-400 font-mono text-sm mb-2 transition-all", hidePinyin && "opacity-0 blur-sm select-none")}>{line.pinyin}</div>
                                    <div className={cn("text-gray-500 transition-all", hideTranslation && "opacity-0 blur-sm select-none")}>{line.translation}</div>
                                    <button 
                                      onClick={() => playAudio(line.chinese)}
                                      className={cn(
                                        "absolute top-4 right-4 p-2 rounded-xl transition-all",
                                        isPlaying === line.chinese ? "bg-blue-500 text-white" : "text-gray-200 hover:text-blue-500"
                                      )}
                                    >
                                      <Volume2 size={18} />
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))
                    ) : (
                      activeDialogue?.map((line, i) => {
                        const speakers = Array.from(new Set(activeDialogue.map(l => l.speaker)));
                        const isRight = speakers.indexOf(line.speaker) === 1;

                        return (
                          <div key={i} className={cn("flex gap-3 sm:gap-4 items-start", isRight ? "flex-row-reverse" : "flex-row")}>
                            <div className={cn(
                              "w-12 h-12 rounded-2xl flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 text-center p-1 leading-tight shadow-sm border",
                              isRight ? "bg-purple-100 text-purple-600 border-purple-200" : "bg-blue-100 text-blue-600 border-blue-200"
                            )}>
                              {line.speaker}
                            </div>
                            <div className={cn(
                              "flex-1 p-5 rounded-3xl shadow-sm border relative group transition-all hover:shadow-md",
                              isRight ? "bg-purple-50 border-purple-100 rounded-tr-none" : "bg-white border-blue-50 rounded-tl-none"
                            )}>
                              <div className="text-xl font-medium text-gray-900 mb-1">{line.chinese}</div>
                              <div className={cn("text-blue-400 font-mono text-sm mb-2 transition-all", hidePinyin && "opacity-0 blur-sm select-none")}>{line.pinyin}</div>
                              <div className={cn("text-gray-500 transition-all", hideTranslation && "opacity-0 blur-sm select-none")}>{line.translation}</div>
                              <button 
                                onClick={() => playAudio(line.chinese)}
                                className={cn(
                                  "absolute top-4 right-4 p-2 rounded-xl transition-all",
                                  isPlaying === line.chinese ? "bg-blue-500 text-white" : "text-gray-200 hover:text-blue-500"
                                )}
                              >
                                <Volume2 size={18} />
                              </button>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'radicals' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {topic.radicals.map((r, i) => (
                  <button 
                    key={i} 
                    onClick={() => onWordClick({
                      id: `radical-${r.character}`,
                      character: r.character,
                      pinyin: r.pinyin,
                      meaning: r.meaning,
                      mnemonic: r.mnemonic,
                      variants: r.variants,
                      type: 'radical',
                      topicId: topic.id,
                      topicTitle: topic.title
                    } as any)}
                    className="bg-white p-8 rounded-[40px] border-b-4 border-green-100 shadow-sm flex flex-col items-center text-center group hover:border-green-300 transition-all cursor-pointer"
                  >
                    <div className="mb-4 flex-shrink-0">
                      <StrokeWriter 
                        character={r.character} 
                        size={80} 
                        className="bg-green-50 rounded-3xl p-3 border border-green-100 group-hover:border-green-200 transition-all" 
                      />
                    </div>
                    <div className={cn("px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-mono mb-2 transition-all", hidePinyin && "opacity-0 blur-sm select-none")}>{r.pinyin}</div>
                    <div className={cn("text-gray-800 font-bold text-lg transition-all", hideTranslation && "opacity-0 blur-sm select-none")}>{r.meaning}</div>
                    {r.mnemonic && (
                      <div className="mt-3 text-[10px] text-green-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Nhấn để xem mẹo nhớ</div>
                    )}
                  </button>
                ))}
              </div>
            )}

            {activeTab === 'vocab' && (
              <div className="space-y-6">
                {/* Vocab Controls */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-end bg-white p-4 rounded-[24px] border border-orange-50 shadow-sm">
                  
                  <div className="flex p-1 bg-gray-100 rounded-xl gap-1">
                    <button 
                      onClick={() => setVocabMode('list')}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2",
                        vocabMode === 'list' ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                      )}
                    >
                      <Layers size={14} /> Danh sách
                    </button>
                    <button 
                      onClick={() => {
                        setVocabMode('flashcard');
                        setShowMeaning(false);
                      }}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2",
                        vocabMode === 'flashcard' ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                      )}
                    >
                      <Zap size={14} /> Flashcard
                    </button>
                  </div>
                </div>

                {vocabMode === 'list' ? (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredVocab.map((v, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        key={i} 
                        className="bg-white p-6 rounded-[32px] border-b-2 border-orange-100 shadow-sm group hover:border-orange-300 transition-all relative overflow-hidden"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                              <StrokeWriter 
                                character={v.character} 
                                size={60} 
                                className="bg-orange-50 rounded-xl p-1.5 border border-orange-100 group-hover:border-orange-200 transition-all" 
                              />
                            </div>
                            <div>
                              <div className={cn("text-gray-400 font-mono text-xs mb-0.5 transition-all", hidePinyin && "opacity-0 blur-sm select-none")}>{v.pinyin}</div>
                              <div className={cn("text-xl font-bold text-gray-800 transition-all", hideTranslation && "opacity-0 blur-sm select-none")}>{v.meaning}</div>
                            </div>
                          </div>
                          <button 
                            onClick={() => playAudio(v.character)}
                            className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                              isPlaying === v.character ? "bg-orange-500 text-white animate-pulse" : "bg-orange-50 text-orange-500 hover:bg-orange-100"
                            )}
                          >
                            <Volume2 size={20} />
                          </button>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl border border-dashed border-orange-100 relative group/ex">
                          <div className={cn("text-sm font-medium text-gray-700 mb-1.5 leading-relaxed pr-8 transition-all", hideTranslation && "opacity-0 blur-sm select-none")}>{v.example}</div>
                          {v.examplePinyin && (
                            <div className={cn("text-xs text-orange-400 font-mono mb-1.5 transition-all", hidePinyin && "opacity-0 blur-sm select-none")}>{v.examplePinyin}</div>
                          )}
                          <div className={cn("text-[11px] text-gray-400 italic transition-all", hideTranslation && "opacity-0 blur-sm select-none")}>{v.exampleTranslation}</div>
                          <button 
                            onClick={() => playAudio(v.example)}
                            className="absolute top-3 right-3 text-gray-300 hover:text-orange-500 transition-colors"
                          >
                            <Volume2 size={14} />
                          </button>
                        </div>
                      </motion.div>
                    ))}

                    {filteredVocab.length === 0 && (
                      <div className="col-span-full py-20 text-center bg-white rounded-[40px] border border-dashed border-orange-100">
                        <p className="text-gray-400 italic">Không tìm thấy từ vựng nào phù hợp...</p>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Flashcard UI */
                  <div className="max-w-xl mx-auto py-10">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={flashcardIndex}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        onClick={() => setShowMeaning(!showMeaning)}
                        className="aspect-[4/3] bg-white rounded-[60px] shadow-2xl border-b-[12px] border-orange-100 flex flex-col items-center justify-center p-12 cursor-pointer relative overflow-hidden group select-none"
                      >
                        <div className="absolute top-8 right-8 text-gray-300 group-hover:text-orange-300 transition-colors">
                          <RefreshCcw size={24} />
                        </div>

                        {!showMeaning ? (
                          <div className="text-center">
                            <div className="text-8xl font-black text-gray-900 mb-6 tracking-tighter">
                              {filteredVocab[flashcardIndex]?.character}
                            </div>
                            <div className="text-2xl font-mono text-orange-400 bg-orange-50 px-6 py-2 rounded-full inline-block">
                              {filteredVocab[flashcardIndex]?.pinyin}
                            </div>
                            <p className="mt-8 text-gray-400 text-sm font-bold uppercase tracking-widest">Nhấn để xem ý nghĩa</p>
                          </div>
                        ) : (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center w-full"
                          >
                            <div className="max-h-[140px] overflow-y-auto px-4 custom-scrollbar mb-6">
                              <div className="text-3xl sm:text-4xl font-bold text-orange-600 leading-tight">
                                {filteredVocab[flashcardIndex]?.meaning.includes(';') 
                                  ? filteredVocab[flashcardIndex].meaning.split(';').map((m, i) => (
                                      <div key={i} className={i !== 0 ? "mt-4 pt-4 border-t border-orange-50" : ""}>
                                        {m.trim()}
                                      </div>
                                    ))
                                  : filteredVocab[flashcardIndex]?.meaning
                                }
                              </div>
                            </div>
                            <div className="text-lg text-gray-500 max-w-sm mx-auto mb-6 italic">
                              "{filteredVocab[flashcardIndex]?.exampleTranslation}"
                            </div>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                playAudio(filteredVocab[flashcardIndex]?.character);
                              }}
                              className="w-16 h-16 bg-orange-500 text-white rounded-3xl flex items-center justify-center shadow-lg shadow-orange-200 hover:scale-110 active:scale-95 transition-all mx-auto"
                            >
                              <Volume2 size={32} />
                            </button>
                          </motion.div>
                        )}

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                           {filteredVocab.map((_, i) => (
                             <div 
                               key={i} 
                               className={cn(
                                 "w-2 h-2 rounded-full transition-all",
                                 i === flashcardIndex ? "bg-orange-500 w-6" : "bg-orange-100"
                               )} 
                             />
                           ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center justify-between mt-12 gap-6">
                      <button 
                        onClick={() => {
                          setFlashcardIndex((prev) => (prev > 0 ? prev - 1 : filteredVocab.length - 1));
                          setShowMeaning(false);
                        }}
                        className="flex-1 py-4 bg-white rounded-2xl border border-gray-100 text-gray-600 font-bold hover:bg-gray-50 transition-all shadow-sm"
                      >
                        Trở lại
                      </button>
                      <button 
                        onClick={() => {
                          setFlashcardIndex((prev) => (prev < filteredVocab.length - 1 ? prev + 1 : 0));
                          setShowMeaning(false);
                        }}
                        className="flex-1 py-4 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-100"
                      >
                        Tiếp theo
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

        {activeTab === 'grammar' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {activeGrammar.map((g, i) => (
              <div key={i} className="bg-purple-50 p-6 md:p-8 rounded-[32px] border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-200 text-purple-700 rounded-xl flex items-center justify-center text-lg shadow-inner">
                    💡
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 tracking-tight">{g.rule}</h3>
                </div>
                <p className="text-purple-800 mb-8 text-base leading-relaxed">{g.description}</p>
                <div className="space-y-4">
                   {g.examples.map((ex, j) => (
                    <div key={j} className="bg-white p-4 rounded-2xl shadow-sm border border-purple-100 flex gap-4 items-start group relative">
                       <div className="w-6 h-6 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">
                         {j + 1}
                       </div>
                       <div className="flex-1">
                         <div className="flex items-center justify-between mb-0.5">
                           <div className="text-lg font-bold text-gray-900 tracking-wide">{ex.chinese}</div>
                           <button 
                             onClick={() => playAudio(ex.chinese)}
                             className={cn(
                               "p-1.5 rounded-lg transition-all",
                               isPlaying === ex.chinese ? "bg-purple-500 text-white" : "text-purple-300 hover:text-purple-600 hover:bg-purple-50"
                             )}
                           >
                             <Volume2 size={14} />
                           </button>
                         </div>
                         <div className={cn("text-purple-400 font-mono text-xs mb-1 uppercase tracking-tighter transition-all", hidePinyin && "opacity-0 blur-sm select-none")}>{ex.pinyin}</div>
                         <div className={cn("text-sm text-gray-500 font-medium transition-all", hideTranslation && "opacity-0 blur-sm select-none")}>{ex.translation}</div>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
      </AnimatePresence>
    </div>
  );
}
