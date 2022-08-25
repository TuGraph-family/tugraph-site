import React from 'react';
import styles from './index.less';

export const SubTitle = ({ title }: { title: string; showIcon?: boolean }) => {
  return (
    <div className={styles.subTitleGroup}>
      <div className={styles.subTitle}>{title}</div>
      <div className={styles.subTitleBorderContainer}>
        <div className={styles.subTitleBorder} />
      </div>
    </div>
  );
};
