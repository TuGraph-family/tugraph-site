import { Button, Calendar, Space, Tooltip } from 'antd';
import cx from 'classnames';
import { history } from 'umi';
import styles from './index.less';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import moment from 'moment';
import { ActivityWayOptionsEnum } from '@/constant';
import { historyPushLinkAt } from '@/util';
import { useEffect } from 'react';
import { useActivity } from '@/hooks/useActivity';

const Banner = () => {
  const { getLastActicity, lastDetial } = useActivity();

  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/mWlxRYlT07oAAAAAAAAAAAAADh8WAQFr/fmt.avif)';

  useEffect(() => {
    getLastActicity();
  }, []);
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

    console.log(
      'isBetween',
      moment(current._d).format('YYYY-MM-DD'),
      isStartandEnd,
    );

    return !(isBetween || isStartandEnd) ? (
      <div className={cx(styles.fullCell, isToDay ? styles.today : '')}>
        {moment(current._d).format('DD')}
      </div>
    ) : (
      <Tooltip
        placement="topLeft"
        color="white"
        title={
          <Space>
            <a
              onClick={() =>
                history.push(
                  historyPushLinkAt('/activity/info/' + lastDetial?.id),
                )
              }
            >
              {lastDetial?.title}
            </a>
          </Space>
        }
      >
        <div
          className={cx(
            styles.fullCell,
            isToDay ? styles.today : '',
            isBetween ? styles.between : '',
            isStartandEnd ? styles.startandend : '',
          )}
        >
          {moment(current._d).format('DD')}
        </div>
      </Tooltip>
    );
  };
  const headerRender = ({ value, onChange }) => {
    const month = value.month();

    // onChange(11);
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
          backgroundImage: background,
          height: '340px',
        }}
      >
        <div className={styles.bannerContent}>
          <div className={styles.bannerLeft}>
            <div>
              <div className={styles.avtivityTitle}>{lastDetial?.title}</div>
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
                      ? moment(lastDetial.endTime).format('YYYY-MM-DD HH:mm:ss')
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
              {lastDetial?.registrationUrl ? (
                <Button
                  onClick={() => window.open(lastDetial?.registrationUrl)}
                  className={cx(styles.mainBtn)}
                >
                  立即报名
                </Button>
              ) : null}
            </div>
          </div>

          <Calendar
            value={moment(lastDetial?.startTime)}
            className={styles.activityCalendar}
            fullscreen={false}
            dateFullCellRender={cellRender}
            headerRender={headerRender}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
