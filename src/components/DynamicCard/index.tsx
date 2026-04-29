import React from 'react';
import styles from './index.less';
import { SubTitle } from '@/components/SubTitle';
import { motion } from 'framer-motion';

const DynamicCard: React.FC<{
  title?: string;
  list: Array<{ path: string; title: string; content: string; key: string }>;
  viewBox?: string;
}> = ({ title, list, viewBox = '0 0 24 24' }) => {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.featureDescriptionWrapper}>
        {title && <SubTitle title={title} />}
        <div className={styles.lineContet}>
          {list.map((item) => (
            <motion.div
              className={styles.itemBox}
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              key={item.key}
            >
              <div className={styles.icon}>
                <svg viewBox={viewBox} fill="none" aria-hidden="true">
                  <path d={item.path} fill="currentColor"></path>
                </svg>
              </div>
              <div className={styles.title}>{item.title}</div>
              <p className={styles.content}>{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicCard;
