import { Button } from 'antd';
import cx from 'classnames';
import { ReactNode } from 'react';
import { useLocation } from 'umi';
import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';

const Banner = () => {
  const { pathname, search } = useLocation();

  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/DxbPRKoOmCcAAAAAAAAAAAAADh8WAQFr/fmt.avif)';

  return (
    <div className={styles.bannerBox}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: background,
          height: '378px',
        }}
      >
        <div className={styles.bannerContent}>
          <div
            className={styles.bannerLeft}
            style={{
              backgroundImage: background,
            }}
          >
            <div className={styles.activityTag}>报名中</div>
          </div>
          <div className={styles.bannerRight}>
            <div>
              <div className={styles.avtivityTitle}>
                新一代数据底座，来外滩大会解锁图智能前沿技术
              </div>
              <div className={styles.avtivityInfo}>
                <div className={styles.InfoItem}>
                  <div className={styles.InfoItemLabel}>活动类型：</div>
                  <div className={styles.InfoItemVal}>线下活动</div>
                </div>
                <div className={styles.InfoItem}>
                  <div className={styles.InfoItemLabel}>活动时间：</div>
                  <div className={styles.InfoItemVal}>
                    2024-09-07～2024-09-09
                  </div>
                </div>
                <div className={styles.InfoItem}>
                  <div className={styles.InfoItemLabel}>活动地点：</div>
                  <div className={styles.InfoItemVal}>
                    上海·黄浦区世博园区(黄浦区龙华东路68号) C7 场馆
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footer}>
              <Button className={cx(styles.mainBtn, true ? styles.ending : '')}>
                立即报名
              </Button>
              <Button className={styles.shareBtn}>分享</Button>
              <div className={styles.shareCard}>
                <div className={styles.shareCardTitle}>分享活动</div>
                <div className={styles.shareCardSource}>微信扫码</div>
                <img src="" alt="" className={styles.shareCardCode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
