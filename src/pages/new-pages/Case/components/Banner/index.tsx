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
        height: '381px',
        backgroundColor: 'rgba(22,80,255,0.05)',
      }}
    >
      <div className={styles.databaseTitleSection}>
        <span className={styles.titleText}>数千倍效果提升 </span>
        <span className={styles.descriptionText}>
          助力各行业客户打破分析瓶颈
        </span>
      </div>
      <div className={styles.featureSection}>
        <div className={styles.featureSectionItem}>
          <img
            src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
            alt=""
            className={styles.fieldImg}
          />
          <div className={styles.fieldName}>电信领域</div>
        </div>
        <div className={styles.featureSectionItem}>
          <img
            src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
            alt=""
            className={styles.fieldImg}
          />
          <div className={styles.fieldName}>电信领域</div>
        </div>{' '}
        <div className={styles.featureSectionItem}>
          <img
            src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
            alt=""
            className={styles.fieldImg}
          />
          <div className={styles.fieldName}>电信领域</div>
        </div>{' '}
        <div className={styles.featureSectionItem}>
          <img
            src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
            alt=""
            className={styles.fieldImg}
          />
          <div className={styles.fieldName}>电信领域</div>
        </div>{' '}
        <div className={styles.featureSectionItem}>
          <img
            src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
            alt=""
            className={styles.fieldImg}
          />
          <div className={styles.fieldName}>电信领域</div>
        </div>{' '}
        <div className={styles.featureSectionItem}>
          <img
            src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
            alt=""
            className={styles.fieldImg}
          />
          <div className={styles.fieldName}>电信领域</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
