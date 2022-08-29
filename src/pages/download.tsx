import React from 'react';
import { Button, Col, Layout, Row } from 'antd';
import { useIntl } from 'umi';
import { useMedia } from 'react-use';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import styles from './download.less';

export default function DemoPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const versionList = [
    {
      name: 'CentOS',
      version: '3.3.0',
      url: 'https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-3.3.0/TuGraph-3.3.0-1.el7.x86_64.rpm',
    },
    {
      name: 'Ubuntu',
      version: '3.3.0',
      url: 'https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-3.3.0/TuGraph-3.3.0-1.x86_64.deb',
    },
    {
      name: 'Docker Images',
      version: '3.3.0',
      url: 'https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-3.3.0/TuGraph-Image-3.3.0.tar.gz',
    },
  ];

  const content = (
    <div className={styles.containerWrapper}>
      {versionList.map((item, key) => (
        <Row className={styles.list} key={key}>
          <Col span={isWide ? 16 : 8}>{item.name}</Col>
          <Col span={isWide ? 4 : 8}> {item.version}</Col>
          <Col span={isWide ? 4 : 8}>
            <Button
              onClick={() => {
                window.location.href = item.url;
              }}
              type="primary"
              block
            >
              {intl.formatMessage({ id: 'header.download' })}
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );

  return (
    <LayoutTemplate
      bannerInfo={{
        bgIconUrl:
          'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*Kr0CT6lMDnoAAAAAAAAAAAAAARQnAQ',
        activeKey: 'download',

        slogan: intl.formatMessage({ id: 'download.banner.slogan' }),
        notice: intl.formatMessage({ id: 'download.banner.notice' }),
      }}
      content={content}
    />
  );
}
