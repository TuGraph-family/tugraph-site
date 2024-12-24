import { Button, Calendar, Tooltip } from 'antd';
import cx from 'classnames';
import { history } from 'umi';
import styles from './index.less';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import moment from 'moment';
import { ActivityWayOptionsEnum } from '@/constant';
import { historyPushLinkAt } from '@/util';
import { useEffect, useState } from 'react';
import { useActivity } from '@/hooks/useActivity';
import ActivityTag from '@/pages/new-pages/Activity/components/ActivityTag';
import { ACTIVITY_STATE_ENUM } from '@/pages/new-pages/Activity/constants';

const Banner = () => {
  const { getLastActicity, lastDetial } = useActivity();
  const [visible, setVisible] = useState(false);
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/bmXsSKHuSyoAAAAAAAAAAAAADh8WAQFr/original)';

  useEffect(() => {
    getLastActicity('REGISTRATION_DURING');
  }, []);

  const getTagStateColor = (state?: string) => {
    switch (state) {
      case 'REGISTRATION_DURING':
        return '#ff7500f2';
      case 'PROGRESS':
        return '#2e5dfef2';
      default:
        return '#00000033';
    }
  };
  const getStateColor = (state?: string) => {
    switch (state) {
      case 'REGISTRATION_DURING':
        return '#ff7500';
      case 'PROGRESS':
        return '#2e5dfe';
      default:
        return '#3f5380';
    }
  };
  const cellRender: any = (current) => {
    const startOfDayStartDate = moment(lastDetial?.startTime).endOf('day');
    const startOfDayEndDate = moment(lastDetial?.endTime).startOf('day');

    const isToDay = moment(current._d).isSame(moment(), 'day');
    const isBetween =
      moment(current._d).isSameOrAfter(startOfDayStartDate) &&
      moment(current._d).isSameOrBefore(startOfDayEndDate);
    const isStartandEnd = [
      moment(lastDetial?.startTime).format('YYYY-MM-DD'),
      moment(lastDetial?.endTime).format('YYYY-MM-DD'),
    ].includes(moment(current._d).format('YYYY-MM-DD'));
    const isStart =
      moment(lastDetial?.startTime).format('YYYY-MM-DD') ===
      moment(current._d).format('YYYY-MM-DD');

    let backgroundColor = getStateColor(lastDetial?.activityState) + '1a';

    if (isStartandEnd) {
      backgroundColor = getStateColor(lastDetial?.activityState);
    }

    return isStart ? (
      <Tooltip
        placement="topLeft"
        color="white"
        open={visible}
        overlayInnerStyle={{
          borderRadius: '4px',
        }}
        title={
          <div
            className={styles.activityTooltip}
            onMouseLeave={() => setVisible(false)}
          >
            <div
              className={styles.stateTag}
              style={{
                backgroundColor: getTagStateColor(lastDetial?.activityState),
              }}
            >
              {ACTIVITY_STATE_ENUM[lastDetial?.activityState]}
            </div>
            <div
              onClick={() =>
                history.push(
                  historyPushLinkAt('/activity/info/' + lastDetial?.id),
                )
              }
              className={styles.activityBtn}
            >
              {lastDetial?.title}
            </div>
          </div>
        }
      >
        <div
          className={cx(
            styles.fullCell,
            isToDay ? styles.today : '',
            isBetween ? styles.between : '',
            isStartandEnd ? styles.startandend : '',
          )}
          style={isBetween || isStartandEnd ? { backgroundColor } : {}}
          onMouseMove={() => setVisible(true)}
          id={'activityStart'}
        >
          {moment(current._d).format('DD')}
        </div>
      </Tooltip>
    ) : (
      <div
        className={cx(
          styles.fullCell,
          isToDay ? styles.today : '',
          isBetween ? styles.between : '',
          isStartandEnd ? styles.startandend : '',
        )}
        style={isBetween || isStartandEnd ? { backgroundColor } : {}}
        onMouseMove={() => setVisible(isBetween || isStartandEnd)}
      >
        {moment(current._d).format('DD')}
      </div>
    );
  };
  const headerRender = ({ value, onChange }) => {
    const month = value.month();

    const changeMonth = (newMonth) => {
      const now = value.clone().month(newMonth);
      onChange(now);
    };
    return (
      <div className={styles.calendarHeader}>
        <CaretLeftOutlined
          className={styles.left}
          onClick={() => changeMonth(month - 1)}
        />
        <div className={styles.month}>{month + 1}月</div>
        <CaretRightOutlined
          className={styles.right}
          onClick={() => changeMonth(month + 1)}
        />
      </div>
    );
  };

  return (
    <div className={styles.bannerBox}>
      <div
        className={styles.banner}
        style={{
          height: '340px',
        }}
      >
        <div
          className={styles.bannerContent}
          style={{ backgroundImage: background }}
        >
          {lastDetial?.title ? (
            <>
              <div className={styles.bannerLeft}>
                <div>
                  <div className={styles.avtivityTitle}>
                    {lastDetial?.title}
                  </div>
                  <div className={styles.avtivityInfo}>
                    <div className={styles.InfoItem}>
                      <div className={styles.InfoItemLabel}>活动类型：</div>
                      <div className={styles.InfoItemVal}>
                        {ActivityWayOptionsEnum[lastDetial?.activityWay]}
                      </div>
                    </div>
                    <div className={styles.InfoItem}>
                      <div className={styles.InfoItemLabel}>活动时间：</div>
                      <div className={styles.InfoItemVal}>
                        {lastDetial?.startTime
                          ? moment(lastDetial.startTime).format(
                              'YYYY-MM-DD HH:mm:ss',
                            )
                          : ''}
                        ～
                        {lastDetial?.endTime
                          ? moment(lastDetial.endTime).format(
                              'YYYY-MM-DD HH:mm:ss',
                            )
                          : ''}
                      </div>
                    </div>
                    <div className={styles.InfoItem}>
                      <div className={styles.InfoItemLabel}>
                        {' '}
                        {ActivityWayOptionsEnum[lastDetial?.activityWay]}：
                      </div>
                      <div className={styles.InfoItemVal}>
                        {lastDetial?.activityWay === 'ONLINE'
                          ? lastDetial?.activityChannel
                          : lastDetial?.address}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.footer}>
                  {lastDetial?.registrationUrl &&
                  lastDetial?.activityState === 'REGISTRATION_DURING' ? (
                    <Button
                      onClick={() => window.open(lastDetial?.registrationUrl)}
                      className={cx(styles.mainBtn)}
                    >
                      立即报名
                    </Button>
                  ) : null}
                </div>
              </div>

              <img
                src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/tOgeT70MA2MAAAAAAAAAAAAADh8WAQFr/original"
                className={styles.icon}
              />

              <div onMouseLeave={() => setVisible(false)}>
                <Calendar
                  defaultValue={moment(lastDetial?.startTime)}
                  className={styles.activityCalendar}
                  fullscreen={false}
                  dateFullCellRender={cellRender}
                  headerRender={headerRender}
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Banner;
