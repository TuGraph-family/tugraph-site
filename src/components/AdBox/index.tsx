import { motion } from 'framer-motion';
import styles from './index.less';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

interface AdBoxProps {
  lastAdvertise?: API.AdvertisementDetailVO;
}

const AdBox: React.FC<AdBoxProps> = ({ lastAdvertise }) => {
  if (!lastAdvertise?.id) return null;

  return (
    <div
      className={styles.adBox}
      onClick={() => window.open(lastAdvertise?.linkUrl)}
    >
      <div className={styles.mainBox}>
        <div className={styles.constent}>
          <div className={styles.desc}>{lastAdvertise?.subject}</div>
        </div>
        <motion.div
          className={styles.mask}
          initial={{ left: 0 }}
          animate={{ left: '100%' }}
          transition={{ duration: 1, type: 'ease-in-out' }}
        />
      </div>
    </div>
  );
};

export default AdBox;
