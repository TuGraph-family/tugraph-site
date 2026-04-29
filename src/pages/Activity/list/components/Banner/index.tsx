import { Button, Calendar, Tooltip } from 'antd';
import cx from 'classnames';
import { history } from 'umi';
import styles from './index.less';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import moment from 'moment';
import { ActivityWayOptionsEnum } from '@/constant';
import { historyPushLinkAt, isBeforeTime } from '@/util';
import { useEffect, useState } from 'react';
import { useActivity } from '@/hooks/useActivity';
import ActivityTag from '@/pages/Activity/components/ActivityTag';
import { ACTIVITY_STATE_ENUM } from '@/pages/Activity/constants';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>活动</div>
      <div className={styles.desc}>tugraph社区活动、公告</div>
    </div>
  );
};

export default Banner;
