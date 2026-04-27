import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DictionaryEntry } from "../data/dictionaryData";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to remove pinyin tones to allow searching without typing tones
export function removeTones(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/v/g, "ü");
}

export function searchDictionary(query: string, data: DictionaryEntry[]): DictionaryEntry[] {
  if (!query.trim()) return [];
  const lowerQuery = query.trim().toLowerCase();
  const queryNoTones = removeTones(lowerQuery).replace(/\s+/g, "");

  const exactMatches: DictionaryEntry[] = [];
  const startMatches: DictionaryEntry[] = [];
  const otherMatches: DictionaryEntry[] = [];

  data.forEach(entry => {
    const word = entry.word;
    const pinyinLower = entry.pinyin.toLowerCase();
    const pinyinNoTones = removeTones(pinyinLower).replace(/\s+/g, "");
    const meaningLower = entry.meaning.toLowerCase();
    
    // exact matches
    if (word === lowerQuery || pinyinNoTones === queryNoTones || pinyinLower === lowerQuery) {
      exactMatches.push(entry);
    } 
    else if (word.startsWith(lowerQuery) || pinyinNoTones.startsWith(queryNoTones) || pinyinLower.startsWith(lowerQuery)) {
      startMatches.push(entry);
    } 
    else if (
      word.includes(lowerQuery) || 
      (entry.traditional && entry.traditional.includes(lowerQuery)) ||
      pinyinNoTones.includes(queryNoTones) ||
      meaningLower.includes(lowerQuery)
    ) {
      otherMatches.push(entry);
    }
  });

  // sort to prioritize single words (shorter words) within each category
  exactMatches.sort((a, b) => a.word.length - b.word.length);
  startMatches.sort((a, b) => a.word.length - b.word.length);
  otherMatches.sort((a, b) => a.word.length - b.word.length);

  // deduplicate in case we pushed same entry multiple times inadvertently
  const results = [...exactMatches, ...startMatches, ...otherMatches];
  return Array.from(new Set(results));
}
