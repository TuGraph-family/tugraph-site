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
          },
          {
            label: '视频',
          },
          {
            label: '论坛',
          },
          {
            label: '活动',
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
                return <div>{subItem.label}</div>;
              })}
            </div>
          );
        })}
      </div>
    );
  };

  const items = [
    {
      label: <a href={zhSite}>简体中文</a>,
      key: 'Chinese',
    },
    {
      label: <a href={enSite}>English</a>,
      key: 'English',
    },
  ];

  return (
    <div className={styles.header}>
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
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <div className={styles.lang}>
              <img
                src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*GN_WSabhJdwAAAAAAAAAAAAADgOBAQ/original"
                className={styles.languageIcon}
              />
              <div className={styles.languageText}>
                {lang === 'zh-CN' ? '中' : 'EN'}
              </div>
            </div>
          </Dropdown>
          <div className={styles.loginBtn}>
            {lang === 'zh-CN' ? '登录' : 'login'}
          </div>
        </div>
      </div>
      <div className={styles.menuList}>
        <div className={cx(styles.menuItem, styles.mainMenuProduct)}>
          <div className={styles.mainMenu}>
            {intl.formatMessage({ id: 'header.product' })}
          </div>
          <div className={styles.subMenuProduct}>{rederProductSubMenu()}</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.mainMenu}>
            {intl.formatMessage({ id: 'header.case' })}
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.mainMenu}>
            {intl.formatMessage({ id: 'header.ecosystem' })}
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.mainMenu}>
            {intl.formatMessage({ id: 'header.doc' })}
          </div>
        </div>
        <div className={cx(styles.menuItem, styles.mainMenuCommunity)}>
          <div className={styles.mainMenu}>
            {intl.formatMessage({ id: 'header.community' })}
          </div>
          <div className={styles.subMenuCommunity}>
            {renderCommunitySubMenu()}
          </div>
        </div>
      </div>
    </div>
  );
};
