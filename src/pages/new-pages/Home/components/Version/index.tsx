import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';
import MainButton from '@/components/MainButton';
import { IntlShape } from 'react-intl';

const Version = ({ intl }: { intl: IntlShape }) => {
  const VERSION_LIST = [
    {
      key: 'comunity',
      versionName: intl.formatMessage({ id: 'home.version.title1' }),
      versionType: intl.formatMessage({ id: 'home.tugrpah.db' }),
      descList: [
        '完全开源免费，自由使用、修改和分发，降低使用成本',
        '集中式版本，支持高可用部署，轻松应对 TB 级别海量数据规模',
        '易用性强，可快速部署、轻松构建图应用',
        '社区活跃，问答和社群等社区技术支持快速响应',
      ],
      btn: (
        <MainButton
          type="experience"
          btnText={intl.formatMessage({ id: 'home.btn.desc' })}
        />
      ),
    },
    {
      key: 'enterprise',
      versionName: intl.formatMessage({ id: 'home.version.title2' }),
      versionType: intl.formatMessage({ id: 'home.distributed' }),
      descList: [
        '提供图存储、研发、服务、运维的图研发全链路管理',
        '分布式架构，金融级别高可用能力，轻松支持 PB 级以上海量数据规模',
        '适用于超大数据量的高吞吐率和低延迟业务场景',
        '专业的技术支持服务（钉钉群、电话、工单、现场等）',
      ],
      btn: (
        <MainButton
          type="consult"
          style={{ background: '#e1e4e8' }}
          btnText={intl.formatMessage({ id: 'home.btn.tryOut' })}
        />
      ),
    },
  ];

  return (
    <div className={styles.versionContainer}>
      <FadeInSection>
        <div className={styles.versionTitle}>
          {intl.formatMessage({ id: 'home.chooseVersion' })}
        </div>
      </FadeInSection>

      <div className={styles.versionListWrapper}>
        {VERSION_LIST.map((item) => (
          <FadeInSection key={item.key}>
            <div className={styles.editionWrapper}>
              <span className={styles.title}>{item.versionName}</span>
              <span className={styles.tag}>{item.versionType}</span>
              <div className={styles.line} />
              {item.descList.map((descItem) => (
                <div
                  key={descItem}
                  className={styles.recommendationPointWrapper}
                >
                  {descItem}
                </div>
              ))}
              {item.btn}
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Version;
