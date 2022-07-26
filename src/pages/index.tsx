import React from 'react';
import { Button, Col, Layout, Row, Space } from 'antd';
import { Banner } from '@/components/Banner';
import { Carousel } from '@/components/Carousel';
import { SubTitle } from '@/components/SubTitle';
import { Footer } from '@/components/Footer';
import { useIntl } from 'umi';
import { getReasons } from '@/data/reasons';
import { getVersions } from '@/data/version-feats';
import cx from 'classnames';
import { CheckOutlined } from '@ant-design/icons';

import styles from './index.less';

const { Content } = Layout;

export default function IndexPage() {
  const intl = useIntl();

  return (
    <Layout className={styles.homeLayout}>
      <Content>
        <Banner />
        <div className={styles.containerWrapper}>
          <Carousel />
          <SubTitle title={intl.formatMessage({ id: 'home.users' })} />
          <Space size={75} className={styles.users}>
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/dbe22a71-a25c-4a48-afcc-1c506f46e967.svg" />
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/c6011698-6941-45f2-ae6b-30c68533bf2e.svg" />
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/2a719040-1c3d-4e89-8582-6123edd66bfb.svg" />
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/70556970-4075-482c-ac07-e30b55403184.svg" />
          </Space>
          <div className={styles.moreDemo}>
            <a href="" className={styles.text}>
              {intl.formatMessage({ id: 'home.moreDemo' })}
            </a>
          </div>
          <SubTitle title={intl.formatMessage({ id: 'home.choseReason' })} />
          <Space size={20} className={styles.reasonCards}>
            {getReasons(intl)?.map((item, key) => {
              return (
                <div className={styles.reasonCard} key={key}>
                  <img src={item.icon} />
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.desc}>{item.desc}</div>
                </div>
              );
            })}
          </Space>
          <div className={styles.versionsWrapper}>
            <SubTitle
              title={intl.formatMessage({ id: 'home.chooseVersion' })}
              showIcon={false}
            />
            <Space className={styles.versions} size={54}>
              <div className={styles.version} key={0}>
                <div className={styles.title}>
                  {intl.formatMessage({ id: 'home.version0' })}
                </div>
                <div className={styles.desc}>
                  {intl.formatMessage({ id: 'home.version.desc0' })}
                </div>
                <Button type="primary" block className="lightBtn">
                  {intl.formatMessage({ id: 'home.version.startUse' })}
                </Button>
              </div>
              <div className={styles.version} key={1}>
                <div className={styles.title}>
                  {intl.formatMessage({ id: 'home.version1' })}
                </div>
                <div className={styles.desc}>
                  {intl.formatMessage({ id: 'home.version.desc1' })}
                </div>
                <Button type="primary" block className="lightBtn">
                  {intl.formatMessage({ id: 'home.version.contactUs' })}
                </Button>
              </div>
            </Space>
          </div>
          <div className={styles.featList}>
            <Row>
              <Col offset={8} span={8} className={styles.title}>
                {intl.formatMessage({ id: 'home.version0' })}
              </Col>
              <Col span={8} className={cx(styles.title, 'boldText')}>
                {intl.formatMessage({ id: 'home.version1' })}
              </Col>
            </Row>
            {getVersions(intl)?.map((item, key) => {
              return (
                <Row
                  key={key}
                  className={key % 2 === 0 ? styles.crossRow : styles.baseRow}
                >
                  <Col
                    span={6}
                    className={cx(styles.textAlignLeft, styles.text)}
                    offset={2}
                  >
                    {item.feat}
                  </Col>
                  <Col span={8} className={styles.text}>
                    {item.community ? <CheckOutlined /> : null}
                  </Col>
                  <Col span={8} className={styles.text}>
                    {item.pro ? <CheckOutlined /> : null}
                  </Col>
                </Row>
              );
            })}
          </div>
          <div className={styles.footerBtn}>
            <Space size={100}>
              <Button type="primary" block className="lightBtn">
                {intl.formatMessage({ id: 'home.version.download' })}
              </Button>

              <Button type="primary" block className="darkBtn">
                {intl.formatMessage({ id: 'home.version.useFree' })}
              </Button>
            </Space>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
