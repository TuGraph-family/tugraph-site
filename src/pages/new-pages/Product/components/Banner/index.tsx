import { Button } from 'antd';
import cx from 'classnames';
import { useLocation } from 'umi';
import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';
import JoLPlayer from '@/components/Player';
import FadeInSection from '@/components/FadeInSection';

export interface IBannerProps {
  type: string;
}

const Banner = ({ type }: IBannerProps) => {
  const { pathname, search } = useLocation();

  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/An4uTrsTiyUAAAAAAAAAAAAADh8WAQFr/original)';

  const banners = {
    db: {
      title: 'TuGraph DB 社区版',
      desc: '单实例部署、开源免费、简单快速、中小型项目的理想选择',
      btn: (
        <FadeInSection>
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
        </FadeInSection>
      ),
    },
    analytics: {
      title: 'TuGraph Analytics 实时图计算引擎',
      desc: '云原生、流/批/图多模计算、图/表混合处理',
    },
    learn: {
      title: 'TuGraph Leran 图学习引擎',
      desc: '通过 TuGraph DB 提供原生支持，实现图学习模型的大规模、高性能开发、训练和推理',
    },
    enterprise: {
      title: 'TuGraph 企业版',
      desc: '分布式、高可用、高稳定性、企业级项目的理想选择',
      btn: (
        <FadeInSection>
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
        </FadeInSection>
      ),
    },
    clound: {
      title: 'TuGraph Cloud 版',
      desc: '基于阿里云构建，自动化部署，快速上线',
      btn: (
        <FadeInSection>
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
      <FadeInSection>
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
      </FadeInSection>
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
