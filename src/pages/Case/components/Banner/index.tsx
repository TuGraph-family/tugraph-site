import React from 'react';
import { motion } from 'framer-motion';
import styles from './index.less';
import { IntlShape } from 'react-intl';
import SignalStage from '@/pages/Case/components/SignalStage';

const CaseBanner = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.titleWrapper}
          >
            <h1 className={styles.title}>
              {intl.formatMessage({ id: 'home.case.desc0' })}
            </h1>
          </motion.div>
        </div>

        {/* Right Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={styles.rightAnimation}
        >
          <SignalStage />
        </motion.div>
      </div>
    </div>
  );
};

export default CaseBanner;
