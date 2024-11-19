import React, { useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';

const UserBox: React.FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  console.log('isHover:', isHover);

  return (
    <div className={styles.userBox}>
      <FadeInSection>
        {' '}
        <div className={styles.title}>代表用户</div>
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
        <div className={styles.moreCasesText}>
          <span
            className={styles.moreCasesSpan}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <span>更多案例</span>
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
