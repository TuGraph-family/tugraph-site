import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/new-pages/Video/home/components/Banner';
import SetCard from '@/pages/new-pages/Video/home/components/SetCard';
import TypeBlock from '@/pages/new-pages/Video/home/components/TypeBlock';
import { video } from '@/services/test';
import getBilibiliVideoInfo from '@/util/video-info';
import { useEffect } from 'react';
import { useRequest } from 'umi';

const VideoHome = () => {
  const BLOCK_LIST = [
    {
      type: 'basic',
      title: '基础入门',
      data: [
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
      ],
    },
    {
      type: 'advanced',
      title: '进阶教程',
      data: [
        {
          img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/HoTJQbMONBAAAAAAAAAAAAAAeh8WAQFr/original',
          playCount: 560,
          time: '36:02',
          date: '2022-02-01',
          title: '基础入门',
          id: '123',
        },
      ],
    },
    {
      type: 'active',
      title: '活动回顾',
      isSet: true,
      data: [
        {
          title: '测试一',
        },
        {
          title: '测试一',
        },
        {
          title: '测试一',
        },
        {
          title: '测试一',
        },
      ],
    },
  ];

  const { run: runVideoInfo } = useRequest(video, { manual: true });

  useEffect(() => {
    runVideoInfo().then((res) => console.log(res));
  }, []);

  return (
    <NewLayout
      content={
        <>
          <Banner />
          <div
            style={{ width: 1200, margin: '-110px auto 0', paddingBottom: 64 }}
          >
            {BLOCK_LIST.map((item, index) => {
              return <TypeBlock info={item} key={index} />;
            })}
          </div>
        </>
      }
    />
  );
};

export default VideoHome;
