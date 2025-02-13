import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';
import { IntlShape } from 'react-intl';
import { motion } from 'framer-motion';
import { getDemos } from '@/pages/new-pages/Case/components/constants/data';
import { useLocation } from 'umi';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';

const Banner = ({ intl }: { intl: IntlShape }) => {
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;

  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/fcQMSKdYwlkAAAAAAAAAAAAADh8WAQFr/original)';

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
          <FadeInSection transition={{ duration: 1, delay: 0.2 }}>
            <span className={styles.descriptionText}>
              {intl.formatMessage({ id: 'home.case.desc1' })}
            </span>
          </FadeInSection>
        </div>
        <img
          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/tcH7Tqfcq10AAAAAAAAAAAAADh8WAQFr/original"
          alt=""
          className={styles.icon}
        />
        <div
          className={styles.featureSection}
          style={lang === 'en-US' ? { height: 200 } : {}}
        >
          {getDemos(intl)?.map((item) => (
            <FadeInSection
              key={item.type}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className={styles.featureSectionItem}>
                <img src={item.bgUrl} alt="" className={styles.fieldImg} />
                <div className={styles.fieldName}>{item.type}</div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
