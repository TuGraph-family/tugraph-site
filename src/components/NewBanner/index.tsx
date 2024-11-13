import { Button, Col, Row } from 'antd';
import cx from 'classnames';
import { ReactNode } from 'react';
import { useMedia } from 'react-use';
import { useLocation } from 'umi';
import styles from './index.less';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';
import { ArrowRightOutlined } from '@ant-design/icons';
import { ChOrEnStyle } from '@/util';

export interface BannerInfoProps {
  slogan: string | ReactNode;
  bgIconUrl?: string;
  footer?: ReactNode;
  description?: string;
  sloganClassName?: string;
  mobileImgClassName?: string;
  bannerClassName?: string;
}

export const NewBanner = ({
  slogan,
  bgIconUrl,
  footer,
  description = '',
  sloganClassName = '',
  mobileImgClassName = '',
  bannerClassName = '',
}: BannerInfoProps) => {
  const { pathname, search } = useLocation();

  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/An4uTrsTiyUAAAAAAAAAAAAADh8WAQFr/original)';

  return (
    <div
      id="banner"
      className={cx(styles.banner, bannerClassName)}
      style={{
        backgroundImage: background,
        height: '700px',
        backgroundColor: 'rgba(22,80,255,0.05)',
      }}
    >
      <div className={styles.databaseTitleSection}>
        <span className={styles.titleText}>支付宝万亿业务背后的图数据库</span>
        <span className={styles.descriptionText}>
          高性能图数据库TuGraph由蚂蚁集团和清华大学共同研发，历经蚂蚁万亿级业务的实际场景锤炼，在国际图数据库基准测试中获得性能第一
        </span>
        <div className={styles.buttonContainer}>
          <Button
            type="primary"
            size="large"
            shape="round"
            className={styles.communityEditionButton}
          >
            <div className={styles.buttonContent}>
              <span className={styles.communityEditionLabel}>社区版体验</span>
              <ArrowRightOutlined className={styles.arrowIcon} />
            </div>
          </Button>
          <Button
            size="large"
            shape="round"
            className={styles.enterpriseConsultationButton}
          >
            企业版咨询
          </Button>
        </div>
      </div>
    </div>
  );
};
