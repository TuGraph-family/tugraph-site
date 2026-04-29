import { SubTitle } from '@/components/SubTitle';
import styles from './index.less';
import { IntlShape } from 'react-intl';
import FadeInSection from '@/components/FadeInSection';
import { motion } from 'framer-motion';
import { getExamples } from '@/pages/Case/constants/data';

const CaseList = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles.caseList}>
      <SubTitle title={intl.formatMessage({ id: 'demo.examples' })} />
      <div>
        {getExamples(intl).map((caseItem, index) => (
          <motion.div
            key={caseItem.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={styles.caseCard}
          >
            <div
              className={`${styles.caseGrid} ${
                index % 2 === 0 ? styles.caseGridEven : styles.caseGridOdd
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <div>
                    <div className={styles.caseImageWrapper}>
                      <img
                        src={caseItem.img}
                        alt={caseItem.title}
                        className={styles.caseImage}
                      />
                    </div>
                  </div>
                  <div className={styles.caseContent}>
                    <div className={styles.caseHeader}>
                      <h3 className={styles.caseTitle}>{caseItem.title}</h3>
                      {caseItem.description && (
                        <p className={styles.caseDescription}>
                          {caseItem.description}
                        </p>
                      )}
                    </div>
                    <div className={styles.caseInfoGrid}>
                      <div className={styles.caseInfoItem}>
                        <h4 className={styles.caseInfoLabel}>
                          {intl.formatMessage({ id: 'demo.example.challenge' })}
                        </h4>
                        <p className={styles.caseInfoText}>
                          {caseItem.challenge}
                        </p>
                      </div>
                      <div className={styles.caseInfoItem}>
                        <h4 className={styles.caseInfoLabel}>
                          {intl.formatMessage({ id: 'demo.example.solution' })}
                        </h4>
                        <p className={styles.caseInfoText}>
                          {caseItem.solution}
                        </p>
                      </div>
                      <div className={styles.caseInfoItem}>
                        <h4 className={styles.caseInfoLabel}>
                          {intl.formatMessage({ id: 'demo.example.profit' })}
                        </h4>
                        <p className={styles.caseInfoText}>{caseItem.profit}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.caseContent}>
                    <div className={styles.caseHeader}>
                      <h3 className={styles.caseTitle}>{caseItem.title}</h3>
                      {caseItem.description && (
                        <p className={styles.caseDescription}>
                          {caseItem.description}
                        </p>
                      )}
                    </div>
                    <div className={styles.caseInfoGrid}>
                      <div className={styles.caseInfoItem}>
                        <h4 className={styles.caseInfoLabel}>
                          {intl.formatMessage({ id: 'demo.example.challenge' })}
                        </h4>
                        <p className={styles.caseInfoText}>
                          {caseItem.challenge}
                        </p>
                      </div>
                      <div className={styles.caseInfoItem}>
                        <h4 className={styles.caseInfoLabel}>
                          {intl.formatMessage({ id: 'demo.example.solution' })}
                        </h4>
                        <p className={styles.caseInfoText}>
                          {caseItem.solution}
                        </p>
                      </div>
                      <div className={styles.caseInfoItem}>
                        <h4 className={styles.caseInfoLabel}>
                          {intl.formatMessage({ id: 'demo.example.profit' })}
                        </h4>
                        <p className={styles.caseInfoText}>{caseItem.profit}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.caseImageWrapper}>
                      <img
                        src={caseItem.img}
                        alt={caseItem.title}
                        className={styles.caseImage}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CaseList;
