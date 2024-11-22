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
      illustrate:
        '在物联网时代，图模型通过构建人、位置、事件、物的关系网络，实现智能交通、道路规划、平安城市、钓鱼网站识别等智慧场景。',
      style: {
        top: '109px',
        left: 0,
        width: '134px',
        height: '135px',
      },
      className: 'government',
    },
    {
      field: intl.formatMessage({ id: 'home.case1.title' }),
      scene: intl.formatMessage({ id: 'home.case1.desc' }),
      illustrate:
        '通过图技术拓展风险特征维度，提升反洗钱、反欺诈、信贷风控等风险防范能力；基于丰富的关联关系和图技术，帮助金融机构精准营销和拓客。',
      style: {
        top: 0,
        left: '372px',
        width: '170px',
        height: '170px',
      },
      className: 'finance',
    },
    {
      field: intl.formatMessage({ id: 'home.case2.title' }),
      scene: intl.formatMessage({ id: 'home.case2.desc' }),
      illustrate:
        '电信运营商可通过图计算技术，在通信网络上进行骚扰电话分析和阻断，除此之外，电信设备也可以使用图模型进行管理。',
      style: {
        top: '61px',
        right: '67px',
        width: '110px',
        height: '110px',
      },
      className: 'telecommunications',
    },
    {
      field: intl.formatMessage({ id: 'home.case3.title' }),
      scene: intl.formatMessage({ id: 'home.case3.desc' }),
      illustrate:
        '图模型强大的表达力擅长展示复杂去且快速变化的事物关系，极其适合在工业领域来管理复杂且快速变化的库存、供应链关系，并推动智能化创新制造。',
      style: {
        top: '239px',
        left: '223px',
        width: '110px',
        height: '110px',
      },
      className: 'industry',
    },
    {
      field: intl.formatMessage({ id: 'home.case4.title' }),
      scene: intl.formatMessage({ id: 'home.case4.desc' }),
      illustrate:
        '通过图基数按技术实现商品智能推荐，在保障用户体验的同时，提升商家营销效果、甄别无效投放，提高会员服务质量，保护商家利益。',
      style: {
        width: '134px',
        height: '135px',
        top: '234px',
        right: 0,
      },
      className: 'internet',
    },

    {
      field: intl.formatMessage({ id: 'home.case5.title' }),
      scene: intl.formatMessage({ id: 'home.case5.desc' }),
      illustrate:
        '利用图模型找到图数据之间的关联关系，更容易分析数据的流转过程，建立数据链路，进而梳理数据依赖，权限并提升质量。',
      style: {
        width: '110px',
        height: '110px',
        top: '468px',
        left: '312px',
      },
      className: 'Universal',
    },
    {
      field: intl.formatMessage({ id: 'home.case6.title' }),
      scene: '',
      illustrate:
        '通过图（Graph）+人工智能（AI）的配套工具和方案，实现GraphRAG、多智能体平台、智能助手等，为企业大模型落地、智能化升级提供新动能。',
      style: {
        width: '110px',
        height: '110px',
        top: '370px',
        right: '214px',
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
