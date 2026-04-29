import styles from './index.less';
import { IntlShape } from 'react-intl';

const Banner = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.titleText}>
        {intl.formatMessage({ id: 'download.title' })}{' '}
      </h1>
      <p className={styles.descriptionText}>
        {intl.formatMessage({ id: 'download.desc' })}
      </p>
    </div>
  );
};

export default Banner;
