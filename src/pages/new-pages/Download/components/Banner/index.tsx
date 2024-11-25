import cx from 'classnames';

import styles from './index.less';
import { IntlShape } from 'react-intl';

const Banner = ({ intl }: { intl: IntlShape }) => {
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/Si-AR7mhUpUAAAAAAAAAAAAADh8WAQFr/fmt.webp)';

  return (
    <div className={styles.bannerBox}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: background,
          height: '280px',
        }}
      >
        <div className={styles.databaseTitleSection}>
          <div className={styles.titleText}>
            {intl.formatMessage({ id: 'download.title' })}{' '}
          </div>
          <div className={styles.descriptionText}>
            {intl.formatMessage({ id: 'download.desc' })}
          </div>
        </div>

        <img
          src={
            'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/LS42Qq0IvjMAAAAAAAAAAAAADh8WAQFr/fmt.avif'
          }
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Banner;
