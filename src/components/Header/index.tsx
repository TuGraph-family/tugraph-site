import React, { useState } from 'react';
import { getLocale, history, useIntl, useLocation } from 'umi';
import { Menu, Drawer, Collapse, Space } from 'antd';
import cx from 'classnames';
import { useMedia } from 'react-use';
import type { MenuItem } from '@/interface';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import styles from './index.less';

export const Header = ({ isStick }: { isStick?: boolean }) => {
  const intl = useIntl();
  const { pathname } = useLocation();
  const lang = getLocale();
  const isWide = useMedia('(min-width: 767.99px)', true);
  const [popupMenuVisible, setPopupMenuVisible] = useState(false);

  const onToggleLanguage = () => {
    if (lang === 'en-US') {
      window.location.href = `${history?.location?.pathname}?lang=zh`;
    } else {
      window.location.href = `${history?.location?.pathname}?lang=en`;
    }
  };

  const onTogglePopupMenuVisible = () => {
    setPopupMenuVisible(!popupMenuVisible);
  };

  const getActiveKey = () => {
    const key = pathname.replace('/', '');
    return [key];
  };

  const menuIcon = !isWide ? (
    <Space size={24}>
      <img
        src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*0Q-HT4iXkv4AAAAAAAAAAAAADgOBAQ/original"
        className={styles.languageIcon}
        onClick={onToggleLanguage}
      />
      <MenuOutlined
        className={styles.menuIcon}
        onClick={onTogglePopupMenuVisible}
      />
    </Space>
  ) : null;

  const menuItems: MenuItem[] = [
    {
      label: (
        <a href="/" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.home' })}
        </a>
      ),
      key: '/',
    },
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
        <a href="/case" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.case' })}
        </a>
      ),
      key: 'case',
    },
    {
      label: (
        <a href="/ecosystem" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.ecosystem' })}
        </a>
      ),
      key: 'ecosystem',
    },
    {
      label: intl.formatMessage({ id: 'header.assets' }),
      key: 'assets',
      children: [
        {
          label: <a href="/doc">{intl.formatMessage({ id: 'header.doc' })}</a>,
          key: 'doc',
        },
        {
          label: (
            <a href="/blog">{intl.formatMessage({ id: 'header.blog' })}</a>
          ),
          key: 'blog',
        },
        {
          label: (
            <a
              href="https://space.bilibili.com/1196053065/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          ),
          key: 'demo',
        },
      ],
    },
    {
      label: intl.formatMessage({ id: 'header.community' }),
      key: 'community',
      children: [
        {
          label: (
            <a
              href="https://github.com/TuGraph-db"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          ),
          key: 'GitHub',
        },
        {
          label: (
            <a
              href="https://gitee.com/tugraph"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gitee
            </a>
          ),
          key: 'Gitee',
        },
      ],
    },
    {
      label: (
        <a href="/download" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.download' })}
        </a>
      ),
      key: 'download',
    },
    {
      label: lang === 'zh-CN' ? '简体中文' : 'ENGLISH',
      key: 'language',
      icon: (
        <img
          src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*0Q-HT4iXkv4AAAAAAAAAAAAADgOBAQ/original"
          className={styles.languageIcon}
        />
      ),
      children: [
        {
          label: (
            <a href={`${history?.location?.pathname}?lang=zh`}>简体中文</a>
          ),
          key: 'Chinese',
        },
        {
          label: <a href={`${history?.location?.pathname}?lang=en`}>English</a>,
          key: 'English',
        },
      ],
    },
  ];

  const pc = (
    <>
      <a href="/" rel="noopener noreferrer">
        <img
          className={styles.log}
          src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*AbamQ5lxv0IAAAAAAAAAAAAADgOBAQ/original"
        />
      </a>

      <Menu
        className={styles.menu}
        defaultSelectedKeys={['assets']}
        selectedKeys={getActiveKey()}
        mode="horizontal"
        triggerSubMenuAction={'click'}
        items={menuItems}
      />
    </>
  );

  const mobile = (
    <>
      <a href="/" rel="noopener noreferrer">
        <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*AbamQ5lxv0IAAAAAAAAAAAAADgOBAQ/original" />
      </a>
      {menuIcon}
      <Drawer
        width={'100%'}
        headerStyle={{
          background: 'rgba(0, 0, 0, 0)',
          color: 'rgba(0,0,0,0.65)',
          border: 'none',
        }}
        style={{ overflowX: 'hidden' }}
        title={
          <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*AbamQ5lxv0IAAAAAAAAAAAAADgOBAQ/original" />
        }
        placement="right"
        closable={false}
        extra={<CloseOutlined onClick={() => setPopupMenuVisible(false)} />}
        open={popupMenuVisible}
      >
        <div className={styles.MenuList}>
          <Menu
            mode="inline"
            style={{ width: 256 }}
            items={menuItems.filter((item) => item.key !== 'language')}
          />
        </div>
      </Drawer>
    </>
  );

  return (
    <div className={cx(styles.header, isStick ? styles.sticky : null)}>
      {isWide ? pc : mobile}
    </div>
  );
};
