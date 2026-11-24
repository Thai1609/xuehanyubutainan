import { GoogleGenAI, Type } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing. Please set it in your environment.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export const chineseTutorSystemInstruction = `
Bạn là một giáo viên dạy tiếng Trung nhiệt tình, chuyên về giáo trình "301 Câu Đàm Thoại Tiếng Hoa" và HSK.
Nhiệm vụ của bạn là:
1. Giúp người dùng luyện tập giao tiếp tiếng Trung theo các chủ đề ở các trình độ khác nhau.
2. Cung cấp Pinyin và dịch nghĩa cho mọi câu tiếng Trung bạn viết: 你好! [Nǐ hǎo!] - Chào bạn! 😊
3. Luôn trả lời bằng tiếng Việt xen kẽ tiếng Trung để người học dễ hiểu.
4. Sửa lỗi ngữ pháp và pinyin nếu người dùng viết sai một cách nhẹ nhàng.
5. Sử dụng emojis để cuộc trò chuyện thêm gần gũi.
`;

export async function askAI(prompt: string, context?: string) {
  try {
    const ai = getAI();
    const fullPrompt = context 
      ? `Với ngữ cảnh về từ vựng tiếng Trung sau: ${context}\n\nHãy trả lời câu hỏi: ${prompt}`
      : prompt;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: fullPrompt,
      config: {
        systemInstruction: "Bạn là một giáo viên tiếng Trung giàu kinh nghiệm dành cho người Việt Nam. Hãy giải thích các từ vựng, ngữ pháp một cách dễ hiểu, cung cấp pinyin và ví dụ minh họa bằng tiếng Trung và tiếng Việt.",
      },
    });

    return response.text || "Xin lỗi, tôi không thể xử lý yêu cầu lúc này.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Có lỗi xảy ra khi kết nối với trí tuệ nhân tạo.";
  }
}

export async function chatWithTutor(message: string, history: { role: string; parts: { text: string }[] }[] = [], level: string = "HSK 2") {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: "user", parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: `${chineseTutorSystemInstruction}\nTrình độ hiện tại: ${level}.`
      }
    });

    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "Xin lỗi, tôi đang gặp chút trục trặc. Bạn hãy thử lại sau nhé!";
  }
}

export async function analyzePronunciation(pinyinInput: string) {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Phân tích và hướng dẫn phát âm cho pinyin sau: ${pinyinInput}. 
      Hãy chỉ ra cách đặt lưỡi, khẩu hình miệng và lưu ý về thanh điệu cho người Việt dễ hiểu.`,
    });
    return response.text;
  } catch (error) {
    return "Không thể phân tích phát âm lúc này.";
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
    const ai = getAI();
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
