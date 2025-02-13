import styles from './index.less';
import { IntlShape } from 'react-intl';

const Banner = ({ intl }: { intl: IntlShape }) => {
  const background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/jsh9Q6hyQaAAAAAAAAAAAAAADh8WAQFr/original)';

  return (
    <div
      className={styles.bannerBox}
      style={{
        backgroundImage: background,
        height: '280px',
      }}
    >
      <div className={styles.banner}>
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
            'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/D25HS7gj49QAAAAAAAAAAAAADh8WAQFr/original'
          }
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Banner;
