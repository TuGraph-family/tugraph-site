import { Button } from 'antd';
import cx from 'classnames';
import { useLocation } from 'umi';
import styles from './index.less';
import SwitchTab from '@/components/SwitchTab';

export interface BannerInfoProps {
  type?: string;
  onChangeType?: (type: string) => void;
  tag?: string;
  onChangeTag?: (tag: string) => void;
  categorylist?: { value: string; label: string }[];
}

const Banner = ({
  type,
  onChangeType,
  tag,
  onChangeTag,
  categorylist = [],
}: BannerInfoProps) => {
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/tW0oRbTxuhcAAAAAAAAAAAAADh8WAQFr/original)';

  const typeList = [
    {
      value: '全部',
      label: '全部',
    },
    ...categorylist,
  ];

  const tagList = [
    {
      value: 'new',
      label: '最新',
    },
    {
      value: 'hot',
      label: '热门',
    },
  ];

  const renderType = () => {
    return (
      <div className={styles.typelist}>
        {typeList.map((item) => (
          <div
            className={cx(
              styles.typeItem,
              item.value === type ? styles.typeActived : '',
            )}
            key={item.value}
            onClick={() => onChangeType?.(item.value)}
          >
            {item.label}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.bannerBox}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: background,
          height: '310px',
        }}
      >
        <div className={styles.databaseTitleSection}>
          <div className={styles.titleText}>博客 </div>
          <div className={styles.descriptionText}>
            查阅技术解析，参考实践经验；开启技术博客，共享你的知识锦囊
          </div>
        </div>

        <img
          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/waurSaiuoHcAAAAAAAAAAAAADh8WAQFr/fmt.avif"
          alt=""
          className={styles.icon}
        />

        <div className={styles.footerAction}>
          {renderType()}
          <SwitchTab options={tagList} current={tag} onChange={onChangeTag} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
