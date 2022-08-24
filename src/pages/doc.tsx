import React from 'react';
import HTMLRenderer from 'react-html-renderer';
import { categoryItem, docContent } from '@/interface';
import { MenuProps, Select, Affix, Anchor, Spin } from 'antd';
import { Layout, Menu } from 'antd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useGetDocsInfo } from '@/hooks/useGetDocsInfo';
import moment from 'moment';

import styles from './doc.less';

const { Link } = Anchor;

const { Content, Sider } = Layout;
const { Option } = Select;

export default function DocPage() {
  const { getCategoryList, getVersions, getDocDetail } = useGetDocsInfo();
  const [versions, setVersions] = React.useState([]);
  const [currentVersion, setCurrentVersion] = React.useState('');
  const [categoryList, setCategoryList] = React.useState<categoryItem[]>([]);
  const [currentCategory, setCurrentCategory] = React.useState<string>('');
  const [content, setContent] = React.useState<docContent>();

  const findFirstChild = (items: categoryItem[]): string => {
    if (items[0].children?.length > 0) {
      return findFirstChild(items[0].children);
    } else {
      return items[0].id;
    }
  };

  const dateFormat = (dateString?: string) => {
    if (!dateString) {
      return '';
    }
    return moment(new Date(dateString)).format('YYYY-MM-DD HH:MM:SS');
  };

  React.useEffect(() => {
    getVersions({ tenant: 0 }).then((res: any) => {
      setVersions(res.data);
      setCurrentVersion(res?.data?.[0]?.branch);
    });
  }, []);

  React.useEffect(() => {
    if (!currentVersion) {
      return;
    }
    getCategoryList({ version: currentVersion }).then((res: any) => {
      setCategoryList(res.data);
      setCurrentCategory(findFirstChild(res.data));
    });
  }, [currentVersion]);

  React.useEffect(() => {
    if (!currentCategory) {
      return;
    }
    getDocDetail({ id: currentCategory }).then((res: docContent) => {
      setContent(res);
    });
  }, [currentCategory]);

  const transformCategoryList = (items: categoryItem[]): MenuProps['items'] => {
    return items.map((item: categoryItem) => {
      const children = item?.children || [];
      return {
        key: item.id,
        label: item.fileName,
        children:
          children?.length > 0 ? transformCategoryList(children) : undefined,
      };
    });
  };

  const items = transformCategoryList(categoryList);

  const onAnchorLinkChange = (activeLink: string) => {};

  return (
    <Layout>
      <div className={styles.headerWrapper}>
        <Header activeKey="doc" />
      </div>
      <Layout>
        <Affix offsetTop={0}>
          <Sider className={styles.sideWrapper} theme="light" width={243}>
            <Spin spinning={!!!currentVersion}>
              <Select
                style={{
                  width: '184px',
                  textAlign: 'left',
                  marginBottom: '16px',
                }}
                value={currentVersion}
                onChange={(v) => setCurrentVersion(v)}
              >
                {versions?.map((version: { branch: string }, index) => (
                  <Option value={version?.branch} key={index}>
                    {version?.branch}
                  </Option>
                ))}
              </Select>
              <Menu
                mode="inline"
                selectedKeys={[currentCategory]}
                style={{ height: '100%', borderRight: 0 }}
                items={items}
                onSelect={({ key }) => setCurrentCategory(key)}
              />
            </Spin>
          </Sider>
        </Affix>

        <Content className={styles.containerWrapper}>
          <Spin spinning={!!!content}>
            <h1>{content?.title}</h1>
            <div>
              {content?.updated_at && (
                <span className={styles.updateTimeLabel}>最后更新时间：</span>
              )}
              <span className={styles.updateTime}>
                {dateFormat(content?.updated_at)}
              </span>
            </div>
            <HTMLRenderer html={content?.body_html} />
          </Spin>
        </Content>
        <Anchor
          affix={true}
          className={styles.apiAnchor}
          onChange={onAnchorLinkChange}
        >
          {content?.anchors?.map((item) => (
            <Link href={item.id} title={item.title} />
          ))}
        </Anchor>
      </Layout>

      <Footer className="docFooter" />
    </Layout>
  );
}
