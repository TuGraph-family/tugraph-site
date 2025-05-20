import React from 'react';
import styles from './index.less';

const SetCard: React.FC = () => {
  return (
    <div className={styles.setCard}>
      <div className={styles.header}>
        <div className={styles.setName}>2023图智能论坛</div>
        <div className={styles.setLen}>4个视频</div>
      </div>
      <div className={styles.content}>
        <img src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/HoTJQbMONBAAAAAAAAAAAAAAeh8WAQFr/original" />
        <img src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/HoTJQbMONBAAAAAAAAAAAAAAeh8WAQFr/original" />
        <img src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/HoTJQbMONBAAAAAAAAAAAAAAeh8WAQFr/original" />
      </div>
    </div>
  );
};

export default SetCard;
