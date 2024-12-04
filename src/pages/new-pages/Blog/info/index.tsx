import { NewLayout } from '@/components/NewLayout';
import InfoContent from '@/pages/new-pages/Blog/info/components/InfoContent';
import styles from './index.less';
import InfoRight from '@/pages/new-pages/Blog/info/components/InfoRight';
import { useLocation } from 'umi';
import { useBlog } from '@/hooks/useBlog';
import { useEffect } from 'react';

const BlogInfo = () => {
  const location = useLocation();
  const id = Number(location.pathname.split('/')[3]);

  const { getDetail, getList, detail, list } = useBlog();

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
  }, [id]);

  return (
    <NewLayout
      content={
        <div className={styles.blogInfo} id={'blog-content'}>
          <InfoContent detail={detail} />
          <InfoRight
            detail={detail}
            list={list?.filter((item) => item?.id !== id)}
          />
        </div>
      }
      isFooter={false}
    />
  );
};

export default BlogInfo;
