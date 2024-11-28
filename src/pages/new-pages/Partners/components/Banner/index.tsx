import styles from './index.less';
import { IntlShape } from 'react-intl';
import FadeInSection from '@/components/FadeInSection';
import { getPartner } from '@/data/get_partner';
import MainButton from '@/components/MainButton';

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

          <FadeInSection>
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
      <FadeInSection>
        <div className={styles.bannerFooter}>
          {getPartner(intl).map((item, key) => {
            return (
              <div className={styles.typeItem} key={key}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.description}>{item.desc}</div>
              </div>
            );
          })}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Banner;
