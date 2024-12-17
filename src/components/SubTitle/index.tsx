import React from 'react';
import styles from './index.less';
import cx from 'classnames';
import FadeInSection from '@/components/FadeInSection';

export const SubTitle = ({
  title,
  style,
  className,
  isAnimate = true,
}: {
  title: string;
  style?: React.CSSProperties;
  className?: any;
  isAnimate?: boolean;
}) => {
  return isAnimate ? (
    <FadeInSection>
      <div className={cx(styles.subTitleGroup, className)} style={{ ...style }}>
        <div className={styles.subTitle}>{title}</div>
      </div>
    </FadeInSection>
  ) : (
    <div className={cx(styles.subTitleGroup, className)} style={{ ...style }}>
      <div className={styles.subTitle}>{title}</div>
    </div>
  );
};
