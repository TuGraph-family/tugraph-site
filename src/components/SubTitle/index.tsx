import React from 'react';
import styles from './index.less';

export const SubTitle = ({ title }: { title: string }) => {
  return (
    <div className={styles.subTitleGroup}>
      <div className={styles.subTitle}>
        {title}
        <img src="https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*GV6SRawR_SgAAAAAAAAAAAAAARQnAQ" />
      </div>
      <div className={styles.subTitleBorderContainer}>
        <div className={styles.subTitleBorder} />
      </div>
    </div>
  );
};
