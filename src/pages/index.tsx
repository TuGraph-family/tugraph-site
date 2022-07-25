import React from 'react';
import { Layout, Space } from 'antd';
import { Banner } from '@/components/Banner';
import { Header } from '@/components/Header';
import { BannerCarousel } from '@/components/Carousel';
import { useIntl } from 'umi';
import styles from './index.less';

const { Content, Footer } = Layout;

export default function IndexPage() {
  const intl = useIntl();
  return (
    <Layout className={styles.homeLayout}>
      <Header />
      <Content>
        <Banner />
        <BannerCarousel />
        <div className={styles.containerWrapper}>
          <div className={styles.subTitleGroup}>
            <div className={styles.subTitle}>
              {intl.formatMessage({ id: 'home.users' })}
            </div>
          </div>
          <Space>
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/dbe22a71-a25c-4a48-afcc-1c506f46e967.svg" />
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/c6011698-6941-45f2-ae6b-30c68533bf2e.svg" />
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/2a719040-1c3d-4e89-8582-6123edd66bfb.svg" />
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/70556970-4075-482c-ac07-e30b55403184.svg" />
          </Space>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>xxx</Footer>
    </Layout>
  );
}
