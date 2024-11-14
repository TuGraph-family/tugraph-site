import { ArrowRightOutlined } from '@ant-design/icons';
import styles from './index.less';

const UserBox = () => {
  return (
    <div className={styles.userBox}>
      <div className={styles.title}>代表用户</div>
      <div className={styles.userImgList}>
        <img
          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/dctDTYIXmsoAAAAAAAAAAAAADh8WAQFr/original"
          alt=""
          className={styles.userImg}
        />
        <img
          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/4su9SIEA1jAAAAAAAAAAAAAADh8WAQFr/original"
          alt=""
          className={styles.userImg}
        />
        <img
          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/yEnGRKX8NpgAAAAAAAAAAAAADh8WAQFr/original"
          alt=""
          className={styles.userImg}
        />
        <img
          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/5SC9SJBGoSUAAAAAAAAAAAAADh8WAQFr/original"
          alt=""
          className={styles.userImg}
        />
      </div>
      <div className={styles.moreCasesText}>
        <span>更多案例</span>
        <ArrowRightOutlined className={styles.arrowIcon} />
      </div>
    </div>
  );
};

export default UserBox;
