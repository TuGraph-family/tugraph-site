import { SubTitle } from '@/components/SubTitle';
import { IntlShape } from 'react-intl';
import styles from './index.less';
import { getPartnerReason } from '@/data/get_partner_reason';
import { Col, Row } from 'antd';
import FadeInSection from '@/components/FadeInSection';

const PartnersSupport = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles['partners-support']}>
      <SubTitle
        title={intl.formatMessage({ id: 'ecosystem.support.title' })}
        style={{ margin: '0 0 60px' }}
      />
      <div className={styles['partners-support-content']}>
        <Row gutter={[24, 24]}>
          {getPartnerReason(intl).map((item, index) => {
            return (
              <Col span={12} key={index}>
                <FadeInSection>
                  <div className={styles.supportItem}>
                    <img src={item.src} alt="icon" />
                    <div>{item.support}</div>
                  </div>
                </FadeInSection>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default PartnersSupport;
