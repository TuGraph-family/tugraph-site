import { motion } from 'framer-motion';

import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';
import MainButton from '@/components/MainButton';
import { IntlShape } from 'react-intl';
import { useLocation } from 'umi';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';

const Banner = ({ intl }: { intl: IntlShape }) => {
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;

  // TODO 接口获取
  const CARD_LIST = [
    {
      title: '基准',
      desc: '被 IDC MarketScape评为领导者',
      bgImg:
        'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/owr4Q4fmE6YAAAAAAAAAAAAADh8WAQFr/original',
      key: 'card_1',
    },

    {
      title: '消息',
      desc: '领导 LDBC Finbench 项目',
      bgImg:
        'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/dR8USJrp5vMAAAAAAAAAAAAADh8WAQFr/original',
      key: 'card_2',
    },
    {
      title: '消息',
      desc: '免费试用阿里云上的 TuGraph',
      bgImg:
        'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/mvIOTaTxY9QAAAAAAAAAAAAADh8WAQFr/original',
      key: 'card_3',
    },
  ];

  return (
    <div
      className={styles.banner}
      style={{
        height: '552px',
      }}
    >
      <FadeInSection>
        <div className={styles.databaseTitleSection}>
          <div className={styles.titleText}>
            {intl.formatMessage({ id: 'home.banner.slogan' })}
          </div>
          <div
            className={styles.descriptionText}
            style={lang === 'zh-CN' ? {} : { width: 833 }}
          >
            {intl.formatMessage({ id: 'home.banner.description' })}
          </div>
          <div className={styles.buttonContainer}>
            <MainButton
              type="experience"
              style={{ height: 48 }}
              btnText={intl.formatMessage({ id: 'home.btn.desc' })}
            />
            <MainButton
              type="consult"
              style={{ height: 48 }}
              btnText={intl.formatMessage({ id: 'home.btn.tryOut' })}
            />
          </div>
        </div>
      </FadeInSection>
      {lang === 'zh-CN' && (
        <div className={styles.featureSection}>
          {CARD_LIST.map((item) => (
            <FadeInSection key={item.key}>
              <motion.div
                className={styles.featureSectionItem}
                whileHover={{
                  top: -20,
                }}
                drag
                dragSnapToOrigin
              >
                <img src={item.bgImg} alt="" className={styles.featureImg} />
                <img
                  src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/E2piRoTZrTUAAAAAAAAAAAAADh8WAQFr/original"
                  alt=""
                  className={styles.featureArrow}
                />
                <div className={styles.featureCategory}>{item.title}</div>
                <div className={styles.featureContent}>{item.desc}</div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      )}
    </div>
  );
};

export default Banner;
