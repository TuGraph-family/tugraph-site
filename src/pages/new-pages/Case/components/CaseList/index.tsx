import { SubTitle } from '@/components/SubTitle';
import styles from './index.less';
import { IntlShape } from 'react-intl';
import FadeInSection from '@/components/FadeInSection';
import { getExamples } from '@/pages/new-pages/Case/components/constants/data';

const CaseList = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles.caseList}>
      <SubTitle title={intl.formatMessage({ id: 'demo.examples' })} />
      <div>
        {getExamples(intl).map((item) => {
          return (
            <div className={styles.caseItemBox} key={item.title}>
              <div className={styles.caseItem}>
                <div className={styles.caseContent}>
                  <FadeInSection>
                    <div className={styles.caseTitle}>{item.title}</div>
                  </FadeInSection>
                  <FadeInSection>
                    {item?.description ? (
                      <div className={styles.caseDesc}>{item.description}</div>
                    ) : null}
                  </FadeInSection>

                  <FadeInSection>
                    <div>
                      <div className={styles.subTitle}>
                        {intl.formatMessage({ id: 'demo.example.challenge' })}
                      </div>
                      <div className={styles.explanation}>{item.challenge}</div>
                    </div>
                  </FadeInSection>
                  <FadeInSection>
                    <div>
                      <div className={styles.subTitle}>
                        {intl.formatMessage({ id: 'demo.example.solution' })}
                      </div>
                      <div className={styles.explanation}>{item.solution}</div>
                    </div>
                  </FadeInSection>
                  <FadeInSection>
                    <div>
                      <div className={styles.subTitle}>
                        {intl.formatMessage({ id: 'demo.example.profit' })}
                      </div>
                      <div className={styles.explanation}>{item.profit}</div>
                    </div>
                  </FadeInSection>
                </div>

                <FadeInSection>
                  <div
                    className={styles.caseImg}
                    style={{ backgroundImage: `url(${item?.img})` }}
                  />
                </FadeInSection>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseList;
