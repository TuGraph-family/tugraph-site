import { NewLayout } from '@/components/NewLayout';
import SiteEmpty from '@/components/SiteEmpty';
import { useVideo } from '@/hooks/useVideo';
import Banner from '@/pages/new-pages/Video/home/components/Banner';
import TypeBlock from '@/pages/new-pages/Video/home/components/TypeBlock';
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
    <NewLayout
      headerBgStyles={{
        backgroundImage:
          'linear-gradient(rgb(225, 236, 255) 0%, rgb(227, 236, 255) 32%, #f7f8fa 100%)',
      }}
      mainStyles={{ background: '#f7f8fa' }}
      content={
        <>
          <Banner onSearch={onSearch} />
          <Spin spinning={loadingType || loadingList || loadingListCollection}>
            <div
              style={{
                width: 1200,
                margin: '-110px auto 0',
                paddingBottom: 64,
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
      }
    />
  );
};

export default VideoHome;
