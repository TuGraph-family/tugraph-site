import { Badge, Button } from 'antd';
import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';
import { SubTitle } from '@/components/SubTitle';
import FadeInSection from '@/components/FadeInSection';

const QuickStart = () => {
  const list = [
    {
      stepKey: '01',
      title: '环境准备',
      icon: <ArrowRightOutlined className={styles.stepIcon} />,
      descList: ['参考《环境准备》确保您的软硬件环境满足要求下载 TuGraph DB'],
    },
    {
      stepKey: '02',
      title: '部署安装',
      icon: <ArrowRightOutlined className={styles.stepIcon} />,
      descList: [
        '设置配置文件',
        '安装TuGraph DB',
        '全链路跨域管控和保障数据产品值稀缺性',
      ],
    },
    {
      stepKey: '03',
      title: '启动 TuGraph DB',
      icon: <ArrowRightOutlined className={styles.stepIcon} />,
      descList: ['开启 TuGraph DB 服务', '查看进程状态'],
    },
  ];

  return (
    <div className={styles.lastSectionContainer}>
      <SubTitle title="快速上手" style={{ margin: '55px 0 29px' }} />

      <FadeInSection>
        <div className={styles.stepList}>
          {list?.map((item) => {
            return (
              <div key={item.stepKey} className={styles.step}>
                <div className={styles.stepNumber}>{item.stepKey}</div>
                <ArrowRightOutlined className={styles.stepIcon} />
                <div className={styles.stepTitle}>{item.title}</div>
                <ul>
                  {item.descList?.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                  <li>
                    参考《环境准备》确保您的软硬件环境满足要求下载 TuGraph DB
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </FadeInSection>

      <FadeInSection>
        <Button
          type="primary"
          size="large"
          shape="round"
          className={styles.startGuideButton}
        >
          <span className={styles.buttonTextQuickStart}>快速上手</span>
          <ArrowRightOutlined className={styles.arrowRightIcon} />
        </Button>
      </FadeInSection>
    </div>
  );
};

export default QuickStart;
