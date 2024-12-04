import { Col, Row } from 'antd';
import styles from './index.less';
import { SubTitle } from '@/components/SubTitle';
import FadeInSection from '@/components/FadeInSection';
import { IntlShape } from 'react-intl';
const Introduction = ({ type, intl }: { type: string; intl: IntlShape }) => {
  const intls = {
    db: {
      desc: intl.formatMessage({ id: 'product.introduction0' }),
      list: [
        {
          title: intl.formatMessage({ id: 'product.feature.title0' }),
          desc: intl.formatMessage({ id: 'product.feature.desc0' }),
          img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/9u-MTL-YQDAAAAAAAAAAAAAADh8WAQFr/original',
          span: 16,
        },
        {
          title: intl.formatMessage({ id: 'product.feature.title1' }),
          desc: intl.formatMessage({ id: 'product.feature.desc1' }),
          span: 8,
        },
        {
          title: intl.formatMessage({ id: 'product.feature.title2' }),
          desc: intl.formatMessage({ id: 'product.feature.desc2' }),
          span: 8,
        },
        {
          title: intl.formatMessage({ id: 'product.feature.title3' }),
          desc: intl.formatMessage({ id: 'product.feature.desc3' }),
          img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/QHv2TYUyUesAAAAAAAAAAAAADh8WAQFr/original',
          span: 16,
        },
      ],
    },
    analytics: {
      desc: intl.formatMessage({ id: 'product_analytics.introfuction' }),
      list: [
        {
          title: intl.formatMessage({ id: 'product_analytics.feature.title0' }),
          desc: intl.formatMessage({ id: 'product_analytics.feature.desc0' }),
          span: 8,
        },
        {
          title: intl.formatMessage({ id: 'product_analytics.feature.title1' }),
          desc: intl.formatMessage({ id: 'product_analytics.feature.desc1' }),
          span: 8,
        },
        {
          title: intl.formatMessage({ id: 'product_analytics.feature.title2' }),
          desc: intl.formatMessage({ id: 'product_analytics.feature.desc2' }),
          span: 8,
        },
        {
          title: intl.formatMessage({ id: 'product_analytics.feature.title3' }),
          desc: intl.formatMessage({ id: 'product_analytics.feature.desc3' }),
          span: 8,
        },
        {
          title: intl.formatMessage({ id: 'product_analytics.feature.title4' }),
          desc: intl.formatMessage({ id: 'product_analytics.feature.desc4' }),
          span: 8,
        },
        {
          title: intl.formatMessage({ id: 'product_analytics.feature.title5' }),
          desc: intl.formatMessage({ id: 'product_analytics.feature.desc5' }),
          span: 8,
        },
      ],
    },
    learn: {
      desc: intl.formatMessage({ id: 'product_learn.introfuction' }),
      list: [
        {
          title: intl.formatMessage({ id: 'product_learn.feature.title0' }),
          desc: intl.formatMessage({ id: 'product_learn.feature.desc0' }),
          span: 12,
        },
        {
          title: intl.formatMessage({ id: 'product_learn.feature.title1' }),
          desc: intl.formatMessage({ id: 'product_learn.feature.desc1' }),
          span: 12,
        },
        {
          title: intl.formatMessage({ id: 'product_learn.feature.title2' }),
          desc: intl.formatMessage({ id: 'product_learn.feature.desc2' }),
          span: 12,
        },
        {
          title: intl.formatMessage({ id: 'product_learn.feature.title3' }),
          desc: intl.formatMessage({ id: 'product_learn.feature.desc3' }),
          span: 12,
        },
      ],
    },
    enterprise: {
      desc: intl.formatMessage({
        id: 'product.feature.overview.introduction0',
      }),
      list: [
        {
          title: intl.formatMessage({ id: 'product.feature.overview.title0' }),
          desc: intl.formatMessage({ id: 'product.feature.overview.desc0' }),
          img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/9u-MTL-YQDAAAAAAAAAAAAAADh8WAQFr/original',
          span: 16,
        },
        {
          title: intl.formatMessage({ id: 'product.feature.overview.title1' }),
          desc: intl.formatMessage({ id: 'product.feature.overview.desc1' }),
          span: 8,
        },
        {
          title: intl.formatMessage({ id: 'product.feature.overview.title2' }),
          desc: intl.formatMessage({ id: 'product.feature.overview.desc2' }),
          span: 8,
        },
        {
          title: intl.formatMessage({ id: 'product.feature.overview.title3' }),
          desc: intl.formatMessage({ id: 'product.feature.overview.desc3' }),
          img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/QHv2TYUyUesAAAAAAAAAAAAADh8WAQFr/original',
          span: 16,
        },
      ],
    },
    clound: {
      desc: intl.formatMessage({ id: 'product.overview.clound.desc' }),
      list: [
        {
          title: intl.formatMessage({ id: 'product.clound.title' }),
          desc: intl.formatMessage({ id: 'product.clound.desc' }),
          span: 12,
        },
        {
          title: intl.formatMessage({ id: 'product.clound.title1' }),
          desc: intl.formatMessage({ id: 'product.clound.desc1' }),
          span: 12,
        },
        {
          title: intl.formatMessage({ id: 'product.clound.title2' }),
          desc: intl.formatMessage({ id: 'product.clound.desc2' }),
          span: 12,
        },
        {
          title: intl.formatMessage({ id: 'product.clound.title3' }),
          desc: intl.formatMessage({ id: 'product.clound.desc3' }),
          span: 12,
        },
      ],
    },
  };

  const data = intls?.[type] || {};
  return (
    <div
      className={styles.container}
      style={type === 'db' ? { paddingTop: 160 } : { marginTop: -127 }}
    >
      <div>
        <SubTitle title={intl.formatMessage({ id: 'product.intro' })} />
        <FadeInSection>
          <div className={styles.desc}>{data.desc}</div>
        </FadeInSection>
        <FadeInSection>
          <div className={styles.featureContainer}>
            <Row gutter={[24, 24]} className={styles.contentBoxAll}>
              {data.list?.map((item, key) => (
                <Col span={item?.span} key={key}>
                  <div className={styles.contentBox}>
                    <div className={styles.intlText}>
                      <div className={styles.title}>{item?.title}</div>
                      <div className={styles.descContent}>{item?.desc} </div>
                    </div>
                    {item?.img ? (
                      <img src={item?.img} className={styles.featureImage} />
                    ) : null}
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
