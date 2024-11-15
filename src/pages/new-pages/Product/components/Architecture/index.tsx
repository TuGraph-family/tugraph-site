import { useIntl, useLocation } from 'umi';
import styles from './index.less';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';

const Architecture = () => {
  const intl = useIntl();
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;

  return (
    <div>
      <div className={styles.ecoWrapper}>
        <div className={styles.subTitleTop}>
          {intl.formatMessage({ id: 'product.ecosystem' })}
        </div>
        <div className="maxContainer">
          <img
            src={
              lang === 'zh-CN'
                ? 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*cw03RpxT13MAAAAAAAAAAAAADgOBAQ/original'
                : 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*K_LmTbSOmDwAAAAAAAAAAAAADgOBAQ/original'
            }
            alt="ecosystem"
          />
        </div>
      </div>
    </div>
  );
};

export default Architecture;
