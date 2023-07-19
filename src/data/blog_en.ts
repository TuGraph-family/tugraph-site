import { sortBy } from 'lodash';

import md01 from '@/doc/en/01.md';
import md02 from '@/doc/en/02.md';
import md03 from '@/doc/en/03.md';
import md04 from '@/doc/en/04.md';
import md05 from '@/doc/en/05.md';
import md06 from '@/doc/en/06.md';
import md07 from '@/doc/en/07.md';
import md08 from '@/doc/en/08.md';
import md09 from '@/doc/en/09.md';
import md10 from '@/doc/en/10.md';
import md11 from '@/doc/en/11.md';
import md12 from '@/doc/en/12.md';

export const blogs = [
  {
    id: 0,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*AFG0R5M7EA8AAAAAAAAAAAAAARQnAQ',
    title: 'TuGraph Once Again Won the First Place in the LDBC Test',
    desc: 'The Linked Data Benchmark Committee (LDBC), an international authoritative graph database testing organization, announced the latest results of the industry-wide social network benchmark (LDBC SNB). Ant Group graph database TuGraph broke the official audit test record and once again ranked first in the world.',
    type: 'news',
    updateDate: '2022-08-24',
    content: md01?.html,
  },
  {
    id: 1,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*KRBPSozDSSAAAAAAAAAAAAAAARQnAQ',
    title:
      'Ant Group Opens Patents and Jointly Establishes International Financial Graph Database Benchmark',
    desc: 'A few days ago, the Linked Data Benchmark Council (LDBC), an international authoritative technical association, announced that it unanimously approved the project approval of the first financial graph database test benchmark "LDBC Financial Benchmark" (hereinafter referred to as FinBench). FinBench was initiated by Ant Group, and domestic and foreign technology companies such as Intel and Haizhi Xingtu jointly participated in the compilation, which is used to evaluate the function and performance of graph databases in financial scenarios. At present, LDBC has set up a special working group to promote the joint construction work, and plans to officially release it by the end of 2022.',
    updateDate: '2022-05-27',
    type: 'news',
    content: md02?.html,
  },
  {
    id: 2,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*PKKIRIiQmMAAAAAAAAAAAAAAARQnAQ',
    title: 'Graph Database Selection: Methods and Tools',
    desc: 'Graph database is the core of knowledge graph system. In practical applications, why do we need to choose a graph database, and how should we choose a graph database? Hong Chuntao, head of Ant Group graph database, analyzed and answered these questions in his speech at the knowledge sharing community Datafun. The following is the text of the speech.',
    updateDate: '2022-03-29',
    type: 'tech',
    content: md03?.html,
  },
  {
    id: 3,
    img: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*QT2hRbUkNkUAAAAAAAAAAAAAARQnAQ',
    title: 'Understand Graph Computing and Graph Database',
    desc: 'We have to face the relationship between people and people, people and things, and things and things around us every day. Simple things and their relationships can be handled by the human brain. But in the face of massive amounts of linked data, it is necessary to use graph computing technology to deal with it.',
    updateDate: '2022-03-23',
    type: 'tech',
    content: md04?.html,
  },
  {
    id: 4,
    img: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*xMIOSq4QU_UAAAAAAAAAAAAADgOBAQ/original',
    title:
      'Ant Group Open Sourced Graph Database TuGraph, and Estabilished the Graph Computing Open Source Committee',
    desc: 'On September 1, at the "New Generation Graph Intelligence Technology Development and Practice Forum" of the 2022 World Artificial Intelligence Conference, Chen Wenguang, head of Ant Group Graph Computing, announced the open-source TuGraph stand-alone version of Ant Group high-performance graph database, and the establishment of the Graph Computing Open Source Technology Committee. Zheng Weimin and Chen Chun, academicians of the Chinese Academy of Engineering, serve as the chairman and vice-chairman respectively, and five well-known experts in the industry serve as committee members.',
    updateDate: '2022-09-01',
    type: 'news',
    content: md05?.html,
  },
  {
    id: 5,
    img: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*9wctSpP77icAAAAAAAAAAAAADgOBAQ/original',
    title: 'Graph Computing Reports Latest Release',
    desc: 'Recently, the global information technology research organization Gartner® released the "Graph Database Management System Market Guide" report, predicting that by 2025, the graph technology market, including graph database management systems, will break through a new threshold and grow to 3.2 billion US dollars, with a compound annual The growth rate was 28.1%.',
    updateDate: '2022-10-14',
    type: 'news',
    content: md06?.html,
  },
  {
    id: 6,
    img: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*q-6QSJrO7QYAAAAAAAAAAAAADgOBAQ/original',
    title: 'Introduction to TuGraph Graph Analysis Engine',
    desc: 'The graph analysis engine, also known as the graph computing framework, is mainly used for complex graph analysis. It is a technology that can run fast loop iterations on a full dataset. Scenarios include community discovery, gene sequence prediction, importance ranking, etc. Typical algorithms include PageRank, WCC, BFS, LPA, SSSP.',
    updateDate: '2022-10-25',
    type: 'tech',
    content: md07?.html,
  },
  {
    id: 7,
    img: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*hFSqSq5-zTcAAAAAAAAAAAAADgOBAQ/original',
    title: 'Financial Graph Database Selection Tool "LDBC-FinBench"',
    desc: 'The value of graph computing technology is fully reflected in financial anti-money laundering, risk control, KYC, stock recommendation and other fields. Graph database is the most important basic software of graph computing technology, and its selection plays a decisive role in the final effect of the project',
    updateDate: '2022-11-14',
    type: 'tech',
    content: md08?.html,
  },
  {
    id: 8,
    img: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*XtLHSp8jd7kAAAAAAAAAAAAADgOBAQ/original',
    title: 'TuGraph Open-sourced Java Client Tool TuGraph-OGM',
    desc: 'TuGraph provides SDK support in multiple languages such as JAVA, C++, and Python, which is convenient for customers to use in various scenarios. The user uses the SDK to send a Cypher request to the TuGraph server, and the server returns the data in the form of JSON. Recently, TuGraph launched a development tool for JAVA client users, TuGraph-OGM (Object Graph Mapping), which provides users with an object operation interface, which is more convenient to use than the Cypher/JSON interface.',
    updateDate: '2022-11-27',
    type: 'tech',
    content: md09?.html,
  },
  {
    id: 9,
    img: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*YD5WQZ5OkkUAAAAAAAAAAAAADgOBAQ/original',
    title: `Technical Thinking and Practice of Ant Group's Graph Database`,
    desc: 'At the recently held DTCC 2022 13th China Database Technology Conference-Graph Data Technology and Application Innovation Session, Dr. Hong Chuntao, head of Ant Group’s graph database, shared his technical thinking and practice of TuGraph-DB, an ant’s high-performance graph database.',
    updateDate: '2022-12-20',
    type: 'tech',
    content: md10?.html,
  },
  {
    id: 10,
    img: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*_H7HSYtXw5sAAAAAAAAAAAAADgOBAQ/original',
    title: 'TuGraph Graph Database Landed on Alibaba Cloud, Free Trial',
    desc: `Ant Group's high-performance graph database TuGraph Community Edition is now available on Alibaba Cloud. Users do not need to compile and deploy by themselves, and can quickly build their own graph applications.`,
    updateDate: '2022-12-25',
    type: 'news',
    content: md11?.html,
  },
  {
    id: 11,
    img: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*Q69RS47A_s4AAAAAAAAAAAAADgOBAQ/original',
    title: 'ICDM2023 Ant TuGraph Competition',
    desc: `ICDM2023 Community Discovery and Gang Mining Competition Based on Pre-trained Model`,
    updateDate: '2023-07-19',
    type: 'news',
    content: md12?.html,
  },
];

export const getENBlogs = (type: string) => {
  let list;
  if (!type || type === 'all') {
    list = blogs;
  } else {
    list = blogs.filter((blog) => blog.type === type);
  }

  list = sortBy(
    list,
    (item: { updateDate: string }) =>
      -new Date(Date.parse(item.updateDate)).getTime(),
  );
  return list;
};
