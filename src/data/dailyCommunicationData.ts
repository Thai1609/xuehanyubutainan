
export interface DailyDialogue {
  id: string;
  topic: string;
  description: string;
  icon: string;
  lines: {
    speaker: string;
    chinese: string;
    pinyin: string;
    translation: string;
  }[];
}

export const DAILY_COMMUNICATIONS: DailyDialogue[] = [
  {
    id: "greeting",
    topic: "Chào hỏi & Làm quen",
    description: "Các mẫu câu chào hỏi xã giao thường ngày",
    icon: "Smile",
    lines: [
      { speaker: "A", chinese: "你好！好久不见。", pinyin: "Nǐ hǎo! Hǎojiǔ bùjiàn.", translation: "Chào bạn! Lâu rồi không gặp." },
      { speaker: "B", chinese: "你好！最近怎么样？", pinyin: "Nǐ hǎo! Zuìjìn zěnmeyàng?", translation: "Chào bạn! Dạo này thế nào?" },
      { speaker: "A", chinese: "我很好，你呢？", pinyin: "Wǒ hěn hǎo, nǐ ne?", translation: "Tôi rất tốt, còn bạn?" },
      { speaker: "B", chinese: "我也挺好的。在这儿做什么呢？", pinyin: "Wǒ yě tǐng hǎo de. Zài zhèr zuò shénme ne?", translation: "Tôi cũng khá tốt. Đang làm gì ở đây vậy?" }
    ]
  },
  {
    id: "shopping",
    topic: "Mua sắm & Giá cả",
    description: "Hỏi giá và mặc cả khi mua đồ",
    icon: "ShoppingBag",
    lines: [
      { speaker: "Khách", chinese: "这个多少钱？", pinyin: "Zhège duōshǎo qián?", translation: "Cái này bao nhiêu tiền?" },
      { speaker: "Chủ", chinese: "五十块。", pinyin: "Wǔshí kuài.", translation: "50 tệ." },
      { speaker: "Khách", chinese: "太贵了，便宜点儿吧。", pinyin: "Tài guì le, piányi diǎnr ba.", translation: "Đắt quá, rẻ một chút đi." },
      { speaker: "Chủ", chinese: "那给你四十五块吧。", pinyin: "Nà gěi nǐ sìshíwǔ kuài ba.", translation: "Vậy lấy bạn 45 tệ nhé." }
    ]
  },
  {
    id: "eating",
    topic: "Ăn uống & Nhà hàng",
    description: "Gọi món và thanh toán tại quán ăn",
    icon: "Utensils",
    lines: [
      { speaker: "Khách", chinese: "服务员，我要点菜。", pinyin: "Fúwùyuán, wǒ yào diǎncài.", translation: "Phục vụ ơi, tôi muốn gọi món." },
      { speaker: "PV", chinese: "您想吃点儿什么？", pinyin: "Nín xiǎng chī diǎnr shénme?", translation: "Ngài muốn ăn gì ạ?" },
      { speaker: "Khách", chinese: "给我一个宫保鸡丁和碗米饭。", pinyin: "Gěi wǒ yī ge gōngbǎo jīdīng hé wǎn mǐfàn.", translation: "Cho tôi một gà xào Cung Bảo và bát cơm trắng." },
      { speaker: "Khách", chinese: "买单！", pinyin: "Mǎidān!", translation: "Thanh toán!" }
    ]
  },
  {
    id: "weather",
    topic: "Thời tiết & Thời gian",
    description: "Nói về thời tiết và hẹn gặp",
    icon: "Cloud",
    lines: [
      { speaker: "A", chinese: "今天天气真好！", pinyin: "Jīntiān tiānqì zhēn hǎo!", translation: "Hôm nay thời tiết thật đẹp!" },
      { speaker: "B", chinese: "是啊，不冷也不热。", pinyin: "Shì a, bù lěng yě bù rè.", translation: "Đúng vậy, không lạnh cũng không nóng." },
      { speaker: "A", chinese: "明天下午你有空吗？", pinyin: "Míngtiān xiàwǔ nǐ yǒu kòng ma?", translation: "Chiều mai bạn có rảnh không?" },
      { speaker: "B", chinese: "我有空，我们去公园吧。", pinyin: "Wǒ yǒu kòng, wǒmen qù gōngyuán ba.", translation: "Tôi rảnh, chúng ta đi công viên đi." }
    ]
  }
];
