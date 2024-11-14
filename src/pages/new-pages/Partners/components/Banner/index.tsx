import { Button } from 'antd';
import cx from 'classnames';
import { ReactNode } from 'react';
import { useLocation } from 'umi';
import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';

export interface BannerInfoProps {
  slogan?: string | ReactNode;
  bgIconUrl?: string;
  footer?: ReactNode;
  description?: string;
  sloganClassName?: string;
  mobileImgClassName?: string;
  bannerClassName?: string;
}

const Banner = ({ bannerClassName = '' }: BannerInfoProps) => {
  const { pathname, search } = useLocation();

  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/An4uTrsTiyUAAAAAAAAAAAAADh8WAQFr/original)';

  return (
    <div
      id="banner"
      className={cx(styles.banner, bannerClassName)}
      style={{
        backgroundImage: background,
        height: '381px',
        backgroundColor: 'rgba(22,80,255,0.05)',
      }}
    >
      <div className={styles.databaseTitleSection}>
        <span className={styles.titleText}>携手合作伙伴共促生态发展 </span>
        <span className={styles.descriptionText}>
          即刻加入快速增长的图数据库市场，TuGraph为您提供专业的技术、业务和营销支持
        </span>
        <div className={styles.buttonContainer}>
          <Button
            type="primary"
            size="large"
            shape="round"
            className={styles.communityEditionButton}
          >
            <div className={styles.buttonContent}>
              <span className={styles.communityEditionLabel}>联系我们</span>
              <ArrowRightOutlined className={styles.arrowIcon} />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
