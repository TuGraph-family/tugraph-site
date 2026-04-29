import { SubTitle } from '@/components/SubTitle';
import { IntlShape } from 'react-intl';
import styles from './index.less';
import { Col, Row } from 'antd';
import FadeInSection from '@/components/FadeInSection';
import { getPartnerReason } from '@/pages/Partners/constants/data';
import { motion } from 'framer-motion';

const PartnersSupport = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles['partners-support']}>
      <SubTitle title={intl.formatMessage({ id: 'ecosystem.support.title' })} />
      <div className={styles['partners-support-content']}>
        <Row gutter={[24, 24]}>
          {getPartnerReason(intl).map((item, index) => {
            return (
              <Col span={12} key={item.key}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={styles.benefitCard}
                >
                  <div className={styles.title}>
                    <span className={styles.benefitCardNumber}>
                      {index + 1}
                    </span>
                    <div>{item.support}</div>
                  </div>
                  <div className={styles.desc}>{item.desc}</div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default PartnersSupport;
