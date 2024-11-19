import type { MenuItem } from '@/interface';
import { CloseOutlined, RightOutlined, UpOutlined } from '@ant-design/icons';
import { DocSearch } from '@docsearch/react';
import { Drawer, Dropdown, Menu, Popover, Space } from 'antd';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { history, useIntl, useLocation } from 'umi';
import { Link } from 'react-router-dom';

import { DEFAULT_LOCAL } from '@/constant';
import { getSearch, goLinkAt, historyPushLinkAt } from '@/util';
import '@docsearch/css';
import AnnouncementBanner from '../AnnouncementBanner';
import GithubButton from '../githubButton';
import styles from './index.less';
import { doc } from 'prettier';

export const NewHeader = ({ isStick }: { isStick?: boolean }) => {
  const intl = useIntl();
  const { pathname, search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;
  const isZH = lang === 'zh-CN';
  const isWide = useMedia('(min-width: 767.99px)', true);
  const [popupMenuVisible, setPopupMenuVisible] = useState(false);
  const [selectMenuItem, setSelectMenuItem] = useState<string>(() => {
    /** 匹配路由，初始化所选择的菜单栏 */
    function captureRouteLevel(url: string, level: number) {
      try {
        const pathname = new URL(url).pathname;
        const segments = pathname.split('/').filter(Boolean);
        if (segments.length >= level) {
          const pathKey = segments[level - 1];
          return ['blog', 'activity', 'video'].includes(pathKey)
            ? 'study'
            : pathKey;
        } else {
          return '';
        }
      } catch (error) {
        console.error('Invalid URL');
        return '';
      }
    }
    return captureRouteLevel(location.href, 2);
  });

  const zhSite = `${window.location.origin}${history?.location?.pathname}?lang=zh-CN`;
  const enSite = `${window.location.origin}${history?.location?.pathname}?lang=en-US`;

  const getCurrentLanguage = () => {
    const segments = pathname.split('/');
    return ['zh', 'en'].find((lang) => segments.includes(lang)) || 'en';
  };

  const getVersionFromUrl = () => {
    const versionRegex = /\/(\d+\.\d+\.\d+)\//;

    // 在路由中搜索版本号
    const match = pathname.match(versionRegex);

    // 如果找到版本号，返回它，否则返回默认版本号 '4-5-0'
    return match ? match[1].replace(/\./g, '-') : '4-5-0';
  };

  const searchInput = () => {
    return (
      <DocSearch
        {...{
          apiKey: '829a7e48ddbd6916e159c003391543a0',
          indexName: 'zhongyunwanio',
          appId: 'DGYVABHR0M',
          searchParameters: {
            facetFilters: [
              `docusaurus_tag:docs-${getVersionFromUrl()}_${getCurrentLanguage()}-current`,
            ],
          },
          transformItems: (items) => {
            return items.map((item) => {
              // 在这里修改 URL。例如，将路径中的 `/docs/` 替换为 `/`
              return {
                ...item,
                url: '/docs' + item?.url?.split('/tugraph-db')[1] ?? '',
              };
            });
          },
        }}
      />
    );
  };

  useEffect(() => {
    if (pathname && document) {
      document.documentElement.scrollTop = 0;
    }
  }, [pathname]);

  const rederProductSubMenu = () => {
    const list = [
      {
        title: intl.formatMessage({ id: 'header.product.title' }),
        subMenu: [
          {
            label: intl.formatMessage({ id: 'header.product.desc1' }),
            desc: intl.formatMessage({ id: 'header.product.desc1.1' }),
          },
          {
            label: intl.formatMessage({ id: 'header.product.desc2' }),
            desc: intl.formatMessage({ id: 'header.product.desc2.1' }),
          },
          {
            label: intl.formatMessage({ id: 'header.product.desc3' }),
            desc: intl.formatMessage({ id: 'header.product.desc3.1' }),
          },
        ],
      },
      {
        title: intl.formatMessage({ id: 'header.product.title1' }),
        subMenu: [
          {
            label: intl.formatMessage({ id: 'header.product.desc4' }),
            desc: intl.formatMessage({ id: 'header.product.desc4.1' }),
          },
          {
            label: intl.formatMessage({ id: 'header.product.desc5' }),
            desc: intl.formatMessage({ id: 'header.product.desc5.1' }),
          },
        ],
      },
    ];

    return (
      <div className={styles.productSubMenu}>
        {list?.map((item) => {
          return (
            <div className={styles.productSubMenuVersion} key={item.title}>
              <div className={styles.productSubMenuTitle}>{item.title}</div>
              {item.subMenu?.map((subItem) => {
                return (
                  <div className={styles.productSubMenuItem}>
                    <div className={styles.productSubMenuItemLabel}>
                      {subItem.label}
                    </div>
                    <div className={styles.productSubMenuItemDesc}>
                      {subItem.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  const renderCommunitySubMenu = () => {
    const list = [
      {
        title: intl.formatMessage({ id: 'header.learning.title' }),
        subMenu: [
          {
            label: intl.formatMessage({ id: 'header.learning.cooperate' }),
          },
          {
            label: intl.formatMessage({ id: 'header.learning.course' }),
          },
          {
            label: intl.formatMessage({ id: 'header.learning.training' }),
          },
        ],
      },
      {
        title: intl.formatMessage({ id: 'header.community.title' }),
        subMenu: [
          {
            label: intl.formatMessage({ id: 'header.community.blog' }),
            path: '/blog/list',
          },
          {
            label: intl.formatMessage({ id: 'header.community.video' }),
          },
          {
            label: intl.formatMessage({ id: 'header.community.forum' }),
          },
          {
            label: intl.formatMessage({ id: 'header.community.activity' }),
            path: '/activity/list',
          },
        ],
      },
      {
        title: intl.formatMessage({ id: 'header.assets.title' }),
        subMenu: [
          {
            label: intl.formatMessage({ id: 'header.assets.github' }),
          },
          {
            label: intl.formatMessage({ id: 'header.assets.gitee' }),
          },
          {
            label: intl.formatMessage({ id: 'header.assets.download' }),
            path: '/download',
          },
          {
            label: intl.formatMessage({ id: 'header.assets.report' }),
          },
        ],
      },
    ];
    return (
      <div className={styles.communitySubMenu}>
        <div className={styles.subMenuBanner}>
          <div className={styles.bannerTitle}>OSGraph</div>
          <div className={styles.bannerDesc}>
            {intl.formatMessage({ id: 'header.osGraph.desc' })}
          </div>
        </div>

        {list.map((item) => {
          return (
            <div className={styles.subMenuCol} key={item.title}>
              <div className={styles.subMenuTitle}>{item.title}</div>
              {item.subMenu.map((subItem) => {
                return (
                  <div
                    key={subItem.label}
                    onClick={() => {
                      if (subItem?.path) {
                        history.push(historyPushLinkAt(subItem?.path));
                      }
                    }}
                  >
                    {subItem.label}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  const handleLangClick = () => {
    window.location.href = lang === 'zh-CN' ? enSite : zhSite;
  };

  const onHover = (id: string, type: 'move' | 'leave') => {
    const subMenuDom = document.getElementById(id);
    const mainWrapper = document.getElementById('mainWrapper');

    if (subMenuDom && mainWrapper) {
      mainWrapper.style.transition = 'all 0.4s ease';

      if (type === 'move') {
        subMenuDom.style.opacity = '1';
        subMenuDom.style.height = '321px';
        mainWrapper.style.marginTop = '-387px';
      } else {
        subMenuDom.style.opacity = '0';
        subMenuDom.style.height = '0';
        mainWrapper.style.marginTop = '-66px';
      }
    }
  };

  const renderMenu = () => {
    const menuList = [
      {
        key: 'product',
        label: intl.formatMessage({ id: 'header.product' }),
        path: '/product',
        onMouseMove: () => onHover('subMenuProduct', 'move'),
        onMouseLeave: () => onHover('subMenuProduct', 'leave'),
      },
      {
        key: 'case',
        label: intl.formatMessage({ id: 'header.case' }),
        path: '/case',
      },
      {
        key: 'partners',
        label: intl.formatMessage({ id: 'header.ecosystem' }),
        path: '/partners',
      },
      {
        key: 'doc',
        label: intl.formatMessage({ id: 'header.doc' }),
        path: '/doc',
      },

      {
        key: 'community',
        label: intl.formatMessage({ id: 'header.community' }),
        onMouseMove: () => onHover('subMenuCommunity', 'move'),
        onMouseLeave: () => onHover('subMenuCommunity', 'leave'),
      },
    ];

    return (
      <div className={styles.menuList}>
        {menuList.map((item) => {
          const { path, label, key, ...props } = item || {};
          return (
            <div
              key={key}
              className={`${styles.menuItem}${
                key === selectMenuItem ? ' ' + styles.menuItemSelect : ''
              }`}
              onClick={() => {
                if (path) {
                  setSelectMenuItem(item?.label);
                  history.push(historyPushLinkAt(path));
                }
              }}
              {...props}
            >
              <div className={styles.mainMenu}>{label}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.header} id="Head">
      <div className={styles.headerBox}>
        <div className={styles.headerLeft}>
          <a href={goLinkAt('/')} rel="noopener noreferrer">
            <img
              className={styles.log}
              src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/V8XITL_lpf4AAAAAAAAAAAAADh8WAQFr/original"
            />
          </a>
        </div>
        <div className={styles.headerRight}>
          {searchInput()}
          <div className={styles.lang} onClick={handleLangClick}>
            <img
              src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*GN_WSabhJdwAAAAAAAAAAAAADgOBAQ/original"
              className={styles.languageIcon}
            />
            <div className={styles.languageText}>
              {lang === 'zh-CN' ? '中' : 'EN'}
            </div>
          </div>
          <div className={styles.loginBtn}>
            {lang === 'zh-CN' ? '登录' : 'login'}
          </div>
        </div>
      </div>
      {renderMenu()}
      <div
        className={styles.subMenuProduct}
        id="subMenuProduct"
        onMouseMove={() => onHover('subMenuProduct', 'move')}
        onMouseLeave={() => onHover('subMenuProduct', 'leave')}
      >
        {rederProductSubMenu()}
      </div>
      <div
        className={styles.subMenuCommunity}
        id="subMenuCommunity"
        onMouseMove={() => onHover('subMenuCommunity', 'move')}
        onMouseLeave={() => onHover('subMenuCommunity', 'leave')}
      >
        {renderCommunitySubMenu()}
      </div>
    </div>
  );
};
