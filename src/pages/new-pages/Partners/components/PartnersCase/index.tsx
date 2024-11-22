import { logoList } from '@/constant';
import styles from './index.less';
import { IntlShape } from 'react-intl';
import { SubTitle } from '@/components/SubTitle';
import FadeInSection from '@/components/FadeInSection';

const PartnersCase = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles.partnersCase}>
      <SubTitle
        title={intl.formatMessage({ id: 'ecosystem.support.title1' })}
      />

      <div className={styles.logoList}>
        {logoList?.map((item, key) => {
          return (
            <FadeInSection key={key}>
              <img src={item.icon} />
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
};
export default PartnersCase;
