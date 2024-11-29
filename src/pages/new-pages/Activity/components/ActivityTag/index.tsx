import cx from 'classnames';
import React from 'react';
import styles from './index.less';

interface IProps {
  status?: string;
}
const ActivityTag: React.FC<IProps> = ({ status }) => {
  if (!['PROGRESS', 'OVER', 'REGISTRATION_DURING'].includes(status || '')) {
    return null;
  }
  const getTagText = () => {
    switch (status) {
      case 'PROGRESS':
        return '进行中';
      case 'OVER':
        return '已结束';
      default:
        return '报名中';
    }
  };
  return (
    <div
      className={cx(
        styles.activityTag,
        status === 'PROGRESS' ? styles.progress : '',
        status === 'OVER' ? styles.over : '',
      )}
    >
      {getTagText()}
    </div>
  );
};

export default ActivityTag;
