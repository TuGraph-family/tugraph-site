import React from 'react';
import { Layout, Space } from 'antd';
import { Banner } from '@/components/Banner';
import { Carousel } from '@/components/Carousel';
import { SubTitle } from '@/components/SubTitle';
import { useIntl } from 'umi';
import styles from './index.less';

const { Content, Footer } = Layout;

export default function IndexPage() {
  const intl = useIntl();
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
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>xxx</Footer>
    </Layout>
  );
}
