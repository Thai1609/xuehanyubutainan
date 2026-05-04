import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY is missing. Please set it in your .env file.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export async function chatWithTutor(message: string, history: { role: "user" | "model"; parts: { text: string }[] }[] = [], level: string = "HSK 2") {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: "user", parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: `Bạn là một giáo viên dạy tiếng Trung nhiệt tình, chuyên về giáo trình "301 Câu Đàm Thoại Tiếng Hoa". 
        Nhiệm vụ của bạn là:
        1. Giúp người dùng luyện tập giao tiếp tiếng Trung theo các chủ đề ở trình độ ${level}. 
        2. Nếu trình độ là "301 Đàm thoại", hãy tập trung vào các mẫu câu giao tiếp thực tế như: chào hỏi, giới thiệu, mua sắm, hỏi đường, đi bệnh viện, bưu điện... từ sách 301.
        3. Sửa lỗi ngữ pháp và pinyin nếu người dùng viết sai.
        4. Giải thích ý nghĩa của từ vựng nếu được hỏi.
        5. Luôn trả lời bằng tiếng Việt xen kẽ tiếng Trung để người học dễ hiểu.
        6. Điều chỉnh độ khó của câu phù hợp với trình độ ${level}.
        7. Luôn kèm theo Pinyin và dịch nghĩa cho các câu tiếng Trung bạn viết.`
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
