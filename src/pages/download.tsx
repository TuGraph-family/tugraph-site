import React from 'react';
import { Button, Col, Layout, Row } from 'antd';
import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { useIntl } from 'umi';

import styles from './download.less';
import { useMedia } from 'react-use';

const { Content } = Layout;

export default function DemoPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const versionList = [
    {
      name: 'CentOS',
      version: '8.0.29',
      size: '445.6M',
      url: '',
    },
    {
      name: 'Ubuntu',
      version: '8.0.29',
      size: '452.0M',
      url: '',
    },
    {
      name: 'Docker Images',
      version: '8.0.29',
      size: '167.4M',
      url: '',
    },
  ];

  return (
    <Layout>
      <Content>
        <Banner
          activeKey={'download'}
          bgUrl={
            'https://gw.alipayobjects.com/zos/bmw-prod/2aa3933c-0ace-4b87-aeb4-a58473b9bc90.svg'
          }
          notice={intl.formatMessage({ id: 'download.banner.notice' })}
          mobileIcon={
            'https://gw.alipayobjects.com/zos/bmw-prod/1ea4aa81-6d85-4bd5-83aa-9213ddf7cb22.svg'
          }
          slogan={intl.formatMessage({ id: 'download.banner.slogan' })}
        />
        <div className={styles.containerWrapper}>
          {versionList.map((item, key) => (
            <Row className={styles.list} key={key}>
              <Col span={isWide ? 12 : 6}>{item.name}</Col>
              <Col span={isWide ? 4 : 6}> {item.version}</Col>
              <Col span={isWide ? 4 : 6}>{item.size}</Col>
              <Col span={isWide ? 4 : 6}>
                <Button type="primary" block>
                  {intl.formatMessage({ id: 'header.download' })}
                </Button>
              </Col>
            </Row>
          ))}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
