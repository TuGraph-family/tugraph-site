import { logoList } from '@/constant';
import styles from './index.less';

const PartnersCase = () => {
  return (
    <div className={styles.partnersCase}>
      <div className={styles.title}>合作伙伴</div>

      <div className={styles.logoList}>
        {logoList?.map((item) => {
          return <img src={item.icon} />;
        })}
      </div>
    </div>
  );
};
export default PartnersCase;
