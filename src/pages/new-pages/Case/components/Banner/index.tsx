import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';
import { IntlShape } from 'react-intl';
import { getDemos } from '@/data/demos';
import { motion } from 'framer-motion';

const Banner = ({ intl }: { intl: IntlShape }) => {
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/uxB_TauEWMkAAAAAAAAAAAAADh8WAQFr/original)';

  return (
    <div
      className={styles.bannerBox}
      style={{
        backgroundImage: background,
        height: '460px',
      }}
    >
      <div className={styles.banner}>
        <div className={styles.databaseTitleSection}>
          <FadeInSection>
            <span className={styles.titleText}>
              {intl.formatMessage({ id: 'home.case.desc0' })}
            </span>
          </FadeInSection>
          <FadeInSection>
            <span className={styles.descriptionText}>
              {intl.formatMessage({ id: 'home.case.desc1' })}
            </span>
          </FadeInSection>
        </div>
        <img
          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/JOVtTqY79zMAAAAAAAAAAAAADh8WAQFr/original"
          alt=""
          className={styles.icon}
        />
        <div className={styles.featureSection}>
          {getDemos(intl)?.map((item, key) => (
            <FadeInSection key={key}>
              <motion.div whileHover={{ y: -12 }}>
                <div className={styles.featureSectionItem}>
                  <img
                    src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
                    alt=""
                    className={styles.fieldImg}
                  />
                  <div className={styles.fieldName}>{item.type}</div>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
