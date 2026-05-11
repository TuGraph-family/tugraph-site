import styles from './index.less';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

interface IRowBoxProps {
  title: string;
  desc: string;
  children: ReactElement;
}

const RowBox: React.FC<IRowBoxProps> = ({ title, desc, children }) => {
  return (
    <div className={styles.ecoWrapper}>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.Box}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RowBox;
