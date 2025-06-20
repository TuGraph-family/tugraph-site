import { DocSearch } from '@docsearch/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { history, isBrowser, useIntl, useLocation } from 'umi';
import cx from 'classnames';
import { DEFAULT_LOCAL } from '@/constant';
import { getSearch, goLinkAt, historyPushLinkAt } from '@/util';
import '@docsearch/css';
import styles from './index.less';
import { motion } from 'framer-motion';
import langIcon from '@/assets/icon/lang.svg';
import AdBox from '@/components/AdBox';

export const NewHeader = ({
  currentUrl,
  isAd,
}: {
  currentUrl?: { pathname: string; hash: string };
  isAd: boolean;
}) => {
  let time: any = null;
  const intl = useIntl();
  const { pathname, search, hash } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;
  const [subVisibleKey, setSubVisibleKey] = useState('');
  const [show, setShow] = useState(true);
  const [isStick, setIsStick] = useState<boolean>(false);

  const subMenuHeight = useMemo(() => {
    return lang === 'zh-CN' ? 330 : 360;
  }, [lang]);

  const selectMenuItem = useMemo(() => {
    const mainMenu = pathname?.split('/')[1];

    switch (mainMenu) {
      case 'activity':
      case 'blog':
      case 'download':
        return 'community';
      default:
        return mainMenu;
    }
  }, [pathname]);

  const toggleLanguage = (url: string, language: 'zh' | 'en') => {
    const format = url.replace(/\/(zh|en)\//, () => {
      return `/${language}/`;
    });
    return format;
  };

  const zhSite = `${window.location.origin}${history?.location?.pathname}?lang=zh-CN`;

  const enSite = `${window.location.origin}${history?.location?.pathname}?lang=en-US`;
  const getCurrentLanguage = () => {
    return lang === 'en-US' ? 'en' : 'zh';
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
                url: '/docs' + (item?.url?.split('/tugraph-db')[1] ?? ''),
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
            docPath: `/docs/tugraph-db/${getCurrentLanguage()}/4.5.2/guide`,
          },
          {
            label: intl.formatMessage({ id: 'header.product.desc2' }),
            desc: intl.formatMessage({ id: 'product_analytics.description' }),
            productPath: '/product/analytics',
            docPath: `/docs/tugraph-analytics/${getCurrentLanguage()}/guide/`,
          },
          // {
          //   label: intl.formatMessage({ id: 'header.product.desc3' }),
          //   desc: intl.formatMessage({ id: 'product_learn.description' }),
          //   productPath: '/product/learn',
          //   docPath: `/docs/tugraph-db/${getCurrentLanguage()}/4.5.1/olap&procedure/learn/tutorial`,
          // },
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
                    key={subItem.label}
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
            url: 'https://tugraphdb.beta.oscollege.net/os',
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
            path: '/video/home',
          },
          // {
          //   label: intl.formatMessage({ id: 'header.community.forum' }),
          // },
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
                    className={styles.communitySubMenuItem}
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
    if (['blog', 'download', 'activity'].includes(pathname?.split('/')[1])) {
      window.location.href = `${window.location.origin}/?lang=${
        lang === 'zh-CN' ? 'en-US' : 'zh-CN'
      }`;
      return;
    }
    if (currentUrl) {
      window.location.href = /\/en\//.test(window.location.pathname)
        ? `${window.location.origin}${toggleLanguage(
            window.location.pathname,
            'zh',
          )}?lang=zh-CN${window.location.hash}`
        : `${window.location.origin}${toggleLanguage(
            window.location.pathname,
            'en',
          )}?lang=en-US${window.location.hash}`;
    } else {
      window.location.href = lang === 'zh-CN' ? enSite : zhSite;
    }
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
        subKey: 'subMenuProduct',
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
        path: `/docs/tugraph-db/${getCurrentLanguage()}/4.5.2/guide`,
        subKey: 'subMenuDocs',
      },

      {
        key: 'community',
        label: intl.formatMessage({ id: 'header.community' }),
        onMouseMove: () => onHover('subMenuCommunity', 'move'),
        onMouseLeave: () => onHover('subMenuCommunity', 'leave'),
        subKey: 'subMenuCommunity',
        disable: lang === 'en-US',
      },
    ];

    return (
      <div className={styles.menuList}>
        {menuList.map((item) => {
          const { path, label, key, subKey, disable, ...props } = item || {};

          if (disable) {
            return null;
          }

          return (
            <div
              key={key}
              className={cx(
                styles.menuItem,
                key === selectMenuItem || subKey === subVisibleKey
                  ? styles.menuItemSelect
                  : '',
              )}
              onClick={() => {
                if (path) {
                  history.push(historyPushLinkAt(path));
                }
              }}
              {...props}
            >
              <div className={styles.mainMenu}>{label}</div>
              <div className={styles.footerLine}>
                <div className={styles.line} />
                <div className={styles.arrow} />
                <div className={styles.line} />
              </div>
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
            style={{ top: isAd && !isStick ? 116 : 66 }}
            initial={{ height: 0, zIndex: 500 }}
            animate={{
              height: subVisibleKey === item.menuKeys ? subMenuHeight : 0,
              zIndex: 900,
            }}
            whileHover={{ height: show ? subMenuHeight : 0, zIndex: 900 }}
            transition={{ duration: 0.5 }}
            onMouseMove={() => onHover(item.menuKeys, 'move')}
            onMouseLeave={() => onHover(item.menuKeys, 'leave')}
          >
            {item.constent}
          </motion.div>
        ))}
      </>
    );
  };

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
                src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/FdGmQYzJAScAAAAAAAAAAAAAeh8WAQFr/fmt.avif"
              />
            </a>
          </div>
          <div className={styles.headerRight}>
            {/* {searchInput()} */}
            <div className={styles.lang} onClick={handleLangClick}>
              <img src={langIcon} className={styles.languageIcon} />
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
