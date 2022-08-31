import React from 'react';
import HTMLRenderer from 'react-html-renderer';
import { history, useLocation } from 'umi';
import { CategoryItem, DocContent } from '@/interface';
import { MenuProps, Select, Affix, Anchor, Spin, Space, Drawer } from 'antd';
import { Layout, Menu } from 'antd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useGetDocsInfo } from '@/hooks/useGetDocsInfo';
import { useMedia } from 'react-use';
import moment from 'moment';

import styles from './doc.less';

const { Link } = Anchor;

const { Content, Sider } = Layout;
const { Option } = Select;

export default function DocPage() {
  const location = useLocation();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const { getCategoryList, getVersions, getDocDetail } = useGetDocsInfo();
  const [versions, setVersions] = React.useState([]);
  const [docMenuVisible, setDocMenuVisible] = React.useState<boolean>(false);
  const [currentVersion, setCurrentVersion] = React.useState('');
  const [categoryList, setCategoryList] = React.useState<CategoryItem[]>([]);
  const [currentCategory, setCurrentCategory] = React.useState<string>('');
  const [content, setContent] = React.useState<DocContent>();

  const findFirstChild = (items: CategoryItem[]): string => {
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
    const { version, id } = location.query;
    getVersions({ tenant: 0 }).then((res: any) => {
      setVersions(res.data);
      if (version && id) {
        setCurrentVersion(version);
      } else {
        setCurrentVersion(res?.data?.[0]?.branch);
      }
    });
  }, []);

  React.useEffect(() => {
    const { version, id } = location.query;
    if (!currentVersion) {
      return;
    }
    setCurrentCategory('');
    getCategoryList({ version: currentVersion }).then((res: any) => {
      setCategoryList(res.data);
      if (version && id && currentVersion === version) {
        setCurrentCategory(id);
      } else {
        setCurrentCategory(findFirstChild(res.data));
      }
    });
  }, [currentVersion]);

  React.useEffect(() => {
    if (!currentCategory) {
      return;
    }
    history.push(`/doc?version=${currentVersion}&id=${currentCategory}`);
    getDocDetail({ id: currentCategory }).then((res: DocContent) => {
      setContent(res);
    });
  }, [currentCategory]);

  const transformCategoryList = (items: CategoryItem[]): MenuProps['items'] => {
    return items.map((item: CategoryItem) => {
      const children = item?.children || [];
      return {
        key: item.id,
        label: item.fileName,
        children:
          children?.length > 0 ? transformCategoryList(children) : undefined,
      };
    });
  };

  const getCategoryMenu = () => (
    <Menu
      mode="inline"
      selectedKeys={[currentCategory]}
      style={{ height: '100%', borderRight: 0 }}
      items={items}
      onSelect={({ key }) => setCurrentCategory(key)}
    />
  );

  const items = transformCategoryList(categoryList);

  // TODO 锚点滚动
  const onAnchorLinkChange = (activeLink: string) => {};

  return (
    <Layout>
      <div className={styles.headerWrapper}>
        <Header activeKey="doc" />
      </div>
      <Layout>
        {isWide && (
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
                  onChange={(v) => {
                    setCurrentVersion(v);
                  }}
                >
                  {versions?.map((version: { branch: string }, index) => (
                    <Option value={version?.branch} key={index}>
                      {version?.branch}
                    </Option>
                  ))}
                </Select>
                {getCategoryMenu()}
              </Spin>
            </Sider>
          </Affix>
        )}

        <Content className={styles.containerWrapper}>
          {!isWide && (
            <Spin spinning={!!!currentVersion}>
              <div className={styles.versionWrapper}>
                <Space size={24}>
                  <img
                    onClick={() => {
                      setDocMenuVisible(true);
                    }}
                    src="https://gw.alipayobjects.com/zos/bmw-prod/1236f8bd-ab42-4e2a-a5af-de1bdb8e7266.svg"
                  />
                  <Select
                    className={styles.select}
                    value={currentVersion}
                    onChange={(v) => setCurrentVersion(v)}
                  >
                    {versions?.map((version: { branch: string }, index) => (
                      <Option value={version?.branch} key={index}>
                        {version?.branch}
                      </Option>
                    ))}
                  </Select>
                </Space>
              </div>
            </Spin>
          )}
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
        {isWide && (
          <Anchor
            affix={true}
            className={styles.apiAnchor}
            onChange={onAnchorLinkChange}
          >
            {content?.anchors?.map((item) => (
              <Link href={item.id} title={item.title} />
            ))}
          </Anchor>
        )}
      </Layout>
      {!isWide && (
        <Drawer
          className={styles.docMenu}
          placement={'left'}
          width={'80%'}
          visible={docMenuVisible}
          onClose={() => {
            setDocMenuVisible(false);
          }}
        >
          {getCategoryMenu()}
        </Drawer>
      )}
      <Footer className="docFooter" />
    </Layout>
  );
}
