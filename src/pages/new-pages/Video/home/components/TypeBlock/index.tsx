import React, { useEffect, useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import styles from './index.less';
import { SubTitle } from '@/components/SubTitle';
import VideoCard from '@/pages/new-pages/Video/home/components/VideoCard';
import SetCard from '@/pages/new-pages/Video/home/components/SetCard';
import { historyPushLinkAt } from '@/util';
import { history } from 'umi';
import { useVideo } from '@/hooks/useVideo';

interface ITypeBlockProps {
  classification?: string;
  keywords?: string;
  activeKey?: string;
}

const TypeBlock: React.FC<ITypeBlockProps> = ({
  classification,
  keywords = '',
  activeKey,
}) => {
  const [data, setData] = useState([]);

  const { getList, getListCollection } = useVideo();

  const onInit = async (params: Record<string, any>) => {
    try {
      let res: any = [];
      if (activeKey === 'collection') {
        res = await getListCollection(params, true);
      } else {
        res = await getList(params, true);
      }
      setData(res || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onInit({ classification, keywords, current: 1, size: 4 });
  }, [classification, keywords]);

  return (
    <>
      {data?.length ? (
        <div className={styles['type-block']} key={keywords}>
          <SubTitle
            title={classification || ''}
            style={{
              margin: '64px 0 40px',
            }}
          />
          <div className={styles['type-block-content']}>
            {data?.map((cardInfo: any) => {
              return activeKey === 'collection' ? (
                <SetCard key={cardInfo.id} cardInfo={cardInfo} />
              ) : (
                <VideoCard key={cardInfo.id} cardInfo={cardInfo} />
              );
            })}
          </div>
          <div
            className={styles['type-block-more']}
            onClick={() =>
              history.push(
                historyPushLinkAt(
                  `/video/list?activeKey=${activeKey}&type=${classification}`,
                ),
              )
            }
          >
            更多视频 <RightOutlined />
          </div>
        </div>
      ) : null}
      {}
    </>
  );
};

export default TypeBlock;
