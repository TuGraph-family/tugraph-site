import styles from './index.less';
import cx from 'classnames';

const CircleAnimation: React.FC = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.logo}>
        <img
          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/fAc1RZCqBU8AAAAAQLAAAAgAeh8WAQFr/fmt.avif"
          alt=""
        />
      </div>
      <div className={cx(styles.circle, styles.inner)}></div>
      <div className={cx(styles.circle, styles.dashed)}>
        <div className={styles.icon}>
          <img
            src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/jsRJTrc1P5kAAAAAQBAAAAgAeh8WAQFr/original"
            alt=""
          />
        </div>
        <div className={styles.icon}>
          <img
            src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/9VuMT6VQRoQAAAAAQBAAAAgAeh8WAQFr/original"
            alt=""
          />
        </div>
      </div>
      <div className={cx(styles.circle, styles.outer)}>
        <div className={styles.icon}>
          <img
            src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/PEGCS5uLyOkAAAAALaAAAAgAeh8WAQFr/original"
            alt=""
          />
        </div>
        <div className={styles.icon}>
          <img
            src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/QnA_RoZkBhkAAAAAJtAAAAgAeh8WAQFr/original"
            alt=""
          />
        </div>
        <div className={styles.icon}>
          <img
            src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/OBUbSIGR9mYAAAAAKzAAAAgAeh8WAQFr/original"
            alt=""
          />
        </div>
      </div>
      <div className={cx(styles.circle, styles.outerSecondary)}></div>
    </div>
  );
};

export default CircleAnimation;
