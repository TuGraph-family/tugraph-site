import { Button } from 'antd';
import styles from './index.less';
import JoLPlayer from '@/components/Player';
import FadeInSection from '@/components/FadeInSection';
import { IntlShape } from 'react-intl';
import MainButton from '@/components/MainButton';
import { getSearch, historyPushLinkAt } from '@/util';
import { history, useLocation } from 'umi';
import Title from 'antd/lib/skeleton/Title';
import { DEFAULT_LOCAL } from '@/constant';
import { getVideos } from '@/pages/new-pages/Product/constants/data';

export interface IBannerProps {
  type: string;
  intl: IntlShape;
}

const Banner = ({ type, intl }: IBannerProps) => {
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/qm9aTJHOJGIAAAAAAAAAAAAADh8WAQFr/original)';

  const getCurrentLanguage = () => {
    return lang === 'en-US' ? 'en' : 'zh';
  };
  const banners = {
    db: {
      title: intl.formatMessage({ id: 'header.product.desc1' }),
      desc: intl.formatMessage({ id: 'home.version0.desc' }),
      btn: (
        <FadeInSection transition={{ duration: 1, delay: 0.3 }}>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="experience"
              btnText={intl.formatMessage({ id: 'product.btn.desc' })}
            />

            <Button
              size="large"
              shape="round"
              className={styles.enterpriseConsultationButton}
              onClick={() => {
                history.push(
                  historyPushLinkAt(
                    `/docs/tugraph-db/${getCurrentLanguage()}/4.5.1/guide`,
                  ),
                );
              }}
            >
              {intl.formatMessage({ id: 'product.btn.desc1' })}
            </Button>
          </div>
        </FadeInSection>
      ),
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/KdW7SqgSHSMAAAAAAAAAAAAADh8WAQFr/original',
    },
    analytics: {
      title: intl.formatMessage({ id: 'header.product.desc2' }),
      desc: intl.formatMessage({ id: 'product_analytics.description' }),
      btn: (
        <FadeInSection transition={{ duration: 1, delay: 0.3 }}>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="experience"
              btnText={intl.formatMessage({ id: 'product.btn.desc' })}
            />

            <Button
              size="large"
              shape="round"
              className={styles.enterpriseConsultationButton}
              onClick={() => {
                history.push(
                  historyPushLinkAt(
                    `/docs/tugraph-analytics/${getCurrentLanguage()}/guide/`,
                  ),
                );
              }}
            >
              {intl.formatMessage({ id: 'product.btn.desc1' })}
            </Button>
          </div>
        </FadeInSection>
      ),
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/9VjfR7exPyQAAAAAAAAAAAAADh8WAQFr/original',
    },
    learn: {
      title: intl.formatMessage({ id: 'header.product.desc3' }),
      desc: intl.formatMessage({ id: 'product_learn.description' }),
      btn: (
        <FadeInSection transition={{ duration: 1, delay: 0.3 }}>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="experience"
              btnText={intl.formatMessage({ id: 'product.btn.desc' })}
            />

            <Button
              size="large"
              shape="round"
              className={styles.enterpriseConsultationButton}
              onClick={() => {
                history.push(
                  historyPushLinkAt(
                    `/docs/tugraph-db/${getCurrentLanguage()}/4.5.1/olap&procedure/learn/tutorial`,
                  ),
                );
              }}
            >
              {intl.formatMessage({ id: 'product.btn.desc1' })}
            </Button>
          </div>
        </FadeInSection>
      ),
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/3-DXT6Cd7kAAAAAAAAAAAAAADh8WAQFr/original',
    },
    enterprise: {
      title: intl.formatMessage({ id: 'header.product.desc4' }),
      desc: intl.formatMessage({ id: 'product_enterprise.description' }),
      btn: (
        <FadeInSection transition={{ duration: 1, delay: 0.3 }}>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="connect"
              btnText={intl.formatMessage({ id: 'footer.contact' })}
            />
          </div>
        </FadeInSection>
      ),
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/6OVORo_P_NYAAAAAAAAAAAAADh8WAQFr/original',
    },
    clound: {
      title: intl.formatMessage({ id: 'header.product.desc5' }),
      desc: intl.formatMessage({ id: 'product_clound.description' }),
      btn: (
        <FadeInSection transition={{ duration: 1, delay: 0.3 }}>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="connect"
              btnText={intl.formatMessage({ id: 'footer.contact' })}
            />
            <Button
              size="large"
              shape="round"
              className={styles.enterpriseConsultationButton}
              onClick={() => {
                window.open(
                  'https://market.aliyun.com/products/56024006/cmgj00065940.html?spm=5176.21213303.result.4.76342f3dUpiTZe&innerSource=search_TuGraph#sku=yuncode5994000001',
                );
              }}
            >
              {intl.formatMessage({ id: 'product.btn.desc2' })}
            </Button>
          </div>
        </FadeInSection>
      ),
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/azYBRJS4IjwAAAAAAAAAAAAADh8WAQFr/original',
    },
  };

  const bannerDetail = banners?.[type] || {};

  const renderVideo = () => {
    return type === 'db' ? (
      <div className={styles.featureSection}>
        {getVideos(intl).map((item) => (
          <FadeInSection
            key={item.key}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className={styles.featureSectionItem}>
              <JoLPlayer
                option={{
                  videoSrc: item.url,
                  height: 191,
                  width: 345,
                  isShowPicture: false,
                  isShowWebFullScreen: false,
                }}
              />
              <div className={styles.videoDesc}>
                <div className={styles.videoName}>{item.title}</div>
                <div className={styles.videoLength}>{item.length}</div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    ) : null;
  };

  return (
    <div
      className={styles.bannerBox}
      style={{
        backgroundImage: background,
        height: '567px',
      }}
    >
      <div className={styles.banner}>
        <div className={styles.databaseTitleSection}>
          <FadeInSection>
            <span className={styles.titleText}>{bannerDetail.title}</span>
          </FadeInSection>
          <FadeInSection>
            <span className={styles.descriptionText}>{bannerDetail.desc}</span>
          </FadeInSection>
          {bannerDetail?.btn}
        </div>
        <img src={bannerDetail.icon} alt="" className={styles.icon} />

        {renderVideo()}
      </div>
    </div>
  );
};

export default Banner;
