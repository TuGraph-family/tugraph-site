import { Col, Row } from 'antd';
import styles from './index.less';
import { SubTitle } from '@/components/SubTitle';
import FadeInSection from '@/components/FadeInSection';
import { IntlShape } from 'react-intl';
import { getIntros } from '@/pages/Product/constants/data';
const Introduction = ({ type, intl }: { type: string; intl: IntlShape }) => {
  const data = getIntros(intl, type);
  return (
    <div className={styles.container}>
      <div>
        <SubTitle title={intl.formatMessage({ id: 'product.overview' })} />
        <FadeInSection>
          <div className={styles.desc}>{data.desc}</div>
        </FadeInSection>
        <FadeInSection threshold={0.3}>
          <div className={styles.featureContainer}>
            <Row gutter={[24, 24]} className={styles.contentBoxAll}>
              {data.list?.map((item) => (
                <Col
                  span={item?.span}
                  key={item.key}
                  xs={24}
                  sm={24}
                  md={item?.span}
                >
                  <div
                    className={styles.contentBox}
                    style={{ backgroundImage: `url(${item?.img})` }}
                  >
                    <div className={styles.title}>{item?.title}</div>
                    <div className={styles.descContent}>{item?.desc} </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Introduction;
