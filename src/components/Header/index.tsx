import React from 'react';
import { useIntl } from 'umi';
import { Space, Menu } from 'antd';
import type { MenuProps } from 'antd';

import styles from './index.less';

export const Header = () => {
  const intl = useIntl();

  const items: MenuProps['items'] = [
    {
      label: (
        <a href="" target="_blank" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'home.header.product' })}
        </a>
      ),
      key: 'product',
    },
    {
      label: (
        <a href="" target="_blank" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'home.header.demo' })}
        </a>
      ),
      key: 'demo',
    },
    {
      label: (
        <a href="" target="_blank" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'home.header.doc' })}
        </a>
      ),
      key: 'doc',
    },
    {
      label: (
        <a href="" target="_blank" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'home.header.blog' })}
        </a>
      ),
      key: 'blog',
    },
    {
      label: (
        <a href="" target="_blank" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'home.header.community' })}
        </a>
      ),
      key: 'community',
    },
    {
      label: (
        <a href="" target="_blank" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'home.header.download' })}
        </a>
      ),
      key: 'download',
    },
  ];

  return (
    <div className={styles.header}>
      <Space size={30}>
        <img src="https://gw.alipayobjects.com/zos/bmw-prod/5c0610ba-4c85-455b-8833-53dcea242430.svg" />
        <Menu mode="horizontal" items={items} />
      </Space>
    </div>
  );
};
