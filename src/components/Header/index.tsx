import type { MenuItem } from '@/interface';
import { CloseOutlined, RightOutlined, UpOutlined } from '@ant-design/icons';
import { DocSearch } from '@docsearch/react';
import { Drawer, Menu, Popover, Space } from 'antd';
import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { getLocale, history, useIntl, useLocation } from 'umi';

import '@docsearch/css';
import AnnouncementBanner from '../AnnouncementBanner';
import GithubButton from '../githubButton';
import styles from './index.less';
import {
  DEFAULT_LOCAL,
  HOST_EN,
  HOST_ZH,
  searchParamsEn,
  searchParamsZh,
} from '@/constant';
import { getSearch } from '@/util';

export const Header = ({ isStick }: { isStick?: boolean }) => {
  const intl = useIntl();
  const { pathname, search } = useLocation();
  const lang = getSearch(search)?.lang || getLocale() || DEFAULT_LOCAL;
  const isZH = lang === 'zh-CN';
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
    return [key || 'home'];
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
      { path: '/learn', key: 'learn' },
      { path: '/analytics', key: 'analytics' },
    ];
    return productKeys.find((item) => item.path === key)?.key;
  };
  const menuKeyIncludes = (key: string, value: any[]) => {
    return value.find((item) => item.path === key)?.key;
  };
  const pcAssetsMenu: MenuItem = {
    label: (
      <Popover
        placement="bottom"
        overlayClassName={styles?.popoverMin}
        content={
          <div className={styles.popoverContent}>
            <div>
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  history.push('/blog');
                }}
              >
                {intl.formatMessage({ id: 'header.blog' })}
              </div>
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  window.open(
                    isZH
                      ? 'https://space.bilibili.com/1196053065/'
                      : 'https://space.bilibili.com/1196053065/',
                  );
                }}
              >
                {isZH ? '视频' : 'Video'}
              </div>
            </div>
            <div></div>
          </div>
        }
      >
        <a rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.assets' })}
        </a>
      </Popover>
    ),
    key: menuKeyIncludes(pathname, [
      {
        path: '/blog',
        key: 'blog',
      },
      {
        path: '/video',
        key: 'video',
      },
    ]),
  };
  const mobileAssetsMenu: MenuItem = {
    label: intl.formatMessage({ id: 'header.assets' }),
    key: 'assets',
    children: [
      {
        label: (
          <>
            <a href={'/blog'} rel="noopener noreferrer">
              {intl.formatMessage({ id: 'header.blog' })}
            </a>
          </>
        ),
        key: 'blog',
      },
      {
        label: (
          <>
            <a
              href={
                isZH
                  ? 'https://space.bilibili.com/1196053065/'
                  : 'https://space.bilibili.com/1196053065/'
              }
              rel="noopener noreferrer"
            >
              {isZH ? '视频' : 'Video'}
            </a>
          </>
        ),
        key: 'video',
      },
    ],
  };
  const pcCommunityMenu: MenuItem = {
    label: (
      <Popover
        placement="bottom"
        overlayClassName={styles?.popoverMin}
        content={
          <div className={styles.popoverContent}>
            <div>
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  window.open('https://github.com/TuGraph-family');
                }}
              >
                Github
              </div>
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  window.open('https://gitee.com/tugraph');
                }}
              >
                Gitee
              </div>
            </div>
            <div></div>
          </div>
        }
      >
        <a rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.community' })}
        </a>
      </Popover>
    ),
    key: 'community',
  };
  const mobileCommunityMenu: MenuItem = {
    label: intl.formatMessage({ id: 'header.community' }),
    key: 'community',
    children: [
      {
        label: (
          <>
            <a
              href={'https://github.com/TuGraph-family'}
              rel="noopener noreferrer"
            >
              Github
            </a>
          </>
        ),
        key: 'github',
      },
      {
        label: (
          <>
            <a href={'https://gitee.com/tugraph'} rel="noopener noreferrer">
              Gitee
            </a>
          </>
        ),
        key: 'gitee',
      },
    ],
  };
  const pcDocsMenu: MenuItem = {
    label: (
      <Popover
        placement="bottom"
        overlayClassName={styles?.popoverMin}
        content={
          <div className={styles.popoverContent}>
            <div>
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  window.open(
                    isZH
                      ? 'https://tugraph-db.readthedocs.io/zh_CN/latest/1.guide.html'
                      : 'https://tugraph-db.readthedocs.io/en/latest/1.guide.html',
                  );
                }}
              >
                {intl.formatMessage({ id: 'header.product.desc' })}
              </div>
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  window.open(
                    isZH
                      ? 'https://tugraph-analytics.readthedocs.io/en/latest/docs-cn/introduction/'
                      : 'https://tugraph-analytics.readthedocs.io/en/latest/',
                  );
                }}
              >
                {intl.formatMessage({ id: 'header.product.desc2' })}
              </div>
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  window.open(
                    isZH
                      ? 'https://tugraph-db.readthedocs.io/zh_CN/latest/5.developer-manual/6.interface/5.learn/index.html'
                      : 'https://tugraph-db.readthedocs.io/en/latest/5.developer-manual/6.interface/5.learn/index.html',
                  );
                }}
              >
                {intl.formatMessage({ id: 'header.product.desc3' })}
              </div>
            </div>
            <div></div>
          </div>
        }
      >
        <a rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.doc' })}
        </a>
      </Popover>
    ),
    key: 'docs',
  };
  const mobileDocsMenu: MenuItem = {
    label: intl.formatMessage({ id: 'header.doc' }),
    key: 'docs',
    children: [
      {
        label: (
          <>
            <a
              href={
                isZH
                  ? 'https://tugraph-db.readthedocs.io/zh_CN/latest/1.guide.html'
                  : 'https://tugraph-db.readthedocs.io/en/latest/1.guide.html'
              }
              rel="noopener noreferrer"
            >
              {intl.formatMessage({ id: 'header.product.desc' })}
            </a>
          </>
        ),
        key: 'product',
      },
      {
        label: (
          <>
            <a
              href={
                isZH
                  ? 'https://tugraph-analytics.readthedocs.io/en/latest/docs-cn/introduction/'
                  : 'https://tugraph-analytics.readthedocs.io/en/latest/'
              }
              rel="noopener noreferrer"
            >
              {intl.formatMessage({ id: 'header.product.desc2' })}
            </a>
          </>
        ),
        key: 'productAnalytics',
      },
      {
        label: (
          <a
            href={
              isZH
                ? 'https://tugraph-db.readthedocs.io/zh_CN/latest/5.developer-manual/6.interface/5.learn/index.html'
                : 'https://tugraph-db.readthedocs.io/en/latest/5.developer-manual/6.interface/5.learn/index.html'
            }
            rel="noopener noreferrer"
          >
            {intl.formatMessage({ id: 'header.product.desc3' })}
          </a>
        ),
        key: 'productLearn',
      },
    ],
  };
  const pcProductMenu: MenuItem = {
    label: (
      <Popover
        placement="bottom"
        overlayClassName={styles?.popoverMin}
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
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  history.push('analytics');
                }}
              >
                {intl.formatMessage({ id: 'header.product.desc2' })}
              </div>
              <div
                className={styles.popoverContainer}
                onClick={() => {
                  history.push('learn');
                }}
              >
                {intl.formatMessage({ id: 'header.product.desc3' })}
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
    key: menuKey(pathname),
    children: [
      {
        label: <div>{intl.formatMessage({ id: 'header.product.title' })}</div>,
        key: 'productTitle',
      },
      {
        label: (
          <>
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
            <a href="/analytics" rel="noopener noreferrer">
              {intl.formatMessage({ id: 'header.product.desc2' })}
            </a>
          </>
        ),
        key: 'analytics',
      },
      {
        label: (
          <a href="/learn" rel="noopener noreferrer">
            {intl.formatMessage({ id: 'header.product.desc3' })}
          </a>
        ),
        key: 'learn',
      },
      {
        label: <div>{intl.formatMessage({ id: 'header.product.title1' })}</div>,
        key: 'productTitle1',
      },
      {
        label: (
          <>
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
      <AnnouncementBanner />
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
      key: 'home',
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
    { ...(isWide ? pcDocsMenu : mobileDocsMenu) },
    { ...(isWide ? pcAssetsMenu : mobileAssetsMenu) },
    { ...(isWide ? pcCommunityMenu : mobileCommunityMenu) },
    {
      label: (
        <a href="/download" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.download' })}
        </a>
      ),
      key: 'download',
    },
    {
      label: lang === 'zh-CN' ? '中' : 'EN',
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
            <a href={`${HOST_ZH}${history?.location?.pathname}`}>简体中文</a>
          ),
          key: 'Chinese',
        },
        {
          label: (
            <a href={`${HOST_EN}${history?.location?.pathname}`}>English</a>
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
              }
              return <RightOutlined style={{ fontSize: '3.7vw' }} />;
            }}
          />
        </div>
      </Drawer>
    </>
  );
  useEffect(() => {
    if (pathname && document) {
      document.documentElement.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <>
      {isWide ? <GithubButton offset={208} /> : null}
      <div className={cx(styles.header, isStick ? styles.sticky : null)}>
        {isWide ? pc : mobile}
      </div>
    </>
  );
};
