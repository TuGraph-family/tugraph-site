import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';
import { IntlShape } from 'react-intl';
import { getDemos } from '@/data/demos';
import { motion } from 'framer-motion';

const Banner = ({ intl }: { intl: IntlShape }) => {
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/An4uTrsTiyUAAAAAAAAAAAAADh8WAQFr/original)';

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: background,
        height: '561px',
      }}
    >
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
      <div className={styles.featureSection}>
        {getDemos(intl)?.map((item, key) => (
          <FadeInSection key={key}>
            <motion.div whileHover={{ y: -10 }}>
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
  );
};

export default Banner;
