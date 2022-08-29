import React from 'react';
import ReactMarkdown from 'react-markdown';
import HTMLRenderer from 'react-html-renderer';
import { useIntl } from 'umi';
import { Select, Anchor, Spin, Row, Col, Pagination } from 'antd';
import { Layout, Menu } from 'antd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { blogs } from '@/data/blog';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { BlogItem } from '@/interface';
import styles from './blog.less';
import Item from 'antd/lib/list/Item';

const { Link } = Anchor;

const { Content, Sider } = Layout;
const { Option } = Select;

export default function BlogPage() {
  const intl = useIntl();
  const [blogDetail, setBlogDetail] = React.useState<string>();
  const [listData, setListData] = React.useState<BlogItem[]>(blogs.slice(0, 5));

  const onPaginationChange = (page: number) => {
    const start = 0 + (page - 1) * 5;
    const end = start + 5;
    setListData(blogs.slice(start, end));
  };

  const content = (
    <div className={styles.containerWrapper}>
      <div className={styles.listWrapper}>
        <div className={styles.title}>
          {intl.formatMessage({ id: 'blog.all' })}
        </div>
        <div className={styles.lists}>
          {listData?.map((item, key) => (
            <div
              className={styles.list}
              key={key}
              onClick={() => {
                setBlogDetail(item.content);
              }}
            >
              <Row>
                <Col span={6}>
                  <img src={item.img} alt={item.title} />
                </Col>
                <Col span={18} className={styles.textWrapper}>
                  <div className={styles.listTitle}>{item.title}</div>
                  <div className={styles.updateDate}>{item.updateDate}</div>
                  <div className={styles.desc}>{item.desc}</div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>

      <Pagination
        defaultCurrent={1}
        total={blogs?.length}
        showTotal={(total) =>
          `${intl.formatMessage({
            id: 'blog.total',
          })} ${total} ${intl.formatMessage({ id: 'blog.item' })}`
        }
        pageSize={5}
        onChange={onPaginationChange}
      />
    </div>
  );

  return (
    <>
      {!blogDetail ? (
        <LayoutTemplate
          bannerInfo={{
            bgIconUrl:
              'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*xAXjS6iKeFcAAAAAAAAAAAAAARQnAQ',
            activeKey: 'blog',

            slogan: intl.formatMessage({ id: 'blog.banner.slogan' }),
            subTitle: intl.formatMessage({ id: 'blog.banner.subTitle' }),
          }}
          content={content}
        />
      ) : (
        <Layout>
          <div className={styles.headerWrapper}>
            <Header activeKey="blog" />
          </div>
          <Layout>
            <Content className={styles.blogContainerWrapper}>
              <Spin spinning={!!!blogDetail}>
                <HTMLRenderer html={blogDetail} />
              </Spin>
            </Content>
          </Layout>

          <Footer />
        </Layout>
      )}
    </>
  );
}
