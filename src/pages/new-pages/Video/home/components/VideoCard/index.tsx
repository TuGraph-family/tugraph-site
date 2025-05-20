import React from 'react';
import { PlaySquareOutlined } from '@ant-design/icons';
import styles from './index.less';
import { history } from 'umi';
import { historyPushLinkAt } from '@/util';

interface ITypeBlockProps {
  cardInfo: any;
}

const VideoCard: React.FC<ITypeBlockProps> = ({ cardInfo }) => {
  return (
    <div
      className={styles.videoCard}
      onClick={() =>
        history.push(historyPushLinkAt(`/video/info/${cardInfo.id}`))
      }
    >
      <div
        className={styles.main}
        style={{ backgroundImage: `url(${cardInfo.img})` }}
      >
        <div className={styles.videoInfo}>
          <div>
            <PlaySquareOutlined /> {cardInfo?.playCount}
          </div>
          <div>{cardInfo?.time}</div>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.title}>{cardInfo?.title}</div>
        <div className={styles.date}>{cardInfo?.date}</div>
      </div>
    </div>
  );
};

export default VideoCard;
