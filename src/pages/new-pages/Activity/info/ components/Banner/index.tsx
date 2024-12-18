import { Button, message } from 'antd';
import cx from 'classnames';
import styles from './index.less';
import { ActivityWayOptionsEnum } from '@/constant';
import moment from 'moment';
import ActivityTag from '@/pages/new-pages/Activity/components/ActivityTag';
import { useMemo } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const Banner = ({ detail }: { detail: API.ActivityDetailVO }) => {
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/J0lRQb2Sx6wAAAAAAAAAAAAADh8WAQFr/original)';

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
    <div className={styles.bannerBox}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: background,
          height: '378px',
        }}
      >
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
                <div className={styles.InfoItem}>
                  <div className={styles.InfoItemLabel}>活动类型：</div>
                  <div className={styles.InfoItemVal}>
                    {ActivityWayOptionsEnum[detail?.activityWay || 'ONLINE']}
                  </div>
                </div>
                <div className={styles.InfoItem}>
                  <div className={styles.InfoItemLabel}>活动时间：</div>
                  <div className={styles.InfoItemVal}>
                    {detail?.startTime
                      ? moment(detail.startTime).format('YYYY-MM-DD HH:mm:ss')
                      : ''}
                    ～
                    {detail?.endTime
                      ? moment(detail.endTime).format('YYYY-MM-DD HH:mm:ss')
                      : ''}
                  </div>
                </div>
                <div className={styles.InfoItem}>
                  <div className={styles.InfoItemLabel}>
                    {detail?.activityWay === 'ONLINE'
                      ? '活动渠道：'
                      : '活动地点：'}
                  </div>
                  <div className={styles.InfoItemVal}>
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
                <Button
                  className={cx(styles.mainBtn, isDisable ? styles.ending : '')}
                  onClick={() => window.open(detail?.registrationUrl)}
                  disabled={isDisable}
                >
                  {getBtnText(detail?.activityState)}
                </Button>
              ) : null}
              <CopyToClipboard
                text={window.location.href}
                onCopy={() => {
                  message.success('分享链接已复制');
                }}
              >
                <Button className={styles.shareBtn}>分享</Button>
              </CopyToClipboard>

              {/* <div className={styles.shareCard}>
                <div className={styles.shareCardTitle}>分享活动</div>
                <div className={styles.shareCardSource}>微信扫码</div>
                <img src="" alt="" className={styles.shareCardCode} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
