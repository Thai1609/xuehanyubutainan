import type { Topic } from './chineseData';

const WORDS_BY_LEVEL: [character: string, pinyin: string, meaning: string][][] = [
  [
    ['爱', 'ài', 'yêu'],
    ['杯子', 'bēizi', 'cốc, ly'],
    ['出租车', 'chūzūchē', 'xe taxi'],
    ['电脑', 'diànnǎo', 'máy tính'],
    ['电影', 'diànyǐng', 'phim'],
    ['商店', 'shāngdiàn', 'cửa hàng'],
    ['天气', 'tiānqì', 'thời tiết'],
    ['医院', 'yīyuàn', 'bệnh viện'],
  ],
  [
    ['帮助', 'bāngzhù', 'giúp đỡ'],
    ['准备', 'zhǔnbèi', 'chuẩn bị'],
    ['问题', 'wèntí', 'vấn đề, câu hỏi'],
    ['希望', 'xīwàng', 'hy vọng'],
    ['休息', 'xiūxi', 'nghỉ ngơi'],
    ['考试', 'kǎoshì', 'thi, kỳ thi'],
    ['旅游', 'lǚyóu', 'du lịch'],
    ['锻炼', 'duànliàn', 'rèn luyện, tập thể dục'],
  ],
  [
    ['办法', 'bànfǎ', 'cách giải quyết'],
    ['发现', 'fāxiàn', 'phát hiện'],
    ['机会', 'jīhuì', 'cơ hội'],
    ['决定', 'juédìng', 'quyết định'],
    ['提高', 'tígāo', 'nâng cao'],
    ['影响', 'yǐngxiǎng', 'ảnh hưởng'],
    ['照顾', 'zhàogù', 'chăm sóc'],
    ['环境', 'huánjìng', 'môi trường'],
  ],
  [
    ['安排', 'ānpái', 'sắp xếp, bố trí'],
    ['表达', 'biǎodá', 'diễn đạt'],
    ['成功', 'chénggōng', 'thành công'],
    ['鼓励', 'gǔlì', 'khuyến khích, động viên'],
    ['积累', 'jīlěi', 'tích lũy'],
    ['耐心', 'nàixīn', 'kiên nhẫn'],
    ['尊重', 'zūnzhòng', 'tôn trọng'],
    ['责任', 'zérèn', 'trách nhiệm'],
  ],
  [
    ['采取', 'cǎiqǔ', 'áp dụng, thực hiện (biện pháp)'],
    ['成就', 'chéngjiù', 'thành tựu'],
    ['措施', 'cuòshī', 'biện pháp'],
    ['导致', 'dǎozhì', 'dẫn đến'],
    ['承担', 'chéngdān', 'đảm nhận, gánh vác'],
    ['改善', 'gǎishàn', 'cải thiện'],
    ['掌握', 'zhǎngwò', 'nắm vững'],
    ['维持', 'wéichí', 'duy trì'],
  ],
  [
    ['贯彻', 'guànchè', 'quán triệt, thực hiện triệt để'],
    ['鉴于', 'jiànyú', 'xét thấy, vì có xét đến'],
    ['权衡', 'quánhéng', 'cân nhắc lợi hại'],
    ['阐述', 'chǎnshù', 'trình bày rõ, diễn giải'],
    ['制约', 'zhìyuē', 'kiềm chế, giới hạn'],
    ['妥协', 'tuǒxié', 'thỏa hiệp'],
    ['缓解', 'huǎnjiě', 'làm dịu, giảm bớt'],
    ['竭尽全力', 'jiéjìn quánlì', 'dốc hết sức'],
  ],
];

export const HSK_TOPICS: Topic[] = WORDS_BY_LEVEL.map((words, index) => {
  const id = 'hsk-' + (index + 1);
  const level = 'HSK ' + (index + 1);

  return {
    id,
    title: level,
    level,
    description: 'Từ vựng chọn lọc',
    icon: 'Book',
    radicals: [],
    grammar: [],
    vocabulary: words.map(([character, pinyin, meaning]) => ({
      id: id + '-' + character,
      character,
      pinyin,
      meaning,
      level,
      topicId: id,
    })),
  };
});
