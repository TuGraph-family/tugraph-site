import { motion } from 'framer-motion';
import styles from './index.less';
import { Button } from 'antd';

const AdBox = () => {
  const desc = '这是活动这是活动这是活动这是活动';
  return (
    <div className={styles.adBox}>
      <div className={styles.mainBox}>
        <div className={styles.constent}>
          <div className={styles.desc}>{desc}</div>
          <Button shape="round">去查看</Button>
        </div>
        <motion.div
          className={styles.mask}
          initial={{ left: 0 }}
          animate={{ left: '100%' }}
          transition={{ duration: 1, type: 'ease-in-out' }}
        />
      </div>
    </div>
  );
};

export default AdBox;
