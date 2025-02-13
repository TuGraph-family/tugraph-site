import { NewLayout } from '@/components/NewLayout';
import InfoContent from '@/pages/new-pages/Blog/info/components/InfoContent';
import styles from './index.less';
import InfoRight from '@/pages/new-pages/Blog/info/components/InfoRight';
import { useLocation } from 'umi';
import { useBlog } from '@/hooks/useBlog';
import { useEffect, useMemo } from 'react';
import { Spin } from 'antd';
import { isBeforeTime, tracertBPos } from '@/util';

const BlogInfo = () => {
  const location = useLocation();
  const id = Number(location.pathname.split('/')[3]);

  const { getDetail, getList, detail, list, getDetailLoading } = useBlog();

  const onscrollTop = () => {
    const element = document.getElementById('blog-content');
    if (element) {
      element.scrollTop = 0;
    }
  };

  const isOldBlog = useMemo(() => {
    return isBeforeTime(detail?.updateTime);
  }, [detail]);

  useEffect(() => {
    tracertBPos('b106258');
    getDetail({
      id,
    });
    getList({
      current: 1,
      size: 5,
      state: 'PUBLISHED',
      sortMap: {
        publish_time: false,
      },
    });
    onscrollTop();
  }, [id]);

  return (
    <NewLayout
      headerBgStyles={{
        backgroundImage:
          'linear-gradient(rgb(225, 236, 255) 0%, rgb(227, 236, 255) 32%, #FFF 100%)',
      }}
      content={
        <Spin spinning={getDetailLoading}>
          <div className={styles.blogInfo} id={'blog-content'}>
            <InfoContent detail={detail} isOldBlog={isOldBlog} />
            <InfoRight
              detail={detail}
              list={list?.filter((item) => item?.id !== id)}
              isOldBlog={isOldBlog}
            />
          </div>
        </Spin>
      }
      isFooter={false}
    />
  );
};

export default BlogInfo;
