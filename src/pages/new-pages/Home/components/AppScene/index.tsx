import { Popover } from 'antd';
import { motion, useScroll } from 'framer-motion';
import FadeInSection from '@/components/FadeInSection';
import styles from './index.less';
import { useInView } from 'react-intersection-observer';
import { IntlShape } from 'react-intl';
import { getSceneList } from '@/pages/new-pages/Home/constants/data';
import { PLACEHOLDERS } from '@/pages/new-pages/Home/constants';
import { useRef } from 'react';
import { SubTitle } from '@/components/SubTitle';

const AppScene = ({ intl }: { intl: IntlShape }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // 确保动画只触发一次
    threshold: 0.5, // 在元素至少有 x% 可见时触发动画
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const renderPopover = (field: string, scene: string, illustrate: string) => {
    return (
      <div className={styles.popoverContent}>
        <div className={styles.field}>{field}</div>
        <div className={styles.scene}>{scene}</div>
        <div className={styles.illustrate}>{illustrate}</div>
      </div>
    );
  };

  return (
    <div className={styles.appWrapper} ref={containerRef}>
      <SubTitle
        title={intl.formatMessage({ id: 'home.case.title' })}
        style={{
          margin: '76px 0',
        }}
      />
      <div className={styles.appContent} ref={ref}>
        {getSceneList(intl).map((item) => (
          <motion.div
            key={item.className}
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <Popover
              overlayClassName={styles.popoverInfo}
              placement="right"
              content={renderPopover(item.field, item.scene, item.illustrate)}
            >
              <div className={styles.fieldCard} style={item.style}>
                <img src={item.icon} alt="" className={styles.sceneIcon} />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: inView ? 1 : 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <div className={styles.tag}>{item.field}</div>
                </motion.div>
              </div>
            </Popover>
          </motion.div>
        ))}

        {PLACEHOLDERS.map((item) => (
          <motion.div
            key={item}
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className={styles[item]}></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppScene;
