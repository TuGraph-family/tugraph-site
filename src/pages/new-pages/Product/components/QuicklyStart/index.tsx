import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';
import { SubTitle } from '@/components/SubTitle';
import FadeInSection from '@/components/FadeInSection';
import { IntlShape } from 'react-intl';
import { history } from 'umi';
import { historyPushLinkAt } from '@/util';

const QuickStart = ({ intl }: { intl: IntlShape }) => {
  const list = [
    {
      stepKey: '01',
      title: '环境准备',
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/U3jfTLMQ7LMAAAAAAAAAAAAADh8WAQFr/original',
      descList: ['参考《环境准备》确保您的软硬件环境满足要求下载 TuGraph DB'],
    },
    {
      stepKey: '02',
      title: '部署安装',
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/kE7XSITCy3sAAAAAAAAAAAAADh8WAQFr/original',
      descList: [
        '设置配置文件',
        '安装TuGraph DB',
        '全链路跨域管控和保障数据产品值稀缺性',
      ],
    },
    {
      stepKey: '03',
      title: '启动 TuGraph DB',
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/cZEPT4MxZ3gAAAAAAAAAAAAADh8WAQFr/original',
      descList: [
        '开启 TuGraph DB 服务',
        '查看进程状态',
        '浏览器访问，开启 TuGraph DB',
      ],
    },
  ];

  return (
    <div className={styles.lastSectionContainer}>
      <div>
        <SubTitle
          title={intl.formatMessage({ id: 'home.banner.quickStart' })}
          style={{ margin: '55px 0 0' }}
        />

        <FadeInSection>
          <div className={styles.stepList}>
            {list?.map((item) => {
              return (
                <div key={item.stepKey} className={styles.step}>
                  <div className={styles.stepNumber}>{item.stepKey}</div>
                  <img src={item.icon} alt="" className={styles.stepIcon} />
                  <div className={styles.stepTitle}>{item.title}</div>
                  <ul>
                    {item.descList?.map((desc) => (
                      <li key={desc}>{desc}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </FadeInSection>

        <FadeInSection>
          <div
            className={styles.startGuideButton}
            onClick={() => {
              history.push(historyPushLinkAt('/docs/tugraph-db'));
            }}
          >
            {intl.formatMessage({ id: 'product.btn.desc1' })}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default QuickStart;
