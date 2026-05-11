import styles from './index.less';
import { IntlShape } from 'react-intl';
import FadeInSection from '@/components/FadeInSection';
import { ArrowRightOutlined } from '@ant-design/icons';
import MainButton from '@/components/MainButton';
import CircleAnimation from '@/pages/Partners/components/CircleAnimation';

const Banner = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.databaseTitleSection}>
        <FadeInSection>
          <div className={styles.titleText}>
            {intl.formatMessage({ id: 'ecosystem.banner.slogan' })}{' '}
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className={styles.descriptionText}>
            {intl.formatMessage({ id: 'ecosystem.banner.description' })}
          </div>
        </FadeInSection>

        <FadeInSection transition={{ duration: 1, delay: 0.2 }}>
          <div className={styles.buttonContainer}>
            <MainButton
              type="real"
              isAnimation={true}
              btnText={intl.formatMessage({ id: 'footer.contact' })}
              affterIcon={<ArrowRightOutlined />}
            />
          </div>
        </FadeInSection>
      </div>

      <CircleAnimation />
    </div>
  );
};

export default Banner;
