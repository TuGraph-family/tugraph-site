import React, { useEffect, useRef } from 'react';
import FadeInSection from '@/components/FadeInSection';
import styles from './index.less';
import { SubTitle } from '@/components/SubTitle';
import { motion, useScroll } from 'framer-motion';

const WhyChoose: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const list = [
    {
      title: '蚂蚁自有业务驱动与验证',
      content:
        'TuGraph历经蚂蚁集团万亿级业务锤炼，截止目前TuGraph已应用于蚂蚁内部300多个场景，包括全图风控、反洗钱、反欺诈、保险知识图谱、花呗图谱、会员服务、蚂蚁森林、新春五福等业务场景。',
      img: 'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
    },
    {
      title: '完整高性能的图技术栈',
      content:
        'TuGraph提供完整、高性能的图技术栈，实现了完整的在线、近线、离线三线一体的图计算，满足从毫秒级到小时级不同时效性要求的场景需求，多次获得国际图数据库性能基准测试LDBC-SNB第一名。',
      img: 'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
    },
    {
      title: '金融级的高可用能力',
      content:
        '支持在线分布式扩展，千万顶点/秒的高吞吐率、低延迟响应，可串行化的隔离级别，支持多副本、同城多机房、异地多机房等部署形态，可支持RPO=0，RTO<30s，保障业务连续性。',
      img: 'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
    },
    {
      title: '自主可控、兼容性强',
      content:
        '蚂蚁集团、清华大学联合自主研发，兼容国产化服务器及操作系统，支持国际标准化图查询语言，兼容主流图查询语言。',
      img: 'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
    },
    {
      title: '完整、可扩展的应用开发',
      content:
        '开发人员可使用主流查询语言、编程语言、接口协议来快速创建应用，快速对接业务系统、融合数据存储，能够与常见开源架构平滑迁移。',
      img: 'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 25%', 'end end'],
  });

  return (
    <div className={styles.featureContainer} ref={containerRef}>
      <div className={styles.featureDescriptionWrapper}>
        <SubTitle title="为什么选择TuGraph" />

        <div className={styles.lineContet}>
          {list.map((item) => (
            <div className={styles.lineContetItem}>
              <FadeInSection>
                <div className={styles.lineContetBox}>
                  <img
                    src={item?.img}
                    alt=""
                    className={styles.lineContetImg}
                  />
                  <div className={styles.lineContetTitle}>{item.title}</div>
                  <div className={styles.lineContetDesc}>{item.content}</div>
                </div>
              </FadeInSection>
            </div>
          ))}
          <div className={styles.line}>
            <motion.div
              className={styles.progress}
              style={{
                scaleY: scrollYProgress,
                originY: 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
