import styles from './index.less';
import { IntlShape } from 'react-intl';
import FadeInSection from '@/components/FadeInSection';
import { ArrowRightOutlined } from '@ant-design/icons';
import MainButton from '@/components/MainButton';

const Banner = ({ intl }: { intl: IntlShape }) => {
  return (
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
              type="real"
              isAnimation={true}
              btnText={intl.formatMessage({ id: 'footer.contact' })}
              icon={<ArrowRightOutlined />}
            />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Banner;
