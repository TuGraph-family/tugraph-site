import md01 from '@/doc/01.md';
import md02 from '@/doc/02.md';
import md03 from '@/doc/03.md';
import md04 from '@/doc/04.md';
import md05 from '@/doc/05.md';
import md06 from '@/doc/06.md';

// TODO 国际化
export const blogs = [
  {
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*AFG0R5M7EA8AAAAAAAAAAAAAARQnAQ',
    title: '蚂蚁图数据库再获LDBC权威测试世界第一',
    desc: '国际权威图数据库测试机构国际关联数据基准委员会（LDBC）公布了行业通用的社交网络基准测试（LDBC SNB）最新结果，蚂蚁集团图数据库TuGraph打破官方审计测试纪录，再次拿到世界第一。',
    updateDate: '2022-08-24',
    content: md01?.html,
  },
  {
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*BtwnT6LQ_zYAAAAAAAAAAAAAARQnAQ',
    title: 'TuGraph通过中国信通院可信大数据权威评测',
    desc: '近日，中国信息通信研究院（以下简称中国信通院）公布了新一批“可信大数据”评估评测结果，蚂蚁集团TuGraph平台通过了图计算平台基础能力专项测评，标志着蚂蚁集团在提供更安全可信的数据产品和服务领域再次获得重要认可。',
    updateDate: '2022-06-30',
    content: md02?.html,
  },
  {
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*-7aFTIfnCzAAAAAAAAAAAAAAARQnAQ',
    title: '图计算，下一个科技前沿?',
    desc: '图计算，正在成为下一个科技前沿。本文为清华大学计算机系教授、蚂蚁集团图计算技术负责人陈文光教授做客极客公园「Rebuild」栏目的直播内容回顾。',
    updateDate: '2022-06-13',
    content: md03?.html,
  },
  {
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*KRBPSozDSSAAAAAAAAAAAAAAARQnAQ',
    title: '国际金融图数据库测试基准立项 蚂蚁集团开放专利共建',
    desc: '日前，国际权威技术协会“关联数据基准委员会”（LDBC，Linked Data Benchmark Council）发布消息，全票通过了全球首个金融图数据库测试基准“LDBC Financial Benchmark”（以下简称 FinBench）的立项。FinBench 由蚂蚁集团主导发起，Intel、海致星图等国内外科技公司共同参与编写，用于评估金融场景下图数据库的功能和性能表现。目前 LDBC 已设立了专门工作小组推进共建工作，计划于2022年底正式发布。',
    updateDate: '2022-05-27',
    content: md04?.html,
  },
  {
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*PKKIRIiQmMAAAAAAAAAAAAAAARQnAQ',
    title: '图数据库选型：问题、方法与工具',
    desc: '图数据库是知识图谱系统的核心。在实际的应用中，为什么要做图数据库选型，图数据库选型应该怎么做？蚂蚁集团图数据库负责人洪春涛，在知识分享社区Datafun的演讲中，对这些问题进行了分析和解答。以下是演讲原文整理。',
    updateDate: '2022-03-29',
    content: md05?.html,
  },
  {
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*QT2hRbUkNkUAAAAAAAAAAAAAARQnAQ',
    title: '认识图计算和图数据库',
    desc: '我们每天都在处理人与人、人与物、物与物之间的关系。简单的事物及其关系，人脑足以应对，但面对海量的关系型数据时，计算机要如何处理呢？这就用到了图数据和图计算技术。',
    updateDate: '2022-03-23',
    content: md06?.html,
  },
];
