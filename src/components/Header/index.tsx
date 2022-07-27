import React from 'react';
import { useIntl } from 'umi';
import { Space, Menu } from 'antd';
import type { MenuProps } from 'antd';

import styles from './index.less';

export const Header = ({ activeKey }: { activeKey: string }) => {
  const intl = useIntl();

  const items: MenuProps['items'] = [
    {
      label: (
        <a href="/product" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.product' })}
        </a>
      ),
      key: 'product',
    },
    {
      label: (
        <a href="/demo" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.demo' })}
        </a>
      ),
      key: 'demo',
    },
    {
      label: (
        <a href="/doc" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.doc' })}
        </a>
      ),
      key: 'doc',
    },
    {
      label: (
        <a href="blog" target="_blank" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.blog' })}
        </a>
      ),
      key: 'blog',
    },
    {
      label: (
        <a href="" target="_blank" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.community' })}
        </a>
      ),
      key: 'community',
    },
    {
      label: (
        <a href="/download" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.download' })}
        </a>
      ),
      key: 'download',
    },
  ];

  return (
    <div className={styles.header}>
      <Space size={30}>
        <a href="/" rel="noopener noreferrer">
          <img src="https://gw.alipayobjects.com/zos/bmw-prod/5c0610ba-4c85-455b-8833-53dcea242430.svg" />
        </a>

        <Menu activeKey={activeKey} mode="horizontal" items={items} />
      </Space>
    </div>
  );
};
