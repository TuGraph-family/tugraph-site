import { useState, useEffect } from 'react';
import './index.less';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import cx from 'classnames';
import { useIntl, history } from 'umi';
import { getSearch, historyPushLinkAt } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';
import { GlobalOutlined, MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';

const Navbar: React.FC = () => {
  const intl = useIntl();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname, search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;

  const zhSite = `${window.location.origin}${history?.location?.pathname}?lang=zh-CN`;

  const enSite = `${window.location.origin}${history?.location?.pathname}?lang=en-US`;

  //  一级菜单
  const navItems = [
    {
      key: 'product',
      label: intl.formatMessage({ id: 'header.product' }),
      href: '/product/db',
      hasDropdown: true,
    },
    {
      key: 'case',
      label: intl.formatMessage({ id: 'header.case' }),
      href: '/case',
    },
    {
      key: 'partners',
      label: intl.formatMessage({ id: 'header.ecosystem' }),
      href: '/partners',
    },
    {
      key: 'docs',
      label: intl.formatMessage({ id: 'header.doc' }),
      href: `/docs/tugraph-db/${lang === 'zh-CN' ? 'zh' : 'en'}/4.5.2/guide`,
    },
    {
      key: 'community',
      label: intl.formatMessage({ id: 'header.community' }),
      href: '/blog/list',
      hasDropdown: true,
      hidden: lang === 'en-US',
    },
  ];

  // 产品二级菜单
  const productsDropdown = [
    {
      category: intl.formatMessage({ id: 'header.product.type' }),
      items: [
        {
          label: intl.formatMessage({ id: 'header.product.title' }),
          href: '/product/db',
          description: intl.formatMessage({ id: 'header.product.desc' }),
          icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/p1ypSbha2u8AAAAAQFAAAAgAeh8WAQFr/original',
        },
        {
          label: intl.formatMessage({ id: 'header.product.title2' }),
          href: '/product/analytics',
          description: intl.formatMessage({ id: 'header.product.desc2' }),
          icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/r9H-RLtz2OoAAAAAQCAAAAgAeh8WAQFr/original',
        },
      ],
    },
    {
      category: intl.formatMessage({ id: 'header.product.type2' }),
      items: [
        {
          label: intl.formatMessage({ id: 'header.product.title3' }),
          href: '/product/enterprise',
          description: intl.formatMessage({ id: 'header.product.desc3' }),
          icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/3fgpQLrCI8cAAAAAQBAAAAgAeh8WAQFr/original',
        },
        {
          label: intl.formatMessage({ id: 'header.product.title4' }),
          href: '/product/cloud',
          description: intl.formatMessage({ id: 'header.product.desc4' }),
          icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/DlmYTri0_s0AAAAAMsAAAAgAeh8WAQFr/original',
        },
      ],
    },
  ];

  // 学习二级菜单
  const learnDropdown = [
    {
      category: 'OSGraph',
      items: [
        {
          label: 'OSGraph',
          href: 'https://osgraph.com/',
          description: '开源图谱关系洞察工具',
          external: true,
          icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/p1ypSbha2u8AAAAAQFAAAAgAeh8WAQFr/original',
        },
      ],
    },
    {
      category: '学习',
      items: [
        {
          label: '培训课程',
          href: 'https://tugraphdb.beta.oscollege.net/os',
          description: 'TuGraph 学习课程',
          external: true,
          icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/dfk9TYvjD-4AAAAAQCAAAAgAeh8WAQFr/original',
        },
      ],
    },
    {
      category: '社区',
      items: [
        {
          label: '博客',
          href: '/blog/list',
          description: '最新文章与动态',
          icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/9qxwTIYbgKkAAAAAQCAAAAgAeh8WAQFr/original',
        },
        {
          label: '视频',
          href: '/video/home',
          description: '官方视频内容',
          icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/5ox6Q6kizGIAAAAAQBAAAAgAeh8WAQFr/original',
        },
        {
          label: '活动',
          href: '/activity/list',
          description: '社区活动与公告',
          icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/hTfuQ5LLbBEAAAAAKbAAAAgAeh8WAQFr/original',
        },
      ],
    },
    {
      category: '资源',
      items: [
        {
          label: 'GITHUB',
          href: 'https://github.com/TuGraph-family',
          description: '源码与版本发布',
          external: true,
          icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/DlmYTri0_s0AAAAAMsAAAAgAeh8WAQFr/original',
        },
        {
          label: 'GITEE',
          href: 'https://gitee.com/tugraph',
          description: '国内镜像仓库',
          external: true,
          icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/DlmYTri0_s0AAAAAMsAAAAgAeh8WAQFr/original',
        },
        {
          label: '下载中心',
          href: '/download',
          description: '文档与下载入口',
          icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/9upMSYkArkkAAAAAG4AAAAgAeh8WAQFr/original',
        },
      ],
    },
  ];

  useEffect(() => {
    const updateActiveItem = () => {
      const path = location.pathname;
      const hash = location.hash;

      if (path.startsWith('/product')) {
        setActiveItem('product');
      } else if (
        path.startsWith('/blog') ||
        path.startsWith('/video') ||
        path.startsWith('/activity') ||
        path.startsWith('/download')
      ) {
        setActiveItem('community');
      } else if (path.startsWith('/docs')) {
        setActiveItem('docs');
      } else if (path === '/' && !hash.startsWith('#/product')) {
        setActiveItem('');
      } else {
        const item = navItems.find((item) => item.href === path);
        setActiveItem(item ? item.key : '');
      }
    };

    updateActiveItem();
  }, [location.pathname, location.hash]);

  const toggleLanguage = (url: string, language: 'zh' | 'en') => {
    const format = url.replace(/\/(zh|en)\//, () => {
      return `/${language}/`;
    });
    return format;
  };

  const handleLangClick = () => {
    if (['blog', 'download', 'activity'].includes(pathname?.split('/')[1])) {
      window.location.href = `${window.location.origin}/?lang=${
        lang === 'zh-CN' ? 'en-US' : 'zh-CN'
      }`;
      return;
    }
    if (pathname?.split('/')[1] === 'docs') {
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

  const handleDropdownClick = (key: string, href: string) => {
    history.push(historyPushLinkAt(href));
    setActiveItem(key);
    setDropdownOpen(false);
    setHoveredDropdown('');
  };

  const generateMobileMenuItems = () => {
    const items: any[] = [];
    navItems
      .filter((i) => !i.hidden)
      .forEach((item) => {
        if (item.hasDropdown) {
          const dropdownData =
            item.key === 'community' ? learnDropdown : productsDropdown;
          const children: any[] = [];

          dropdownData.forEach((group) => {
            group.items.forEach((link) => {
              children.push({
                key: link.label,
                label: link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ),
              });
            });
          });

          items.push({
            key: item.key,
            label: item.label,
            children,
          });
        } else {
          items.push({
            key: item.key,
            label: (
              <Link
                to={historyPushLinkAt(item.href)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ),
          });
        }
      });
    return items;
  };

  return (
    <div className="navbar-header">
      <div className="navbar-container">
        <nav className="navbar-nav">
          {/* Logo */}
          <Link to={historyPushLinkAt('/')} className="navbar-logo">
            <img
              src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/fAc1RZCqBU8AAAAAQLAAAAgAeh8WAQFr/fmt.avif"
              alt="TuGraph"
              className="navbar-logo-image"
            />
          </Link>

          {/* Navigation Items */}
          <div
            className="navbar-items"
            onMouseLeave={() => {
              setDropdownOpen(false);
            }}
          >
            {navItems
              .filter((i) => !i?.hidden)
              .map((item) => (
                <div key={item.key} className="navbar-item">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownClick(item.key, item.href)}
                        onMouseEnter={() => {
                          setHoveredDropdown(item.key);
                          setDropdownOpen(true);
                        }}
                        className={cx(
                          'navbar-button',
                          activeItem === item.key && 'navbar-button-active',
                        )}
                        style={
                          activeItem === item.key
                            ? {
                                backgroundImage:
                                  'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%)',
                              }
                            : undefined
                        }
                      >
                        {item.label}
                        <svg
                          className="navbar-dropdown-arrow"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        {activeItem === item.key && (
                          <motion.div
                            layoutId="lamp"
                            className="navbar-lamp"
                            initial={false}
                            transition={{
                              type: 'spring',
                              stiffness: 300,
                              damping: 30,
                            }}
                          >
                            <div className="navbar-lamp-bar">
                              <div className="navbar-lamp-glow-1" />
                              <div className="navbar-lamp-glow-2" />
                              <div className="navbar-lamp-glow-3" />
                            </div>
                          </motion.div>
                        )}
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && hoveredDropdown === item.key && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            onMouseLeave={() => {
                              setDropdownOpen(false);
                              setHoveredDropdown('');
                            }}
                            className={
                              item.key === 'community'
                                ? 'navbar-dropdown-wide'
                                : 'navbar-dropdown'
                            }
                          >
                            {item.key === 'community' ? (
                              <div className="navbar-dropdown-grid">
                                {learnDropdown.map((group) => (
                                  <div
                                    key={group.category}
                                    className="navbar-dropdown-group"
                                  >
                                    <div className="navbar-dropdown-group-header">
                                      <span className="navbar-dropdown-group-title">
                                        {group.category}
                                      </span>
                                    </div>
                                    <div className="navbar-dropdown-group-content">
                                      {group.items.map((link) =>
                                        link.external ? (
                                          <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={() =>
                                              setDropdownOpen(false)
                                            }
                                            className="navbar-dropdown-item"
                                          >
                                            <div className="navbar-dropdown-item-icon">
                                              <img
                                                className="navbar-dropdown-item-icon-svg"
                                                src={link.icon}
                                              />
                                            </div>
                                            <div className="navbar-dropdown-item-content">
                                              <div className="navbar-dropdown-item-label">
                                                {link.label}
                                              </div>
                                              <div className="navbar-dropdown-item-description">
                                                {link.description}
                                              </div>
                                            </div>
                                          </a>
                                        ) : (
                                          <Link
                                            key={link.label}
                                            to={link.href}
                                            onClick={() =>
                                              setDropdownOpen(false)
                                            }
                                            className="navbar-dropdown-item"
                                          >
                                            <div className="navbar-dropdown-item-icon">
                                              <img
                                                className="navbar-dropdown-item-icon-svg"
                                                src={link.icon}
                                              />
                                            </div>
                                            <div className="navbar-dropdown-item-content">
                                              <div className="navbar-dropdown-item-label">
                                                {link.label}
                                              </div>
                                              <div className="navbar-dropdown-item-description">
                                                {link.description}
                                              </div>
                                            </div>
                                          </Link>
                                        ),
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              productsDropdown.map((group, idx) => (
                                <div
                                  key={group.category}
                                  className="navbar-dropdown-group"
                                >
                                  <div className="navbar-dropdown-group-header">
                                    <span className="navbar-dropdown-group-title">
                                      {group.category}
                                    </span>
                                  </div>
                                  <div className="navbar-dropdown-group-content">
                                    {group.items.map((link) => (
                                      <Link
                                        key={link.label}
                                        to={link.href}
                                        onClick={() => setDropdownOpen(false)}
                                        className="navbar-dropdown-item"
                                      >
                                        <div className="navbar-dropdown-item-icon">
                                          <img
                                            className="navbar-dropdown-item-icon-svg"
                                            src={link.icon}
                                          />
                                        </div>
                                        <div className="navbar-dropdown-item-content">
                                          <div className="navbar-dropdown-item-label">
                                            {link.label}
                                          </div>
                                          <div className="navbar-dropdown-item-description">
                                            {link.description}
                                          </div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                  {idx < productsDropdown.length - 1 && (
                                    <div className="navbar-dropdown-divider" />
                                  )}
                                </div>
                              ))
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={historyPushLinkAt(item.href)}
                      onClick={() => setActiveItem(item.key)}
                      className={cx(
                        'navbar-button',
                        activeItem === item.key && 'navbar-button-active',
                      )}
                      onMouseEnter={() => {
                        setHoveredDropdown('');
                      }}
                      style={
                        activeItem === item.key
                          ? {
                              backgroundImage:
                                'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%)',
                            }
                          : undefined
                      }
                    >
                      {item.label}
                      {activeItem === item.key && (
                        <motion.div
                          layoutId="lamp"
                          className="navbar-lamp"
                          initial={false}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          <div className="navbar-lamp-bar">
                            <div className="navbar-lamp-glow-1" />
                            <div className="navbar-lamp-glow-2" />
                            <div className="navbar-lamp-glow-3" />
                          </div>
                        </motion.div>
                      )}
                    </Link>
                  )}
                </div>
              ))}
          </div>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={handleLangClick}
            data-no-i18n="true"
            className="navbar-language-toggle"
          >
            <GlobalOutlined />
            {lang === 'zh-CN' ? '中' : 'EN'}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="navbar-mobile-toggle"
          >
            <MenuOutlined />
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        className="navbar-mobile-drawer"
        width={280}
      >
        <Menu
          mode="inline"
          items={generateMobileMenuItems()}
          defaultOpenKeys={['product', 'community']}
          style={{ borderRight: 0 }}
        />
      </Drawer>
    </div>
  );
};

export default Navbar;
