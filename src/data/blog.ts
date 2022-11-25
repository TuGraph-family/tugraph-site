import md01 from '@/doc/01.md';
import md02 from '@/doc/02.md';
import md03 from '@/doc/03.md';
import md04 from '@/doc/04.md';
import md05 from '@/doc/05.md';
import md06 from '@/doc/06.md';
import md07 from '@/doc/07.md';
import md08 from '@/doc/08.md';
import md09 from '@/doc/09.md';
import md10 from '@/doc/10.md';

// TODO 国际化
export const blogs = [
  {
    id: 0,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*AFG0R5M7EA8AAAAAAAAAAAAAARQnAQ',
    title: '蚂蚁图数据库再获LDBC权威测试世界第一',
    desc: '国际权威图数据库测试机构国际关联数据基准委员会（LDBC）公布了行业通用的社交网络基准测试（LDBC SNB）最新结果，蚂蚁集团图数据库TuGraph打破官方审计测试纪录，再次拿到世界第一。',
    type: 'news',
    updateDate: '2022-08-24',
    content: md01?.html,
  },
  {
    id: 1,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*BtwnT6LQ_zYAAAAAAAAAAAAAARQnAQ',
    title: 'TuGraph通过中国信通院可信大数据权威评测',
    desc: '近日，中国信息通信研究院（以下简称中国信通院）公布了新一批“可信大数据”评估评测结果，蚂蚁集团TuGraph平台通过了图计算平台基础能力专项测评，标志着蚂蚁集团在提供更安全可信的数据产品和服务领域再次获得重要认可。',
    updateDate: '2022-06-30',
    type: 'news',
    content: md02?.html,
  },
  {
    id: 2,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*-7aFTIfnCzAAAAAAAAAAAAAAARQnAQ',
    title: '图计算，下一个科技前沿?',
    desc: '图计算，正在成为下一个科技前沿。本文为清华大学计算机系教授、蚂蚁集团图计算技术负责人陈文光教授做客极客公园「Rebuild」栏目的直播内容回顾。',
    updateDate: '2022-06-13',
    type: 'news',
    content: md03?.html,
  },
  {
    id: 3,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*KRBPSozDSSAAAAAAAAAAAAAAARQnAQ',
    title: '国际金融图数据库测试基准立项 蚂蚁集团开放专利共建',
    desc: '日前，国际权威技术协会“关联数据基准委员会”（LDBC，Linked Data Benchmark Council）发布消息，全票通过了全球首个金融图数据库测试基准“LDBC Financial Benchmark”（以下简称 FinBench）的立项。FinBench 由蚂蚁集团主导发起，Intel、海致星图等国内外科技公司共同参与编写，用于评估金融场景下图数据库的功能和性能表现。目前 LDBC 已设立了专门工作小组推进共建工作，计划于2022年底正式发布。',
    updateDate: '2022-05-27',
    type: 'news',
    content: md04?.html,
  },
  {
    id: 4,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*PKKIRIiQmMAAAAAAAAAAAAAAARQnAQ',
    title: '图数据库选型：问题、方法与工具',
    desc: '图数据库是知识图谱系统的核心。在实际的应用中，为什么要做图数据库选型，图数据库选型应该怎么做？蚂蚁集团图数据库负责人洪春涛，在知识分享社区Datafun的演讲中，对这些问题进行了分析和解答。以下是演讲原文整理。',
    updateDate: '2022-03-29',
    type: 'tech',
    content: md05?.html,
  },
  {
    id: 5,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*QT2hRbUkNkUAAAAAAAAAAAAAARQnAQ',
    title: '认识图计算和图数据库',
    desc: '我们每天都在处理人与人、人与物、物与物之间的关系。简单的事物及其关系，人脑足以应对，但面对海量的关系型数据时，计算机要如何处理呢？这就用到了图数据和图计算技术。',
    updateDate: '2022-03-23',
    type: 'tech',
    content: md06?.html,
  },
  {
    id: 6,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*QT2hRbUkNkUAAAAAAAAAAAAAARQnAQ',
    title: '蚂蚁集团开源图数据库 TuGraph，成立图计算开源委员会',
    desc: '9 月 1 日，2022 世界人工智能大会“新一代图智能技术发展与实践论坛”上，蚂蚁集团图计算负责人陈文光宣布开源蚂蚁集团高性能图数据库 TuGraph 单机版，并成立图计算开源技术委员会，中国工程院院士郑纬民、陈纯分别担任主席、副主席，5 位业界知名专家担任委员。',
    updateDate: '2022-09-01',
    type: 'tech',
    content: md07?.html,
  },
  {
    id: 7,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*QT2hRbUkNkUAAAAAAAAAAAAAARQnAQ',
    title: '图计算领域报告最新发布',
    desc: '近日，全球信息技术研究机构 Gartner® 发布了《图数据库管理系统市场指南》报告，预测到 2025 年，包括图数据库管理系统在内的图技术市场将突破新关口，增长到 32 亿美元，复合年增长率为 28.1%。',
    updateDate: '2022-10-14',
    type: 'news',
    content: md08?.html,
  },
  {
    id: 8,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*QT2hRbUkNkUAAAAAAAAAAAAAARQnAQ',
    title: '技术解读 | TuGraph 图分析引擎技术剖析',
    desc: '图分析引擎又称图计算框架，主要用来进行复杂图分析，是一种能够全量数据集运行快速循环迭代的技术，适用场景包括社区发现、基因序列预测、重要性排名等，典型算法有 PageRank、WCC、BFS、LPA、SSSP。',
    updateDate: '2022-10-25',
    type: 'news',
    content: md09?.html,
  },
  {
    id: 9,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*QT2hRbUkNkUAAAAAAAAAAAAAARQnAQ',
    title: '金融图数据库选型工具“LDBC-FinBench”',
    desc: '图计算技术在金融反洗钱，风控，KYC，股票推荐等领域的价值有目共睹。图数据库作为图计算技术最重要的基础软件，其选型对项目的最终效果起着决定性的作用',
    updateDate: '2022-11-14',
    type: 'tech',
    content: md10?.html,
  },
];
