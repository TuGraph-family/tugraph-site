import React from 'react';
import { Button, Layout, Space } from 'antd';
import { Banner } from '@/components/Banner';
import { Carousel } from '@/components/Carousel';
import { SubTitle } from '@/components/SubTitle';
import { useIntl } from 'umi';
import styles from './index.less';

const { Content, Footer } = Layout;

export default function IndexPage() {
  const intl = useIntl();
  const reasons = [
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/a857ccc8-fa90-4505-9011-79de5d1cfdd9.svg',
      title: intl.formatMessage({ id: 'home.reason0' }),
      desc: intl.formatMessage({ id: 'home.reason.desc0' }),
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/db35b305-00ce-4e4c-903d-bc8b6f207dfe.svg',
      title: intl.formatMessage({ id: 'home.reason1' }),
      desc: intl.formatMessage({ id: 'home.reason.desc1' }),
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/6e588b1a-94c4-41aa-a096-72b249dd71b3.svg',
      title: intl.formatMessage({ id: 'home.reason2' }),
      desc: intl.formatMessage({ id: 'home.reason.desc2' }),
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d2afb1b2-25cc-4a0d-9b1b-3aff691d353a.svg',
      title: intl.formatMessage({ id: 'home.reason3' }),
      desc: intl.formatMessage({ id: 'home.reason.desc3' }),
    },
  ];

  return (
    <Layout className={styles.homeLayout}>
      <Content>
        <Banner />
        <div className={styles.containerWrapper}>
          <Carousel />
          <SubTitle title={intl.formatMessage({ id: 'home.users' })} />
          <Space size={75} className={styles.users}>
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/dbe22a71-a25c-4a48-afcc-1c506f46e967.svg" />
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/c6011698-6941-45f2-ae6b-30c68533bf2e.svg" />
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/2a719040-1c3d-4e89-8582-6123edd66bfb.svg" />
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/70556970-4075-482c-ac07-e30b55403184.svg" />
          </Space>
          <div className={styles.moreDemo}>
            <a href="" className={styles.text}>
              {intl.formatMessage({ id: 'home.moreDemo' })}
            </a>
          </div>
          <SubTitle title={intl.formatMessage({ id: 'home.choseReason' })} />
          <Space size={20} className={styles.reasonCards}>
            {reasons.map((item, key) => {
              return (
                <div className={styles.reasonCard} key={key}>
                  <img src={item.icon} />
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.desc}>{item.desc}</div>
                </div>
              );
            })}
          </Space>
          <div className={styles.versionsWrapper}>
            <SubTitle
              title={intl.formatMessage({ id: 'home.chooseVersion' })}
              showIcon={false}
            />
            <Space className={styles.versions} size={54}>
              <div className={styles.version} key={0}>
                <div className={styles.title}>
                  {intl.formatMessage({ id: 'home.version0' })}
                </div>
                <div className={styles.desc}>
                  {intl.formatMessage({ id: 'home.version.desc0' })}
                </div>
                <Button type="primary" block className="lightBtn">
                  {intl.formatMessage({ id: 'home.version.startUse' })}
                </Button>
              </div>
              <div className={styles.version} key={1}>
                <div className={styles.title}>
                  {intl.formatMessage({ id: 'home.version1' })}
                </div>
                <div className={styles.desc}>
                  {intl.formatMessage({ id: 'home.version.desc1' })}
                </div>
                <Button type="primary" block className="lightBtn">
                  {intl.formatMessage({ id: 'home.version.contactUs' })}
                </Button>
              </div>
            </Space>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>xxx</Footer>
    </Layout>
  );
}
