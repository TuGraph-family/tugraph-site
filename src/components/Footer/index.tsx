import React from 'react';
import { useIntl } from 'umi';
import { Row, Col, Space, Popover } from 'antd';
import { PhoneFilled, MailFilled, EnvironmentFilled } from '@ant-design/icons';
import { useMedia } from 'react-use';

import styles from './index.less';

export const Footer = ({ className }: { className?: string }) => {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const icons = [
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/5bb7aed7-7b96-4f15-9147-6ba150e5a220.svg',
      url: 'https://github.com/TuGraph-db',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/eba3a225-f8a3-4c56-ad7a-339a60707a49.svg',
      img: 'https://gw.alipayobjects.com/zos/antfincdn/v6wTr95cHw/ae4398ac-2cc3-4401-9149-992b93a81b27.png',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/db10078e-ebc9-4d19-b13a-18d07f327c8c.svg',
      url: 'https://space.bilibili.com/1196053065/',
    },
    // {
    //   icon: 'https://gw.alipayobjects.com/zos/bmw-prod/88933248-acee-4d21-9daf-242670675dbc.svg',
    //   url: 'https://zhuanlan.zhihu.com/p/141047442',
    // },
  ];

  const pc = (
    <div className={className}>
      <Row className={styles.contactGroup}>
        <Col span={21}>
          <div>{intl.formatMessage({ id: 'home.version.contactUs' })}</div>
          <Space id="contactUs" size={26} className={styles.iconGroup}>
            {icons.map((item, key) => {
              return item?.url ? (
                <a key={key} href={item.url} rel="noopener noreferrer">
                  <img src={item.icon} />
                </a>
              ) : (
                <Popover
                  key={key}
                  content={
                    <img
                      style={{ width: '200px', height: '200px' }}
                      src={item.img}
                    />
                  }
                >
                  <img src={item.icon} />
                </Popover>
              );
            })}
          </Space>
          <div className={styles.contactInfo}>
            <Space size={32}>
              <Space size={16}>
                <PhoneFilled size={12} />
                电话：0571-85022088，转分机号 83789993#
              </Space>
              <Space>
                <MailFilled size={12} />
                <a href="mailto:tugraph@service.alipay.com">
                  tugraph@service.alipay.com
                </a>
              </Space>
            </Space>
          </div>
        </Col>
        <Col span={3} className={styles.qrCode}>
          <img src="https://gw.alipayobjects.com/zos/bmw-prod/b543c652-c2a5-4ff1-90e2-dc6d4077b68e.svg" />
          <div className={styles.desc}>
            {intl.formatMessage({ id: 'footer.qrCode.desc' })}
          </div>
          <div className={styles.subDesc}>
            {intl.formatMessage({ id: 'footer.qrCode.subDesc' })}
          </div>
        </Col>
        <Col span={3} />
      </Row>

      <Row className={styles.footerExtraInfo}>
        <Space size={16}>
          <a
            href="https://render.alipay.com/p/yuyan/180020010001196791/preview.html?agreementId=AG00000174"
            rel="noopener noreferrer"
          >
            {intl.formatMessage({ id: 'footer.rules' })}
          </a>
          | <div> {intl.formatMessage({ id: 'footer.address' })}</div>
        </Space>
      </Row>
    </div>
  );

  const mobile = (
    <>
      <div className={styles.contactInfo} id="contactUs">
        {intl.formatMessage({ id: 'home.version.contactUs' })}
        <Row className={styles.iconGroup}>
          {icons.map((item, key) => (
            <Col span={6} key={key}>
              {item.url ? (
                <a href={item.url} rel="noopener noreferrer">
                  <img src={item.icon} />
                </a>
              ) : (
                <Popover
                  trigger={'click'}
                  content={
                    <img
                      style={{ width: '200px', height: '200px' }}
                      src={item.img}
                    />
                  }
                >
                  <img src={item.icon} />
                </Popover>
              )}
            </Col>
          ))}
        </Row>
        <span>
          <PhoneFilled style={{ marginRight: '8px' }} />
          电话：0571-85022088，转分机号 83789993#
        </span>
        <Space>
          <MailFilled />
          tugraph@service.alipay.com
        </Space>
        <span>
          <EnvironmentFilled style={{ marginRight: '8px' }} />
          {intl.formatMessage({ id: 'footer.addressMobile' })}
        </span>
      </div>
      <div className={styles.qrCode}>
        <img src="https://gw.alipayobjects.com/zos/bmw-prod/b543c652-c2a5-4ff1-90e2-dc6d4077b68e.svg" />
        <div className={styles.desc}>
          {intl.formatMessage({ id: 'footer.qrCode.desc' })}
        </div>
        <div className={styles.subDesc}>
          {intl.formatMessage({ id: 'footer.qrCode.subDesc' })}
        </div>
      </div>
      <Row className={styles.footerExtraInfo}>
        <Space size={16}>
          <a
            href="https://render.alipay.com/p/yuyan/180020010001196791/preview.html?agreementId=AG00000174"
            rel="noopener noreferrer"
          >
            {intl.formatMessage({ id: 'footer.rules' })}
          </a>
          | <div> {intl.formatMessage({ id: 'footer.extraInfo' })}</div>
        </Space>
      </Row>
    </>
  );
  return <div className={styles.footer}>{isWide ? pc : mobile}</div>;
};
