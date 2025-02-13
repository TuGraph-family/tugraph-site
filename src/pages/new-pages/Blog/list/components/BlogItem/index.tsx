import { historyPushLinkAt } from '@/util';
import styles from './index.less';
import { history } from 'umi';
import FooterInfo from '@/pages/new-pages/Blog/list/components/FooterInfo';

const BlogItem = ({
  detail,
  isVisibleBoreder,
}: {
  detail: API.BlogListVO;
  isVisibleBoreder: boolean;
}) => {
  return (
    <div
      className={styles.blogItem}
      onClick={() => history.push(historyPushLinkAt(`/blog/info/${detail.id}`))}
      style={isVisibleBoreder ? { borderBottom: 'none' } : {}}
    >
      <div className={styles.blogItemImg}>
        <img src={detail?.images?.[0]?.url || ''} alt="" />
      </div>

      <div className={styles.blogItemContent}>
        <div className={styles.blogItemText}>
          <div className={styles.blogItemTitle}>{detail?.title}</div>
          <div className={styles.blogItemDesc}>{detail?.digest}</div>
        </div>

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
