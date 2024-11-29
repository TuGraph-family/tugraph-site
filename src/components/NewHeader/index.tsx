import { DocSearch } from '@docsearch/react';
import { useCallback, useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { history, isBrowser, useIntl, useLocation } from 'umi';
import cx from 'classnames';
import { DEFAULT_LOCAL } from '@/constant';
import { getSearch, goLinkAt, historyPushLinkAt } from '@/util';
import '@docsearch/css';

import styles from './index.less';
import { motion } from 'framer-motion';

export const NewHeader = ({
  currentUrl,
}: {
  currentUrl?: { pathname: string; hash: string };
}) => {
  let time: any = null;
  const intl = useIntl();
  const { pathname, search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;
  const isZH = lang === 'zh-CN';
  const isWide = useMedia('(min-width: 767.99px)', true);
  const [subVisibleKey, setSubVisibleKey] = useState('');
  const [show, setShow] = useState(true);
  const [selectMenuItem, setSelectMenuItem] = useState<string>(() => {
    /** 匹配路由，初始化所选择的菜单栏 */
    function captureRouteLevel(url: string, level: number) {
      try {
        const pathname = new URL(url).pathname;
        const segments = pathname.split('/').filter(Boolean);
        if (segments.length >= level) {
          const pathKey = segments[level - 1];
          return ['blog', 'activity', 'download'].includes(pathKey)
            ? 'community'
            : pathKey;
        } else {
          return '';
        }
      } catch (error) {
        console.error('Invalid URL');
        return '';
      }
    }
    return captureRouteLevel(location.href, 1);
  });

  const toggleLanguage = (url: string, language: 'zh' | 'en') => {
    const format = url.replace(/\/(zh|en)\//, () => {
      return `/${language}/`;
    });
    return format;
  };

  const zhSite = currentUrl
    ? `${window.location.origin}${toggleLanguage(
        currentUrl.pathname,
        'zh',
      )}?lang=zh-CN${currentUrl?.hash}`
    : `${window.location.origin}${history?.location?.pathname}?lang=zh-CN`;
  const enSite = currentUrl
    ? `${window.location.origin}${toggleLanguage(
        currentUrl.pathname,
        'en',
      )}?lang=en-US${currentUrl?.hash}`
    : `${window.location.origin}${history?.location?.pathname}?lang=en-US`;

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

  const rederProductAndDocSubMenu = (isDoc = false) => {
    const list: any = [
      {
        title: intl.formatMessage({ id: 'header.product.title' }),
        subMenu: [
          {
            label: intl.formatMessage({ id: 'header.product.desc1' }),
            desc: intl.formatMessage({ id: 'home.version0.desc' }),
            productPath: '/product/db',
            docPath: '/docs/tugraph-db',
          },
          {
            label: intl.formatMessage({ id: 'header.product.desc2' }),
            desc: intl.formatMessage({ id: 'product_analytics.description' }),
            productPath: '/product/analytics',
            docPath: '/docs/tugraph-analytics',
          },
          {
            label: intl.formatMessage({ id: 'header.product.desc3' }),
            desc: intl.formatMessage({ id: 'product_learn.description' }),
            productPath: '/product/learn',
            docPath: '/docs/learn',
          },
        ],
      },
    ];

    if (!isDoc) {
      list.push({
        title: intl.formatMessage({ id: 'header.product.title1' }),
        subMenu: [
          {
            label: intl.formatMessage({ id: 'header.product.desc4' }),
            desc: intl.formatMessage({ id: 'product_enterprise.description' }),
            productPath: '/product/enterprise',
          },
          {
            label: intl.formatMessage({ id: 'header.product.desc5' }),
            desc: intl.formatMessage({ id: 'product_clound.description' }),
            productPath: '/product/clound',
          },
        ],
      });
    }

    return (
      <div className={styles.productSubMenu}>
        {list?.map((item) => {
          return (
            <div className={styles.productSubMenuVersion} key={item.title}>
              <div className={styles.productSubMenuTitle}>{item.title}</div>
              {item.subMenu?.map((subItem) => {
                return (
                  <div
                    className={styles.productSubMenuItem}
                    onClick={() => {
                      history.push(
                        historyPushLinkAt(
                          isDoc ? subItem.docPath : subItem.productPath,
                        ),
                      );
                      setShow(false);
                      time = setTimeout(() => {
                        setShow(true);
                        clearTimeout(time);
                      }, 500);
                    }}
                  >
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
          // {
          //   label: intl.formatMessage({ id: 'header.learning.cooperate' }),
          // },
          {
            label: intl.formatMessage({ id: 'header.learning.course' }),
          },
          // {
          //   label: intl.formatMessage({ id: 'header.learning.training' }),
          // },
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
            url: 'https://space.bilibili.com/1196053065/',
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
            url: 'https://github.com/TuGraph-family',
          },
          {
            label: intl.formatMessage({ id: 'header.assets.gitee' }),
            url: 'https://gitee.com/tugraph',
          },
          {
            label: intl.formatMessage({ id: 'header.assets.download' }),
            path: '/download',
          },
          // {
          //   label: intl.formatMessage({ id: 'header.assets.report' }),
          // },
        ],
      },
    ];
    return (
      <div className={styles.communitySubMenu}>
        <div
          className={styles.subMenuBanner}
          onClick={() => {
            window.open('https://osgraph.com/');
          }}
        >
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
                      if (subItem?.url) {
                        window.open(subItem?.url);
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
    setSubVisibleKey(type === 'move' ? id : '');
  };

  const renderMenu = () => {
    const menuList = [
      {
        key: 'product',
        label: intl.formatMessage({ id: 'header.product' }),
        onMouseMove: () => onHover('subMenuProduct', 'move'),
        onMouseLeave: () => onHover('subMenuProduct', 'leave'),
        path: '/product/db',
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
        key: 'docs',
        label: intl.formatMessage({ id: 'header.doc' }),
        onMouseMove: () => onHover('subMenuDocs', 'move'),
        onMouseLeave: () => onHover('subMenuDocs', 'leave'),
        path: '/docs/tugraph-db/zh/4.5.0/guide',
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
              className={cx(
                styles.menuItem,
                key === selectMenuItem && !subVisibleKey
                  ? styles.menuItemSelect
                  : '',
              )}
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

  const subMenuList = [
    {
      menuKeys: 'subMenuProduct',
      constent: rederProductAndDocSubMenu(),
    },
    {
      menuKeys: 'subMenuCommunity',
      constent: renderCommunitySubMenu(),
    },
    {
      menuKeys: 'subMenuDocs',
      constent: rederProductAndDocSubMenu(true),
    },
  ];

  const renderSubMenu = () => {
    return (
      <>
        {subMenuList.map((item) => (
          <motion.div
            key={item.menuKeys}
            className={styles[item.menuKeys]}
            initial={{ height: 0, zIndex: 500 }}
            animate={{
              height: subVisibleKey === item.menuKeys ? 321 : 0,
              zIndex: 900,
            }}
            whileHover={{ height: show ? 321 : 0, zIndex: 900 }}
            transition={{ duration: 0.5 }}
          >
            {item.constent}
          </motion.div>
        ))}
      </>
    );
  };

  const [isStick, setIsStick] = useState<boolean>(false);
  const handleScroll = useCallback(() => {
    if (!isBrowser()) {
      return;
    }
    if (document.documentElement.scrollTop > 66) {
      setIsStick(true);
    } else {
      setIsStick(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={cx(styles.header, isStick ? styles.sticky : null)}
        id="Head"
      >
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
            {/* {searchInput()} */}
            <div className={styles.lang} onClick={handleLangClick}>
              <img
                src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*GN_WSabhJdwAAAAAAAAAAAAADgOBAQ/original"
                className={styles.languageIcon}
              />
              <div className={styles.languageText}>
                {lang === 'zh-CN' ? '中' : 'EN'}
              </div>
            </div>
            {/* <div className={styles.loginBtn}>
              {lang === 'zh-CN' ? '登录' : 'login'}
            </div> */}
          </div>
        </div>
        {renderMenu()}
      </div>
      {renderSubMenu()}
    </>
  );
};
