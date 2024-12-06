import { MailFilled, PhoneFilled, SlackOutlined } from '@ant-design/icons';
import { Col, Collapse, Divider, Popover, Row, Space } from 'antd';
import { useMedia } from 'react-use';
import { useIntl, useLocation } from 'umi';

import styles from './index.less';
import { DEFAULT_LOCAL } from '@/constant';
import { getSearch } from '@/util';

const { Panel } = Collapse;

export const NewFooter = () => {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;

  const icons = [
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/5bb7aed7-7b96-4f15-9147-6ba150e5a220.svg',
      url: 'https://github.com/TuGraph-family',
      key: 'icon_1',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/eba3a225-f8a3-4c56-ad7a-339a60707a49.svg',
      img: 'https://gw.alipayobjects.com/zos/antfincdn/v6wTr95cHw/ae4398ac-2cc3-4401-9149-992b93a81b27.png',
      key: 'icon_2',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/db10078e-ebc9-4d19-b13a-18d07f327c8c.svg',
      url: 'https://space.bilibili.com/1196053065/',
      key: 'icon_3',
    },
  ];

  const pc = (
    <>
      <Row
        id="tugraphFooter"
        className={styles.containerWrapper}
        style={lang === 'en' || lang === 'en-US' ? { height: '324px' } : {}}
      >
        <Col span={5}>
          <div className={styles.textGroup}>
            <div className={styles.title}>
              {intl.formatMessage({ id: 'footer.product.title' })}
            </div>
            <a className={styles.item} href="/product/db">
              {intl.formatMessage({ id: 'footer.productName' })}
            </a>
            <a
              className={styles.item}
              href={
                lang === 'zh-CN'
                  ? '/docs/tugraph-db/zh/4.5.0/user-guide/tugraph-browser'
                  : '/docs/tugraph-db/en/4.5.0/user-guide/tugraph-browser'
              }
            >
              TuGraph Browser
            </a>
          </div>
        </Col>
        <Col span={3}>
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
        <Col span={9}>
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

        {lang === 'zh-CN' && (
          <Col span={7}>
            <Space size={24}>
              <div className={styles.qrCode}>
                <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*6QheTI5TV-gAAAAAAAAAAAAADgOBAQ/original" />
                <div className={styles.desc}>
                  {intl.formatMessage({ id: 'footer.qrCode.weChart' })}
                </div>
                <div className={styles.subDesc}>
                  {intl.formatMessage({
                    id: 'footer.qrCode.subDescWeChart',
                  })}
                </div>
              </div>
              <div className={styles.qrCode}>
                <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*-aa5TKbCnBAAAAAAAAAAAAAADgOBAQ/original" />
                <div className={styles.desc}>
                  {intl.formatMessage({ id: 'footer.qrCode.dingTalk' })}
                </div>
                <div className={styles.subDesc}>
                  {intl.formatMessage({
                    id: 'footer.qrCode.subDescDingTalk',
                  })}
                </div>
              </div>
            </Space>
          </Col>
        )}
      </Row>

      <Row className={styles.footerExtraInfo}>
        <Space size={16}>
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
    </>
  );

  const mobile = (
    <>
      <div className={styles.textGroup}>
        <Collapse expandIconPosition="end">
          <Panel
            header={intl.formatMessage({ id: 'footer.product' })}
            key="product"
          >
            <a className={styles.item} href="/product">
              {intl.formatMessage({ id: 'footer.productName' })}
            </a>
            <a
              className={styles.item}
              href="/doc?version=V3.3.0&id=10000000001031969"
            >
              TuGraph Browser
            </a>
            <a
              className={styles.item}
              href="/doc?version=V3.3.0&id=10000000001031971"
            >
              TuGraph Explorer
            </a>
          </Panel>
          <Panel
            header={intl.formatMessage({ id: 'footer.community' })}
            key="community"
          >
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
          </Panel>
          <Panel
            header={intl.formatMessage({ id: 'footer.contact' })}
            key="contactUs"
            id="contactUs"
          >
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
                  target="_blank"
                  href="https://tugraph.slack.com/join/shared_invite/zt-1hha8nuli-bqdkwn~w4zH1vlk0QvqIfg#/shared-invite/email"
                  rel="noreferrer"
                >
                  Slack
                </a>
              </Space>
            </div>
          </Panel>
        </Collapse>
      </div>

      {lang === 'zh-CN' && (
        <div className={styles.contactInfo}>
          <Space size={32} className={styles.iconGroup}>
            {icons.map((item) => (
              <div key={item.key}>
                {item.url ? (
                  <a target="_blank" href={item.url} rel="noopener noreferrer">
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
              </div>
            ))}
            {lang === 'en-US' && (
              <a
                target="_blank"
                href="https://tugraph.slack.com/join/shared_invite/zt-1hha8nuli-bqdkwn~w4zH1vlk0QvqIfg#/shared-invite/email"
                rel="noopener noreferrer"
              >
                <SlackOutlined className={styles.slack} />
              </a>
            )}
          </Space>
        </div>
      )}
      {lang === 'zh-CN' && (
        <Row gutter={20}>
          <Col span={12}>
            <Space size={20} className={styles.qrCode}>
              <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*6QheTI5TV-gAAAAAAAAAAAAADgOBAQ/original" />

              <div className={styles.group}>
                <div className={styles.desc}>
                  {intl.formatMessage({ id: 'footer.qrCode.weChart' })}
                </div>
                <div className={styles.subDesc}>
                  {intl.formatMessage({
                    id: 'footer.qrCode.subDescWeChart',
                  })}
                </div>
              </div>
            </Space>
          </Col>
          <Col span={12}>
            <Space size={20} className={styles.qrCode}>
              <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*L9UQSbVwSoMAAAAAAAAAAAAADgOBAQ/original" />

              <div className={styles.group}>
                <div className={styles.desc}>
                  {intl.formatMessage({ id: 'footer.qrCode.dingTalk' })}
                </div>
                <div className={styles.subDesc}>
                  {intl.formatMessage({
                    id: 'footer.qrCode.subDescWeChart',
                  })}
                </div>
              </div>
            </Space>
          </Col>
        </Row>
      )}

      <Row className={styles.footerExtraInfo}>
        {lang !== 'zh-CN' && !isWide ? (
          <Divider className={styles.divider} />
        ) : null}
        <a
          href="https://beian.miit.gov.cn"
          rel="noopener noreferrer"
          target="_blank"
        >
          {intl.formatMessage({ id: 'footer.copyright' })}
        </a>
        <a
          href="https://render.alipay.com/p/yuyan/180020010001196791/preview.html?agreementId=AG00000174"
          rel="noopener noreferrer"
        >
          {intl.formatMessage({ id: 'footer.rules' })}
        </a>
        <div> {intl.formatMessage({ id: 'footer.address' })}</div>
      </Row>
    </>
  );
  return <div className={styles.footer}>{isWide ? pc : mobile}</div>;
};
