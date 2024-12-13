import { historyPushLinkAt } from '@/util';
import styles from './index.less';
import { history } from 'umi';
import FooterInfo from '@/pages/new-pages/Blog/list/components/FooterInfo';

const BlogItem = ({ detail }: { detail: API.BlogListVO }) => {
  return (
    <div
      className={styles.blogItem}
      onClick={() => history.push(historyPushLinkAt(`/blog/info/${detail.id}`))}
    >
      <div className={styles.blogItemImg}>
        <img src={detail?.images?.[0]?.url || ''} alt="" />
      </div>

      <div className={styles.blogItemContent}>
        <div className={styles.blogItemTitle}>{detail?.title}</div>
        <div className={styles.blogItemDesc}>{detail?.digest}</div>
        <FooterInfo
          time={detail?.publishTime}
          tag={detail?.categories}
          creatorName={detail?.creatorName}
        />
      </div>
    </div>
  );
};

export default BlogItem;
