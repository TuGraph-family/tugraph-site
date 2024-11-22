import { motion } from 'framer-motion';

import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';
import MainButton from '@/components/MainButton';
import { IntlShape } from 'react-intl';

const Banner = ({ intl }: { intl: IntlShape }) => {
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/An4uTrsTiyUAAAAAAAAAAAAADh8WAQFr/original)';

  const CARD_LIST = [
    {
      title: '基准',
      desc: '被 IDC MarketScape评为领导者',
      bgImg:
        'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/owr4Q4fmE6YAAAAAAAAAAAAADh8WAQFr/original',
    },

    {
      title: '消息',
      desc: '领导 LDBC Finbench 项目',
      bgImg:
        'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/dR8USJrp5vMAAAAAAAAAAAAADh8WAQFr/original',
    },
    {
      title: '消息',
      desc: '免费试用阿里云上的 TuGraph',
      bgImg:
        'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/mvIOTaTxY9QAAAAAAAAAAAAADh8WAQFr/original',
    },
  ];

  return (
    <div
      id="banner"
      className={styles.banner}
      style={{
        backgroundImage: background,
        height: '618px',
        backgroundColor: 'rgba(22,80,255,0.05)',
      }}
    >
      <FadeInSection>
        <div className={styles.databaseTitleSection}>
          <span className={styles.titleText}>
            {intl.formatMessage({ id: 'home.banner.slogan' })}
          </span>
          <span className={styles.descriptionText}>{}</span>
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
      <div className={styles.featureSection}>
        {CARD_LIST.map((item, idx) => (
          <FadeInSection key={idx}>
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
    </div>
  );
};

export default Banner;
