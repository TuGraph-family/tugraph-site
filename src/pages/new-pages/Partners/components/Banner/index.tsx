import styles from './index.less';
import { IntlShape } from 'react-intl';
import FadeInSection from '@/components/FadeInSection';

import MainButton from '@/components/MainButton';
import { getPartner } from '@/pages/new-pages/Partners/constants/data';

const Banner = ({ intl }: { intl: IntlShape }) => {
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/uxB_TauEWMkAAAAAAAAAAAAADh8WAQFr/original)';

  return (
    <div
      className={styles.bannerBox}
      style={{
        backgroundImage: background,
        height: 460,
      }}
    >
      <div className={styles.banner}>
        <div className={styles.databaseTitleSection}>
          <FadeInSection>
            <span className={styles.titleText}>
              {intl.formatMessage({ id: 'ecosystem.banner.slogan' })}{' '}
            </span>
          </FadeInSection>

          <FadeInSection>
            <span className={styles.descriptionText}>
              {intl.formatMessage({ id: 'ecosystem.banner.description' })}
            </span>
          </FadeInSection>

          <FadeInSection transition={{ duration: 1, delay: 0.2 }}>
            <div className={styles.buttonContainer}>
              <MainButton
                style={{ height: 48 }}
                type="connect"
                btnText={intl.formatMessage({ id: 'footer.contact' })}
              />
            </div>
          </FadeInSection>
        </div>

        <img
          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/QOP4ToIvjTkAAAAAAAAAAAAADh8WAQFr/original"
          alt=""
          className={styles.icon}
        />
      </div>

      <div className={styles.bannerFooter}>
        {getPartner(intl).map((item) => {
          return (
            <FadeInSection
              key={item.key}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div
                className={styles.typeItem}
                style={{ backgroundImage: `url(${item.icon})` }}
              >
                <div className={styles.title}>{item.title}</div>
                <div className={styles.description}>{item.desc}</div>
              </div>
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
