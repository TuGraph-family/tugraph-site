import HeroCards from '@/components/HeroCard';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import styles from './index.less';

interface IProductBannerProps {
  tag?: ReactElement;
  title: string;
  description: string;
  btnContent: ReactElement;
  subTitle?: string;
}

const ProductBanner: React.FC<IProductBannerProps> = ({
  tag,
  title,
  description,
  btnContent,
  subTitle,
}) => {
  return (
    <div className={styles.banner}>
      {/* 左侧内容 */}
      <div className={styles.bannerContent}>
        {tag && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {tag}
          </motion.div>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.bannerTitleWrapper}
        >
          <div className={styles.bannerTitle}>
            <span className={styles.bannerTitleText}>{title}</span>
            {subTitle && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={styles.bannerTitleWrapper}
              >
                <div className={styles.subTitle}>{subTitle}</div>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.bannerDescription}
        >
          {description}
        </motion.p>

        <div className={styles.bannerButtonContainer}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={styles.bannerButtonGroup}
          >
            {btnContent}
          </motion.div>
        </div>
      </div>
      <HeroCards />
    </div>
  );
};

export default ProductBanner;
