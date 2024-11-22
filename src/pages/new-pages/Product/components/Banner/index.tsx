import { Button } from 'antd';
import cx from 'classnames';
import { useLocation, history } from 'umi';
import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';
import JoLPlayer from '@/components/Player';
import FadeInSection from '@/components/FadeInSection';
import { IntlShape } from 'react-intl';
import MainButton from '@/components/MainButton';
import { historyPushLinkAt } from '@/util';

export interface IBannerProps {
  type: string;
  intl: IntlShape;
}

const Banner = ({ type, intl }: IBannerProps) => {
  const { pathname, search } = useLocation();

  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/An4uTrsTiyUAAAAAAAAAAAAADh8WAQFr/original)';

  const banners = {
    db: {
      title: intl.formatMessage({ id: 'header.product.desc1' }),
      desc: intl.formatMessage({ id: 'home.version0.desc' }),
      btn: (
        <FadeInSection>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="experience"
              btnText={intl.formatMessage({ id: 'home.btn.desc' })}
            />

            <Button
              size="large"
              shape="round"
              className={styles.enterpriseConsultationButton}
              onClick={() => {
                history.push(historyPushLinkAt('/docs/tugraph-db'));
              }}
            >
              查看文档
            </Button>
          </div>
        </FadeInSection>
      ),
    },
    analytics: {
      title: intl.formatMessage({ id: 'header.product.desc2' }),
      desc: intl.formatMessage({ id: 'product_analytics.description' }),
    },
    learn: {
      title: intl.formatMessage({ id: 'header.product.desc3' }),
      desc: intl.formatMessage({ id: 'product_learn.description' }),
    },
    enterprise: {
      title: intl.formatMessage({ id: 'header.product.desc4' }),
      desc: intl.formatMessage({ id: 'product_enterprise.description' }),
      btn: (
        <FadeInSection>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="connect"
              btnText={intl.formatMessage({ id: 'footer.contact' })}
            />
          </div>
        </FadeInSection>
      ),
    },
    clound: {
      title: intl.formatMessage({ id: 'header.product.desc5' }),
      desc: intl.formatMessage({ id: 'product_clound.description' }),
      btn: (
        <FadeInSection>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="connect"
              btnText={intl.formatMessage({ id: 'footer.contact' })}
            />
          </div>
        </FadeInSection>
      ),
    },
  };

  const bannerDetail = banners?.[type] || {};

  const videoList = [
    {
      url: 'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
      length: '02:39',
    },
    {
      url: 'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
      length: '02:39',
    },
    {
      url: 'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
      length: '02:39',
    },
  ];
  const renderVideo = () => {
    return type === 'db' ? (
      <div className={styles.featureSection}>
        {videoList.map((item) => (
          <div className={styles.featureSectionItem}>
            <JoLPlayer
              option={{
                videoSrc: item.url,
                height: 191,
                width: 345,
              }}
            />
            <div className={styles.videoDesc}>
              <div className={styles.videoName}>快速上手</div>
              <div className={styles.videoLength}>{item.length}</div>
            </div>
          </div>
        ))}
      </div>
    ) : null;
  };

  return (
    <div
      id="banner"
      className={styles.banner}
      style={{
        backgroundImage: background,
        height: '618px',
        backgroundColor: 'rgba(22,80,255,0.05)',
      }}
    >
      <div className={styles.databaseTitleSection}>
        <FadeInSection>
          <span className={styles.titleText}>{bannerDetail.title}</span>
        </FadeInSection>
        <FadeInSection>
          <span className={styles.descriptionText}>{bannerDetail.desc}</span>
        </FadeInSection>
        {bannerDetail?.btn}
      </div>
      {renderVideo()}
    </div>
  );
};

export default Banner;
