import type { MenuItem } from '@/interface';
import { CloseOutlined, RightOutlined, UpOutlined } from '@ant-design/icons';
import { DocSearch } from '@docsearch/react';
import { Drawer, Menu, Popover, Space } from 'antd';
import cx from 'classnames';
import { useState } from 'react';
import { useMedia } from 'react-use';
import { getLocale, history, setLocale, useIntl, useLocation } from 'umi';

import { HOST_EN, HOST_ZH, searchParamsEn, searchParamsZh } from '@/constant';
import '@docsearch/css';
import AnnouncementBanner from '../AnnouncementBanner';
import styles from './index.less';

export const Header = ({ isStick }: { isStick?: boolean }) => {
  const intl = useIntl();
  const { pathname } = useLocation();
  const lang = getLocale();
  const isWide = useMedia('(min-width: 767.99px)', true);
  const [popupMenuVisible, setPopupMenuVisible] = useState(false);
  const onToggleLanguage = () => {
    if (lang === 'en' || lang === 'en-US') {
      window.location.href = `${HOST_ZH}${history?.location?.pathname}`;
    } else {
      window.location.href = `${HOST_EN}${history?.location?.pathname}`;
    }
  };

  const onTogglePopupMenuVisible = () => {
    setPopupMenuVisible(!popupMenuVisible);
  };

  const getActiveKey = () => {
    const key = pathname.replace(/\//g, '');
    return [key];
  };
  const searchInput = () => {
    return (
      <DocSearch
        {...(lang === 'en' || lang === 'en-US'
          ? searchParamsEn
          : searchParamsZh)}
      />
    );
  };
  const menuKey = (key: string) => {
    const productKeys = [
      { path: '/product', key: 'product' },
      { path: '/overview', key: 'overview' },
      { path: '/platform', key: 'platform' },
      { path: '/db', key: 'db' },
    ];
    return productKeys.find((item) => item.path === key)?.key;
  };
  const pcProductMenu: MenuItem = {
    label: (
      <Popover
        placement="bottom"
        content={
          <div className={styles.popoverContent}>
            <div>
              <div className={styles.popoverTitle}>
                {intl.formatMessage({ id: 'header.product.title' })}
              </div>
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  history.push('/product');
                }}
              >
                {intl.formatMessage({ id: 'header.product.desc' })}
              </div>
            </div>
            <div>
              <div className={styles.popoverTitle}>
                {intl.formatMessage({ id: 'header.product.title1' })}
              </div>
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  history.push('/overview');
                }}
              >
                {intl.formatMessage({ id: 'header.product.desc1' })}
              </div>
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  history.push('/platform');
                }}
              >
                {intl.formatMessage({ id: 'platform.title' })}
              </div>
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  history.push('/db');
                }}
              >
                {intl.formatMessage({ id: 'db.title' })}
              </div>
            </div>
          </div>
        }
      >
        <a rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.product' })}
        </a>
      </Popover>
    ),
    key: menuKey(pathname),
  };
  const mobileProductMenu: MenuItem = {
    label: intl.formatMessage({ id: 'header.product' }),
    key: 'produce',
    children: [
      {
        label: (
          <>
            <div>{intl.formatMessage({ id: 'header.product.title' })}</div>
            <a href="/product" rel="noopener noreferrer">
              {intl.formatMessage({ id: 'header.product.desc' })}
            </a>
          </>
        ),
        key: 'product',
      },
      {
        label: (
          <>
            <div>{intl.formatMessage({ id: 'header.product.title1' })}</div>
            <a href="/overview" rel="noopener noreferrer">
              {intl.formatMessage({ id: 'header.product.desc1' })}
            </a>
          </>
        ),
        key: 'overview',
      },
      {
        label: (
          <a href="/platform" rel="noopener noreferrer">
            {intl.formatMessage({ id: 'platform.title' })}
          </a>
        ),
        key: 'platform',
      },
      {
        label: (
          <a href="/db" rel="noopener noreferrer">
            {intl.formatMessage({ id: 'db.title' })}
          </a>
        ),
        key: 'db',
      },
    ],
  };
  const menuIcon = !isWide ? (
    <Space size={12}>
      {searchInput()}
      {lang === 'zh-CN' && <AnnouncementBanner />}
      <img
        src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*GN_WSabhJdwAAAAAAAAAAAAADgOBAQ/original"
        className={styles.languageIcon}
        onClick={onToggleLanguage}
      />
      <img
        src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*d0I2RKJFPd8AAAAAAAAAAAAADgOBAQ/original"
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
      key: '',
    },
    { ...(isWide ? pcProductMenu : mobileProductMenu) },
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
          label: (
            <a
              href={
                lang === 'zh-CN'
                  ? 'https://tugraph-db.readthedocs.io/zh_CN/latest/1.guide.html'
                  : 'https://tugraph-db.readthedocs.io/en/latest/1.guide.html'
              }
              className={styles.menuChildren}
              target="_blank"
            >
              {intl.formatMessage({ id: 'header.doc' })}
            </a>
          ),
          key: 'doc',
        },
        {
          label: (
            <a href="/blog" className={styles.menuChildren}>
              {intl.formatMessage({ id: 'header.blog' })}
            </a>
          ),
          key: 'blog',
        },
        {
          label: (
            <a
              href="https://space.bilibili.com/1196053065/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuChildren}
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
              href="https://github.com/TuGraph-family"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuChildren}
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
              className={styles.menuChildren}
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
          src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*GN_WSabhJdwAAAAAAAAAAAAADgOBAQ/original"
          className={styles.languageIcon}
        />
      ),
      children: [
        {
          label: (
            <a
              onClick={() => {
                setLocale('zh-CN', false);
              }}
            >
              简体中文
            </a>
          ),
          key: 'Chinese',
        },
        {
          label: (
            <a
              onClick={() => {
                setLocale('en-US', false);
              }}
            >
              English
            </a>
          ),
          key: 'English',
        },
      ],
    },
  ];

  const pc = (
    <>
      <div className={styles.searchInputStyle}>
        <a href="/" rel="noopener noreferrer">
          <img
            className={styles.log}
            src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*AbamQ5lxv0IAAAAAAAAAAAAADgOBAQ/original"
          />
        </a>
        {searchInput()}
      </div>
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
        extra={
          <CloseOutlined
            onClick={() => setPopupMenuVisible(false)}
            style={{ fontSize: '3.7vw' }}
          />
        }
        open={popupMenuVisible}
      >
        <div className={styles.MenuList}>
          <Menu
            mode="inline"
            style={{ width: 256 }}
            items={menuItems.filter((item) => item.key !== 'language')}
            defaultSelectedKeys={getActiveKey()}
            expandIcon={({ isOpen }) => {
              if (isOpen) {
                return <UpOutlined style={{ fontSize: '3.7vw' }} />;
              } else {
                return <RightOutlined style={{ fontSize: '3.7vw' }} />;
              }
            }}
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
