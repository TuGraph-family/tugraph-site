import React, { useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';
import { history } from 'umi';
import { historyPushLinkAt } from '@/util';
import { IntlShape } from 'react-intl';
const UserBox: React.FC<{ intl: IntlShape }> = ({ intl }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  console.log('isHover:', isHover);

  return (
    <div className={styles.userBox}>
      <FadeInSection>
        {' '}
        <div className={styles.title}>
          {intl.formatMessage({ id: 'home.users' })}
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.userImgList}>
          <img
            src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/dctDTYIXmsoAAAAAAAAAAAAADh8WAQFr/original"
            alt=""
            className={styles.userImg}
          />
          <img
            src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/4su9SIEA1jAAAAAAAAAAAAAADh8WAQFr/original"
            alt=""
            className={styles.userImg}
          />
          <img
            src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/yEnGRKX8NpgAAAAAAAAAAAAADh8WAQFr/original"
            alt=""
            className={styles.userImg}
          />
          <img
            src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/5SC9SJBGoSUAAAAAAAAAAAAADh8WAQFr/original"
            alt=""
            className={styles.userImg}
          />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div
          className={styles.moreCasesText}
          onClick={() => {
            history.push(historyPushLinkAt('/case'));
          }}
        >
          <span
            className={styles.moreCasesSpan}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <span>{intl.formatMessage({ id: 'home.moreDemo' })}</span>
            <motion.span
              animate={{ left: isHover ? 6 : 0 }}
              style={{ position: 'relative' }}
            >
              <ArrowRightOutlined className={styles.arrowIcon} />
            </motion.span>
          </span>
        </div>
      </FadeInSection>
    </div>
  );
};

export default UserBox;
