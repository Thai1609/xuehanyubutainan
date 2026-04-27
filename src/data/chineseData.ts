export interface Radical {
  character: string;
  pinyin: string;
  meaning: string;
  category?: string;
}

export const RADICAL_CATEGORIES = [
  {
    id: "people",
    name: "Người & Quan hệ",
    icon: "Users",
    radicals: [
      { character: "亻", pinyin: "rén", meaning: "Bộ Nhân (Người)" },
      { character: "女", pinyin: "nǚ", meaning: "Bộ Nữ (Phụ nữ)" },
      { character: "子", pinyin: "zǐ", meaning: "Bộ Tử (Con cái)" },
      { character: "父", pinyin: "fù", meaning: "Bộ Phụ (Cha)" },
      { character: "目", pinyin: "mù", meaning: "Bộ Mục (Mắt)" },
      { character: "口", pinyin: "kǒu", meaning: "Bộ Khẩu (Miệng)" },
      { character: "心", pinyin: "xīn", meaning: "Bộ Tâm (Tim/Tâm hồn)" },
    ]
  },
  {
    id: "actions",
    name: "Hành động & Di chuyển",
    icon: "Zap",
    radicals: [
      { character: "辶", pinyin: "chuò", meaning: "Bộ Sước (Đi lại)" },
      { character: "扌", pinyin: "shǒu", meaning: "Bộ Thủ (Tay - Hành động bằng tay)" },
      { character: "足", pinyin: "zú", meaning: "Bộ Túc (Chân - Hành động bằng chân)" },
      { character: "力", pinyin: "lì", meaning: "Bộ Lực (Sức mạnh)" },
      { character: "走", pinyin: "zǒu", meaning: "Bộ Tẩu (Chạy/Đi)" },
    ]
  },
  {
    id: "animals",
    name: "Động vật",
    icon: "Bird",
    radicals: [
      { character: "犭", pinyin: "quǎn", meaning: "Bộ Khuyển (Thú bốn chân)" },
      { character: "鸟", pinyin: "niǎo", meaning: "Bộ Điểu (Chim)" },
      { character: "虫", pinyin: "chóng", meaning: "Bộ Trùng (Sâu bọ/Côn trùng)" },
      { character: "马", pinyin: "mǎ", meaning: "Bộ Mã (Ngựa)" },
      { character: "鱼", pinyin: "yú", meaning: "Bộ Ngư (Cá)" },
    ]
  },
  {
    id: "nature",
    name: "Thiên nhiên & Vật chất",
    icon: "Cloud",
    radicals: [
      { character: "木", pinyin: "mù", meaning: "Bộ Mộc (Cây cối)" },
      { character: "氵", pinyin: "shuǐ", meaning: "Bộ Thủy (Nước)" },
      { character: "火", pinyin: "huǒ", meaning: "Bộ Hỏa (Lửa)" },
      { character: "土", pinyin: "tǔ", meaning: "Bộ Thổ (Đất)" },
      { character: "日", pinyin: "rì", meaning: "Bộ Nhật (Mặt trời/Ngày)" },
      { character: "月", pinyin: "yuè", meaning: "Bộ Nguyệt (Mặt trăng/Tháng)" },
      { character: "雨", pinyin: "yǔ", meaning: "Bộ Vũ (Mưa)" },
      { character: "金", pinyin: "jīn", meaning: "Bộ Kim (Kim loại/Vàng)" },
    ]
  }
];

export interface Vocabulary {
  character: string;
  pinyin: string;
  meaning: string;
  example?: string;
  examplePinyin?: string;
  exampleTranslation?: string;
  level?: string;
}

export interface DialogueLine {
  speaker: string;
  speakerPinyin?: string;
  chinese: string;
  pinyin: string;
  translation: string;
}

export interface DialogueSection {
  title?: string;
  dialogue: DialogueLine[];
}

export interface Lesson {
  id: string;
  title: string;
  dialogue: DialogueLine[];
  dialogueSections?: DialogueSection[];
  vocabulary: Vocabulary[];
  grammar?: {
    rule: string;
    description: string;
    examples: {
      chinese: string;
      pinyin: string;
      translation: string;
    }[];
  }[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  level: string;
  radicals: Radical[];
  vocabulary: Vocabulary[];
  grammar: {
    rule: string;
    description: string;
    examples: {
      chinese: string;
      pinyin: string;
      translation: string;
    }[];
  }[];
  dialogue?: DialogueLine[];
  lessons?: Lesson[];
}

export const CHINESE_DATA: Topic[] = [
  {
    id: "greetings",
    title: "Chào hỏi & Làm quen",
    description: "Nền tảng giao tiếp HSK 1-2",
    icon: "MessageCircle",
    level: "HSK 1",
    radicals: [
      { character: "亻", pinyin: "rén", meaning: "Bộ Nhân (người)" },
      { character: "女", pinyin: "nǚ", meaning: "Bộ Nữ (phụ nữ)" },
      { character: "口", pinyin: "kǒu", meaning: "Bộ Khẩu (miệng)" },
      { character: "子", pinyin: "zǐ", meaning: "Bộ Tử (con cái)" },
    ],
    vocabulary: [
      { character: "你", pinyin: "nǐ", meaning: "Bạn, anh, chị", example: "你好！", examplePinyin: "nǐ hǎo!", exampleTranslation: "Chào bạn!", level: "HSK 1" },
      { character: "好", pinyin: "hǎo", meaning: "Tốt, đẹp", example: "你好吗？", examplePinyin: "nǐ hǎo ma?", exampleTranslation: "Bạn khỏe không?", level: "HSK 1" },
      { character: "您", pinyin: "nín", meaning: "Ngài", example: "您贵姓？", examplePinyin: "nín guìxìng?", exampleTranslation: "Ngài họ gì?", level: "HSK 1" },
      { character: "叫", pinyin: "jiào", meaning: "Gọi là", example: "我叫张明。", examplePinyin: "wǒ jiào zhāng míng.", exampleTranslation: "Tôi tên là Trương Minh.", level: "HSK 1" },
      { character: "名字", pinyin: "míngzi", meaning: "Tên", example: "你叫什么名字？", examplePinyin: "nǐ jiào shénme míngzi?", exampleTranslation: "Bạn tên là gì?", level: "HSK 1" },
      { character: "认识", pinyin: "rènshi", meaning: "Quen biết", example: "认识你很高兴。", examplePinyin: "rènshi nǐ hěn gāoxìng.", exampleTranslation: "Rất vui được quen bạn.", level: "HSK 1" },
      { character: "老师", pinyin: "lǎoshī", meaning: "Thầy cô", example: "老师好。", examplePinyin: "lǎoshī hǎo.", exampleTranslation: "Chào thầy (cô).", level: "HSK 1" },
      { character: "学生", pinyin: "xuésheng", meaning: "Học sinh", example: "我是留学生。", examplePinyin: "wǒ shì liú xuésheng.", exampleTranslation: "Tôi là lưu học sinh.", level: "HSK 1" },
      { character: "谢谢", pinyin: "xièxie", meaning: "Cảm ơn", example: "谢谢你的帮助。", examplePinyin: "xièxie nǐ de bāngzhù.", exampleTranslation: "Cảm ơn sự giúp đỡ của bạn.", level: "HSK 1" },
      { character: "不客气", pinyin: "bú kèqi", meaning: "Không có gì", example: "不客气，这是我应该做的。", examplePinyin: "bú kèqi, zhè shì wǒ yīnggāi zuò de.", exampleTranslation: "Không có gì, đây là việc tôi nên làm.", level: "HSK 1" },
      { character: "再见", pinyin: "zàijiàn", meaning: "Tạm biệt", example: "明天见，再见！", examplePinyin: "míngtiān jiàn, zàijiàn!", exampleTranslation: "Hẹn gặp lại ngày mai, tạm biệt!", level: "HSK 1" },
      { character: "加油", pinyin: "jiāyóu", meaning: "Cố lên", example: "加油！你能行的。", examplePinyin: "jiāyóu! nǐ néng xíng de.", exampleTranslation: "Cố lên! Bạn sẽ làm được.", level: "HSK 3" },
      { character: "干杯", pinyin: "gānbēi", meaning: "Cạn ly", example: "为了我们的友谊，干杯！", examplePinyin: "wèile wǒmen de yǒuyì, gānbēi!", exampleTranslation: "Vì tình hữu nghị của chúng ta, cạn ly!", level: "HSK 3" },
      { character: "介绍", pinyin: "jièshào", meaning: "Giới thiệu", example: "让我介绍一下自己。", examplePinyin: "ràng wǒ jièshào yīxià zìjǐ.", exampleTranslation: "Để tôi giới thiệu một chút về bản thân.", level: "HSK 2" },
      { character: "欢迎", pinyin: "huānyíng", meaning: "Hoan nghênh/Chào mừng", example: "欢迎来到北京！", examplePinyin: "huānyíng láidào běijīng!", exampleTranslation: "Chào mừng đến với Bắc Kinh!", level: "HSK 2" },
      { character: "对不起", pinyin: "duìbuqǐ", meaning: "Xin lỗi", example: "对不起，我迟到了。", examplePinyin: "duìbuqǐ, wǒ chídào le.", exampleTranslation: "Xin lỗi, tôi đến muộn.", level: "HSK 1" },
      { character: "没关系", pinyin: "méi guānxi", meaning: "Không sao đâu", example: "没关系，请进。", examplePinyin: "méi guānxi, qǐng jìn.", exampleTranslation: "Không sao, mời vào.", level: "HSK 1" },
    ],
    grammar: [
      {
        rule: "Câu hỏi với '吗' (ma)",
        description: "Thêm '吗' vào cuối câu trần thuật để tạo câu hỏi Có/Không.",
        examples: [
          { chinese: "你好吗？", pinyin: "nǐ hǎo ma?", translation: "Bạn khỏe không?" },
          { chinese: "你是老师吗？", pinyin: "nǐ shì lǎoshī ma?", translation: "Bạn là giáo viên phải không?" },
          { chinese: "他学习汉语吗？", pinyin: "tā xuéxí hànyǔ ma?", translation: "Anh ấy học tiếng Trung phải không?" },
          { chinese: "你认识他吗？", pinyin: "nǐ rènshi tā ma?", translation: "Bạn quen anh ấy không?" },
        ],
      },
      {
        rule: "Cách dùng đại từ nghi vấn '什么' (shénme)",
        description: "Dùng để hỏi 'cái gì', đứng trước danh từ hoặc làm tân ngữ.",
        examples: [
          { chinese: "你叫什么名字？", pinyin: "nǐ jiào shénme míngzi?", translation: "Bạn tên là gì?" },
          { chinese: "这是什么？", pinyin: "zhè shì shénme?", translation: "Đây là cái gì?" },
          { chinese: "你喜欢看什么书？", pinyin: "nǐ xǐhuan kàn shénme shū?", translation: "Bạn thích xem sách gì?" },
          { chinese: "你在吃什么？", pinyin: "nǐ zài chī shénme?", translation: "Bạn đang ăn cái gì?" },
        ],
      },
      {
        rule: "Đại từ chỉ định '这' (zhè) và '那' (nà)",
        description: "'这' là đây (gần), '那' là kia (xa). Thường đi kèm lượng từ.",
        examples: [
          { chinese: "这是我的老师。", pinyin: "zhè shì wǒ de lǎoshī.", translation: "Đây là thầy giáo của tôi." },
          { chinese: "那个人是谁？", pinyin: "nà ge rén shì shéi?", translation: "Người kia là ai?" },
          { chinese: "这些书都是汉办的。", pinyin: "zhèxiē shū dōu shì hànbàn de.", translation: "Những cuốn sách này đều là của Hán Ban." },
        ],
      },
    ],
  },
  {
    id: "food",
    title: "Ẩm thực & Nhà hàng",
    description: "Gọi món và các loại thực phẩm thông dụng",
    icon: "Utensils",
    level: "HSK 1-3",
    radicals: [
      { character: "饣", pinyin: "shí", meaning: "Bộ Thực (ăn)" },
      { character: "米", pinyin: "mǐ", meaning: "Bộ Mễ (gạo)" },
      { character: "火", pinyin: "huǒ", meaning: "Bộ Hỏa (lửa)" },
      { character: "艹", pinyin: "cǎo", meaning: "Bộ Thảo (cỏ, thực vật)" },
    ],
    vocabulary: [
      { character: "吃", pinyin: "chī", meaning: "Ăn", example: "你想吃什么？", examplePinyin: "nǐ xiǎng chī shénme?", exampleTranslation: "Bạn muốn ăn gì?", level: "HSK 1" },
      { character: "米饭", pinyin: "mǐfàn", meaning: "Cơm", example: "我要一碗米饭。", examplePinyin: "wǒ yào yī wǎn mǐfàn.", exampleTranslation: "Tôi muốn một bát cơm.", level: "HSK 1" },
      { character: "面条", pinyin: "miàntiáo", meaning: "Mỳ", example: "他很喜欢吃面条。", examplePinyin: "tā hěn xǐhuan chī miàntiáo.", exampleTranslation: "Anh ấy rất thích ăn mỳ.", level: "HSK 2" },
      { character: "饺子", pinyin: "jiǎozi", meaning: "Sủi cảo", example: "这里的饺子很有名。", examplePinyin: "zhèlǐ de jiǎozi hěn yǒumíng.", exampleTranslation: "Sủi cảo ở đây rất nổi tiếng.", level: "HSK 3" },
      { character: "喝", pinyin: "hē", meaning: "Uống", example: "我想喝咖啡。", examplePinyin: "wǒ xiǎng hē kāfēi.", exampleTranslation: "Tôi muốn uống cà phê.", level: "HSK 1" },
      { character: "茶", pinyin: "chá", meaning: "Trà", example: "你喝茶还是喝水？", examplePinyin: "nǐ hē chá háishi hē shuǐ?", exampleTranslation: "Bạn uống trà hay uống nước?", level: "HSK 1" },
      { character: "点菜", pinyin: "diǎncài", meaning: "Gọi món", example: "我们开始点菜吧。", examplePinyin: "wǒmen kāishǐ diǎncài ba.", exampleTranslation: "Chúng ta bắt đầu gọi món nhé.", level: "HSK 3" },
      { character: "菜单", pinyin: "càidān", meaning: "Thực đơn", example: "请给我菜单。", examplePinyin: "qǐng gěi wǒ càidān.", exampleTranslation: "Cho tôi xem thực đơn.", level: "HSK 3" },
      { character: "苹果", pinyin: "píngguǒ", meaning: "Quả táo", example: "你想吃苹果吗？", examplePinyin: "nǐ xiǎng chī píngguǒ ma?", exampleTranslation: "Bạn muốn ăn táo không?", level: "HSK 1" },
      { character: "香蕉", pinyin: "xiāngjiāo", meaning: "Quả chuối", example: "桌子上有一个香蕉。", examplePinyin: "zhuōzi shàng yǒu yī ge xiāngjiāo.", exampleTranslation: "Trên bàn có một quả chuối.", level: "HSK 3" },
      { character: "西瓜", pinyin: "xīguā", meaning: "Dưa hấu", example: "夏天吃西瓜很舒服。", examplePinyin: "xiàtiān chī xīguā hěn shūfu.", exampleTranslation: "Mùa hè ăn dưa hấu rất thoải mái.", level: "HSK 3" },
    ],
    grammar: [
      {
        rule: "Cách dùng '想' (xiǎng) và '要' (yào)",
        description: "'想' là mong muốn, '要' là cần/sẽ làm (mạnh mẽ hơn).",
        examples: [
          { chinese: "我想喝茶。", pinyin: "wǒ xiǎng hē chá.", translation: "Tôi muốn uống trà." },
          { chinese: "我要去餐馆吃饭。", pinyin: "wǒ yào qù cānguǎn chīfàn.", translation: "Tôi phải đi nhà hàng ăn cơm." },
          { chinese: "你想要吃什么？", pinyin: "nǐ xiǎng yào chī shénme?", translation: "Bạn muốn ăn cái gì?" },
          { chinese: "我不想要那个。", pinyin: "wǒ bù xiǎng yào nàge.", translation: "Tôi không muốn cái đó." },
        ],
      },
      {
        rule: "Động từ năng nguyện '会' (huì)",
        description: "Biểu thị khả năng đạt được thông qua học tập hoặc khả năng xảy ra.",
        examples: [
          { chinese: "我会说汉语。", pinyin: "wǒ huì shuō hànyǔ.", translation: "Tôi biết nói tiếng Trung." },
          { chinese: "他不会做大盘鸡。", pinyin: "tā bù huì zuò dàpánjī.", translation: "Anh ấy không biết làm món gà hầm khoai tây." },
          { chinese: "明天会下雨吗？", pinyin: "míngtiān huì xiàyǔ ma?", translation: "Ngày mai liệu có mưa không?" },
        ],
      },
    ],
  },
  {
    id: "work",
    title: "Công việc & Văn phòng",
    description: "Từ vựng chuyên sâu HSK 3-4",
    icon: "Briefcase",
    level: "HSK 3/4",
    radicals: [
      { character: "力", pinyin: "lì", meaning: "Bộ Lực (sức mạnh)" },
      { character: "父", pinyin: "fù", meaning: "Bộ Phụ (cha)" },
      { character: "𦘒", pinyin: "yù", meaning: "Bộ Duật (cây bút)" },
    ],
    vocabulary: [
      { character: "工作", pinyin: "gōngzuò", meaning: "Công việc", example: "我喜欢我的工作。", examplePinyin: "wǒ xǐhuan wǒ de gōngzuò.", exampleTranslation: "Tôi thích công việc của tôi.", level: "HSK 1" },
      { character: "经理", pinyin: "jīnglǐ", meaning: "Giám đốc", example: "经理在办公室。", examplePinyin: "jīnglǐ zài bàngōngshì.", exampleTranslation: "Giám đốc ở trong văn phòng.", level: "HSK 3" },
      { character: "会议", pinyin: "huìyì", meaning: "Hội nghị", example: "我们要参加一个会议。", examplePinyin: "wǒmen yào cānjiā yī ge huìyì.", exampleTranslation: "Chúng tôi phải tham gia một cuộc họp.", level: "HSK 3" },
      { character: "生意", pinyin: "shēngyi", meaning: "Kinh doanh", example: "他的生意做得很成功。", examplePinyin: "tā de shēngyi zuò de hěn chénggōng.", exampleTranslation: "Việc kinh doanh của anh ấy rất thành công.", level: "HSK 4" },
      { character: "申请", pinyin: "shēnqǐng", meaning: "Xin, ứng tuyển", example: "我申请了那个职位。", examplePinyin: "wǒ shēnqǐng le nàge zhíwèi.", exampleTranslation: "Tôi đã ứng tuyển vào vị trí đó.", level: "HSK 4" },
      { character: "通知", pinyin: "tōngzhī", meaning: "Thông báo", example: "我还没收到通知。", examplePinyin: "wǒ hái méi shōudào tōngzhī.", exampleTranslation: "Tôi vẫn chưa nhận được thông báo.", level: "HSK 4" },
      { character: "加班", pinyin: "jiābān", meaning: "Làm thêm giờ", example: "明天我得加班。", examplePinyin: "míngtiān wǒ děi jiābān.", exampleTranslation: "Ngày mai tôi phải làm thêm giờ.", level: "HSK 4" },
      { character: "薪水", pinyin: "xīnshuǐ", meaning: "Lương", example: "这份工作的薪水很高。", examplePinyin: "zhè fèn gōngzuò de xīnshuǐ hěn gāo.", exampleTranslation: "Lương của công việc này rất cao.", level: "HSK 5" },
      { character: "工资", pinyin: "gōngzī", meaning: "Tiền lương", example: "他的工资每月都很高。", examplePinyin: "tā de gōngzī měiyuè dōu hěn gāo.", exampleTranslation: "Lương của anh ấy mỗi tháng đều rất cao.", level: "HSK 4" },
      { character: "同事", pinyin: "tóngshì", meaning: "Đồng nghiệp", example: "我和同事的关系很好。", examplePinyin: "wǒ hé tóngshì de guānxì hěn hǎo.", exampleTranslation: "Mối quan hệ của tôi và đồng nghiệp rất tốt.", level: "HSK 4" },
      { character: "压力", pinyin: "yālì", meaning: "Áp lực", example: "最近工作的压力很大。", examplePinyin: "zuìjìn gōngzuò de yālì hěn dà.", exampleTranslation: "Gần đây áp lực công việc rất lớn.", level: "HSK 4" },
    ],
    grammar: [
      {
        rule: "Cách dùng '被' (bèi) - Câu bị động",
        description: "Chủ ngữ (vật bị tác động) + 被 (+Đối tượng) + Động từ.",
        examples: [
          { chinese: "我的手机被他拿走了。", pinyin: "wǒ de shǒujī bèi tā názǒu le.", translation: "Điện thoại của tôi bị anh ấy lấy đi rồi." },
          { chinese: "那辆车被修好了。", pinyin: "nà liàng chē bèi xiūhǎo le.", translation: "Chiếc xe đó đã được sửa xong." },
          { chinese: "计划被取消了。", pinyin: "jìhuà bèi qǔxiāo le.", translation: "Kế hoạch bị hủy bỏ rồi." },
          { chinese: "小偷被警察抓住了。", pinyin: "xiǎotōu bèi jǐngchá zhuāzhù le.", translation: "Tên trộm đã bị cảnh sát bắt được." },
        ],
      },
      {
        rule: "Câu chữ '把' (bǎ)",
        description: "Chủ ngữ + 把 + Tân ngữ + Động từ + Thành phần khác (Diễn tả sự tác động làm thay đổi trạng thái tân ngữ).",
        examples: [
          { chinese: "请把书打开。", pinyin: "qǐng bǎ shū dǎkāi.", translation: "Vui lòng mở sách ra." },
          { chinese: "我把作业做完了。", pinyin: "wǒ bǎ zuòyè zuòwán le.", translation: "Tôi làm xong bài tập rồi." },
          { chinese: "他把手机弄丢了。", pinyin: "tā bǎ shǒujī nòngdiū le.", translation: "Anh ấy làm mất điện thoại rồi." },
        ],
      },
    ],
  },
  {
    id: "environment",
    title: "Môi trường & Thiên nhiên",
    description: "Từ vựng nâng cao về bảo vệ môi trường",
    icon: "Leaf",
    level: "HSK 4/5",
    radicals: [
      { character: "木", pinyin: "mù", meaning: "Bộ Mộc (cây cối)" },
      { character: "氵", pinyin: "shuǐ", meaning: "Bộ Thủy (nước)" },
      { character: "气", pinyin: "qì", meaning: "Bộ Khí (không khí)" },
    ],
    vocabulary: [
      { character: "环境", pinyin: "huánjìng", meaning: "Môi trường", example: "我们要保护环境。", examplePinyin: "wǒmen yào bǎohù huánjìng.", exampleTranslation: "Chúng ta cần bảo vệ môi trường.", level: "HSK 4" },
      { character: "保护", pinyin: "bǎohù", meaning: "Bảo vệ", example: "保护大自然是每个人的责任。", examplePinyin: "bǎohù dàzìrán shì měi ge rén de zérèn.", exampleTranslation: "Bảo vệ thiên nhiên là trách nhiệm của mỗi người.", level: "HSK 4" },
      { character: "污染", pinyin: "wūrǎn", meaning: "Ô nhiễm", example: "这里的空气污染很严重。", examplePinyin: "zhèlǐ de kōngqì wūrǎn hěn yánzhòng.", exampleTranslation: "Ô nhiễm không khí ở đây rất nghiêm trọng.", level: "HSK 4" },
      { character: "垃圾", pinyin: "lājī", meaning: "Rác thải", example: "请不要乱丢垃圾。", examplePinyin: "qǐng bùyào luàndiū lājī.", exampleTranslation: "Vui lòng không vứt rác bừa bãi.", level: "HSK 4" },
      { character: "节约", pinyin: "jiéyuē", meaning: "Tiết kiệm", example: "我们要节约用水。", examplePinyin: "wǒmen yào jiéyuē yòngshuǐ.", exampleTranslation: "Chúng ta cần tiết kiệm nước.", level: "HSK 4" },
      { character: "回收", pinyin: "huíshōu", meaning: "Thu hồi, tái chế", example: "这些旧报纸可以回收。", examplePinyin: "zhèxiē jiù bàozhǐ kěyǐ huíshōu.", exampleTranslation: "Những tờ báo cũ này có thể tái chế.", level: "HSK 5" },
      { character: "阳光", pinyin: "yángguāng", meaning: "Ánh nắng", example: "今天的阳光很灿烂。", examplePinyin: "jīntiān de yángguāng hěn cànlàn.", exampleTranslation: "Ánh nắng hôm nay rất rực rỡ.", level: "HSK 4" },
      { character: "风景", pinyin: "fēngjǐng", meaning: "Phong cảnh", example: "这里的风景美得像画一样。", examplePinyin: "zhèlǐ de fēngjǐng měi de xiàng huà yīyàng.", exampleTranslation: "Phong cảnh ở đây đẹp như tranh vẽ vậy.", level: "HSK 4" },
      { character: "森林", pinyin: "sēnlín", meaning: "Rừng rậm", example: "我们要保护森林资源。", examplePinyin: "wǒmen yào bǎohù sēnlín zīyuán.", exampleTranslation: "Chúng ta cần bảo vệ tài nguyên rừng.", level: "HSK 5" },
    ],
    grammar: [
      {
        rule: "Cấu trúc 'Bởi vì... nên...' (yīnwèi... suǒyǐ...)",
        description: "Bởi vì... nên... (Diễn tả quan hệ nhân quả).",
        examples: [
          { chinese: "因为下雨，所以我没去公园。", pinyin: "yīnwèi xiàyǔ, suǒyǐ wǒ méi qù gōngyuán.", translation: "Bởi vì mưa nên tôi không đi công viên." },
          { chinese: "因为他很努力，所以通过了考试。", pinyin: "yīnwèi tā hěn nǔlì, suǒyǐ tōngguò le kǎoshì.", translation: "Bởi vì anh ấy nỗ lực nên đã đỗ kỳ thi." },
          { chinese: "因为环境污染，很多动物失去了家园。", pinyin: "yīnwèi huánjìng wūrǎn, hěnduō dòngwù shīqù le jiāyuán.", translation: "Vì ô nhiễm môi trường, rất nhiều động vật mất đi nhà cửa." },
        ],
      },
    ],
  },
  {
    id: "technology",
    title: "Công nghệ & Internet",
    description: "Đời sống số trong tiếng Trung",
    icon: "Smartphone",
    level: "HSK 4/5",
    radicals: [
      { character: "电", pinyin: "diàn", meaning: "Điện" },
      { character: "钅", pinyin: "jīn", meaning: "Bộ Kim (kim loại)" },
      { character: "网", pinyin: "wǎng", meaning: "Bộ Võng (mạng lưới)" },
    ],
    vocabulary: [
      { character: "互联网", pinyin: "hùliánwǎng", meaning: "Internet", example: "互联网改变了我们的生活。", examplePinyin: "hùliánwǎng gǎibiàn le wǒmen de shēnghuó.", exampleTranslation: "Internet đã thay đổi cuộc sống của chúng ta.", level: "HSK 5" },
      { character: "下载", pinyin: "xiàzǎi", meaning: "Tải xuống", example: "你可以从这个网站下载软件。", examplePinyin: "nǐ kěyǐ cóng zhè ge wǎngzhàn xiàzǎi ruǎnjiàn.", exampleTranslation: "Bạn có thể tải phần mềm từ trang web này.", level: "HSK 4" },
      { character: "上传", pinyin: "shàngchuán", meaning: "Tải lên", example: "照片正在上传中。", examplePinyin: "zhàopiàn zhèngzài shàngchuán zhōng.", exampleTranslation: "Ảnh đang được tải lên.", level: "HSK 5" },
      { character: "社交媒体", pinyin: "shèjiāo méitǐ", meaning: "Mạng xã hội", example: "社交媒体让人与人更近了。", examplePinyin: "shèjiāo méitǐ ràng rén yǔ rén gèng jìn le.", exampleTranslation: "Mạng xã hội giúp con người gần nhau hơn.", level: "HSK 5" },
      { character: "智能手机", pinyin: "zhìnéng shǒujī", meaning: "Điện thoại thông minh", example: "现在的智能手机功能非常强大。", examplePinyin: "xiànzài de zhìnéng shǒujī gōngnéng fēicháng qiángdà.", exampleTranslation: "Điện thoại thông minh hiện nay có chức năng rất mạnh mẽ.", level: "HSK 5" },
      { character: "人工智能", pinyin: "réngōng zhìnéng", meaning: "Trí tuệ nhân tạo", example: "人工智能是未来的发展趋势。", examplePinyin: "réngōng zhìnéng shì wèilái de fāzhǎn qūshì.", exampleTranslation: "AI là xu hướng phát triển của tương lai.", level: "HSK 6" },
      { character: "电脑", pinyin: "diànnǎo", meaning: "Máy tính", example: "我买了一台新电脑。", examplePinyin: "wǒ mǎi le yī tái xīn diànnǎo.", exampleTranslation: "Tôi đã mua một chiếc máy tính mới.", level: "HSK 1" },
      { character: "电子邮件", pinyin: "diànzǐ yóujiàn", meaning: "Email", example: "请给我发电子邮件。", examplePinyin: "qǐng gěi wǒ fā diànzǐ yóujiàn.", exampleTranslation: "Vui lòng gửi email cho tôi.", level: "HSK 3" },
      { character: "网站", pinyin: "wǎngzhàn", meaning: "Trang web", example: "这个网站有很多有用的资料。", examplePinyin: "zhè ge wǎngzhàn yǒu hěnduō yǒuyòng de zīliào.", exampleTranslation: "Trang web này có rất nhiều tài liệu hữu ích.", level: "HSK 4" },
    ],
    grammar: [
      {
        rule: "Cách dùng ' olsa... but... ' (suīrán... dànshì...)",
        description: "Mặc dù... nhưng... (Diễn tả quan hệ nhượng bộ).",
        examples: [
          { chinese: "虽然我很累，但是我很开心。", pinyin: "suīrán wǒ hěn lèi, dànshì wǒ hěn kāixīn.", translation: "Mặc dù tôi rất mệt nhưng tôi rất vui." },
          { chinese: "虽然是智能手机，但是他不会用。", pinyin: "suīrán shì zhìnéng shǒujī, dànshì tā bù huì yòng.", translation: "Mặc dù là smartphone nhưng anh ấy không biết dùng." },
          { chinese: "虽然工作很忙，但他每天坚持运动。", pinyin: "suīrán gōngzuò hěn máng, dàn tā měitiān jiānchí yùndòng.", translation: "Mặc dù công việc bận rộn nhưng ngày nào anh ấy cũng kiên trì vận động." },
        ],
      },
    ],
  },
  {
    id: "family",
    title: "Gia đình & Nhà cửa",
    description: "Các thành viên và quan hệ gia đình",
    icon: "Users",
    level: "HSK 1/2",
    radicals: [
      { character: "女", pinyin: "nǚ", meaning: "Nữ (phụ nữ)" },
      { character: "子", pinyin: "zǐ", meaning: "Tử (con cái)" },
      { character: "父", pinyin: "fù", meaning: "Phụ (cha)" },
      { character: "宀", pinyin: "mián", meaning: "Bộ Miên (mái nhà)" },
    ],
    vocabulary: [
      { character: "家", pinyin: "jiā", meaning: "Nhà/Gia đình", example: "你家有几口人？", examplePinyin: "nǐ jiā yǒu jǐ kǒu rén?", exampleTranslation: "Nhà bạn có mấy người?", level: "HSK 1" },
      { character: "爸爸", pinyin: "bàba", meaning: "Bố", example: "我爸爸是医生。", examplePinyin: "wǒ bàba shì yīshēng.", exampleTranslation: "Bố tôi là bác sĩ.", level: "HSK 1" },
      { character: "妈妈", pinyin: "māma", meaning: "Mẹ", example: "妈妈在做饭。", examplePinyin: "māma zài zuòfàn.", exampleTranslation: "Mẹ đang nấu cơm.", level: "HSK 1" },
      { character: "哥哥", pinyin: "gēge", meaning: "Anh trai", example: "我有一个哥哥。", examplePinyin: "wǒ yǒu yī ge gēge.", exampleTranslation: "Tôi có một người anh trai.", level: "HSK 1" },
      { character: "姐姐", pinyin: "jiějie", meaning: "Chị gái", example: "姐姐在学习。", examplePinyin: "jiějie zài xuéxí.", exampleTranslation: "Chị gái đang học bài.", level: "HSK 1" },
      { character: "弟弟", pinyin: "dìdi", meaning: "Em trai", example: "我弟弟比我小两岁。", examplePinyin: "wǒ dìdi bǐ wǒ xiǎo liǎng suì.", exampleTranslation: "Em trai kém tôi 2 tuổi.", level: "HSK 1" },
      { character: "妹妹", pinyin: "mèimei", meaning: "Em gái", example: "我妹妹还没结婚。", examplePinyin: "wǒ mèimei hái méi jiéhūn.", exampleTranslation: "Em gái tôi vẫn chưa kết hôn.", level: "HSK 1" },
      { character: "孩子", pinyin: "háizi", meaning: "Con cái, trẻ em", example: "那个孩子很聪明。", examplePinyin: "nàge háizi hěn cōngmíng.", exampleTranslation: "Đứa trẻ đó rất thông minh.", level: "HSK 2" },
      { character: "婚姻", pinyin: "hūnyīn", meaning: "Hôn nhân", example: "好的婚姻需要经营。", examplePinyin: "hǎo de hūnyīn xūyào jīngyíng.", exampleTranslation: "Hôn nhân tốt cần phải vun đắp.", level: "HSK 5" },
      { character: "爷爷", pinyin: "yéye", meaning: "Ông nội", example: "我爷爷今年八十岁了。", examplePinyin: "wǒ yéye jīnnián bāshí suì le.", exampleTranslation: "Ông nội tôi năm nay 80 tuổi rồi.", level: "HSK 3" },
      { character: "奶奶", pinyin: "nǎinai", meaning: "Bà nội", example: "奶奶在公园散步。", examplePinyin: "nǎinai zài gōngyuán sànbù.", exampleTranslation: "Bà nội đang đi dạo trong công viên.", level: "HSK 3" },
      { character: "叔叔", pinyin: "shūshu", meaning: "Chú", example: "这位是我的叔叔。", examplePinyin: "zhè wèi shì wǒ de shūshu.", exampleTranslation: "Vị này là chú của tôi.", level: "HSK 3" },
      { character: "阿姨", pinyin: "āyí", meaning: "Dì/Cô", example: "阿姨，您好！", examplePinyin: "āyí, nín hǎo!", exampleTranslation: "Chào dì ạ!", level: "HSK 3" },
    ],
    grammar: [
      {
        rule: "Cách dùng từ ' de ' biểu thị sở hữu",
        description: "Đại từ/Danh từ + 的 + Danh từ.",
        examples: [
          { chinese: "我的書", pinyin: "wǒ de shū", translation: "Sách của tôi" },
          { chinese: "老師的手機", pinyin: "lǎoshī de shǒujī", translation: "Điện thoại của thầy giáo" },
          { chinese: "中國的朋友", pinyin: "zhōngguó de péngyou", translation: "Bạn ở Trung Quốc" },
          { chinese: "我媽媽的衣服", pinyin: "wǒ māma de yīfu", translation: "Quần áo của mẹ tôi" },
        ],
      },
      {
        rule: "Câu hỏi với ' jǐ ' so với ' duōshǎo '",
        description: "'几' hỏi số lượng < 10, '多少' hỏi số lượng lớn hoặc không xác định.",
        examples: [
          { chinese: "你家有幾口人？", pinyin: "nǐ jiā yǒu jǐ kǒu rén?", translation: "Nhà bạn có mấy người?" },
          { chinese: "你有幾個蘋果？", pinyin: "nǐ yǒu jǐ ge píngguǒ?", translation: "Bạn có mấy quả táo?" },
          { chinese: "學校有多少學生？", pinyin: "xuéxiào yǒu duōshǎo xuésheng?", translation: "Trường học có bao nhiêu học sinh?" },
          { chinese: "這件衣服多少錢？", pinyin: "zhè jiàn yīfu duōshǎo qián?", translation: "Bộ đồ này bao nhiêu tiền?" },
        ],
      },
    ],
  },
  {
    id: "shopping",
    title: "Mua sắm & Tiền tệ",
    description: "Hỏi giá và giao dịch",
    icon: "ShoppingBag",
    level: "HSK 1-3",
    radicals: [
      { character: "贝", pinyin: "bèi", meaning: "Bộ Bối (tiền bạc, quý giá)" },
      { character: "钅", pinyin: "jīn", meaning: "Bộ Kim (kim loại, tiền)" },
      { character: "𬃷", pinyin: "mǎ", meaning: "Bộ Mã (con ngựa)" },
    ],
    vocabulary: [
      { character: "钱", pinyin: "qián", meaning: "Tiền", example: "我有钱。", exampleTranslation: "Tôi có tiền.", level: "HSK 1" },
      { character: "多少", pinyin: "duōshǎo", meaning: "Bao nhiêu", example: "这个多少钱？", exampleTranslation: "Cái này bao nhiêu tiền?", level: "HSK 1" },
      { character: "块", pinyin: "kuài", meaning: "Đồng (đơn vị tiền)", example: "十块钱。", exampleTranslation: "Mười đồng.", level: "HSK 1" },
      { character: "买", pinyin: "mǎi", meaning: "Mua", example: "我想买这双鞋。", exampleTranslation: "Tôi muốn mua đôi giày này.", level: "HSK 1" },
      { character: "贵", pinyin: "guì", meaning: "Đắt", example: "太贵了，便宜点吧。", exampleTranslation: "Đắt quá, rẻ một chút đi.", level: "HSK 2" },
      { character: "便宜", pinyin: "piányi", meaning: "Rẻ", example: "这里的衣服很便宜。", exampleTranslation: "Quần áo ở đây rất rẻ.", level: "HSK 2" },
      { character: "超市", pinyin: "chāoshì", meaning: "Siêu thị", example: "我在超市买东西。", exampleTranslation: "Tôi đang mua đồ ở siêu thị.", level: "HSK 2" },
      { character: "刷卡", pinyin: "shuākǎ", meaning: "Quẹt thẻ", example: "可以刷卡吗？", exampleTranslation: "Có thể quẹt thẻ không?", level: "HSK 3" },
      { character: "打折", pinyin: "dǎzhé", meaning: "Giảm giá", example: "商场正在打折。", exampleTranslation: "Trung tâm thương mại đang giảm giá.", level: "HSK 4" },
      { character: "信用卡", pinyin: "xìnyòngkǎ", meaning: "Thẻ tín dụng", example: "你可以用信用卡付钱。", exampleTranslation: "Bạn có thể thanh toán bằng thẻ tín dụng.", level: "HSK 4" },
      { character: "价钱", pinyin: "jiàqian", meaning: "Giá cả", example: "这件衣服的价钱太贵了。", exampleTranslation: "Giá của chiếc áo này đắt quá.", level: "HSK 3" },
    ],
    grammar: [
      {
        rule: "Cấu trúc ' too... le ' (tài...le)",
        description: "Dùng để biểu thị mức độ cực kỳ/quá mức, thường dùng để cảm thán.",
        examples: [
          { chinese: "太好了！", pinyin: "tài hǎo le!", translation: "Tốt quá rồi!" },
          { chinese: "太貴了！", pinyin: "tài guì le!", translation: "Đắt quá!" },
          { chinese: "天氣太熱了。", pinyin: "tiānqì tài rè le.", translation: "Thời tiết nóng quá." },
          { chinese: "太遠了。", pinyin: "tài yuǎn le.", translation: "Xa quá." },
        ],
      },
      {
        rule: "Cách dùng ' le ' biểu thị thay đổi trạng thái",
        description: "Đặt cuối câu để biểu thị một trạng thái mới vừa mới nảy sinh.",
        examples: [
          { chinese: "我不买了。", pinyin: "wǒ bù mǎi le.", translation: "Tôi không mua nữa rồi (thay đổi quyết định)." },
          { chinese: "下雨了。", pinyin: "xià yǔ le.", translation: "Mưa rồi." },
          { chinese: "现在三点了。", pinyin: "xiànzài sān diǎn le.", translation: "Bây giờ 3 giờ rồi." },
        ],
      },
    ],
  },
  {
    id: "time-weather",
    title: "Thời gian & Thời tiết",
    description: "Hỏi giờ và nói về khí hậu",
    icon: "Clock",
    level: "HSK 1/2",
    radicals: [
      { character: "日", pinyin: "rì", meaning: "Bộ Nhật (mặt trời, ngày)" },
      { character: "雨", pinyin: "yǔ", meaning: "Bộ Vũ (mưa)" },
      { character: "月", pinyin: "yuè", meaning: "Bộ Nguyệt (mặt trăng, tháng)" },
    ],
    vocabulary: [
      { character: "现在", pinyin: "xiànzài", meaning: "Bây giờ", example: "现在几点？", exampleTranslation: "Bây giờ là mấy giờ?", level: "HSK 1" },
      { character: "今天", pinyin: "jīntiān", meaning: "Hôm nay", example: "今天星期几？", exampleTranslation: "Hôm nay thứ mấy?", level: "HSK 1" },
      { character: "昨天", pinyin: "zuótiān", meaning: "Hôm qua", example: "昨天我没去上课。", exampleTranslation: "Hôm qua tôi không đi học.", level: "HSK 1" },
      { character: "明天", pinyin: "míngtiān", meaning: "Ngày mai", example: "明天见。", exampleTranslation: "Hẹn gặp lại ngày mai.", level: "HSK 1" },
      { character: "天气", pinyin: "tiānqì", meaning: "Thời tiết", example: "今天天气不错。", exampleTranslation: "Thời tiết hôm nay không tệ.", level: "HSK 1" },
      { character: "下雨", pinyin: "xiàyǔ", meaning: "Mưa", example: "下午会下雨吗？", exampleTranslation: "Chiều nay có mưa không?", level: "HSK 1" },
      { character: "阴天", pinyin: "yīntiān", meaning: "Trời âm u", example: "今天是阴天。", exampleTranslation: "Trời hôm nay âm u.", level: "HSK 2" },
      { character: "晴天", pinyin: "qíngtiān", meaning: "Trời nắng", example: "晴天很舒服。", exampleTranslation: "Trời nắng rất dễ chịu.", level: "HSK 2" },
      { character: "季节", pinyin: "jìjié", meaning: "Mùa", example: "你最喜欢哪个季节？", exampleTranslation: "Bạn thích nhất mùa nào?", level: "HSK 3" },
      { character: "夏天", pinyin: "xiàtiān", meaning: "Mùa hè", example: "夏天的天气很热。", exampleTranslation: "Thời tiết mùa hè rất nóng.", level: "HSK 2" },
      { character: "冬天", pinyin: "dōngtiān", meaning: "Mùa đông", example: "冬天下雪了。", exampleTranslation: "Mùa đông tuyết rơi rồi.", level: "HSK 2" },
      { character: "特别", pinyin: "tèbié", meaning: "Đặc biệt", example: "今天的天气特别好。", exampleTranslation: "Thời tiết hôm nay đặc biệt tốt.", level: "HSK 3" },
    ],
    grammar: [
      {
        rule: "Cách nói thời gian",
        description: "Giờ (diǎn) + Phút (fēn).",
        examples: [
          { chinese: "現在三點十分。", pinyin: "xiànzài sān diǎn shí fēn.", translation: "Bây giờ là 3 giờ 10 phút." },
          { chinese: "昨天晚上八點半。", pinyin: "zuótiān wǎnshang bā diǎn bàn.", translation: "8 rưỡi tối hôm qua." },
          { chinese: "明天中午十二點。", pinyin: "míngtiān zhōngwǔ shí'èr diǎn.", translation: "12 giờ trưa mai." },
          { chinese: "你幾點睡覺？", pinyin: "nǐ jǐ diǎn shuìjiào?", translation: "Mấy giờ bạn đi ngủ?" },
        ],
      },
      {
        rule: "Cấu trúc ' compared to... ' (bǐ)",
        description: "A + 比 + B + Tính từ (A hơn B cái gì đó).",
        examples: [
          { chinese: "今天比昨天热。", pinyin: "jīntiān bǐ zuótiān rè.", translation: "Hôm nay nóng hơn hôm qua." },
          { chinese: "他比我高。", pinyin: "tā bǐ wǒ gāo.", translation: "Anh ấy cao hơn tôi." },
          { chinese: "这件比那件便宜。", pinyin: "zhè jiàn bǐ nà jiàn piányi.", translation: "Cái này rẻ hơn cái kia." },
        ],
      },
    ],
  },
  {
    id: "hobbies",
    title: "Sở thích & Giải trí",
    description: "Bạn thích làm gì vào thời gian rảnh?",
    icon: "Music",
    level: "HSK 2/3",
    radicals: [
      { character: "足", pinyin: "zú", meaning: "Bộ Túc (chân)" },
      { character: "纟", pinyin: "sī", meaning: "Bộ Mịch (sợi tơ)" },
      { character: "手", pinyin: "shǒu", meaning: "Bộ Thủ (tay)" },
    ],
    vocabulary: [
      { character: "喜欢", pinyin: "xǐhuan", meaning: "Thích", example: "我喜欢学中文。", exampleTranslation: "Tôi thích học tiếng Trung.", level: "HSK 1" },
      { character: "旅游", pinyin: "lǚyóu", meaning: "Du lịch", example: "我喜欢去旅游。", exampleTranslation: "Tôi thích đi du lịch.", level: "HSK 2" },
      { character: "运动", pinyin: "yùndòng", meaning: "Vận động, thể thao", example: "运动对身体好。", exampleTranslation: "Vận động tốt cho cơ thể.", level: "HSK 2" },
      { character: "唱歌", pinyin: "chànggē", meaning: "Hát", example: "她唱歌好听。", exampleTranslation: "Cô ấy hát hay.", level: "HSK 2" },
      { character: "听音乐", pinyin: "tīng yīnyuè", meaning: "Nghe nhạc", example: "你喜欢听什么音乐？", exampleTranslation: "Bạn thích nghe nhạc gì?", level: "HSK 2" },
      { character: "踢足球", pinyin: "tī zúqiú", meaning: "Đá bóng", example: "星期日我要去踢足球。", exampleTranslation: "Chủ nhật tôi đi đá bóng.", level: "HSK 2" },
      { character: "看电影", pinyin: "kàn diànyǐng", meaning: "Xem phim", example: "电影院在哪儿？", exampleTranslation: "Rạp phim ở đâu?", level: "HSK 1" },
      { character: "上网", pinyin: "shàngwǎng", meaning: "Lên mạng", example: "上网查资料。", exampleTranslation: "Lên mạng tra tài liệu.", level: "HSK 2" },
      { character: "画画", pinyin: "huàhuà", meaning: "Vẽ tranh", example: "我也喜欢画画。", exampleTranslation: "Tôi cũng thích vẽ tranh.", level: "HSK 3" },
      { character: "游戏", pinyin: "yóuxì", meaning: "Trò chơi/Game", example: "这个游戏非常有趣。", exampleTranslation: "Trò chơi này rất thú vị.", level: "HSK 3" },
      { character: "摄影", pinyin: "shèyǐng", meaning: "Nhiếp ảnh", example: "摄影是我的爱好。", exampleTranslation: "Chụp ảnh là sở thích của tôi.", level: "HSK 4" },
      { character: "弹钢琴", pinyin: "tán gāngqín", meaning: "Đánh đàn piano", example: "她从五岁开始学弹钢琴。", exampleTranslation: "Cô ấy học đàn piano từ năm 5 tuổi.", level: "HSK 4" },
    ],
    grammar: [
      {
        rule: "Cách dùng ' xǐhuan '",
        description: "Chủ ngữ + 喜欢 + Danh từ/Động từ (Thích làm gì/thích cái gì).",
        examples: [
          { chinese: "我喜歡中國菜。", pinyin: "wǒ xǐhuan zhōngguócài.", translation: "Tôi thích món Trung Quốc." },
          { chinese: "你喜歡看電影嗎？", pinyin: "nǐ xǐhuan kàn diànyǐng ma?", translation: "Bạn có thích xem phim không?" },
          { chinese: "他不喜歡運動。", pinyin: "tā bù xǐhuan yùndòng.", translation: "Anh ấy không thích vận động." },
          { chinese: "你最喜歡吃什麼？", pinyin: "nǐ zuì xǐhuan chī shénme?", translation: "Bạn thích ăn nhất cái gì?" },
        ],
      },
      {
        rule: "Cách dùng ' verb + de + adj ' biểu thị mức độ/kết quả",
        description: "Động từ + 得 + Tính từ (Diễn tả kết quả hoặc trạng thái của hành động).",
        examples: [
          { chinese: "他跑得很快。", pinyin: "tā pǎo de hěn kuài.", translation: "Anh ấy chạy rất nhanh." },
          { chinese: "她说得很流利。", pinyin: "tā shuō de hěn liúlì.", translation: "Cô ấy nói rất lưu loát." },
          { chinese: "我画得不好。", pinyin: "wǒ huà de bù hǎo.", translation: "Tôi vẽ không đẹp." },
        ],
      },
    ],
  },
  {
    id: "transport",
    title: "Giao thông & Đi lại",
    description: "Cách di chuyển và phương tiện",
    icon: "Bus",
    level: "HSK 2/3",
    radicals: [
      { character: "辶", pinyin: "chuò", meaning: "Bộ Sước (chạy, đi lại)" },
      { character: "车", pinyin: "chē", meaning: "Bộ Xa (xe cộ)" },
      { character: "舟", pinyin: "zhōu", meaning: "Bộ Chu (thuyền)" },
    ],
    vocabulary: [
      { character: "开车", pinyin: "kāichē", meaning: "Lái xe", example: "你会开车吗？", exampleTranslation: "Bạn biết lái xe không?", level: "HSK 2" },
      { character: "公共汽车", pinyin: "gōnggòng qìchē", meaning: "Xe buýt", example: "我坐公共汽车去学校。", exampleTranslation: "Tôi đi xe buýt đến trường.", level: "HSK 1" },
      { character: "出租车", pinyin: "chūzūchē", meaning: "Taxi", example: "叫一辆出租车。", exampleTranslation: "Gọi một chiếc taxi.", level: "HSK 1" },
      { character: "飞机", pinyin: "fēijī", meaning: "Máy bay", example: "坐飞机很方便。", exampleTranslation: "Đi máy bay rất thuận tiện.", level: "HSK 1" },
      { character: "车站", pinyin: "chēzhàn", meaning: "Bến xe", example: "火车站在那儿。", exampleTranslation: "Ga tàu hỏa ở đằng kia.", level: "HSK 2" },
      { character: "骑自行车", pinyin: "qí zìxíngchē", meaning: "Đi xe đạp", example: "骑自行车运动。", exampleTranslation: "Đi xe đạp để vận động.", level: "HSK 2" },
      { character: "托运", pinyin: "tuōyùn", meaning: "Gửi ký gửi", example: "这些行李需要托运。", exampleTranslation: "Những hành lý này cần được ký gửi.", level: "HSK 4" },
      { character: "地铁", pinyin: "dìtiě", meaning: "Tàu điện ngầm", example: "我每天坐地铁上班。", exampleTranslation: "Tôi đi tàu điện ngầm đi làm mỗi ngày.", level: "HSK 3" },
      { character: "行李箱", pinyin: "xínglixiāng", meaning: "Va li", example: "这个行李箱太重了。", exampleTranslation: "Chiếc va li này nặng quá.", level: "HSK 3" },
      { character: "航班", pinyin: "hángbān", meaning: "Chuyến bay", example: "我们要查一下航班的时间。", exampleTranslation: "Chúng ta cần tra thời gian chuyến bay.", level: "HSK 4" },
    ],
    grammar: [
      {
        rule: "Cách dùng động từ ' zuò ' và ' qí '",
        description: "'坐' dùng cho phương tiện ngồi (ô tô, máy bay), '骑' dùng cho phương tiện cưỡi (xe đạp, ngựa).",
        examples: [
          { chinese: "我坐飛機去北京。", pinyin: "wǒ zuò fēijī qù běijīng.", translation: "Tôi đi máy bay đến Bắc Kinh." },
          { chinese: "你騎車去學校嗎？", pinyin: "nǐ qí chē qù xuéxiào ma?", translation: "Bạn đi xe (đạp/máy) đến trường à?" },
          { chinese: "我們坐出租車吧。", pinyin: "wǒmen zuò chūzūchē ba.", translation: "Chúng ta đi taxi đi." },
          { chinese: "騎馬很難。", pinyin: "qí mǎ hěn nán.", translation: "Cưỡi ngựa rất khó." },
        ],
      },
    ],
  },
  {
    id: "emotions",
    title: "Cảm xúc & Tâm trạng",
    description: "Cách diễn đạt cảm nhận cá nhân",
    icon: "Heart",
    level: "HSK 2/3",
    radicals: [
      { character: "忄", pinyin: "xīn", meaning: "Bộ Tâm (trái tim, tình cảm)" },
      { character: "目", pinyin: "mù", meaning: "Bộ Mục (mắt)" },
    ],
    vocabulary: [
      { character: "高兴", pinyin: "gāoxìng", meaning: "Vui vẻ", example: "今天我很高兴。", exampleTranslation: "Hôm nay tôi rất vui.", level: "HSK 1" },
      { character: "生气", pinyin: "shēngqì", meaning: "Tức giận", example: "他在生气吗？", exampleTranslation: "Anh ấy đang giận à?", level: "HSK 2" },
      { character: "伤心", pinyin: "shāngxīn", meaning: "Đau lòng", example: "别伤心。", exampleTranslation: "Đừng đau lòng.", level: "HSK 3" },
      { character: "担心", pinyin: "dānxīn", meaning: "Lo lắng", example: "你不用担心我。", exampleTranslation: "Bạn không cần lo cho tôi.", level: "HSK 3" },
      { character: "尴尬", pinyin: "gāngà", meaning: "Ngượng ngùng", example: "真的太尴尬了。", exampleTranslation: "Thật là ngượng ngùng quá.", level: "HSK 5" },
      { character: "羡慕", pinyin: "xiànmù", meaning: "Ngưỡng mộ", example: "大家都很羡慕他。", exampleTranslation: "Mọi người đều rất ngưỡng mộ anh ấy.", level: "HSK 4" },
      { character: "感动", pinyin: "gǎndòng", meaning: "Cảm động", example: "那个电影看后让人很感动。", exampleTranslation: "Sau khi xem bộ phim đó khiến người ta rất cảm động.", level: "HSK 4" },
    ],
    grammar: [
      {
        rule: "Câu cảm thán với ' zhēn '",
        description: "Dùng để diễn tả cảm thán (Thật là...).",
        examples: [
          { chinese: "真漂亮！", pinyin: "zhēn piàoliang!", translation: "Thật là đẹp!" },
          { chinese: "真好吃！", pinyin: "zhēn hǎochī!", translation: "Ngon thật!" },
          { chinese: "真不巧。", pinyin: "zhēn bùqiǎo.", translation: "Thật không may." },
          { chinese: "他真聰明。", pinyin: "tā zhēn cōngmíng.", translation: "Anh ấy thông minh thật." },
        ],
      },
    ],
  },
  {
    id: "health",
    title: "Sức khỏe & Cơ thể",
    description: "Các bộ phận cơ thể và triệu chứng bệnh",
    icon: "Stethoscope",
    level: "HSK 3/4",
    radicals: [
      { character: "疒", pinyin: "chuáng", meaning: "Bộ Nạch (bệnh tật)" },
      { character: "月", pinyin: "yuè", meaning: "Bộ Nguyệt (cơ bắp, cơ thể)" },
      { character: "目", pinyin: "mù", meaning: "Bộ Mục (mắt)" },
    ],
    vocabulary: [
      { character: "感冒", pinyin: "gǎnmào", meaning: "Cảm cúm", example: "我可能有感冒了。", exampleTranslation: "Tôi có lẽ bị cảm rồi.", level: "HSK 3" },
      { character: "舒服", pinyin: "shūfu", meaning: "Thoải mái/Khỏe", example: "身体不舒服。", exampleTranslation: "Cơ thể không khỏe.", level: "HSK 2" },
      { character: "医生", pinyin: "yīshēng", meaning: "Bác sĩ", example: "去看医生吧。", exampleTranslation: "Đi khám bác sĩ đi.", level: "HSK 1" },
      { character: "检查", pinyin: "jiǎnchá", meaning: "Kiểm tra", example: "医生正在检查病人。", exampleTranslation: "Bác sĩ đang kiểm tra bệnh nhân.", level: "HSK 4" },
      { character: "头疼", pinyin: "tóuténg", meaning: "Đau đầu", example: "我整天头疼。", exampleTranslation: "Tôi bị đau đầu cả ngày.", level: "HSK 3" },
      { character: "吃药", pinyin: "chīyào", meaning: "Uống thuốc", example: "别忘了吃药。", exampleTranslation: "Đừng quên uống thuốc.", level: "HSK 3" },
      { character: "健康", pinyin: "jiànkāng", meaning: "Sức khỏe", example: "身体健康是最重要的。", exampleTranslation: "Sức khỏe là quan trọng nhất.", level: "HSK 3" },
      { character: "锻炼", pinyin: "duànliàn", meaning: "Rèn luyện/Tập thể dục", example: "你要多锻炼身体。", exampleTranslation: "Bạn nên tập thể dục nhiều hơn.", level: "HSK 3" },
      { character: "减肥", pinyin: "jiǎnféi", meaning: "Giảm cân", example: "她最近在减肥。", exampleTranslation: "Dạo này cô ấy đang giảm cân.", level: "HSK 4" },
    ],
    grammar: [
      {
        rule: "Cách dùng ' possibly... ' (yǒukěnéng)",
        description: "Dùng để diễn tả một khả năng có thể xảy ra.",
        examples: [
          { chinese: "他有可能今天不来。", pinyin: "tā yǒukěnéng jīntiān bù lái.", translation: "Anh ấy có khả năng hôm nay không đến." },
          { chinese: "有可能明天会下雪。", pinyin: "yǒukěnéng míngtiān huì xiàxuě.", translation: "Có khả năng ngày mai sẽ có tuyết." },
        ],
      },
    ],
  },
  {
    id: "education",
    title: "Giáo dục & Học tập",
    description: "Trường học và các môn học",
    icon: "GraduationCap",
    level: "HSK 2-4",
    radicals: [
      { character: "子", pinyin: "zǐ", meaning: "Bộ Tử (con cái/học trò)" },
      { character: "辶", pinyin: "chuò", meaning: "Bộ Sước (tiến bước)" },
    ],
    vocabulary: [
      { character: "学习", pinyin: "xuéxí", meaning: "Học tập", example: "好好学习。", exampleTranslation: "Học tập cho tốt.", level: "HSK 1" },
      { character: "作业", pinyin: "zuòyè", meaning: "Bài tập", example: "我有太多作业。", exampleTranslation: "Tôi có quá nhiều bài tập.", level: "HSK 2" },
      { character: "考试", pinyin: "kǎoshì", meaning: "Kỳ thi", example: "明天的考试很重要。", exampleTranslation: "Kỳ thi ngày mai rất quan trọng.", level: "HSK 2" },
      { character: "专业", pinyin: "zhuānyè", meaning: "Chuyên ngành", example: "你的专业是什么？", exampleTranslation: "Chuyên ngành của bạn là gì?", level: "HSK 4" },
      { character: "奖学金", pinyin: "jiǎngxuéjīn", meaning: "Học bổng", example: "我拿到了奖学金。", exampleTranslation: "Tôi đã nhận được học bổng.", level: "HSK 5" },
      { character: "复习", pinyin: "fùxí", meaning: "Ôn tập", example: "考试前要好好复习。", exampleTranslation: "Trước khi thi cần ôn tập cho tốt.", level: "HSK 3" },
      { character: "毕业", pinyin: "bìyè", meaning: "Tốt nghiệp", example: "我明年就要大学毕业了。", exampleTranslation: "Sang năm tôi sẽ tốt nghiệp đại học.", level: "HSK 4" },
    ],
    grammar: [
      {
        rule: "Cách dùng ' besides... ' (chúle... yǐwài)",
        description: "Ngoài... ra (Diễn tả sự loại trừ hoặc bổ sung).",
        examples: [
          { chinese: "除了英语，我还会说法语。", pinyin: "chúle yīngyǔ, wǒ hái huì shuō fǎyǔ.", translation: "Ngoài tiếng Anh ra, tôi còn biết nói tiếng Pháp." },
          { chinese: "除了他，大家都来了。", pinyin: "chúle tā, dàjiā dōu lái le.", translation: "Ngoài anh ấy ra, mọi người đều đến rồi." },
        ],
      },
    ],
  },
  {
    id: "radicals-full",
    title: "Bộ Thủ Hán Tự",
    description: "Khám phá các bộ thủ cơ bản",
    icon: "Grid",
    level: "Cơ bản",
    radicals: [
      { character: "一", pinyin: "yī", meaning: "Nhất (Số 1)" },
      { character: "丨", pinyin: "gǔn", meaning: "Cổn (Sổ)" },
      { character: "丶", pinyin: "zhǔ", meaning: "Chủ (Chấm)" },
      { character: "丿", pinyin: "piě", meaning: "Phiệt (Phẩy)" },
      { character: "乙", pinyin: "yǐ", meaning: "Ất" },
      { character: "亅", pinyin: "jué", meaning: "Quyết (Móc)" },
      { character: "二", pinyin: "èr", meaning: "Nhị (Số 2)" },
      { character: "亠", pinyin: "tóu", meaning: "Đầu" },
      { character: "人", pinyin: "rén", meaning: "Nhân (Người)" },
      { character: "儿", pinyin: "ér", meaning: "Nhi (Trẻ)" },
      { character: "入", pinyin: "rù", meaning: "Nhập (Vào)" },
      { character: "八", pinyin: "bā", meaning: "Bát (Số 8)" },
      { character: "冂", pinyin: "jiōng", meaning: "Quynh (Vùng biên)" },
      { character: "冖", pinyin: "mì", meaning: "Mịch (Trùm lên)" },
      { character: "冫", pinyin: "bīng", meaning: "Băng (Nước đá)" },
      { character: "几", pinyin: "jī", meaning: "Kỷ (Cái ghế)" },
      { character: "凵", pinyin: "qiǔ", meaning: "Khảm (Há miệng)" },
      { character: "刀", pinyin: "dāo", meaning: "Đao (Con dao)" },
      { character: "力", pinyin: "lì", meaning: "Lực (Sức mạnh)" },
      { character: "勹", pinyin: "bāo", meaning: "Bao (Bọc)" },
      { character: "匕", pinyin: "bǐ", meaning: "Chủy (Cái thìa)" },
      { character: "匚", pinyin: "fāng", meaning: "Phương (Tủ đựng)" },
      { character: "匸", pinyin: "xì", meaning: "Hệ (Che đậy)" },
      { character: "十", pinyin: "shí", meaning: "Thập (Số 10)" },
    ],
    vocabulary: [
      { character: "字", pinyin: "zì", meaning: "Chữ", example: "这个字怎么读？", exampleTranslation: "Chữ này đọc thế nào?", level: "HSK 1" },
      { character: "字典", pinyin: "zìdiǎn", meaning: "Tự điển", example: "去查字典。", exampleTranslation: "Đi tra từ điển.", level: "HSK 3" },
    ],
    grammar: [
      {
        rule: "Tầm quan trọng của bộ thủ",
        description: "Bộ thủ giúp nhận diện ý nghĩa chung của chữ Hán.",
        examples: [
          { chinese: "氵 liên quan đến nước.", pinyin: "Shuǐ", translation: "Ví dụ: 汁 (nước ép), 汗 (mồ hôi)." },
          { chinese: "亻 liên quan đến người.", pinyin: "Rén", translation: "Ví dụ: 他 (anh ấy), 们 (các bạn)." },
          { chinese: "心 liên quan đến cảm xúc.", pinyin: "Xīn", translation: "Ví dụ: 怒 (giận), 悲 (buồn)." },
          { chinese: "口 liên quan đến lời nói/miệng.", pinyin: "Kǒu", translation: "Ví dụ: 吃 (ăn), 喝 (uống)." },
        ],
      },
    ],
  },
  {
    id: "festivals",
    title: "Lễ hội & Văn hóa",
    description: "Khám phá truyền thống Trung Hoa",
    icon: "Star",
    level: "HSK 3/4",
    radicals: [
      { character: "礻", pinyin: "shì", meaning: "Bộ Thị (thần thánh, tổ tiên)" },
      { character: "饣", pinyin: "shí", meaning: "Bộ Thực (ăn uống)" },
    ],
    vocabulary: [
      { character: "春节", pinyin: "Chūnjié", meaning: "Tết Nguyên Đán", example: "春节是中国最重要的节日。", exampleTranslation: "Tết Nguyên Đán là ngày lễ quan trọng nhất của Trung Quốc.", level: "HSK 3" },
      { character: "饺子", pinyin: "jiǎozi", meaning: "Sủi cảo", example: "过年的时候我们会吃饺子。", exampleTranslation: "Khi ăn Tết chúng tôi thường ăn sủi cảo.", level: "HSK 3" },
      { character: "礼物", pinyin: "lǐwù", meaning: "Quà tặng", example: "这是我送给你的礼物。", exampleTranslation: "Đây là món quà tôi tặng bạn.", level: "HSK 2" },
      { character: "庆祝", pinyin: "qìngzhù", meaning: "Chúc mừng, ăn mừng", example: "我们聚在一起庆祝生日。", exampleTranslation: "Chúng tôi tụ tập cùng nhau mừng sinh nhật.", level: "HSK 4" },
      { character: "传统", pinyin: "chuántǒng", meaning: "Truyền thống", example: "我们要继承优秀的传统文化。", exampleTranslation: "Chúng ta cần kế thừa văn hóa truyền thống ưu tú.", level: "HSK 5" },
      { character: "端午节", pinyin: "Duānwǔjié", meaning: "Tết Đoan Ngọ", example: "端午节我们会吃粽子。", exampleTranslation: "Tết Đoan Ngọ chúng tôi ăn bánh tông.", level: "HSK 4" },
      { character: "中秋节", pinyin: "Zhōngqiūjié", meaning: "Tết Trung Thu", example: "中秋节的月亮很圆。", exampleTranslation: "Trăng Tết Trung Thu rất tròn.", level: "HSK 4" },
      { character: "月亮", pinyin: "yuèliang", meaning: "Mặt trăng", example: "今晚的月亮真美。", exampleTranslation: "Mặt trăng tối nay thật đẹp.", level: "HSK 3" },
    ],
    grammar: [
      {
        rule: "Cách dùng cấu trúc '...de shíhou' (Lúc...)",
        description: "Động từ/Cụm từ + 的时候 (Khi/Lúc làm gì đó).",
        examples: [
          { chinese: "我吃饭的时候不玩手机。", pinyin: "wǒ chīfàn de shíhou bù wán shǒujī.", translation: "Lúc ăn cơm tôi không chơi điện thoại." },
          { chinese: "去中国的时候，我想去长城。", pinyin: "qù zhōngguó de shíhou, wǒ xiǎng qù chángchéng.", translation: "Lúc đi Trung Quốc, tôi muốn đi Trường Thành." },
        ],
      },
    ],
  },
  {
    id: "sports",
    title: "Thể thao & Sức khỏe",
    description: "Các hoạt động thể chất và thi đấu",
    icon: "Target",
    level: "HSK 2-4",
    radicals: [
      { character: "足", pinyin: "zú", meaning: "Bộ Túc (chân)" },
      { character: "扌", pinyin: "shǒu", meaning: "Bộ Thủ (tay)" },
    ],
    vocabulary: [
      { character: "比赛", pinyin: "bǐsài", meaning: "Thi đấu, trận đấu", example: "明天的篮球比赛几点开始？", exampleTranslation: "Trận đấu bóng rổ ngày mai mấy giờ bắt đầu?", level: "HSK 3" },
      { character: "赢", pinyin: "yíng", meaning: "Thắng", example: "我们队赢了比赛。", exampleTranslation: "Đội chúng tôi đã thắng trận đấu.", level: "HSK 4" },
      { character: "输", pinyin: "shū", meaning: "Thua", example: "输赢并不重要，重要的是参与。", exampleTranslation: "Thắng thua không quan trọng, quan trọng là tham gia.", level: "HSK 4" },
      { character: "锻炼", pinyin: "duànliàn", meaning: "Rèn luyện", example: "每天锻炼身体很有必要。", exampleTranslation: "Ngày nào cũng rèn luyện thân thể là rất cần thiết.", level: "HSK 3" },
      { character: "游泳", pinyin: "yóuyǒng", meaning: "Bơi lội", example: "你会游泳吗？", exampleTranslation: "Bạn biết bơi không?", level: "HSK 2" },
      { character: "篮球", pinyin: "lánqiú", meaning: "Bóng rổ", example: "他打篮球打得非常棒。", exampleTranslation: "Anh ấy chơi bóng rổ cực kỳ giỏi.", level: "HSK 3" },
      { character: "网球", pinyin: "wǎngqiú", meaning: "Quần vợt/Tennis", example: "你会打网球吗？", exampleTranslation: "Bạn biết chơi tennis không?", level: "HSK 3" },
      { character: "乒乓球", pinyin: "pīngpāngqiú", meaning: "Bóng bàn", example: "乒乓球在中国非常流行。", exampleTranslation: "Bóng bàn rất phổ biến ở Trung Quốc.", level: "HSK 4" },
      { character: "坚持", pinyin: "jiānchí", meaning: "Kiên trì", example: "运动一定要坚持。", exampleTranslation: "Vận động nhất định phải kiên trì.", level: "HSK 4" },
    ],
    grammar: [
      {
        rule: "Bổ ngữ chỉ trạng thái với 'de'",
        description: "Động từ + 得 + Tính từ (Đánh giá mức độ của hành động).",
        examples: [
          { chinese: "他跑得很快。", pinyin: "tā pǎo de hěn kuài.", translation: "Anh ấy chạy rất nhanh." },
          { chinese: "你说得非常流利。", pinyin: "nǐ shuō de fēicháng liúlì.", translation: "Bạn nói cực kỳ lưu loát." },
        ],
      },
    ],
  },
  {
    id: "travel-directions",
    title: "Du lịch & Phương hướng",
    description: "Hỏi đường và khám phá địa điểm mới",
    icon: "Map",
    level: "HSK 2-4",
    radicals: [
      { character: "辶", pinyin: "chuò", meaning: "Bộ Sước (đi lại)" },
      { character: "阝", pinyin: "fù", meaning: "Bộ Phụ (gò đất/địa điểm)" },
    ],
    vocabulary: [
      { character: "在哪儿", pinyin: "zài nǎr", meaning: "Ở đâu", example: "洗手间在哪儿？", exampleTranslation: "Nhà vệ sinh ở đâu?", level: "HSK 1" },
      { character: "地图", pinyin: "dìtú", meaning: "Bản đồ", example: "这张地图很有用。", exampleTranslation: "Tờ bản đồ này rất hữu ích.", level: "HSK 3" },
      { character: "右边", pinyin: "yòubian", meaning: "Bên phải", example: "往右边走。", exampleTranslation: "Đi về phía bên phải.", level: "HSK 2" },
      { character: "左边", pinyin: "zuǒbian", meaning: "Bên trái", example: "左边是图书馆。", exampleTranslation: "Bên trái là thư viện.", level: "HSK 2" },
      { character: "远", pinyin: "yuǎn", meaning: "Xa", example: "这里离超市很远。", exampleTranslation: "Ở đây cách siêu thị rất xa.", level: "HSK 2" },
      { character: "近", pinyin: "jìn", meaning: "Gần", example: "车站离这儿很近。", exampleTranslation: "Bến xe ở rất gần đây.", level: "HSK 2" },
      { character: "护照", pinyin: "hùzhào", meaning: "Hộ chiếu", example: "别忘了带护照。", exampleTranslation: "Đừng quên mang theo hộ chiếu.", level: "HSK 3" },
      { character: "宾馆", pinyin: "bīnguǎn", meaning: "Khách sạn", example: "我们要在那家宾馆住两天。", exampleTranslation: "Chúng tôi sẽ ở khách sạn đó hai ngày.", level: "HSK 3" },
      { character: "景点", pinyin: "jǐngdiǎn", meaning: "Địa điểm tham quan", example: "这个城市的景点很多。", exampleTranslation: "Thành phố này có rất nhiều địa điểm tham quan.", level: "HSK 4" },
      { character: "旅游", pinyin: "lǚyóu", meaning: "Du lịch", example: "我明年打算去中国旅游。", exampleTranslation: "Sang năm tôi định đi du lịch Trung Quốc.", level: "HSK 2" },
      { character: "导游", pinyin: "dǎoyóu", meaning: "Hướng dẫn viên", example: "导游在给我们介绍景点。", exampleTranslation: "Hướng dẫn viên đang giới thiệu địa điểm tham quan cho chúng tôi.", level: "HSK 4" },
      { character: "门票", pinyin: "ménpiào", meaning: "Vé vào cổng", example: "这里的门票是多少钱？", exampleTranslation: "Vé vào cổng ở đây là bao nhiêu tiền?", level: "HSK 4" },
    ],
    grammar: [
      {
        rule: "Cấu trúc 'A lí B...' (Khoảng cách)",
        description: "A + 离 + B + (Mức độ) + Tính từ (Diễn tả khoảng cách giữa A và B).",
        examples: [
          { chinese: "我家离学校很近。", pinyin: "wǒ jiā lí xuéxiào hěn jìn.", translation: "Nhà tôi cách trường học rất gần." },
          { chinese: "这里离飞机场远吗？", pinyin: "zhè lǐ lí fēijīchǎng yuǎn ma?", translation: "Ở đây cách sân bay xa không?" },
        ],
      },
    ],
  },
  {
    id: "animals",
    title: "Động vật",
    description: "Thế giới động vật quanh ta",
    icon: "Bug",
    level: "HSK 2-4",
    radicals: [
      { character: "犭", pinyin: "quǎn", meaning: "Bộ Khuyển (chó/thú vật)" },
      { character: "鸟", pinyin: "niǎo", meaning: "Bộ Điểu (chim)" },
      { character: "虫", pinyin: "chóng", meaning: "Bộ Trùng (sâu bọ)" },
    ],
    vocabulary: [
      { character: "狗", pinyin: "gǒu", meaning: "Con chó", example: "我养了一只小狗。", exampleTranslation: "Tôi nuôi một con chó nhỏ.", level: "HSK 2" },
      { character: "猫", pinyin: "māo", meaning: "Con mèo", example: "这只猫很可爱。", exampleTranslation: "Con mèo này rất đáng yêu.", level: "HSK 2" },
      { character: "熊猫", pinyin: "xióngmāo", meaning: "Gấu trúc", example: "熊猫是中国的大使。", examplePinyin: "xióngmāo shì zhōngguó de dàshǐ.", exampleTranslation: "Gấu trúc là đại sứ của Trung Quốc.", level: "HSK 3" },
      { character: "老虎", pinyin: "lǎohǔ", meaning: "Con hổ", example: "老虎林中王。", examplePinyin: "lǎohǔ lín zhōng wáng.", exampleTranslation: "Hổ là vua của rừng xanh.", level: "HSK 4" },
      { character: "鸟", pinyin: "niǎo", meaning: "Con chim", example: "树上有几只鸟？", examplePinyin: "shù shàng yǒu jǐ zhī niǎo?", exampleTranslation: "Trên cây có mấy con chim?", level: "HSK 2" },
      { character: "马", pinyin: "mǎ", meaning: "Con ngựa", example: "他骑马骑得很好。", examplePinyin: "tā qí mǎ qí de hěn hǎo.", exampleTranslation: "Anh ấy cưỡi ngựa rất giỏi.", level: "HSK 2" },
      { character: "大象", pinyin: "dàxiàng", meaning: "Con voi", example: "大象的耳朵很大。", examplePinyin: "dàxiàng de ěrduo hěn dà.", exampleTranslation: "Tai của con voi rất to.", level: "HSK 4" },
      { character: "蛇", pinyin: "shé", meaning: "Con rắn", example: "我有点害怕蛇。", examplePinyin: "wǒ yǒudiǎn hàipà shé.", exampleTranslation: "Tôi hơi sợ rắn.", level: "HSK 4" },
    ],
    grammar: [
      {
        rule: "Lượng từ cho động vật 'zhī'",
        description: "Số từ + 只 + Động vật.",
        examples: [
          { chinese: "一只猫", pinyin: "yī zhī māo", translation: "Một con mèo" },
          { chinese: "两只狗", pinyin: "liǎng zhī gǒu", translation: "Hai con chó" },
        ],
      },
    ],
  },
  {
    id: "colors-fashion",
    title: "Màu sắc & Thời trang",
    description: "Miêu tả vẻ ngoài và phong cách",
    icon: "Palette",
    level: "HSK 2-4",
    radicals: [
      { character: "纟", pinyin: "sī", meaning: "Bộ Mịch (sợi tơ/may mặc)" },
      { character: "衣", pinyin: "yī", meaning: "Bộ Y (quần áo)" },
    ],
    vocabulary: [
      { character: "颜色", pinyin: "yánsè", meaning: "Màu sắc", example: "你喜欢什么颜色？", examplePinyin: "nǐ xǐhuan shénme yánsè?", exampleTranslation: "Bạn thích màu gì?", level: "HSK 2" },
      { character: "穿", pinyin: "chuān", meaning: "Mặc/Đeo", example: "今天你穿得很漂亮。", examplePinyin: "jīntiān nǐ chuān de hěn piàoliang.", exampleTranslation: "Hôm nay bạn mặc rất đẹp.", level: "HSK 2" },
      { character: "衣服", pinyin: "yīfu", meaning: "Quần áo", example: "这件衣服多少钱？", examplePinyin: "zhè jiàn yīfu duōshǎo qián?", exampleTranslation: "Bộ đồ này bao nhiêu tiền?", level: "HSK 1" },
      { character: "红色", pinyin: "hóngsè", meaning: "Màu đỏ", example: "我有一件红色的毛衣。", examplePinyin: "wǒ yǒu yī jiàn hóngsè de máoyī.", exampleTranslation: "Tôi có một chiếc áo len màu đỏ.", level: "HSK 2" },
      { character: "蓝色", pinyin: "lánsè", meaning: "Màu xanh da trời", example: "蓝色的天空真美。", examplePinyin: "lánsè de tiānkōng zhēn měi.", exampleTranslation: "Bầu trời xanh thật đẹp.", level: "HSK 2" },
      { character: "鞋", pinyin: "xié", meaning: "Giày", example: "这双鞋很舒服。", examplePinyin: "zhè shuāng xié hěn shūfu.", exampleTranslation: "Đôi giày này rất thoải mái.", level: "HSK 2" },
      { character: "戴", pinyin: "dài", meaning: "Đeo (kính, mũ, đồng hồ)", example: "他戴着眼镜。", examplePinyin: "tā dài zhe yǎnjìng.", exampleTranslation: "Anh ấy đang đeo kính.", level: "HSK 3" },
      { character: "黑色", pinyin: "hēisè", meaning: "Màu đen", example: "他今天穿着一身黑色的衣服。", examplePinyin: "tā jīntiān chuān zhe yīshēn hēisè de yīfu.", exampleTranslation: "Hôm nay anh ấy mặc một bộ đồ màu đen.", level: "HSK 2" },
      { character: "白色", pinyin: "báisè", meaning: "Màu trắng", example: "那是白色的墙。", examplePinyin: "nà shì báisè de qiáng.", exampleTranslation: "Đó là bức tường màu trắng.", level: "HSK 2" },
      { character: "紫色", pinyin: "zǐsè", meaning: "Màu tím", example: "她最喜欢的颜色是紫色。", examplePinyin: "tā zuì xǐhuan de yánsè shì zǐsè.", exampleTranslation: "Màu sắc cô ấy thích nhất là màu tím.", level: "HSK 4" },
    ],
    grammar: [
      {
        rule: "Cấu trúc 'zhe' biểu thị trạng thái đang diễn ra",
        description: "Động từ + 着 (Diễn tả trạng thái của động tác hoặc sự tồn tại).",
        examples: [
          { chinese: "门开着。", pinyin: "mén kāi zhe.", translation: "Cửa đang mở." },
          { chinese: "他穿着一件黑色的衣服。", pinyin: "tā chuān zhe yī jiàn hēisè de yīfu.", translation: "Anh ấy đang mặc một bộ đồ màu đen." },
        ],
      },
    ],
  },
  {
    id: "personality",
    title: "Con người & Tính cách",
    description: "Miêu tả ngoại hình và phẩm chất",
    icon: "Smile",
    level: "HSK 2-4",
    radicals: [
      { character: "亻", pinyin: "rén", meaning: "Bộ Nhân (người)" },
      { character: "心", pinyin: "xīn", meaning: "Bộ Tâm (tâm hồn/tình cảm)" },
    ],
    vocabulary: [
      { character: "漂亮", pinyin: "piàoliang", meaning: "Xinh đẹp", example: "她长得真漂亮。", examplePinyin: "tā zhǎng de zhēn piàoliang.", exampleTranslation: "Cô ấy trông thật xinh đẹp.", level: "HSK 1" },
      { character: "帅", pinyin: "shuài", meaning: "Đẹp trai", example: "那个男生很帅。", examplePinyin: "nàge nánshēng hěn shuài.", exampleTranslation: "Chàng trai đó rất đẹp trai.", level: "HSK 3" },
      { character: "聪明", pinyin: "cōngmíng", meaning: "Thông minh", example: "你是个聪明的孩子。", examplePinyin: "nǐ shì ge cōngmíng de háizi.", exampleTranslation: "Con là một đứa trẻ thông minh.", level: "HSK 2" },
      { character: "努力", pinyin: "nǔlì", meaning: "Nỗ lực/Chăm chỉ", example: "他学习非常努力。", examplePinyin: "tā xuéxí fēicháng nǔlì.", exampleTranslation: "Anh ấy học tập cực kỳ chăm chỉ.", level: "HSK 3" },
      { character: "幽默", pinyin: "yōumò", meaning: "Hài hước", example: "张老师很幽默。", examplePinyin: "zhāng lǎoshī hěn yōumò.", exampleTranslation: "Thầy Trương rất hài hước.", level: "HSK 4" },
      { character: "友善", pinyin: "yǒushàn", meaning: "Thân thiện", example: "这里的邻居都很友善。", examplePinyin: "zhèlǐ de línjū dōu hěn yǒushàn.", exampleTranslation: "Hàng xóm ở đây đều rất thân thiện.", level: "HSK 4" },
      { character: "害羞", pinyin: "hàixiū", meaning: "Xấu hổ/Nhút nhát", example: "她是个害羞的女孩。", examplePinyin: "tā shì ge hàixiū de nǚhái.", exampleTranslation: "Cô ấy là một cô gái nhút nhát.", level: "HSK 4" },
    ],
    grammar: [
      {
        rule: "Cách dùng phó từ chỉ mức độ 'hěn', 'fēicháng', 'tèbié'",
        description: "Phó từ + Tính từ (Nhấn mạnh mức độ).",
        examples: [
          { chinese: "他很高。", pinyin: "tā hěn gāo.", translation: "Anh ấy rất cao." },
          { chinese: "这里的风景非常美。", pinyin: "zhè lǐ de fēngjǐng fēicháng měi.", translation: "Phong cảnh ở đây cực kỳ đẹp." },
          { chinese: "我特别喜欢吃中国菜。", pinyin: "wǒ tèbié xǐhuan chī zhōngguócài.", translation: "Tôi đặc biệt thích ăn món Trung Quốc." },
        ],
      },
    ],
  },
  {
    id: "daily-routine",
    title: "Hoạt động hàng ngày",
    description: "Kể về một ngày của bạn",
    icon: "Calendar",
    level: "HSK 1-3",
    radicals: [
      { character: "日", pinyin: "rì", meaning: "Bộ Nhật (ngày)" },
      { character: "夕", pinyin: "xī", meaning: "Bộ Tịch (buổi tối)" },
    ],
    vocabulary: [
      { character: "起床", pinyin: "qǐchuáng", meaning: "Thức dậy", example: "我早上七点起床。", examplePinyin: "wǒ zǎoshang qī diǎn qǐchuáng.", exampleTranslation: "Tôi thức dậy lúc 7 giờ sáng.", level: "HSK 2" },
      { character: "睡觉", pinyin: "shuìjiào", meaning: "Đi ngủ", example: "你要早点睡觉。", examplePinyin: "nǐ yào zǎodiǎn shuìjiào.", exampleTranslation: "Bạn nên đi ngủ sớm một chút.", level: "HSK 1" },
      { character: "洗澡", pinyin: "xǐzǎo", meaning: "Tắm", example: "我每天晚上洗澡。", examplePinyin: "wǒ měitiān wǎnshang xǐzǎo.", exampleTranslation: "Tôi tắm mỗi tối.", level: "HSK 3" },
      { character: "刷牙", pinyin: "shuāyá", meaning: "Đánh răng", example: "饭后要刷牙。", examplePinyin: "fànhòu yào shuāyá.", exampleTranslation: "Sau khi ăn cơm nên đánh răng.", level: "HSK 3" },
      { character: "上班", pinyin: "shàngbān", meaning: "Đi làm", example: "他八点开始上班。", examplePinyin: "tā bā diǎn kāishǐ shàngbān.", exampleTranslation: "Anh ấy bắt đầu đi làm lúc 8 giờ.", level: "HSK 2" },
      { character: "下班", pinyin: "xiàbān", meaning: "Tan làm", example: "今天我很晚才下班。", examplePinyin: "jīntiān wǒ hěn wǎn cái xiàbān.", exampleTranslation: "Hôm nay mãi muộn tôi mới tan làm.", level: "HSK 2" },
      { character: "锻炼", pinyin: "duànliàn", meaning: "Tập thể dục", example: "我去公园锻炼。", examplePinyin: "wǒ qù gōngyuán duànliàn.", exampleTranslation: "Tôi đi công viên tập thể dục.", level: "HSK 3" },
    ],
    grammar: [
      {
        rule: "Cấu trúc 'xiān... ránhòu...' (Trước tiên... sau đó...)",
        description: "Diễn tả trình tự các hành động.",
        examples: [
          { chinese: "我先吃饭，然后去学校。", pinyin: "wǒ xiān chīfàn, ránhòu qù xuéxiào.", translation: "Tôi ăn cơm trước, sau đó đi học." },
          { chinese: "我先洗澡，然后睡觉。", pinyin: "wǒ xiān xǐzǎo, ránhòu shuìjiào.", translation: "Tôi tắm trước, sau đó đi ngủ." },
        ],
      },
    ],
  },
  {
    id: "media-news",
    title: "Truyền thông & Tin tức",
    description: "Cập nhật thông tin thế giới",
    icon: "Tv",
    level: "HSK 3-5",
    radicals: [
      { character: "讠", pinyin: "yán", meaning: "Bộ Ngôn (ngôn ngữ/nói)" },
      { character: "目", pinyin: "mù", meaning: "Bộ Mục (mắt)" },
    ],
    vocabulary: [
      { character: "新闻", pinyin: "xīnwén", meaning: "Tin tức", example: "你听今天的新闻了吗？", examplePinyin: "nǐ tīng jīntiān de xīnwén le ma?", exampleTranslation: "Bạn đã nghe tin tức hôm nay chưa?", level: "HSK 3" },
      { character: "记者", pinyin: "jìzhě", meaning: "Phóng viên", example: "他是一名体育记者。", examplePinyin: "tā shì yī míng tǐyù jìzhě.", exampleTranslation: "Anh ấy là một phóng viên thể thao.", level: "HSK 4" },
      { character: "采访", pinyin: "cǎifǎng", meaning: "Phỏng vấn", example: "我们要去采访那位科学家。", examplePinyin: "wǒmen yào qù cǎifǎng nà wèi kēxuéjiā.", exampleTranslation: "Chúng tôi sẽ đi phỏng vấn nhà khoa học đó.", level: "HSK 5" },
      { character: "广播", pinyin: "guǎngbō", meaning: "Phát thanh", example: "车里正在播放广播。", examplePinyin: "chē lǐ zhèngzài bōfàng guǎngbō.", exampleTranslation: "Trong xe đang phát thanh.", level: "HSK 4" },
      { character: "电视", pinyin: "diànshì", meaning: "Tivi", example: "不要看太久电视。", examplePinyin: "bùyào kàn tài jiǔ diànshì.", exampleTranslation: "Đừng xem tivi quá lâu.", level: "HSK 1" },
      { character: "杂志", pinyin: "zázhì", meaning: "Tạp chí", example: "这本杂志很有意思。", examplePinyin: "zhè běn zázhì hěn yǒuyìsi.", exampleTranslation: "Cuốn tạp chí này rất thú vị.", level: "HSK 4" },
      { character: "社交", pinyin: "shèjiāo", meaning: "Giao tiếp xã hội", example: "他的社交能力很强。", examplePinyin: "tā de shèjiāo nénglì hěn qiáng.", exampleTranslation: "Khả năng giao tiếp xã hội của anh ấy rất tốt.", level: "HSK 5" },
    ],
    grammar: [
      {
        rule: "Cấu trúc ' chúle... hái... ' (Ngoài... còn...)",
        description: "Diễn tả sự bổ sung.",
        examples: [
          { chinese: "除了看电视，我还喜欢听音乐。", pinyin: "chúle kàn diànshì, wǒ hái xǐhuan tīng yīnyuè.", translation: "Ngoài xem tivi, tôi còn thích nghe nhạc." },
          { chinese: "除了他，我还要请张明。", pinyin: "chúle tā, wǒ hái yào qǐng zhāngmíng.", translation: "Ngoài anh ấy ra, tôi còn muốn mời Trương Minh." },
        ],
      },
    ],
  },
  {
    id: "numbers",
    title: "Số đếm & Số lượng",
    description: "Cách đếm số và các lượng từ cơ bản",
    icon: "Hash",
    level: "HSK 1",
    radicals: [
      { character: "一", pinyin: "yī", meaning: "Số 1" },
      { character: "十", pinyin: "shí", meaning: "Số 10" },
    ],
    vocabulary: [
      { character: "一", pinyin: "yī", meaning: "Số 1", example: "我有一本书。", examplePinyin: "wǒ yǒu yī běn shū.", exampleTranslation: "Tôi có một quyển sách.", level: "HSK 1" },
      { character: "二", pinyin: "èr", meaning: "Số 2", example: "二月有二十八天。", examplePinyin: "èr yuè yǒu èrshíbā tiān.", exampleTranslation: "Tháng hai có 28 ngày.", level: "HSK 1" },
      { character: "三", pinyin: "sān", meaning: "Số 3", example: "我有三个哥哥。", examplePinyin: "wǒ yǒu sān ge gēge.", exampleTranslation: "Tôi có ba người anh trai.", level: "HSK 1" },
      { character: "十", pinyin: "shí", meaning: "Số 10", example: "今天十号。", examplePinyin: "jīntiān shí hào.", exampleTranslation: "Hôm nay ngày 10.", level: "HSK 1" },
      { character: "百", pinyin: "bǎi", meaning: "Trăm", example: "这里有一百个人。", examplePinyin: "zhèlǐ yǒu yī bǎi gè rén.", exampleTranslation: "Ở đây có 100 người.", level: "HSK 1" },
    ],
    grammar: [
      {
        rule: "Cách dùng lượng từ '个' (ge)",
        description: "Lượng từ phổ biến nhất, dùng cho người và nhiều đồ vật.",
        examples: [
          { chinese: "一个人", pinyin: "yī ge rén", translation: "Một người" },
          { chinese: "三个苹果", pinyin: "sān ge píngguǒ", translation: "Ba quả táo" },
        ],
      },
    ],
  },
];
