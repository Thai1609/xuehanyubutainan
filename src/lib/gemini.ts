import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || "" 
});

export const chineseTutorSystemInstruction = `
You are a friendly and expert Chinese language tutor named Lingua.
Your goal is to help the user learn Mandarin Chinese (Simplified).
You should:
1. Speak in a mix of Vietnamese and Chinese (with Pinyin).
2. For every Chinese sentence, provided the characters, Pinyin in brackets [], and Vietnamese translation.
3. Encourage the user to practice speaking and writing.
4. If the user asks for a lesson, provide a small, manageable one.
5. If the user makes a mistake, correct them gently.
6. Use emojis to make the conversation engaging.
7. Be patient and supportive.

Example format:
你好! [Nǐ hǎo!] - Chào bạn! 😊
`;

export async function chatWithTutor(message: string, history: { role: string, parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview", 
      contents: [
        ...history,
        { role: "user", parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: chineseTutorSystemInstruction,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Xin lỗi, tôi gặp chút trục trặc. Bạn thử lại nhé! 😅";
  }
}

export interface Flashcard {
  character: string;
  pinyin: string;
  translation: string;
  example: string;
}

export async function generateFlashcards(topic: string): Promise<Flashcard[]> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Tạo 5 flashcards tiếng Trung về chủ đề: ${topic}. Trả về dưới dạng JSON array.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              character: { type: Type.STRING },
              pinyin: { type: Type.STRING },
              translation: { type: Type.STRING },
              example: { type: Type.STRING }
            },
            required: ["character", "pinyin", "translation", "example"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text);
  } catch (error) {
    console.error("Flashcard Generation Error:", error);
    return [];
  }
}
