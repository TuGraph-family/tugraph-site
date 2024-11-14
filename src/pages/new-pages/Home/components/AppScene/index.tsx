import React from 'react';
import { Button, Tag } from 'antd';
import styles from './index.less';

const AppScene = () => {
  const onGovFieldClick = () => {};

  const onFinFieldClick = () => {};

  const onTelcoFieldClick = () => {};

  return (
    <div className={styles.applicationScenariosWrapper}>
      <span className={styles.applicationSceneTitle}>应用场景</span>
      <div className={styles.governmentSectorWrapper}>
        <div className={styles.industrialSectorWrapper}>
          <div className={styles.generalSectorWrapper}>
            <img
              src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
              className={styles.governmentImage}
            />
            <div className={styles.governmentDescriptionWrapper} />
          </div>
          <Button onClick={onGovFieldClick} className={styles.governmentButton}>
            政务领域
          </Button>
          <div className={styles.financialSectorWrapper}>
            <img
              src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
              className={styles.industrialImage}
            />
            <div className={styles.tagWrapper}>
              <div className={styles.industrialDescriptionWrapper} />
              <Tag color="rgb(234,234,237)" className={styles.industrialTag}>
                工业领域
              </Tag>
            </div>
          </div>
        </div>
        <div className={styles.telecomSectorWrapper}>
          <div className={styles.telecomDescriptionWrapper} />
          <Button
            size="large"
            onClick={onFinFieldClick}
            className={styles.financialButton}
          >
            金融领域
          </Button>
          <img
            src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
            className={styles.generalImage}
          />
          <div className={styles.tagDescriptionWrapper} />
          <Tag color="rgb(234,234,237)" className={styles.generalTag}>
            通用领域
          </Tag>
        </div>
        <div className={styles.internetSectorWrapper}>
          <div className={styles.internetImageWrapper}>
            <div className={styles.internetDescriptionWrapper} />
            <img
              src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
              className={styles.telecomImage}
            />
          </div>
          <Button onClick={onTelcoFieldClick} className={styles.internetButton}>
            电信领域
          </Button>
          <div className={styles.internetTagWrapper} />
          <Tag color="rgb(234,234,237)" className={styles.internetTag}>
            互联网领域
          </Tag>
        </div>
      </div>
    </div>
  );
};

export default AppScene;
