import React from 'react';
import { useIntl } from 'umi';
import { Row, Col, Space } from 'antd';
import { PhoneFilled, MailFilled } from '@ant-design/icons';
import { useMedia } from 'react-use';

import styles from './index.less';

export const Footer = () => {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const menuList = [
    {
      text: intl.formatMessage({ id: 'header.product' }),
      url: '/product',
    },
    {
      text: intl.formatMessage({ id: 'header.demo' }),
      url: '/demo',
    },
    {
      text: intl.formatMessage({ id: 'header.doc' }),
      url: '/doc',
    },
    {
      text: intl.formatMessage({ id: 'header.blog' }),
      url: '/blog',
    },
    {
      text: intl.formatMessage({ id: 'header.community' }),
      url: '/community',
    },
    {
      text: intl.formatMessage({ id: 'header.download' }),
      url: '/download',
    },
  ];

  const icons = [
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/5bb7aed7-7b96-4f15-9147-6ba150e5a220.svg',
      url: '/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/eba3a225-f8a3-4c56-ad7a-339a60707a49.svg',
      url: '/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/db10078e-ebc9-4d19-b13a-18d07f327c8c.svg',
      url: '/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/88933248-acee-4d21-9daf-242670675dbc.svg',
      url: '/',
    },
  ];

  const pc = (
    <>
      <Row>
        <Col span={16} offset={3}>
          <Space size={50}>
            {menuList.map((item, key) => (
              <a key={key} href={item.url} rel="noopener noreferrer">
                {item.text}
              </a>
            ))}
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
            {icons.map((item, key) => (
              <a key={key} href={item.url} rel="noopener noreferrer">
                <img src={item.icon} />
              </a>
            ))}
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
    </>
  );

  const mobile = (
    <>
      <Row>
        <Col span={14}>
          <img
            src="https://gw.alipayobjects.com/zos/bmw-prod/b54deb36-47fb-483a-8240-a682fe8348ec.svg"
            className={styles.logo}
          />
          <div> {intl.formatMessage({ id: 'footer.rules' })}</div>
        </Col>
        <Col span={10} className={styles.qrCode}>
          <img src="https://gw.alipayobjects.com/zos/bmw-prod/b543c652-c2a5-4ff1-90e2-dc6d4077b68e.svg" />
          <div>{intl.formatMessage({ id: 'footer.qrCode.desc.mobile' })}</div>
        </Col>
      </Row>
      <div className={styles.menuList}>
        {menuList.map((item, key) => (
          <a key={key} href={item.url} rel="noopener noreferrer">
            {item.text}
          </a>
        ))}
      </div>

      <div className={styles.contactInfo}>
        {intl.formatMessage({ id: 'home.version.contactUs' })}
        <Row className={styles.iconGroup}>
          {icons.map((item, key) => (
            <Col span={6} key={key}>
              <a href={item.url} rel="noopener noreferrer">
                <img src={item.icon} />
              </a>
            </Col>
          ))}
        </Row>
        <Space>
          <PhoneFilled />
          888-8888-8888
        </Space>
        <Space>
          <MailFilled />
          tugraph@service.alipay.com
        </Space>
        {intl.formatMessage({ id: 'footer.address' })}
      </div>
    </>
  );
  return <div className={styles.footer}>{isWide ? pc : mobile}</div>;
};
