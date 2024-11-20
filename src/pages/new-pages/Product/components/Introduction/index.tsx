import { Col, Row } from 'antd';
import styles from './index.less';
import { SubTitle } from '@/components/SubTitle';
import FadeInSection from '@/components/FadeInSection';
const Introduction = ({ type }: { type: string }) => {
  const intls = {
    db: {
      desc: 'TuGraph图数据库由蚂蚁集团与清华大学合作开发，涵盖了图存储、计算、学习及研发平台等技术，具备大规模图集群，有效应对大数据量、高吞吐率和低延迟挑战。作为蚂蚁集团金融风控的关键基础设施，它大幅提升了欺诈、洗钱等风险的实时识别与分析效率，并服务于金融、工业、政务等多个领域。2022年9月，TuGraph发布了开源单机版，支持TB级数据管理，为用户提供了高效、易用且可靠的复杂关联数据分析平台。',
      list: [
        {
          type: '特性',
          title: '完备可靠的一站式图存储',
          desc: 'HTAP原生图数据库，满足实时（如实时审核或推荐业务）和离线（如审计业务）的毫秒级复杂查询需求。支持分布式扩展，万亿图数据处理能力，千万顶点/秒的高吞吐率和低延迟，轻松应对不断变化的业务数据。支持ACID事务处理，达到可串行化隔离级别，保障数据一致性，超越国际灾难恢复能力6级要求，金融级高可靠。',
          img: 'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
          span: 16,
        },
        {
          type: '特性',
          title: '极速灵活的图分析',
          desc: '强大的图数据计算能力，对海量数据进行全图迭代计算，以极短时间完成超大计算量的业务需求；多跳复杂分析能力，深度挖掘数据关系。内置5大类近30种图分析算法，支持各类业务分析场景。提供灵活、多层级API，兼容主流查询语言。低门槛轻量级部署，支持与常见开源架构间数据的平滑迁移。',
          span: 8,
        },
        {
          type: '特性',
          title: '便捷易用的可视化平台',
          desc: '内置可视化控制台和管理工具，实现可视化的创建图谱、构建模型、导入数据、安装插件，帮助用户实现零代码数据获取和数据挖掘。数据可视化展示，直观展现数据之间的复杂关联关系。',
          span: 8,
        },
        {
          type: '特性',
          title: '开箱即用的运维监控平台',
          desc: '数据库实时运维监控展示，支持Docker、centos、Ubuntu的一键部署，开箱即用。同时提供了丰富可拓展的接口，支持用户的二次开发，实现系统对接。并支持Prometheus、Grafana等主流开源监控告警工具。',
          img: 'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
          span: 16,
        },
      ],
    },
    analytics: {
      desc: 'TuGraph图数据库由蚂蚁集团与清华大学合作开发，涵盖了图存储、计算、学习及研发平台等技术，具备大规模图集群，有效应对大数据量、高吞吐率和低延迟挑战。作为蚂蚁集团金融风控的关键基础设施，它大幅提升了欺诈、洗钱等风险的实时识别与分析效率，并服务于金融、工业、政务等多个领域。2022年9月，TuGraph发布了开源单机版，支持TB级数据管理，为用户提供了高效、易用且可靠的复杂关联数据分析平台。',
      list: [
        {
          type: '特性',
          title: '动态图计算',
          desc: '业内率先支持动态图分析的工业级图计算引擎，提升图计算结果的实时性。',
          span: 8,
        },
        {
          type: '特性',
          title: '图表混合处理',
          desc: '采用SQL+GQL的融合分析语言，提供图模型和表模型的混合数据处理能力。',
          span: 8,
        },
        {
          type: '特性',
          title: '统一流批图',
          desc: '基于Cycle的事件驱动调度机制，统一了流计算、批处理、图计算模型。',
          span: 8,
        },
        {
          type: '特性',
          title: '云原生部署',
          desc: '支持K8S等多种执行环境，提供图任务研发管理工具，更适合云上快速部署。',
          span: 8,
        },
        {
          type: '特性',
          title: '图原生存储',
          desc: '提供面向图的原生存储系统，支持高性能读写和计算下推能力。敬请期待……',
          span: 8,
        },
        {
          type: '特性',
          title: '交互式图分析',
          desc: '提供图数据的交互式访问和实时分析能力，快速接入BI分析和可视化工具。敬请期待……',
          span: 8,
        },
      ],
    },
    learn: {
      desc: 'TuGraph 图学习是在 TuGraph Database 的基础上开发的一个图学习框架，继承了图机器学习的能力，使得用户能够使用 TuGraph 数据库直接进行图学习模型的开发、训练和推理。TuGraph 图学习支持 Neighbor Sampling、Negative Sampling、Edge Sampling 和 Random Walk Sampling 等多重采样算法，后端支持 DGL, PyG, OpenHGNN 等多种主流开源图学习框架。用户只需要使用 TuGraph 支持的子图采样和全图装载的API，即可方便地在主流图学习框架中使用。另外，TuGraph 图学习支持编译加速技术，用户只需要一行代码，即可加速图学习的训练和推理性能。',
      list: [
        {
          type: '特性',
          title: '支持大规模数据',
          desc: '基于 TuGraph 图数据库开发的图学习，数据可导入图数据库以外存储，支持更大规模的数据。',
          span: 12,
        },
        {
          type: '特性',
          title: '原生 TuGraph 数据库支持',
          desc: 'TuGraph 数据库原生支持图学习的训练和推理，避免用户使用多条系统来回切换。',
          span: 12,
        },
        {
          type: '特性',
          title: '无缝迁移',
          desc: '后端支持主流图学习框架，用户学习成本低。',
          span: 12,
        },
        {
          type: '特性',
          title: '高性能',
          desc: 'TuGraph 图学习具有高性能、高可操作性等特点。',
          span: 12,
        },
      ],
    },
    enterprise: {
      desc: 'TuGraph 图数据库由蚂蚁集团与清华大学合作开发，构建了包含图存储、计算、学习及研发平台的完整技术体系。它拥有业界领先的图集群规模，能够处理大数据量、高吞吐率和低延迟等挑战，是蚂蚁集团金融风控的关键基础设施，有效提升了实时识别欺诈洗钱等风险的能力和分析效率，并服务于金融、工业、政务服务等行业。基于超过 300 个业务场景的应用，TuGraph 为用户提供了一站式的图探索、研发、服务和运维支持；其分布式、多中心且具备金融级高可用性的架构，经受“双十一”等活动的极致系统考验，轻松应对海量业务数据和并发。',
      list: [
        {
          type: '特性',
          title: '企业级分布式图数据库',
          desc: '金融级分布式图数据库，万亿图数据处理能力，千万顶点/秒的高吞吐率和低延迟，支持分布式事务。主要用于实时图查询，面向有海量并发，需要实时更新、数据可靠性要求高的场景。',
          img: 'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
          span: 16,
        },
        {
          type: '特性',
          title: '低开销高性能图计算系统',
          desc: '提供超大规模图的图数据迭代计算能力，内置五大类三十余种经典图算法，主要面向少量并发下，对全图数据的迭代计算。满足吞吐率较低，但计算量大的业务场景，通常处理时间在秒级到分钟级。',
          span: 8,
        },
        {
          type: '特性',
          title: '灵活易用的一站式图平台',
          desc: '一站式图平台，覆盖图构建、图研发、图服务、图运维的完整链路，实现图的全生命周期管理，无代码交互方式支持业务应用。提供可视化、一站式的图操作平台，支持多种类型数据源，快速图构建、图查询、图分析等。是图数据库、图计算引擎的研发控制台。',
          span: 8,
        },
        {
          type: '特性',
          title: '金融级高可用性的分布式架构设计',
          desc: '支持分布式扩展，千万顶点/秒的高吞吐率、低延迟响应，在蚂蚁集团内部已实现数十万核的在线集群。支持多副本、同城多机房、异地多机房、三地五中心等部署形态。',
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
      <SubTitle title="产品介绍" />
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
