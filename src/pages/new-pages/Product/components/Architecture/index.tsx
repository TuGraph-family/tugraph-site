import { useLocation } from 'umi';
import styles from './index.less';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';
import { SubTitle } from '@/components/SubTitle';
import { IntlShape } from 'react-intl';
import { IMG_SRC_EN, IMG_SRC_ZH } from '@/pages/new-pages/Product/constants';

const Architecture = ({ type, intl }: { type: string; intl: IntlShape }) => {
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;

  return (
    <div className={styles.ecoWrapper}>
      <SubTitle
        title={intl.formatMessage({ id: 'product.ecosystem' })}
        style={{ margin: '56px 0 32px' }}
      />

      <div className={styles.maxContainer}>
        <img
          src={lang === 'zh-CN' ? IMG_SRC_ZH[type] : IMG_SRC_EN[type]}
          alt="ecosystem"
        />
      </div>
    </div>
  );
};

export default Architecture;
