import { Button } from 'antd';
import cx from 'classnames';
import { ReactNode } from 'react';
import { useLocation } from 'umi';
import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';
import { IntlShape } from 'react-intl';
import FadeInSection from '@/components/FadeInSection';
import { getPartner } from '@/data/get_partner';

const Banner = ({ intl }: { intl: IntlShape }) => {
  const { pathname, search } = useLocation();

  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/An4uTrsTiyUAAAAAAAAAAAAADh8WAQFr/original)';

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: background,
        height: 567,
      }}
    >
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

        <div className={styles.buttonContainer}>
          <Button
            type="primary"
            size="large"
            shape="round"
            className={styles.communityEditionButton}
          >
            <div className={styles.buttonContent}>
              <span className={styles.communityEditionLabel}>联系我们</span>
              <ArrowRightOutlined className={styles.arrowIcon} />
            </div>
          </Button>
        </div>
      </div>

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
    </div>
  );
};

export default Banner;
