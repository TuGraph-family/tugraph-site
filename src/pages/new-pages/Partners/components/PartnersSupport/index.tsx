import { SubTitle } from '@/components/SubTitle';
import { IntlShape } from 'react-intl';
import styles from './index.less';
import { Col, Row } from 'antd';
import FadeInSection from '@/components/FadeInSection';
import { getPartnerReason } from '@/pages/new-pages/Partners/constants/data';

const PartnersSupport = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles['partners-support']}>
      <SubTitle
        title={intl.formatMessage({ id: 'ecosystem.support.title' })}
        style={{ margin: '0 0 60px' }}
      />
      <div className={styles['partners-support-content']}>
        <Row gutter={[24, 24]}>
          {getPartnerReason(intl).map((item) => {
            return (
              <Col span={12} key={item.key}>
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
