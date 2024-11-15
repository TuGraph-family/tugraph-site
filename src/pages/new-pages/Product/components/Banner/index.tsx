import { Button } from 'antd';
import cx from 'classnames';
import { ReactNode } from 'react';
import { useLocation } from 'umi';
import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';
import JoLPlayer from '@/components/Player';

export interface BannerInfoProps {
  slogan?: string | ReactNode;
  bgIconUrl?: string;
  footer?: ReactNode;
  description?: string;
  sloganClassName?: string;
  mobileImgClassName?: string;
  bannerClassName?: string;
}

const Banner = ({
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
        height: '618px',
        backgroundColor: 'rgba(22,80,255,0.05)',
      }}
    >
      <div className={styles.databaseTitleSection}>
        <span className={styles.titleText}>Tu Graph 社区版</span>
        <span className={styles.descriptionText}>
          单实例，高可用、高性能图数据库，小型项目的理想选择
        </span>
        <div className={styles.buttonContainer}>
          <Button
            type="primary"
            size="large"
            shape="round"
            className={styles.communityEditionButton}
          >
            <div className={styles.buttonContent}>
              <span className={styles.communityEditionLabel}>开始体验</span>
              <ArrowRightOutlined className={styles.arrowIcon} />
            </div>
          </Button>
          <Button
            size="large"
            shape="round"
            className={styles.enterpriseConsultationButton}
          >
            查看文档
          </Button>
        </div>
      </div>
      <div className={styles.featureSection}>
        <div className={styles.featureSectionItem}>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
              height: 191,
              width: 345,
            }}
          />
          <div className={styles.videoDesc}>
            <div className={styles.videoName}>快速上手</div>
            <div className={styles.videoLength}>20:23</div>
          </div>
        </div>
        <div className={styles.featureSectionItem}>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
              height: 191,
              width: 345,
            }}
          />
          <div className={styles.videoDesc}>
            <div className={styles.videoName}>快速上手</div>
            <div className={styles.videoLength}>20:23</div>
          </div>
        </div>
        <div className={styles.featureSectionItem}>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
              height: 191,
              width: 345,
            }}
          />
          <div className={styles.videoDesc}>
            <div className={styles.videoName}>快速上手</div>
            <div className={styles.videoLength}>20:23</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
