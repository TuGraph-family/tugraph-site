import { Button, message } from 'antd';
import cx from 'classnames';
import styles from './index.less';
import { ActivityWayOptionsEnum } from '@/constant';
import moment from 'moment';
import ActivityTag from '@/pages/Activity/components/ActivityTag';
import { useMemo } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import MainButton from '@/components/MainButton';

const Banner = ({ detail }: { detail: API.ActivityDetailVO }) => {
  const isDisable = useMemo(() => {
    return ['PROGRESS', 'OVER'].includes(detail?.activityState || '');
  }, [detail]);

  const getBtnText = (status?: string) => {
    switch (status) {
      case 'PROGRESS':
        return '活动进行中';
      case 'OVER':
        return '活动已结束';
      case 'REGISTRATION_DURING':
        return '立即报名';
      default:
        return '';
    }
  };

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div
          className={styles.bannerLeft}
          style={{
            backgroundImage: `url(${detail?.frontCoverImage?.url})`,
          }}
        >
          <ActivityTag status={detail?.activityState} />
        </div>
        <div className={styles.bannerRight}>
          <div>
            <div className={styles.avtivityTitle}>{detail?.title}</div>
            <div className={styles.avtivityInfo}>
              <div className={styles.infoItem}>
                <div className={styles.infoItemLabel}>活动类型：</div>
                <div className={styles.infoItemVal}>
                  {ActivityWayOptionsEnum[detail?.activityWay || 'ONLINE']}
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoItemLabel}>活动时间：</div>
                <div className={styles.infoItemVal}>
                  {detail?.startTime
                    ? moment(detail.startTime).format('YYYY-MM-DD HH:mm:ss')
                    : ''}
                  ～
                  {detail?.endTime
                    ? moment(detail.endTime).format('YYYY-MM-DD HH:mm:ss')
                    : ''}
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoItemLabel}>
                  {detail?.activityWay === 'ONLINE'
                    ? '活动渠道：'
                    : '活动地点：'}
                </div>
                <div className={styles.infoItemVal}>
                  {detail?.activityWay === 'ONLINE'
                    ? detail?.activityChannel
                    : detail?.address}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            {(detail?.registrationUrl &&
              detail?.activityState === 'REGISTRATION_DURING') ||
            isDisable ? (
              <MainButton
                className={cx(styles.mainBtn, isDisable ? styles.ending : '')}
                onClick={() =>
                  !isDisable ? window.open(detail?.registrationUrl) : null
                }
                type="real"
                btnText={getBtnText(detail?.activityState)}
              />
            ) : null}
            <CopyToClipboard
              text={window.location.href}
              onCopy={() => {
                message.success('分享链接已复制');
              }}
            >
              <MainButton onClick={() => {}} type="illusory" btnText="分享" />
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
