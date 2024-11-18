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
        title: '社区版',
        subMenu: [
          {
            label: 'TuGraph DB 社区版',
            desc: '这里是说明文案。。。',
          },
          {
            label: 'TuGraph Analytics 实时图计算引擎',
            desc: '这里是说明文案。。。',
          },
          {
            label: 'TuGraph Leran 图学习引擎',
            desc: '这里是说明文案。。。',
          },
        ],
      },
      {
        title: '企业版',
        subMenu: [
          {
            label: 'TuGraph 企业版',
            desc: '这里是说明文案。。。',
          },
          {
            label: 'TuGraph Cloud 版',
            desc: '这里是说明文案。。。',
          },
        ],
      },
    ];

    return (
      <div className={styles.productSubMenu}>
        {list?.map((item) => {
          return (
            <div className={styles.productSubMenuVersion}>
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
        title: '学习',
        subMenu: [
          {
            label: '校企合作',
          },
          {
            label: '培训课程',
          },
          {
            label: '培训认证',
          },
        ],
      },
      {
        title: '社区',
        subMenu: [
          {
            label: '博客',
            path: '/new/blog/list',
          },
          {
            label: '视频',
          },
          {
            label: '论坛',
          },
          {
            label: '活动',
            path: '/new/activity/list',
          },
        ],
      },
      {
        title: '资源',
        subMenu: [
          {
            label: 'GITHUB',
          },
          {
            label: 'GITEE',
          },
          {
            label: '下载中心',
            path: '/new/download',
          },
          {
            label: '白皮书与行业报告',
          },
        ],
      },
    ];
    return (
      <div className={styles.communitySubMenu}>
        <div className={styles.subMenuBanner}>
          <div className={styles.bannerTitle}>OSGraph</div>
          <div className={styles.bannerDesc}>开源图谱关系洞察工具</div>
        </div>

        {list.map((item) => {
          return (
            <div className={styles.subMenuCol}>
              <div className={styles.subMenuTitle}>{item.title}</div>
              {item.subMenu.map((subItem) => {
                return (
                  <div
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
      subMenuDom.style.height = type === 'move' ? '311px' : '0';
      mainWrapper.style.marginTop = type === 'move' ? '-377px' : '-66px';
    }
  };

  const renderMenu = () => {
    const menuList = [
      {
        label: intl.formatMessage({ id: 'header.product' }),
        path: '/new/product',
        onMouseMove: () => onHover('subMenuProduct', 'move'),
        onMouseLeave: () => onHover('subMenuProduct', 'leave'),
      },
      {
        label: '客户案例',
        path: '/new/case',
      },
      {
        label: '合作伙伴',
        path: '/new/partners',
      },
      {
        label: '文档',
      },

      {
        label: '学习与社区',
        onMouseMove: () => onHover('subMenuCommunity', 'move'),
        onMouseLeave: () => onHover('subMenuCommunity', 'leave'),
      },
    ];

    return (
      <div className={styles.menuList}>
        {menuList.map((item) => {
          const { path, label, ...props } = item || {};
          return (
            <div
              className={styles.menuItem}
              onClick={() => {
                if (path) {
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
          <a href={goLinkAt('/new')} rel="noopener noreferrer">
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
