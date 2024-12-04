import styles from './index.less';
import { IntlShape } from 'react-intl';
import { SubTitle } from '@/components/SubTitle';
import FadeInSection from '@/components/FadeInSection';
import { LOGO_LIST } from '@/pages/new-pages/Partners/constants';

const PartnersCase = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles.partnersCase}>
      <SubTitle
        title={intl.formatMessage({ id: 'ecosystem.support.title1' })}
      />

      <div className={styles.logoList}>
        {LOGO_LIST?.map((item) => {
          return (
            <FadeInSection key={item.key}>
              <img src={item.icon} />
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
};
export default PartnersCase;
