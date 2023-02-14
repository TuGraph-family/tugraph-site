import React from 'react';
import styles from './index.less';
import cx from 'classnames';

export const SubTitle = ({
  title,
  style,
  className,
}: {
  title: string;
  style?: React.CSSProperties;
  className?: any;
}) => {
  return (
    <div className={cx(styles.subTitleGroup, className)} style={{ ...style }}>
      <div className={styles.subTitle}>{title}</div>
    </div>
  );
};
