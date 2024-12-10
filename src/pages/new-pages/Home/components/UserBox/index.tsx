import React, { useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';
import { history } from 'umi';
import { historyPushLinkAt } from '@/util';
import { IntlShape } from 'react-intl';
import { USER_LOGO_LIST } from '@/pages/new-pages/Home/constants';
import { SubTitle } from '@/components/SubTitle';
const UserBox: React.FC<{ intl: IntlShape }> = ({ intl }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  console.log('isHover:', isHover);

  return (
    <div className={styles.userBox}>
      <SubTitle
        title={intl.formatMessage({ id: 'home.users' })}
        style={{
          margin: '72px 0 52px',
        }}
      />
      <FadeInSection>
        <div className={styles.userImgList}>
          {USER_LOGO_LIST.map((item) => (
            <img
              key={item.key}
              src={item.src}
              alt=""
              className={styles.userImg}
            />
          ))}
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
