import { logoList } from '@/constant';
import styles from './index.less';
import { SubTitle } from '@/components/SubTitle';

const PartnersCase = () => {
  return (
    <div className={styles.partnersCase}>
      <SubTitle title="合作伙伴" />

      <div className={styles.logoList}>
        {logoList?.map((item) => {
          return <img src={item.icon} />;
        })}
      </div>
    </div>
  );
};
export default PartnersCase;
