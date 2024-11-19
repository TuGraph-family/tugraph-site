import React from 'react';
import FadeInSection from '@/components/FadeInSection';
import styles from './index.less';

const WhyChoose: React.FC = () => {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.featureDescriptionWrapper}>
        <FadeInSection>
          <div className={styles.tuGraphTitle}>为什么选择TuGraph</div>
        </FadeInSection>
        <FadeInSection>
          <span className={styles.reliabilityAndSecurityDesign}>
            高可靠性和安全性设计
          </span>
          <span className={styles.dataComplianceAndProtection}>
            源自蚂蚁集团的数据计算和分析要求，满足用户合规、审计、访问控制等要求。具备金融级高可用性、可串行化隔离级别，超越灾备标准最高级（6级），实现业务系统不间断运行，保护数据不丢失
          </span>
        </FadeInSection>
        <FadeInSection>
          <span className={styles.businessPerformanceOptimization}>
            优化企业业务性能
          </span>
          <span className={styles.realTimeAndOfflineAnalysis}>
            HTAP图数据库，满足实时环境(如实时审核或推荐）和离线分析
          </span>
          <span className={styles.millisecondQuerySupport}>
            （如审计）的毫秒级复杂查询需求，一站式存储、查询、分析。具备
          </span>
          <span className={styles.trillionDataHandling}>
            万亿级图数据处理能力，图数据库性能基准测试世界纪录保持者
          </span>
        </FadeInSection>
        <FadeInSection>
          <span className={styles.intuitiveDataManager}>直观的数据管理</span>
          <span className={styles.easyModelingAndQuery}>
            方便业务和开发人员低代码完
          </span>
          <span className={styles.graphAlgorithmIntegration}>
            成建模、查询和分析;内置5大类近30种图分析算法，轻松
          </span>
          <span className={styles.efficientApplicationBuilding}>
            搭建高效的场景应用
          </span>
        </FadeInSection>
        <FadeInSection>
          <span className={styles.comprehensiveDevelopmentSupport}>
            完整且可扩展的应用开发
          </span>
          <span className={styles.rapidApplicationCreation}>
            开发人员可使用主流查询语言、编程语言、接口协议来快速创建
          </span>
          <span className={styles.trillionDataHandling}>
            应用，快速对接业务系统、融合数据存储，能够与常见开源架构
          </span>
          <span className={styles.smoothMigrationCapability}>平滑迁移</span>
        </FadeInSection>
      </div>
    </div>
  );
};

export default WhyChoose;
