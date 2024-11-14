import React from 'react';
import { Button } from 'antd';
import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';

const Version = () => {
  return (
    <div className={styles.versionContainer}>
      <div className={styles.versionTitleWrapper}>
        <span className={styles.versionTitle}>选择版本</span>
        <div className={styles.versionListWrapper}>
          <div className={styles.editionWrapper}>
            <span className={styles.title}>TuGraph 社区版</span>
            <span className={styles.tag}>单机版</span>
            <div className={styles.line} />
            <div className={styles.recommendationPointWrapper}>
              <div className={styles.recommendationMarker} />
              <span className={styles.recommendationPointText}>
                这里是推荐的点
              </span>
            </div>
            <div className={styles.recommendationPointWrapper}>
              <div className={styles.recommendationMarker} />
              <span className={styles.recommendationPointText}>
                这里是推荐的点
              </span>
            </div>
            <div className={styles.recommendationPointWrapper}>
              <div className={styles.recommendationMarker} />
              <span className={styles.recommendationPointText}>
                这里是推荐的点
              </span>
            </div>
            <Button
              type="primary"
              size="large"
              shape="round"
              block
              className={styles.communityExperienceButton}
            >
              社区版体验
              <ArrowRightOutlined className={styles.arrowIcon} />
            </Button>
          </div>
          <div className={styles.editionWrapper}>
            <span className={styles.title}>TuGraph 企业版</span>
            <span className={styles.tag}>单机版</span>
            <div className={styles.line} />
            <div className={styles.recommendationPointWrapper}>
              <div className={styles.recommendationMarker} />
              <span className={styles.recommendationPointText}>
                这里是推荐的点
              </span>
            </div>
            <div className={styles.recommendationPointWrapper}>
              <div className={styles.recommendationMarker} />
              <span className={styles.recommendationPointText}>
                这里是推荐的点
              </span>
            </div>
            <div className={styles.recommendationPointWrapper}>
              <div className={styles.recommendationMarker} />
              <span className={styles.recommendationPointText}>
                这里是推荐的点
              </span>
            </div>
            <Button
              size="large"
              shape="round"
              block
              className={styles.communityExperienceButton}
            >
              企业版咨询
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version;
