
export interface GrammarStructure {
  id: string;
  title: string;
  structure: string;
  explanation: string;
  examples: {
    chinese: string;
    pinyin: string;
    translation: string;
  }[];
}

export const BASIC_GRAMMAR_STRUCTURES: GrammarStructure[] = [
  {
    id: "basic-1",
    title: "Cấu trúc Chủ ngữ + Động từ + Tân ngữ",
    structure: "S + V + O",
    explanation: "Đây là cấu trúc cơ bản nhất trong tiếng Trung, tương tự như tiếng Việt.",
    examples: [
      { chinese: "我爱你。", pinyin: "Wǒ ài nǐ.", translation: "Tôi yêu bạn." },
      { chinese: "他喝水。", pinyin: "Tā hē shuǐ.", translation: "Anh ấy uống nước." },
      { chinese: "我们学汉语。", pinyin: "Wǒmen xué Hànyǔ.", translation: "Chúng tôi học tiếng Trung." }
    ]
  },
  {
    id: "basic-2",
    title: "Cấu trúc với Tính từ (S + 很 + Adj)",
    structure: "S + 很 + Adj",
    explanation: "Trong tiếng Trung, khi dùng tính từ làm vị ngữ, thường phải thêm phó từ chỉ mức độ như '很' (rất) ở phía trước. Không dùng '是' (là) trước tính từ.",
    examples: [
      { chinese: "他很高。", pinyin: "Tā hěn gāo.", translation: "Anh ấy rất cao." },
      { chinese: "今天很冷。", pinyin: "Jīntiān hěn lěng.", translation: "Hôm nay rất lạnh." },
      { chinese: "汉语很难。", pinyin: "Hànyǔ hěn nán.", translation: "Tiếng Trung rất khó." }
    ]
  },
  {
    id: "basic-3",
    title: "Vị trí của trạng ngữ chỉ Thời gian",
    structure: "S + Time + V + O hoặc Time + S + V + O",
    explanation: "Trạng ngữ chỉ thời gian có thể đứng trước hoặc sau chủ ngữ, nhưng phải đứng trước động từ.",
    examples: [
      { chinese: "我明天去北京。", pinyin: "Wǒ míngtiān qù Běijīng.", translation: "Mai tôi đi Bắc Kinh." },
      { chinese: "八点我们上课。", pinyin: "Bā diǎn wǒmen shàngkè.", translation: "8 giờ chúng tôi lên lớp." }
    ]
  },
  {
    id: "basic-4",
    title: "Vị trí của trạng ngữ chỉ Địa điểm",
    structure: "S + 在 + Place + V + O",
    explanation: "Trong tiếng Trung, địa điểm nơi hành động xảy ra phải được đặt TRƯỚC động từ.",
    examples: [
      { chinese: "我在家吃饭。", pinyin: "Wǒ zài jiā chīfàn.", translation: "Tôi ăn cơm ở nhà." },
      { chinese: "他在学校学习。", pinyin: "Tā zài xuéxiào xuéxí.", translation: "Anh ấy học ở trường." }
    ]
  },
  {
    id: "basic-5",
    title: "Câu phủ định với '不' and '没'",
    structure: "S + 不/没 + V + O",
    explanation: "'不' dùng để phủ định cho hiện tại, tương lai hoặc thói quen. '没' (hoặc '没有') dùng để phủ định cho hành động đã xảy ra trong quá khứ.",
    examples: [
      { chinese: "我不去咖啡店。", pinyin: "Wǒ bù qù kāfēidiàn.", translation: "Tôi không đi quán cà phê (thói quen/tương lai)." },
      { chinese: "我没去学校。", pinyin: "Wǒ méi qù xuéxiào.", translation: "Tôi đã không đi học (quá khứ)." }
    ]
  },
  {
    id: "basic-6",
    title: "Câu hỏi với trợ từ '吗'",
    structure: "Câu trần thuật + 吗？",
    explanation: "Để biến một câu trần thuật thành câu hỏi Có/Không, chỉ cần thêm '吗' vào cuối câu.",
    examples: [
      { chinese: "你好吗？", pinyin: "Nǐ hǎo ma?", translation: "Bạn khỏe không?" },
      { chinese: "你是老师吗？", pinyin: "Nǐ shì lǎoshī ma?", translation: "Bạn là giáo viên phải không?" }
    ]
  },
  {
    id: "basic-7",
    title: "Cấu trúc so sánh với '比'",
    structure: "A + 比 + B + Adj",
    explanation: "Dùng '比' để so sánh A hơn B về một tính chất nào đó.",
    examples: [
      { chinese: "哥哥比我高。", pinyin: "Gēge bǐ wǒ gāo.", translation: "Anh trai cao hơn tôi." },
      { chinese: "今天比昨天冷。", pinyin: "Jīntiān bǐ zuótiān lěng.", translation: "Hôm nay lạnh hơn hôm qua." }
    ]
  },
  {
    id: "basic-8",
    title: "Câu có chữ '是' (Thì, là)",
    structure: "S + 是 + O",
    explanation: "Dùng để khẳng định bản chất, danh tính. Lưu ý: Không dùng '是' trước tính từ.",
    examples: [
      { chinese: "我是越南人。", pinyin: "Wǒ shì Yuènánrén.", translation: "Tôi là người Việt Nam." },
      { chinese: "他是我的朋友。", pinyin: "Tā shì wǒ de péngyǒu.", translation: "Anh ấy là bạn của tôi." }
    ]
  },
  {
    id: "basic-9",
    title: "Trợ từ sở hữu và Định ngữ '的'",
    structure: "Định ngữ + 的 + Trung tâm ngữ",
    explanation: "'的' (de) dùng để nối định ngữ (người sở hữu, tính từ mô tả) và trung tâm ngữ (vật bị sở hữu, danh từ được mô tả). Nếu quan hệ rất gần gũi (gia đình, quốc gia) có thể lược bỏ '的'.",
    examples: [
      { chinese: "我的书", pinyin: "Wǒ de shū", translation: "Sách của tôi." },
      { chinese: "他买的衣服", pinyin: "Tā mǎi de yīfu", translation: "Quần áo mà anh ấy mua." },
      { chinese: "我爸爸", pinyin: "Wǒ bàba", translation: "Bố tôi (lược bỏ '的')." }
    ]
  },
  {
    id: "basic-10",
    title: "Câu hỏi chính phản (V Không V)",
    structure: "S + V + 不 + V / Adj + 不 + Adj",
    explanation: "Đây là một cách hỏi khác của câu hỏi '吗', bằng cách lặp lại động từ hoặc tính từ với chữ '不' ở giữa.",
    examples: [
      { chinese: "你去不去？", pinyin: "Nǐ qù bu qù?", translation: "Bạn có đi không?" },
      { chinese: "这个好不好？", pinyin: "Zhège hǎo bu hǎo?", translation: "Cái này tốt không?" }
    ]
  },
  {
    id: "basic-11",
    title: "Cấu trúc sắp xảy ra '要/快...了'",
    structure: "要 / 快 / 快要 + V + 了",
    explanation: "Dùng để diễn tả một hành động hoặc sự việc sắp sửa xảy ra trong tương lai gần.",
    examples: [
      { chinese: "快下雨了。", pinyin: "Kuài xiàyǔ le.", translation: "Sắp mưa rồi." },
      { chinese: "我要回国了。", pinyin: "Wǒ yào huíguó le.", translation: "Tôi sắp về nước rồi." },
      { chinese: "新的一年快要到了。", pinyin: "Xīn de yì nián kuàiyào dào le.", translation: "Năm mới sắp đến rồi." }
    ]
  },
  {
    id: "basic-12",
    title: "Sử dụng Lượng từ",
    structure: "Số từ + Lượng từ + Danh từ",
    explanation: "Trong tiếng Trung, giữa số từ và danh từ bắt buộc phải có lượng từ. Mọi danh từ đều có lượng từ đi kèm riêng (ví dụ: 个 cho người/vật chung, 本 cho sách, 条 cho vật dài).",
    examples: [
      { chinese: "一个人", pinyin: "Yí ge rén", translation: "Một người." },
      { chinese: "三本书", pinyin: "Sān běn shū", translation: "Ba quyển sách." },
      { chinese: "两条鱼", pinyin: "Liǎng tiáo yú", translation: "Hai con cá." }
    ]
  },
  {
    id: "basic-13",
    title: "Động từ năng nguyện: 会, 能, 可以",
    structure: "S + 会/能/可以 + V + O",
    explanation: "'会' (biết - do học tập), '能' (có khả năng, đủ điều kiện để làm), '可以' (có thể - được cho phép làm).",
    examples: [
      { chinese: "我会说汉语。", pinyin: "Wǒ huì shuō Hànyǔ.", translation: "Tôi biết nói tiếng Trung (do học mà biết)." },
      { chinese: "我能吃十个饺子。", pinyin: "Wǒ néng chī shí ge jiǎozi.", translation: "Tôi có thể ăn 10 cái sủi cảo (khả năng)." },
      { chinese: "你可以走。", pinyin: "Nǐ kěyǐ zǒu.", translation: "Bạn có thể đi (sự cho phép)." }
    ]
  },
  {
    id: "basic-14",
    title: "Cách dùng từ để hỏi: 谁, 什么, 哪儿, 什么时候",
    structure: "S + V + Từ để hỏi / Từ để hỏi + V + O",
    explanation: "Câu hỏi trong tiếng Trung giữ nguyên trật tự từ của câu kể. Đặt từ để hỏi vào vị trí của thông tin cần biết.",
    examples: [
      { chinese: "你是谁？", pinyin: "Nǐ shì shéi?", translation: "Bạn là ai?" },
      { chinese: "你喜欢吃什么？", pinyin: "Nǐ xǐhuan chī shénme?", translation: "Bạn thích ăn cái gì?" },
      { chinese: "你去哪儿？", pinyin: "Nǐ qù nǎr?", translation: "Bạn đi đâu?" },
      { chinese: "什么时候开始？", pinyin: "Shénme shíhou kāishǐ?", translation: "Khi nào bắt đầu?" }
    ]
  },
  {
    id: "basic-15",
    title: "Cấu trúc Câu nguyên nhân - kết quả",
    structure: "因为 + Nguyên nhân, 所以 + Kết quả",
    explanation: "Dùng để biểu thị mối quan hệ nhân quả (Bởi vì ... cho nên ...).",
    examples: [
      { chinese: "因为下雨，所以我没去。", pinyin: "Yīnwèi xiàyǔ, suǒyǐ wǒ méi qù.", translation: "Vì trời mưa, nên tôi không đi." },
      { chinese: "因为他很努力，所以成绩很好。", pinyin: "Yīnwèi tā hěn nǔlì, suǒyǐ chéngjì hěn hǎo.", translation: "Bởi vì anh ấy nỗ lực, nên thành tích rất tốt." }
    ]
  },
  {
    id: "basic-16",
    title: "Cấu trúc Nhượng bộ",
    structure: "虽然 + Sự thật, 但是/可是 + Sự nhượng bộ",
    explanation: "Dùng để biểu thị mối quan hệ nhượng bộ, nghịch chuyển (Mặc dù ... nhưng ...).",
    examples: [
      { chinese: "虽然很累，但是很高兴。", pinyin: "Suīrán hěn lèi, dànshì hěn gāoxìng.", translation: "Mặc dù rất mệt, nhưng rất vui." },
      { chinese: "虽然他不在，可是我们还在工作。", pinyin: "Suīrán tā búzài, kěshì wǒmen hái zài gōngzuò.", translation: "Tuy anh ấy không có mặt, nhưng chúng tôi vẫn đang làm việc." }
    ]
  },
  {
    id: "basic-17",
    title: "Cấu trúc Làm việc gì đó cho ai",
    structure: "S + 给 + Người nhận + V + O",
    explanation: "'给' (cho) đóng vai trò làm giới từ, chỉ ra đối tượng tiếp nhận hành động.",
    examples: [
      { chinese: "我给你打电话。", pinyin: "Wǒ gěi nǐ dǎ diànhuà.", translation: "Tôi gọi điện thoại cho bạn." },
      { chinese: "妈妈给我买一本书。", pinyin: "Māma gěi wǒ mǎi yì běn shū.", translation: "Mẹ mua cho tôi một quyển sách." }
    ]
  },
  {
    id: "basic-18",
    title: "Câu kiêm ngữ",
    structure: "S1 + V1 + O1 (S2) + V2 + O2",
    explanation: "Động từ thứ nhất (thường là 请, 让, 叫, 使) yêu cầu tân ngữ (người) thực hiện hành động thứ 2.",
    examples: [
      { chinese: "我请你看电影。", pinyin: "Wǒ qǐng nǐ kàn diànyǐng.", translation: "Tôi mời bạn xem phim." },
      { chinese: "他让我明天来。", pinyin: "Tā ràng wǒ míngtiān lái.", translation: "Anh ấy bảo tôi ngày mai đến." },
      { chinese: "老师叫我们做作业。", pinyin: "Lǎoshī jiào wǒmen zuò zuòyè.", translation: "Thầy giáo bảo chúng tôi làm bài tập." }
    ]
  },
  {
    id: "basic-19",
    title: "Cấu trúc 'Ngoài ra...'",
    structure: "除了 + A + (以外)，还/也 + B",
    explanation: "Biểu thị ngoài phần được nhắc đến ('A') ra thì vẫn còn phần khác ('B').",
    examples: [
      { chinese: "除了英语，我还会说汉语。", pinyin: "Chúle Yīngyǔ, wǒ hái huì shuō Hànyǔ.", translation: "Ngoài tiếng Anh, tôi còn biết nói tiếng Trung." },
      { chinese: "除了苹果，我也喜欢吃西瓜。", pinyin: "Chúle píngguǒ, wǒ yě xǐhuan chī xīguā.", translation: "Ngoài táo, tôi cũng thích ăn dưa hấu." }
    ]
  },
  {
    id: "basic-20",
    title: "Cấu trúc 'Càng ngày càng'",
    structure: "越来越 + Tính từ / Động từ tâm lý",
    explanation: "Biểu thị mức độ của sự vật, sự việc thay đổi (tăng lên hoặc giảm đi) theo thời gian.",
    examples: [
      { chinese: "天气越来越冷。", pinyin: "Tiānqì yuè lái yuè lěng.", translation: "Thời tiết càng ngày càng lạnh." },
      { chinese: "我越来越喜欢他。", pinyin: "Wǒ yuè lái yuè xǐhuan tā.", translation: "Tôi ngày càng thích anh ấy." },
      { chinese: "你的汉语越来越好。", pinyin: "Nǐ de Hànyǔ yuè lái yuè hǎo.", translation: "Tiếng Trung của bạn ngày càng tốt." }
    ]
  },
  {
    id: "basic-21",
    title: "Cấu trúc 'Vừa... vừa...'",
    structure: "一边 + V1，一边 + V2",
    explanation: "Nhấn mạnh hai hoặc nhiều hành động diễn ra cùng một lúc.",
    examples: [
      { chinese: "我一边吃饭一边看电视。", pinyin: "Wǒ yìbiān chīfàn yìbiān kàn diànshì.", translation: "Tôi vừa ăn cơm vừa xem tivi." },
      { chinese: "他一边走一边打电话。", pinyin: "Tā yìbiān zǒu yìbiān dǎ diànhuà.", translation: "Anh ấy vừa đi vừa gọi điện thoại." }
    ]
  }
];
