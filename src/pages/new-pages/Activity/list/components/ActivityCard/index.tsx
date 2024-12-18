import { historyPushLinkAt } from '@/util';
import styles from './index.less';
import { EnvironmentOutlined, PlaySquareOutlined } from '@ant-design/icons';
import { history } from 'umi';
import { ActivityWayOptionsEnum } from '@/constant';
import moment from 'moment';
import ActivityTag from '@/pages/new-pages/Activity/components/ActivityTag';

const ActivityCard = ({ detail }: { detail: API.ActivityListVO }) => {
  const isOnline = detail?.activityWay === 'ONLINE';

  return (
    <div
      className={styles.activityCard}
      onClick={() =>
        history.push(historyPushLinkAt('/activity/info/' + detail?.id))
      }
    >
      <div
        className={styles.activityImg}
        style={{ backgroundImage: `url(${detail?.backgroundImage?.url})` }}
      >
        <ActivityTag status={detail?.activityState} />
      </div>
      <div className={styles.activityInfo}>
        <div className={styles.activityTitle}>
          <div className={styles.title}>{detail?.title}</div>
          {detail?.activityResourceFlag ? (
            <div className={styles.tag}>含资料</div>
          ) : null}
        </div>
        <div className={styles.activityTime}>
          时间：
          {detail?.startTime
            ? moment(detail.startTime).format('YYYY-MM-DD HH:mm:ss')
            : ''}
          ～
          {detail?.endTime
            ? moment(detail.endTime).format('YYYY-MM-DD HH:mm:ss')
            : ''}
        </div>
        <div className={styles.activityLocation}>
          {ActivityWayOptionsEnum[detail?.activityWay || 'ONLINE']}｜{' '}
          {isOnline ? <PlaySquareOutlined /> : <EnvironmentOutlined />}{' '}
          {isOnline
            ? detail?.activityChannel
            : `${detail?.province}·${detail?.address}`}
        </div>
        <div className={styles.btn}>
          {detail?.activityState === 'REGISTRATION_DURING'
            ? '立即报名'
            : '查看详情'}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
