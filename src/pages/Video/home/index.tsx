import { NewLayout } from '@/components/NewLayout';
import SiteEmpty from '@/components/SiteEmpty';
import { useVideo } from '@/hooks/useVideo';
import Banner from '@/pages/Video/home/components/Banner';
import TypeBlock from '@/pages/Video/home/components/TypeBlock';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';

const VideoHome = () => {
  const [keyword, setKeyword] = useState('');

  const {
    getTypeList,
    vidoeTypes,
    loadingType,
    loadingList,
    loadingListCollection,
  } = useVideo();

  useEffect(() => {
    getTypeList();
  }, []);

  const onSearch = (value: string) => {
    setKeyword(value);
  };

  return (
    <>
      <Banner onSearch={onSearch} />
      <Spin spinning={loadingType || loadingList || loadingListCollection}>
        <div
          style={{
            padding: '0 24px 64px',
          }}
        >
          {vidoeTypes?.length ? (
            <>
              {vidoeTypes.map((item, idx) => {
                return (
                  <TypeBlock
                    classification={item.value}
                    key={item.value}
                    keywords={keyword}
                    activeKey="video"
                  />
                );
              })}
            </>
          ) : (
            <SiteEmpty text="暂无视频" />
          )}
          <TypeBlock
            classification={'活动回顾'}
            activeKey="collection"
            keywords={keyword}
          />
        </div>
      </Spin>
    </>
  );
};

export default VideoHome;
