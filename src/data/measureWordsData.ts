import { Vocabulary } from './chineseData';

export const MEASURE_WORDS: (Vocabulary & { customExamples?: string[] })[] = [
  { 
    character: "个", pinyin: "gè", meaning: "Lượng từ chung (người, đồ vật...)", 
    example: "一个人", examplePinyin: "yī gè rén", exampleTranslation: "Một người", 
    customExamples: ["三个好人 (sān gè hǎo rén) - Ba người tốt", "一个大苹果 (yī gè dà píngguǒ) - Một quả táo to"],
    level: "HSK 1", topicId: "measure_words", id: "mw-1" 
  },
  { 
    character: "本", pinyin: "běn", meaning: "Quyển, cuốn (sách, vở)", 
    example: "一本书", examplePinyin: "yī běn shū", exampleTranslation: "Một quyển sách", 
    customExamples: ["两本好书 (liǎng běn hǎo shū) - Hai quyển sách hay", "三本新杂志 (sān běn xīn zázhì) - Ba quyển tạp chí mới"],
    level: "HSK 1", topicId: "measure_words", id: "mw-2" 
  },
  { 
    character: "张", pinyin: "zhāng", meaning: "Tờ, tấm, chiếc (vật mặt phẳng)", 
    example: "一张桌子", examplePinyin: "yī zhāng zhuōzi", exampleTranslation: "Một chiếc bàn", 
    customExamples: ["一张大圆桌 (yī zhāng dà yuánzhuō) - Một chiếc bàn tròn lớn", "两张旧照片 (liǎng zhāng jiù zhàopiàn) - Hai tấm ảnh cũ"],
    level: "HSK 2", topicId: "measure_words", id: "mw-3" 
  },
  { 
    character: "件", pinyin: "jiàn", meaning: "Chiếc, cái, sự (quần áo, sự việc)", 
    example: "一件衣服", examplePinyin: "yī jiàn yīfu", exampleTranslation: "Một chiếc áo", 
    customExamples: ["一件新衣服 (yī jiàn xīn yīfu) - Một chiếc áo mới", "两件重要的事情 (liǎng jiàn zhòngyào de shìqíng) - Hai sự việc quan trọng"],
    level: "HSK 2", topicId: "measure_words", id: "mw-4" 
  },
  { 
    character: "条", pinyin: "tiáo", meaning: "Con, cái, sợi (vật dài không quy tắc)", 
    example: "一条狗", examplePinyin: "yī tiáo gǒu", exampleTranslation: "Một con chó", 
    customExamples: ["一条黑狗 (yī tiáo hēi gǒu) - Một con chó đen", "三条很长的河 (sān tiáo hěn cháng de hé) - Ba con sông rất dài"],
    level: "HSK 2", topicId: "measure_words", id: "mw-5" 
  },
  { 
    character: "辆", pinyin: "liàng", meaning: "Chiếc, cỗ (xe cộ)", 
    example: "一辆汽车", examplePinyin: "yī liàng qìchē", exampleTranslation: "Một chiếc ô tô", 
    customExamples: ["一辆新跑车 (yī liàng xīn pǎochē) - Một chiếc xe hơi thể thao mới", "两辆旧自行车 (liǎng liàng jiù zìxíngchē) - Hai chiếc xe đạp cũ"],
    level: "HSK 3", topicId: "measure_words", id: "mw-6" 
  },
  { 
    character: "只", pinyin: "zhī", meaning: "Con, chiếc (động vật, 1 bên của cặp)", 
    example: "一只猫", examplePinyin: "yī zhī māo", exampleTranslation: "Một con mèo", 
    customExamples: ["一只可爱的小猫 (yī zhī kě'ài de xiǎomāo) - Một chú mèo con đáng yêu", "两只大眼睛 (liǎng zhī dà yǎnjing) - Hai con mắt lớn"],
    level: "HSK 2", topicId: "measure_words", id: "mw-7" 
  },
  { 
    character: "家", pinyin: "jiā", meaning: "Nhà, hãng, công ty", 
    example: "一家医院", examplePinyin: "yī jiā yīyuàn", exampleTranslation: "Một bệnh viện", 
    customExamples: ["一家大医院 (yī jiā dà yīyuàn) - Một bệnh viện lớn", "三家好大夫诊所 (sān jiā hǎo dàfū zhěnsuǒ) - Ba phòng khám bác sĩ giỏi"],
    level: "HSK 1", topicId: "measure_words", id: "mw-8" 
  },
  { 
    character: "杯", pinyin: "bēi", meaning: "Cốc, ly", 
    example: "一杯茶", examplePinyin: "yī bēi chá", exampleTranslation: "Một tách trà", 
    customExamples: ["一杯热茶 (yī bēi rè chá) - Một cốc trà nóng", "两杯冰咖啡 (liǎng bēi bīng kāfēi) - Hai cốc cà phê đá"],
    level: "HSK 1", topicId: "measure_words", id: "mw-9" 
  },
  { character: "瓶", pinyin: "píng", meaning: "Chai, lọ, bình", example: "一瓶水", examplePinyin: "yī píng shuǐ", exampleTranslation: "Một chai nước", customExamples: ["一瓶好酒 (yī píng hǎo jiǔ) - Một chai rượu ngon", "两瓶好喝的果汁 (liǎng píng hǎohē de guǒzhī) - Hai chai nước ép ngon"], level: "HSK 3", topicId: "measure_words", id: "mw-10" },
  { character: "份", pinyin: "fèn", meaning: "Phần, suất (báo, công việc, cơm)", example: "一份工作", examplePinyin: "yī fèn gōngzuò", exampleTranslation: "Một công việc", customExamples: ["一份好工作 (yī fèn hǎo gōngzuò) - Một công việc tốt", "两份大餐 (liǎng fèn dàcān) - Hai suất ăn lớn"], level: "HSK 3", topicId: "measure_words", id: "mw-11" },
  { character: "把", pinyin: "bǎ", meaning: "Cái (những vật có tay cầm)", example: "一把椅子", examplePinyin: "yī bǎ yǐzi", exampleTranslation: "Một cái ghế", customExamples: ["一把破椅子 (yī bǎ pò yǐzi) - Một cái ghế rách", "三把好用的雨伞 (sān bǎ hǎoyòng de yǔsǎn) - Ba chiếc ô dùng tốt"], level: "HSK 3", topicId: "measure_words", id: "mw-12" },
  { character: "双", pinyin: "shuāng", meaning: "Đôi (giày, đũa, mắt)", example: "一双鞋", examplePinyin: "yī shuāng xié", exampleTranslation: "Một đôi giày", customExamples: ["一双新鞋 (yī shuāng xīn xié) - Một đôi giày mới", "两双好看的袜子 (liǎng shuāng hǎokàn de wàzi) - Hai đôi tất đẹp"], level: "HSK 3", topicId: "measure_words", id: "mw-13" },
  { character: "块", pinyin: "kuài", meaning: "Miếng, cục, viên, đồng (tiền)", example: "一块蛋糕", examplePinyin: "yī kuài dàngāo", exampleTranslation: "Một miếng bánh kem", customExamples: ["一块大蛋糕 (yī kuài dà dàngāo) - Một miếng bánh lớn"], level: "HSK 1", topicId: "measure_words", id: "mw-14" },
  { character: "间", pinyin: "jiān", meaning: "Căn, gian (phòng học, phòng ngủ)", example: "一间房间", examplePinyin: "yī jiān fángjiān", exampleTranslation: "Một căn phòng", customExamples: ["一间大房间 (yī jiān dà fángjiān) - Một căn phòng lớn", "两间很亮的卧房 (liǎng jiān hěn liàng de wòfáng) - Hai căn phòng ngủ rất sáng"], level: "HSK 3", topicId: "measure_words", id: "mw-15" },
  { character: "些", pinyin: "xiē", meaning: "Một vài, những", example: "一些人", examplePinyin: "yī xiē rén", exampleTranslation: "Một vài người", customExamples: ["一些好人 (yī xiē hǎo rén) - Một vài người tốt", "那些贵的东西 (nà xiē guì de dōngxi) - Những đồ vật đắt tiền kia"], level: "HSK 1", topicId: "measure_words", id: "mw-16" },
  { character: "位", pinyin: "wèi", meaning: "Vị (người - trang trọng)", example: "一位老师", examplePinyin: "yī wèi lǎoshī", exampleTranslation: "Một vị giáo viên", customExamples: ["一位好老师 (yī wèi hǎo lǎoshī) - Một vị giáo viên giỏi", "三位老专家 (sān wèi lǎo zhuānjiā) - Ba vị chuyên gia lão thành"], level: "HSK 2", topicId: "measure_words", id: "mw-17" },
  { character: "次", pinyin: "cì", meaning: "Lần, chuyến", example: "去一次", examplePinyin: "qù yī cì", exampleTranslation: "Đi một lần", customExamples: ["一次好机会 (yī cì hǎo jīhuì) - Một cơ hội tốt", "完美的两次旅行 (wánměi de liǎng cì lǚxíng) - Hai chuyến du lịch hoàn hảo"], level: "HSK 2", topicId: "measure_words", id: "mw-18" },
  { character: "种", pinyin: "zhǒng", meaning: "Loại, chủng loại", example: "这种药", examplePinyin: "zhè zhǒng yào", exampleTranslation: "Loại thuốc này", customExamples: ["一种好药 (yī zhǒng hǎo yào) - Một loại thuốc tốt", "各种新鲜的水果 (gè zhǒng xīnxiān de shuǐguǒ) - Các loại trái cây tươi ngon"], level: "HSK 3", topicId: "measure_words", id: "mw-19" },
  { character: "句", pinyin: "jù", meaning: "Câu", example: "一句话", examplePinyin: "yī jù huà", exampleTranslation: "Một câu nói", customExamples: ["一句好话 (yī jù hǎo huà) - Một lời nói hay", "两句真心的祝福 (liǎng jù zhēnxīn de zhùfú) - Hai câu chúc chân thành"], level: "HSK 4", topicId: "measure_words", id: "mw-20" },
  { character: "节", pinyin: "jié", meaning: "Tiết học, đốt", example: "一节课", examplePinyin: "yī jié kè", exampleTranslation: "Một tiết học", customExamples: ["一节很难的课 (yī jié hěn nán de kè) - Một tiết học rất khó", "两节有意思的汉语课 (liǎng jié yǒuyìsi de hànyǔ kè) - Hai tiết học tiếng Trung thú vị"], level: "HSK 4", topicId: "measure_words", id: "mw-21" },
  { character: "段", pinyin: "duàn", meaning: "Đoạn (thời gian, đường, văn)", example: "一段时间", examplePinyin: "yī duàn shíjiān", exampleTranslation: "Một mốc thời gian", customExamples: ["一段长路 (yī duàn cháng lù) - Một chặng đường dài", "一段美好的回忆 (yī duàn měihǎo de huíyì) - Một đoạn hồi ức tươi đẹp"], level: "HSK 3", topicId: "measure_words", id: "mw-22" },
  { character: "部", pinyin: "bù", meaning: "Bộ (phim, điện thoại, tiểu thuyết)", example: "一部电影", examplePinyin: "yī bù diànyǐng", exampleTranslation: "Một bộ phim điện ảnh", customExamples: ["一部好电影 (yī bù hǎo diànyǐng) - Một bộ phim hay", "三部新的手机 (sān bù xīn de shǒujī) - Ba bộ điện thoại mới"], level: "HSK 4", topicId: "measure_words", id: "mw-23" },
  { character: "场", pinyin: "chǎng", meaning: "Trận, buổi (mưa, bóng, tuyết)", example: "一场雨", examplePinyin: "yī chǎng yǔ", exampleTranslation: "Một trận mưa", customExamples: ["一场大雨 (yī chǎng dà yǔ) - Một trận mưa lớn", "一场精彩的比赛 (yī chǎng jīngcǎi de bǐsài) - Một trận đấu đặc sắc"], level: "HSK 4", topicId: "measure_words", id: "mw-24" },
  { character: "台", pinyin: "tái", meaning: "Chiếc, đài, cỗ (máy móc, thiết bị, kịch)", example: "一台电脑", examplePinyin: "yī tái diànnǎo", exampleTranslation: "Một dàn máy tính", customExamples: ["一台新电脑 (yī tái xīn diànnǎo) - Một dàn máy tính mới", "两台旧电视机 (liǎng tái jiù diànshījī) - Hai chiếc tivi cũ"], level: "HSK 4", topicId: "measure_words", id: "mw-25" },
];
