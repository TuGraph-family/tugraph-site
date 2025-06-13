import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import styles from './index.less';
import { SubTitle } from '@/components/SubTitle';
import VideoCard from '@/pages/new-pages/Video/home/components/VideoCard';
import SetCard from '@/pages/new-pages/Video/home/components/SetCard';
import { historyPushLinkAt } from '@/util';
import { history } from 'umi';

interface ITypeBlockProps {
  info?: any;
}

const TypeBlock: React.FC<ITypeBlockProps> = ({ info }) => {
  const { title, data, isSet = false, type } = info || {};
  return (
    <div className={styles['type-block']}>
      <SubTitle
        title={title}
        style={{
          margin: '64px 0 40px',
        }}
      />
      <div className={styles['type-block-content']}>
        {data?.splice(0, 4)?.map((cardInfo: any, index: number) => {
          return isSet ? (
            <SetCard />
          ) : (
            <VideoCard key={index} cardInfo={cardInfo} />
          );
        })}
      </div>
      <div
        className={styles['type-block-more']}
        onClick={() =>
          history.push(
            historyPushLinkAt(
              `/video/list?activeKey=${
                isSet ? 'collection' : 'video'
              }&type=${type}`,
            ),
          )
        }
      >
        更多视频 <RightOutlined />
      </div>
    </div>
  );
};

export default TypeBlock;
