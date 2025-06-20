import React from 'react';
import styles from './index.less';
import { history } from 'umi';
import { historyPushLinkAt } from '@/util';

interface IProps {
  cardInfo: Record<string, any>;
}
const SetCard: React.FC<IProps> = ({ cardInfo }) => {
  const renderImg = () => {
    const onlineVideos =
      cardInfo?.videoList?.filter((item) => item.status === 'ONLINE') || [];
    if (!onlineVideos?.length) return null;
    return (
      <>
        {onlineVideos?.splice(0, 3)?.map((item) => {
          return (
            <img
              key={item?.id}
              src={item?.pic}
              onClick={() =>
                history.push(historyPushLinkAt(`/video/info/${item.id}`))
              }
            />
          );
        })}
      </>
    );
  };

  return (
    <div className={styles.setCard}>
      <div className={styles.header}>
        <div className={styles.setName}>{cardInfo?.name}</div>
        <div className={styles.setLen}>
          {cardInfo?.videoList?.filter((item) => item.status === 'ONLINE')
            ?.length || 0}
          个视频
        </div>
      </div>
      <div className={styles.content}>{renderImg()}</div>
    </div>
  );
};

export default SetCard;
