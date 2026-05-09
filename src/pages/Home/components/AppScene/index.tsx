import { motion } from 'framer-motion';
import styles from './index.less';

interface Scenario {
  key: string;
  label: string;
  body: string;
  img: string;
}

const iconPaths: Record<string, string> = {
  'Government Affairs':
    'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/XWV-Qq_TyB0AAAAAESAAAAgAeh8WAQFr/original',
  'Industrial Field':
    'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/uGbxQ7qxDZwAAAAAE3AAAAgAeh8WAQFr/original',
  'General Field':
    'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/Q5inRo2pRNkAAAAAGbAAAAgAeh8WAQFr/original',
  'Financial Field':
    'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/UnAwR4gvmLoAAAAAFLAAAAgAeh8WAQFr/original',
  'AI Field':
    'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/HfXoT5BzJYoAAAAALBAAAAgAeh8WAQFr/original',
  'Telecom Field':
    'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/69UFTKKX0nYAAAAAM_AAAAgAeh8WAQFr/original',
  'Internet Field':
    'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/peHpSJfkMHsAAAAAQCAAAAgAeh8WAQFr/original',
};

const scenarios: Scenario[] = [
  {
    key: 'home.case0.title',
    label: 'Risk & marketing',
    body: 'Financial Field',
    img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/3658TJGXR6QAAAAAgGAAAAgAeh8WAQFr/fmt.avif',
  },
  {
    key: 'home.case1.title',
    label: 'Growth & discovery',
    body: 'Internet Field',
    img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/IvnST6Gv4-4AAAAAgGAAAAgAeh8WAQFr/fmt.webp',
  },
  {
    key: 'home.case2.title',
    label: 'Smart city & IoT',
    body: 'Government Affairs',
    img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/9lA1Q4kG_awAAAAAgGAAAAgAeh8WAQFr/fmt.avif',
  },
  {
    key: 'home.case3.title',
    label: 'Operations & supply chain',
    body: 'Industrial Field',
    img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/ykH7S4C7KbEAAAAAgGAAAAgAeh8WAQFr/fmt.avif',
  },
  {
    key: 'home.case6.title',
    label: 'Entity intelligence',
    body: 'AI Field',
    img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/E-6HQLRsIhEAAAAAgGAAAAgAeh8WAQFr/fmt.webp',
  },
  {
    key: 'home.case4.title',
    label: 'Streaming relationships',
    body: 'Telecom Field',
    img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/Nv0KQqNiGoEAAAAAgGAAAAgAeh8WAQFr/fmt.webp',
  },
  {
    key: 'home.case5.title',
    label: 'General applications',
    body: 'General Field',
    img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/nIj4TbleNbsAAAAAgGAAAAgAeh8WAQFr/fmt.avif',
  },
];

const AppScene = ({ intl }) => {
  // 第一行数据(前3个重复)
  const row1Scenarios = [...scenarios.slice(0, 3), ...scenarios.slice(0, 3)];
  // 第二行数据(后4个重复)
  const row2Scenarios = [...scenarios.slice(3), ...scenarios.slice(3)];

  const ScenarioCard = ({
    scenario,
    index,
  }: {
    scenario: Scenario;
    index: number;
  }) => (
    <div key={`${scenario.key}-${index}`} className={styles.scenarioCard}>
      {/* 背景图片 */}
      <img
        src={scenario.img}
        alt={scenario.body}
        className={styles.cardImage}
      />
      {/* 渐变遮罩 */}
      <div className={styles.cardOverlay} />
      {/* 内容 */}
      <div className={styles.cardContent}>
        <img className={styles.cardIcon} src={iconPaths[scenario.body]} />
        <blockquote className={styles.cardText}>
          {intl.formatMessage({ id: scenario.key })}
        </blockquote>
      </div>
    </div>
  );

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.marqueeContainer}>
        {/* 标题 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={styles.titleWrapper}
        >
          <h2 className={styles.title}>
            {intl.formatMessage({ id: 'home.case.title' })}
          </h2>
        </motion.div>

        {/* 滚动容器 */}
        <div className={styles.cardsWrapper}>
          <div className={styles.cardsContainer}>
            {/* 第一行 - 向左滚动 */}
            <div className={styles.marqueeRow}>
              <div
                className={`${styles.marqueeTrack} ${styles['marqueeTrack--left']}`}
              >
                <div className={styles.marqueeGroup}>
                  {row1Scenarios.map((scenario, idx) => (
                    <ScenarioCard
                      key={`row1-${idx}`}
                      scenario={scenario}
                      index={idx}
                    />
                  ))}
                </div>
                <div
                  className={`${styles.marqueeGroup} ${styles['marqueeGroup--duplicate']}`}
                >
                  {row1Scenarios.map((scenario, idx) => (
                    <ScenarioCard
                      key={`row1-dup-${idx}`}
                      scenario={scenario}
                      index={idx + 100}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 第二行 - 向右滚动 */}
            <div className={styles.marqueeRow}>
              <div
                className={`${styles.marqueeTrack} ${styles['marqueeTrack--right']}`}
              >
                <div className={styles.marqueeGroup}>
                  {row2Scenarios.map((scenario, idx) => (
                    <ScenarioCard
                      key={`row2-${idx}`}
                      scenario={scenario}
                      index={idx + 200}
                    />
                  ))}
                </div>
                <div
                  className={`${styles.marqueeGroup} ${styles['marqueeGroup--duplicate']}`}
                >
                  {row2Scenarios.map((scenario, idx) => (
                    <ScenarioCard
                      key={`row2-dup-${idx}`}
                      scenario={scenario}
                      index={idx + 300}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 左侧渐变 */}
          <div className={styles.gradientMaskLeft} />
          {/* 右侧渐变 */}
          <div className={styles.gradientMaskRight} />
        </div>
      </div>
    </section>
  );
};

export default AppScene;
