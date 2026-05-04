
export interface SentenceExercise {
  id: string;
  level: 'HSK1' | 'HSK2' | 'HSK3' | 'HSK4' | 'HSK5' | 'HSK6';
  chinese: string;
  pinyin: string;
  translation: string;
  scrambled: string[];
}

export const HSK_SENTENCES: SentenceExercise[] = [
  // HSK 1
  {
    id: "hsk1-1",
    level: "HSK1",
    chinese: "我是越南人。",
    pinyin: "Wǒ shì Yuènán rén.",
    translation: "Tôi là người Việt Nam.",
    scrambled: ["是", "越南人", "我"]
  },
  {
    id: "hsk1-2",
    level: "HSK1",
    chinese: "你叫什么名字？",
    pinyin: "Nǐ jiào shénme míngzi?",
    translation: "Bạn tên là gì?",
    scrambled: ["名字", "叫", "什么", "你"]
  },
  {
    id: "hsk1-3",
    level: "HSK1",
    chinese: "今天北京天气很好。",
    pinyin: "Jīntiān Běijīng tiānqì hěn hǎo.",
    translation: "Hôm nay thời tiết Bắc Kinh rất tốt.",
    scrambled: ["很好", "天气", "北京", "今天"]
  },
  // HSK 1 continued
  {
    id: "hsk1-4",
    level: "HSK1",
    chinese: "我爸爸在医院工作。",
    pinyin: "Wǒ bàba zài yīyuàn gōngzuò.",
    translation: "Bố tôi làm việc ở bệnh viện.",
    scrambled: ["医院", "工作", "在", "我爸爸"]
  },
  {
    id: "hsk1-5",
    level: "HSK1",
    chinese: "这儿的人很多。",
    pinyin: "Zhèr de rén hěn duō.",
    translation: "Người ở đây rất đông.",
    scrambled: ["很多", "的人", "这儿"]
  },
  {
    id: "hsk1-6",
    level: "HSK1",
    chinese: "我在商店买了一些苹果。",
    pinyin: "Wǒ zài shāngdiàn mǎile yīxiē píngguǒ.",
    translation: "Tôi đã mua một ít táo ở cửa hàng.",
    scrambled: ["苹果", "买了一些", "在", "我", "商店"]
  },
  {
    id: "hsk1-7",
    level: "HSK1",
    chinese: "你会说汉语吗？",
    pinyin: "Nǐ huì shuō Hànyǔ ma?",
    translation: "Bạn biết nói tiếng Trung không?",
    scrambled: ["吗", "会说", "汉语", "你"]
  },
  {
    id: "hsk1-8",
    level: "HSK1",
    chinese: "那儿有一个小猫。",
    pinyin: "Nàr yǒu yī gè xiǎo māo.",
    translation: "Ở đó có một con mèo nhỏ.",
    scrambled: ["小猫", "那儿", "有一个"]
  },
  {
    id: "hsk1-9",
    level: "HSK1",
    chinese: "这些都是张小姐的。",
    pinyin: "Zhèxiē dōu shì Zhāng xiǎojiě de.",
    translation: "Những cái này đều là của cô Trương.",
    scrambled: ["这些", "的", "张小姐", "是", "都"]
  },
  {
    id: "hsk1-10",
    level: "HSK1",
    chinese: "我不爱吃这个菜。",
    pinyin: "Wǒ bù ài chī zhège cài.",
    translation: "Tôi không thích ăn món này.",
    scrambled: ["我", "菜", "爱", "不", "这个", "吃"]
  },
  {
    id: "hsk1-11",
    level: "HSK1",
    chinese: "医生在哪儿？",
    pinyin: "Yīshēng zài nǎr?",
    translation: "Bác sĩ ở đâu?",
    scrambled: ["在", "哪儿", "医生"]
  },
  {
    id: "hsk1-12",
    level: "HSK1",
    chinese: "我们怎么回家？",
    pinyin: "Wǒmen zěnme huí jiā?",
    translation: "Chúng ta về nhà thế nào?",
    scrambled: ["家", "怎么", "我们", "回"]
  },
  {
    id: "hsk1-13",
    level: "HSK1",
    chinese: "他是我的学生。",
    pinyin: "Tā shì wǒ de xuésheng.",
    translation: "Anh ấy là học sinh của tôi.",
    scrambled: ["学生", "我", "他", "是", "的"]
  },
  {
    id: "hsk1-14",
    level: "HSK1",
    chinese: "李老师在打电话呢。",
    pinyin: "Lǐ lǎoshī zài dǎ diànhuà ne.",
    translation: "Cô Lý đang gọi điện thoại.",
    scrambled: ["呢", "李老师", "电话", "在", "打"]
  },
  {
    id: "hsk1-15",
    level: "HSK1",
    chinese: "我和女儿都爱看电影。",
    pinyin: "Wǒ hé nǚ'ér dōu ài kàn diànyǐng.",
    translation: "Tôi và con gái đều thích xem phim.",
    scrambled: ["看", "爱", "女儿", "我", "电影", "和", "都"]
  },
  {
    id: "hsk1-16",
    level: "HSK1",
    chinese: "家里有很多苹果。",
    pinyin: "Jiālǐ yǒu hěn duō píngguǒ.",
    translation: "Trong nhà có rất nhiều táo.",
    scrambled: ["苹果", "家里", "很", "有", "多"]
  },
  {
    id: "hsk1-17",
    level: "HSK1",
    chinese: "那个人是你的同学吗？",
    pinyin: "Nàge rén shì nǐ de tóngxué ma?",
    translation: "Người kia là bạn học của bạn phải không?",
    scrambled: ["人", "的", "你", "那个", "是", "吗", "同学"]
  },
  {
    id: "hsk1-18",
    level: "HSK1",
    chinese: "你看见张小姐了吗？",
    pinyin: "Nǐ kànjiàn Zhāng xiǎojiě le ma?",
    translation: "Bạn đã nhìn thấy cô Trương chưa?",
    scrambled: ["了", "看见", "你", "张小姐", "吗"]
  },
  {
    id: "hsk1-19",
    level: "HSK1",
    chinese: "你现在住在哪儿？",
    pinyin: "Nǐ xiànzài zhù zài nǎr?",
    translation: "Hiện tại bạn sống ở đâu?",
    scrambled: ["现在", "住在", "你", "哪儿"]
  },
  {
    id: "hsk1-20",
    level: "HSK1",
    chinese: "他们在买衣服呢。",
    pinyin: "Tāmen zài mǎi yīfu ne.",
    translation: "Họ đang mua quần áo kìa.",
    scrambled: ["在", "他们", "衣服", "买", "呢"]
  },
  {
    id: "hsk1-21",
    level: "HSK1",
    chinese: "我们看里面是什么东西？",
    pinyin: "Wǒmen kàn lǐmiàn shì shénme dōngxi?",
    translation: "Chúng ta xem bên trong có đồ gì?",
    scrambled: ["看", "我们", "里面", "什么", "是", "东西"]
  },
  {
    id: "hsk1-22",
    level: "HSK1",
    chinese: "那个人是谁？",
    pinyin: "Nàge rén shì shéi?",
    translation: "Người kia là ai?",
    scrambled: ["人", "谁", "是", "那个"]
  },
  {
    id: "hsk1-23",
    level: "HSK1",
    chinese: "你的同学在哪儿工作？",
    pinyin: "Nǐ de tóngxué zài nǎr gōngzuò?",
    translation: "Bạn học của bạn làm việc ở đâu?",
    scrambled: ["同学", "工作", "的", "你", "哪儿", "在"]
  },
  {
    id: "hsk1-24",
    level: "HSK1",
    chinese: "昨天上午天气怎么样？",
    pinyin: "Zuótiān shàngwǔ tiānqì zěnmeyàng?",
    translation: "Thời tiết sáng hôm qua thế nào?",
    scrambled: ["上午", "怎么样", "昨天", "天气"]
  },
  {
    id: "hsk1-25",
    level: "HSK1",
    chinese: "爸爸什么时候去北京呢？",
    pinyin: "Bàba shénme shíhou qù Běijīng ne?",
    translation: "Bố lúc nào đi Bắc Kinh nhỉ?",
    scrambled: ["爸爸", "时候", "什么", "北京", "去", "呢"]
  },
  {
    id: "hsk1-26",
    level: "HSK1",
    chinese: "他的女儿多大了？",
    pinyin: "Tā de nǚ'ér duō dà le?",
    translation: "Con gái anh ấy bao nhiêu tuổi rồi?",
    scrambled: ["他", "大", "了", "多", "女儿"]
  },
  {
    id: "hsk1-27",
    level: "HSK1",
    chinese: "认识你很高兴。",
    pinyin: "Rènshi nǐ hěn gāoxìng.",
    translation: "Rất vui được quen biết bạn.",
    scrambled: ["高兴", "你", "很", "认识"]
  },
  {
    id: "hsk1-28",
    level: "HSK1",
    chinese: "我下午想去商店买一些水果。",
    pinyin: "Wǒ xiàwǔ xiǎng qù shāngdiàn mǎi yīxiē shuǐguǒ.",
    translation: "Chiều tôi muốn đi cửa hàng mua một ít trái cây.",
    scrambled: ["商店", "我", "下午", "去", "想", "一些", "我", "买", "水果"]
  },
  // HSK 2
  {
    id: "hsk2-1",
    level: "HSK2",
    chinese: "我最喜欢吃西瓜。",
    pinyin: "Wǒ zuì xǐhuan chī xīguā.",
    translation: "Tôi thích ăn dưa hấu nhất.",
    scrambled: ["吃", "西瓜", "喜欢", "我", "最"]
  },
  {
    id: "hsk2-2",
    level: "HSK2",
    chinese: "由于下雨，我们没去踢足球。",
    pinyin: "Yóuyú xiàyǔ, wǒmen méi qù tī zúqiú.",
    translation: "Vì trời mưa, chúng tôi đã không đi đá bóng.",
    scrambled: ["我们", "没去", "下雨", "踢足球", "由于"]
  },
  {
    id: "hsk2-3",
    level: "HSK2",
    chinese: "请你等我会儿。",
    pinyin: "Qǐng nǐ děng wǒ huìr.",
    translation: "Xin bạn đợi tôi một lát.",
    scrambled: ["等", "会儿", "请", "我", "你"]
  },
  {
    id: "hsk2-4",
    level: "HSK2",
    chinese: "你比我大两岁。",
    pinyin: "Nǐ bǐ wǒ dà liǎng suì.",
    translation: "Bạn lớn hơn tôi 2 tuổi.",
    scrambled: ["比", "我", "大", "两岁", "你"]
  },
  {
    id: "hsk2-5",
    level: "HSK2",
    chinese: "公共汽车站就在前面。",
    pinyin: "Gōnggòng qìchēzhàn jiù zài qiánmiàn.",
    translation: "Trạm xe buýt ở ngay phía trước.",
    scrambled: ["就在", "前面", "公共汽车站"]
  },
  {
    id: "hsk2-6",
    level: "HSK2",
    chinese: "你要好好儿休息。",
    pinyin: "Nǐ yào hǎohǎor xiūxi.",
    translation: "Bạn cần nghỉ ngơi tử tế.",
    scrambled: ["好好儿", "休息", "你", "要"]
  },
  {
    id: "hsk2-7",
    level: "HSK2",
    chinese: "那边的那个杯子是我的。",
    pinyin: "Nàbiān de nàge bēizi shì wǒ de.",
    translation: "Cái cốc ở đằng kia là của tôi.",
    scrambled: ["那个杯子", "我的", "那边的", "是"]
  },
  {
    id: "hsk2-8",
    level: "HSK2",
    chinese: "谢谢您给我们的帮助！",
    pinyin: "Xièxie nín gěi wǒmen de bāngzhù!",
    translation: "Cảm ơn sự giúp đỡ của bạn dành cho chúng tôi!",
    scrambled: ["帮助", "的", "给", "您", "谢谢", "我们"]
  },
  {
    id: "hsk2-9",
    level: "HSK2",
    chinese: "我觉得他的眼睛很漂亮。",
    pinyin: "Wǒ juéde tā de yǎnjing hěn piàoliang.",
    translation: "Tôi thấy đôi mắt của anh ấy rất đẹp.",
    scrambled: ["很", "漂亮", "眼神", "他", "的", "觉得", "我"]
  },
  {
    id: "hsk2-10",
    level: "HSK2",
    chinese: "你看见我的杯子了吗？",
    pinyin: "Nǐ kànjiàn wǒ de bēizi le ma?",
    translation: "Bạn có thấy cái cốc của tôi không?",
    scrambled: ["杯子", "的", "看见", "你", "吗", "了", "我"]
  },
  {
    id: "hsk2-11",
    level: "HSK2",
    chinese: "你从几岁开始学习跳舞？",
    pinyin: "Nǐ cóng jǐ suì kāishǐ xuéxí tiàowǔ?",
    translation: "Bạn bắt đầu học khiêu vũ từ năm mấy tuổi?",
    scrambled: ["几", "跳舞", "岁", "开始", "你", "从", "学习"]
  },
  {
    id: "hsk2-12",
    level: "HSK2",
    chinese: "这几天我没有时间睡觉。",
    pinyin: "Zhè jǐ tiān wǒ méiyǒu shíjiān shuìjiào.",
    translation: "Mấy ngày nay tôi không có thời gian để ngủ.",
    scrambled: ["时间", "没有", "睡觉", "这", "天", "我", "几"]
  },
  {
    id: "hsk2-13",
    level: "HSK2",
    chinese: "现在他工作十个小时，星期六也不休息。",
    pinyin: "Xiànzài tā gōngzuò shí gè xiǎoshí, xīngqīliù yě bù xiūxi.",
    translation: "Hiện tại anh ấy làm việc 10 tiếng, thứ Bảy cũng không nghỉ ngơi.",
    scrambled: ["休息", "不", "也", "10", "小时", "个", "工作", "他", "现在", "星期六"]
  },
  {
    id: "hsk2-14",
    level: "HSK2",
    chinese: "里面有你最爱吃的水果。",
    pinyin: "Lǐmiàn yǒu nǐ zuì ài chī de shuǐguǒ.",
    translation: "Bên trong có loại trái cây mà bạn thích ăn nhất.",
    scrambled: ["水果", "爱", "里面", "吃", "最", "有", "你", "的"]
  },
  {
    id: "hsk2-15",
    level: "HSK2",
    chinese: "希望我的回答能对你有帮助。",
    pinyin: "Xīwàng wǒ de huídá néng duì nǐ yǒu bāngzhù.",
    translation: "Hy vọng câu trả lời của tôi có thể giúp ích cho bạn.",
    scrambled: ["我的", "回答", "帮助", "有", "希望", "对你", "能"]
  },
  {
    id: "hsk2-16",
    level: "HSK2",
    chinese: "我从您这儿学了很多。",
    pinyin: "Wǒ cóng nín zhèr xuéle hěn duō.",
    translation: "Tôi đã học được rất nhiều từ chỗ của ngài.",
    scrambled: ["从", "学了", "多", "很", "这儿", "我", "您"]
  },
  {
    id: "hsk2-17",
    level: "HSK2",
    chinese: "我已经喝了两杯咖啡了。",
    pinyin: "Wǒ yǐjīng hēle liǎng bēi kāfēi le.",
    translation: "Tôi đã uống hai tách cà phê rồi.",
    scrambled: ["准备", "喝", "咖啡", "杯", "已经", "了", "我", "两"]
  },
  {
    id: "hsk2-18",
    level: "HSK2",
    chinese: "旁边那个红色的铅笔是你的吗？",
    pinyin: "Pángbiān nàge hóngsè de qiānbǐ shì nǐ de ma?",
    translation: "Cái bút chì màu đỏ bên cạnh kia là của bạn phải không?",
    scrambled: ["那个", "铅笔", "红色", "吧", "旁边", "是", "你的", "吗", "的"]
  },
  {
    id: "hsk2-19",
    level: "HSK2",
    chinese: "他们每天四个人都一起吃饭。",
    pinyin: "Tāmen měitiān sì gè rén dōu yīqǐ chīfàn.",
    translation: "Bốn người họ ngày nào cũng cùng nhau ăn cơm.",
    scrambled: ["都", "一起", "吃饭", "人", "个", "四", "他们", "每天"]
  },
  {
    id: "hsk2-20",
    level: "HSK2",
    chinese: "他们开着车出去了。",
    pinyin: "Tāmen kāizhe chē chūqù le.",
    translation: "Họ đã lái xe đi ra ngoài rồi.",
    scrambled: ["出", "去", "开", "车", "了", "他们", "着"]
  },
  {
    id: "hsk2-21",
    level: "HSK2",
    chinese: "中午我送了两张电影票给朋友。",
    pinyin: "Zhōngwǔ wǒ sòngle liǎng zhāng diànyǐng piào gěi péngyou.",
    translation: "Buổi trưa tôi đã tặng hai vé xem phim cho bạn.",
    scrambled: ["张", "两", "送了", "电影", "票", "中午", "我", "朋友"]
  },
  {
    id: "hsk2-22",
    level: "HSK2",
    chinese: "妻子吃早饭时喜欢看报纸。",
    pinyin: "Qīzi chī zǎofàn shí xǐhuan kàn bàozhǐ.",
    translation: "Người vợ thích đọc báo khi ăn sáng.",
    scrambled: ["吃", "早饭", "时", "喜欢", "报纸", "看", "妻子"]
  },
  {
    id: "hsk2-23",
    level: "HSK2",
    chinese: "走到了前面再向右。",
    pinyin: "Zǒudàole qiánmiàn zài xiàng yòu.",
    translation: "Đi tới phía trước rồi rẽ phải.",
    scrambled: ["向", "右", "再", "前面", "到了", "走"]
  },
  {
    id: "hsk2-24",
    level: "HSK2",
    chinese: "我每天坐公共汽车去上班。",
    pinyin: "Wǒ měitiān zuò gōnggòng qìchē qù shàngbān.",
    translation: "Tôi đi làm bằng xe buýt mỗi ngày.",
    scrambled: ["公共汽车", "坐", "去", "上班", "我", "每天"]
  },
  // HSK 3
  {
    id: "hsk3-1",
    level: "HSK3",
    chinese: "他在超市买了一些东西。",
    pinyin: "Tā zài chāoshì mǎile yīxiē dōngxi.",
    translation: "Anh ấy đã mua một số thứ ở siêu thị.",
    scrambled: ["一些", "在", "东西", "买了", "超市", "他"]
  },
  {
    id: "hsk3-2",
    level: "HSK3",
    chinese: "除了唱歌，她还喜欢跳舞。",
    pinyin: "Chúle chànggē, tā hái xǐhuan tiàowǔ.",
    translation: "Ngoài ca hát, cô ấy còn thích khiêu vũ.",
    scrambled: ["还", "除了", "唱歌", "喜欢", "跳舞"]
  },
  {
    id: "hsk3-3",
    level: "HSK3",
    chinese: "我把那本书还给图书馆了。",
    pinyin: "Wǒ bǎ nà běn shū huángěi túshūguǎn le.",
    translation: "Tôi đã trả cuốn sách đó cho thư viện rồi.",
    scrambled: ["把", "还给", "那本书", "图书馆", "了", "我"]
  },
  {
    id: "hsk3-4",
    level: "HSK3",
    chinese: "太阳从东边升起来。",
    pinyin: "Tàiyáng cóng dōngbian shēng qǐlái.",
    translation: "Mặt trời mọc từ phương Đông.",
    scrambled: ["从", "东边", "升起来", "太阳"]
  },
  {
    id: "hsk3-5",
    level: "HSK3",
    chinese: "他说话声音很大。",
    pinyin: "Tā shuōhuà shēngyīn hěn dà.",
    translation: "Anh ấy nói chuyện giọng rất to.",
    scrambled: ["很大", "声音", "说话", "他"]
  },
  {
    id: "hsk3-6",
    level: "HSK3",
    chinese: "我们要对自己的健康负责。",
    pinyin: "Wǒmen yào duì zìjǐ de jiànkāng fùzé.",
    translation: "Chúng ta cần có trách nhiệm với sức khỏe của chính mình.",
    scrambled: ["对自己的", "我们要", "负责", "健康"]
  },
  {
    id: "hsk3-7",
    level: "HSK3",
    chinese: "虽然他还没来，但我还是决定出发。",
    pinyin: "Suīrán tā hái méi lái, dàn wǒ háishì juédìng chūfā.",
    translation: "Mặc dù anh ấy vẫn chưa đến, nhưng tôi vẫn quyết định xuất phát.",
    scrambled: ["还没来", "虽然他", "我还是", "决定出发", "但"]
  },
  {
    id: "hsk3-8",
    level: "HSK3",
    chinese: "我越来越喜欢学汉语。",
    pinyin: "Wǒ yuè lái yuè xǐhuan xué Hànyǔ.",
    translation: "Tôi ngày càng thích học tiếng Trung.",
    scrambled: ["越来越", "我", "汉语", "喜欢", "学"]
  },
  {
    id: "hsk3-9",
    level: "HSK3",
    chinese: "我的妹妹又聪明又可爱。",
    pinyin: "Wǒ de mèimei yòu cōngmíng yòu kě'ài.",
    translation: "Em gái tôi vừa thông minh vừa đáng yêu.",
    scrambled: ["妹妹", "的", "我", "聪明", "又", "又", "可爱"]
  },
  {
    id: "hsk3-10",
    level: "HSK3",
    chinese: "我女朋友一边说一边笑。",
    pinyin: "Wǒ nǚpéngyou yībiān shuō yībiān xiào.",
    translation: "Bạn gái tôi vừa nói vừa cười.",
    scrambled: ["一边", "一边", "女朋友", "我", "说", "笑"]
  },
  {
    id: "hsk3-11",
    level: "HSK3",
    chinese: "我看着电视做作业。",
    pinyin: "Wǒ kànzhe diànshì zuò zuòyè.",
    translation: "Tôi vừa xem TV vừa làm bài tập.",
    scrambled: ["着", "我", "电视", "看", "做", "作业"]
  },
  {
    id: "hsk3-12",
    level: "HSK3",
    chinese: "我很喜欢看关于中国历史的电影。",
    pinyin: "Wǒ hěn xǐhuan kàn guānyú Zhōngguó lìshǐ de diànyǐng.",
    translation: "Tôi rất thích xem phim về lịch sử Trung Quốc.",
    scrambled: ["喜欢", "电影", "很", "我", "看", "中国", "历史", "关于", "的"]
  },
  {
    id: "hsk3-13",
    level: "HSK3",
    chinese: "快要下雨了，我们快回去吧！",
    pinyin: "Kuàiyào xiàyǔ le, wǒmen kuài huíqù ba!",
    translation: "Sắp mưa rồi, chúng ta mau về thôi!",
    scrambled: ["下雨", "吧", "快要", "我们", "了", "回去", "快"]
  },
  {
    id: "hsk3-14",
    level: "HSK3",
    chinese: "只要你有时间，我就一定跟你去旅游。",
    pinyin: "Zhǐyào nǐ yǒu shíjiān, wǒ jiù yīdìng gēn nǐ qù lǚyóu.",
    translation: "Chỉ cần bạn có thời gian, tôi nhất định sẽ cùng bạn đi du lịch.",
    scrambled: ["有", "我", "只要", "一定", "时间", "就", "旅游", "跟", "去", "你"]
  },
  {
    id: "hsk3-15",
    level: "HSK3",
    chinese: "给我一杯咖啡或者茶都行。",
    pinyin: "Gěi wǒ yī bēi kāfēi huòzhě chá dōu xíng.",
    translation: "Cho tôi một tách cà phê hoặc trà đều được.",
    scrambled: ["我", "咖啡", "给", "行", "都", "或者", "茶", "一杯"]
  },
  {
    id: "hsk3-16",
    level: "HSK3",
    chinese: "那位老人的手激动得真哆嗦。",
    pinyin: "Nà wèi lǎorén de shǒu jīdòng de zhēn duōsuo.",
    translation: "Tay của cụ già đó run rẩy vì xúc động.",
    scrambled: ["哆嗦", "那位", "激动", "老人", "得", "真", "手"]
  },
  {
    id: "hsk3-17",
    level: "HSK3",
    chinese: "我的胃今天疼极了。",
    pinyin: "Wǒ de wèi jīntiān téng jíle.",
    translation: "Cái dạ dày của tôi hôm nay đau quá chừng.",
    scrambled: ["我", "今天", "胃", "极了", "的", "疼"]
  },
  {
    id: "hsk3-18",
    level: "HSK3",
    chinese: "我乒乓球打得不太好。",
    pinyin: "Wǒ pīngpāngqiú dǎ de bù tài hǎo.",
    translation: "Tôi đánh bóng bàn không được tốt lắm.",
    scrambled: ["好", "我", "打", "不", "乒乓球", "得", "太"]
  },
  {
    id: "hsk3-19",
    level: "HSK3",
    chinese: "我今天觉得好多了。",
    pinyin: "Wǒ jīntiān juéde hǎo duō le.",
    translation: "Hôm nay tôi cảm thấy tốt hơn nhiều rồi.",
    scrambled: ["好", "今天", "觉得", "了", "多", "我"]
  },
  {
    id: "hsk3-20",
    level: "HSK3",
    chinese: "他把他的衣服洗得干干净净。",
    pinyin: "Tā bǎ tā de yīfu xǐ de gāngānjìngjìng.",
    translation: "Anh ấy giặt sạch sẽ quần áo của mình.",
    scrambled: ["把", "得", "他", "的", "洗", "衣服", "干干净净"]
  },
  {
    id: "hsk3-21",
    level: "HSK3",
    chinese: "我们都知道你做得怎么样。",
    pinyin: "Wǒmen dōu zhīdào nǐ zuò de zěnmeyàng.",
    translation: "Tất cả chúng tôi đều biết bạn làm thế nào.",
    scrambled: ["我们", "怎么样", "你", "得", "知道", "做", "都"]
  },
  {
    id: "hsk3-22",
    level: "HSK3",
    chinese: "我买的新衣服漂亮极了。",
    pinyin: "Wǒ mǎi de xīn yīfu piàoliang jíle.",
    translation: "Bộ quần áo mới tôi mua đẹp cực kỳ.",
    scrambled: ["漂亮", "我", "买", "极了", "的", "衣服", "新"]
  },
  {
    id: "hsk3-23",
    level: "HSK3",
    chinese: "大楼的门锁得严严实实。",
    pinyin: "Dàlóu de mén suǒ de yányanshi shí.",
    translation: "Cửa của tòa nhà được khóa chặt chẽ.",
    scrambled: ["得", "门", "大楼", "严严实实", "的", "锁"]
  },
  // HSK 4
  {
    id: "hsk4-1",
    level: "HSK4",
    chinese: "她很羡慕会弹钢琴的人。",
    pinyin: "Tā hěn xiànmù huì tán gāngqín de rén.",
    translation: "Cô ấy rất ngưỡng mộ những người biết chơi đàn piano.",
    scrambled: ["会弹钢琴的人", "羡慕", "很", "她"]
  },
  {
    id: "hsk4-2",
    level: "HSK4",
    chinese: "亚洲经济的增长速度正在逐渐提高。",
    pinyin: "Yàzhōu jīngjì de zēngzhǎng sùdù zhèngzài zhújiàn tígāo.",
    translation: "Tốc độ tăng trưởng của nền kinh tế châu Á đang dần được cải thiện.",
    scrambled: ["亚洲经济的", "正在", "逐渐", "提高", "增长速度"]
  },
  {
    id: "hsk4-3",
    level: "HSK4",
    chinese: "这椅子是专为老年人提供的。",
    pinyin: "Zhè yǐzi shì zhuān wèi lǎoniánrén tígōng de.",
    translation: "Chiếc ghế này được cung cấp dành riêng cho người cao tuổi.",
    scrambled: ["专为老年人", "提供的", "这椅子", "是"]
  },
  {
    id: "hsk4-4",
    level: "HSK4",
    chinese: "他中文说得很流利。",
    pinyin: "Tā Zhōngwén shuō de hěn liúlì.",
    translation: "Anh ấy nói tiếng Trung rất lưu loát.",
    scrambled: ["中文", "很流利", "说得", "他"]
  },
  {
    id: "hsk4-5",
    level: "HSK4",
    chinese: "报名人数已经超过了900。",
    pinyin: "Bàmíng rénshù yǐjīng chāoguòle jiǔbǎi.",
    translation: "Số lượng người đăng ký đã vượt quá 900.",
    scrambled: ["已经", "报名人数", "900", "超过了"]
  },
  {
    id: "hsk4-6",
    level: "HSK4",
    chinese: "请按从小到大的顺序排列这些数字。",
    pinyin: "Qǐng àn cóng xiǎo dào dà de shùnxù páiliè zhèxiē shùzì.",
    translation: "Vui lòng sắp xếp các số này theo thứ tự từ nhỏ đến lớn.",
    scrambled: ["请", "从小到大的顺序", "按", "排列", "这些数字"]
  },
  {
    id: "hsk4-7",
    level: "HSK4",
    chinese: "那本小说的作者很有名。",
    pinyin: "Nà běn xiǎoshuō de zuòzhě hěn yǒumíng.",
    translation: "Tác giả của cuốn tiểu thuyết đó rất nổi tiếng.",
    scrambled: ["作者", "很有名", "小说的", "那本"]
  },
  {
    id: "hsk4-8",
    level: "HSK4",
    chinese: "一个合格的警察最需要的是责任感。",
    pinyin: "Yīgè hégé de jǐngchá zuì xūyào de shì zérèngǎn.",
    translation: "Điều mà một cảnh sát đủ tiêu chuẩn cần nhất chính là ý thức trách nhiệm.",
    scrambled: ["合格的警察", "最需要的", "一个", "是责任感"]
  },
  {
    id: "hsk4-9",
    level: "HSK4",
    chinese: "代表们决定结束会议。",
    pinyin: "Dàibiǎomen juédìng jiéshù huìyì.",
    translation: "Các đại biểu quyết định kết thúc cuộc họp.",
    scrambled: ["代表们", "结束", "会议", "决定"]
  },
  {
    id: "hsk4-10",
    level: "HSK4",
    chinese: "我对这个城市很熟悉。",
    pinyin: "Wǒ duì zhège chéngshì hěn shúxi.",
    translation: "Tôi rất quen thuộc với thành phố này.",
    scrambled: ["对", "很熟悉", "我", "这个城市"]
  },
  {
    id: "hsk4-11",
    level: "HSK4",
    chinese: "你把窗户关了吗？",
    pinyin: "Nǐ bǎ chuānghu guānle ma?",
    translation: "Bạn đã đóng cửa sổ chưa?",
    scrambled: ["你", "关了", "把窗户", "吗"]
  },
  {
    id: "hsk4-12",
    level: "HSK4",
    chinese: "手机拉近了人与人之间的距离。",
    pinyin: "Shǒujī lājìnle rén yǔ rén zhījiān de jùlí.",
    translation: "Điện thoại di động đã rút ngắn khoảng cách giữa người với người.",
    scrambled: ["拉近", "了", "人与人之间的", "手机", "距离"]
  },
  {
    id: "hsk4-13",
    level: "HSK4",
    chinese: "我孙子是去年秋天出生的。",
    pinyin: "Wǒ sūnzi shì qùnián qiūtiān chūshēng de.",
    translation: "Cháu trai tôi sinh vào mùa thu năm ngoái.",
    scrambled: ["去年秋天", "我孙子", "出生", "是", "的"]
  },
  {
    id: "hsk4-14",
    level: "HSK4",
    chinese: "打针的效果比吃药好。",
    pinyin: "Dǎzhēn de xiàoguǒ bǐ chīyào hǎo.",
    translation: "Hiệu quả của việc tiêm tốt hơn uống thuốc.",
    scrambled: ["打针", "的", "比吃药", "效果"]
  },
  {
    id: "hsk4-15",
    level: "HSK4",
    chinese: "这个城市决定增加出租车的数量。",
    pinyin: "Chéngshì juédìng zēngjiā chūzūchē de shùliàng.",
    translation: "Thành phố quyết định tăng số lượng taxi.",
    scrambled: ["这个城市", "出租车的数量", "决定", "增加"]
  },
  {
    id: "hsk4-16",
    level: "HSK4",
    chinese: "这场降水的影响范围非常大。",
    pinyin: "Zhè chǎng jiàngshuǐ de yǐngxiǎng fànwéi fēicháng dà.",
    translation: "Phạm vi ảnh hưởng của trận mưa này là cực kỳ lớn.",
    scrambled: ["非常", "大", "影响范围", "这场降水", "的"]
  },
  {
    id: "hsk4-17",
    level: "HSK4",
    chinese: "现代汉语词典是一本工具书。",
    pinyin: "Xiàndài Hànyǔ Cídiǎn shì yī běn gōngjùshū.",
    translation: "Từ điển Hán ngữ hiện đại là một cuốn sách công cụ.",
    scrambled: ["工具书", "是", "一本", "现代汉语词典"]
  },
  {
    id: "hsk4-18",
    level: "HSK4",
    chinese: "哥哥兴奋得睡不着觉。",
    pinyin: "Gēge xīngfèn de shuì bùzháo jiào.",
    translation: "Anh trai phấn khích đến mức không ngủ được.",
    scrambled: ["哥哥", "睡不着觉", "得", "兴奋"]
  },
  {
    id: "hsk4-19",
    level: "HSK4",
    chinese: "抽烟对你一点儿好处没有。",
    pinyin: "Chōuyān duì nǐ yīdiǎnr hǎochù méiyǒu.",
    translation: "Hút thuốc không có một chút lợi ích nào cho bạn cả.",
    scrambled: ["好处", "抽烟对你", "没有", "一点儿"]
  },
  {
    id: "hsk4-20",
    level: "HSK4",
    chinese: "这样做完全符合国家的法律规定。",
    pinyin: "Zhèyàng zuò wánquán fúhé guójiā de fǎlǜ guīdìng.",
    translation: "Làm như vậy hoàn toàn phù hợp với các quy định pháp luật của nhà nước.",
    scrambled: ["完全", "国家的", "这样做", "符合", "法律规定"]
  },
  // HSK 5
  {
    id: "hsk5-1",
    level: "HSK5",
    chinese: "他偶尔会去健身房锻炼。",
    pinyin: "Tā ǒu'ěr huì qù jiànshēnfáng duànliàn.",
    translation: "Anh ấy thỉnh thoảng sẽ đến phòng gym tập thể dục.",
    scrambled: ["锻炼", "健身房", "去", "他", "偶尔", "会"]
  },
  {
    id: "hsk5-2",
    level: "HSK5",
    chinese: "道歉的时候态度一定要诚恳。",
    pinyin: "Dàoqiàn de shíhou tàidu yīdìng yào chéngkěn.",
    translation: "Khi xin lỗi thái độ nhất định phải thành khẩn.",
    scrambled: ["一定", "道歉的时候", "态度诚恳", "要"]
  },
  {
    id: "hsk5-3",
    level: "HSK5",
    chinese: "春节是一个传统的节日。",
    pinyin: "Chūnjié shì yīgè chuántǒng de jiérì.",
    translation: "Tết Nguyên Đán là một ngày lễ truyền thống.",
    scrambled: ["节日", "是", "春节", "一个", "传统的"]
  },
  {
    id: "hsk5-4",
    level: "HSK5",
    chinese: "北京给他留下了深刻的印象。",
    pinyin: "Běijīng gěi tā liúxiàle shēnkè de yìngxiàng.",
    translation: "Bắc Kinh đã để lại cho anh ấy một ấn tượng sâu sắc.",
    scrambled: ["北京", "给", "深刻的印象", "他", "留下了"]
  },
  {
    id: "hsk5-5",
    level: "HSK5",
    chinese: "雨后常常能看到彩虹。",
    pinyin: "Yǔhòu chángcháng néng kàndào cǎihóng.",
    translation: "Sau cơn mưa thường có thể nhìn thấy cầu vồng.",
    scrambled: ["彩虹", "雨后", "常常能", "看到"]
  },
  {
    id: "hsk5-6",
    level: "HSK5",
    chinese: "他已经把日程安排好了。",
    pinyin: "Tā yǐjīng bǎ rìchéng ānpái hǎo le.",
    translation: "Anh ấy đã sắp xếp xong lịch trình rồi.",
    scrambled: ["他", "日程", "把", "已经", "安排好了"]
  },
  {
    id: "hsk5-7",
    level: "HSK5",
    chinese: "您总共消费198块钱。",
    pinyin: "Nín zǒnggòng xiāofèi yībǎi jiǔshíbā kuài qián.",
    translation: "Bạn tổng cộng tiêu thụ 198 tệ.",
    scrambled: ["总共", "消费", "您", "198 块钱"]
  },
  {
    id: "hsk5-8",
    level: "HSK5",
    chinese: "他的这段经历有很特殊的意义。",
    pinyin: "Tā de zhè duàn jīnglì yǒu hěn tèshū de yìyì.",
    translation: "Trải nghiệm này của anh ấy có ý nghĩa rất đặc biệt.",
    scrambled: ["意义", "他的", "有", "很特殊的", "这段经历"]
  },
  {
    id: "hsk5-9",
    level: "HSK5",
    chinese: "长城是世界七大奇迹之一。",
    pinyin: "Chángchéng shì shìjiè qīdà qíjì zhī yī.",
    translation: "Trường Thành là một trong bảy kỳ quan thế giới.",
    scrambled: ["七大奇迹", "长城", "是", "世界", "之一"]
  },
  {
    id: "hsk5-10",
    level: "HSK5",
    chinese: "班主任家的电话一直占线。",
    pinyin: "Bānzhǔrèn jiā de diànhuà yīzhí zhànxiàn.",
    translation: "Điện thoại của nhà cô chủ nhiệm cứ bận suốt.",
    scrambled: ["一直", "班主任家的", "占线", "电话"]
  },
  {
    id: "hsk5-11",
    level: "HSK5",
    chinese: "这种产品主要针对中老年消费者。",
    pinyin: "Zhè zhǒng chǎnpǐn zhǔyào zhēnduì zhōng lǎonián xiāofèizhě.",
    translation: "Loại sản phẩm này chủ yếu nhắm đến người tiêu dùng trung niên và cao tuổi.",
    scrambled: ["中老年消费者", "这种产品", "针对", "主要"]
  },
  {
    id: "hsk5-12",
    level: "HSK5",
    chinese: "她要邀请专家出席此次学术讨论会。",
    pinyin: "Tā yào yāoqǐng zhuānjiā chūxí cǐcì xuéshù tǎolùnhuì.",
    translation: "Cô ấy muốn mời các chuyên gia tới tham dự hội thảo học thuật lần này.",
    scrambled: ["要", "她", "出席此次", "学术讨论会", "邀请专家"]
  },
  {
    id: "hsk5-13",
    level: "HSK5",
    chinese: "他把食物分配给了每个士兵。",
    pinyin: "Tā bǎ shíwù fēnpèi gěile měi gè shìbīng.",
    translation: "Anh ấy đã chia thức ăn cho mỗi binh sĩ.",
    scrambled: ["他", "食物", "分配给了", "把", "每个士兵"]
  },
  {
    id: "hsk5-14",
    level: "HSK5",
    chinese: "他的勇气很让我佩服。",
    pinyin: "Tā de yǒngqì hěn ràng wǒ pèifú.",
    translation: "Sự dũng cảm của anh ấy khiến tôi rất khâm phục.",
    scrambled: ["他的", "佩服", "勇气", "很让我"]
  },
  {
    id: "hsk5-15",
    level: "HSK5",
    chinese: "3号桌已经被别人预订了。",
    pinyin: "Sānhào zhuō yǐjīng bèi biérén yùdìng le.",
    translation: "Bàn số 3 đã được người khác đặt rồi.",
    scrambled: ["预订", "3 号桌", "已经", "了", "被", "别人"]
  },
  {
    id: "hsk5-16",
    level: "HSK5",
    chinese: "请重新输入您的密码。",
    pinyin: "Qǐng chóngxīn shūrù nín de mìmǎ.",
    translation: "Vui lòng nhập lại mật khẩu của bạn.",
    scrambled: ["请", "重新", "您的密码", "输入"]
  },
  {
    id: "hsk5-17",
    level: "HSK5",
    chinese: "你的理由缺乏说服力。",
    pinyin: "Nǐ de lǐyóu quēfá shuōfúlì.",
    translation: "Lý do của bạn thiếu sức thuyết phục.",
    scrambled: ["说服力", "的", "缺乏", "你", "理由"]
  },
  {
    id: "hsk5-18",
    level: "HSK5",
    chinese: "我们得立即采取措施。",
    pinyin: "Wǒmen děi lìjí cǎiqǔ cuòshī.",
    translation: "Chúng ta phải lập tức thực hiện biện pháp.",
    scrambled: ["得", "采取", "措施", "我们", "立即"]
  },
  {
    id: "hsk5-19",
    level: "HSK5",
    chinese: "她苗条的身材让人很羡慕。",
    pinyin: "Tā miáotiáo de shēncái ràng rén hěn xiànmù.",
    translation: "Vóc dáng thon thả của cô ấy khiến người ta rất ngưỡng mộ.",
    scrambled: ["很羡慕", "她", "苗条的身材", "让", "人"]
  },
  {
    id: "hsk5-20",
    level: "HSK5",
    chinese: "这个理论被应用到很多领域。",
    pinyin: "Zhè gè lǐlùn bèi yìngyòng dào hěnduō lǐngyù.",
    translation: "Lý thuyết này được ứng dụng vào rất nhiều lĩnh vực.",
    scrambled: ["领域", "这个理论", "被", "很多", "应用到"]
  },
  // HSK 6
  {
    id: "hsk6-1",
    level: "HSK6",
    chinese: "他恨不得马上投入战斗。",
    pinyin: "Tā hènbude mǎshàng tóurù zhàndòu.",
    translation: "Anh ấy nóng lòng muốn lao vào chiến đấu ngay lập tức.",
    scrambled: ["战斗", "恨", "不", "他", "得", "马上", "投入"]
  },
  {
    id: "hsk6-2",
    level: "HSK6",
    chinese: "他说得这么透彻，由不得你不信服。",
    pinyin: "Tā shuō de zhème tòuchè, yóubude nǐ bù xìnfú.",
    translation: "Anh ấy nói thấu đáo đến mức bạn không thể không bị thuyết phục.",
    scrambled: ["透彻", "说", "他", "得", "这么", "由", "不", "你", "得", "不", "信服"]
  },
  {
    id: "hsk6-3",
    level: "HSK6",
    chinese: "经过了几番风雨，他才懂得人生的价值。",
    pinyin: "Jīngguòle jǐ fān fēngyǔ, tā cái dǒngde rénshēng de jiàzhí.",
    translation: "Sau bao nhiêu thăng trầm sóng gió, anh ấy mới hiểu được giá trị của cuộc đời.",
    scrambled: ["了", "经过", "几", "番", "风雨", "才", "人生", "价值", " de", "懂人", "他", "得"]
  },
  {
    id: "hsk6-4",
    level: "HSK6",
    chinese: "这种瓜好吃着呢。",
    pinyin: "Zhè zhǒng guā hǎochī zhe ne.",
    translation: "Loại dưa này ăn ngon lắm đấy.",
    scrambled: ["着", "这", "呢", "这种", "好", "瓜", "吃"]
  },
  {
    id: "hsk6-5",
    level: "HSK6",
    chinese: "到今天至少会有三千人的。",
    pinyin: "Dào jīntiān zhìshǎo huì yǒu sānqiān rén de.",
    translation: "Tính đến hôm nay sẽ có ít nhất ba nghìn người.",
    scrambled: ["到", "今天", "人", "会", "三千", "的", "有", "至少"]
  },
  {
    id: "hsk6-6",
    level: "HSK6",
    chinese: "我每个月的电话费最起码也要100块钱。",
    pinyin: "Wǒ měi gè yuè de diànhuàfèi zuìqǐmǎ yě yào yībǎi kuài qián.",
    translation: "Tiền điện thoại hàng tháng của tôi ít nhất cũng phải mất 100 tệ.",
    scrambled: ["每个月", "钱", "我", "100块", "的", "要", "电话", "也", "费最", "起码"]
  },
  {
    id: "hsk6-7",
    level: "HSK6",
    chinese: "今年的房租翻了两番。",
    pinyin: "Jīnnián de fángzū fānle liǎng fān.",
    translation: "Tiền thuê nhà năm nay đã tăng gấp bốn lần.",
    scrambled: ["今年", "番", "的", "两", "房", "翻", "租"]
  },
  {
    id: "hsk6-8",
    level: "HSK6",
    chinese: "他们不妨对孩子多夸奖。",
    pinyin: "Tāmen bùfáng duì háizi duō kuājiǎng.",
    translation: "Họ nên (không ngại) khen ngợi con cái nhiều hơn.",
    scrambled: ["他们", "对", "孩子", "多", "不妨", "夸奖"]
  },
  {
    id: "hsk6-9",
    level: "HSK6",
    chinese: "连同上次买的包，这个包一共花了500块钱。",
    pinyin: "Liántóng shàngcì mǎi de bāo, zhège bāo yīgòng huāle wǔbǎi kuài qián.",
    translation: "Cùng với cái túi mua lần trước, cái túi này tổng cộng hết 500 tệ.",
    scrambled: ["包", "500块", "这个", "了", "连同", "花", "上次", "一共花", "买", "的", "包"]
  },
  {
    id: "hsk6-10",
    level: "HSK6",
    chinese: "我这次赢得汉语比赛第一名不过是运气而已。",
    pinyin: "Wǒ zhècì yíngdé Hànyǔ bǐsài dì-yī míng bùguò shì yùnqì éryǐ.",
    translation: "Lần này tôi giành giải nhất cuộc thi tiếng Hán chẳng qua chỉ là do may mắn thôi.",
    scrambled: ["运气而已", "我", "是", "这次", "不过", "赢得", "第一名", "赢得", "比赛", "汉语"]
  }
];
