import React, { useEffect, useRef, useState } from 'react';
import FadeInSection from '@/components/FadeInSection';
import styles from './index.less';
import { SubTitle } from '@/components/SubTitle';
import { motion, useScroll } from 'framer-motion';
import { IntlShape } from 'react-intl';
import { getReason } from '@/pages/new-pages/Home/constants/data';

const WhyChoose: React.FC<{ intl: IntlShape }> = ({ intl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState<string | number>(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 25%', 'end end'],
  });

  useEffect(() => {
    if (scrollYProgress) {
      // 创建一个函数来处理滚动进度的变化
      const handleScroll = (latest: number) => {
        const percent = (latest * 100).toFixed(2);
        setPercentage(percent);
      };

      // 订阅 scrollYProgress 的变化
      const unsubscribe = scrollYProgress.onChange(handleScroll);

      // 清理函数，在组件卸载时取消订阅
      return () => unsubscribe && unsubscribe();
    }
  }, [scrollYProgress]);

  return (
    <div className={styles.featureContainer} ref={containerRef}>
      <div className={styles.featureDescriptionWrapper}>
        <SubTitle title={intl.formatMessage({ id: 'home.choseReason' })} />
        <div className={styles.lineContet}>
          {getReason(intl).map((item) => (
            <div className={styles.lineContetItem} key={item.key}>
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
                height: `${percentage}%`,
                originY: 0,
                position: 'relative',
              }}
            >
              <div className={styles['progress-header']} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
