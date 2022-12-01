import React from 'react';
import styles from './index.less';

export const SubTitle = ({
  title,
  style,
}: {
  title: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={styles.subTitleGroup} style={{ ...style }}>
      <div className={styles.subTitle}>{title}</div>
    </div>
  );
};
