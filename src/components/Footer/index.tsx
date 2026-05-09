import { MailFilled, PhoneFilled, SlackOutlined } from '@ant-design/icons';
import { Col, Row, Space } from 'antd';
import { useIntl } from 'umi';

import styles from './index.less';
import { historyPushLinkAt } from '@/util';

export const Footer = () => {
  const intl = useIntl();

  return (
    <div className={styles.footer}>
      <Row id="tugraphFooter" className={styles.containerWrapper}>
        <Col span={8} xs={24} sm={24} md={8}>
          <div className={styles.textGroup}>
            <div className={styles.title}>
              {intl.formatMessage({ id: 'footer.product.title' })}
            </div>
            <a className={styles.item} href={historyPushLinkAt('/product/db')}>
              {intl.formatMessage({ id: 'footer.productName' })}
            </a>
            <a
              className={styles.item}
              href={'https://geaflow.apache.org/docs/guide'}
            >
              TuGraph Analytics
            </a>
          </div>
        </Col>
        <Col span={8} xs={24} sm={24} md={8}>
          <div className={styles.textGroup}>
            <div className={styles.title}>
              {intl.formatMessage({ id: 'footer.community' })}
            </div>
            <a
              target="_blank"
              className={styles.item}
              href="https://github.com/TuGraph-family"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className={styles.item} href="https://gitee.com/tugraph">
              Gitee
            </a>
            <a
              target="_blank"
              className={styles.item}
              href="https://space.bilibili.com/1196053065/"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'footer.communityName' })}
            </a>
          </div>
        </Col>
        <Col span={8} xs={24} sm={24} md={8}>
          <div className={styles.textGroup} id="contactUs">
            <div className={styles.title}>
              {intl.formatMessage({ id: 'footer.contact' })}
            </div>
            <div className={styles.item}>
              <Space>
                <PhoneFilled size={12} />
                {intl.formatMessage({ id: 'footer.phone' })}
              </Space>
            </div>
            <div className={styles.item}>
              <Space>
                <MailFilled size={12} />
                <a href="mailto:tugraph@service.alipay.com">
                  tugraph@service.alipay.com
                </a>
              </Space>
            </div>
            <div className={styles.item}>
              <Space>
                <SlackOutlined size={12} />
                <a
                  href="https://tugraph.slack.com/join/shared_invite/zt-1hha8nuli-bqdkwn~w4zH1vlk0QvqIfg#/shared-invite/email"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Slack
                </a>
              </Space>
            </div>
          </div>
        </Col>
      </Row>

      <Row className={styles.footerExtraInfo}>
        <div className={styles.statement}>
          {intl.formatMessage({ id: 'footer.statement' })}
        </div>
        <Space size={8}>
          <div>
            <img
              src="https://mdn.alipayobjects.com/huamei_tu4rvn/afts/img/A*Ky0xT5cjEkAAAAAAQBAAAAgAep_eAQ/original"
              className={styles.filingIcon}
            />
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802043153"
              rel="noreferrer"
              target="_blank"
            >
              京公网安备11010802043153号
            </a>
          </div>
          |
          <a
            href="https://beian.miit.gov.cn"
            rel="noopener noreferrer"
            target="_blank"
          >
            {intl.formatMessage({ id: 'footer.copyright' })}
          </a>
          |
          <a
            href="https://render.alipay.com/p/yuyan/180020010001196791/preview.html?agreementId=AG00000174"
            rel="noopener noreferrer"
            target="_blank"
          >
            {intl.formatMessage({ id: 'footer.rules' })}
          </a>
          | <div> {intl.formatMessage({ id: 'footer.address' })}</div>
        </Space>
      </Row>
    </div>
  );
};
