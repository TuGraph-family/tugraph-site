import { NewLayout } from '@/components/NewLayout';
import { Breadcrumb, Input, Pagination, Tabs } from 'antd';
import styles from './index.less';
import TypeTab from '@/components/TypeTab';
import { useImmer } from 'use-immer';
import VideoCard from '@/pages/new-pages/Video/home/components/VideoCard';
import { SearchOutlined } from '@ant-design/icons';
import { historyPushLinkAt } from '@/util';
import { history, useLocation } from 'umi';
import { useEffect } from 'react';
import SetCard from '@/pages/new-pages/Video/home/components/SetCard';

const VideoList = () => {
  const location = useLocation();
  console.log(location);
  const [state, setState] = useImmer({
    type: 'all',
    current: 1,
    product: 'all',
    pageSize: 10,
    total: 50,
    activeKey: 'video',
  });

  const { type, current, pageSize, total, product, activeKey } = state;

  useEffect(() => {
    const { query } = location;

    if (query.type) {
      onChangeType(query.type);
    }
    if (query.product) {
      onChangeProduct(query.product);
    }

    if (query.activeKey) {
      onChangeActiveKey(query.activeKey);
    }
  }, [location]);

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
    });
  };

  const items = [
    {
      label: '视频',
      key: 'video',
    },
    {
      label: '合集',
      key: 'collection',
    },
  ];

  const typeList = [
    {
      value: 'all',
      label: '全部',
    },
    {
      value: 'basic',
      label: '基础入门',
    },
    {
      value: 'advanced',
      label: '进阶教程',
    },
    {
      value: 'active',
      label: '活动回顾',
    },
  ];

  const productList = [
    {
      value: 'all',
      label: '全部',
    },
    {
      value: 'tugraphDB',
      label: 'Tugraph_DB',
    },
  ];

  const data = [
    {
      img: 'https://mdn.alipayobjects.com/huamei_tu4rvn/afts/img/A*UZYhTpJPZjQAAAAAAAAAAAAAep_eAQ/original',
      playCount: 560,
      time: '36:02',
      date: '2022-02-01',
      title: '基础入门',
      id: '1',
    },
    {
      img: 'https://mdn.alipayobjects.com/huamei_tu4rvn/afts/img/A*UZYhTpJPZjQAAAAAAAAAAAAAep_eAQ/original',
      playCount: 560,
      time: '36:02',
      date: '2022-02-01',
      title: '基础入门',
      id: '2',
    },
    {
      img: 'https://mdn.alipayobjects.com/huamei_tu4rvn/afts/img/A*UZYhTpJPZjQAAAAAAAAAAAAAep_eAQ/original',
      playCount: 560,
      time: '36:02',
      date: '2022-02-01',
      title: '基础入门',
      id: '3',
    },
    {
      img: 'https://mdn.alipayobjects.com/huamei_tu4rvn/afts/img/A*UZYhTpJPZjQAAAAAAAAAAAAAep_eAQ/original',
      playCount: 560,
      time: '36:02',
      date: '2022-02-01',
      title: '基础入门',
      id: '4',
    },
    {
      img: 'https://mdn.alipayobjects.com/huamei_tu4rvn/afts/img/A*UZYhTpJPZjQAAAAAAAAAAAAAep_eAQ/original',
      playCount: 560,
      time: '36:02',
      date: '2022-02-01',
      title: '基础入门',
      id: '5',
    },
  ];

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

  return (
    <NewLayout
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
            items={items}
            activeKey={activeKey}
            onChange={onChangeActiveKey}
            tabBarExtraContent={{
              right: (
                <Input
                  placeholder="请输入关键词"
                  className={styles.searchInput}
                  suffix={<SearchOutlined style={{ color: '#768191' }} />}
                />
              ),
            }}
          />
          <TypeTab
            typeList={typeList}
            current={type}
            onChangeType={onChangeType}
          />
          {activeKey === 'video' && (
            <TypeTab
              typeList={productList}
              current={product}
              onChangeType={onChangeProduct}
            />
          )}
          <div className={styles.videoList}>
            {data?.map((item) => {
              return activeKey === 'video' ? (
                <VideoCard cardInfo={item} key={item.id} />
              ) : (
                <SetCard />
              );
            })}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              paddingBottom: 40,
            }}
          >
            {true ? (
              <Pagination
                current={current}
                pageSize={pageSize}
                total={total}
                showSizeChanger={false}
                onChange={onChangePage}
              />
            ) : null}
          </div>
        </div>
      }
    />
  );
};

export default VideoList;
