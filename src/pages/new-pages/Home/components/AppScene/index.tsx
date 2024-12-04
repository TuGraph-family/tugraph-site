import { Popover } from 'antd';
import { motion } from 'framer-motion';
import FadeInSection from '@/components/FadeInSection';
import styles from './index.less';
import { useInView } from 'react-intersection-observer';
import { IntlShape } from 'react-intl';

const AppScene = ({ intl }: { intl: IntlShape }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // 确保动画只触发一次
    threshold: 0.5, // 在元素至少有 x% 可见时触发动画
  });

  const SCENE_LIST = [
    {
      field: intl.formatMessage({ id: 'home.case0.title' }),
      scene: intl.formatMessage({ id: 'home.case0.desc' }),
      illustrate: intl.formatMessage({ id: 'home.case0.illustrate' }),
      style: {
        top: '109px',
        left: 0,
        width: '134px',
        height: '135px',
        background:
          'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/u2M8T4tM2FgAAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
      },
      className: 'government',
    },
    {
      field: intl.formatMessage({ id: 'home.case1.title' }),
      scene: intl.formatMessage({ id: 'home.case1.desc' }),
      illustrate: intl.formatMessage({ id: 'home.case1.illustrate' }),
      style: {
        top: 0,
        left: '372px',
        width: '170px',
        height: '170px',
        background:
          'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/zFjEQ4vWuIUAAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
      },
      className: 'finance',
    },
    {
      field: intl.formatMessage({ id: 'home.case2.title' }),
      scene: intl.formatMessage({ id: 'home.case2.desc' }),
      illustrate: intl.formatMessage({ id: 'home.case2.illustrate' }),
      style: {
        top: '61px',
        right: '67px',
        width: '110px',
        height: '110px',
        background:
          'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/MgOtSK07LH8AAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
      },
      className: 'telecommunications',
    },
    {
      field: intl.formatMessage({ id: 'home.case3.title' }),
      scene: intl.formatMessage({ id: 'home.case3.desc' }),
      illustrate: intl.formatMessage({ id: 'home.case3.illustrate' }),
      style: {
        top: '239px',
        left: '223px',
        width: '110px',
        height: '110px',
        background:
          'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/Z7ucTICP7P8AAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
      },
      className: 'industry',
    },
    {
      field: intl.formatMessage({ id: 'home.case4.title' }),
      scene: intl.formatMessage({ id: 'home.case4.desc' }),
      illustrate: intl.formatMessage({ id: 'home.case4.illustrate' }),
      style: {
        width: '134px',
        height: '135px',
        top: '234px',
        right: 0,
        background:
          'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/lvB2T5JgB1oAAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
      },
      className: 'internet',
    },

    {
      field: intl.formatMessage({ id: 'home.case5.title' }),
      scene: intl.formatMessage({ id: 'home.case5.desc' }),
      illustrate: intl.formatMessage({ id: 'home.case5.illustrate' }),
      style: {
        width: '110px',
        height: '110px',
        top: '468px',
        left: '312px',
        background:
          'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/L5faRonbxpcAAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
      },
      className: 'Universal',
    },
    {
      field: intl.formatMessage({ id: 'home.case6.title' }),
      scene: '',
      illustrate: intl.formatMessage({ id: 'home.case6.illustrate' }),
      style: {
        width: '110px',
        height: '110px',
        top: '370px',
        right: '214px',
        background:
          'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/ziLVQ6zbV1IAAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
      },
      className: 'Artificial',
    },
  ];

  const placeholders = ['placeholder1', 'placeholder2', 'placeholder3'];

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
    <div className={styles.appWrapper}>
      <FadeInSection threshold={0.5}>
        <div className={styles.appTitle}>
          {intl.formatMessage({ id: 'home.case.title' })}
        </div>
      </FadeInSection>

      <div className={styles.appContent} ref={ref}>
        {SCENE_LIST.map((item) => (
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
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className={styles.tag}>{item.field}</div>
                </motion.div>
              </div>
            </Popover>
          </motion.div>
        ))}

        {placeholders.map((item) => (
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
