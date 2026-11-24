export interface VocabWord {
  id: string;
  hanzi: string;
  pinyin: string;
  sinoVietnamese: string;
  meaning: string;
  hskLevel: number;
  category: string;
  radical: string;
  example: {
    cn: string;
    pinyin: string;
    vi: string;
  };
}

export const VOCABULARY_DATA: VocabWord[] = [
  {
    id: "hsk1-001",
    hanzi: "你",
    pinyin: "nǐ",
    sinoVietnamese: "Nhĩ",
    meaning: "Bạn, anh, chị (ngôi thứ 2)",
    hskLevel: 1,
    category: "Chào hỏi & Đại từ",
    radical: "亻 (Bộ Nhân đứng)",
    example: {
      cn: "你好！很高兴认识你。",
      pinyin: "Nǐ hǎo! Hěn gāoxìng rènshí nǐ.",
      vi: "Chào bạn! Rất vui được quen biết bạn."
    }
  },
  {
    id: "hsk1-002",
    hanzi: "好",
    pinyin: "hǎo",
    sinoVietnamese: "Hảo",
    meaning: "Tốt, đẹp, khỏe, được",
    hskLevel: 1,
    category: "Tính từ cơ bản",
    radical: "女 (Bộ Nữ)",
    example: {
      cn: "今天天气很好。",
      pinyin: "Jīntiān tiānqì hěn hǎo.",
      vi: "Thời tiết hôm nay rất đẹp."
    }
  },
  {
    id: "hsk1-003",
    hanzi: "学",
    pinyin: "xué",
    sinoVietnamese: "Học",
    meaning: "Học tập, nghiên cứu (trong 学习)",
    hskLevel: 1,
    category: "Học tập",
    radical: "子 (Bộ Tử)",
    example: {
      cn: "学汉语不太难！",
      pinyin: "Xué hànyǔ bú tài nán!",
      vi: "Học tiếng Hán không quá khó!"
    }
  },
  {
    id: "hsk1-004",
    hanzi: "汉",
    pinyin: "hàn",
    sinoVietnamese: "Hán",
    meaning: "Hán (chữ Hán, tiếng Hán, dân tộc Hán)",
    hskLevel: 1,
    category: "Ngôn ngữ",
    radical: "氵 (Bộ Thủy)",
    example: {
      cn: "汉字很有意思。",
      pinyin: "Hànzì hěn yǒu yìsi.",
      vi: "Chữ Hán rất thú vị."
    }
  },
  {
    id: "hsk1-005",
    hanzi: "难",
    pinyin: "nán",
    sinoVietnamese: "Nan",
    meaning: "Khó, vất vả, khó khăn",
    hskLevel: 1,
    category: "Tính từ",
    radical: "隹 (Bộ Chuy / Chim đuôi ngắn)",
    example: {
      cn: "发音不太难。",
      pinyin: "Fāyīn bú tài nán.",
      vi: "Phát âm không khó lắm."
    }
  },
  {
    id: "hsk1-006",
    hanzi: "谢",
    pinyin: "xiè",
    sinoVietnamese: "Tạ",
    meaning: "Cảm ơn, cảm tạ (trong 谢谢)",
    hskLevel: 1,
    category: "Giao tiếp xã giao",
    radical: "讠 (Bộ Ngôn)",
    example: {
      cn: "太谢谢你了！",
      pinyin: "Tài xièxie nǐ le!",
      vi: "Cảm ơn bạn nhiều lắm!"
    }
  },
  {
    id: "hsk1-007",
    hanzi: "爱",
    pinyin: "ài",
    sinoVietnamese: "Ái",
    meaning: "Yêu, thương, thích",
    hskLevel: 1,
    category: "Động từ cảm xúc",
    radical: "爫 (Bộ Trảo)",
    example: {
      cn: "我爱学中文。",
      pinyin: "Wǒ ài xué zhōngwén.",
      vi: "Tôi yêu thích học tiếng Trung."
    }
  },
  {
    id: "hsk1-008",
    hanzi: "吃",
    pinyin: "chī",
    sinoVietnamese: "Ngật",
    meaning: "Ăn",
    hskLevel: 1,
    category: "Ẩm thực & Sinh hoạt",
    radical: "口 (Bộ Khẩu)",
    example: {
      cn: "你想吃什么？",
      pinyin: "Nǐ xiǎng chī shénme?",
      vi: "Bạn muốn ăn món gì?"
    }
  },
  {
    id: "hsk1-009",
    hanzi: "喝",
    pinyin: "hē",
    sinoVietnamese: "Hát",
    meaning: "Uống",
    hskLevel: 1,
    category: "Ẩm thực & Sinh hoạt",
    radical: "口 (Bộ Khẩu)",
    example: {
      cn: "请喝一杯热茶。",
      pinyin: "Qǐng hē yī bēi rè chá.",
      vi: "Xin mời uống một ly trà nóng."
    }
  },
  {
    id: "hsk1-010",
    hanzi: "茶",
    pinyin: "chá",
    sinoVietnamese: "Trà",
    meaning: "Trà, chè",
    hskLevel: 1,
    category: "Ẩm thực & Sinh hoạt",
    radical: "艹 (Bộ Thảo)",
    example: {
      cn: "中国茶很好喝。",
      pinyin: "Zhōngguó chá hěn hǎohē.",
      vi: "Trà Trung Quốc rất ngon."
    }
  },
  {
    id: "hsk2-001",
    hanzi: "朋",
    pinyin: "péng",
    sinoVietnamese: "Bằng",
    meaning: "Bạn bè (trong 朋友)",
    hskLevel: 2,
    category: "Xã hội",
    radical: "月 (Bộ Nguyệt)",
    example: {
      cn: "他是我的好朋友。",
      pinyin: "Tā shì wǒ de hǎo péngyou.",
      vi: "Cậu ấy là bạn tốt của tôi."
    }
  },
  {
    id: "hsk2-002",
    hanzi: "高",
    pinyin: "gāo",
    sinoVietnamese: "Cao",
    meaning: "Cao, lớn, vui (trong 高兴)",
    hskLevel: 2,
    category: "Tính từ",
    radical: "高 (Bộ Cao)",
    example: {
      cn: "认识你很高兴。",
      pinyin: "Rènshí nǐ hěn gāoxìng.",
      vi: "Quen biết bạn tôi rất vui."
    }
  }
];
