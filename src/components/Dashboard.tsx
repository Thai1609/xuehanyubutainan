import React, { useState, useMemo } from 'react';
import { CHINESE_DATA, RADICAL_CATEGORIES, Topic, Vocabulary, DialogueLine } from '../data/chineseData';
import { CHINESE_301_TOPICS } from '../data/chinese301Data';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, Utensils, Briefcase, Leaf, Smartphone, Users, 
  ShoppingBag, Clock, Music, Bus, Heart, Stethoscope, 
  GraduationCap, Grid, Star, Target, Map, Bug, 
  Palette, Smile, Calendar, Tv, BookOpen, MessageSquare, 
  ChevronRight, Languages, Book, Type, Search, X, Zap, Bird, Cloud, Volume2, ChevronDown,
  BrainCircuit, Gamepad2, Layers, CheckCircle2, XCircle
} from 'lucide-react';

import { icons } from '../lib/icons';
import { cn } from '../lib/utils';
import TopicCard from './TopicCard';
import TopicDetail from './TopicDetail';
import StrokeWriter from './StrokeWriter';
import { FlashcardsView } from './FlashcardsView';
import { QuizView } from './QuizView';
import { ScrollableTabContainer } from './ScrollableTabContainer';
import { ChevronLeft } from 'lucide-react';


function normalizeText(text: string): string {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function Dashboard() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isVocabListOpen, setIsVocabListOpen] = useState(false);
  const [isPronunciationOpen, setIsPronunciationOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [voiceGender, setVoiceGender] = useState<'female'|'male'>('female');

  const [mainTab, setMainTab] = useState<'vocab' | 'roadmap' | 'radicals' | 'practice'>('vocab');
  const [practiceMode, setPracticeMode] = useState<'flashcards' | 'quiz' | null>(null);

  const allGlobalVocab = useMemo(() => {
    let vocab: Vocabulary[] = [];
    [...CHINESE_DATA, ...CHINESE_301_TOPICS].forEach(topic => {
      vocab = [...vocab, ...topic.vocabulary];
      if (topic.lessons) {
        topic.lessons.forEach(l => vocab = [...vocab, ...l.vocabulary]);
      }
    });
    // Remove duplicates based on character
    return Array.from(new globalThis.Map(vocab.map(v => [v.character, v])).values());
  }, []);

  // Pre-load voices for better reliability
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      const handleVoicesChanged = () => window.speechSynthesis.getVoices();
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
      return () => window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedTopic]);

  const playAudio = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    
    let speakText = text;
    
    // Mapping isolated initials to their standard teaching pronunciations
    const initialMap: Record<string, string> = {
      'b': 'bo', 'p': 'po', 'm': 'mo', 'f': 'fo',
      'd': 'de', 't': 'te', 'n': 'ne', 'l': 'le',
      'g': 'ge', 'k': 'ke', 'h': 'he',
      'j': 'ji', 'q': 'qi', 'x': 'xi',
      'zh': 'zhi', 'ch': 'chi', 'sh': 'shi', 'r': 'ri',
      'z': 'zi', 'c': 'ci', 's': 'si'
    };
    
    if (initialMap[text.toLowerCase()]) {
      speakText = initialMap[text.toLowerCase()];
    }

    // Mapping tones to "ma" for better clarity
    const toneMap: Record<string, string> = {
      'ā': 'mā', 'á': 'má', 'ǎ': 'mǎ', 'à': 'mà'
    };

    if (toneMap[text]) {
      speakText = toneMap[text];
    }
    
    const utterance = new SpeechSynthesisUtterance(speakText);
    
    const voices = window.speechSynthesis.getVoices();
    let preferredVoice;
    if (voiceGender === 'male') {
      preferredVoice = voices.find(v => v.lang.includes('zh') && (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('kangkang') || v.name.toLowerCase().includes('boy')));
    }

    const fallbackVoice = voices.find(v => v.lang.includes('zh-CN') && v.name.includes('Google')) || 
                    voices.find(v => v.lang.includes('zh-CN')) ||
                    voices.find(v => v.lang.includes('zh'));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.pitch = 1.0;
    } else if (fallbackVoice) {
      utterance.voice = fallbackVoice;
      utterance.pitch = voiceGender === 'male' ? 0.5 : 1.0;
    } else {
      utterance.pitch = voiceGender === 'male' ? 0.5 : 1.0;
    }

    utterance.lang = 'zh-CN';
    utterance.rate = 0.6; // Even slower for initials/tones
    
    setIsPlaying(text);
    utterance.onend = () => setIsPlaying(null);
    utterance.onerror = () => setIsPlaying(null);
    
    window.speechSynthesis.speak(utterance);
  };

  if (selectedTopic) {
    return (
      <TopicDetail 
        topic={selectedTopic} 
        onBack={() => setSelectedTopic(null)} 
        playAudio={playAudio}
        isPlaying={isPlaying}
        voiceGender={voiceGender}
        setVoiceGender={setVoiceGender}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-6 tracking-widest uppercase shadow-sm">Bắt đầu hành trình</div>
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter leading-[0.95]">
          Làm chủ tiếng Trung <br />
          <span className="text-orange-500">Dễ như ăn bánh.</span>
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-12">
          Học từ phát âm cơ bản, bộ thủ cốt lõi đến cấu trúc thực tế. 
          Luyện tập phản xạ cùng AI mỗi ngày.
        </p>
      </div>

      <div className="w-full max-w-full overflow-hidden flex justify-center mb-12">
        <ScrollableTabContainer className="mb-0" containerClassName="flex bg-gray-100 p-2 rounded-full mx-auto w-fit">
          <button 
            onClick={() => setMainTab('vocab')}
            className={cn("px-4 md:px-6 py-3 rounded-full font-bold text-sm transition-all whitespace-nowrap", mainTab === 'vocab' ? "bg-white text-orange-500 shadow-sm" : "text-gray-500 hover:text-gray-700")}
          >
            Từ vựng theo chủ đề
          </button>
          <button 
            onClick={() => setMainTab('roadmap')}
            className={cn("px-4 md:px-6 py-3 rounded-full font-bold text-sm transition-all whitespace-nowrap", mainTab === 'roadmap' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
          >
            Lộ trình bài học
          </button>
          <button 
            onClick={() => setMainTab('radicals')}
            className={cn("px-4 md:px-6 py-3 rounded-full font-bold text-sm transition-all whitespace-nowrap", mainTab === 'radicals' ? "bg-white text-green-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
          >
            Thư viện Bộ Thủ
          </button>
          <button 
            onClick={() => setMainTab('practice')}
            className={cn("px-4 md:px-6 py-3 rounded-full font-bold text-sm transition-all whitespace-nowrap", mainTab === 'practice' ? "bg-white text-purple-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
          >
            Luyện tập
          </button>
        </ScrollableTabContainer>
      </div>

      {mainTab === 'vocab' && (
      <section className="mb-24">
        <div className="flex items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
              <Languages size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Danh mục từ mới</h2>
              <p className="text-gray-500">Học từ mới qua các chủ đề giao tiếp thực tế</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {CHINESE_DATA.map((topic) => (
            <TopicCard 
              key={topic.id} 
              topic={topic} 
              onClick={(t) => setSelectedTopic(t)} 
            />
          ))}
        </div>
      </section>
      )}

      {/* 3. Learning Roadmap Section */}
      {mainTab === 'roadmap' && (
        <section className="mb-24">
          <div className="flex items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg text-2xl">
                <Map size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Lộ trình học</h2>
                <p className="text-gray-500">Chinh phục 301 mẫu câu đàm thoại tiếng Hoa tinh hoa</p>
              </div>
            </div>
          </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: '301 Đàm thoại', level: 'Mới bắt đầu', color: 'bg-blue-500', shadow: 'shadow-blue-50', desc: 'Gom nhóm 10 bài đầu tiên với đầy đủ hội thoại và từ vựng.', vocab: 300, topicId: '301-full' },
         ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => {
                  const topic = [...CHINESE_301_TOPICS, ...CHINESE_DATA].find(t => t.id === item.topicId);
                  if (topic) setSelectedTopic(topic);
                }}
                className={cn(
                  "p-8 rounded-[48px] bg-white border border-gray-100 shadow-xl transition-all relative overflow-hidden group cursor-pointer",
                  item.shadow
                )}
              >
                <div className={cn("absolute top-0 right-0 w-32 h-32 opacity-10 -mr-16 -mt-16 rounded-full transition-transform group-hover:scale-150", item.color)}></div>
                <div className="flex items-center justify-between mb-6">
                  <div className={cn("px-4 py-1 rounded-full text-white text-[10px] font-bold tracking-widest uppercase", item.color)}>
                    {item.level}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item.vocab} Từ vựng</div>
                  <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center transition-all", item.color)}>
                    <ChevronRight size={20} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {mainTab === 'radicals' && (
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg text-2xl">
              <Grid size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Thư viện Bộ Thủ</h2>
              <p className="text-gray-500">Gốc rễ của chữ Hán, chia theo nhóm ý nghĩa sinh động</p>
            </div>
          </div>
          
          <div className="space-y-12">
            {RADICAL_CATEGORIES.map((cat) => {
              const Icon = icons[cat.icon] || Grid;
              return (
                <div key={cat.id} className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-gray-50 text-gray-600 rounded-2xl">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{cat.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                    {cat.radicals.map((r, i) => (
                      <div key={i} className="flex flex-col items-center group">
                        <div className="mb-3">
                          <StrokeWriter 
                            character={r.character} 
                            size={60} 
                            className="bg-gray-50 rounded-2xl p-2 border border-transparent group-hover:border-green-300 group-hover:bg-green-50 transition-all"
                          />
                        </div>
                        <div className="text-[10px] font-mono text-gray-400 mb-1">{r.pinyin}</div>
                        <div className="text-xs font-bold text-gray-700 text-center line-clamp-1">{r.meaning.split(' (')[0]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {mainTab === 'practice' && (
        <section className="mb-24 flex flex-col items-center justify-center py-12">
          {!practiceMode ? (
            <>
              <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-[32px] flex items-center justify-center mb-8 shadow-inner">
                 <Gamepad2 size={40} />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4 text-center">Đấu trường Luyện tập</h2>
              <p className="text-gray-500 text-center max-w-lg mb-12">
                Ôn luyện toàn bộ từ vựng đã học qua hệ thống Flashcard kết hợp thuật toán lặp lại ngắt quãng (Spaced Repetition) và các bài Trắc nghiệm ngẫu nhiên.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                 <div 
                   onClick={() => setPracticeMode('flashcards')}
                   className="bg-gradient-to-br from-pink-50 to-rose-50 p-10 rounded-[48px] border border-pink-100 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all hover:-translate-y-2">
                     <div className="absolute top-8 right-8 text-pink-200 group-hover:scale-150 transition-transform">
                       <Layers size={80} />
                     </div>
                     <h3 className="text-2xl font-bold text-pink-900 mb-2 relative z-10">Thẻ ghi nhớ tổng hợp</h3>
                     <p className="text-pink-700 opacity-80 mb-8 relative z-10">Lượt qua ngẫu nhiên các từ vựng từ mọi chủ đề.</p>
                     <div className="inline-flex bg-white text-pink-600 px-6 py-3 rounded-full font-bold shadow-sm relative z-10 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                         Luyện Flashcard ngay
                     </div>
                 </div>

                 <div 
                   onClick={() => setPracticeMode('quiz')}
                   className="bg-gradient-to-br from-indigo-50 to-blue-50 p-10 rounded-[48px] border border-indigo-100 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all hover:-translate-y-2">
                     <div className="absolute top-8 right-8 text-indigo-200 group-hover:scale-150 transition-transform">
                       <BrainCircuit size={80} />
                     </div>
                     <h3 className="text-2xl font-bold text-indigo-900 mb-2 relative z-10">Thi trắc nghiệm ngẫu nhiên</h3>
                     <p className="text-indigo-700 opacity-80 mb-8 relative z-10">Kiểm tra nhanh trí nhớ của bạn với 10 câu hỏi ngẫu nhiên từ toàn bộ kho từ vựng.</p>
                     <div className="inline-flex bg-white text-indigo-600 px-6 py-3 rounded-full font-bold shadow-sm relative z-10 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                         Bắt đầu thi
                     </div>
                 </div>
              </div>
            </>
          ) : (
            <div className="w-full max-w-4xl relative">
              <button 
                onClick={() => setPracticeMode(null)}
                className="absolute -top-16 left-0 px-6 py-2 rounded-full bg-white border border-gray-100 text-sm font-bold text-gray-600 hover:bg-gray-50 flex items-center gap-2 w-fit transition-colors shadow-sm"
              >
                <ChevronRight size={16} className="rotate-180" />
                Quay lại Đấu trường
              </button>
              
              {practiceMode === 'flashcards' && (
                <FlashcardsView vocabList={allGlobalVocab} playAudio={playAudio} />
              )}
              {practiceMode === 'quiz' && (
                <QuizView vocabList={allGlobalVocab} />
              )}
            </div>
          )}
        </section>
      )}

    </div>

  );
}
