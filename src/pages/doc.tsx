import React from 'react';
import { Layout } from 'antd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import styles from './doc.less';

const { Content } = Layout;

export default function FormPage() {
  return (
    <Layout>
      <div className={styles.headerWrapper}>
        <Header activeKey="doc" />
      </div>

      <Content className={styles.containerWrapper}>
        <div className={styles.iframeWrapper}>
          <iframe
            className={styles.doc}
            src="https://www.oceanbase.com/docs/enterprise/tugraph-cn/V3.1.1/10000000000485369"
            frameBorder="0"
          ></iframe>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
