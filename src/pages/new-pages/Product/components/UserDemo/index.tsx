import { SubTitle } from '@/components/SubTitle';
import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { historyPushLinkAt } from '@/util';
import { history } from 'umi';

const UserDemo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // 确保动画只触发一次
    threshold: 0.3, // 在元素至少有 x% 可见时触发动画
  });

  return (
    <div className={styles.userDemo}>
      <SubTitle title="用户案例" style={{ margin: '52px 0 52px' }} />
      <div className={styles.demoList} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -50 }} // 初始化透明度为0和向下偏移50px
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.demoItem}></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 110 }} // 初始化透明度为0和向下偏移50px
          animate={{ opacity: inView ? 1 : 0, y: inView ? 59 : 110 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.demoItem}></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }} // 初始化透明度为0和向下偏移50px
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.demoItem}></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 110 }} // 初始化透明度为0和向下偏移50px
          animate={{ opacity: inView ? 1 : 0, y: inView ? 59 : 110 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.demoItem}></div>
        </motion.div>
      </div>
      <div
        className={styles.more}
        onClick={() => {
          history.push(historyPushLinkAt('/case'));
        }}
      >
        <span>更多案例</span>
        <ArrowRightOutlined className={styles.arrowIcon} />
      </div>
    </div>
  );
};

export default UserDemo;
