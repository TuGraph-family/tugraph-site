import React from 'react';
import { useIntl } from 'umi';
import { Row, Col, Space } from 'antd';
import { PhoneFilled, MailFilled } from '@ant-design/icons';

import styles from './index.less';

export const Footer = () => {
  const intl = useIntl();
  return (
    <div className={styles.footer}>
      <Row>
        <Col span={16} offset={3}>
          <Space size={50}>
            <a href="/product" rel="noopener noreferrer">
              {intl.formatMessage({ id: 'header.product' })}
            </a>
            <a href="/demo" rel="noopener noreferrer">
              {intl.formatMessage({ id: 'header.demo' })}
            </a>
            <a href="/doc" rel="noopener noreferrer">
              {intl.formatMessage({ id: 'header.doc' })}
            </a>
            <a href="blog" rel="noopener noreferrer">
              {intl.formatMessage({ id: 'header.blog' })}
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              {intl.formatMessage({ id: 'header.community' })}
            </a>
            <a href="/download" rel="noopener noreferrer">
              {intl.formatMessage({ id: 'header.download' })}
            </a>
          </Space>
        </Col>
        <Col span={5}>
          <img
            src="https://gw.alipayobjects.com/zos/bmw-prod/b54deb36-47fb-483a-8240-a682fe8348ec.svg"
            className={styles.logo}
          />
        </Col>
      </Row>
      <Row className={styles.contactGroup}>
        <Col span={16} offset={3}>
          <div>{intl.formatMessage({ id: 'home.version.contactUs' })}</div>
          <Space size={26} className={styles.iconGroup}>
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/5bb7aed7-7b96-4f15-9147-6ba150e5a220.svg" />
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/eba3a225-f8a3-4c56-ad7a-339a60707a49.svg" />
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/db10078e-ebc9-4d19-b13a-18d07f327c8c.svg" />
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/eba3a225-f8a3-4c56-ad7a-339a60707a49.svg" />
          </Space>
          <Row>
            <Col span={10}>
              <Space size={16}>
                <PhoneFilled />
                888-8888-8888
              </Space>
            </Col>
            <Col span={14}>
              <Space>
                <MailFilled />
                tugraph@service.alipay.com
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={2} className={styles.qrCode}>
          <img src="https://gw.alipayobjects.com/zos/bmw-prod/b543c652-c2a5-4ff1-90e2-dc6d4077b68e.svg" />
          <div>{intl.formatMessage({ id: 'footer.qrCode.desc' })}</div>
        </Col>
        <Col span={3} />
      </Row>
      <Row>
        <Col span={3} />
        <Col span={18} className={styles.splitLine} />

        <Col span={3}></Col>
      </Row>
      <Row className={styles.footerExtraInfo}>
        <Col span={8} offset={3}>
          {intl.formatMessage({ id: 'footer.rules' })}
        </Col>
        <Col span={10}>{intl.formatMessage({ id: 'footer.address' })}</Col>
      </Row>
    </div>
  );
};
