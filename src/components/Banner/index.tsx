import { useIntl } from 'umi';
import { Space, Button } from 'antd';
import styles from './index.less';

export const Banner = () => {
  const intl = useIntl();

  return (
    <div className={styles.banner}>
      <div className={styles.slogan}>
        {intl.formatMessage({ id: 'home.banner.slogan' })}
      </div>
      <Space size={30} className={styles.buttons}>
        <Button type="primary" block className={styles.useFree}>
          {intl.formatMessage({ id: 'home.banner.useFree' })}
        </Button>
        <Button type="primary" block className={styles.quickStart}>
          {intl.formatMessage({ id: 'home.banner.quickStart' })}
        </Button>
      </Space>
    </div>
  );
};
