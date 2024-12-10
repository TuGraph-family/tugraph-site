import { motion } from 'framer-motion';

import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';
import MainButton from '@/components/MainButton';
import { IntlShape } from 'react-intl';
import { useLocation, history } from 'umi';
import { getSearch, historyPushLinkAt } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';
import { useMemo } from 'react';
import { CARD_LIST } from '@/pages/new-pages/Home/constants';

const Banner = ({
  intl,
  blogList,
}: {
  intl: IntlShape;
  blogList: API.BlogListVO[];
}) => {
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;

  const cardList = useMemo(() => {
    return CARD_LIST.map((item, idx) => {
      const { category = '', title = '', id } = blogList?.[idx] || {};
      return {
        ...item,
        category,
        title,
        id,
      };
    }).filter((d) => d?.id);
  }, [blogList]);

  return (
    <div
      className={styles.banner}
      style={{
        height: '552px',
      }}
    >
      <div className={styles.databaseTitleSection}>
        <FadeInSection>
          <div className={styles.titleText}>
            {intl.formatMessage({ id: 'home.banner.slogan' })}
          </div>
        </FadeInSection>
        <FadeInSection transition={{ duration: 1, delay: 0.2 }}>
          <div
            className={styles.descriptionText}
            style={lang === 'zh-CN' ? {} : { width: 833 }}
          >
            {intl.formatMessage({ id: 'home.banner.description' })}
          </div>
        </FadeInSection>
        <FadeInSection transition={{ duration: 1, delay: 0.3 }}>
          <div className={styles.buttonContainer}>
            <MainButton
              type="experience"
              style={{ height: 48, minWidth: 160 }}
              btnText={intl.formatMessage({ id: 'home.btn.desc' })}
            />
            <MainButton
              type="consult"
              style={{ height: 48, minWidth: 160 }}
              btnText={intl.formatMessage({ id: 'home.btn.tryOut' })}
            />
          </div>
        </FadeInSection>
      </div>

      {lang === 'zh-CN' && (
        <div className={styles.featureSection}>
          {cardList.map((item) => (
            <FadeInSection
              key={item.key}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <motion.div
                className={styles.featureSectionItem}
                whileHover={{
                  top: -20,
                }}
                drag
                dragSnapToOrigin
                onClick={() =>
                  history.push(historyPushLinkAt(`/blog/info/${item.id}`))
                }
              >
                <img src={item.bgImg} alt="" className={styles.featureImg} />
                <img
                  src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/E2piRoTZrTUAAAAAAAAAAAAADh8WAQFr/original"
                  alt=""
                  className={styles.featureArrow}
                />
                <div className={styles.featureCategory}>{item?.category}</div>
                <div className={styles.featureContent}>{item?.title}</div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      )}
    </div>
  );
};

export default Banner;
