import { ArrowRightOutlined } from '@ant-design/icons';
import {
  Affix,
  Anchor,
  Drawer,
  Layout,
  Menu,
  MenuProps,
  Select,
  Space,
  Spin,
  Tag,
} from 'antd';
import { map } from 'lodash';
import moment from 'moment';
import React from 'react';
import HTMLRenderer from 'react-html-renderer';
import { useMedia } from 'react-use';
import { history, useIntl, useLocation } from 'umi';

import styles from './doc.less';
import { docDetailTranslator, versionListTranslator } from '@/utils';
import { CategoryItem, DocContent } from '@/interface';
import { useGetZHDocsInfo } from '@/hooks/useGetZHDocsInfo';
import { useGetENDocsInfo } from '@/hooks/useGetENDocsInfo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DEFAULT_LOCAL } from '@/constant';
import { getSearch } from '@/util';

const { Link } = Anchor;

const { Content, Sider } = Layout;
const { Option } = Select;

export default function DocPage() {
  const intl = useIntl();
  const location = useLocation();
  const isWide = useMedia('(min-width: 767.99px)', true);
  const { search } = location;
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;
  const useGetDocsInfo = lang === 'zh-CN' ? useGetZHDocsInfo : useGetENDocsInfo;
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
    }
    return items[0].id;
  };

  const dateFormat = (dateString?: string) => {
    if (!dateString) {
      return '';
    }
    return moment(new Date(dateString)).format('YYYY-MM-DD HH:MM:SS');
  };

  React.useEffect(() => {
    const { version, id } = location.query;
    getVersions().then((res: any) => {
      const versionList =
        lang === 'zh-CN'
          ? versionListTranslator(res?.data)
          : res?.data?.versionList;
      setVersions(versionList);
      if (version && id) {
        setCurrentVersion(version);
      } else {
        setCurrentVersion(versionList[0]);
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
    getDocDetail({ id: currentCategory }).then((res: any) => {
      setContent(lang === 'zh-CN' ? res : docDetailTranslator(res?.data));
      scrollTo(0, 0);
    });
  }, [currentCategory]);

  const transformCategoryList = (items: CategoryItem[]): MenuProps['items'] => {
    return [
      ...map(items, (item: CategoryItem) => {
        const children = item?.children || [];
        return {
          key: item.id,
          label: item.fileName,
          children:
            children?.length > 0 ? transformCategoryList(children) : undefined,
        };
      }),
    ];
  };

  const getCategoryMenu = () => (
    <Menu
      mode="inline"
      selectedKeys={[currentCategory]}
      style={{ height: '100%', borderRight: 0 }}
      items={items}
      onSelect={({ key }) => {
        if (key !== 'v 3.5.0') {
          setCurrentCategory(key);
        }
      }}
    />
  );

  const items = [
    ...[
      !!currentVersion && {
        key: 'v 3.5.0',
        label: (
          <div
            className={styles.menuTag}
            onClick={() => {
              if (lang === 'zh-CN') {
                window.open(
                  'https://tugraph-db.readthedocs.io/zh_CN/latest/1.guide.html',
                );
              } else {
                window.open(
                  'https://tugraph-db.readthedocs.io/en/latest/1.guide.html',
                );
              }
            }}
          >
            <span>{intl.formatMessage({ id: 'doc.menu' })}</span>
            <Tag>NEW</Tag>
            <ArrowRightOutlined />
          </div>
        ),
      },
    ],
    ...(transformCategoryList(categoryList) || []),
  ];

  // TODO 锚点滚动
  const onAnchorLinkChange = (activeLink: string) => {};

  return (
    <Layout>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <Layout style={{ background: '#fff' }}>
        {isWide && (
          <Affix offsetTop={0}>
            <Sider className={styles.sideWrapper} theme="light" width={243}>
              <Spin spinning={!currentVersion}>
                <Select
                  style={{
                    width: '180px',
                    textAlign: 'left',
                    margin: '24px',
                  }}
                  value={currentVersion}
                  onChange={(v) => {
                    setCurrentVersion(v);
                  }}
                >
                  {map(versions, (version: string, index: number) => (
                    <Option value={version} key={index}>
                      {version}
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
            <Spin spinning={!currentVersion}>
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
                    {map(versions, (version: string, index: number) => (
                      <Option value={version} key={index}>
                        {version}
                      </Option>
                    ))}
                  </Select>
                </Space>
              </div>
            </Spin>
          )}
          <Spin spinning={!content}>
            <h1>{content?.title ?? content?.fileName}</h1>
            <div>
              {(content?.updated_at ?? content?.docGmtModified) && (
                <span className={styles.updateTimeLabel}>
                  {intl.formatMessage({ id: 'doc.update.time' })}
                </span>
              )}
              <span className={styles.updateTime}>
                {dateFormat(content?.updated_at ?? content?.docGmtModified)}
              </span>
            </div>
            <HTMLRenderer html={content?.body_html ?? content?.docContent} />
          </Spin>
        </Content>
        {isWide && (
          <Anchor
            affix={true}
            className={styles.apiAnchor}
            onChange={onAnchorLinkChange}
          >
            {map(content?.anchors, (item: { id: string; title: string }) => (
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
          open={docMenuVisible}
          onClose={() => {
            setDocMenuVisible(false);
          }}
        >
          {getCategoryMenu()}
        </Drawer>
      )}
      <div className={styles.docFooter}>
        <Footer />
      </div>
    </Layout>
  );
}
