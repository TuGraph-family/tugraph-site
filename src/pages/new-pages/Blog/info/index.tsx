import { NewLayout } from '@/components/NewLayout';
import InfoContent from '@/pages/new-pages/Blog/info/components/InfoContent';
import styles from './index.less';
import InfoRight from '@/pages/new-pages/Blog/info/components/InfoRight';
import { useLocation } from 'umi';
import { useBlog } from '@/hooks/useBlog';
import { useEffect } from 'react';
import { Spin } from 'antd';

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

  useEffect(() => {
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
      content={
        <Spin spinning={getDetailLoading}>
          <div className={styles.blogInfo} id={'blog-content'}>
            <InfoContent detail={detail} />
            <InfoRight
              detail={detail}
              list={list?.filter((item) => item?.id !== id)}
            />
          </div>
        </Spin>
      }
      isFooter={false}
    />
  );
};

export default BlogInfo;
