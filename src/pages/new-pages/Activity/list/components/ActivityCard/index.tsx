import { historyPushLinkAt } from '@/util';
import styles from './index.less';
import { EnvironmentOutlined, PlaySquareOutlined } from '@ant-design/icons';
import { history } from 'umi';

const ActivityCard = () => {
  return (
    <div
      className={styles.activityCard}
      onClick={() => history.push(historyPushLinkAt('/activity/info'))}
    >
      <div className={styles.activityImg}>
        <div className={styles.activityTag}>报名中</div>
      </div>
      <div className={styles.activityInfo}>
        <div className={styles.activityTitle}>
          <div className={styles.title}>
            新一代数据底座，来外滩大会解锁图啊啊啊啊啊asides
          </div>
          <div className={styles.tag}>含资料</div>
        </div>
        <div className={styles.activityTime}>时间：2024-09-07～2024-09-09</div>
        <div className={styles.activityLocation}>
          线下活动｜ <PlaySquareOutlined />
          上海·黄浦世博园撒打算大撒打算大撒打算大撒打算大
        </div>
        <div className={styles.btn}>立即报名</div>
      </div>
    </div>
  );
};

export default ActivityCard;
