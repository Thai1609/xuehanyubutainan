import React, { useState, useMemo, useCallback } from 'react';
import { CHINESE_DATA, RADICAL_CATEGORIES, Topic, Vocabulary, DialogueLine } from '../data/chineseData';
import { CHINESE_301_TOPICS } from '../data/chinese301Data';
import { HSK_TOPICS } from '../data/hskData';
import { motion, AnimatePresence } from 'motion/react';
import { BASIC_GRAMMAR_STRUCTURES } from '../data/grammarData';
import { 
  ChevronRight, Languages, Book, Type, Search, X, Volume2, ChevronDown,
  BrainCircuit, Gamepad2, Layers, CheckCircle2, XCircle, FileText, Home, Flower,
  Grid, Map, MessageSquare, PlayCircle, Smile, ShoppingBag, Utensils, Cloud
} from 'lucide-react';

import { icons } from '../lib/icons';
import { cn } from '../lib/utils';
import TopicCard from './TopicCard';
import TopicDetail from './TopicDetail';
import WordDetail, { WordItem } from './WordDetail';
import StrokeWriter from './StrokeWriter';
import { FlashcardsView } from './FlashcardsView';
import { QuizView } from './QuizView';
import { SentenceOrderingView } from './SentenceOrderingView';
import { ScrollableTabContainer } from './ScrollableTabContainer';
import { CompoundWordsView } from './CompoundWordsView';
import { MEASURE_WORDS } from '../data/measureWordsData';
import { BeginnerRoadmapView } from './BeginnerRoadmapView';
import { PinyinPronunciationView } from './PinyinPronunciationView';
import { GrammarPracticeView } from './GrammarPracticeView';


const STUDY_GROUPS = [
  {
    label: 'Lộ trình',
    sections: [{ id: 'roadmap', label: 'Lộ trình' }],
  },
  {
    label: 'Thư viện',
    sections: [
      { id: 'pinyin', label: 'Phát âm' },
      { id: 'vocab', label: 'Từ vựng chủ đề' },
      { id: 'hsk', label: 'Từ vựng HSK' },
      { id: 'grammar', label: 'Ngữ pháp' },
      { id: 'radicals', label: 'Bộ thủ' },
      { id: 'measure-words', label: 'Lượng từ' },
    ],
  },
  {
    label: 'Luyện tập',
    sections: [
      { id: 'practice', label: 'Ôn tập tổng hợp' },
      { id: 'word-match', label: 'Ghép từ' },
      { id: 'sentences', label: 'Sắp xếp câu' },
    ],
  },
] as const;

type StudySection = (typeof STUDY_GROUPS)[number]['sections'][number]['id'];

function normalizeText(text: string): string {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function Dashboard() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isVocabListOpen, setIsVocabListOpen] = useState(false);
  const [isPronunciationOpen, setIsPronunciationOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [voiceGender, setVoiceGender] = useState<'female'|'male'>('female');

  const [mainTab, setMainTab] = useState<StudySection>('roadmap');
  const [hskTopic, setHskTopic] = useState(HSK_TOPICS[0]);
  const activeGroup = STUDY_GROUPS.find(group => group.sections.some(section => section.id === mainTab)) ?? STUDY_GROUPS[0];
  const [practiceMode, setPracticeMode] = useState<'flashcards' | 'quiz' | 'grammar-practice' | null>(null);
  const [flashcardCategory, setFlashcardCategory] = useState<'vocab' | 'radicals' | 'measure-words'>('vocab');
const [selectedWord, setSelectedWord] = useState<WordItem | null>(null);
  const [expandedGrammarId, setExpandedGrammarId] = useState<string | null>(null);

  const siblingWords = useMemo(() => {
    if (!selectedWord) return [];
    
    if (selectedWord.topicId === 'radicals') {
      const allRads: WordItem[] = [];
      RADICAL_CATEGORIES.forEach(cat => {
        cat.radicals.forEach(r => {
          allRads.push({
            id: `radical-${r.character}`,
            character: r.character,
            pinyin: r.pinyin,
            meaning: r.meaning,
            mnemonic: r.mnemonic,
            variants: r.variants,
            customExamples: r.examples,
            type: 'radical',
            topicId: 'radicals',
            topicTitle: `Bộ Thủ - ${cat.name}`
          } as WordItem);
        });
      });
      return allRads;
    } else {
      const topic = [...CHINESE_DATA, ...CHINESE_301_TOPICS, ...HSK_TOPICS].find(t => t.id === selectedWord.topicId);
      if (!topic) return [];

      if (selectedWord.type === 'radical') {
        if (topic.radicals) {
          return topic.radicals.map(r => ({
             id: `radical-${r.character}`,
             character: r.character,
             pinyin: r.pinyin,
             meaning: r.meaning,
             mnemonic: r.mnemonic,
             variants: r.variants,
             customExamples: r.examples,
             type: 'radical',
             topicId: topic.id,
             topicTitle: topic.title
          } as WordItem));
        }
      } else {
        // Find vocabulary siblings
        // If the word has a lessonId, find siblings in that lesson, otherwise topic.vocabulary
        let siblings: Vocabulary[] = [];
        if (selectedWord.lessonId && topic.lessons) {
           const lesson = topic.lessons.find(l => l.id === selectedWord.lessonId);
           if (lesson) siblings = lesson.vocabulary;
        } else {
           siblings = topic.vocabulary || [];
        }

        return siblings.map(v => ({
           id: v.id || `vocab-${v.character}`,
           character: v.character,
           pinyin: v.pinyin,
           meaning: v.meaning,
           example: v.example,
           examplePinyin: v.examplePinyin,
           exampleTranslation: v.exampleTranslation,
           mnemonic: v.mnemonic,
           customExamples: v.customExamples,
           components: v.components,
           type: 'vocab',
           topicId: topic.id,
           topicTitle: topic.title,
           lessonId: selectedWord.lessonId
        } as WordItem));
      }
    }
    return [];
  }, [selectedWord]);

  const currentWordIndex = selectedWord ? siblingWords.findIndex(w => w.character === selectedWord.character) : -1;
  const nextWord = currentWordIndex >= 0 && currentWordIndex < siblingWords.length - 1 ? siblingWords[currentWordIndex + 1] : null;
  const prevWord = currentWordIndex > 0 ? siblingWords[currentWordIndex - 1] : null;

  const handleNextWord = useCallback(() => {
    if (nextWord) setSelectedWord(nextWord);
  }, [nextWord]);

  const handlePrevWord = useCallback(() => {
    if (prevWord) setSelectedWord(prevWord);
  }, [prevWord]);

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

  const allRadicalsVocab = useMemo(() => {
    let radicals: Vocabulary[] = [];
    RADICAL_CATEGORIES.forEach((cat, index) => {
      cat.radicals.forEach((r, rIndex) => {
        radicals.push({
          id: `rad_${index}_${rIndex}`,
          character: r.character,
          pinyin: r.pinyin,
          meaning: r.meaning,
          level: 'Bộ thủ',
          mnemonic: r.mnemonic, // pass mnemonic for radicals
          topicId: 'radicals',
          customExamples: r.examples,
        });
      });
    });
    return radicals;
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
  }, [selectedTopic, selectedWord]);

  const playAudio = (text: string) => {
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
    
    setIsPlaying(text);

    // Stop any existing synthesis
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    const fallbackToSpeechSynthesis = () => {
      if (!window.speechSynthesis) {
        setIsPlaying(null);
        return;
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

      // Slightly slower for initials and tones if it's mapped, otherwise normal speed
      utterance.rate = (initialMap[text.toLowerCase()] || toneMap[text]) ? 0.6 : 0.8;
      utterance.lang = 'zh-CN';
      
      utterance.onend = () => setIsPlaying(null);
      utterance.onerror = () => setIsPlaying(null);
      
      window.speechSynthesis.speak(utterance);
    };

    try {
      // Use high quality Google Translate TTS
      const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh-CN&q=${encodeURIComponent(speakText)}`;
      const audio = new Audio(url);
      // Slower playback rate for initials/tones
      if (initialMap[text.toLowerCase()] || toneMap[text]) {
        audio.playbackRate = 0.8;
      }
      
      audio.onended = () => setIsPlaying(null);
      audio.onerror = () => fallbackToSpeechSynthesis();
      
      audio.play().catch((err) => {
        fallbackToSpeechSynthesis();
      });
    } catch (e) {
      fallbackToSpeechSynthesis();
    }
  };

  return (
    <AnimatePresence mode="wait">
      {selectedWord ? (
        <motion.div
           key="word-detail"
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -20 }}
           transition={{ duration: 0.3 }}
        >
          <WordDetail 
            word={selectedWord} 
            onBack={() => setSelectedWord(null)} 
            playAudio={playAudio}
            isPlaying={isPlaying === selectedWord.character}
            onNext={nextWord ? handleNextWord : undefined}
            onPrev={prevWord ? handlePrevWord : undefined}
          />
        </motion.div>
      ) : selectedTopic ? (
        <motion.div
          key="topic-detail"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <TopicDetail 
            topic={selectedTopic} 
            onBack={() => setSelectedTopic(null)} 
            onWordClick={setSelectedWord}
            playAudio={playAudio}
            isPlaying={isPlaying}
            voiceGender={voiceGender}
            setVoiceGender={setVoiceGender}
          />
        </motion.div>
      ) : (
        <motion.div
          key="dashboard-home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-w-7xl mx-auto py-8 px-4"
        >
      <div className="mb-5 text-center sm:mb-6">
        <h1 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
          Học tiếng Trung
        </h1>
      </div>

      <nav aria-label="Nhóm nội dung học" className="mx-auto mb-4 grid w-full max-w-md grid-cols-3 gap-1 rounded-2xl bg-gray-100 p-1">
        {STUDY_GROUPS.map(group => (
          <button
            key={group.label}
            type="button"
            aria-pressed={activeGroup === group}
            onClick={() => {
              if (activeGroup !== group) setMainTab(group.sections[0].id);
            }}
            className={cn(
              "min-h-11 rounded-xl px-1 text-sm font-bold transition-colors sm:px-4",
              activeGroup === group ? "bg-white text-orange-800 shadow-sm" : "text-gray-600 hover:text-gray-900",
            )}
          >
            {group.label}
          </button>
        ))}
      </nav>

      {activeGroup.sections.length > 1 && (
        <nav aria-label={activeGroup.label} className="mb-6 flex flex-wrap justify-center gap-2">
          {activeGroup.sections.map(section => (
            <button
              key={section.id}
              type="button"
              aria-pressed={mainTab === section.id}
              onClick={() => {
                if (section.id === 'practice' && mainTab === 'practice') setPracticeMode(null);
                setMainTab(section.id);
              }}
              className={cn(
                "min-h-11 rounded-full border px-3 text-sm font-semibold transition-colors sm:px-4",
                mainTab === section.id
                  ? "border-orange-300 bg-orange-50 text-orange-900"
                  : "border-gray-200 bg-white text-gray-700 hover:border-orange-300",
              )}
            >
              {section.label}
            </button>
          ))}
        </nav>
      )}

      {mainTab === 'word-match' && (
        <section className="mb-24">
          <CompoundWordsView playAudio={playAudio} />
        </section>
      )}

      {mainTab === 'measure-words' && (
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg">
              <Book size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Danh mục lượng từ</h2>
              <p className="text-sm text-gray-500">Các lượng từ thông dụng trong tiếng Trung thường gặp</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {MEASURE_WORDS.map((mw) => (
              <div 
                key={mw.id} 
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedWord({
                  ...mw,
                  type: 'measure_word',
                  topicTitle: 'Lượng từ',
                  topicId: 'measure_words',
                } as any)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="text-3xl font-black text-gray-900">{mw.character}</div>
                  <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-md text-xs font-bold">{mw.level}</span>
                </div>
                <div className="text-emerald-600 font-bold mb-1">{mw.pinyin}</div>
                <div className="text-gray-900 font-medium text-sm mb-3">{mw.meaning}</div>
                <div className="bg-gray-50 p-3 rounded-xl">
                  <div className="text-gray-900 font-medium">{mw.example}</div>
                  <div className="text-gray-500 text-xs mb-1">{mw.examplePinyin}</div>
                  <div className="text-gray-600 text-xs italic">{mw.exampleTranslation}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {mainTab === 'hsk' && (
        <section className="mb-16" aria-labelledby="hsk-heading">
          <div className="mb-6">
            <h2 id="hsk-heading" className="text-2xl font-black tracking-tight text-gray-900">Từ vựng HSK</h2>
            <p className="mt-1 text-sm text-gray-600">Từ vựng chọn lọc theo hệ 6 cấp.</p>
          </div>

          <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Trình độ HSK">
            {HSK_TOPICS.map(topic => (
              <button
                key={topic.id}
                type="button"
                aria-pressed={hskTopic.id === topic.id}
                onClick={() => setHskTopic(topic)}
                className={cn(
                  "min-h-11 rounded-full border px-4 text-sm font-semibold",
                  hskTopic.id === topic.id ? "border-orange-300 bg-orange-50 text-orange-900" : "border-gray-200 bg-white text-gray-700 hover:border-orange-300",
                )}
              >
                {topic.title}
              </button>
            ))}
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hskTopic.vocabulary.map(word => (
              <li key={word.character}>
                <button
                  type="button"
                  onClick={() => setSelectedWord({ ...word, type: 'vocab', topicId: hskTopic.id, topicTitle: hskTopic.title })}
                  className="h-full w-full rounded-2xl border border-gray-200 bg-white p-4 text-left hover:border-orange-300"
                >
                  <span lang="zh-Hans" className="block text-2xl font-bold text-gray-900">{word.character}</span>
                  <span className="block font-semibold text-orange-700">{word.pinyin}</span>
                  <span className="block text-sm text-gray-700">{word.meaning}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {mainTab === 'vocab' && (
      <section className="mb-16">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg">
              <Languages size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Danh mục từ mới</h2>
              <p className="text-sm text-gray-500">Học từ mới qua các chủ đề giao tiếp thực tế</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <BeginnerRoadmapView onNavigate={setMainTab} />
          
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-indigo-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Book size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">Giáo trình 301 Câu</h2>
                <p className="text-sm text-gray-500">Lộ trình học theo bài học chuẩn</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CHINESE_301_TOPICS.slice(0, 30).map((topic) => (
                <TopicCard 
                  key={topic.id} 
                  topic={topic} 
                  onClick={(t) => setSelectedTopic(t)} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {mainTab === 'pinyin' && (
        <section className="mb-24">
          <PinyinPronunciationView />
        </section>
      )}

      {mainTab === 'grammar' && (
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-indigo-500 text-white rounded-xl flex items-center justify-center shadow-lg">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Cấu trúc câu cơ bản</h2>
              <p className="text-sm text-gray-500">Nắm vững nền tảng ngữ pháp tiếng Trung qua các mẫu câu thông dụng</p>
            </div>
          </div>

          {/* Action row link to Grammar Practice */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-3xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="text-2xl">🔥</span>
              <div>
                <h3 className="font-bold text-indigo-950 text-base">Bạn muốn kiểm tra học lực ngữ pháp?</h3>
                <p className="text-xs text-indigo-700 font-medium">Bắt đầu trả lời 6 danh mục bài tập thực hành ngữ pháp chuyên biệt.</p>
              </div>
            </div>
            <button 
              onClick={() => {
                setMainTab('practice');
                setPracticeMode('grammar-practice');
              }}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-bold transition-all shadow-md shadow-indigo-100 whitespace-nowrap active:scale-95"
            >
              Luyện tập Ngữ pháp ngay →
            </button>
          </div>
          
          <div className="flex flex-col gap-4">
            {BASIC_GRAMMAR_STRUCTURES.map((item) => {
              const isExpanded = expandedGrammarId === item.id;
              
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "bg-white rounded-3xl border transition-all flex flex-col overflow-hidden",
                    isExpanded ? "border-indigo-200 shadow-md" : "border-gray-100 shadow-sm hover:border-indigo-100"
                  )}
                >
                  <button 
                    onClick={() => setExpandedGrammarId(isExpanded ? null : item.id)}
                    className="w-full text-left flex items-center justify-between p-6 focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                        isExpanded ? "bg-indigo-500 text-white" : "bg-indigo-50 text-indigo-500"
                      )}>
                        <FileText size={18} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-xs font-bold text-indigo-500 tracking-widest uppercase mt-1 inline-block">
                          {item.structure}
                        </span>
                      </div>
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={cn("text-gray-400 transition-transform duration-300", isExpanded && "rotate-180")} 
                    />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 mt-2 border-t border-gray-50 pt-6">
                          <p className="text-gray-600 leading-relaxed italic mb-6">
                            {item.explanation}
                          </p>
                          
                          <div className="space-y-3">
                            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Ví dụ minh họa:</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {item.examples.map((ex, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-gray-50/70 rounded-2xl border border-gray-100/50 hover:bg-indigo-50/30 hover:border-indigo-100/50 transition-colors group">
                                  <div>
                                    <div className="text-lg font-bold text-gray-900 mb-1">{ex.chinese}</div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs font-mono text-indigo-500">{ex.pinyin}</span>
                                      <span className="text-xs text-gray-500 font-medium line-clamp-1">{ex.translation}</span>
                                    </div>
                                  </div>
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      playAudio(ex.chinese);
                                    }}
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-white transition-all shadow-sm flex-shrink-0"
                                  >
                                    <Volume2 size={16} className={isPlaying === ex.chinese ? "animate-pulse text-indigo-600" : ""} />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {mainTab === 'radicals' && (
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg text-2xl">
              <Grid size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Thư viện Bộ Thủ</h2>
              <p className="text-sm text-gray-500">Gốc rễ của chữ Hán, chia theo nhóm ý nghĩa sinh động</p>
            </div>
          </div>
          
          <div className="space-y-8">
            {RADICAL_CATEGORIES.map((cat) => {
              const Icon = icons[cat.icon] || Grid;
              return (
                <div key={cat.id} className="bg-white p-6 md:p-8 rounded-[32px] border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gray-50 text-gray-600 rounded-xl">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{cat.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                    {cat.radicals.map((r, i) => (
                      <div 
                        key={i} 
                        onClick={() => setSelectedWord({
                          id: `radical-${r.character}`,
                          character: r.character,
                          pinyin: r.pinyin,
                          meaning: r.meaning,
                          mnemonic: r.mnemonic,
                          variants: r.variants,
                          customExamples: r.examples,
                          type: 'radical',
                          topicId: 'radicals',
                          topicTitle: `Bộ Thủ - ${cat.name}`
                        } as any)}
                        className="flex flex-col items-center group cursor-pointer"
                      >
                        <div className="mb-3">
                          <StrokeWriter 
                            character={r.character} 
                            size={60} 
                            className="bg-gray-50 rounded-2xl p-2 border border-transparent group-hover:border-green-300 group-hover:bg-green-50 transition-all"
                          />
                        </div>
                        <div className="text-[10px] font-mono text-gray-400 mb-1">{r.pinyin}</div>
                        <div className="text-xs font-bold text-gray-700 text-center line-clamp-2 min-h-[2.5rem]">{r.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {mainTab === 'sentences' && (
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg">
              <Type size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Thử thách Sắp xếp câu</h2>
              <p className="text-sm text-gray-500">Rèn luyện ngữ pháp và tư duy tiếng Trung qua các bài tập HSK</p>
            </div>
          </div>
          <SentenceOrderingView onBack={() => { setPracticeMode(null); setMainTab('practice'); }} />
        </section>
      )}

      {mainTab === 'practice' && (
        <section className="mb-16 flex flex-col items-center justify-center py-8">
          {!practiceMode ? (
            <>
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-[24px] flex items-center justify-center mb-6 shadow-inner">
                 <Gamepad2 size={32} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">Ôn tập tổng hợp</h2>
              <p className="text-sm text-gray-500 text-center max-w-lg mb-8">
                Ôn luyện toàn bộ từ vựng đã học qua hệ thống Flashcard kết hợp thuật toán lặp lại ngắt quãng (Spaced Repetition) và các bài Trắc nghiệm ngẫu nhiên.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                 <div 
                   onClick={() => setPracticeMode('flashcards')}
                   className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-[40px] border border-pink-100 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all hover:-translate-y-2">
                     <div className="absolute top-6 right-6 text-pink-200 group-hover:scale-110 transition-transform">
                       <Layers size={60} />
                     </div>
                     <h3 className="text-xl font-bold text-pink-900 mb-2 relative z-10">Thẻ ghi nhớ tổng hợp</h3>
                     <p className="text-sm text-pink-700 opacity-80 mb-6 relative z-10">Lượt qua ngẫu nhiên các từ vựng từ mọi chủ đề.</p>
                     <div className="inline-flex bg-white text-pink-600 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm relative z-10 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                         Luyện Flashcard ngay
                     </div>
                 </div>

                 <div 
                   onClick={() => setPracticeMode('quiz')}
                   className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-[40px] border border-indigo-100 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all hover:-translate-y-2">
                     <div className="absolute top-6 right-6 text-indigo-200 group-hover:scale-110 transition-transform">
                       <BrainCircuit size={60} />
                     </div>
                     <h3 className="text-xl font-bold text-indigo-900 mb-2 relative z-10">Thi trắc nghiệm</h3>
                     <p className="text-sm text-indigo-700 opacity-80 mb-6 relative z-10">Kiểm tra nhanh trí nhớ của bạn với 10 câu hỏi ngẫu nhiên từ toàn bộ kho từ vựng.</p>
                     <div className="inline-flex bg-white text-indigo-600 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm relative z-10 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                         Bắt đầu thi
                     </div>
                 </div>

                 <div 
                   onClick={() => setPracticeMode('grammar-practice')}
                   className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-[40px] border border-emerald-100 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all hover:-translate-y-2">
                     <div className="absolute top-6 right-6 text-emerald-200 group-hover:scale-110 transition-transform">
                       <FileText size={60} />
                     </div>
                     <h3 className="text-xl font-bold text-emerald-900 mb-2 relative z-10">Luyện tập ngữ pháp</h3>
                     <p className="text-sm text-emerald-700 opacity-80 mb-6 relative z-10">Rèn luyện cấu trúc câu qua danh mục 6 dạng bài tập trắc nghiệm chuyên sâu.</p>
                     <div className="inline-flex bg-white text-emerald-600 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm relative z-10 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                         Bắt đầu luyện
                     </div>
                 </div>
              </div>
            </>
          ) : (
            <div className="w-full max-w-4xl relative">
              <button 
                onClick={() => setPracticeMode(null)}
                className="absolute -top-12 left-0 px-4 py-2 rounded-full bg-white border border-gray-100 text-xs font-bold text-gray-600 hover:bg-gray-50 flex items-center gap-2 w-fit transition-colors shadow-sm"
              >
                <ChevronRight size={14} className="rotate-180" />
                Quay lại ôn tập
              </button>
              
              {practiceMode === 'flashcards' && (
                <div className="w-full flex flex-col items-center">
                   <div className="flex flex-wrap items-center justify-center bg-gray-100 rounded-full p-1 mb-8 w-fit shadow-inner mx-auto gap-1">
                      <button 
                         onClick={() => setFlashcardCategory('vocab')}
                         className={cn("px-6 py-2 rounded-full text-sm font-bold transition-colors", flashcardCategory === 'vocab' ? "bg-white text-emerald-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
                      >
                         Từ vựng
                      </button>
                      <button 
                         onClick={() => setFlashcardCategory('measure-words')}
                         className={cn("px-6 py-2 rounded-full text-sm font-bold transition-colors", flashcardCategory === 'measure-words' ? "bg-white text-emerald-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
                      >
                         Lượng từ
                      </button>
                      <button 
                         onClick={() => setFlashcardCategory('radicals')}
                         className={cn("px-6 py-2 rounded-full text-sm font-bold transition-colors", flashcardCategory === 'radicals' ? "bg-white text-emerald-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
                      >
                         214 Bộ thủ
                      </button>
                   </div>
                   <FlashcardsView vocabList={flashcardCategory === 'vocab' ? allGlobalVocab : flashcardCategory === 'measure-words' ? MEASURE_WORDS : allRadicalsVocab} playAudio={playAudio} />
                </div>
              )}
              {practiceMode === 'quiz' && (
                <QuizView vocabList={allGlobalVocab} />
              )}
              {practiceMode === 'grammar-practice' && (
                <GrammarPracticeView 
                  onBackToDashboard={() => setPracticeMode(null)} 
                  playAudio={playAudio} 
                  isPlaying={isPlaying} 
                />
              )}
            </div>
          )}
        </section>
      )}

        </motion.div>
      )}
    </AnimatePresence>
  );
}
