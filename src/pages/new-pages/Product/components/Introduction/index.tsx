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
          type: '特性',
          title: intl.formatMessage({ id: 'product.feature.title0' }),
          desc: intl.formatMessage({ id: 'product.feature.desc0' }),
          img: 'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
          span: 16,
        },
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product.feature.title1' }),
          desc: intl.formatMessage({ id: 'product.feature.desc1' }),
          span: 8,
        },
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product.feature.title2' }),
          desc: intl.formatMessage({ id: 'product.feature.desc2' }),
          span: 8,
        },
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product.feature.title3' }),
          desc: intl.formatMessage({ id: 'product.feature.desc3' }),
          img: 'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
          span: 16,
        },
      ],
    },
    analytics: {
      desc: intl.formatMessage({ id: 'product_analytics.introfuction' }),
      list: [
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product_analytics.feature.title0' }),
          desc: intl.formatMessage({ id: 'product_analytics.feature.desc0' }),
          span: 8,
        },
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product_analytics.feature.title1' }),
          desc: intl.formatMessage({ id: 'product_analytics.feature.desc1' }),
          span: 8,
        },
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product_analytics.feature.title2' }),
          desc: intl.formatMessage({ id: 'product_analytics.feature.desc2' }),
          span: 8,
        },
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product_analytics.feature.title3' }),
          desc: intl.formatMessage({ id: 'product_analytics.feature.desc3' }),
          span: 8,
        },
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product_analytics.feature.title4' }),
          desc: intl.formatMessage({ id: 'product_analytics.feature.desc4' }),
          span: 8,
        },
        {
          type: '特性',
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
          type: '特性',
          title: intl.formatMessage({ id: 'product_learn.feature.title0' }),
          desc: intl.formatMessage({ id: 'product_learn.feature.desc0' }),
          span: 12,
        },
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product_learn.feature.title1' }),
          desc: intl.formatMessage({ id: 'product_learn.feature.desc1' }),
          span: 12,
        },
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product_learn.feature.title2' }),
          desc: intl.formatMessage({ id: 'product_learn.feature.desc2' }),
          span: 12,
        },
        {
          type: '特性',
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
          type: '特性',
          title: intl.formatMessage({ id: 'product.feature.overview.title0' }),
          desc: intl.formatMessage({ id: 'product.feature.overview.desc0' }),
          img: 'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
          span: 16,
        },
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product.feature.overview.title1' }),
          desc: intl.formatMessage({ id: 'product.feature.overview.desc1' }),
          span: 8,
        },
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product.feature.overview.title2' }),
          desc: intl.formatMessage({ id: 'product.feature.overview.desc2' }),
          span: 8,
        },
        {
          type: '特性',
          title: intl.formatMessage({ id: 'product.feature.overview.title3' }),
          desc: intl.formatMessage({ id: 'product.feature.overview.desc3' }),
          img: 'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
          span: 16,
        },
      ],
    },
    clound: {
      desc: 'TuGraph Cloud 版是构建在阿里云公有云基础设施上，完全自主研发的原生分布式图数据库，通过计算巢私有化部署，自动完成云资源的创建及应用部署，大幅降低配置复杂度。',
      list: [
        {
          type: '特性',
          title: '便捷的部署和维护',
          desc: '由阿里云提供统一的基础设施，TuGraph实现云上自动化部署，分钟级实现集群的快速部署与上线；同时，阿里云提供的自动化运维工具和服务，极大降低了维护成本。',
          span: 12,
        },
        {
          type: '特性',
          title: '弹性扩展',
          desc: '依托阿里云强大的基础设施，用户可以根据业务需求灵活调整资源配置，保证系统始终运行在最佳状态。',
          span: 12,
        },
        {
          type: '特性',
          title: '安全可靠',
          desc: '阿里云提供的安全防护和容灾备份机制，为用户的数据安全提供了有力保障。',
          span: 12,
        },
        {
          type: '特性',
          title: '生态整合',
          desc: '通过阿里云市场，TuGraph能够与阿里云的其他服务无缝集成，进一步提升数据处理和分析能力。',
          span: 12,
        },
      ],
    },
  };

  const data = intls?.[type] || {};
  return (
    <div
      className={styles.container}
      style={{
        paddingTop: type === 'db' ? 160 : 0,
      }}
    >
      <SubTitle title={intl.formatMessage({ id: 'product.intro' })} />
      <FadeInSection>
        <div className={styles.desc}>{data.desc}</div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.featureContainer}>
          <Row gutter={[24, 24]} className={styles.contentBoxAll}>
            {data.list?.map((item) => (
              <Col span={item?.span}>
                <div className={styles.contentBox}>
                  <div className={styles.intlText}>
                    <div className={styles.type}>{item?.type}</div>
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
  );
};

export default Introduction;
