import React from 'react';
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
      <Space size={30}>
        <Button type="primary" block className="lightBtn">
          {intl.formatMessage({ id: 'home.banner.useFree' })}
        </Button>
        <Button type="primary" block className="darkBtn">
          {intl.formatMessage({ id: 'home.banner.quickStart' })}
        </Button>
      </Space>
    </div>
  );
};
