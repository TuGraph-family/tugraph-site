import { NewLayout } from '@/components/NewLayout';
import styles from './index.less';
import {
  FieldTimeOutlined,
  LogoutOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';
import { Breadcrumb, message, Spin, Tabs } from 'antd';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import { useLocation, history } from 'umi';
import { useEffect, useMemo } from 'react';
import { useVideo } from '@/hooks/useVideo';
import { isEmpty } from 'lodash';
import moment from 'moment';
import { formatTime, historyPushLinkAt } from '@/util';
import CopyToClipboard from 'react-copy-to-clipboard';

const VideoInfo = () => {
  const location = useLocation();
  const id = Number(location.pathname.split('/')[3]);
  const [state, setState] = useImmer({
    activeKey: 'menu',
    videoId: id,
    videoDetail: {},
    collectionDetail: {},
  });

  const { activeKey, videoId, videoDetail, collectionDetail } = state;
  const { getList, getListCollection, loadingList, loadingListCollection } =
    useVideo();

  const onInit = async () => {
    const res = await getList(
      {
        id: id,
        current: 1,
        size: 1,
      },
      true,
    );

    setState((draft) => {
      draft.videoDetail = res?.[0] || {};
    });
    if (res?.[0]?.collectionId) {
      const collection = await getListCollection(
        {
          id: res[0].collectionId,
          current: 1,
          size: 1,
        },
        true,
      );

      setState((draft) => {
        draft.collectionDetail = collection?.[0] || {};
      });
    } else {
      setState((draft) => {
        draft.activeKey = 'video_des';
      });
    }
  };

  useEffect(() => {
    if (id) {
      onInit();
    }
  }, [id]);

  const items = useMemo(() => {
    const newItems = [
      {
        label: '视频简介',
        key: 'video_des',
        children: <div>{videoDetail?.description}</div>,
      },
    ];

    if (!isEmpty(collectionDetail)) {
      const onlineVideos = collectionDetail?.videoList?.filter(
        (item) => item.status === 'ONLINE',
      );
      newItems.unshift(
        {
          label: '合集目录',
          key: 'menu',
          children: (
            <div>
              {onlineVideos?.map((item) => {
                return (
                  <div
                    className={cx(
                      styles.videoItem,
                      videoId === item.id ? styles.activeVideo : '',
                    )}
                    onClick={() => {
                      setState((draft) => {
                        draft.videoId = item.id;
                        draft.videoDetail = item;
                      });
                    }}
                  >
                    <div className={styles.videoTitle}>
                      {videoId === item.id ? (
                        <img
                          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/Zkq2RJNHiRkAAAAAD1AAAAgAeh8WAQFr/original"
                          className={styles.playing}
                        />
                      ) : null}
                      {item?.name}
                    </div>
                    <div className={styles.videoTime}>
                      {formatTime(item?.duration)}
                    </div>
                  </div>
                );
              })}
            </div>
          ),
        },
        {
          label: '合集介绍',
          key: 'collection_des',
          children: (
            <div>
              <h2>{collectionDetail?.name}</h2>
              <p>{collectionDetail?.description}</p>
            </div>
          ),
        },
      );
    }

    return newItems;
  }, [videoDetail, collectionDetail, videoId]);

  const iframeUrl = useMemo(() => {
    const url = videoDetail?.url;
    return url ? `${url}&muted=0&autoplay=1&enable_autoplay=1` : '';
  }, [videoDetail, videoId]);

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
        <Spin spinning={loadingList || loadingListCollection}>
          <div className={styles.info}>
            <Breadcrumb className={styles.breadcrumb}>
              <Breadcrumb.Item
                onClick={() => history.push(historyPushLinkAt('/video/home'))}
              >
                视频中心
              </Breadcrumb.Item>
              <Breadcrumb.Item>{videoDetail?.name}</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className={styles.title}>{videoDetail?.name}</h1>
            {isEmpty(collectionDetail) ? null : (
              <div className={styles.collection}>
                所属合集：{collectionDetail?.name}
              </div>
            )}

            <div className={styles.video}>
              <div className={styles.videoLeft}>
                <iframe
                  style={{ overflow: 'hidden' }}
                  src={iframeUrl}
                  border="0"
                  frameborder="no"
                  framespacing="0"
                  allowfullscreen="true"
                />
                <div className={styles.videoFooter}>
                  <CopyToClipboard
                    text={`${window.location.origin}/video/info/${videoId}`}
                    onCopy={() => {
                      message.success('复制成功');
                    }}
                  >
                    <div>
                      <LogoutOutlined style={{ marginRight: 7 }} />
                      分享
                    </div>
                  </CopyToClipboard>

                  <div>
                    <PlaySquareOutlined /> {videoDetail?.view || 0}{' '}
                    <FieldTimeOutlined style={{ marginLeft: 19 }} />{' '}
                    {moment(videoDetail?.updateTime).format('YYYY-MM-DD')}
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
        </Spin>
      }
    />
  );
};

export default VideoInfo;
