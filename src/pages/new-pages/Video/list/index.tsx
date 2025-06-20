import { NewLayout } from '@/components/NewLayout';
import { Breadcrumb, Input, Pagination, Spin, Tabs } from 'antd';
import styles from './index.less';
import TypeTab from '@/components/TypeTab';
import { useImmer } from 'use-immer';
import VideoCard from '@/pages/new-pages/Video/home/components/VideoCard';
import { SearchOutlined } from '@ant-design/icons';
import { historyPushLinkAt } from '@/util';
import { history, useLocation } from 'umi';
import { useEffect } from 'react';
import SetCard from '@/pages/new-pages/Video/home/components/SetCard';
import { useVideo } from '@/hooks/useVideo';
import SiteEmpty from '@/components/SiteEmpty';
import { ALL, TAB_ITEMS } from '@/pages/new-pages/Video/list/constant';

const VideoList = () => {
  const { query } = useLocation();
  const [state, setState] = useImmer({
    type: query?.type || 'all',
    current: 1,
    product: 'all',
    pageSize: 10,
    activeKey: query?.activeKey || 'video',
    keywords: '',
  });

  const { type, current, pageSize, product, activeKey, keywords } = state;

  const {
    getTypeList,
    vidoeTypes,
    collectionTypes,
    products,
    getList,
    getListCollection,
    total,
    list,
    loadingList,
    loadingListCollection,
  } = useVideo();

  useEffect(() => {
    getTypeList();
  }, []);

  const onChangeType = (val: string) => {
    setState((draft) => {
      draft.type = val;
    });
  };

  const onChangeProduct = (val: string) => {
    setState((draft) => {
      draft.product = val;
    });
  };

  const onChangeActiveKey = (val: string) => {
    setState((draft) => {
      draft.activeKey = val;
      draft.current = 1;
      draft.pageSize = 10;
      draft.keywords = '';
      draft.type = 'all';
      draft.product = 'all';
    });
  };

  const onChangePage = (page: number, pageSize: number) => {
    setState((draft) => {
      draft.current = page;
      draft.pageSize = pageSize;
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (activeKey === 'video') {
      getList({
        classification: type === 'all' ? undefined : type,
        products: product === 'all' ? undefined : product,
        current,
        size: pageSize,
        keywords,
      });
    } else {
      getListCollection({
        classification: type === 'all' ? undefined : type,
        current,
        size: pageSize,
        keywords,
      });
    }
  }, [type, product, current, pageSize, activeKey, keywords]);

  const onChangeKeywords = (e: any) => {
    setState((draft) => {
      draft.keywords = e.target.value;
    });
  };

  return (
    <NewLayout
      headerBgStyles={{
        backgroundColor: '#f7f8fa',
      }}
      mainStyles={{ background: '#f7f8fa' }}
      content={
        <div className={styles.content}>
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item
              onClick={() => history.push(historyPushLinkAt('/video/home'))}
            >
              视频中心
            </Breadcrumb.Item>
            <Breadcrumb.Item>全部视频</Breadcrumb.Item>
          </Breadcrumb>

          <Tabs
            items={TAB_ITEMS}
            activeKey={activeKey}
            onChange={onChangeActiveKey}
            tabBarExtraContent={{
              right: (
                <Input
                  placeholder="请输入关键词"
                  className={styles.searchInput}
                  suffix={<SearchOutlined style={{ color: '#768191' }} />}
                  onPressEnter={onChangeKeywords}
                  onBlur={onChangeKeywords}
                />
              ),
            }}
          />
          <TypeTab
            typeList={[
              ...ALL,
              ...(activeKey === 'video' ? vidoeTypes : collectionTypes),
            ]}
            current={type}
            onChangeType={onChangeType}
          />
          {activeKey === 'video' && (
            <TypeTab
              typeList={ALL.concat(products)}
              current={product}
              onChangeType={onChangeProduct}
            />
          )}
          <Spin spinning={loadingList || loadingListCollection}>
            <div
              className={styles.videoList}
              style={list?.length ? {} : { display: 'block' }}
            >
              {list?.length ? (
                <>
                  {list?.map((item) => {
                    return activeKey === 'video' ? (
                      <VideoCard cardInfo={item} key={item.id} />
                    ) : (
                      <SetCard cardInfo={item} key={item.id} />
                    );
                  })}
                </>
              ) : (
                <SiteEmpty text="暂无视频" />
              )}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingBottom: 40,
              }}
            >
              {total > 10 ? (
                <Pagination
                  current={current}
                  pageSize={pageSize}
                  total={total}
                  showSizeChanger={false}
                  onChange={onChangePage}
                />
              ) : null}
            </div>
          </Spin>
        </div>
      }
    />
  );
};

export default VideoList;
