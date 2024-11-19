import { Button, Col, Row } from 'antd';
import { motion } from 'framer-motion';
import cx from 'classnames';
import { useState, ReactNode } from 'react';
import { useMedia } from 'react-use';
import { useLocation } from 'umi';
import styles from './index.less';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';
import { ArrowRightOutlined } from '@ant-design/icons';
import { ChOrEnStyle } from '@/util';
import FadeInSection from '@/components/FadeInSection';

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
      <FadeInSection>
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
      </FadeInSection>
      <div className={styles.featureSection}>
        <FadeInSection>
          <motion.div
            className={styles.featureSectionItem}
            whileHover={{
              top: -20,
            }}
            drag
            dragSnapToOrigin
          >
            <img
              src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/owr4Q4fmE6YAAAAAAAAAAAAADh8WAQFr/original"
              alt=""
              className={styles.featureImg}
            />
            <img
              src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/E2piRoTZrTUAAAAAAAAAAAAADh8WAQFr/original"
              alt=""
              className={styles.featureArrow}
            />
            <div className={styles.featureCategory}>基准</div>
            <div className={styles.featureContent}>
              <div>被 IDC MarketScape</div>
              <div>评为领导者</div>
            </div>
          </motion.div>
        </FadeInSection>

        <FadeInSection>
          <motion.div
            className={styles.featureSectionItem}
            whileHover={{
              top: -20,
            }}
            drag
            dragSnapToOrigin
          >
            <img
              src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/dR8USJrp5vMAAAAAAAAAAAAADh8WAQFr/original"
              alt=""
              className={styles.featureImg}
            />
            <motion.div
              whileHover={{
                top: -20,
                right: 20,
              }}
            >
              <img
                src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/E2piRoTZrTUAAAAAAAAAAAAADh8WAQFr/original"
                alt=""
                className={styles.featureArrow}
              />
            </motion.div>

            <div className={styles.featureCategory}>消息</div>
            <div className={styles.featureContent}>
              <div>领导LDBC</div>
              <div>Finbench 项目</div>
            </div>
          </motion.div>
        </FadeInSection>
        <FadeInSection>
          <motion.div
            className={styles.featureSectionItem}
            whileHover={{
              top: -20,
            }}
            drag
            dragSnapToOrigin
          >
            <img
              src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/mvIOTaTxY9QAAAAAAAAAAAAADh8WAQFr/original"
              alt=""
              className={styles.featureImg}
            />
            <img
              src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/E2piRoTZrTUAAAAAAAAAAAAADh8WAQFr/original"
              alt=""
              className={styles.featureArrow}
            />
            <div className={styles.featureCategory}>消息</div>
            <div className={styles.featureContent}>
              <div>免费试用阿里云</div>
              <div>上的 TuGraph</div>
            </div>
          </motion.div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Banner;
