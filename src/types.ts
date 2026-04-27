export interface Vocabulary {
  id: string;
  word: string;
  pinyin: string;
  meaning: string;
  example: string;
  examplePinyin: string;
  exampleMeaning: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}
