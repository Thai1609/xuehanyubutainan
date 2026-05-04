export interface DictionaryEntry {
  id: string;
  word: string;
  traditional?: string;
  pinyin: string;
  meaning: string;
  examples: {
    chinese: string;
    traditional?: string;
    pinyin: string;
    translation: string;
  }[];
}

export const dictionaryData: DictionaryEntry[] = [
  {
    id: "dict_1",
    word: "汉",
    traditional: "漢",
    pinyin: "hàn",
    meaning: "tiếng Hán/Hán; dân tộc Hán; đàn ông; nam tử; triều đại Hậu Hán...",
    examples: [
      {
        chinese: "由于汉字是象形文字，所以很难学。",
        traditional: "由於漢字是象形文字，所以很難學。",
        pinyin: "Yóuyú hànzì shì xiàngxíng wénzì, suǒyǐ hěn nán xué.",
        translation: "Vì chữ Hán là chữ tượng hình nên rất khó học."
      }
    ]
  },
  {
    id: "dict_2",
    word: "薪水",
    traditional: "薪水",
    pinyin: "xīnshuǐ",
    meaning: "Lương, tiền lương",
    examples: [
      {
        chinese: "他对目前的薪水不太满意。",
        traditional: "他对目前的薪水不太满意。",
        pinyin: "tā duì mùqián de xīnshuǐ bù tài mǎnyì.",
        translation: "Anh ấy không hài lòng với mức lương hiện tại của mình."
      }
    ]
  },
  {
    id: "dict_3",
    word: "水",
    pinyin: "shuǐ",
    meaning: "Nước",
    examples: [
      {
        chinese: "我们要多喝水。",
        pinyin: "Wǒmen yào duō hē shuǐ.",
        translation: "Chúng ta cần uống nhiều nước."
      }
    ]
  },
  {
    id: "dict_4",
    word: "爱",
    traditional: "愛",
    pinyin: "ài",
    meaning: "Yêu, yêu thương",
    examples: [
      {
        chinese: "我爱你。",
        pinyin: "Wǒ ài nǐ.",
        translation: "Tôi yêu bạn."
      }
    ]
  },
  {
    id: "dict_5",
    word: "学习",
    traditional: "學習",
    pinyin: "xuéxí",
    meaning: "Học tập, học",
    examples: [
      {
        chinese: "他在北京大学学习。",
        pinyin: "Tā zài Běijīng Dàxué xuéxí.",
        translation: "Anh ấy học ở Đại học Bắc Kinh."
      }
    ]
  },
  {
    id: "dict_6",
    word: "咖啡",
    pinyin: "kāfēi",
    meaning: "Cà phê",
    examples: [
      {
        chinese: "你喝咖啡吗？",
        pinyin: "Nǐ hē kāfēi ma?",
        translation: "Bạn uống cà phê không?"
      }
    ]
  },
  {
    id: "dict_7",
    word: "老师",
    traditional: "老師",
    pinyin: "lǎoshī",
    meaning: "Thầy giáo, cô giáo, giáo viên",
    examples: [
      {
        chinese: "张老师在家吗？",
        pinyin: "Zhāng lǎoshī zài jiā ma?",
        translation: "Thầy Trương có ở nhà không?"
      }
    ]
  },
  {
    id: "dict_8",
    word: "学生",
    traditional: "學生",
    pinyin: "xuésheng",
    meaning: "Học sinh, sinh viên",
    examples: [
      {
        chinese: "你弟弟是学生吗？",
        pinyin: "Nǐ dìdi shì xuésheng ma?",
        translation: "Em trai bạn là học sinh phải không?"
      }
    ]
  },
  {
    id: "dict_9",
    word: "身体",
    traditional: "身體",
    pinyin: "shēntǐ",
    meaning: "Thân thể, sức khỏe",
    examples: [
      {
        chinese: "你身体好吗？",
        pinyin: "Nǐ shēntǐ hǎo ma?",
        translation: "Sức khỏe bạn có tốt không?"
      }
    ]
  },
  {
    id: "dict_10",
    word: "喊",
    pinyin: "hǎn",
    meaning: "hô; la; hét; la to; quát to; hô hoán/kêu; gọi (người)/gọi; kêu; xưng...",
    examples: []
  },
  {
    id: "dict_11",
    word: "汗",
    pinyin: "hàn",
    meaning: "mồ hôi",
    examples: []
  },
  {
    id: "dict_12",
    word: "汗",
    pinyin: "hán",
    meaning: "Khả Hàn; tên Hãn; họ Hãn",
    examples: []
  },
  {
    id: "dict_13",
    word: "含",
    pinyin: "hán",
    meaning: "ngậm/chứa; có/ngầm; kín đáo; thầm; trong lòng",
    examples: []
  },
  {
    id: "dict_14",
    word: "韩",
    traditional: "韓",
    pinyin: "hán",
    meaning: "Hàn; Hàn Quốc/họ Hàn/Hàn (tên nước thời Chu, nay thuộc ...",
    examples: []
  },
  {
    id: "dict_15",
    word: "寒",
    pinyin: "hán",
    meaning: "lạnh; rét; lạnh lẽo/nghèo; nghèo khó; bần hàn; nghèo túng/khiê...",
    examples: []
  },
  {
    id: "dict_16",
    word: "工作",
    pinyin: "gōngzuò",
    meaning: "Làm việc, công việc",
    examples: [
      {
        chinese: "你工作忙吗？",
        pinyin: "Nǐ gōngzuò máng ma?",
        translation: "Công việc của bạn có bận không?"
      }
    ]
  },
  {
    id: "dict_17",
    word: "名字",
    pinyin: "míngzi",
    meaning: "Tên",
    examples: [
      {
        chinese: "你叫什么名字？",
        pinyin: "Nǐ jiào shénme míngzi?",
        translation: "Bạn tên là gì?"
      }
    ]
  },
  {
    id: "dict_18",
    word: "认识",
    traditional: "認識",
    pinyin: "rènshi",
    meaning: "Quen biết, biết",
    examples: [
      {
        chinese: "认识你很高兴。",
        pinyin: "Rènshi nǐ hěn gāoxìng.",
        translation: "Quen biết bạn tôi rất vui."
      }
    ]
  },
  {
    id: "dict_19",
    word: "汉语",
    traditional: "漢語",
    pinyin: "Hànyǔ",
    meaning: "Hán ngữ, tiếng Trung",
    examples: [
      {
        chinese: "她在学习汉语。",
        pinyin: "Tā zài xuéxí Hànyǔ.",
        translation: "Cô ấy đang học tiếng Trung."
      }
    ]
  },
  {
    id: "dict_20",
    word: "啊",
    pinyin: "a",
    meaning: "thán từ, trợ từ ngữ khí",
    examples: []
  },
  {
    id: "dict_21",
    word: "哎呀",
    pinyin: "āiyā",
    meaning: "Ái chà, ôi chao!",
    examples: []
  },
  {
    id: "dict_22",
    word: "爱人",
    pinyin: "àiren",
    meaning: "vợ, chồng, người yêu",
    examples: []
  },
  {
    id: "dict_23",
    word: "安静",
    pinyin: "ānjìng",
    meaning: "yên tĩnh, yên lặng",
    examples: []
  },
  {
    id: "dict_24",
    word: "安全",
    pinyin: "ānquán",
    meaning: "an toàn",
    examples: []
  },
  {
    id: "dict_25",
    word: "按照",
    pinyin: "ànzhào",
    meaning: "dựa theo, chiếu theo",
    examples: []
  },
  {
    id: "dict_26",
    word: "八",
    pinyin: "bā",
    meaning: "tám",
    examples: []
  },
  {
    id: "dict_27",
    word: "把",
    pinyin: "bǎ",
    meaning: "giới từ",
    examples: []
  },
  {
    id: "dict_28",
    word: "吧",
    pinyin: "ba",
    meaning: "trợ từ ngữ khí (nhé, vậy, nhỉ, đi, nào)",
    examples: []
  },
  {
    id: "dict_29",
    word: "爸爸",
    pinyin: "bàba",
    meaning: "cha, ba, bố",
    examples: []
  },
  {
    id: "dict_30",
    word: "白",
    pinyin: "bái",
    meaning: "trắng",
    examples: []
  },
  {
    id: "dict_31",
    word: "白天",
    pinyin: "báitiān",
    meaning: "ban ngày",
    examples: []
  },
  {
    id: "dict_32",
    word: "百",
    pinyin: "bǎi",
    meaning: "trăm",
    examples: []
  },
  {
    id: "dict_33",
    word: "班",
    pinyin: "bān",
    meaning: "lớp",
    examples: []
  },
  {
    id: "dict_34",
    word: "搬",
    pinyin: "bān",
    meaning: "bê, xách, mang, dời, chuyển",
    examples: []
  },
  {
    id: "dict_35",
    word: "办",
    pinyin: "bàn",
    meaning: "làm",
    examples: []
  },
  {
    id: "dict_36",
    word: "办法",
    pinyin: "bànfǎ",
    meaning: "cách, biện pháp",
    examples: []
  },
  {
    id: "dict_37",
    word: "办公",
    pinyin: "bàngōng",
    meaning: "làm việc",
    examples: []
  },
  {
    id: "dict_38",
    word: "半",
    pinyin: "bàn",
    meaning: "một nửa, rưỡi",
    examples: []
  },
  {
    id: "dict_39",
    word: "帮",
    pinyin: "bāng",
    meaning: "giúp",
    examples: []
  },
  {
    id: "dict_40",
    word: "帮忙",
    pinyin: "bāngmáng",
    meaning: "giúp đỡ",
    examples: []
  },
  {
    id: "dict_41",
    word: "帮助",
    pinyin: "bāngzhù",
    meaning: "giúp, giúp đỡ",
    examples: []
  },
  {
    id: "dict_42",
    word: "饱",
    pinyin: "bǎo",
    meaning: "no",
    examples: []
  },
  {
    id: "dict_43",
    word: "包",
    pinyin: "bāo",
    meaning: "cái bao, gói",
    examples: []
  },
  {
    id: "dict_44",
    word: "包裹",
    pinyin: "bāoguǒ",
    meaning: "bưu phẩm, gói, đồ đóng gói, bưu kiện",
    examples: []
  },
  {
    id: "dict_45",
    word: "包子",
    pinyin: "bāozi",
    meaning: "bánh bao",
    examples: []
  },
  {
    id: "dict_46",
    word: "保重",
    pinyin: "bǎozhòng",
    meaning: "cẩn thận giữ gìn, bảo trọng",
    examples: []
  },
  {
    id: "dict_47",
    word: "报",
    pinyin: "bào",
    meaning: "báo",
    examples: []
  },
  {
    id: "dict_48",
    word: "报名",
    pinyin: "bàomíng",
    meaning: "đăng ký, ghi tên, ghi danh",
    examples: []
  },
  {
    id: "dict_49",
    word: "抱歉",
    pinyin: "bàoqiàn",
    meaning: "có lỗi, hối lỗi",
    examples: []
  },
  {
    id: "dict_50",
    word: "本",
    pinyin: "běn",
    meaning: "quyển, cuốn (lượng từ)",
    examples: []
  },
  {
    id: "dict_51",
    word: "本子",
    pinyin: "běnzi",
    meaning: "tập, vở",
    examples: []
  },
  {
    id: "dict_52",
    word: "比",
    pinyin: "bǐ",
    meaning: "hơn / so với, đấu",
    examples: []
  },
  {
    id: "dict_53",
    word: "比较",
    pinyin: "bǐjiào",
    meaning: "tương đối / so sánh",
    examples: []
  },
  {
    id: "dict_54",
    word: "比赛",
    pinyin: "bǐsài",
    meaning: "đấu, thi đấu, trận đấu",
    examples: []
  },
  {
    id: "dict_55",
    word: "笔",
    pinyin: "bǐ",
    meaning: "viết, bút",
    examples: []
  },
  {
    id: "dict_56",
    word: "笔试",
    pinyin: "bǐshì",
    meaning: "thi viết",
    examples: []
  },
  {
    id: "dict_57",
    word: "毕业",
    pinyin: "bì yè",
    meaning: "tốt nghiệp",
    examples: []
  },
  {
    id: "dict_58",
    word: "表",
    pinyin: "biǎo",
    meaning: "đồng hồ đeo tay, ống mạch",
    examples: []
  },
  {
    id: "dict_59",
    word: "别",
    pinyin: "bié",
    meaning: "đừng, chớ / khác",
    examples: []
  },
  {
    id: "dict_60",
    word: "别的",
    pinyin: "biéde",
    meaning: "cái khác, người khác",
    examples: []
  },
  {
    id: "dict_61",
    word: "冰",
    pinyin: "bīng",
    meaning: "nước đá, băng",
    examples: []
  },
  {
    id: "dict_62",
    word: "冰箱",
    pinyin: "bīngxiāng",
    meaning: "tủ lạnh",
    examples: []
  },
  {
    id: "dict_63",
    word: "病",
    pinyin: "bìng",
    meaning: "bệnh, đau ốm",
    examples: []
  },
  {
    id: "dict_64",
    word: "病房",
    pinyin: "bìngfáng",
    meaning: "phòng bệnh nhân",
    examples: []
  },
  {
    id: "dict_65",
    word: "病人",
    pinyin: "bìngrén",
    meaning: "người bệnh",
    examples: []
  },
  {
    id: "dict_66",
    word: "不错",
    pinyin: "búcuò",
    meaning: "không sai, không tồi, tốt",
    examples: []
  },
  {
    id: "dict_67",
    word: "不但",
    pinyin: "búdàn",
    meaning: "không những, chẳng những",
    examples: []
  },
  {
    id: "dict_68",
    word: "而且",
    pinyin: "érqiě",
    meaning: "mà còn, hơn nữa",
    examples: []
  },
  {
    id: "dict_69",
    word: "不用",
    pinyin: "búyòng",
    meaning: "không cần, khỏi phải",
    examples: []
  },
  {
    id: "dict_70",
    word: "补",
    pinyin: "bǔ",
    meaning: "bổ sung, bù đắp",
    examples: []
  },
  {
    id: "dict_71",
    word: "不",
    pinyin: "bù",
    meaning: "không",
    examples: []
  },
  {
    id: "dict_72",
    word: "不好意思",
    pinyin: "bù hǎoyìsi",
    meaning: "áy náy, xấu hổ",
    examples: []
  },
  {
    id: "dict_73",
    word: "不如",
    pinyin: "bùrú",
    meaning: "không bằng",
    examples: []
  },
  {
    id: "dict_74",
    word: "布置",
    pinyin: "bùzhì",
    meaning: "trang trí, bố trí",
    examples: []
  },
  {
    id: "dict_75",
    word: "猜",
    pinyin: "cāi",
    meaning: "đoán",
    examples: []
  },
  {
    id: "dict_76",
    word: "才",
    pinyin: "cái",
    meaning: "mới (phó từ)",
    examples: []
  },
  {
    id: "dict_77",
    word: "菜",
    pinyin: "cài",
    meaning: "rau, món ăn",
    examples: []
  },
  {
    id: "dict_78",
    word: "参观",
    pinyin: "cānguān",
    meaning: "đi thăm, tham quan",
    examples: []
  },
  {
    id: "dict_79",
    word: "参加",
    pinyin: "cānjiā",
    meaning: "tham gia",
    examples: []
  },
  {
    id: "dict_80",
    word: "餐厅",
    pinyin: "cāntīng",
    meaning: "phòng ăn",
    examples: []
  },
  {
    id: "dict_81",
    word: "层",
    pinyin: "céng",
    meaning: "tầng (lầu)",
    examples: []
  },
  {
    id: "dict_82",
    word: "茶",
    pinyin: "chá",
    meaning: "trà",
    examples: []
  },
  {
    id: "dict_83",
    word: "查",
    pinyin: "chá",
    meaning: "xét, rà soát, tra",
    examples: []
  },
  {
    id: "dict_84",
    word: "差",
    pinyin: "chà",
    meaning: "kém, chênh lệch",
    examples: []
  },
  {
    id: "dict_85",
    word: "长",
    pinyin: "cháng",
    meaning: "dài",
    examples: []
  },
  {
    id: "dict_86",
    word: "尝",
    pinyin: "cháng",
    meaning: "nếm, thử",
    examples: []
  },
  {
    id: "dict_87",
    word: "常常",
    pinyin: "chángcháng",
    meaning: "thường, luôn (luôn)",
    examples: []
  },
  {
    id: "dict_88",
    word: "唱",
    pinyin: "chàng",
    meaning: "hát",
    examples: []
  },
  {
    id: "dict_89",
    word: "超重",
    pinyin: "chāozhòng",
    meaning: "quá tải, quá trọng lượng quy định",
    examples: []
  },
  {
    id: "dict_90",
    word: "车",
    pinyin: "chē",
    meaning: "xe",
    examples: []
  },
  {
    id: "dict_91",
    word: "衬衫",
    pinyin: "chènshān",
    meaning: "áo sơ mi",
    examples: []
  },
  {
    id: "dict_92",
    word: "趁",
    pinyin: "chèn",
    meaning: "nhân, thừa dịp",
    examples: []
  },
  {
    id: "dict_93",
    word: "成绩",
    pinyin: "chéngjì",
    meaning: "thành tích",
    examples: []
  },
  {
    id: "dict_94",
    word: "城市",
    pinyin: "chéngshì",
    meaning: "thành thị, thành phố",
    examples: []
  },
  {
    id: "dict_95",
    word: "吃",
    pinyin: "chī",
    meaning: "ăn",
    examples: []
  },
  {
    id: "dict_96",
    word: "冲洗",
    pinyin: "chōngxǐ",
    meaning: "rửa, dội rửa",
    examples: []
  },
  {
    id: "dict_97",
    word: "重新",
    pinyin: "chóngxīn",
    meaning: "bắt đầu lại, (làm) lại từ đầu",
    examples: []
  },
  {
    id: "dict_98",
    word: "出",
    pinyin: "chū",
    meaning: "ra, xuất bản, phát hành",
    examples: []
  },
  {
    id: "dict_99",
    word: "出差",
    pinyin: "chūchāi",
    meaning: "đi công tác",
    examples: []
  },
  {
    id: "dict_100",
    word: "出境",
    pinyin: "chūjìng",
    meaning: "xuất cảnh",
    examples: []
  },
  {
    id: "dict_101",
    word: "出院",
    pinyin: "chūyuàn",
    meaning: "xuất viện, ra viện",
    examples: []
  },
  {
    id: "dict_102",
    word: "出租汽车",
    pinyin: "chūzū qìchē",
    meaning: "xe cho thuê, xe taxi",
    examples: []
  },
  {
    id: "dict_103",
    word: "除了...以外",
    pinyin: "chúle... yǐwài",
    meaning: "ngoài ... ra",
    examples: []
  },
  {
    id: "dict_104",
    word: "穿",
    pinyin: "chuān",
    meaning: "mặc, mang",
    examples: []
  },
  {
    id: "dict_105",
    word: "船",
    pinyin: "chuán",
    meaning: "xuồng, ghe, tàu",
    examples: []
  },
  {
    id: "dict_106",
    word: "窗户",
    pinyin: "chuānghu",
    meaning: "cửa sổ",
    examples: []
  },
  {
    id: "dict_107",
    word: "窗口",
    pinyin: "chuāngkǒu",
    meaning: "cửa sổ",
    examples: []
  },
  {
    id: "dict_108",
    word: "床",
    pinyin: "chuáng",
    meaning: "giường",
    examples: []
  },
  {
    id: "dict_109",
    word: "抽",
    pinyin: "chōu",
    meaning: "hút, rút",
    examples: []
  },
  {
    id: "dict_110",
    word: "春天",
    pinyin: "chūntiān",
    meaning: "mùa xuân",
    examples: []
  },
  {
    id: "dict_111",
    word: "磁带",
    pinyin: "cídài",
    meaning: "băng từ (băng cát-xét)",
    examples: []
  },
  {
    id: "dict_112",
    word: "词典",
    pinyin: "cídiǎn",
    meaning: "từ điển",
    examples: []
  },
  {
    id: "dict_113",
    word: "次",
    pinyin: "cì",
    meaning: "lần (lượng từ)",
    examples: []
  },
  {
    id: "dict_114",
    word: "从",
    pinyin: "cóng",
    meaning: "từ (giới từ)",
    examples: []
  },
  {
    id: "dict_115",
    word: "打",
    pinyin: "dǎ",
    meaning: "đánh, gọi (điện thoại)",
    examples: []
  },
  {
    id: "dict_116",
    word: "打开",
    pinyin: "dǎ kāi",
    meaning: "mở, bật",
    examples: []
  },
  {
    id: "dict_117",
    word: "打扰",
    pinyin: "dǎrǎo",
    meaning: "quấy rầy, làm phiền",
    examples: []
  },
  {
    id: "dict_118",
    word: "打算",
    pinyin: "dǎsuàn",
    meaning: "dự định, dự tính",
    examples: []
  },
  {
    id: "dict_119",
    word: "打听",
    pinyin: "dǎting",
    meaning: "hỏi thăm, dò la",
    examples: []
  },
  {
    id: "dict_120",
    word: "打针",
    pinyin: "dǎ zhēn",
    meaning: "chích (thuốc), tiêm (thuốc)",
    examples: []
  },
  {
    id: "dict_121",
    word: "大",
    pinyin: "dà",
    meaning: "to, lớn",
    examples: []
  },
  {
    id: "dict_122",
    word: "大家",
    pinyin: "dàjiā",
    meaning: "mọi người",
    examples: []
  },
  {
    id: "dict_123",
    word: "大使馆",
    pinyin: "dàshǐguǎn",
    meaning: "đại sứ quán",
    examples: []
  },
  {
    id: "dict_124",
    word: "大厅",
    pinyin: "dàtīng",
    meaning: "đại sảnh, phòng lễ tân",
    examples: []
  },
  {
    id: "dict_125",
    word: "大学",
    pinyin: "dàxué",
    meaning: "trường đại học, đại học",
    examples: []
  },
  {
    id: "dict_126",
    word: "大夫",
    pinyin: "dàifu",
    meaning: "bác sĩ",
    examples: []
  },
  {
    id: "dict_127",
    word: "带",
    pinyin: "dài",
    meaning: "mang, đem, dẫn",
    examples: []
  },
  {
    id: "dict_128",
    word: "戴",
    pinyin: "dài",
    meaning: "đeo, mặc, đội",
    examples: []
  },
  {
    id: "dict_129",
    word: "耽误",
    pinyin: "dānwu",
    meaning: "chậm trễ, lỡ (việc), mất (thời gian)",
    examples: []
  },
  {
    id: "dict_130",
    word: "蛋糕",
    pinyin: "dàngāo",
    meaning: "bánh trứng, bánh bông lan",
    examples: []
  },
  {
    id: "dict_131",
    word: "当",
    pinyin: "dāng",
    meaning: "làm, đảm đương",
    examples: []
  },
  {
    id: "dict_132",
    word: "当然",
    pinyin: "dāngrán",
    meaning: "đương nhiên",
    examples: []
  },
  {
    id: "dict_133",
    word: "导游",
    pinyin: "dǎoyóu",
    meaning: "người hướng dẫn du lịch",
    examples: []
  },
  {
    id: "dict_134",
    word: "倒",
    pinyin: "dǎo",
    meaning: "ngã, té, đổ",
    examples: []
  },
  {
    id: "dict_135",
    word: "到",
    pinyin: "dào",
    meaning: "đến",
    examples: []
  },
  {
    id: "dict_136",
    word: "的",
    pinyin: "de",
    meaning: "(trợ từ kết cấu)",
    examples: []
  },
  {
    id: "dict_137",
    word: "的话",
    pinyin: "dehuà",
    meaning: "nếu như, nếu",
    examples: []
  },
  {
    id: "dict_138",
    word: "得",
    pinyin: "de",
    meaning: "(trợ từ kết cấu)",
    examples: []
  },
  {
    id: "dict_139",
    word: "地",
    pinyin: "de",
    meaning: "(trợ từ kết cấu)",
    examples: []
  },
  {
    id: "dict_140",
    word: "得",
    pinyin: "děi",
    meaning: "phải, cần",
    examples: []
  },
  {
    id: "dict_141",
    word: "灯",
    pinyin: "dēng",
    meaning: "đèn",
    examples: []
  },
  {
    id: "dict_142",
    word: "等",
    pinyin: "děng",
    meaning: "đợi, chờ",
    examples: []
  },
  {
    id: "dict_143",
    word: "第",
    pinyin: "dì",
    meaning: "thứ, hạng",
    examples: []
  },
  {
    id: "dict_144",
    word: "弟弟",
    pinyin: "dìdi",
    meaning: "em trai",
    examples: []
  },
  {
    id: "dict_145",
    word: "地方",
    pinyin: "dìfang",
    meaning: "chỗ, nơi, địa phương",
    examples: []
  },
  {
    id: "dict_146",
    word: "地图",
    pinyin: "dìtú",
    meaning: "bản đồ",
    examples: []
  },
  {
    id: "dict_147",
    word: "地址",
    pinyin: "dìzhǐ",
    meaning: "địa chỉ",
    examples: []
  },
  {
    id: "dict_148",
    word: "点",
    pinyin: "diǎn",
    meaning: "giờ",
    examples: []
  },
  {
    id: "dict_149",
    word: "点心",
    pinyin: "diǎnxīn",
    meaning: "thức ăn nhẹ, điểm tâm",
    examples: []
  },
  {
    id: "dict_150",
    word: "电",
    pinyin: "diàn",
    meaning: "điện",
    examples: []
  },
  {
    id: "dict_151",
    word: "电话",
    pinyin: "diànhuà",
    meaning: "điện thoại",
    examples: []
  },
  {
    id: "dict_152",
    word: "电视",
    pinyin: "diànshì",
    meaning: "truyền hình",
    examples: []
  },
  {
    id: "dict_153",
    word: "电影",
    pinyin: "diànyǐng",
    meaning: "chiếu bóng, phim",
    examples: []
  },
  {
    id: "dict_154",
    word: "电影院",
    pinyin: "diànyǐngyuàn",
    meaning: "rạp chiếu bóng",
    examples: []
  },
  {
    id: "dict_155",
    word: "丢",
    pinyin: "diū",
    meaning: "mất",
    examples: []
  },
  {
    id: "dict_156",
    word: "冬天",
    pinyin: "dōngtiān",
    meaning: "mùa đông",
    examples: []
  },
  {
    id: "dict_157",
    word: "东西",
    pinyin: "dōngxi",
    meaning: "đồ",
    examples: []
  },
  {
    id: "dict_158",
    word: "懂",
    pinyin: "dǒng",
    meaning: "hiểu, biết",
    examples: []
  },
  {
    id: "dict_159",
    word: "动",
    pinyin: "dòng",
    meaning: "động, nỗi, chuyển",
    examples: []
  },
  {
    id: "dict_160",
    word: "动物园",
    pinyin: "dòngwùyuán",
    meaning: "sở thú, vườn thú",
    examples: []
  },
  {
    id: "dict_161",
    word: "都",
    pinyin: "dōu",
    meaning: "đều",
    examples: []
  },
  {
    id: "dict_162",
    word: "度",
    pinyin: "dù",
    meaning: "độ",
    examples: []
  },
  {
    id: "dict_163",
    word: "短",
    pinyin: "duǎn",
    meaning: "ngắn",
    examples: []
  },
  {
    id: "dict_164",
    word: "锻炼",
    pinyin: "duànliàn",
    meaning: "rèn luyện",
    examples: []
  },
  {
    id: "dict_165",
    word: "队",
    pinyin: "duì",
    meaning: "đội, hàng",
    examples: []
  },
  {
    id: "dict_166",
    word: "对不起",
    pinyin: "duìbuqǐ",
    meaning: "xin lỗi",
    examples: []
  },
  {
    id: "dict_167",
    word: "对",
    pinyin: "duì",
    meaning: "đúng / đối với / đấu (với), đối xử",
    examples: []
  },
  {
    id: "dict_168",
    word: "多",
    pinyin: "duō",
    meaning: "nhiều / bao nhiêu",
    examples: []
  },
  {
    id: "dict_169",
    word: "多少",
    pinyin: "duōshao",
    meaning: "bao nhiêu",
    examples: []
  },
  {
    id: "dict_170",
    word: "饿",
    pinyin: "è",
    meaning: "đói",
    examples: []
  },
  {
    id: "dict_171",
    word: "二",
    pinyin: "èr",
    meaning: "hai",
    examples: []
  },
  {
    id: "dict_172",
    word: "发烧",
    pinyin: "fā shāo",
    meaning: "sốt, phát sốt",
    examples: []
  },
  {
    id: "dict_173",
    word: "发音",
    pinyin: "fāyīn",
    meaning: "phát âm",
    examples: []
  },
  {
    id: "dict_174",
    word: "翻译",
    pinyin: "fānyì",
    meaning: "người phiên dịch, dịch",
    examples: []
  },
  {
    id: "dict_175",
    word: "饭",
    pinyin: "fàn",
    meaning: "cơm",
    examples: []
  },
  {
    id: "dict_176",
    word: "饭店",
    pinyin: "fàndiàn",
    meaning: "khách sạn, tiệm cơm",
    examples: []
  },
  {
    id: "dict_177",
    word: "方便",
    pinyin: "fāngbiàn",
    meaning: "tiện lợi, thuận tiện",
    examples: []
  },
  {
    id: "dict_178",
    word: "房间",
    pinyin: "fángjiān",
    meaning: "phòng",
    examples: []
  },
  {
    id: "dict_179",
    word: "放",
    pinyin: "fàng",
    meaning: "để, đặt, buông, thả",
    examples: []
  },
  {
    id: "dict_180",
    word: "放假",
    pinyin: "fàngjià",
    meaning: "nghỉ phép",
    examples: []
  },
  {
    id: "dict_181",
    word: "放心",
    pinyin: "fàngxin",
    meaning: "an tâm, yên lòng",
    examples: []
  },
  {
    id: "dict_182",
    word: "飞机",
    pinyin: "fēijī",
    meaning: "máy bay",
    examples: []
  },
  {
    id: "dict_183",
    word: "非常",
    pinyin: "fēicháng",
    meaning: "khác thường / vô cùng, rất",
    examples: []
  },
  {
    id: "dict_184",
    word: "费",
    pinyin: "fèi",
    meaning: "chi phí, phí",
    examples: []
  },
  {
    id: "dict_185",
    word: "分",
    pinyin: "fēn",
    meaning: "phút / xu (tiền) / điểm",
    examples: []
  },
  {
    id: "dict_186",
    word: "分机",
    pinyin: "fēnjī",
    meaning: "máy phụ, máy nội bộ",
    examples: []
  },
  {
    id: "dict_187",
    word: "风",
    pinyin: "fēng",
    meaning: "gió, phong",
    examples: []
  },
  {
    id: "dict_188",
    word: "风景",
    pinyin: "fēngjǐng",
    meaning: "phong cảnh",
    examples: []
  },
  {
    id: "dict_189",
    word: "封",
    pinyin: "fēng",
    meaning: "bức (thư)",
    examples: []
  },
  {
    id: "dict_190",
    word: "服务员",
    pinyin: "fúwùyuán",
    meaning: "nhân viên phục vụ",
    examples: []
  },
  {
    id: "dict_191",
    word: "父亲",
    pinyin: "fùqin",
    meaning: "cha, ba",
    examples: []
  },
  {
    id: "dict_192",
    word: "复习",
    pinyin: "fùxí",
    meaning: "ôn tập",
    examples: []
  },
  {
    id: "dict_193",
    word: "该",
    pinyin: "gāi",
    meaning: "đến lượt / phải, nên, đáng",
    examples: []
  },
  {
    id: "dict_194",
    word: "干净",
    pinyin: "gānjìng",
    meaning: "sạch sẽ",
    examples: []
  },
  {
    id: "dict_195",
    word: "感冒",
    pinyin: "gǎnmào",
    meaning: "bệnh cảm, cảm",
    examples: []
  },
  {
    id: "dict_196",
    word: "感谢",
    pinyin: "gǎnxiè",
    meaning: "cảm ơn",
    examples: []
  },
  {
    id: "dict_197",
    word: "刚",
    pinyin: "gāng",
    meaning: "vừa mới",
    examples: []
  },
  {
    id: "dict_198",
    word: "刚才",
    pinyin: "gāngcái",
    meaning: "lúc nãy, vừa rồi",
    examples: []
  },
  {
    id: "dict_199",
    word: "高",
    pinyin: "gāo",
    meaning: "cao",
    examples: []
  },
  {
    id: "dict_200",
    word: "高兴",
    pinyin: "gāoxìng",
    meaning: "vui, sung sướng, hân hạnh",
    examples: []
  },
  {
    id: "dict_201",
    word: "告别",
    pinyin: "gàobié",
    meaning: "từ biệt",
    examples: []
  },
  {
    id: "dict_202",
    word: "告诉",
    pinyin: "gàosu",
    meaning: "bảo, nói cho biết",
    examples: []
  },
  {
    id: "dict_203",
    word: "歌",
    pinyin: "gē",
    meaning: "bài hát",
    examples: []
  },
  {
    id: "dict_204",
    word: "哥哥",
    pinyin: "gēge",
    meaning: "anh trai",
    examples: []
  },
  {
    id: "dict_205",
    word: "个",
    pinyin: "gè",
    meaning: "cái, chiếc",
    examples: []
  },
  {
    id: "dict_206",
    word: "各",
    pinyin: "gè",
    meaning: "các",
    examples: []
  },
  {
    id: "dict_207",
    word: "给",
    pinyin: "gěi",
    meaning: "cho",
    examples: []
  },
  {
    id: "dict_208",
    word: "跟",
    pinyin: "gēn",
    meaning: "cùng, với",
    examples: []
  },
  {
    id: "dict_209",
    word: "更",
    pinyin: "gèng",
    meaning: "càng",
    examples: []
  },
  {
    id: "dict_210",
    word: "工业",
    pinyin: "gōngyè",
    meaning: "công nghiệp",
    examples: []
  },
  {
    id: "dict_211",
    word: "工作",
    pinyin: "gōngzuò",
    meaning: "làm việc, công việc",
    examples: []
  },
  {
    id: "dict_212",
    word: "公司",
    pinyin: "gōngsī",
    meaning: "công ty",
    examples: []
  },
  {
    id: "dict_213",
    word: "公园",
    pinyin: "gōngyuán",
    meaning: "công viên",
    examples: []
  },
  {
    id: "dict_214",
    word: "狗",
    pinyin: "gǒu",
    meaning: "chó",
    examples: []
  },
  {
    id: "dict_215",
    word: "够",
    pinyin: "gòu",
    meaning: "đủ, đầy đủ",
    examples: []
  },
  {
    id: "dict_216",
    word: "顾客",
    pinyin: "gùkè",
    meaning: "khách hàng",
    examples: []
  },
  {
    id: "dict_217",
    word: "刮",
    pinyin: "guā",
    meaning: "(gió) thổi, cạo (mặt)",
    examples: []
  },
  {
    id: "dict_218",
    word: "挂",
    pinyin: "guà",
    meaning: "treo, mắc, móc",
    examples: []
  },
  {
    id: "dict_219",
    word: "关",
    pinyin: "guān",
    meaning: "đóng, tắt",
    examples: []
  },
  {
    id: "dict_220",
    word: "罐头",
    pinyin: "guàntou",
    meaning: "đồ hộp",
    examples: []
  },
  {
    id: "dict_221",
    word: "广播",
    pinyin: "guǎngbō",
    meaning: "phát thanh",
    examples: []
  },
  {
    id: "dict_222",
    word: "贵",
    pinyin: "guì",
    meaning: "quý / đắt",
    examples: []
  },
  {
    id: "dict_223",
    word: "国",
    pinyin: "guó",
    meaning: "nước, quốc gia",
    examples: []
  },
  {
    id: "dict_224",
    word: "国际",
    pinyin: "guójì",
    meaning: "quốc tế",
    examples: []
  },
  {
    id: "dict_225",
    word: "过",
    pinyin: "guò",
    meaning: "qua, sống, trải qua",
    examples: []
  },
  {
    id: "dict_226",
    word: "过意不去",
    pinyin: "guòyìbuqù",
    meaning: "áy náy",
    examples: []
  },
  {
    id: "dict_227",
    word: "过",
    pinyin: "guo",
    meaning: "(trợ từ động thái)",
    examples: []
  },
  {
    id: "dict_228",
    word: "还",
    pinyin: "hái",
    meaning: "còn",
    examples: []
  },
  {
    id: "dict_229",
    word: "还是",
    pinyin: "háishì",
    meaning: "hay là",
    examples: []
  },
  {
    id: "dict_230",
    word: "孩子",
    pinyin: "háizi",
    meaning: "con, trẻ con",
    examples: []
  },
  {
    id: "dict_231",
    word: "海关",
    pinyin: "hǎiguān",
    meaning: "hải quan",
    examples: []
  },
  {
    id: "dict_232",
    word: "海运",
    pinyin: "hǎiyùn",
    meaning: "vận chuyển đường biển",
    examples: []
  },
  {
    id: "dict_233",
    word: "汉语",
    pinyin: "Hànyǔ",
    meaning: "tiếng Hán, tiếng Hoa",
    examples: []
  },
  {
    id: "dict_234",
    word: "汉字",
    pinyin: "Hànzì",
    meaning: "chữ Hán, chữ Hoa",
    examples: []
  },
  {
    id: "dict_235",
    word: "汗",
    pinyin: "hàn",
    meaning: "mồ hôi",
    examples: []
  },
  {
    id: "dict_236",
    word: "好",
    pinyin: "hǎo",
    meaning: "tốt, khỏe / rất, quá",
    examples: []
  },
  {
    id: "dict_237",
    word: "好吃",
    pinyin: "hǎochī",
    meaning: "ngon",
    examples: []
  },
  {
    id: "dict_238",
    word: "好看",
    pinyin: "hǎokàn",
    meaning: "đẹp",
    examples: []
  },
  {
    id: "dict_239",
    word: "号",
    pinyin: "hào",
    meaning: "số, ngày",
    examples: []
  },
  {
    id: "dict_240",
    word: "号码",
    pinyin: "hàomǎ",
    meaning: "số, mã số",
    examples: []
  },
  {
    id: "dict_241",
    word: "喝",
    pinyin: "hē",
    meaning: "uống",
    examples: []
  },
  {
    id: "dict_242",
    word: "和",
    pinyin: "hé",
    meaning: "và, với, cùng",
    examples: []
  },
  {
    id: "dict_243",
    word: "盒子",
    pinyin: "hézi",
    meaning: "hộp",
    examples: []
  },
  {
    id: "dict_244",
    word: "合适",
    pinyin: "héshì",
    meaning: "thích hợp",
    examples: []
  },
  {
    id: "dict_245",
    word: "黑",
    pinyin: "hēi",
    meaning: "đen, tối",
    examples: []
  },
  {
    id: "dict_246",
    word: "黑板",
    pinyin: "hēibǎn",
    meaning: "bảng đen",
    examples: []
  },
  {
    id: "dict_247",
    word: "很",
    pinyin: "hěn",
    meaning: "rất",
    examples: []
  },
  {
    id: "dict_248",
    word: "红",
    pinyin: "hóng",
    meaning: "đỏ",
    examples: []
  },
  {
    id: "dict_249",
    word: "后天",
    pinyin: "hòutiān",
    meaning: "ngày mốt",
    examples: []
  },
  {
    id: "dict_250",
    word: "候机室",
    pinyin: "hòujīshì",
    meaning: "phòng chờ máy bay",
    examples: []
  },
  {
    id: "dict_251",
    word: "护照",
    pinyin: "hùzhào",
    meaning: "hộ chiếu",
    examples: []
  },
  {
    id: "dict_252",
    word: "花",
    pinyin: "huā",
    meaning: "tiêu, xài / hoa",
    examples: []
  },
  {
    id: "dict_253",
    word: "划",
    pinyin: "huá",
    meaning: "vạch ra, bơi, chèo",
    examples: []
  },
  {
    id: "dict_254",
    word: "滑",
    pinyin: "huá",
    meaning: "trơn, trượt",
    examples: []
  },
  {
    id: "dict_255",
    word: "画",
    pinyin: "huà",
    meaning: "vẽ / tranh vẽ",
    examples: []
  },
  {
    id: "dict_256",
    word: "画报",
    pinyin: "huàbào",
    meaning: "báo ảnh",
    examples: []
  },
  {
    id: "dict_257",
    word: "画展",
    pinyin: "huàzhǎn",
    meaning: "triển lãm hội họa",
    examples: []
  },
  {
    id: "dict_258",
    word: "话",
    pinyin: "huà",
    meaning: "lời nói",
    examples: []
  },
  {
    id: "dict_259",
    word: "话剧",
    pinyin: "huàjù",
    meaning: "kịch nói",
    examples: []
  },
  {
    id: "dict_260",
    word: "坏",
    pinyin: "huài",
    meaning: "hư, hỏng, xấu",
    examples: []
  },
  {
    id: "dict_261",
    word: "换",
    pinyin: "huàn",
    meaning: "đổi, thay",
    examples: []
  },
  {
    id: "dict_262",
    word: "欢迎",
    pinyin: "huānyíng",
    meaning: "chào mừng, hoan nghênh",
    examples: []
  },
  {
    id: "dict_263",
    word: "欢送",
    pinyin: "huānsòng",
    meaning: "vui vẻ tiễn đưa",
    examples: []
  },
  {
    id: "dict_264",
    word: "还",
    pinyin: "huán",
    meaning: "trả",
    examples: []
  },
  {
    id: "dict_265",
    word: "黄",
    pinyin: "huáng",
    meaning: "vàng",
    examples: []
  },
  {
    id: "dict_266",
    word: "回",
    pinyin: "huí",
    meaning: "về, quay lại",
    examples: []
  },
  {
    id: "dict_267",
    word: "回答",
    pinyin: "huídá",
    meaning: "trả lời",
    examples: []
  },
  {
    id: "dict_268",
    word: "会",
    pinyin: "huì",
    meaning: "biết, sẽ / cuộc họp, buổi họp",
    examples: []
  },
  {
    id: "dict_269",
    word: "火车",
    pinyin: "huǒchē",
    meaning: "xe lửa, tàu hỏa",
    examples: []
  },
  {
    id: "dict_270",
    word: "或者",
    pinyin: "huòzhě",
    meaning: "hoặc là / có lẽ",
    examples: []
  },
  {
    id: "dict_271",
    word: "机场",
    pinyin: "jīchǎng",
    meaning: "phi trường, sân bay",
    examples: []
  },
  {
    id: "dict_272",
    word: "机会",
    pinyin: "jīhuì",
    meaning: "dịp, cơ hội",
    examples: []
  },
  {
    id: "dict_273",
    word: "极了",
    pinyin: "jí le",
    meaning: "vô cùng, lắm, quá",
    examples: []
  },
  {
    id: "dict_274",
    word: "急",
    pinyin: "jí",
    meaning: "gấp, vội, khẩn",
    examples: []
  },
  {
    id: "dict_275",
    word: "几",
    pinyin: "jǐ",
    meaning: "mấy",
    examples: []
  },
  {
    id: "dict_276",
    word: "挤",
    pinyin: "jǐ",
    meaning: "chen chúc, chật",
    examples: []
  },
  {
    id: "dict_277",
    word: "记",
    pinyin: "jì",
    meaning: "ghi, nhớ",
    examples: []
  },
  {
    id: "dict_278",
    word: "寄",
    pinyin: "jì",
    meaning: "gửi",
    examples: []
  },
  {
    id: "dict_279",
    word: "计划",
    pinyin: "jìhuà",
    meaning: "kế hoạch",
    examples: []
  },
  {
    id: "dict_280",
    word: "纪念",
    pinyin: "jìniàn",
    meaning: "kỷ niệm",
    examples: []
  },
  {
    id: "dict_281",
    word: "技术",
    pinyin: "jìshù",
    meaning: "kỹ thuật",
    examples: []
  },
  {
    id: "dict_282",
    word: "继续",
    pinyin: "jìxù",
    meaning: "tiếp tục, tiếp theo",
    examples: []
  },
  {
    id: "dict_283",
    word: "家",
    pinyin: "jiā",
    meaning: "nhà",
    examples: []
  },
  {
    id: "dict_284",
    word: "价目表",
    pinyin: "jiàmùbiǎo",
    meaning: "bảng giá",
    examples: []
  },
  {
    id: "dict_285",
    word: "检查",
    pinyin: "jiǎnchá",
    meaning: "khám, kiểm tra",
    examples: []
  },
  {
    id: "dict_286",
    word: "见",
    pinyin: "jiàn",
    meaning: "gặp, thấy",
    examples: []
  },
  {
    id: "dict_287",
    word: "见面",
    pinyin: "jiàn miàn",
    meaning: "gặp mặt",
    examples: []
  },
  {
    id: "dict_288",
    word: "件",
    pinyin: "jiàn",
    meaning: "chiếc, cái (lượng từ)",
    examples: []
  },
  {
    id: "dict_289",
    word: "健康",
    pinyin: "jiànkāng",
    meaning: "mạnh khỏe",
    examples: []
  },
  {
    id: "dict_290",
    word: "交",
    pinyin: "jiāo",
    meaning: "nộp, đưa, giao",
    examples: []
  },
  {
    id: "dict_291",
    word: "交通",
    pinyin: "jiāotōng",
    meaning: "giao thông",
    examples: []
  },
  {
    id: "dict_292",
    word: "胶卷儿",
    pinyin: "jiāojuǎnr",
    meaning: "phim (chụp hình)",
    examples: []
  },
  {
    id: "dict_293",
    word: "教",
    pinyin: "jiào",
    meaning: "dạy",
    examples: []
  },
  {
    id: "dict_294",
    word: "饺子",
    pinyin: "jiǎozi",
    meaning: "bánh cảo",
    examples: []
  },
  {
    id: "dict_295",
    word: "叫",
    pinyin: "jiào",
    meaning: "gọi, tên là",
    examples: []
  },
  {
    id: "dict_296",
    word: "教室",
    pinyin: "jiàoshì",
    meaning: "phòng học, lớp học",
    examples: []
  },
  {
    id: "dict_297",
    word: "接",
    pinyin: "jiē",
    meaning: "đón, nhận, nối, tiếp",
    examples: []
  },
  {
    id: "dict_298",
    word: "结实",
    pinyin: "jiēshi",
    meaning: "rắn chắc, chắc chắn, bền",
    examples: []
  },
  {
    id: "dict_299",
    word: "街",
    pinyin: "jiē",
    meaning: "đường phố",
    examples: []
  },
  {
    id: "dict_300",
    word: "结婚",
    pinyin: "jié hūn",
    meaning: "kết hôn, lập gia đình",
    examples: []
  },
  {
    id: "dict_301",
    word: "节目",
    pinyin: "jiémù",
    meaning: "màn trình diễn, tiết mục",
    examples: []
  },
  {
    id: "dict_302",
    word: "姐姐",
    pinyin: "jiějie",
    meaning: "chị",
    examples: []
  },
  {
    id: "dict_303",
    word: "介绍",
    pinyin: "jièshào",
    meaning: "giới thiệu",
    examples: []
  },
  {
    id: "dict_304",
    word: "借",
    pinyin: "jiè",
    meaning: "mượn",
    examples: []
  },
  {
    id: "dict_305",
    word: "斤",
    pinyin: "jīn",
    meaning: "cân (500g)",
    examples: []
  },
  {
    id: "dict_306",
    word: "今年",
    pinyin: "jīnnián",
    meaning: "năm nay",
    examples: []
  },
  {
    id: "dict_307",
    word: "今天",
    pinyin: "jīntiān",
    meaning: "hôm nay, ngày nay",
    examples: []
  },
  {
    id: "dict_308",
    word: "进",
    pinyin: "jìn",
    meaning: "vào, đi vào",
    examples: []
  },
  {
    id: "dict_309",
    word: "近",
    pinyin: "jìn",
    meaning: "gần",
    examples: []
  },
  {
    id: "dict_310",
    word: "进步",
    pinyin: "jìnbù",
    meaning: "tiến bộ",
    examples: []
  },
  {
    id: "dict_311",
    word: "精彩",
    pinyin: "jīngcǎi",
    meaning: "xuất sắc, tuyệt vời, hay",
    examples: []
  },
  {
    id: "dict_312",
    word: "京剧",
    pinyin: "Jīngjù",
    meaning: "Kinh kịch",
    examples: []
  },
  {
    id: "dict_313",
    word: "经理",
    pinyin: "jīnglǐ",
    meaning: "giám đốc",
    examples: []
  },
  {
    id: "dict_314",
    word: "九",
    pinyin: "jiǔ",
    meaning: "chín",
    examples: []
  },
  {
    id: "dict_315",
    word: "久",
    pinyin: "jiǔ",
    meaning: "lâu",
    examples: []
  },
  {
    id: "dict_316",
    word: "酒",
    pinyin: "jiǔ",
    meaning: "rượu",
    examples: []
  },
  {
    id: "dict_317",
    word: "旧",
    pinyin: "jiù",
    meaning: "cũ",
    examples: []
  },
  {
    id: "dict_318",
    word: "就",
    pinyin: "jiù",
    meaning: "thì, bèn, sẽ, liền...",
    examples: []
  },
  {
    id: "dict_319",
    word: "桔子",
    pinyin: "júzi",
    meaning: "quýt",
    examples: []
  },
  {
    id: "dict_320",
    word: "句",
    pinyin: "jù",
    meaning: "câu (lượng từ)",
    examples: []
  },
  {
    id: "dict_321",
    word: "句子",
    pinyin: "jùzi",
    meaning: "câu",
    examples: []
  },
  {
    id: "dict_322",
    word: "觉得",
    pinyin: "juéde",
    meaning: "cảm thấy",
    examples: []
  },
  {
    id: "dict_323",
    word: "咖啡",
    pinyin: "kāfēi",
    meaning: "cà phê",
    examples: []
  },
  {
    id: "dict_324",
    word: "开",
    pinyin: "kāi",
    meaning: "lái, chạy / mở / diễn ra",
    examples: []
  },
  {
    id: "dict_325",
    word: "开始",
    pinyin: "kāishǐ",
    meaning: "bắt đầu",
    examples: []
  },
  {
    id: "dict_326",
    word: "看",
    pinyin: "kàn",
    meaning: "xem, nhìn, thăm",
    examples: []
  },
  {
    id: "dict_327",
    word: "看样子",
    pinyin: "kàn yàngzi",
    meaning: "coi bộ, xem ra",
    examples: []
  },
  {
    id: "dict_328",
    word: "考",
    pinyin: "kǎo",
    meaning: "thi",
    examples: []
  },
  {
    id: "dict_329",
    word: "考虑",
    pinyin: "kǎolǜ",
    meaning: "suy nghĩ, cân nhắc",
    examples: []
  },
  {
    id: "dict_330",
    word: "考试",
    pinyin: "kǎoshì",
    meaning: "thi, kỳ thi",
    examples: []
  },
  {
    id: "dict_331",
    word: "烤鸭",
    pinyin: "kǎoyā",
    meaning: "vịt quay",
    examples: []
  },
  {
    id: "dict_332",
    word: "咳嗽",
    pinyin: "késou",
    meaning: "ho",
    examples: []
  },
  {
    id: "dict_333",
    word: "可",
    pinyin: "kě",
    meaning: "có thể, khả năng",
    examples: []
  },
  {
    id: "dict_334",
    word: "可爱",
    pinyin: "kě'ài",
    meaning: "đáng yêu, dễ thương",
    examples: []
  },
  {
    id: "dict_335",
    word: "可能",
    pinyin: "kěnéng",
    meaning: "có thể, khả năng",
    examples: []
  },
  {
    id: "dict_336",
    word: "可是",
    pinyin: "kěshì",
    meaning: "nhưng (mà)",
    examples: []
  },
  {
    id: "dict_337",
    word: "可惜",
    pinyin: "kěxī",
    meaning: "đáng tiếc",
    examples: []
  },
  {
    id: "dict_338",
    word: "可以",
    pinyin: "kěyǐ",
    meaning: "có thể, khả dĩ, được",
    examples: []
  },
  {
    id: "dict_339",
    word: "渴",
    pinyin: "kě",
    meaning: "khát",
    examples: []
  },
  {
    id: "dict_340",
    word: "刻",
    pinyin: "kè",
    meaning: "15 phút, khắc",
    examples: []
  },
  {
    id: "dict_341",
    word: "课",
    pinyin: "kè",
    meaning: "giờ học, bài học",
    examples: []
  },
  {
    id: "dict_342",
    word: "客气",
    pinyin: "kèqi",
    meaning: "khách sáo",
    examples: []
  },
  {
    id: "dict_343",
    word: "客人",
    pinyin: "kèren",
    meaning: "khách",
    examples: []
  },
  {
    id: "dict_344",
    word: "空儿",
    pinyin: "kòngr",
    meaning: "lúc rảnh, chỗ trống",
    examples: []
  },
  {
    id: "dict_345",
    word: "口",
    pinyin: "kǒu",
    meaning: "(nhân) khẩu (lượng từ)",
    examples: []
  },
  {
    id: "dict_346",
    word: "口试",
    pinyin: "kǒushì",
    meaning: "thi nói, vấn đáp",
    examples: []
  },
  {
    id: "dict_347",
    word: "裤子",
    pinyin: "kùzi",
    meaning: "quần",
    examples: []
  },
  {
    id: "dict_348",
    word: "块",
    pinyin: "kuài",
    meaning: "đồng (tiền)",
    examples: []
  },
  {
    id: "dict_349",
    word: "快",
    pinyin: "kuài",
    meaning: "mau, nhanh",
    examples: []
  },
  {
    id: "dict_350",
    word: "来",
    pinyin: "lái",
    meaning: "lại, đến",
    examples: []
  },
  {
    id: "dict_351",
    word: "来不及",
    pinyin: "lái bu jí",
    meaning: "không kịp",
    examples: []
  },
  {
    id: "dict_352",
    word: "来得及",
    pinyin: "lái de jí",
    meaning: "kịp",
    examples: []
  },
  {
    id: "dict_353",
    word: "篮球",
    pinyin: "lánqiú",
    meaning: "bóng rổ",
    examples: []
  },
  {
    id: "dict_354",
    word: "老",
    pinyin: "lǎo",
    meaning: "già, lão, cũ, thân",
    examples: []
  },
  {
    id: "dict_355",
    word: "老师",
    pinyin: "lǎoshī",
    meaning: "thầy cô",
    examples: []
  },
  {
    id: "dict_356",
    word: "了",
    pinyin: "le",
    meaning: "rồi (trợ từ động thái)",
    examples: []
  },
  {
    id: "dict_357",
    word: "累",
    pinyin: "lèi",
    meaning: "mệt",
    examples: []
  },
  {
    id: "dict_358",
    word: "冷",
    pinyin: "lěng",
    meaning: "lạnh",
    examples: []
  },
  {
    id: "dict_359",
    word: "离",
    pinyin: "lí",
    meaning: "cách, rời",
    examples: []
  },
  {
    id: "dict_360",
    word: "离开",
    pinyin: "líkāi",
    meaning: "rời khỏi, ly khai",
    examples: []
  },
  {
    id: "dict_361",
    word: "礼物",
    pinyin: "lǐwù",
    meaning: "quà cáp, quà tặng",
    examples: []
  },
  {
    id: "dict_362",
    word: "零",
    pinyin: "líng",
    meaning: "số không",
    examples: []
  },
  {
    id: "dict_363",
    word: "辆",
    pinyin: "liàng",
    meaning: "chiếc (xe) (lượng từ)",
    examples: []
  },
  {
    id: "dict_364",
    word: "聊天儿",
    pinyin: "liáotiānr",
    meaning: "nói chuyện phiếm",
    examples: []
  },
  {
    id: "dict_365",
    word: "了解",
    pinyin: "liǎojiě",
    meaning: "hiểu, tìm hiểu",
    examples: []
  },
  {
    id: "dict_366",
    word: "邻居",
    pinyin: "línjū",
    meaning: "hàng xóm",
    examples: []
  },
  {
    id: "dict_367",
    word: "留",
    pinyin: "liú",
    meaning: "ở lại, lưu lại",
    examples: []
  },
  {
    id: "dict_368",
    word: "流",
    pinyin: "liú",
    meaning: "chảy (nước mắt, nước mũi)",
    examples: []
  },
  {
    id: "dict_369",
    word: "留学生",
    pinyin: "liúxuésheng",
    meaning: "lưu học sinh",
    examples: []
  },
  {
    id: "dict_370",
    word: "楼",
    pinyin: "lóu",
    meaning: "lầu, tòa nhà",
    examples: []
  },
  {
    id: "dict_371",
    word: "路",
    pinyin: "lù",
    meaning: "đường, tuyến đường",
    examples: []
  },
  {
    id: "dict_372",
    word: "录取",
    pinyin: "lùqǔ",
    meaning: "trúng tuyển, nhận vào học",
    examples: []
  },
  {
    id: "dict_373",
    word: "旅行",
    pinyin: "lǚxíng",
    meaning: "du lịch",
    examples: []
  },
  {
    id: "dict_374",
    word: "绿",
    pinyin: "lǜ",
    meaning: "xanh lá cây",
    examples: []
  },
  {
    id: "dict_375",
    word: "乱",
    pinyin: "luàn",
    meaning: "lộn xộn, bừa bãi",
    examples: []
  },
  {
    id: "dict_376",
    word: "妈妈",
    pinyin: "māma",
    meaning: "mẹ",
    examples: []
  },
  {
    id: "dict_377",
    word: "麻烦",
    pinyin: "máfan",
    meaning: "làm phiền, phiền hà",
    examples: []
  },
  {
    id: "dict_378",
    word: "马",
    pinyin: "mǎ",
    meaning: "ngựa",
    examples: []
  },
  {
    id: "dict_379",
    word: "马上",
    pinyin: "mǎshàng",
    meaning: "liền, ngay lập tức",
    examples: []
  },
  {
    id: "dict_380",
    word: "吗",
    pinyin: "ma",
    meaning: "chăng, hả, hử (trợ từ nghi vấn)",
    examples: []
  },
  {
    id: "dict_381",
    word: "买",
    pinyin: "mǎi",
    meaning: "mua",
    examples: []
  },
  {
    id: "dict_382",
    word: "卖",
    pinyin: "mài",
    meaning: "bán",
    examples: []
  },
  {
    id: "dict_383",
    word: "慢",
    pinyin: "màn",
    meaning: "chậm",
    examples: []
  },
  {
    id: "dict_384",
    word: "忙",
    pinyin: "máng",
    meaning: "bận",
    examples: []
  },
  {
    id: "dict_385",
    word: "毛",
    pinyin: "máo",
    meaning: "hào (đơn vị tiền tệ)",
    examples: []
  },
  {
    id: "dict_386",
    word: "毛",
    pinyin: "máo",
    meaning: "lông",
    examples: []
  },
  {
    id: "dict_387",
    word: "毛衣",
    pinyin: "máoyī",
    meaning: "áo len",
    examples: []
  },
  {
    id: "dict_388",
    word: "帽子",
    pinyin: "màozi",
    meaning: "mũ, nón",
    examples: []
  },
  {
    id: "dict_389",
    word: "没",
    pinyin: "méi",
    meaning: "chưa, không có",
    examples: []
  },
  {
    id: "dict_390",
    word: "没办法",
    pinyin: "méi bànfǎ",
    meaning: "không có cách nào",
    examples: []
  },
  {
    id: "dict_391",
    word: "没关系",
    pinyin: "méi guānxi",
    meaning: "không sao, không có gì",
    examples: []
  },
  {
    id: "dict_392",
    word: "每",
    pinyin: "měi",
    meaning: "mỗi",
    examples: []
  },
  {
    id: "dict_393",
    word: "妹妹",
    pinyin: "mèimei",
    meaning: "em gái",
    examples: []
  },
  {
    id: "dict_394",
    word: "门",
    pinyin: "mén",
    meaning: "cửa",
    examples: []
  },
  {
    id: "dict_395",
    word: "门诊",
    pinyin: "ménzhěn",
    meaning: "phòng khám bệnh",
    examples: []
  },
  {
    id: "dict_396",
    word: "米",
    pinyin: "mǐ",
    meaning: "mét",
    examples: []
  },
  {
    id: "dict_397",
    word: "面条儿",
    pinyin: "miàntiáor",
    meaning: "mì",
    examples: []
  },
  {
    id: "dict_398",
    word: "名字",
    pinyin: "míngzi",
    meaning: "tên",
    examples: []
  },
  {
    id: "dict_399",
    word: "明天",
    pinyin: "míngtiān",
    meaning: "ngày mai",
    examples: []
  },
  {
    id: "dict_400",
    word: "拿",
    pinyin: "ná",
    meaning: "cầm, nắm, lấy",
    examples: []
  },
  {
    id: "dict_401",
    word: "哪",
    pinyin: "nǎ",
    meaning: "nào",
    examples: []
  },
  {
    id: "dict_402",
    word: "哪儿",
    pinyin: "nǎr",
    meaning: "ở đâu",
    examples: []
  },
  {
    id: "dict_403",
    word: "哪里",
    pinyin: "nǎli",
    meaning: "đâu có, nơi nào",
    examples: []
  },
  {
    id: "dict_404",
    word: "那",
    pinyin: "nà",
    meaning: "kia, đó",
    examples: []
  },
  {
    id: "dict_405",
    word: "那儿",
    pinyin: "nàr",
    meaning: "ở kia, ở đó",
    examples: []
  },
  {
    id: "dict_406",
    word: "那么",
    pinyin: "nàme",
    meaning: "như thế, vậy thì",
    examples: []
  },
  {
    id: "dict_407",
    word: "那样",
    pinyin: "nàyàng",
    meaning: "như thế, như vậy",
    examples: []
  },
  {
    id: "dict_408",
    word: "南",
    pinyin: "nán",
    meaning: "phương Nam",
    examples: []
  },
  {
    id: "dict_409",
    word: "男",
    pinyin: "nán",
    meaning: "nam (giới tính)",
    examples: []
  },
  {
    id: "dict_410",
    word: "男的",
    pinyin: "nánde",
    meaning: "nam, đàn ông",
    examples: []
  },
  {
    id: "dict_411",
    word: "难",
    pinyin: "nán",
    meaning: "khó",
    examples: []
  },
  {
    id: "dict_412",
    word: "难受",
    pinyin: "nánshòu",
    meaning: "khó chịu, buồn rầu",
    examples: []
  },
  {
    id: "dict_413",
    word: "呢",
    pinyin: "ne",
    meaning: "đấy, nhỉ, nhé (trợ từ nghi vấn)",
    examples: []
  },
  {
    id: "dict_414",
    word: "能",
    pinyin: "néng",
    meaning: "có thể, khả năng",
    examples: []
  },
  {
    id: "dict_415",
    word: "你",
    pinyin: "nǐ",
    meaning: "bạn, anh, chị (ngôi thứ 2 số ít)",
    examples: []
  },
  {
    id: "dict_416",
    word: "你们",
    pinyin: "nǐmen",
    meaning: "các bạn (ngôi thứ 2 số nhiều)",
    examples: []
  },
  {
    id: "dict_417",
    word: "年",
    pinyin: "nián",
    meaning: "năm",
    examples: []
  },
  {
    id: "dict_418",
    word: "年底",
    pinyin: "niándǐ",
    meaning: "cuối năm",
    examples: []
  },
  {
    id: "dict_419",
    word: "年级",
    pinyin: "niánjí",
    meaning: "năm thứ (đại học), lớp (phổ thông)",
    examples: []
  },
  {
    id: "dict_420",
    word: "年纪",
    pinyin: "niánjì",
    meaning: "tuổi tác",
    examples: []
  },
  {
    id: "dict_421",
    word: "年轻",
    pinyin: "niánqīng",
    meaning: "trẻ trung",
    examples: []
  },
  {
    id: "dict_422",
    word: "您",
    pinyin: "nín",
    meaning: "ngài, ông, bà (ngôi thứ 2 tôn xưng)",
    examples: []
  },
  {
    id: "dict_423",
    word: "牛",
    pinyin: "niú",
    meaning: "trâu, bò",
    examples: []
  },
  {
    id: "dict_424",
    word: "牛奶",
    pinyin: "niúnǎi",
    meaning: "sữa bò",
    examples: []
  },
  {
    id: "dict_425",
    word: "弄",
    pinyin: "nòng",
    meaning: "làm, trêu chọc",
    examples: []
  },
  {
    id: "dict_426",
    word: "努力",
    pinyin: "nǔlì",
    meaning: "nỗ lực, cố gắng",
    examples: []
  },
  {
    id: "dict_427",
    word: "女",
    pinyin: "nǚ",
    meaning: "nữ (giới tính)",
    examples: []
  },
  {
    id: "dict_428",
    word: "女的",
    pinyin: "nǚde",
    meaning: "nữ, phụ nữ",
    examples: []
  },
  {
    id: "dict_429",
    word: "暖和",
    pinyin: "nuǎnhuo",
    meaning: "ấm áp",
    examples: []
  },
  {
    id: "dict_430",
    word: "爬",
    pinyin: "pá",
    meaning: "leo, trèo, bò",
    examples: []
  },
  {
    id: "dict_431",
    word: "怕",
    pinyin: "pà",
    meaning: "sợ",
    examples: []
  },
  {
    id: "dict_432",
    word: "拍",
    pinyin: "pāi",
    meaning: "chụp (hình), đập, vỗ",
    examples: []
  },
  {
    id: "dict_433",
    word: "排",
    pinyin: "pái",
    meaning: "hàng, dãy",
    examples: []
  },
  {
    id: "dict_434",
    word: "排队",
    pinyin: "pái duì",
    meaning: "xếp hàng",
    examples: []
  },
  {
    id: "dict_435",
    word: "派",
    pinyin: "pài",
    meaning: "phái, cử đi",
    examples: []
  },
  {
    id: "dict_436",
    word: "盘",
    pinyin: "pán",
    meaning: "mâm, đĩa (lượng từ)",
    examples: []
  },
  {
    id: "dict_437",
    word: "旁边",
    pinyin: "pángbiān",
    meaning: "bên cạnh",
    examples: []
  },
  {
    id: "dict_438",
    word: "胖",
    pinyin: "pàng",
    meaning: "mập, béo",
    examples: []
  },
  {
    id: "dict_439",
    word: "跑步",
    pinyin: "pǎo bù",
    meaning: "chạy bộ",
    examples: []
  },
  {
    id: "dict_440",
    word: "朋友",
    pinyin: "péngyou",
    meaning: "bạn bè",
    examples: []
  },
  {
    id: "dict_441",
    word: "啤酒",
    pinyin: "píjiǔ",
    meaning: "bia",
    examples: []
  },
  {
    id: "dict_442",
    word: "便宜",
    pinyin: "piányi",
    meaning: "rẻ",
    examples: []
  },
  {
    id: "dict_443",
    word: "票",
    pinyin: "piào",
    meaning: "vé",
    examples: []
  },
  {
    id: "dict_444",
    word: "漂亮",
    pinyin: "piàoliang",
    meaning: "xinh đẹp",
    examples: []
  },
  {
    id: "dict_445",
    word: "苹果",
    pinyin: "píngguǒ",
    meaning: "táo",
    examples: []
  },
  {
    id: "dict_446",
    word: "瓶",
    pinyin: "píng",
    meaning: "bình, chai (lượng từ)",
    examples: []
  },
  {
    id: "dict_447",
    word: "破",
    pinyin: "pò",
    meaning: "hỏng, rách, vỡ",
    examples: []
  },
  {
    id: "dict_448",
    word: "七",
    pinyin: "qī",
    meaning: "bảy",
    examples: []
  },
  {
    id: "dict_449",
    word: "骑",
    pinyin: "qí",
    meaning: "cưỡi, đi (xe đạp, ngựa)",
    examples: []
  },
  {
    id: "dict_450",
    word: "起",
    pinyin: "qǐ",
    meaning: "lên, dậy, bắt đầu",
    examples: []
  },
  {
    id: "dict_451",
    word: "起飞",
    pinyin: "qǐfēi",
    meaning: "cất cánh",
    examples: []
  },
  {
    id: "dict_452",
    word: "起来",
    pinyin: "qǐlái",
    meaning: "dậy, đứng lên",
    examples: []
  },
  {
    id: "dict_453",
    word: "汽车",
    pinyin: "qìchē",
    meaning: "xe hơi, ô tô",
    examples: []
  },
  {
    id: "dict_454",
    word: "汽水",
    pinyin: "qìshuǐ",
    meaning: "nước ngọt, nước có ga",
    examples: []
  },
  {
    id: "dict_455",
    word: "千",
    pinyin: "qiān",
    meaning: "ngàn, nghìn",
    examples: []
  },
  {
    id: "dict_456",
    word: "签证",
    pinyin: "qiānzhèng",
    meaning: "thị thực, visa",
    examples: []
  },
  {
    id: "dict_457",
    word: "钱",
    pinyin: "qián",
    meaning: "tiền",
    examples: []
  },
  {
    id: "dict_458",
    word: "墙",
    pinyin: "qiáng",
    meaning: "tường",
    examples: []
  },
  {
    id: "dict_459",
    word: "桥",
    pinyin: "qiáo",
    meaning: "cầu",
    examples: []
  },
  {
    id: "dict_460",
    word: "巧克力",
    pinyin: "qiǎokèlì",
    meaning: "sô cô la",
    examples: []
  },
  {
    id: "dict_461",
    word: "亲切",
    pinyin: "qīnqiè",
    meaning: "thân mật, gần gũi",
    examples: []
  },
  {
    id: "dict_462",
    word: "轻",
    pinyin: "qīng",
    meaning: "nhẹ",
    examples: []
  },
  {
    id: "dict_463",
    word: "情况",
    pinyin: "qíngkuàng",
    meaning: "tình hình",
    examples: []
  },
  {
    id: "dict_464",
    word: "请",
    pinyin: "qǐng",
    meaning: "mời / xin",
    examples: []
  },
  {
    id: "dict_465",
    word: "请客",
    pinyin: "qǐngkè",
    meaning: "mời khách, bao chầu",
    examples: []
  },
  {
    id: "dict_466",
    word: "去年",
    pinyin: "qùnián",
    meaning: "năm ngoái",
    examples: []
  },
  {
    id: "dict_467",
    word: "去",
    pinyin: "qù",
    meaning: "đi",
    examples: []
  },
  {
    id: "dict_468",
    word: "全部",
    pinyin: "quánbù",
    meaning: "toàn bộ",
    examples: []
  },
  {
    id: "dict_469",
    word: "缺",
    pinyin: "quē",
    meaning: "thiếu",
    examples: []
  },
  {
    id: "dict_470",
    word: "裙子",
    pinyin: "qúnzi",
    meaning: "váy",
    examples: []
  },
  {
    id: "dict_471",
    word: "然后",
    pinyin: "ránhòu",
    meaning: "sau đó",
    examples: []
  },
  {
    id: "dict_472",
    word: "让",
    pinyin: "ràng",
    meaning: "cho phép, bảo, nhường",
    examples: []
  },
  {
    id: "dict_473",
    word: "热",
    pinyin: "rè",
    meaning: "nóng",
    examples: []
  },
  {
    id: "dict_474",
    word: "热闹",
    pinyin: "rènao",
    meaning: "náo nhiệt, nhộn nhịp",
    examples: []
  },
  {
    id: "dict_475",
    word: "人",
    pinyin: "rén",
    meaning: "người",
    examples: []
  },
  {
    id: "dict_476",
    word: "人民币",
    pinyin: "rénmínbì",
    meaning: "Nhân dân tệ",
    examples: []
  },
  {
    id: "dict_477",
    word: "认识",
    pinyin: "rènshi",
    meaning: "quen biết, nhận biết",
    examples: []
  },
  {
    id: "dict_478",
    word: "日",
    pinyin: "rì",
    meaning: "ngày",
    examples: []
  },
  {
    id: "dict_479",
    word: "日记",
    pinyin: "rìjì",
    meaning: "nhật ký",
    examples: []
  },
  {
    id: "dict_480",
    word: "日子",
    pinyin: "rìzi",
    meaning: "ngày, thời gian, cuộc sống",
    examples: []
  },
  {
    id: "dict_481",
    word: "容易",
    pinyin: "róngyì",
    meaning: "dễ dàng",
    examples: []
  },
  {
    id: "dict_482",
    word: "肉",
    pinyin: "ròu",
    meaning: "thịt",
    examples: []
  },
  {
    id: "dict_483",
    word: "如果",
    pinyin: "rúguǒ",
    meaning: "nếu, nếu như",
    examples: []
  },
  {
    id: "dict_484",
    word: "三",
    pinyin: "sān",
    meaning: "ba",
    examples: []
  },
  {
    id: "dict_485",
    word: "散步",
    pinyin: "sàn bù",
    meaning: "tản bộ, đi dạo",
    examples: []
  },
  {
    id: "dict_486",
    word: "山",
    pinyin: "shān",
    meaning: "núi",
    examples: []
  },
  {
    id: "dict_487",
    word: "商店",
    pinyin: "shāngdiàn",
    meaning: "cửa hàng",
    examples: []
  },
  {
    id: "dict_488",
    word: "上",
    pinyin: "shàng",
    meaning: "trên, phía trên / lên",
    examples: []
  },
  {
    id: "dict_489",
    word: "上班",
    pinyin: "shàng bān",
    meaning: "đi làm",
    examples: []
  },
  {
    id: "dict_490",
    word: "上车",
    pinyin: "shàng chē",
    meaning: "lên xe",
    examples: []
  },
  {
    id: "dict_491",
    word: "上课",
    pinyin: "shàng kè",
    meaning: "lên lớp, vào học",
    examples: []
  },
  {
    id: "dict_492",
    word: "上午",
    pinyin: "shàngwǔ",
    meaning: "buổi sáng",
    examples: []
  },
  {
    id: "dict_493",
    word: "少",
    pinyin: "shǎo",
    meaning: "ít",
    examples: []
  },
  {
    id: "dict_494",
    word: "蛇",
    pinyin: "shé",
    meaning: "con rắn",
    examples: []
  },
  {
    id: "dict_495",
    word: "舍不得",
    pinyin: "shěbude",
    meaning: "luyến tiếc, không nỡ",
    examples: []
  },
  {
    id: "dict_496",
    word: "社会",
    pinyin: "shèhuì",
    meaning: "xã hội",
    examples: []
  },
  {
    id: "dict_497",
    word: "身体",
    pinyin: "shēntǐ",
    meaning: "thân thể, sức khỏe",
    examples: []
  },
  {
    id: "dict_498",
    word: "什么",
    pinyin: "shénme",
    meaning: "gì, cái gì",
    examples: []
  },
  {
    id: "dict_499",
    word: "生",
    pinyin: "shēng",
    meaning: "sinh, đẻ, sống",
    examples: []
  },
  {
    id: "dict_500",
    word: "生词",
    pinyin: "shēngcí",
    meaning: "từ mới",
    examples: []
  },
  {
    id: "dict_501",
    word: "生活",
    pinyin: "shēnghuó",
    meaning: "sinh hoạt, cuộc sống",
    examples: []
  },
  {
    id: "dict_502",
    word: "生日",
    pinyin: "shēngrì",
    meaning: "sinh nhật",
    examples: []
  },
  {
    id: "dict_503",
    word: "省",
    pinyin: "shěng",
    meaning: "tỉnh / tiết kiệm",
    examples: []
  },
  {
    id: "dict_504",
    word: "剩",
    pinyin: "shèng",
    meaning: "thừa, lại, sót lại",
    examples: []
  },
  {
    id: "dict_505",
    word: "失败",
    pinyin: "shībài",
    meaning: "thất bại",
    examples: []
  },
  {
    id: "dict_506",
    word: "师傅",
    pinyin: "shīfu",
    meaning: "sư phụ, thầy, thợ",
    examples: []
  },
  {
    id: "dict_507",
    word: "十",
    pinyin: "shí",
    meaning: "mười",
    examples: []
  },
  {
    id: "dict_508",
    word: "时候",
    pinyin: "shíhou",
    meaning: "thời gian, lúc, khi",
    examples: []
  },
  {
    id: "dict_509",
    word: "时间",
    pinyin: "shíjiān",
    meaning: "thời gian",
    examples: []
  },
  {
    id: "dict_510",
    word: "试试",
    pinyin: "shìshi",
    meaning: "thử, làm thử",
    examples: []
  },
  {
    id: "dict_511",
    word: "事情",
    pinyin: "shìqing",
    meaning: "sự tình, sự việc",
    examples: []
  },
  {
    id: "dict_512",
    word: "是",
    pinyin: "shì",
    meaning: "là, đúng, vâng",
    examples: []
  },
  {
    id: "dict_513",
    word: "收",
    pinyin: "shōu",
    meaning: "thu, nhận",
    examples: []
  },
  {
    id: "dict_514",
    word: "收音机",
    pinyin: "shōuyīnjī",
    meaning: "máy thu thanh, radio",
    examples: []
  },
  {
    id: "dict_515",
    word: "手",
    pinyin: "shǒu",
    meaning: "tay, bàn tay",
    examples: []
  },
  {
    id: "dict_516",
    word: "手表",
    pinyin: "shǒubiǎo",
    meaning: "đồng hồ đeo tay",
    examples: []
  },
  {
    id: "dict_517",
    word: "手术",
    pinyin: "shǒushù",
    meaning: "phẫu thuật",
    examples: []
  },
  {
    id: "dict_518",
    word: "手续",
    pinyin: "shǒuxù",
    meaning: "thủ tục",
    examples: []
  },
  {
    id: "dict_519",
    word: "瘦",
    pinyin: "shòu",
    meaning: "gầy, ốm",
    examples: []
  },
  {
    id: "dict_520",
    word: "书",
    pinyin: "shū",
    meaning: "sách",
    examples: []
  },
  {
    id: "dict_521",
    word: "书架",
    pinyin: "shūjià",
    meaning: "giá sách",
    examples: []
  },
  {
    id: "dict_522",
    word: "舒服",
    pinyin: "shūfu",
    meaning: "thoải mái, dễ chịu",
    examples: []
  },
  {
    id: "dict_523",
    word: "输",
    pinyin: "shū",
    meaning: "thua",
    examples: []
  },
  {
    id: "dict_524",
    word: "熟",
    pinyin: "shú",
    meaning: "chín, quen",
    examples: []
  },
  {
    id: "dict_525",
    word: "暑假",
    pinyin: "shǔjià",
    meaning: "nghỉ hè",
    examples: []
  },
  {
    id: "dict_526",
    word: "数字",
    pinyin: "shùzì",
    meaning: "con số",
    examples: []
  },
  {
    id: "dict_527",
    word: "刷牙",
    pinyin: "shuā yá",
    meaning: "đánh răng",
    examples: []
  },
  {
    id: "dict_528",
    word: "双",
    pinyin: "shuāng",
    meaning: "đôi, cặp (lượng từ)",
    examples: []
  },
  {
    id: "dict_529",
    word: "水",
    pinyin: "shuǐ",
    meaning: "nước",
    examples: []
  },
  {
    id: "dict_530",
    word: "水果",
    pinyin: "shuǐguǒ",
    meaning: "trái cây, hoa quả",
    examples: []
  },
  {
    id: "dict_531",
    word: "水平",
    pinyin: "shuǐpíng",
    meaning: "trình độ",
    examples: []
  },
  {
    id: "dict_532",
    word: "睡觉",
    pinyin: "shuì jiào",
    meaning: "đi ngủ",
    examples: []
  },
  {
    id: "dict_533",
    word: "说",
    pinyin: "shuō",
    meaning: "nói",
    examples: []
  },
  {
    id: "dict_534",
    word: "司机",
    pinyin: "sījī",
    meaning: "tài xế",
    examples: []
  },
  {
    id: "dict_535",
    word: "四",
    pinyin: "sì",
    meaning: "bốn",
    examples: []
  },
  {
    id: "dict_536",
    word: "送",
    pinyin: "sòng",
    meaning: "tặng, tiễn, đưa",
    examples: []
  },
  {
    id: "dict_537",
    word: "虽然",
    pinyin: "suīrán",
    meaning: "tuy nhiên, mặc dù",
    examples: []
  },
  {
    id: "dict_538",
    word: "所以",
    pinyin: "suǒyǐ",
    meaning: "cho nên, vì vậy",
    examples: []
  },
  {
    id: "dict_539",
    word: "他",
    pinyin: "tā",
    meaning: "anh ấy (ngôi thứ 3 số ít nam)",
    examples: []
  },
  {
    id: "dict_540",
    word: "她",
    pinyin: "tā",
    meaning: "cô ấy (ngôi thứ 3 số ít nữ)",
    examples: []
  },
  {
    id: "dict_541",
    word: "它",
    pinyin: "tā",
    meaning: "nó (ngôi thứ 3 số ít vật)",
    examples: []
  },
  {
    id: "dict_542",
    word: "抬",
    pinyin: "tái",
    meaning: "ngẩng, nhấc, khiêng",
    examples: []
  },
  {
    id: "dict_543",
    word: "太",
    pinyin: "tài",
    meaning: "quá, lắm",
    examples: []
  },
  {
    id: "dict_544",
    word: "太阳",
    pinyin: "tàiyáng",
    meaning: "mặt trời",
    examples: []
  },
  {
    id: "dict_545",
    word: "态度",
    pinyin: "tàidu",
    meaning: "thái độ",
    examples: []
  },
  {
    id: "dict_546",
    word: "谈",
    pinyin: "tán",
    meaning: "nói chuyện, đàm đạo",
    examples: []
  },
  {
    id: "dict_547",
    word: "汤",
    pinyin: "tāng",
    meaning: "canh",
    examples: []
  },
  {
    id: "dict_548",
    word: "糖",
    pinyin: "táng",
    meaning: "đường, kẹo",
    examples: []
  },
  {
    id: "dict_549",
    word: "躺",
    pinyin: "tǎng",
    meaning: "nằm",
    examples: []
  },
  {
    id: "dict_550",
    word: "趟",
    pinyin: "tàng",
    meaning: "chuyến, lần (lượng từ)",
    examples: []
  },
  {
    id: "dict_551",
    word: "讨论",
    pinyin: "tǎolùn",
    meaning: "thảo luận",
    examples: []
  },
  {
    id: "dict_552",
    word: "套",
    pinyin: "tào",
    meaning: "bộ (lượng từ)",
    examples: []
  },
  {
    id: "dict_553",
    word: "特别",
    pinyin: "tèbié",
    meaning: "đặc biệt",
    examples: []
  },
  {
    id: "dict_554",
    word: "疼",
    pinyin: "téng",
    meaning: "đau",
    examples: []
  },
  {
    id: "dict_555",
    word: "踢",
    pinyin: "tī",
    meaning: "đá",
    examples: []
  },
  {
    id: "dict_556",
    word: "题",
    pinyin: "tí",
    meaning: "đề bài, câu hỏi",
    examples: []
  },
  {
    id: "dict_557",
    word: "提高",
    pinyin: "tígāo",
    meaning: "nâng cao",
    examples: []
  },
  {
    id: "dict_558",
    word: "体育场",
    pinyin: "tǐyùchǎng",
    meaning: "sân vận động",
    examples: []
  },
  {
    id: "dict_559",
    word: "替",
    pinyin: "tì",
    meaning: "thay, thế",
    examples: []
  },
  {
    id: "dict_560",
    word: "天",
    pinyin: "tiān",
    meaning: "trời, ngày",
    examples: []
  },
  {
    id: "dict_561",
    word: "天气",
    pinyin: "tiānqì",
    meaning: "thời tiết",
    examples: []
  },
  {
    id: "dict_562",
    word: "填",
    pinyin: "tián",
    meaning: "điền vào",
    examples: []
  },
  {
    id: "dict_563",
    word: "条",
    pinyin: "tiáo",
    meaning: "con, cái, chiếc (lượng từ cho vật dài)",
    examples: []
  },
  {
    id: "dict_564",
    word: "条子",
    pinyin: "tiáozi",
    meaning: "mảnh giấy, tờ giấy nhỏ",
    examples: []
  },
  {
    id: "dict_565",
    word: "跳",
    pinyin: "tiào",
    meaning: "nhảy",
    examples: []
  },
  {
    id: "dict_566",
    word: "跳舞",
    pinyin: "tiào wǔ",
    meaning: "khiêu vũ, nhảy múa",
    examples: []
  },
  {
    id: "dict_567",
    word: "听",
    pinyin: "tīng",
    meaning: "nghe",
    examples: []
  },
  {
    id: "dict_568",
    word: "听说",
    pinyin: "tīngshuō",
    meaning: "nghe nói",
    examples: []
  },
  {
    id: "dict_569",
    word: "挺",
    pinyin: "tǐng",
    meaning: "rất, khá",
    examples: []
  },
  {
    id: "dict_570",
    word: "通",
    pinyin: "tōng",
    meaning: "thông, suốt",
    examples: []
  },
  {
    id: "dict_571",
    word: "通过",
    pinyin: "tōngguò",
    meaning: "thông qua",
    examples: []
  },
  {
    id: "dict_572",
    word: "通知",
    pinyin: "tōngzhī",
    meaning: "thông báo",
    examples: []
  },
  {
    id: "dict_573",
    word: "同意",
    pinyin: "tóngyì",
    meaning: "đồng ý",
    examples: []
  },
  {
    id: "dict_574",
    word: "同学",
    pinyin: "tóngxué",
    meaning: "bạn cùng học",
    examples: []
  },
  {
    id: "dict_575",
    word: "同志",
    pinyin: "tóngzhì",
    meaning: "đồng chí",
    examples: []
  },
  {
    id: "dict_576",
    word: "痛",
    pinyin: "tòng",
    meaning: "đau",
    examples: []
  },
  {
    id: "dict_577",
    word: "偷",
    pinyin: "tōu",
    meaning: "ăn cắp, trộm",
    examples: []
  },
  {
    id: "dict_578",
    word: "头",
    pinyin: "tóu",
    meaning: "đầu",
    examples: []
  },
  {
    id: "dict_579",
    word: "头发",
    pinyin: "tóufa",
    meaning: "tóc",
    examples: []
  },
  {
    id: "dict_580",
    word: "图书馆",
    pinyin: "tūshūguǎn",
    meaning: "thư viện",
    examples: []
  },
  {
    id: "dict_581",
    word: "腿",
    pinyin: "tuǐ",
    meaning: "chân",
    examples: []
  },
  {
    id: "dict_582",
    word: "脱",
    pinyin: "tuō",
    meaning: "cởi, thoát",
    examples: []
  },
  {
    id: "dict_583",
    word: "外",
    pinyin: "wài",
    meaning: "ngoài, phía ngoài",
    examples: []
  },
  {
    id: "dict_584",
    word: "外国",
    pinyin: "wàiguó",
    meaning: "nước ngoài",
    examples: []
  },
  {
    id: "dict_585",
    word: "外汇",
    pinyin: "wàihuì",
    meaning: "ngoại hối",
    examples: []
  },
  {
    id: "dict_586",
    word: "外语",
    pinyin: "wàiyǔ",
    meaning: "ngoại ngữ",
    examples: []
  },
  {
    id: "dict_587",
    word: "完",
    pinyin: "wán",
    meaning: "xong, hết",
    examples: []
  },
  {
    id: "dict_588",
    word: "完成",
    pinyin: "wánchéng",
    meaning: "hoàn thành",
    examples: []
  },
  {
    id: "dict_589",
    word: "玩儿",
    pinyin: "wánr",
    meaning: "chơi",
    examples: []
  },
  {
    id: "dict_590",
    word: "晚",
    pinyin: "wǎn",
    meaning: "muộn, trễ, tối",
    examples: []
  },
  {
    id: "dict_591",
    word: "晚饭",
    pinyin: "wǎn fàn",
    meaning: "cơm tối",
    examples: []
  },
  {
    id: "dict_592",
    word: "晚上",
    pinyin: "wǎnshang",
    meaning: "buổi tối",
    examples: []
  },
  {
    id: "dict_593",
    word: "碗",
    pinyin: "wǎn",
    meaning: "bát, chén",
    examples: []
  },
  {
    id: "dict_594",
    word: "万",
    pinyin: "wàn",
    meaning: "vạn (10.000)",
    examples: []
  },
  {
    id: "dict_595",
    word: "王",
    pinyin: "wáng",
    meaning: "vua (họ Vương)",
    examples: []
  },
  {
    id: "dict_596",
    word: "往",
    pinyin: "wǎng",
    meaning: "về hướng, đi tới",
    examples: []
  },
  {
    id: "dict_597",
    word: "忘记",
    pinyin: "wàngjì",
    meaning: "quên",
    examples: []
  },
  {
    id: "dict_598",
    word: "危险",
    pinyin: "wēixiǎn",
    meaning: "nguy hiểm",
    examples: []
  },
  {
    id: "dict_599",
    word: "为",
    pinyin: "wèi",
    meaning: "vì",
    examples: []
  },
  {
    id: "dict_600",
    word: "喂",
    pinyin: "wèi",
    meaning: "alo / cho ăn",
    examples: []
  },
  {
    id: "dict_601",
    word: "位",
    pinyin: "wèi",
    meaning: "vị (lượng từ kính cẩn)",
    examples: []
  },
  {
    id: "dict_602",
    word: "为什么",
    pinyin: "wèi shénme",
    meaning: "tại sao",
    examples: []
  },
  {
    id: "dict_603",
    word: "卫生间",
    pinyin: "wèishēngjiān",
    meaning: "nhà vệ sinh",
    examples: []
  },
  {
    id: "dict_604",
    word: "文化",
    pinyin: "wénhuà",
    meaning: "văn hóa",
    examples: []
  },
  {
    id: "dict_605",
    word: "问",
    pinyin: "wèn",
    meaning: "hỏi",
    examples: []
  },
  {
    id: "dict_606",
    word: "问题",
    pinyin: "wèntí",
    meaning: "vấn đề, câu hỏi",
    examples: []
  },
  {
    id: "dict_607",
    word: "我",
    pinyin: "wǒ",
    meaning: "tôi, mình (ngôi thứ 1 số ít)",
    examples: []
  },
  {
    id: "dict_608",
    word: "我们",
    pinyin: "wǒmen",
    meaning: "chúng tôi (ngôi thứ 1 số nhiều)",
    examples: []
  },
  {
    id: "dict_609",
    word: "午饭",
    pinyin: "wǔ fàn",
    meaning: "cơm trưa",
    examples: []
  },
  {
    id: "dict_610",
    word: "五",
    pinyin: "wǔ",
    meaning: "năm",
    examples: []
  },
  {
    id: "dict_611",
    word: "西",
    pinyin: "xī",
    meaning: "phương Tây",
    examples: []
  },
  {
    id: "dict_612",
    word: "西边",
    pinyin: "xībiản",
    meaning: "phía Tây",
    examples: []
  },
  {
    id: "dict_613",
    word: "习惯",
    pinyin: "xíguàn",
    meaning: "thói quen, tập quán",
    examples: []
  },
  {
    id: "dict_614",
    word: "洗",
    pinyin: "xǐ",
    meaning: "rửa, giặt, gội",
    examples: []
  },
  {
    id: "dict_615",
    word: "洗手间",
    pinyin: "xǐshǒujiān",
    meaning: "phòng vệ sinh",
    examples: []
  },
  {
    id: "dict_616",
    word: "洗澡",
    pinyin: "xǐ zǎo",
    meaning: "tắm",
    examples: []
  },
  {
    id: "dict_617",
    word: "喜欢",
    pinyin: "xǐhuan",
    meaning: "thích",
    examples: []
  },
  {
    id: "dict_618",
    word: "系",
    pinyin: "xì",
    meaning: "khoa (đại học)",
    examples: []
  },
  {
    id: "dict_619",
    word: "下",
    pinyin: "xià",
    meaning: "dưới, phía dưới / xuống",
    examples: []
  },
  {
    id: "dict_620",
    word: "下车",
    pinyin: "xià chē",
    meaning: "xuống xe",
    examples: []
  },
  {
    id: "dict_621",
    word: "下课",
    pinyin: "xià kè",
    meaning: "tan học, hết giờ học",
    examples: []
  },
  {
    id: "dict_622",
    word: "下午",
    pinyin: "xiàwǔ",
    meaning: "buổi chiều",
    examples: []
  },
  {
    id: "dict_623",
    word: "夏天",
    pinyin: "xiàtiān",
    meaning: "mùa hè",
    examples: []
  },
  {
    id: "dict_624",
    word: "先",
    pinyin: "xiān",
    meaning: "trước",
    examples: []
  },
  {
    id: "dict_625",
    word: "先生",
    pinyin: "xiānsheng",
    meaning: "ông, ngài, tiên sinh",
    examples: []
  },
  {
    id: "dict_626",
    word: "现代",
    pinyin: "xiàndài",
    meaning: "hiện đại",
    examples: []
  },
  {
    id: "dict_627",
    word: "相信",
    pinyin: "xiāngxìn",
    meaning: "tin tưởng",
    examples: []
  },
  {
    id: "dict_628",
    word: "香",
    pinyin: "xiāng",
    meaning: "thơm",
    examples: []
  },
  {
    id: "dict_629",
    word: "香蕉",
    pinyin: "xiāngjiāo",
    meaning: "chuối",
    examples: []
  },
  {
    id: "dict_630",
    word: "箱子",
    pinyin: "xiāngzi",
    meaning: "va li, hòm, rương",
    examples: []
  },
  {
    id: "dict_631",
    word: "响",
    pinyin: "xiǎng",
    meaning: "vang, kêu",
    examples: []
  },
  {
    id: "dict_632",
    word: "想",
    pinyin: "xiǎng",
    meaning: "muốn / tưởng nhớ / suy nghĩ",
    examples: []
  },
  {
    id: "dict_633",
    word: "向",
    pinyin: "xiàng",
    meaning: "về hướng / hướng về",
    examples: []
  },
  {
    id: "dict_634",
    word: "像",
    pinyin: "xiàng",
    meaning: "như, giống như",
    examples: []
  },
  {
    id: "dict_635",
    word: "消息",
    pinyin: "xiāoxi",
    meaning: "tin tức",
    examples: []
  },
  {
    id: "dict_636",
    word: "小",
    pinyin: "xiǎo",
    meaning: "nhỏ, bé",
    examples: []
  },
  {
    id: "dict_637",
    word: "小姐",
    pinyin: "xiǎojiě",
    meaning: "cô, tiểu thư",
    examples: []
  },
  {
    id: "dict_638",
    word: "小时候",
    pinyin: "xiǎoshíhou",
    meaning: "lúc nhỏ",
    examples: []
  },
  {
    id: "dict_639",
    word: "小说",
    pinyin: "xiǎoxuō",
    meaning: "tiểu thuyết",
    examples: []
  },
  {
    id: "dict_640",
    word: "小心",
    pinyin: "xiǎoxīn",
    meaning: "cẩn thận",
    examples: []
  },
  {
    id: "dict_641",
    word: "小时",
    pinyin: "xiǎoshí",
    meaning: "tiếng đồng hồ",
    examples: []
  },
  {
    id: "dict_642",
    word: "笑",
    pinyin: "xiào",
    meaning: "cười",
    examples: []
  },
  {
    id: "dict_643",
    word: "些",
    pinyin: "xiē",
    meaning: "một vài, một số (lượng từ số nhiều)",
    examples: []
  },
  {
    id: "dict_644",
    word: "鞋",
    pinyin: "xié",
    meaning: "giầy",
    examples: []
  },
  {
    id: "dict_645",
    word: "写",
    pinyin: "xiě",
    meaning: "viết",
    examples: []
  },
  {
    id: "dict_646",
    word: "谢谢",
    pinyin: "xièxie",
    meaning: "cảm ơn",
    examples: []
  },
  {
    id: "dict_647",
    word: "新",
    pinyin: "xīn",
    meaning: "mới",
    examples: []
  },
  {
    id: "dict_648",
    word: "新年",
    pinyin: "xīnnián",
    meaning: "năm mới",
    examples: []
  },
  {
    id: "dict_649",
    word: "新闻",
    pinyin: "xīnwén",
    meaning: "tin tức, thời sự",
    examples: []
  },
  {
    id: "dict_650",
    word: "信",
    pinyin: "xìn",
    meaning: "thư / tin tưởng",
    examples: []
  },
  {
    id: "dict_651",
    word: "信用卡",
    pinyin: "xìnyòngkǎ",
    meaning: "thẻ tín dụng",
    examples: []
  },
  {
    id: "dict_652",
    word: "信心",
    pinyin: "xìnxīn",
    meaning: "lòng tin, niềm tin",
    examples: []
  },
  {
    id: "dict_653",
    word: "星期",
    pinyin: "xīngqī",
    meaning: "tuần",
    examples: []
  },
  {
    id: "dict_654",
    word: "星期日",
    pinyin: "xīngqīrì",
    meaning: "Chủ nhật",
    examples: []
  },
  {
    id: "dict_655",
    word: "行",
    pinyin: "xíng",
    meaning: "được / đi",
    examples: []
  },
  {
    id: "dict_656",
    word: "行李",
    pinyin: "xíngli",
    meaning: "hành lý",
    examples: []
  },
  {
    id: "dict_657",
    word: "姓",
    pinyin: "xìng",
    meaning: "họ (tên)",
    examples: []
  },
  {
    id: "dict_658",
    word: "姓名",
    pinyin: "xìngmíng",
    meaning: "họ tên",
    examples: []
  },
  {
    id: "dict_659",
    word: "休息",
    pinyin: "xiūxi",
    meaning: "nghỉ ngơi",
    examples: []
  },
  {
    id: "dict_660",
    word: "修",
    pinyin: "xiū",
    meaning: "sửa chữa",
    examples: []
  },
  {
    id: "dict_661",
    word: "希望",
    pinyin: "xīwàng",
    meaning: "hy vọng",
    examples: []
  },
  {
    id: "dict_662",
    word: "学",
    pinyin: "xué",
    meaning: "học",
    examples: []
  },
  {
    id: "dict_663",
    word: "学生",
    pinyin: "xuésheng",
    meaning: "học sinh, sinh viên",
    examples: []
  },
  {
    id: "dict_664",
    word: "学习",
    pinyin: "xuéxí",
    meaning: "học tập",
    examples: []
  },
  {
    id: "dict_665",
    word: "学校",
    pinyin: "xuéxiào",
    meaning: "trường học",
    examples: []
  },
  {
    id: "dict_666",
    word: "雪",
    pinyin: "xuě",
    meaning: "tuyết",
    examples: []
  },
  {
    id: "dict_667",
    word: "呀",
    pinyin: "ya",
    meaning: "ôi, hử, đấy (trợ từ biểu cảm)",
    examples: []
  },
  {
    id: "dict_668",
    word: "牙",
    pinyin: "yá",
    meaning: "răng",
    examples: []
  },
  {
    id: "dict_669",
    word: "演出",
    pinyin: "yǎnchū",
    meaning: "biểu diễn",
    examples: []
  },
  {
    id: "dict_670",
    word: "演员",
    pinyin: "yǎnyuán",
    meaning: "diễn viên",
    examples: []
  },
  {
    id: "dict_671",
    word: "眼镜",
    pinyin: "yǎnjìng",
    meaning: "mắt kính",
    examples: []
  },
  {
    id: "dict_672",
    word: "眼睛",
    pinyin: "yǎnjing",
    meaning: "mắt",
    examples: []
  },
  {
    id: "dict_673",
    word: "宴会",
    pinyin: "yànhuì",
    meaning: "yến tiệc",
    examples: []
  },
  {
    id: "dict_674",
    word: "羊",
    pinyin: "yáng",
    meaning: "con cừu, dê",
    examples: []
  },
  {
    id: "dict_675",
    word: "样子",
    pinyin: "yàngzi",
    meaning: "hình dáng, kiểu dáng",
    examples: []
  },
  {
    id: "dict_676",
    word: "药",
    pinyin: "yào",
    meaning: "thuốc",
    examples: []
  },
  {
    id: "dict_677",
    word: "药方",
    pinyin: "yàofāng",
    meaning: "đơn thuốc",
    examples: []
  },
  {
    id: "dict_678",
    word: "要",
    pinyin: "yào",
    meaning: "muốn, cần, phải, sẽ",
    examples: []
  },
  {
    id: "dict_679",
    word: "要是",
    pinyin: "yàoshi",
    meaning: "nếu như",
    examples: []
  },
  {
    id: "dict_680",
    word: "也",
    pinyin: "yě",
    meaning: "cũng",
    examples: []
  },
  {
    id: "dict_681",
    word: "也许",
    pinyin: "yěxǔ",
    meaning: "có lẽ",
    examples: []
  },
  {
    id: "dict_682",
    word: "页",
    pinyin: "yè",
    meaning: "trang (sách)",
    examples: []
  },
  {
    id: "dict_683",
    word: "一",
    pinyin: "yī",
    meaning: "một",
    examples: []
  },
  {
    id: "dict_684",
    word: "一般",
    pinyin: "yìbān",
    meaning: "thông thường, bình thường",
    examples: []
  },
  {
    id: "dict_685",
    word: "一边",
    pinyin: "yìbiān",
    meaning: "vừa... vừa... (biểu thị 2 hành động cùng lúc)",
    examples: []
  },
  {
    id: "dict_686",
    word: "一点儿",
    pinyin: "yìdiǎnr",
    meaning: "một ít, một chút",
    examples: []
  },
  {
    id: "dict_687",
    word: "一共",
    pinyin: "yígòng",
    meaning: "tổng cộng",
    examples: []
  },
  {
    id: "dict_688",
    word: "一会儿",
    pinyin: "yíhuìr",
    meaning: "một lát, một chốc",
    examples: []
  },
  {
    id: "dict_689",
    word: "一路上",
    pinyin: "yílùshang",
    meaning: "suốt đường đi",
    examples: []
  },
  {
    id: "dict_690",
    word: "一切",
    pinyin: "yíqiè",
    meaning: "tất cả",
    examples: []
  },
  {
    id: "dict_691",
    word: "一下儿",
    pinyin: "yíxiàr",
    meaning: "một cái, một tí (thử làm gì đó)",
    examples: []
  },
  {
    id: "dict_692",
    word: "一样",
    pinyin: "yíyàng",
    meaning: "giống nhau",
    examples: []
  },
  {
    id: "dict_693",
    word: "一直",
    pinyin: "yìzhí",
    meaning: "luôn luôn, thẳng",
    examples: []
  },
  {
    id: "dict_694",
    word: "医生",
    pinyin: "yīshēng",
    meaning: "bác sĩ",
    examples: []
  },
  {
    id: "dict_695",
    word: "医院",
    pinyin: "yīyuàn",
    meaning: "bệnh viện",
    examples: []
  },
  {
    id: "dict_696",
    word: "衣服",
    pinyin: "yīfu",
    meaning: "quần áo",
    examples: []
  },
  {
    id: "dict_697",
    word: "姨",
    pinyin: "yí",
    meaning: "dì",
    examples: []
  },
  {
    id: "dict_698",
    word: "已经",
    pinyin: "yǐjīng",
    meaning: "đã, rồi",
    examples: []
  },
  {
    id: "dict_699",
    word: "以后",
    pinyin: "yǐhòu",
    meaning: "sau này, sau khi",
    examples: []
  },
  {
    id: "dict_700",
    word: "以前",
    pinyin: "yǐqián",
    meaning: "trước đây, trước khi",
    examples: []
  },
  {
    id: "dict_701",
    word: "以为",
    pinyin: "yǐwéi",
    meaning: "tưởng là, cho là",
    examples: []
  },
  {
    id: "dict_702",
    word: "艺术",
    pinyin: "yìshù",
    meaning: "nghệ thuật",
    examples: []
  },
  {
    id: "dict_703",
    word: "意思",
    pinyin: "yìsi",
    meaning: "ý nghĩa / sở thích",
    examples: []
  },
  {
    id: "dict_704",
    word: "因为",
    pinyin: "yīnwèi",
    meaning: "vì, bởi vì",
    examples: []
  },
  {
    id: "dict_705",
    word: "音乐",
    pinyin: "yīnyuè",
    meaning: "âm nhạc",
    examples: []
  },
  {
    id: "dict_706",
    word: "银行",
    pinyin: "yínháng",
    meaning: "ngân hàng",
    examples: []
  },
  {
    id: "dict_707",
    word: "应该",
    pinyin: "yīnggāi",
    meaning: "nên",
    examples: []
  },
  {
    id: "dict_708",
    word: "英文",
    pinyin: "Yīngwén",
    meaning: "tiếng Anh (văn viết)",
    examples: []
  },
  {
    id: "dict_709",
    word: "英语",
    pinyin: "Yīngyǔ",
    meaning: "tiếng Anh (văn nói)",
    examples: []
  },
  {
    id: "dict_710",
    word: "营业员",
    pinyin: "yíngyèyuán",
    meaning: "nhân viên bán hàng, giao dịch viên",
    examples: []
  },
  {
    id: "dict_711",
    word: "邮局",
    pinyin: "yóujú",
    meaning: "bưu điện",
    examples: []
  },
  {
    id: "dict_712",
    word: "邮票",
    pinyin: "yóupiào",
    meaning: "tem thư",
    examples: []
  },
  {
    id: "dict_713",
    word: "游泳",
    pinyin: "yóu yǒng",
    meaning: "bơi lội",
    examples: []
  },
  {
    id: "dict_714",
    word: "有",
    pinyin: "yǒu",
    meaning: "có",
    examples: []
  },
  {
    id: "dict_715",
    word: "有点儿",
    pinyin: "yǒudiǎnr",
    meaning: "có chút, hơi hơi",
    examples: []
  },
  {
    id: "dict_716",
    word: "有名",
    pinyin: "yǒumíng",
    meaning: "nổi tiếng",
    examples: []
  },
  {
    id: "dict_717",
    word: "有意思",
    pinyin: "yǒuyìsi",
    meaning: "có ý nghĩa, thú vị",
    examples: []
  },
  {
    id: "dict_718",
    word: "又",
    pinyin: "yòu",
    meaning: "lại (biểu thị sự lặp lại đã xảy ra)",
    examples: []
  },
  {
    id: "dict_719",
    word: "右边",
    pinyin: "yòubian",
    meaning: "bên phải",
    examples: []
  },
  {
    id: "dict_720",
    word: "鱼",
    pinyin: "yú",
    meaning: "con cá",
    examples: []
  },
  {
    id: "dict_721",
    word: "愉快",
    pinyin: "yúkuài",
    meaning: "vui vẻ, hạnh phúc",
    examples: []
  },
  {
    id: "dict_722",
    word: "雨",
    pinyin: "yǔ",
    meaning: "mưa",
    examples: []
  },
  {
    id: "dict_723",
    word: "语法",
    pinyin: "yǔfǎ",
    meaning: "ngữ pháp",
    examples: []
  },
  {
    id: "dict_724",
    word: "语言",
    pinyin: "yǔyán",
    meaning: "ngôn ngữ",
    examples: []
  },
  {
    id: "dict_725",
    word: "玉米",
    pinyin: "yùmǐ",
    meaning: "ngô, bắp",
    examples: []
  },
  {
    id: "dict_726",
    word: "预习",
    pinyin: "yùxí",
    meaning: "chuẩn bị bài mới",
    examples: []
  },
  {
    id: "dict_727",
    word: "元",
    pinyin: "yuán",
    meaning: "đồng (đơn vị tiền tệ)",
    examples: []
  },
  {
    id: "dict_728",
    word: "远",
    pinyin: "yuǎn",
    meaning: "xa",
    examples: []
  },
  {
    id: "dict_729",
    word: "原谅",
    pinyin: "yuánliàng",
    meaning: "tha thứ, lượng thứ",
    examples: []
  },
  {
    id: "dict_730",
    word: "愿意",
    pinyin: "yuànyì",
    meaning: "tự nguyện, bằng lòng, muốn",
    examples: []
  },
  {
    id: "dict_731",
    word: "月",
    pinyin: "yuè",
    meaning: "tháng, mặt trăng",
    examples: []
  },
  {
    id: "dict_732",
    word: "月份",
    pinyin: "yuèfèn",
    meaning: "tháng",
    examples: []
  },
  {
    id: "dict_733",
    word: "越...越...",
    pinyin: "yuè...yuè",
    meaning: "càng... càng...",
    examples: []
  },
  {
    id: "dict_734",
    word: "再",
    pinyin: "zài",
    meaning: "lại (biểu thị sự lặp lại sắp xảy ra)",
    examples: []
  },
  {
    id: "dict_735",
    word: "再见",
    pinyin: "zài jiàn",
    meaning: "tạm biệt",
    examples: []
  },
  {
    id: "dict_736",
    word: "在",
    pinyin: "zài",
    meaning: "ở / đang",
    examples: []
  },
  {
    id: "dict_737",
    word: "咱们",
    pinyin: "zánmen",
    meaning: "chúng ta (bao hàm cả người nghe)",
    examples: []
  },
  {
    id: "dict_738",
    word: "脏",
    pinyin: "zāng",
    meaning: "bẩn, dơ",
    examples: []
  },
  {
    id: "dict_739",
    word: "早",
    pinyin: "zǎo",
    meaning: "sớm",
    examples: []
  },
  {
    id: "dict_740",
    word: "早饭",
    pinyin: "zǎo fàn",
    meaning: "cơm sáng",
    examples: []
  },
  {
    id: "dict_741",
    word: "早上",
    pinyin: "zǎoshang",
    meaning: "buổi sáng sớm",
    examples: []
  },
  {
    id: "dict_742",
    word: "怎么",
    pinyin: "zěnme",
    meaning: "thế nào, sao, làm sao",
    examples: []
  },
  {
    id: "dict_743",
    word: "怎么样",
    pinyin: "zěnmeyàng",
    meaning: "thế nào, ra sao",
    examples: []
  },
  {
    id: "dict_744",
    word: "增加",
    pinyin: "zēngjiā",
    meaning: "tăng thêm",
    examples: []
  },
  {
    id: "dict_745",
    word: "张",
    pinyin: "zhāng",
    meaning: "tờ, miếng (lượng từ cho vật phẳng)",
    examples: []
  },
  {
    id: "dict_746",
    word: "展览",
    pinyin: "zhǎnlǎn",
    meaning: "triển lãm",
    examples: []
  },
  {
    id: "dict_747",
    word: "展览馆",
    pinyin: "zhǎnlǎnguǎn",
    meaning: "nhà triển lãm",
    examples: []
  },
  {
    id: "dict_748",
    word: "找",
    pinyin: "zhǎo",
    meaning: "tìm / thối lại (tiền)",
    examples: []
  },
  {
    id: "dict_749",
    word: "照顾",
    pinyin: "zhàogù",
    meaning: "chăm sóc, chiếu cố",
    examples: []
  },
  {
    id: "dict_750",
    word: "照片",
    pinyin: "zhàopiàn",
    meaning: "bức ảnh",
    examples: []
  },
  {
    id: "dict_751",
    word: "照相",
    pinyin: "zhào xiàng",
    meaning: "chụp hình",
    examples: []
  },
  {
    id: "dict_752",
    word: "照相机",
    pinyin: "zhàoxiàngjī",
    meaning: "máy chụp hình",
    examples: []
  },
  {
    id: "dict_753",
    word: "这",
    pinyin: "zhè",
    meaning: "này, đây",
    examples: []
  },
  {
    id: "dict_754",
    word: "这儿",
    pinyin: "zhèr",
    meaning: "ở đây",
    examples: []
  },
  {
    id: "dict_755",
    word: "这样",
    pinyin: "zhèyàng",
    meaning: "như thế này",
    examples: []
  },
  {
    id: "dict_756",
    word: "真",
    pinyin: "zhēn",
    meaning: "thật, thật sự",
    examples: []
  },
  {
    id: "dict_757",
    word: "正",
    pinyin: "zhèng",
    meaning: "đang / ngay ngắn / chính",
    examples: []
  },
  {
    id: "dict_758",
    word: "正在",
    pinyin: "zhèngzài",
    meaning: "đang (biểu thị hành động tiếp diễn)",
    examples: []
  },
  {
    id: "dict_759",
    word: "知道",
    pinyin: "zhīdao",
    meaning: "biết",
    examples: []
  },
  {
    id: "dict_760",
    word: "知识",
    pinyin: "zhīshi",
    meaning: "tri thức, kiến thức",
    examples: []
  },
  {
    id: "dict_761",
    word: "支",
    pinyin: "zhī",
    meaning: "cái (lượng từ cho vật dạng gậy)",
    examples: []
  },
  {
    id: "dict_762",
    word: "直",
    pinyin: "zhí",
    meaning: "thẳng",
    examples: []
  },
  {
    id: "dict_763",
    word: "职业",
    pinyin: "zhíyè",
    meaning: "nghề nghiệp",
    examples: []
  },
  {
    id: "dict_764",
    word: "指",
    pinyin: "zhǐ",
    meaning: "chỉ vào",
    examples: []
  },
  {
    id: "dict_765",
    word: "只",
    pinyin: "zhǐ",
    meaning: "chỉ",
    examples: []
  },
  {
    id: "dict_766",
    word: "钟",
    pinyin: "zhōng",
    meaning: "chuông / tiếng (đồng hồ)",
    examples: []
  },
  {
    id: "dict_767",
    word: "中国",
    pinyin: "Zhōngguó",
    meaning: "Trung Quốc",
    examples: []
  },
  {
    id: "dict_768",
    word: "中间",
    pinyin: "zhōngjiān",
    meaning: "ở giữa",
    examples: []
  },
  {
    id: "dict_769",
    word: "中午",
    pinyin: "zhōngwǔ",
    meaning: "buổi trưa",
    examples: []
  },
  {
    id: "dict_770",
    word: "中学",
    pinyin: "zhōngxué",
    meaning: "trường trung học",
    examples: []
  },
  {
    id: "dict_771",
    word: "种",
    pinyin: "zhǒng",
    meaning: "loại (lượng từ)",
    examples: []
  },
  {
    id: "dict_772",
    word: "重",
    pinyin: "zhòng",
    meaning: "nặng",
    examples: []
  },
  {
    id: "dict_773",
    word: "周末",
    pinyin: "zhōumò",
    meaning: "cuối tuần",
    examples: []
  },
  {
    id: "dict_774",
    word: "住",
    pinyin: "zhù",
    meaning: "ở, cư trú",
    examples: []
  },
  {
    id: "dict_775",
    word: "祝",
    pinyin: "zhù",
    meaning: "chúc, cầu chúc",
    examples: []
  },
  {
    id: "dict_776",
    word: "注意",
    pinyin: "zhùyì",
    meaning: "chú ý",
    examples: []
  },
  {
    id: "dict_777",
    word: "准备",
    pinyin: "zhǔnbèi",
    meaning: "chuẩn bị",
    examples: []
  },
  {
    id: "dict_778",
    word: "桌子",
    pinyin: "zhuōzi",
    meaning: "cái bàn",
    examples: []
  },
  {
    id: "dict_779",
    word: "字",
    pinyin: "zì",
    meaning: "chữ",
    examples: []
  },
  {
    id: "dict_780",
    word: "字典",
    pinyin: "zìdiǎn",
    meaning: "từ điển",
    examples: []
  },
  {
    id: "dict_781",
    word: "自己",
    pinyin: "zìjǐ",
    meaning: "tự mình, bản thân",
    examples: []
  },
  {
    id: "dict_782",
    word: "走",
    pinyin: "zǒu",
    meaning: "đi",
    examples: []
  },
  {
    id: "dict_783",
    word: "租",
    pinyin: "zū",
    meaning: "thuê, mướn",
    examples: []
  },
  {
    id: "dict_784",
    word: "足球",
    pinyin: "zúqiú",
    meaning: "bóng đá",
    examples: []
  },
  {
    id: "dict_785",
    word: "最",
    pinyin: "zuì",
    meaning: "nhất (biểu thị mức độ cao nhất)",
    examples: []
  },
  {
    id: "dict_786",
    word: "最后",
    pinyin: "zuìhòu",
    meaning: "cuối cùng",
    examples: []
  },
  {
    id: "dict_787",
    word: "用",
    pinyin: "yòng",
    meaning: "dùng, sử dụng",
    examples: []
  },
  {
    id: "dict_788",
    word: "有时候",
    pinyin: "yǒushíhou",
    meaning: "có khi, có lúc",
    examples: []
  },
  {
    id: "dict_789",
    word: "友谊",
    pinyin: "yǒuyì",
    meaning: "hữu nghị",
    examples: []
  },
  {
    id: "dict_790",
    word: "又...又...",
    pinyin: "yòu...yòu...",
    meaning: "vừa... vừa... (biểu thị 2 tính chất cùng lúc)",
    examples: []
  },
  {
    id: "dict_791",
    word: "圆珠笔",
    pinyin: "yuánzhūbǐ",
    meaning: "bút bi",
    examples: []
  },
  {
    id: "dict_792",
    word: "约",
    pinyin: "yuē",
    meaning: "hẹn",
    examples: []
  },
  {
    id: "dict_793",
    word: "约会",
    pinyin: "yuèhuì",
    meaning: "cuộc hẹn, hẹn hò",
    examples: []
  },
  {
    id: "dict_794",
    word: "越来越",
    pinyin: "yuèláiyuè",
    meaning: "ngày càng",
    examples: []
  },
  {
    id: "dict_795",
    word: "运",
    pinyin: "yùn",
    meaning: "chở, vận chuyển",
    examples: []
  },
  {
    id: "dict_796",
    word: "运动",
    pinyin: "yùndòng",
    meaning: "vận động, thể thao",
    examples: []
  },
  {
    id: "dict_797",
    word: "杂技",
    pinyin: "zájì",
    meaning: "tạp kỹ, xiếc",
    examples: []
  },
  {
    id: "dict_798",
    word: "杂志",
    pinyin: "zázhì",
    meaning: "tạp chí",
    examples: []
  },
  {
    id: "dict_799",
    word: "再说",
    pinyin: "zàishuō",
    meaning: "hơn nữa, vả lại / nói sau",
    examples: []
  },
  {
    id: "dict_800",
    word: "糟糕",
    pinyin: "zāogāo",
    meaning: "tệ hại, hỏng bét",
    examples: []
  },
  {
    id: "dict_801",
    word: "站",
    pinyin: "zhàn",
    meaning: "bến, ga, trạm / đứng",
    examples: []
  },
  {
    id: "dict_802",
    word: "着急",
    pinyin: "zháojí",
    meaning: "sốt ruột, lo cuống",
    examples: []
  },
  {
    id: "dict_803",
    word: "照",
    pinyin: "zhào",
    meaning: "chụp (ảnh) / soi (gương)",
    examples: []
  },
  {
    id: "dict_804",
    word: "着",
    pinyin: "zhe",
    meaning: "đang (trợ từ động thái chỉ sự tiếp diễn)",
    examples: []
  },
  {
    id: "dict_805",
    word: "中文",
    pinyin: "Zhōngwén",
    meaning: "tiếng Trung Quốc",
    examples: []
  },
  {
    id: "dict_806",
    word: "中心",
    pinyin: "zhōngxīn",
    meaning: "trung tâm",
    examples: []
  },
  {
    id: "dict_807",
    word: "终于",
    pinyin: "zhōngyú",
    meaning: "rốt cuộc, cuối cùng",
    examples: []
  },
  {
    id: "dict_808",
    word: "主义",
    pinyin: "zhǔyì",
    meaning: "chủ nghĩa",
    examples: []
  },
  {
    id: "dict_809",
    word: "住院",
    pinyin: "zhùyuàn",
    meaning: "nằm viện",
    examples: []
  },
  {
    id: "dict_810",
    word: "祝贺",
    pinyin: "zhùhè",
    meaning: "chúc mừng",
    examples: []
  },
  {
    id: "dict_811",
    word: "转",
    pinyin: "zhuǎn",
    meaning: "quay, chuyển",
    examples: []
  },
  {
    id: "dict_812",
    word: "转告",
    pinyin: "zhuǎngào",
    meaning: "chuyển lời, nhắn lại",
    examples: []
  },
  {
    id: "dict_813",
    word: "自行车",
    pinyin: "zìxíngchē",
    meaning: "xe đạp",
    examples: []
  },
  {
    id: "dict_814",
    word: "嘴",
    pinyin: "zuǐ",
    meaning: "mồm, miệng",
    examples: []
  },
  {
    id: "dict_815",
    word: "左边",
    pinyin: "zuǒbiān",
    meaning: "bên trái",
    examples: []
  },
  {
    id: "dict_816",
    word: "昨天",
    pinyin: "zuótiān",
    meaning: "hôm qua",
    examples: []
  },
  {
    id: "dict_817",
    word: "坐",
    pinyin: "zuò",
    meaning: "ngồi",
    examples: []
  },
  {
    id: "dict_818",
    word: "作",
    pinyin: "zuò",
    meaning: "làm",
    examples: []
  },
  {
    id: "dict_819",
    word: "做",
    pinyin: "zuò",
    meaning: "làm",
    examples: []
  },
  {
    id: "dict_820",
    word: "要...了",
    pinyin: "yào...le",
    meaning: "sắp... rồi",
    examples: []
  },
  {
    id: "dict_821",
    word: "钥匙",
    pinyin: "yàoshi",
    meaning: "chìa khóa",
    examples: []
  },
  {
    id: "dict_822",
    word: "一...就...",
    pinyin: "yī...jiù...",
    meaning: "vừa... liền...",
    examples: []
  },
  {
    id: "dict_823",
    word: "衣柜",
    pinyin: "yīgù",
    meaning: "tủ quần áo",
    examples: []
  },
  {
    id: "dict_824",
    word: "一定",
    pinyin: "yīdìng",
    meaning: "nhất định",
    examples: []
  },
  {
    id: "dict_825",
    word: "遗憾",
    pinyin: "yíhàn",
    meaning: "đáng tiếc, hối tiếc",
    examples: []
  },
  {
    id: "dict_826",
    word: "以内",
    pinyin: "yǐnèi",
    meaning: "trong vòng, nội trong",
    examples: []
  },
  {
    id: "dict_827",
    word: "椅子",
    pinyin: "yǐzi",
    meaning: "ghế tựa",
    examples: []
  },
  {
    id: "dict_828",
    word: "一起",
    pinyin: "yīqǐ",
    meaning: "cùng nhau",
    examples: []
  },
  {
    id: "dict_829",
    word: "小卖部",
    pinyin: "xiǎomàibù",
    meaning: "căng tin, cửa hàng nhỏ",
    examples: []
  },
  {
    id: "dict_830",
    word: "辛苦",
    pinyin: "xīnkǔ",
    meaning: "vất vả, cực khổ",
    examples: []
  },
  {
    id: "dict_831",
    word: "幸福",
    pinyin: "xìngfú",
    meaning: "hạnh phúc",
    examples: []
  },
  {
    id: "dict_832",
    word: "熊猫",
    pinyin: "xióngmāo",
    meaning: "gấu trúc",
    examples: []
  },
  {
    id: "dict_833",
    word: "问候",
    pinyin: "wènhòu",
    meaning: "hỏi thăm",
    examples: []
  },
  {
    id: "dict_834",
    word: "舞会",
    pinyin: "wǔhuì",
    meaning: "vũ hội",
    examples: []
  },
  {
    id: "dict_835",
    word: "现代",
    pinyin: "xiàndài",
    meaning: "hiện đại",
    examples: []
  },
  {
    id: "dict_836",
    word: "香",
    pinyin: "xiāng",
    meaning: "thơm",
    examples: []
  },
  {
    id: "dict_837",
    word: "小吃",
    pinyin: "xiǎochī",
    meaning: "món ăn nhẹ, quà vặt",
    examples: []
  },
  {
    id: "dict_838",
    word: "添",
    pinyin: "tiān",
    meaning: "thêm",
    examples: []
  },
  {
    id: "dict_839",
    word: "挑",
    pinyin: "tiǎo",
    meaning: "chọn, lựa",
    examples: []
  },
  {
    id: "dict_840",
    word: "贴",
    pinyin: "tiē",
    meaning: "dán",
    examples: []
  },
  {
    id: "dict_841",
    word: "停",
    pinyin: "tíng",
    meaning: "dừng, ngừng, đậu (xe)",
    examples: []
  },
  {
    id: "dict_842",
    word: "托运",
    pinyin: "tuōyùn",
    meaning: "gửi vận chuyển",
    examples: []
  },
  {
    id: "dict_843",
    word: "他们",
    pinyin: "tāmen",
    meaning: "họ, chúng nó (số nhiều nam/chung)",
    examples: []
  },
  {
    id: "dict_844",
    word: "太极拳",
    pinyin: "tàijíquán",
    meaning: "Thái cực quyền",
    examples: []
  },
  {
    id: "dict_845",
    word: "生词",
    pinyin: "shēngcí",
    meaning: "từ mới",
    examples: []
  },
  {
    id: "dict_846",
    word: "圣诞节",
    pinyin: "Shèngdàn Jié",
    meaning: "Lễ Giáng Sinh",
    examples: []
  },
  {
    id: "dict_847",
    word: "实习",
    pinyin: "shíxí",
    meaning: "thực tập",
    examples: []
  },
  {
    id: "dict_848",
    word: "事故",
    pinyin: "shìgù",
    meaning: "sự cố, tai nạn",
    examples: []
  },
  {
    id: "dict_849",
    word: "收录机",
    pinyin: "shōulùjī",
    meaning: "máy cát-xét",
    examples: []
  },
  {
    id: "dict_850",
    word: "手表",
    pinyin: "shǒubiǎo",
    meaning: "đồng hồ đeo tay",
    examples: []
  },
  {
    id: "dict_851",
    word: "手提包",
    pinyin: "shǒutíbāo",
    meaning: "túi xách tay",
    examples: []
  },
  {
    id: "dict_852",
    word: "手续",
    pinyin: "shǒuxù",
    meaning: "thủ tục",
    examples: []
  },
  {
    id: "dict_853",
    word: "受",
    pinyin: "shòu",
    meaning: "bị, chịu bị",
    examples: []
  },
  {
    id: "dict_854",
    word: "售货员",
    pinyin: "shòuhuòyuán",
    meaning: "nhân viên bán hàng",
    examples: []
  },
  {
    id: "dict_855",
    word: "售票员",
    pinyin: "shòupiàoyuán",
    meaning: "nhân viên bán vé",
    examples: []
  },
  {
    id: "dict_856",
    word: "数",
    pinyin: "shǔ",
    meaning: "đếm",
    examples: []
  },
  {
    id: "dict_857",
    word: "热闹",
    pinyin: "rènao",
    meaning: "náo nhiệt, nhộn nhịp",
    examples: []
  },
  {
    id: "dict_858",
    word: "日语",
    pinyin: "Rìyǔ",
    meaning: "tiếng Nhật",
    examples: []
  },
  {
    id: "dict_859",
    word: "入境",
    pinyin: "rù jìng",
    meaning: "nhập cảnh",
    examples: []
  },
  {
    id: "dict_860",
    word: "软卧",
    pinyin: "ruǎnwò",
    meaning: "giường mềm (trên tàu)",
    examples: []
  },
  {
    id: "dict_861",
    word: "散步",
    pinyin: "sànbù",
    meaning: "đi dạo",
    examples: []
  },
  {
    id: "dict_862",
    word: "嗓子",
    pinyin: "sǎngzi",
    meaning: "cổ họng, giọng",
    examples: []
  },
  {
    id: "dict_863",
    word: "伤",
    pinyin: "shāng",
    meaning: "vết thương",
    examples: []
  },
  {
    id: "dict_864",
    word: "上班",
    pinyin: "shàngbān",
    meaning: "vào ca, đi làm",
    examples: []
  },
  {
    id: "dict_865",
    word: "舍不得",
    pinyin: "shěbude",
    meaning: "tiếc, không nỡ",
    examples: []
  },
  {
    id: "dict_866",
    word: "平安",
    pinyin: "píng'ān",
    meaning: "bình an, an toàn",
    examples: []
  },
  {
    id: "dict_867",
    word: "普通话",
    pinyin: "pǔtōnghuà",
    meaning: "tiếng Phổ thông",
    examples: []
  },
  {
    id: "dict_868",
    word: "起飞",
    pinyin: "qǐfēi",
    meaning: "cất cánh",
    examples: []
  },
  {
    id: "dict_869",
    word: "汽水",
    pinyin: "qìshuǐ",
    meaning: "nước ngọt, nước có ga",
    examples: []
  },
  {
    id: "dict_870",
    word: "气温",
    pinyin: "qìwēn",
    meaning: "nhiệt độ (không khí)",
    examples: []
  },
  {
    id: "dict_871",
    word: "钱包",
    pinyin: "qiánbāo",
    meaning: "ví tiền, bóp",
    examples: []
  },
  {
    id: "dict_872",
    word: "墙",
    pinyin: "qiáng",
    meaning: "vách, tường",
    examples: []
  },
  {
    id: "dict_873",
    word: "巧",
    pinyin: "qiǎo",
    meaning: "may mắn, khéo",
    examples: []
  },
  {
    id: "dict_874",
    word: "清楚",
    pinyin: "qīngchu",
    meaning: "rõ ràng",
    examples: []
  },
  {
    id: "dict_875",
    word: "情况",
    pinyin: "qíngkuàng",
    meaning: "tình hình, tình huống",
    examples: []
  },
  {
    id: "dict_876",
    word: "取得",
    pinyin: "qǔdé",
    meaning: "đạt được, giành được",
    examples: []
  },
  {
    id: "dict_877",
    word: "全",
    pinyin: "quán",
    meaning: "cả, toàn",
    examples: []
  },
  {
    id: "dict_878",
    word: "年纪",
    pinyin: "niánjì",
    meaning: "tuổi tác",
    examples: []
  },
  {
    id: "dict_879",
    word: "您",
    pinyin: "nín",
    meaning: "ngài, ông, bà (đại từ nhân xưng kính trọng)",
    examples: []
  },
  {
    id: "dict_880",
    word: "弄",
    pinyin: "nòng",
    meaning: "làm, giỡn, chọc",
    examples: []
  },
  {
    id: "dict_881",
    word: "暖和",
    pinyin: "nuǎnhuo",
    meaning: "ấm áp",
    examples: []
  },
  {
    id: "dict_882",
    word: "爬",
    pinyin: "pá",
    meaning: "leo, trèo, bò",
    examples: []
  },
  {
    id: "dict_883",
    word: "排球",
    pinyin: "páiqiú",
    meaning: "bóng chuyền",
    examples: []
  },
  {
    id: "dict_884",
    word: "胖",
    pinyin: "pàng",
    meaning: "mập, béo",
    examples: []
  },
  {
    id: "dict_885",
    word: "陪",
    pinyin: "péi",
    meaning: "đi cùng, bồi tiếp",
    examples: []
  },
  {
    id: "dict_886",
    word: "啤酒",
    pinyin: "píjiǔ",
    meaning: "bia",
    examples: []
  },
  {
    id: "dict_887",
    word: "旅游",
    pinyin: "lǚyóu",
    meaning: "du lịch",
    examples: []
  },
  {
    id: "dict_888",
    word: "热情",
    pinyin: "rèqíng",
    meaning: "nhiệt tình",
    examples: []
  },
  // --- Thêm các từ ghép phổ biến ---
  { id: "dict_cw_1", word: "一定", pinyin: "yídìng", meaning: "nhất định, chắc chắn", examples: [] },
  { id: "dict_cw_2", word: "一样", pinyin: "yíyàng", meaning: "giống nhau", examples: [] },
  { id: "dict_cw_3", word: "一起", pinyin: "yìqǐ", meaning: "cùng nhau", examples: [] },
  { id: "dict_cw_4", word: "一半", pinyin: "yíbàn", meaning: "một nửa", examples: [] },
  { id: "dict_cw_5", word: "一生", pinyin: "yìshēng", meaning: "một đời", examples: [] },
  { id: "dict_cw_6", word: "不好", pinyin: "bùhǎo", meaning: "không tốt", examples: [] },
  { id: "dict_cw_7", word: "不然", pinyin: "bùrán", meaning: "nếu không thì", examples: [] },
  { id: "dict_cw_8", word: "不错", pinyin: "búcuò", meaning: "không tồi, tốt", examples: [] },
  { id: "dict_cw_9", word: "不久", pinyin: "bùjiǔ", meaning: "không lâu, chẳng bao lâu", examples: [] },
  { id: "dict_cw_10", word: "不够", pinyin: "búgòu", meaning: "không đủ", examples: [] },
  { id: "dict_cw_11", word: "上海", pinyin: "Shànghǎi", meaning: "Thượng Hải", examples: [] },
  { id: "dict_cw_12", word: "上课", pinyin: "shàngkè", meaning: "lên lớp", examples: [] },
  { id: "dict_cw_13", word: "上班", pinyin: "shàngbān", meaning: "đi làm", examples: [] },
  { id: "dict_cw_14", word: "上帝", pinyin: "shàngdì", meaning: "Thượng Đế", examples: [] },
  { id: "dict_cw_15", word: "上下", pinyin: "shàngxià", meaning: "lên xuống, trên dưới", examples: [] },
  { id: "dict_cw_16", word: "下午", pinyin: "xiàwǔ", meaning: "buổi chiều", examples: [] },
  { id: "dict_cw_17", word: "下课", pinyin: "xiàkè", meaning: "tan lớp", examples: [] },
  { id: "dict_cw_18", word: "下班", pinyin: "xiàbān", meaning: "tan làm", examples: [] },
  { id: "dict_cw_19", word: "下雨", pinyin: "xiàyǔ", meaning: "trời mưa", examples: [] },
  { id: "dict_cw_20", word: "下次", pinyin: "xiàcì", meaning: "lần sau", examples: [] },
  { id: "dict_cw_21", word: "人们", pinyin: "rénmen", meaning: "mọi người", examples: [] },
  { id: "dict_cw_22", word: "人生", pinyin: "rénshēng", meaning: "nhân sinh", examples: [] },
  { id: "dict_cw_23", word: "人物", pinyin: "rénwù", meaning: "nhân vật", examples: [] },
  { id: "dict_cw_24", word: "人民", pinyin: "rénmín", meaning: "nhân dân", examples: [] },
  { id: "dict_cw_25", word: "人口", pinyin: "rénkǒu", meaning: "nhân khẩu", examples: [] },
  { id: "dict_cw_26", word: "大人", pinyin: "dàren", meaning: "người lớn", examples: [] },
  { id: "dict_cw_27", word: "大家", pinyin: "dàjiā", meaning: "mọi người", examples: [] },
  { id: "dict_cw_28", word: "大会", pinyin: "dàhuì", meaning: "đại hội", examples: [] },
  { id: "dict_cw_29", word: "大地", pinyin: "dàdì", meaning: "đại địa", examples: [] },
  { id: "dict_cw_30", word: "大约", pinyin: "dàyuē", meaning: "khoảng chừng", examples: [] },
  { id: "dict_cw_31", word: "小孩", pinyin: "xiǎohái", meaning: "trẻ em", examples: [] },
  { id: "dict_cw_32", word: "小学", pinyin: "xiǎoxué", meaning: "tiểu học", examples: [] },
  { id: "dict_cw_33", word: "小说", pinyin: "xiǎoshuō", meaning: "tiểu thuyết", examples: [] },
  { id: "dict_cw_34", word: "小心", pinyin: "xiǎoxīn", meaning: "cẩn thận", examples: [] },
  { id: "dict_cw_35", word: "小吃", pinyin: "xiǎochī", meaning: "đồ ăn vặt", examples: [] },
  { id: "dict_cw_36", word: "天气", pinyin: "tiānqì", meaning: "thời tiết", examples: [] },
  { id: "dict_cw_37", word: "天才", pinyin: "tiāncái", meaning: "thiên tài", examples: [] },
  { id: "dict_cw_38", word: "天堂", pinyin: "tiāntáng", meaning: "thiên đường", examples: [] },
  { id: "dict_cw_39", word: "天空", pinyin: "tiānkōng", meaning: "bầu trời", examples: [] },
  { id: "dict_cw_40", word: "天天", pinyin: "tiāntiān", meaning: "hằng ngày", examples: [] },
  { id: "dict_cw_41", word: "心情", pinyin: "xīnqíng", meaning: "tâm trạng", examples: [] },
  { id: "dict_cw_42", word: "心中", pinyin: "xīnzhōng", meaning: "trong lòng", examples: [] },
  { id: "dict_cw_43", word: "心态", pinyin: "xīntài", meaning: "tâm thái", examples: [] },
  { id: "dict_cw_44", word: "心理", pinyin: "xīnlǐ", meaning: "tâm lý", examples: [] },
  { id: "dict_cw_45", word: "心事", pinyin: "xīnshì", meaning: "tâm sự", examples: [] },
  { id: "dict_cw_46", word: "好吃", pinyin: "hǎochī", meaning: "ngon", examples: [] },
  { id: "dict_cw_47", word: "好看", pinyin: "hǎokàn", meaning: "đẹp, hay", examples: [] },
  { id: "dict_cw_48", word: "好人", pinyin: "hǎorén", meaning: "người tốt", examples: [] },
  { id: "dict_cw_49", word: "好像", pinyin: "hǎoxiàng", meaning: "hình như", examples: [] },
  { id: "dict_cw_50", word: "好处", pinyin: "hǎochu", meaning: "điểm tốt", examples: [] },
  { id: "dict_cw_51", word: "出现", pinyin: "chūxiàn", meaning: "xuất hiện", examples: [] },
  { id: "dict_cw_52", word: "出生", pinyin: "chūshēng", meaning: "ra đời", examples: [] },
  { id: "dict_cw_53", word: "出发", pinyin: "chūfā", meaning: "xuất phát", examples: [] },
  { id: "dict_cw_54", word: "出国", pinyin: "chūguó", meaning: "ra nước ngoài", examples: [] },
  { id: "dict_cw_55", word: "出口", pinyin: "chūkǒu", meaning: "lối ra, xuất khẩu", examples: [] },
  { id: "dict_cw_56", word: "学生", pinyin: "xuésheng", meaning: "học sinh", examples: [] },
  { id: "dict_cw_57", word: "学校", pinyin: "xuéxiào", meaning: "trường học", examples: [] },
  { id: "dict_cw_58", word: "学费", pinyin: "xuéfèi", meaning: "học phí", examples: [] },
  { id: "dict_cw_59", word: "学历", pinyin: "xuélì", meaning: "học lịch", examples: [] },
  { id: "dict_cw_60", word: "学问", pinyin: "xuéwèn", meaning: "học vấn", examples: [] },
  { id: "dict_cw_61", word: "看见", pinyin: "kànjiàn", meaning: "nhìn thấy", examples: [] },
  { id: "dict_cw_62", word: "看病", pinyin: "kànbìng", meaning: "khám bệnh", examples: [] },
  { id: "dict_cw_63", word: "看法", pinyin: "kànfǎ", meaning: "cách nhìn", examples: [] },
  { id: "dict_cw_64", word: "看书", pinyin: "kànshū", meaning: "đọc sách", examples: [] },
  { id: "dict_cw_65", word: "多半", pinyin: "duōbàn", meaning: "phần lớn", examples: [] },
  { id: "dict_cw_66", word: "多么", pinyin: "duōme", meaning: "biết bao", examples: [] },
  { id: "dict_cw_67", word: "多数", pinyin: "duōshù", meaning: "đa số", examples: [] },
  { id: "dict_cw_68", word: "多少", pinyin: "duōshao", meaning: "bao nhiêu", examples: [] },
  { id: "dict_cw_69", word: "生长", pinyin: "shēngzhǎng", meaning: "sinh trưởng", examples: [] },
  { id: "dict_cw_70", word: "生活", pinyin: "shēnghuó", meaning: "sinh hoạt, cuộc sống", examples: [] },
  { id: "dict_cw_71", word: "生命", pinyin: "shēngmìng", meaning: "sinh mệnh", examples: [] },
  { id: "dict_cw_72", word: "生气", pinyin: "shēngqì", meaning: "tức giận", examples: [] },
  { id: "dict_cw_73", word: "生意", pinyin: "shēngyì", meaning: "kinh doanh, buôn bán", examples: [] },
  { id: "dict_cw_74", word: "日记", pinyin: "rìjì", meaning: "nhật ký", examples: [] },
  { id: "dict_cw_75", word: "日期", pinyin: "rìqī", meaning: "ngày tháng", examples: [] },
  { id: "dict_cw_76", word: "日常", pinyin: "rìcháng", meaning: "thường ngày", examples: [] },
  { id: "dict_cw_77", word: "日益", pinyin: "rìyì", meaning: "ngày càng", examples: [] },
  { id: "dict_cw_78", word: "日历", pinyin: "rìlì", meaning: "lịch", examples: [] },
  { id: "dict_cw_79", word: "月亮", pinyin: "yuèliang", meaning: "mặt trăng", examples: [] },
  { id: "dict_cw_80", word: "月份", pinyin: "yuèfèn", meaning: "tháng", examples: [] },
  { id: "dict_cw_81", word: "月底", pinyin: "yuèdǐ", meaning: "cuối tháng", examples: [] },
  { id: "dict_cw_82", word: "月初", pinyin: "yuèchū", meaning: "đầu tháng", examples: [] },
  { id: "dict_cw_83", word: "中国", pinyin: "Zhōngguó", meaning: "Trung Quốc", examples: [] },
  { id: "dict_cw_84", word: "中间", pinyin: "zhōngjiān", meaning: "ở giữa", examples: [] },
  { id: "dict_cw_85", word: "中学", pinyin: "zhōngxué", meaning: "trung học", examples: [] },
  { id: "dict_cw_86", word: "中心", pinyin: "zhōngxīn", meaning: "trung tâm", examples: [] },
  { id: "dict_cw_87", word: "中午", pinyin: "zhōngwǔ", meaning: "buổi trưa", examples: [] },
  { id: "dict_cw_88", word: "水果", pinyin: "shuǐguǒ", meaning: "hoa quả", examples: [] },
  { id: "dict_cw_89", word: "水平", pinyin: "shuǐpíng", meaning: "trình độ", examples: [] },
  { id: "dict_cw_90", word: "水量", pinyin: "shuǐliàng", meaning: "lượng nước", examples: [] },
  { id: "dict_cw_91", word: "火车", pinyin: "huǒchē", meaning: "tàu hỏa", examples: [] },
  { id: "dict_cw_92", word: "火山", pinyin: "huǒshān", meaning: "núi lửa", examples: [] },
  { id: "dict_cw_93", word: "发火", pinyin: "fāhuǒ", meaning: "nổi cáu", examples: [] },
  { id: "dict_cw_94", word: "灾火", pinyin: "zāihuǒ", meaning: "hỏa hoạn", examples: [] },
  { id: "dict_cw_95", word: "火锅", pinyin: "huǒguō", meaning: "lẩu", examples: [] },
  { id: "dict_cw_96", word: "电话", pinyin: "diànhuà", meaning: "điện thoại", examples: [] },
  { id: "dict_cw_97", word: "电脑", pinyin: "diànnǎo", meaning: "máy tính", examples: [] },
  { id: "dict_cw_98", word: "电视", pinyin: "diànshì", meaning: "TV", examples: [] },
  { id: "dict_cw_99", word: "电影", pinyin: "diànyǐng", meaning: "điện ảnh, phim", examples: [] },
  { id: "dict_cw_100", word: "电池", pinyin: "diànchí", meaning: "pin", examples: [] },
  { id: "dict_cw_101", word: "车票", pinyin: "chēpiào", meaning: "vé xe", examples: [] },
  { id: "dict_cw_102", word: "开车", pinyin: "kāichē", meaning: "lái xe", examples: [] },
  { id: "dict_cw_103", word: "车站", pinyin: "chēzhàn", meaning: "bến xe", examples: [] },
  { id: "dict_cw_104", word: "书包", pinyin: "shūbāo", meaning: "cặp sách", examples: [] },
  { id: "dict_cw_105", word: "书店", pinyin: "shūdiàn", meaning: "hiệu sách", examples: [] },
  { id: "dict_cw_106", word: "书房", pinyin: "shūfáng", meaning: "phòng đọc sách", examples: [] },
  { id: "dict_cw_107", word: "书法", pinyin: "shūfǎ", meaning: "thư pháp", examples: [] },
  { id: "dict_cw_108", word: "下边", pinyin: "xiàbian", meaning: "bên dưới", examples: [] },
  { id: "dict_cw_109", word: "下一个", pinyin: "xiàyígè", meaning: "kế tiếp, cái tiếp theo", examples: [] },
  { id: "dict_cw_110", word: "下去", pinyin: "xiàqù", meaning: "xuống (đó), tiếp tục", examples: [] },
  { id: "dict_cw_111", word: "下来", pinyin: "xiàlái", meaning: "xuống (đây)", examples: [] },
  { id: "dict_cw_112", word: "夏天", pinyin: "xiàtiān", meaning: "mùa hè", examples: [] },
  { id: "dict_cw_113", word: "下面", pinyin: "xiàmiàn", meaning: "phía dưới", examples: [] },
  { id: "dict_cw_114", word: "下降", pinyin: "xiàjiàng", meaning: "giảm xuống", examples: [] },
  { id: "dict_cw_115", word: "下沉", pinyin: "xiàchén", meaning: "chìm xuống", examples: [] },
  { id: "dict_cw_116", word: "下海", pinyin: "xiàhǎi", meaning: "xuống biển", examples: [] },
  { id: "dict_cw_117", word: "下雪", pinyin: "xiàxuě", meaning: "tuyết rơi", examples: [] },
  { id: "dict_cw_118", word: "吓人", pinyin: "xiàrén", meaning: "đáng sợ, dọa người", examples: [] },
  { id: "dict_cw_119", word: "吓一跳", pinyin: "xiàyítiào", meaning: "giật mình", examples: [] },
  { id: "dict_cw_120", word: "先生", pinyin: "xiānsheng", meaning: "tiên sinh, ông", examples: [] },
  { id: "dict_cw_121", word: "现在", pinyin: "xiànzài", meaning: "bây giờ", examples: [] },
  { id: "dict_cw_122", word: "想念", pinyin: "xiǎngniàn", meaning: "nhớ nhung", examples: [] },
  { id: "dict_cw_123", word: "相信", pinyin: "xiāngxìn", meaning: "tin tưởng", examples: [] },
  { id: "dict_cw_124", word: "向前", pinyin: "xiàngqián", meaning: "hướng về phía trước", examples: [] },
  { id: "dict_cw_125", word: "向下", pinyin: "xiàngxià", meaning: "hướng xuống", examples: [] }
];
