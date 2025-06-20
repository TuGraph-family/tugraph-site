import React from 'react';
import { PlaySquareOutlined } from '@ant-design/icons';
import styles from './index.less';
import { history } from 'umi';
import { formatTime, historyPushLinkAt } from '@/util';
import moment from 'moment';

interface ITypeBlockProps {
  cardInfo: Record<string, any>;
}

const VideoCard: React.FC<ITypeBlockProps> = ({ cardInfo }) => {
  return (
    <div
      className={styles.videoCard}
      onClick={() =>
        history.push(historyPushLinkAt(`/video/info/${cardInfo.id}`))
      }
    >
      <div className={styles.main}>
        <img src={cardInfo.pic} alt="" />
        <div className={styles.videoInfo}>
          <div>
            <PlaySquareOutlined /> {cardInfo?.view}
          </div>
          <div>{formatTime(cardInfo?.duration)}</div>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.title}>{cardInfo?.name}</div>
        <div className={styles.date}>
          {moment(cardInfo?.updateTime).format('YYYY-MM-DD')}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
