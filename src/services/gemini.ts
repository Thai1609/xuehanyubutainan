import { GoogleGenAI } from '@google/genai';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export type TutorMode = 'chat' | 'etymology' | 'grammar';

const SYSTEM_PROMPTS: Record<TutorMode, string> = {
  chat: `Bạn là Gia sư Tiếng Trung ảo thông minh và thân thiện trong ứng dụng "Học Hán ngữ không quá khó" (学汉语不太难).
Nhiệm vụ: Trò chuyện và đối thoại cùng người học. 
Quy tắc trả lời:
1. Luôn phản hồi bằng tiếng Trung kèm phiên âm Pinyin chuẩn và bản dịch tiếng Việt bên dưới.
2. Dùng từ ngữ phù hợp trình độ từ cơ bản HSK 1 đến nâng cao.
3. Luôn khích lệ người học tự tin nói tiếng Trung.`,

  etymology: `Bạn là Chuyên gia Chiết tự và Nguồn gốc Chữ Hán (汉字构造与起源专家).
Nhiệm vụ: Phân tích chữ Hán mà người học yêu cầu.
Quy tắc:
1. Chỉ rõ bộ thủ chính (Radical) và ý nghĩa của nó.
2. Giải thích cấu tạo tượng hình, hội ý hoặc hình thanh của chữ.
3. Kể một câu chuyện ngắn hoặc mẹo ghi nhớ thú vị giúp người học nhớ ngay chữ này.
4. Liệt kê 2-3 từ ghép thông dụng nhất có chứa chữ này (kèm Pinyin và dịch nghĩa tiếng Việt).`,

  grammar: `Bạn là Giảng viên Ngữ pháp Tiếng Trung HSK.
Nhiệm vụ: Sửa lỗi câu và giải thích ngữ pháp cho người học.
Quy tắc:
1. Nhận xét câu của học viên: Chỉ rõ điểm chưa tự nhiên hoặc sai ngữ pháp (nếu có).
2. Đưa ra câu viết lại chuẩn và tự nhiên của người bản xứ (kèm Pinyin và nghĩa tiếng Việt).
3. Giải thích ngắn gọn cấu trúc ngữ pháp liên quan.`
};

export async function sendTutorMessage(
  apiKey: string,
  mode: TutorMode,
  userMessage: string
): Promise<string> {
  // Nếu có API key hợp lệ, gọi trực tiếp Gemini qua @google/genai
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const ai = new GoogleGenAI({ apiKey: apiKey.trim() });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMessage,
        config: {
          systemInstruction: SYSTEM_PROMPTS[mode],
          temperature: 0.7
        }
      });

      if (response.text) {
        return response.text;
      }
    } catch (err: any) {
      console.warn("Lỗi gọi Gemini API:", err);
      return `⚠️ Lỗi kết nối Gemini API: ${err.message || 'Không thể phản hồi'}. Vui lòng kiểm tra lại GEMINI_API_KEY.`;
    }
  }

  // Chế độ mô phỏng thông minh khi chưa nhập API Key
  return getDemoResponse(mode, userMessage);
}

function getDemoResponse(mode: TutorMode, input: string): string {
  if (mode === 'etymology') {
    return `### 🔍 Phân tích chiết tự chữ: **${input}**
- **Bộ thủ:** Biểu thị trường nghĩa gốc của chữ.
- **Mẹo nhớ:** Chữ này được cấu tạo từ các nét tượng hình đời sống cổ đại.
- **Từ ghép thông dụng:** 学习 (xuéxí - học tập), 汉字 (hànzì - chữ Hán).

*(💡 Mẹo: Nhập GEMINI_API_KEY ở góc trên để mở khóa tính năng AI phân tích chuyên sâu theo thời gian thực!)*`;
  }

  if (mode === 'grammar') {
    return `### 📝 Nhận xét ngữ pháp:
- Câu của bạn: "${input}"
- Đánh giá: Cấu trúc cơ bản tốt! Trong tiếng Trung, lưu ý trật tự từ: **Chủ ngữ + Thời gian + Địa điểm + Động từ + Tân ngữ**.

*(💡 Mẹo: Nhập GEMINI_API_KEY để được Gia sư AI Gemini sửa từng chi tiết nhé!)*`;
  }

  return `你好！很高兴和你聊天。(Nǐ hǎo! Hěn gāoxìng hé nǐ liáotiān - Chào bạn! Rất vui được trò chuyện với bạn).

Học tiếng Hán không quá khó đâu (学汉语不太难). Bạn muốn hỏi về từ vựng, ngữ pháp hay luyện phản xạ nào hôm nay?

*(💡 Mẹo: Nhập GEMINI_API_KEY để trò chuyện tự do không giới hạn với AI Gemini 2.5 Flash!)*`;
}
