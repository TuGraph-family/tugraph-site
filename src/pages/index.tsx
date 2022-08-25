import React from 'react';
import { Anchor, Button, Col, Layout, Row, Space } from 'antd';
import { Banner } from '@/components/Banner';
import type { BannerButtonProps } from '@/components/Banner';
import { Carousel } from '@/components/Carousel';
import { SubTitle } from '@/components/SubTitle';
import { Footer } from '@/components/Footer';
import { useIntl, history } from 'umi';
import { getReasons } from '@/data/reasons';
import { getVersions } from '@/data/version-feats';
import cx from 'classnames';
import { CheckOutlined } from '@ant-design/icons';

import styles from './index.less';
import { useMedia } from 'react-use';

const { Content } = Layout;
const { Link } = Anchor;

export default function IndexPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const buttons: BannerButtonProps[] = [
    {
      text: intl.formatMessage({ id: 'home.banner.useFree' }),
      url: '/download',
    },
    {
      text: intl.formatMessage({ id: 'home.banner.quickStart' }),
      url: '/product',
    },
  ];

  return (
    <Layout>
      <Content>
        <Banner
          buttons={buttons}
          bgIconUrl={
            'https://gw.alipayobjects.com/zos/bmw-prod/b3cee56d-ebfd-4954-b7d3-e920f0c9de5f.svg'
          }
          slogan={intl.formatMessage({ id: 'home.banner.slogan' })}
        />
        <div className={styles.containerWrapper}>
          <Carousel />
          <SubTitle title={intl.formatMessage({ id: 'home.users' })} />
          <Row className={styles.users}>
            <Col span={isWide ? 5 : 12}>
              <img src="https://gw.alipayobjects.com/zos/bmw-prod/dbe22a71-a25c-4a48-afcc-1c506f46e967.svg" />
            </Col>
            <Col span={isWide ? 5 : 12}>
              <img src="https://gw.alipayobjects.com/zos/bmw-prod/c6011698-6941-45f2-ae6b-30c68533bf2e.svg" />
            </Col>
            <Col span={isWide ? 5 : 12}>
              <img src="https://gw.alipayobjects.com/zos/bmw-prod/2a719040-1c3d-4e89-8582-6123edd66bfb.svg" />
            </Col>
            <Col span={isWide ? 5 : 12}>
              <img src="https://gw.alipayobjects.com/zos/bmw-prod/70556970-4075-482c-ac07-e30b55403184.svg" />
            </Col>
            {isWide && (
              <Col span={4}>
                <Button
                  type="primary"
                  block
                  onClick={() => {
                    history.push('/demo');
                  }}
                  className="grayBtn"
                >
                  {intl.formatMessage({ id: 'home.moreDemo' })}
                </Button>
              </Col>
            )}
          </Row>

          {!isWide && (
            <Button
              type="primary"
              block
              onClick={() => {
                history.push('/demo');
              }}
              className="lightBtn"
            >
              {intl.formatMessage({ id: 'home.knowMore' })}
            </Button>
          )}

          <SubTitle title={intl.formatMessage({ id: 'home.choseReason' })} />
          <Row className={styles.reasonCards}>
            {getReasons(intl)?.map((item, key) => {
              return (
                <Col
                  span={isWide ? 12 : 24}
                  className={styles.reasonCardGroup}
                  key={key}
                >
                  <div className={styles.reasonCard}>
                    <Space size={36}>
                      <img src={item.icon} />
                      <div className={styles.textGroup}>
                        <div className={styles.title}>{item.title}</div>
                        <div className={styles.desc}>{item.desc}</div>
                      </div>
                    </Space>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className={styles.versionsWrapper}>
            <SubTitle
              title={intl.formatMessage({ id: 'home.chooseVersion' })}
            />
            <Row className={styles.versions}>
              <Col span={isWide ? 12 : 24} className={styles.version} key={0}>
                <div className={styles.versionCard}>
                  <div className={styles.title}>
                    {intl.formatMessage({ id: 'home.version0' })}
                  </div>
                  <div className={styles.desc}>
                    {intl.formatMessage({ id: 'home.version.desc0' })}
                  </div>
                  <Button
                    type="primary"
                    block
                    onClick={() => history.push('/download')}
                    className="lightBtn"
                  >
                    {intl.formatMessage({ id: 'home.version.startUse' })}
                  </Button>
                </div>
              </Col>
              <Col span={isWide ? 12 : 24} className={styles.version} key={1}>
                <div className={styles.versionCard}>
                  <div className={styles.title}>
                    {intl.formatMessage({ id: 'home.version1' })}
                  </div>
                  <div className={styles.desc}>
                    {intl.formatMessage({ id: 'home.version.desc1' })}
                  </div>
                  <Anchor affix={false} className={styles.primaryBtn}>
                    <Link
                      href="#contactUs"
                      title={intl.formatMessage({
                        id: 'home.version.contactUs',
                      })}
                    />
                  </Anchor>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.featList}>
            <Row>
              <Col offset={14} span={5} className={styles.title}>
                {intl.formatMessage({ id: 'home.version0' })}
              </Col>
              <Col span={5} className={cx(styles.title, 'boldText')}>
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
                    span={14}
                    className={cx(styles.textAlignLeft, styles.text)}
                  >
                    {item.feat}
                  </Col>
                  <Col span={5} className={styles.text}>
                    {item.community ? <CheckOutlined /> : null}
                  </Col>
                  <Col span={5} className={styles.text}>
                    {item.pro ? <CheckOutlined /> : null}
                  </Col>
                </Row>
              );
            })}
          </div>
          <div className={styles.footerBtn}>
            <Space size={isWide ? 24 : 8}>
              <Button
                onClick={() => {
                  history.push('/download');
                }}
                type="primary"
                block
                className="darkBtn"
              >
                {intl.formatMessage({ id: 'home.version.download' })}
              </Button>

              <Button
                onClick={() => {
                  history.push('/form');
                }}
                type="primary"
                block
                className="lightBtn"
              >
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
