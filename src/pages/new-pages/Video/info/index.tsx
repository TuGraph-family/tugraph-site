import { NewLayout } from '@/components/NewLayout';
import styles from './index.less';
import {
  AlignCenterOutlined,
  FieldTimeOutlined,
  LogoutOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Tabs } from 'antd';
import cx from 'classnames';
import { useImmer } from 'use-immer';

const VideoInfo = () => {
  const [state, setState] = useImmer({
    activeKey: '1',
    videoId: '0',
  });

  const { activeKey, videoId } = state;
  const videoList = [
    {
      title: '撒大大大撒大dasd',
      url: '//player.bilibili.com/player.html?isOutside=true&aid=114357782517600&bvid=BV1dD5rz8E46&cid=29478946308&p=1',
      id: '1',
      time: '30:22',
    },
    {
      title: '测试测试测试从草草收场',
      url: '//player.bilibili.com/player.html?isOutside=true&aid=114370231208827&bvid=BV1JBLwzFEwS&cid=29520232809&p=1',
      id: '2',
      time: '30:22',
    },
  ];

  const items = [
    {
      label: '合集目录',
      key: '1',
      children: (
        <div>
          {videoList?.map((item) => {
            return (
              <div
                className={cx(
                  styles.videoItem,
                  videoId === item.id ? styles.activeVideo : '',
                )}
                onClick={() => {
                  setState((draft) => {
                    draft.videoId = item.id;
                  });
                }}
              >
                <div className={styles.videoTitle}>
                  {videoId === item.id ? <AlignCenterOutlined /> : null}
                  {item?.title}
                </div>
                <div className={styles.videoTime}>{item?.time}</div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      label: '合集介绍',
      key: '2',
      children: (
        <div>
          <h2>2024 TuGraph Meetup</h2>
          <p>
            这是合集介绍这是合集介绍，这是合集介绍这是合集介绍，这是合集介绍这是合集介绍，这是合集介绍这是合集介绍，这是合集介绍这是合集介绍，这是合集介绍这是合集介绍，这是合集介绍这是合集介绍，这是合集介绍这是合集介绍，这是合集介绍这是合集介绍，这是合集介绍这是合集介绍，这是合集介绍这是合集介绍，这是合集介绍这是合集介绍。
          </p>
        </div>
      ),
    },
    {
      label: '视频简介',
      key: '3',
      children: (
        <div>
          这是视频介绍这是视频介绍，这是视频介绍这是视频介绍，这是视频介绍这是视频介绍，这是视频介绍这是视频介绍，这是视频介绍这是视频介绍，这是视频介绍这是视频介绍，这是视频介绍这是视频介绍。
        </div>
      ),
    },
  ];

  return (
    <NewLayout
      headerBgStyles={{
        backgroundImage: `linear-gradient(
                180deg,
                #e1ecff 0%,
                #e3ecff 32%,
                  #fff 100%
              )`,
      }}
      mainStyles={{
        background: '#fff',
      }}
      content={
        <div className={styles.info}>
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item>视频中心</Breadcrumb.Item>
            <Breadcrumb.Item>
              图技术应用场景实战Meetup：《TuGraph
              DataFlow实时图计算在蚂蚁的应用》潘臻轩
            </Breadcrumb.Item>
          </Breadcrumb>
          <h1 className={styles.title}>
            图技术应用场景实战Meetup：《TuGraph
            DataFlow实时图计算在蚂蚁的应用》潘臻轩
          </h1>
          <div className={styles.desc}>所属合集：2024 TuGraph Meetup</div>

          <div className={styles.video}>
            <div className={styles.videoLeft}>
              <iframe
                src={
                  videoList?.find((item) => item.id === videoId)?.url +
                  '&muted=false&autoplay=0'
                }
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
              ></iframe>
              <div className={styles.videoFooter}>
                <div>
                  <LogoutOutlined />
                  分享
                </div>
                <div>
                  <PlaySquareOutlined /> 555 <FieldTimeOutlined /> 2022-2-22
                </div>
              </div>
            </div>
            <div className={styles.videoRight}>
              <Tabs
                items={items}
                activeKey={activeKey}
                onChange={(key) => {
                  setState((draft) => {
                    draft.activeKey = key;
                  });
                }}
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default VideoInfo;
