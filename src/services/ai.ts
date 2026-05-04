import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";

let genaiInstance: GoogleGenAI | null = null;
let openaiInstance: OpenAI | null = null;

function getAIClient() {
  const openAiKey = process.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY;
  if (openAiKey) {
    if (!openaiInstance) {
      openaiInstance = new OpenAI({ apiKey: openAiKey, dangerouslyAllowBrowser: true });
    }
    return { type: 'openai' as const, client: openaiInstance };
  }

  const geminiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!geminiKey) {
    throw new Error("Vui lòng cung cấp khóa API (Gemini hoặc OpenAI) trong biến môi trường.");
  }
  if (!genaiInstance) {
    genaiInstance = new GoogleGenAI({ apiKey: geminiKey });
  }
  return { type: 'gemini' as const, client: genaiInstance };
}

const chineseTutorSystemInstruction = `
Bạn là một giáo viên dạy tiếng Trung nhiệt tình, chuyên về giáo trình "301 Câu Đàm Thoại Tiếng Hoa" và HSK.
Nhiệm vụ của bạn là:
1. Giúp người dùng luyện tập giao tiếp tiếng Trung theo các chủ đề ở các trình độ khác nhau.
2. Cung cấp Pinyin và dịch nghĩa cho mọi câu tiếng Trung bạn viết: 你好! [Nǐ hǎo!] - Chào bạn! 😊
3. Luôn trả lời bằng tiếng Việt xen kẽ tiếng Trung để người học dễ hiểu.
4. Sửa lỗi ngữ pháp và pinyin nếu người dùng viết sai một cách nhẹ nhàng.
5. Sử dụng emojis để cuộc trò chuyện thêm gần gũi.
`;

export async function chatWithTutorStream(message: string, history: { role: string; parts: { text: string }[] }[] = [], level: string = "HSK 2", onChunk?: (text: string) => void) {
  try {
    const ai = getAIClient();
    
    if (ai.type === 'openai') {
      const messages: any[] = [
        { role: "system", content: `${chineseTutorSystemInstruction}\nTrình độ hiện tại: ${level}.` }
      ];
      for (const h of history) {
        messages.push({ role: (h.role === 'user' ? 'user' : 'assistant'), content: h.parts.map(p => p.text).join('') });
      }
      messages.push({ role: "user", content: message });

      const stream = await ai.client.chat.completions.create({
        model: "gpt-4o-mini",
        messages,
        stream: true,
      });

      let fullText = "";
      for await (const chunk of stream) {
        fullText += chunk.choices[0]?.delta?.content || "";
        if (onChunk) onChunk(fullText);
      }
      return fullText;
    } else {
      const stream = await ai.client.models.generateContentStream({
        model: "gemini-3-flash-preview",
        contents: [
          ...history,
          { role: "user", parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: `${chineseTutorSystemInstruction}\nTrình độ hiện tại: ${level}.`
        }
      });

      let fullText = "";
      for await (const chunk of stream) {
        fullText += chunk.text;
        if (onChunk) onChunk(fullText);
      }
      return fullText;
    }
  } catch (error) {
    console.error("AI Error:", error);
    return "Xin lỗi, tôi đang gặp chút trục trặc. Bạn hãy nhắc lại sau nhé!";
  }
}
export async function askAIStream(prompt: string, context?: string, onChunk?: (chunk: string) => void) {
  try {
    const ai = getAIClient();
    const fullPrompt = context 
      ? `Với ngữ cảnh về từ vựng tiếng Trung sau: ${context}\n\nHãy trả lời câu hỏi: ${prompt}`
      : prompt;

    if (ai.type === 'openai') {
      const stream = await ai.client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Bạn là một giáo viên tiếng Trung giàu kinh nghiệm dành cho người Việt Nam. Hãy giải thích các từ vựng, ngữ pháp một cách dễ hiểu, cung cấp pinyin và ví dụ minh họa." },
          { role: "user", content: fullPrompt }
        ],
        stream: true,
      });

      let fullText = "";
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || "";
        fullText += text;
        if (onChunk) onChunk(fullText);
      }
      return fullText;
    } else {
      const stream = await ai.client.models.generateContentStream({
        model: "gemini-3-flash-preview",
        contents: fullPrompt,
        config: {
          systemInstruction: "Bạn là một giáo viên tiếng Trung giàu kinh nghiệm dành cho người Việt Nam. Hãy giải thích các từ vựng, ngữ pháp một cách dễ hiểu, cung cấp pinyin và ví dụ minh họa bằng tiếng Trung và tiếng Việt.",
        },
      });

      let fullText = "";
      for await (const chunk of stream) {
        fullText += chunk.text;
        if (onChunk) onChunk(fullText);
      }
      return fullText;
    }
  } catch (error) {
    console.error("AI Streaming Error:", error);
    return "Có lỗi xảy ra khi kết nối với trí tuệ nhân tạo. Bạn vui lòng kiểm tra lại API Key.";
  }
}

