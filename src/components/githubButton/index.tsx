import React from 'react';
import { useIntl } from 'umi';
import styles from './index.less';
import { getBannerCnContentList } from '@/data/bannerContent';

const GithubButton = ({ offset = 24 }: { offset: number }) => {
  const intl = useIntl();
  const isBanner = getBannerCnContentList(intl).length > 0;
  return (
    <div
      className={styles.githubBtn}
      style={{ bottom: isBanner ? offset : 40 }}
      onClick={() => {
        window.open('https://github.com/TuGraph-family');
      }}
    >
      <img
        src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*071VR4u64DwAAAAAAAAAAAAADgOBAQ/original"
        className={styles.githubIcon}
      />
    </div>
  );
};

export default GithubButton;
