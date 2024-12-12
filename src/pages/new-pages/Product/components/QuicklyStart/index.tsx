import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';
import { SubTitle } from '@/components/SubTitle';
import FadeInSection from '@/components/FadeInSection';
import { IntlShape } from 'react-intl';
import { history, useLocation } from 'umi';
import { getSearch, historyPushLinkAt } from '@/util';
import { getSteps } from '@/pages/new-pages/Product/constants/data';

const QuickStart = ({ intl }: { intl: IntlShape }) => {
  const { search } = useLocation();

  const getLang = () => {
    return getSearch(search)?.lang === 'en-US' ? 'en' : 'zh';
  };
  return (
    <div className={styles.lastSectionContainer}>
      <div>
        <SubTitle
          title={intl.formatMessage({ id: 'home.banner.quickStart' })}
          style={{ margin: '55px 0 0' }}
        />

        <FadeInSection>
          <div className={styles.stepList}>
            {getSteps(intl)?.map((item) => {
              return (
                <div key={item.stepKey} className={styles.step}>
                  <div className={styles.stepNumber}>{item.stepKey}</div>
                  <img src={item.icon} alt="" className={styles.stepIcon} />
                  <div className={styles.stepTitle}>{item.title}</div>
                  <ul>
                    {item.descList?.map((desc) => (
                      <li key={desc}>{desc}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </FadeInSection>

        <FadeInSection>
          <div
            className={styles.startGuideButton}
            onClick={() => {
              history.push(
                historyPushLinkAt(
                  `/docs/tugraph-db/${getLang()}/4.5.1/quick-start/preparation`,
                ),
              );
            }}
          >
            {intl.formatMessage({ id: 'product.btn.desc1' })}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default QuickStart;
