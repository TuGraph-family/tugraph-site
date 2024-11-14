import { Col, Row } from 'antd';
import styles from './index.less';
const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>产品介绍</div>
      <div className={styles.desc}>
        TuGraph图数据库由蚂蚁集团与清华大学合作开发，涵盖了图存储、计算、学习及研发平台等技术，具备大规模图集群，有效应对大数据量、高吞吐率和低延迟挑战。作为蚂蚁集团金融风控的关键基础设施，它大幅提升了欺诈、洗钱等风险的实时识别与分析效率，并服务于金融、工业、政务等多个领域。2022年9月，TuGraph发布了开源单机版，支持TB级数据管理，为用户提供了高效、易用且可靠的复杂关联数据分析平台。
      </div>
      <div className={styles.featureContainer}>
        <Row gutter={[24, 24]} className={styles.contentBoxAll}>
          <Col span={16}>
            <div className={styles.contentBox}>
              <img
                src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
                className={styles.featureImage}
              />
              <div className={styles.type}>消息</div>
              <div className={styles.title}>完备可靠的一站式图存储</div>
              <div className={styles.descContent}>
                {' '}
                HTAP原生图数据库，满足实时(如实时审核或推荐业务）和离线(如审计业务）的毫秒级复杂查询需求。支持分布式扩展,万亿图数据处理能力，千万顶点/秒的高吞吐率和低延迟，轻松应对不断变化的业务数据。支持ACID事务处理，达到可串行化隔离级别，保障数据一致性，超越国际灾难恢复能力6级要求，金融级高可靠。
              </div>
            </div>
          </Col>
          <Col span={8}>
            {' '}
            <div className={styles.contentBox}>
              <div className={styles.type}>消息</div>
              <div className={styles.title}>完备可靠的一站式图存储</div>
              <div className={styles.descContent}>
                {' '}
                HTAP原生图数据库，满足实时(如实时审核或推荐业务）和离线(如审计业务）的毫秒级复杂查询需求。支持分布式扩展,万亿图数据处理能力，千万顶点/秒的高吞吐率和低延迟，轻松应对不断变化的业务数据。支持ACID事务处理，达到可串行化隔离级别，保障数据一致性，超越国际灾难恢复能力6级要求，金融级高可靠。
              </div>
            </div>
          </Col>
          <Col span={8}>
            {' '}
            <div className={styles.contentBox}>
              <div className={styles.type}>消息</div>
              <div className={styles.title}>完备可靠的一站式图存储</div>
              <div className={styles.descContent}>
                {' '}
                HTAP原生图数据库，满足实时(如实时审核或推荐业务）和离线(如审计业务）的毫秒级复杂查询需求。支持分布式扩展,万亿图数据处理能力，千万顶点/秒的高吞吐率和低延迟，轻松应对不断变化的业务数据。支持ACID事务处理，达到可串行化隔离级别，保障数据一致性，超越国际灾难恢复能力6级要求，金融级高可靠。
              </div>
            </div>
          </Col>
          <Col span={16}>
            {' '}
            <div className={styles.contentBox}>
              <img
                src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
                className={styles.featureImage}
              />
              <div className={styles.type}>消息</div>
              <div className={styles.title}>完备可靠的一站式图存储</div>
              <div className={styles.descContent}>
                {' '}
                HTAP原生图数据库，满足实时(如实时审核或推荐业务）和离线(如审计业务）的毫秒级复杂查询需求。支持分布式扩展,万亿图数据处理能力，千万顶点/秒的高吞吐率和低延迟，轻松应对不断变化的业务数据。支持ACID事务处理，达到可串行化隔离级别，保障数据一致性，超越国际灾难恢复能力6级要求，金融级高可靠。
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Introduction;
