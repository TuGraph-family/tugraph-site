import styles from './index.less';

const FeatureSection = () => {
  return (
    <div className={styles.featureSection}>
      <div className={styles.benchmarkFeature}>
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
        <span className={styles.featureCategory}>基准</span>
        <span className={styles.idcMarketScapeLabel}>被 IDC MarketScape</span>
        <span className={styles.leaderStatus}>评为领导者</span>
      </div>
      <div className={styles.messageFeature}>
        <img
          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/dR8USJrp5vMAAAAAAAAAAAAADh8WAQFr/original"
          alt=""
          className={styles.featureImg}
        />
        <img
          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/E2piRoTZrTUAAAAAAAAAAAAADh8WAQFr/original"
          alt=""
          className={styles.featureArrow}
        />
        <span className={styles.featureCategory}>消息</span>
        <span className={styles.ldbCLabel}>领导LDBC</span>
        <span className={styles.finBenchProject}>Finbench 项目</span>
      </div>
      <div className={styles.freeTrialFeature}>
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
        <span className={styles.featureCategory}>消息</span>
        <span className={styles.aliYunFreeTrial}>免费试用阿里云</span>
        <span className={styles.tuGraphOnAliYun}>上的 TuGraph</span>
      </div>
    </div>
  );
};

export default FeatureSection;
