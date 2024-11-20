import { useIntl, useLocation } from 'umi';
import styles from './index.less';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';
import { SubTitle } from '@/components/SubTitle';

const Architecture = () => {
  const intl = useIntl();
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;

  return (
    <div>
      <div className={styles.ecoWrapper}>
        <SubTitle
          title={intl.formatMessage({ id: 'product.ecosystem' })}
          style={{ margin: '56px 0 32px' }}
        />

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
