export interface GrammarQuestion {
  id: string;
  grammarId: string;
  category: string;
  question: string;         // E.g., "我__你。" or "他__高。"
  options: string[];        // E.g., ["很", "是", "爱", "的"]
  answer: string;           // E.g., "爱"
  pinyin: string;           // Pinyin of the COMPLETE correct sentence
  translation: string;      // Vietnamese translation of the COMPLETE correct sentence
  explanation: string;      // Detailed description of the grammar structure applied
}

export const GRAMMAR_PRACTICE_QUESTIONS: GrammarQuestion[] = [
  {
    id: "gq-1",
    grammarId: "basic-1",
    category: "Chủ ngữ + Động từ + Tân ngữ",
    question: "我__你。",
    options: ["很", "是", "爱", "的"],
    answer: "爱",
    pinyin: "Wǒ ài nǐ.",
    translation: "Tôi yêu bạn.",
    explanation: "Cấu trúc cơ bản S + V + O (Chủ ngữ + Động từ + Tân ngữ). '爱' (yêu) là động từ đóng vai trò vị ngữ nối chủ ngữ '我' (tôi) và tân ngữ '你' (bạn)."
  },
  {
    id: "gq-2",
    grammarId: "basic-2",
    category: "Cấu trúc với Tính từ",
    question: "他__高。",
    options: ["是", "很", "在", "的"],
    answer: "很",
    pinyin: "Tā hěn gāo.",
    translation: "Anh ấy rất cao.",
    explanation: "Cấu trúc S + 很 + Adj. Trong tiếng Trung không dùng động từ '是' trước tính từ để miêu tả trạng thái/tính chất, thay vào đó ta dùng phó từ chỉ mức độ như '很' (rất)."
  },
  {
    id: "gq-3",
    grammarId: "basic-2",
    category: "Cấu trúc với Tính từ",
    question: "今天__冷。",
    options: ["是", "在", "很", "的"],
    answer: "很",
    pinyin: "Jīntiān hěn lěng.",
    translation: "Hôm nay rất lạnh.",
    explanation: "Cấu trúc S + 很 + Adj dùng để nối chủ ngữ chỉ thời tiết '今天' (hôm nay) với tính từ '冷' (lạnh)."
  },
  {
    id: "gq-4",
    grammarId: "basic-3",
    category: "Trạng ngữ chỉ Thời gian",
    question: "我明天__北京。",
    options: ["在", "去", "是", "的"],
    answer: "去",
    pinyin: "Wǒ míngtiān qù Běijīng.",
    translation: "Mai tôi đi Bắc Kinh.",
    explanation: "Trạng ngữ chỉ thời gian '明天' (ngày mai) đứng trước động từ hành động '去' (đi). Có thể đứng trước hoặc sau chủ ngữ '我'."
  },
  {
    id: "gq-5",
    grammarId: "basic-4",
    category: "Trạng ngữ chỉ Địa điểm",
    question: "我在家__饭。",
    options: ["是", "喝", "吃", "去"],
    answer: "吃",
    pinyin: "Wǒ zài jiā chīfàn.",
    translation: "Tôi ăn cơm ở nhà.",
    explanation: "Giới từ kết cấu chỉ địa điểm '在家' (ở nhà) đứng trước động từ chính '吃' (ăn)."
  },
  {
    id: "gq-6",
    grammarId: "basic-5",
    category: "Phủ định '不' & '没'",
    question: "我不__咖啡店。",
    options: ["去", "没", "吃", "看"],
    answer: "去",
    pinyin: "Wǒ bù qù kāfēidiàn.",
    translation: "Tôi không đi quán cà phê.",
    explanation: "'不' (không) dùng để phủ định hành động ở hiện tại hoặc tương lai, đứng trước động từ chỉ hành vi '去' (đi)."
  },
  {
    id: "gq-7",
    grammarId: "basic-5",
    category: "Phủ định '不' & '没'",
    question: "我__去学校。",
    options: ["不", "没", "的", "很"],
    answer: "没",
    pinyin: "Wǒ méi qù xuéxiào.",
    translation: "Tôi đã không đi học.",
    explanation: "Để phủ định hành động đã xảy ra trong quá khứ (không đi học), ta dùng giới từ phủ định '没' hoặc '没有' đứng trước động từ '去'."
  },
  {
    id: "gq-8",
    grammarId: "basic-6",
    category: "Trợ từ hỏi '吗'",
    question: "你是老师__？",
    options: ["了", "的", "吗", "不"],
    answer: "吗",
    pinyin: "Nǐ shì lǎoshī ma?",
    translation: "Bạn là giáo viên phải không?",
    explanation: "Thêm trợ từ nghi vấn '吗' vào cuối một câu trần thuật để biến câu đó thành câu nghi vấn dạng Có/Không."
  },
  {
    id: "gq-9",
    grammarId: "basic-7",
    category: "So sánh với '比'",
    question: "哥哥__我高。",
    options: ["是", "比", "很", "在"],
    answer: "比",
    pinyin: "Gēge bǐ wǒ gāo.",
    translation: "Anh trai cao hơn tôi.",
    explanation: "Cấu trúc so sánh hơn: A + 比 + B + Tính từ. '比' được dùng để so sánh chiều cao giữa '哥哥' (anh trai) và '我' (tôi)."
  },
  {
    id: "gq-10",
    grammarId: "basic-8",
    category: "Câu với chữ '是'",
    question: "我__越南人。",
    options: ["很", "是", "在", "有"],
    answer: "是",
    pinyin: "Wǒ shì Yuènánrén.",
    translation: "Tôi là người Việt Nam.",
    explanation: "Động từ liên kết khẳng định '是' (là) dùng để làm rõ quốc tịch hoặc thông tin danh tính của chủ ngữ."
  },
  {
    id: "gq-11",
    grammarId: "basic-9",
    category: "Trợ từ định ngữ '的'",
    question: "我__书",
    options: ["的", "是", "很", "在"],
    answer: "的",
    pinyin: "Wǒ de shū",
    translation: "Sách của tôi.",
    explanation: "Sử dụng trợ từ định vị '的' (de) để thể hiện sự sở hữu: Người sở hữu + 的 + Vật sở hữu."
  },
  {
    id: "gq-12",
    grammarId: "basic-10",
    category: "Câu hỏi chính phản",
    question: "你去__去？",
    options: ["吗", "不", "没", "是"],
    answer: "不",
    pinyin: "Nǐ qù bu qù?",
    translation: "Bạn có đi không?",
    explanation: "Câu hỏi chính phản bằng cách lặp lại Động từ + 不 + Động từ (去不去) thay cho việc dùng trợ từ '吗' ở cuối câu."
  },
  {
    id: "gq-13",
    grammarId: "basic-10",
    category: "Câu hỏi chính phản",
    question: "这个好__好？",
    options: ["没", "的", "吗", "不"],
    answer: "不",
    pinyin: "Zhège hǎo bu hǎo?",
    translation: "Cái này tốt không?",
    explanation: "Mẫu câu hỏi chính phản áp dụng với tính từ: Tính từ + 不 + Tính từ (好不好) nhằm đưa ra lựa chọn Có hay Không."
  },
  {
    id: "gq-14",
    grammarId: "basic-11",
    category: "Cấu trúc '要/快...了'",
    question: "快下雨__。",
    options: ["吗", "的", "了", "在"],
    answer: "进",
    pinyin: "Kuài xiàyǔ le.",
    translation: "Sắp mưa rồi.",
    explanation: "Cấu trúc '快...了' chỉ sự việc sẽ xảy ra sớm trong tương lai gần. Ở đây '了' đứng cuối câu biểu thị trạng thái sắp biến đổi."
  },
  {
    id: "gq-15",
    grammarId: "basic-11",
    category: "Cấu trúc '要/快...了'",
    question: "我__回国了。",
    options: ["要", "在", "的", "是"],
    answer: "要",
    pinyin: "Wǒ yào huíguó le.",
    translation: "Tôi sắp về nước rồi.",
    explanation: "Cấu trúc '要...了' (với động từ '回国' ở giữa) biểu thị một hành động sắp xảy ra."
  },
  {
    id: "gq-16",
    grammarId: "basic-12",
    category: "Sử dụng Lượng từ",
    question: "一__书",
    options: ["个", "本", "张", "只"],
    answer: "本",
    pinyin: "Yī běn shū",
    translation: "Một quyển sách.",
    explanation: "Giữa số từ (一) và danh từ (书) bắt buộc có lượng từ. Sách dùng lượng từ đặc trưng là '本' (cuốn, quyển)."
  },
  {
    id: "gq-17",
    grammarId: "basic-12",
    category: "Sử dụng Lượng từ",
    question: "一__桌子",
    options: ["张", "个", "本", "辆"],
    answer: "张",
    pinyin: "Yī zhāng zhuōzi",
    translation: "Một chiếc bàn.",
    explanation: "'张' (zhāng) là lượng từ chuyên dùng cho các vật thể có mặt phẳng hoặc mỏng như bàn, giấy, bản đồ, giường."
  },
  {
    id: "gq-18",
    grammarId: "basic-13",
    category: "Động từ năng nguyện",
    question: "我__说汉语。",
    options: ["能", "会", "可以", "好"],
    answer: "会",
    pinyin: "Wǒ huì shuō Hànyǔ.",
    translation: "Tôi biết nói tiếng Trung.",
    explanation: "'会' (huì) chỉ năng lực hoặc kỹ năng đạt được thông qua nỗ lực, tích lũy kiến thức học tập."
  },
  {
    id: "gq-19",
    grammarId: "basic-13",
    category: "Động từ năng nguyện",
    question: "你__走。",
    options: ["可以", "会", "能", "很"],
    answer: "可以",
    pinyin: "Nǐ kěyǐ zǒu.",
    translation: "Bạn có thể đi.",
    explanation: "'可以' (kěyǐ) biểu thị sự đồng ý, cho phép của người nói đối với một hành vi."
  },
  {
    id: "gq-20",
    grammarId: "basic-14",
    category: "Từ để hỏi nghi vấn",
    question: "你喜欢吃__？",
    options: ["谁", "什么", "哪儿", "怎么"],
    answer: "什么",
    pinyin: "Nǐ xǐhuan chī shénme?",
    translation: "Bạn thích ăn cái gì?",
    explanation: "Từ nghi vấn '什么' (cái gì) đứng ngay sau động từ '吃' để làm rõ đối tượng của câu hỏi."
  },
  {
    id: "gq-21",
    grammarId: "basic-15",
    category: "Vì... Nên...",
    question: "因为下雨，__我没去。",
    options: ["虽然", "所以", "但是", "可是"],
    answer: "所以",
    pinyin: "Yīnwèi xiàyǔ, suǒyǐ wǒ méi qù.",
    translation: "Vì trời mưa, nên tôi không đi.",
    explanation: "Liên từ cặp đôi chỉ quan hệ nhân quả: 因为 (Bởi vì) ... 所以 (Cho nên)."
  },
  {
    id: "gq-22",
    grammarId: "basic-16",
    category: "Tuy... Nhưng...",
    question: "虽然很累，__很高兴。",
    options: ["所以", "因为", "但是", "还"],
    answer: "但是",
    pinyin: "Suīrán hěn lèi, dànshì hěn gāoxìng.",
    translation: "Mặc dù rất mệt, nhưng rất vui.",
    explanation: "Liên từ cặp đôi chỉ quan hệ chuyển ngoặt biểu thị sự nhượng bộ: 虽然 (Mặc dù) ... 但是 (Nhưng)."
  },
  {
    id: "gq-23",
    grammarId: "basic-17",
    category: "Cho ai / Cho hành nhận",
    question: "我__你打电话。",
    options: ["给", "在", "对", "让"],
    answer: "给",
    pinyin: "Wǒ gěi nǐ dǎ diànhuà.",
    translation: "Tôi gọi điện thoại cho bạn.",
    explanation: "'给' đóng vai trò giới từ hướng hành động gọi điện '打电话' tới đối tượng tiếp nhận là '你' (bạn)."
  },
  {
    id: "gq-24",
    grammarId: "basic-18",
    category: "Câu kiêm ngữ",
    question: "他__我明天来。",
    options: ["让", "给", "在", "比"],
    answer: "让",
    pinyin: "Tā ràng wǒ míngtiān lái.",
    translation: "Anh ấy bảo tôi ngày mai đến.",
    explanation: "Động từ chỉ sai khiến '让' (yêu cầu/bảo) kiêm ngữ chính là chủ ngữ thực hiện hành động tiếp theo trong câu."
  },
  {
    id: "gq-25",
    grammarId: "basic-20",
    category: "Càng ngày càng...",
    question: "天气越来越__。",
    options: ["冷", "了", "去", "吃"],
    answer: "冷",
    pinyin: "Tiānqì yuè lái yuè lěng.",
    translation: "Thời tiết càng ngày càng lạnh.",
    explanation: "Cấu trúc '越来越 + Tính từ' biểu thị sự tăng tiến trình độ của tính từ '冷' theo dòng chảy thời gian."
  },
  {
    id: "gq-26",
    grammarId: "basic-21",
    category: "Vừa... Vừa...",
    question: "我一边吃饭一边__电视。",
    options: ["听", "吃", "说", "看"],
    answer: "看",
    pinyin: "Wǒ yìbiān chīfàn yìbiān kàn diànshì.",
    translation: "Tôi vừa ăn cơm vừa xem tivi.",
    explanation: "Giới từ chỉ hành động song song '一边... 一边...' nối hai hành động '吃饭' (ăn cơm) và '看电视' (xem tivi)."
  }
];
