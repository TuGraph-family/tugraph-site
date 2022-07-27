import React from 'react';
import { Space, Button } from 'antd';
import { Header } from '../Header';

import styles from './index.less';

export const Banner = ({
  slogan,
  bgUrl,
  subTitle,
  buttons = [],
  activeKey = '',
}: {
  slogan: string;
  bgUrl: string;
  subTitle?: string;
  activeKey?: string;
  buttons?: string[];
}) => {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${bgUrl})` }}>
      <Header activeKey={activeKey} />
      <div className={styles.slogan}>{slogan}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      <Space className={styles.btnGroup} size={30}>
        {buttons?.[0] && (
          <Button type="primary" block className="lightBtn">
            {buttons?.[0]}
          </Button>
        )}
        {buttons?.[1] && (
          <Button type="primary" block className="darkBtn">
            {buttons?.[1]}
          </Button>
        )}
      </Space>
    </div>
  );
};
