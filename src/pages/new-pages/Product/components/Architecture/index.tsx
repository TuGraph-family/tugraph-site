import { useLocation } from 'umi';
import styles from './index.less';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';
import { SubTitle } from '@/components/SubTitle';
import { IntlShape } from 'react-intl';

const Architecture = ({ type, intl }: { type: string; intl: IntlShape }) => {
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;

  const IMG_SRC_ZH = {
    db: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*cw03RpxT13MAAAAAAAAAAAAADgOBAQ/original',
    analytics:
      'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*2TuZSYCq8egAAAAAAAAAAAAADgOBAQ/original',
    learn:
      'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*4AiPRowHYgsAAAAAAAAAAAAADgOBAQ/original',
    enterprise:
      'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*z0V4Q7BJpOQAAAAAAAAAAAAADgOBAQ/original',
  };

  const IMG_SRC_EN = {
    db: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*K_LmTbSOmDwAAAAAAAAAAAAADgOBAQ/original',
    analytics:
      'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*2TuZSYCq8egAAAAAAAAAAAAADgOBAQ/original',
    learn:
      'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*4AiPRowHYgsAAAAAAAAAAAAADgOBAQ/original',
    enterprise:
      'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*wqMyTZ93ndYAAAAAAAAAAAAADgOBAQ/original',
  };

  return (
    <div>
      <div className={styles.ecoWrapper}>
        <SubTitle
          title={intl.formatMessage({ id: 'product.ecosystem' })}
          style={{ margin: '56px 0 32px' }}
        />

        <div className="maxContainer">
          <img
            src={lang === 'zh-CN' ? IMG_SRC_ZH[type] : IMG_SRC_EN[type]}
            alt="ecosystem"
          />
        </div>
      </div>
    </div>
  );
};

export default Architecture;
