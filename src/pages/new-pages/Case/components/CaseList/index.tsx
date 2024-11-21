import { SubTitle } from '@/components/SubTitle';
import styles from './index.less';
import { IntlShape } from 'react-intl';
import { getDemos } from '@/data/demos';
import { getExamples } from '@/data/examples';
import FadeInSection from '@/components/FadeInSection';
const list = [
  {
    title: '蚂蚁集团',
    desc: '全图风控技术应对复杂多变、不断升级的金融风险',
    img: '',
    challenge:
      '金融风险防控是一个不断对抗升级的过程，越来越多的欺诈、洗钱案例呈现出团伙性和隐蔽性，仅靠单一事件和行为识别已无法准确决策，需要引入多维异构数据，进行全局洞察。',
    plan: '图计算技术正是解决这种复杂金融关系的有效手段。通过构建体系化监控，进一步识别风险全貌，显著提高遏制洗钱、欺诈等恶意金融行为的精准性。TuGraph 同时支持 OLTP 和 OLAP，其高吞吐、低延迟的产品特性，能够快速识别和防范金融风险行为，满足日趋严格的防控要求。',
    score:
      '通过图计算技术，2020全年反洗钱风险审理分析效率提升 90%，风险识别能力提升了 9.4倍，有效的保护了支付宝百万亿交易规模的资金安全。',
  },
  {
    title: '某大型能源集团',
    desc: '',
    img: '',
    challenge:
      '鉴于电网庞大的设备规模和快速变化的用户行为，实时管理电网设备及监控运行状态一直是电网管理面临的挑战。蚂蚁集团联合用户开展基于图计算技术的设备管理及运行状态监控的探索与验证。',
    plan: '采用图数据模型代替传统关系型数据，每个顶点代表一个设备，每条边代表一条电力线，可以更直观的呈现电力设备及网络。通过 TuGraph 对图数据进行统一存储、管理和计算，其强大的查询语言、多层次灵活的 API，能够实时追踪电网运行状态，支持频繁且复杂的实时数据查询和更加高效的电网模拟计算。',
    score:
      '双方通过 TuGraph 探索实时跟踪电网中数亿台设备的状态，包括响应复杂的实时查询(例如“从电源到接收器的最短路径”)，模拟计划运行的效果(例如“添加新的设备或断开开关不会无意中破坏整个电网”)。',
  },
];

const CaseList = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles.caseList}>
      <SubTitle title={intl.formatMessage({ id: 'demo.examples' })} />
      <div>
        {getExamples(intl).map((item, key) => {
          return (
            <div className={styles.caseItem} key={key}>
              <div className={styles.caseContent}>
                <FadeInSection>
                  <div className={styles.caseTitle}>{item.title}</div>
                </FadeInSection>
                <FadeInSection>
                  {item?.description ? (
                    <div className={styles.caseDesc}>{item.description}</div>
                  ) : null}
                </FadeInSection>

                <FadeInSection>
                  <div>
                    <div className={styles.subTitle}>
                      {intl.formatMessage({ id: 'demo.example.challenge' })}
                    </div>
                    <div className={styles.explanation}>{item.challenge}</div>
                  </div>
                </FadeInSection>
                <FadeInSection>
                  <div>
                    <div className={styles.subTitle}>
                      {intl.formatMessage({ id: 'demo.example.solution' })}
                    </div>
                    <div className={styles.explanation}>{item.solution}</div>
                  </div>
                </FadeInSection>
                <FadeInSection>
                  <div>
                    <div className={styles.subTitle}>
                      {intl.formatMessage({ id: 'demo.example.profit' })}
                    </div>
                    <div className={styles.explanation}>{item.profit}</div>
                  </div>
                </FadeInSection>
              </div>

              <FadeInSection>
                <div
                  className={styles.caseImg}
                  style={{ backgroundImage: `url(${item?.img})` }}
                />
              </FadeInSection>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseList;
