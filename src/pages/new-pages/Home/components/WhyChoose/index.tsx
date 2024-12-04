import React, { useEffect, useRef, useState } from 'react';
import FadeInSection from '@/components/FadeInSection';
import styles from './index.less';
import { SubTitle } from '@/components/SubTitle';
import { motion, useScroll } from 'framer-motion';
import { IntlShape } from 'react-intl';

const WhyChoose: React.FC<{ intl: IntlShape }> = ({ intl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 25%', 'end end'],
  });
  const list = [
    {
      title: intl.formatMessage({ id: 'home.reason0' }),
      content: intl.formatMessage({ id: 'home.reason.desc0' }),
      img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/eQ2CSaTW-iIAAAAAAAAAAAAADh8WAQFr/fmt.avif',
    },
    {
      title: intl.formatMessage({ id: 'home.reason1' }),
      content: intl.formatMessage({ id: 'home.reason.desc1' }),
      img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/-2fbSYub2sYAAAAAAAAAAAAADh8WAQFr/fmt.avif',
    },
    {
      title: intl.formatMessage({ id: 'home.reason2' }),
      content: intl.formatMessage({ id: 'home.reason.desc2' }),
      img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/bmVhRZuDKQUAAAAAAAAAAAAADh8WAQFr/fmt.avif',
    },
    {
      title: intl.formatMessage({ id: 'home.reason3' }),
      content: intl.formatMessage({ id: 'home.reason.desc3' }),
      img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/TAGYR5Pj1gMAAAAAAAAAAAAADh8WAQFr/fmt.avif',
    },
    {
      title: intl.formatMessage({ id: 'home.reason4' }),
      content: intl.formatMessage({ id: 'home.reason.desc4' }),
      img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/b2ZtTLd4ppoAAAAAAAAAAAAADh8WAQFr/fmt.avif',
    },
  ];

  useEffect(() => {
    if (scrollYProgress) {
      // 创建一个函数来处理滚动进度的变化
      const handleScroll = (latest) => {
        const percent = (latest * 100).toFixed(2);
        setPercentage(percent); // 将小数值转换为百分比，并保留两位小数
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
          {list.map((item, key) => (
            <div className={styles.lineContetItem} key={key}>
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
                // scaleY: scrollYProgress,
                originY: 0,
                position: 'relative',
              }}
            >
              <div className={styles['progress-header']} />
            </motion.div>
            {/* <div>{scrollYProgress.get()}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
