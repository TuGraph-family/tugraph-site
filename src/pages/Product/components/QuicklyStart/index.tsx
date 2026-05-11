import styles from './index.less';

import { SubTitle } from '@/components/SubTitle';

import { IntlShape } from 'react-intl';

import { getSteps } from '@/pages/Product/constants/data';
import { motion } from 'framer-motion';

const QuickStart = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles.lastSectionContainer}>
      <SubTitle
        title={intl.formatMessage({ id: 'product.quickStart' })}
        style={{ marginBottom: 24 }}
      />
      <div className={styles.subtitle}>
        {intl.formatMessage({ id: 'product.quickStart.subtitle' })}
      </div>
      <div className={styles.stepList}>
        {getSteps(intl)?.map((item, index) => {
          return (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              key={item.stepKey}
              className={styles.step}
            >
              <div className={styles.title}>
                <span>{item.stepKey}</span>
                <div>{item.title}</div>
              </div>
              <div className={styles.desc}>{item.desc}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickStart;
