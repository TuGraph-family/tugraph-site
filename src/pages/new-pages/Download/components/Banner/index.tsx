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
        height: '346px',
        backgroundColor: 'rgba(22,80,255,0.05)',
      }}
    >
      <div className={styles.databaseTitleSection}>
        <span className={styles.titleText}>下载中心 </span>
        <span className={styles.descriptionText}>
          TuGraph下载中心，为用户提供 TuGraph
          数据库各版本，以及配套的工具、驱动和中间件的下载。如果您是已签约的企业版用户，可联系您的支持人员下载专属的软件。
        </span>
      </div>
    </div>
  );
};

export default Banner;
