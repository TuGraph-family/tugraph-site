import { NewLayout } from '@/components/NewLayout';
import InfoContent from '@/pages/new-pages/Blog/info/components/InfoContent';
import styles from './index.less';
import InfoRight from '@/pages/new-pages/Blog/info/components/InfoRight';

const BlogInfo = () => {
  const markdown = `
  近日，国际权威图数据库测试机构国际关联数据基准委员会（LDBC）公布了行业通用的社交网络基准测试（LDBC SNB）最新结果。蚂蚁集团图数据库 TuGraph 打破官方审计测试纪录，再次拿到世界第一，这一纪录较 LDBC 早前公布的最高纪录吞吐量提升了 52%，也超过了两年前由 TuGraph 保持的世界纪录 1 倍以上。\n\r![image](https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*ML2VR5-Eh-cAAAAAAAAAAAAAARQnAQ)
  ## 关于 LDBC 和 SNB 测试

  ### test
LDBC，即“关联数据基准测评委员会”（Linked Data Benchmark Council），是全球公认的图数据库领域基准指南制定者与测试机构，与 TPC 并称为国际数据库行业两大权威技术组织。

  #### 123
SNB，即社交网络基准测试 （Social Network Benchmark），是由 LDBC 开发的面向图数据库的基准测试（Benchmark）之一。SNB 测试由于更贴近现实系统，同时包含了读写任务，简单和复杂查询，规定了系统的响应时间，更能体现系统的综合性能，是目前图数据行业最成熟和通用的性能测试。

LDBC SNB 测试由指定的第三方机构进行，从数据导入到结果验证均由第三方在云平台上执行，最终结果由 LDBC 执行委员会进行审计并公布，最大限度的保证了结果的可信性。同时，SNB 还公布了测试过程所用的程序和脚本，以及测试过程中产生的详细结果，进一步确保了测试的可复现性。

## 关于 TuGraph


蚂蚁集团图数据库 TuGraph 是基于图模型的一站式数据存储和分析系统，擅长处理大规模关联数据的管理和分析，如社交关系、物流服务、设备管网、金融交易等场景，数千倍优化分析性能，天然具备数据可视化展示。

TuGraph 拥有业界领先的集群规模和性能，是蚂蚁集团金融风控能力的重要基础设施，显著提升了欺诈洗钱等金融风险的实时识别能力和审理分析效率，提供了稳定的决策支持能力，其中，支撑支付宝的重要风险识别能力提升了近 10 倍，风险审理分析效率提升 90%。

TuGraph 已被成熟应用于安全风控、信贷风控、知识图谱、数据血缘、资金分析、流量归因分析、会员关系等场景，并面向金融、工业、政务服务等行业客户。
  `;
  return (
    <NewLayout
      content={
        <div className={styles.blogInfo}>
          <InfoContent markdown={markdown} />
          <InfoRight markdown={markdown} />
        </div>
      }
    />
  );
};

export default BlogInfo;
