import React, { useEffect, useState } from 'react';
import HTMLRenderer from 'react-html-renderer';
import { useIntl, useLocation } from 'umi';
import { Spin, Pagination, Tabs, Space, Button } from 'antd';
import { Layout } from 'antd';
import cx from 'classnames';
import { useMedia } from 'react-use';
import styles from './blog.less';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getZHBlogs } from '@/data/blog';
import { getENBlogs } from '@/data/blog_en';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { BlogItem } from '@/interface';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';

const { Content } = Layout;

const PAGE_SIZE = 7;

export default function BlogPage() {
  const intl = useIntl();
  const location = useLocation();
  const { search } = location;
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;
  const getBlogs = lang === 'zh-CN' ? getZHBlogs : getENBlogs;
  const isWide = useMedia('(min-width: 767.99px)', true);
  const [type, setType] = React.useState<string>('all');
  const initBlogs = getBlogs('');
  const [blogDetail, setBlogDetail] = React.useState<string>();
  const [blogs, setBlogs] = React.useState<BlogItem[]>(initBlogs);
  const [listData, setListData] = React.useState<BlogItem[]>(
    initBlogs.slice(0, PAGE_SIZE),
  );
  const [isStick, setIsStick] = useState<boolean>(false);

  const handleScroll = (e: Event) => {
    if (document.documentElement.scrollTop > 0) {
      setIsStick(true);
    } else {
      setIsStick(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setBlogs(getBlogs(type));
  }, [type]);

  useEffect(() => {
    setListData(blogs.slice(0, PAGE_SIZE));
  }, [blogs]);

  const onPaginationChange = (page: number) => {
    const start = 0 + (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setListData(blogs.slice(start, end));
  };

  const onClickMore = () => {
    const start = 0;
    const currentSize = listData?.length ?? 0;
    const end = start + currentSize + PAGE_SIZE;
    setListData(blogs.slice(start, end));
  };

  React.useEffect(() => {
    const id = location.query?.id;
    if (!id) {
      setBlogDetail('');
      return;
    }
    setBlogDetail(blogs?.find((item) => item.id === Number(id))?.content);
  }, [location]);

  const content = (
    <div
      className={cx(
        styles.containerWrapper,
        isStick && !isWide ? styles.sticky : null,
      )}
    >
      <div className={styles.listWrapper}>
        <Tabs
          activeKey={type}
          className={styles.title}
          onChange={(value) => {
            setType(value);
          }}
        >
          <Tabs.TabPane tab={intl.formatMessage({ id: 'blog.all' })} key="all">
            <div className={styles.lists}>
              {listData?.map((item, key) => (
                <a
                  className={styles.list}
                  key={key}
                  href={`/blog?id=${item.id}&lang=${lang}`}
                  onClick={() => {
                    setBlogDetail(item.content);
                  }}
                >
                  <Space size={isWide ? 24 : 22}>
                    <img src={item.img} alt={item.title} />
                    <div className={styles.textWrapper}>
                      <div className={styles.listTitle}>{item.title}</div>
                      <div className={styles.desc}>{item.desc}</div>
                      <div className={styles.updateDate}>{item.updateDate}</div>
                    </div>
                  </Space>
                </a>
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={intl.formatMessage({ id: 'blog.news' })}
            key="news"
          >
            <div className={styles.lists}>
              {listData?.map((item, key) => (
                <a
                  className={styles.list}
                  key={key}
                  href={`/blog?id=${item.id}&lang=${lang}`}
                  onClick={() => {
                    setBlogDetail(item.content);
                  }}
                >
                  <Space size={isWide ? 24 : 22}>
                    <img src={item.img} alt={item.title} />
                    <div className={styles.textWrapper}>
                      <div className={styles.listTitle}>{item.title}</div>
                      <div className={styles.desc}>{item.desc}</div>
                      <div className={styles.updateDate}>{item.updateDate}</div>
                    </div>
                  </Space>
                </a>
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={intl.formatMessage({ id: 'blog.technology' })}
            key="tech"
          >
            <div className={styles.lists}>
              {listData?.map((item, key) => (
                <a
                  className={styles.list}
                  key={key}
                  href={`/blog?id=${item.id}&lang=${lang}`}
                  onClick={() => {
                    setBlogDetail(item.content);
                  }}
                >
                  <Space size={isWide ? 24 : 22}>
                    <img src={item.img} alt={item.title} />
                    <div className={styles.textWrapper}>
                      <div className={styles.listTitle}>{item.title}</div>
                      <div className={styles.desc}>{item.desc}</div>
                      <div className={styles.updateDate}>{item.updateDate}</div>
                    </div>
                  </Space>
                </a>
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={intl.formatMessage({ id: 'blog.competition' })}
            key="competition"
          >
            <div className={styles.lists}>
              {listData?.map((item, key) => (
                <a
                  className={styles.list}
                  key={key}
                  href={`/blog?id=${item.id}&lang=${lang}`}
                  onClick={() => {
                    setBlogDetail(item.content);
                  }}
                >
                  <Space size={isWide ? 24 : 22}>
                    <img src={item.img} alt={item.title} />
                    <div className={styles.textWrapper}>
                      <div className={styles.listTitle}>{item.title}</div>
                      <div className={styles.desc}>{item.desc}</div>
                      <div className={styles.updateDate}>{item.updateDate}</div>
                    </div>
                  </Space>
                </a>
              ))}
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
      {isWide ? (
        <Pagination
          defaultCurrent={1}
          total={blogs?.length}
          showTotal={(total) =>
            `${intl.formatMessage({
              id: 'blog.total',
            })} ${total} ${intl.formatMessage({ id: 'blog.item' })}`
          }
          pageSize={PAGE_SIZE}
          onChange={onPaginationChange}
        />
      ) : (
        <div>
          {listData?.length < blogs?.length && (
            <Button className={styles.more} onClick={onClickMore}>
              {intl.formatMessage({ id: 'blog.more' })}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  return (
    <>
      {!blogDetail ? (
        <LayoutTemplate
          bannerInfo={{
            bgIconUrl:
              'https://mdn.alipayobjects.com/mdn/huamei_qcdryc/afts/img/A*sLOlR5lxll8AAAAAAAAAAAAADgOBAQ',
            slogan: intl.formatMessage({ id: 'blog.banner.slogan' }),
            description: intl.formatMessage({
              id: 'blog.banner.subTitle',
            }),
          }}
          content={content}
        />
      ) : (
        <Layout>
          <div className={styles.docHeader}>
            <Header isStick={false} />
          </div>

          <Layout>
            <Content className={styles.blogContainerWrapper}>
              <Spin spinning={!blogDetail}>
                <div className={styles.blogContainer}>
                  <HTMLRenderer html={blogDetail} />
                </div>
              </Spin>
            </Content>
          </Layout>

          <Footer />
        </Layout>
      )}
    </>
  );
}
