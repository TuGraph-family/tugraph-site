import styles from './index.less';
import { ClockCircleOutlined, TagOutlined } from '@ant-design/icons';
const FooterInfo = () => {
  return (
    <div className={styles.blogItemFooter}>
      <div>
        <div className={styles.avatar}></div>
        <div>发布作者</div>
      </div>
      <div>
        <TagOutlined className={styles.icon} />
        <div>竞赛</div>
      </div>
      <div>
        <ClockCircleOutlined className={styles.icon} />
        <div> 2024-07-16 09:02</div>
      </div>
    </div>
  );
};

export default FooterInfo;
