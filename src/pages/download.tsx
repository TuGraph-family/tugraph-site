import React from 'react';
import { Button, Col, Layout, Row } from 'antd';
import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { useIntl } from 'umi';

import styles from './download.less';

const { Content } = Layout;

export default function DemoPage() {
  const intl = useIntl();

  return (
    <Layout>
      <Content>
        <Banner
          activeKey={'download'}
          bgUrl={
            'https://gw.alipayobjects.com/zos/bmw-prod/2aa3933c-0ace-4b87-aeb4-a58473b9bc90.svg'
          }
          notice={intl.formatMessage({ id: 'download.banner.notice' })}
          slogan={intl.formatMessage({ id: 'download.banner.slogan' })}
        />
        <div className={styles.containerWrapper}>
          <Row className={styles.list}>
            <Col span={12}>CentOS</Col>
            <Col span={4}>8.0.29 </Col>
            <Col span={4}>445.6M</Col>
            <Col span={4}>
              <Button type="primary" block>
                {intl.formatMessage({ id: 'header.download' })}
              </Button>
            </Col>
          </Row>
          <Row className={styles.list}>
            <Col span={12}>Ubuntu</Col>
            <Col span={4}>8.0.29 </Col>
            <Col span={4}>452.0M</Col>
            <Col span={4}>
              <Button type="primary" block>
                {intl.formatMessage({ id: 'header.download' })}
              </Button>
            </Col>
          </Row>
          <Row className={styles.list} style={{ borderBottom: 'none' }}>
            <Col span={12}>Ubuntu</Col>
            <Col span={4}>8.0.29 </Col>
            <Col span={4}>452.0M</Col>
            <Col span={4}>
              <Button type="primary" block>
                {intl.formatMessage({ id: 'header.download' })}
              </Button>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
