import React from 'react';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useIntl, useRequest } from 'umi';

import styles from './doc.less';

const { Content } = Layout;

export default function FormPage() {
  React.useEffect(() => {
    // const { data, error, loading } = useRequest(() => {
    //   return fetch('/api/test');
    // });

    fetch(
      'https://my-json-server.typicode.com/antvis/antvis-sites-data/notifications',
    ).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <Layout>
      <div className={styles.headerWrapper}>
        <Header activeKey="doc" />
      </div>

      <Content className={styles.containerWrapper}>
        <div className={styles.iframeWrapper}>
          <iframe
            className={styles.doc}
            src="https://www.oceanbase.com/docs/enterprise/tugraph-cn/V3.0.0/10000000000381038"
            frameBorder="0"
          ></iframe>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
