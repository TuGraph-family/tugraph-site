import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';

const UserDemo = () => {
  return (
    <div className={styles.userDemo}>
      <div className={styles.userDemoTitle}>用户案例</div>
      <div className={styles.demoList}>
        <div className={styles.demoItem}></div>
        <div className={styles.demoItem}></div>
        <div className={styles.demoItem}></div>
        <div className={styles.demoItem}></div>
      </div>
      <div className={styles.more}>
        <span>更多案例</span>
        <ArrowRightOutlined className={styles.arrowIcon} />
      </div>
    </div>
  );
};

export default UserDemo;
