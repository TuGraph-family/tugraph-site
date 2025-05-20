import { NewLayout } from '@/components/NewLayout';
import { Breadcrumb, Input, Pagination, Tabs } from 'antd';
import styles from './index.less';
import TypeTab from '@/components/TypeTab';
import { useImmer } from 'use-immer';
import VideoCard from '@/pages/new-pages/Video/home/components/VideoCard';
import { SearchOutlined } from '@ant-design/icons';
import { historyPushLinkAt } from '@/util';
import { history } from 'umi';

const VideoList = () => {
  const [state, setState] = useImmer({
    type: '1',
    current: 1,
    pageSize: 10,
    total: 50,
  });

  const { type, current, pageSize, total } = state;

  const onChangeType = (val: string) => {
    setState((draft) => {
      draft.type = val;
    });
  };

  const items = [
    {
      label: '视频',
      key: '1',
    },
    {
      label: '合集',
      key: '2',
    },
  ];

  const typeList = [
    {
      value: '1',
      label: '全部',
    },
    {
      value: '2',
      label: '测试谁是谁',
    },
    {
      value: '3',
      label: '啊的啊阿啊的',
    },
    {
      value: '4',
      label: '看了就看见',
    },
  ];

  const data = [
    {
      img: 'https://mdn.alipayobjects.com/huamei_tu4rvn/afts/img/A*UZYhTpJPZjQAAAAAAAAAAAAAep_eAQ/original',
      playCount: 560,
      time: '36:02',
      date: '2022-02-01',
      title: '基础入门',
      id: '123',
    },
    {
      img: 'https://mdn.alipayobjects.com/huamei_tu4rvn/afts/img/A*UZYhTpJPZjQAAAAAAAAAAAAAep_eAQ/original',
      playCount: 560,
      time: '36:02',
      date: '2022-02-01',
      title: '基础入门',
      id: '123',
    },
    {
      img: 'https://mdn.alipayobjects.com/huamei_tu4rvn/afts/img/A*UZYhTpJPZjQAAAAAAAAAAAAAep_eAQ/original',
      playCount: 560,
      time: '36:02',
      date: '2022-02-01',
      title: '基础入门',
      id: '123',
    },
    {
      img: 'https://mdn.alipayobjects.com/huamei_tu4rvn/afts/img/A*UZYhTpJPZjQAAAAAAAAAAAAAep_eAQ/original',
      playCount: 560,
      time: '36:02',
      date: '2022-02-01',
      title: '基础入门',
      id: '123',
    },
    {
      img: 'https://mdn.alipayobjects.com/huamei_tu4rvn/afts/img/A*UZYhTpJPZjQAAAAAAAAAAAAAep_eAQ/original',
      playCount: 560,
      time: '36:02',
      date: '2022-02-01',
      title: '基础入门',
      id: '123',
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
          <TypeTab
            typeList={typeList}
            current={type}
            onChangeType={onChangeType}
          />

          <div className={styles.videoList}>
            {data?.map((item) => {
              return <VideoCard cardInfo={item} key={item.id} />;
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
