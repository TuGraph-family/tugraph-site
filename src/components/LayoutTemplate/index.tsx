import React from 'react';
import { Layout } from 'antd';
import { Banner, BannerInfoProps } from '@/components/Banner';
import { Footer } from '@/components/Footer';

import styles from './index.less';

const { Content } = Layout;

export interface LayoutProps {
  bannerInfo: BannerInfoProps;
  content: JSX.Element;
}

export const LayoutTemplate = ({ bannerInfo, content }: LayoutProps) => {
  return (
    <Layout>
      <Content>
        <Banner {...bannerInfo} />
        <div className={styles.mainWrapper}>
          <div className={styles.content}>{content}</div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
