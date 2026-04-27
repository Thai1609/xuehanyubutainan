import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function askAI(prompt: string, context?: string) {
  try {
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
