import React from 'react';
import { Col, Layout, Row, Space } from 'antd';
import { Banner } from '@/components/Banner';
import { SubTitle } from '@/components/SubTitle';
import { Footer } from '@/components/Footer';
import { useIntl } from 'umi';
import { getDemos } from '@/data/demos';

import styles from './demo.less';
import { useMedia } from 'react-use';

const { Content } = Layout;

export default function DemoPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);

  return (
    <Layout>
      <Content>
        <Banner
          activeKey={'demo'}
          bgUrl={
            'https://gw.alipayobjects.com/zos/bmw-prod/492ccb4d-1451-4a76-a369-389008003c6c.svg'
          }
          subTitle={intl.formatMessage({ id: 'demo.banner.subTitle' })}
          mobileIcon={
            'https://gw.alipayobjects.com/zos/bmw-prod/a1b6acd1-ed85-46fd-b333-fbb6c32984fa.svg'
          }
          slogan={intl.formatMessage({ id: 'demo.banner.slogan' })}
        />
        <div className={styles.containerWrapper}>
          <Row wrap={true} className={styles.demoCards} gutter={[35, 56]}>
            {getDemos(intl)?.map((item, key) => (
              <Col span={8} className={styles.demoCard} key={key}>
                <img src={item.iconUrl} />
                <div className={styles.title}>{item.title}</div>
                <div className={styles.desc}>{item.desc}</div>
                <div className={styles.type}>{item.type}</div>
              </Col>
            ))}
          </Row>
          <div className={styles.exampleWrapper}>
            <SubTitle title={intl.formatMessage({ id: 'demo.examples' })} />
            <div className={styles.exampleCards}>
              <Row className={styles.exampleCard}>
                <Col className={styles.textWrapper} span={16}>
                  <Space className={styles.header}>
                    <div className={styles.title}>
                      {`${intl.formatMessage({
                        id: 'demo.example.title0',
                      })}${isWide ? ' | ' : ''}`}
                    </div>
                    <div className={styles.subTitle}>
                      {intl.formatMessage({ id: 'demo.example.subTitle0' })}
                    </div>
                  </Space>
                  {isWide && <hr className={styles.splitLine} />}
                  <div className={styles.text}>
                    {intl.formatMessage({ id: 'demo.example.challenge' })}
                    <div className={styles.textNormalSize}>
                      {intl.formatMessage({ id: 'demo.example.challenge0' })}
                    </div>
                  </div>
                  <div className={styles.text}>
                    {intl.formatMessage({ id: 'demo.example.solution' })}
                    <div className={styles.textNormalSize}>
                      {intl.formatMessage({ id: 'demo.example.solution0' })}
                    </div>
                  </div>
                  <div className={styles.text}>
                    {intl.formatMessage({ id: 'demo.example.profit' })}
                    <div className={styles.textNormalSize}>
                      {intl.formatMessage({ id: 'demo.example.profit0' })}
                    </div>
                  </div>
                </Col>
                <Col flex="auto" className={styles.exampleImg}></Col>
              </Row>
              <Row className={styles.exampleCard}>
                <Col className={styles.imgWrapper} flex="auto">
                  {isWide && (
                    <img src="https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*au4iSZ38SWcAAAAAAAAAAAAAARQnAQ" />
                  )}
                </Col>
                <Col className={styles.textWrapper} span={12}>
                  <Space className={styles.header}>
                    <div className={styles.title}>
                      {`${intl.formatMessage({
                        id: 'demo.example.title1',
                      })}${isWide ? ' | ' : ''}`}
                    </div>
                    <div className={styles.subTitle}>
                      {intl.formatMessage({ id: 'demo.example.subTitle1' })}
                    </div>
                  </Space>
                  {isWide && <hr className={styles.splitLine} />}
                  <div className={styles.text}>
                    {intl.formatMessage({ id: 'demo.example.challenge' })}
                    <div className={styles.textNormalSize}>
                      {intl.formatMessage({ id: 'demo.example.challenge1' })}
                    </div>
                  </div>
                  <div className={styles.text}>
                    {intl.formatMessage({ id: 'demo.example.solution' })}
                    <div className={styles.textNormalSize}>
                      {intl.formatMessage({ id: 'demo.example.solution1' })}
                    </div>
                  </div>
                  <div className={styles.text}>
                    {intl.formatMessage({ id: 'demo.example.profit' })}
                    <div className={styles.textNormalSize}>
                      {intl.formatMessage({ id: 'demo.example.profit2' })}
                    </div>
                  </div>
                </Col>
              </Row>
              <Row
                className={styles.exampleCard}
                style={{ marginBottom: '120px' }}
              >
                <Col className={styles.textWrapper} span={16}>
                  <Space className={styles.header}>
                    <div className={styles.title}>
                      {`${intl.formatMessage({
                        id: 'demo.example.title2',
                      })}${isWide ? ' | ' : ''}`}
                    </div>
                    <div className={styles.subTitle}>
                      {intl.formatMessage({ id: 'demo.example.subTitle2' })}
                    </div>
                  </Space>
                  {isWide && <hr className={styles.splitLine} />}
                  <div className={styles.text}>
                    {intl.formatMessage({ id: 'demo.example.challenge' })}
                    <div className={styles.textNormalSize}>
                      {intl.formatMessage({ id: 'demo.example.challenge2' })}
                    </div>
                  </div>
                  <div className={styles.text}>
                    {intl.formatMessage({ id: 'demo.example.solution' })}
                    <div className={styles.textNormalSize}>
                      {intl.formatMessage({ id: 'demo.example.solution2' })}
                    </div>
                  </div>
                  <div className={styles.text}>
                    {intl.formatMessage({ id: 'demo.example.profit' })}
                    <div className={styles.textNormalSize}>
                      {intl.formatMessage({ id: 'demo.example.profit2' })}
                    </div>
                  </div>
                </Col>
                <Col className={styles.imgWrapper} flex="auto">
                  {isWide && (
                    <img src="https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*3r2PSIMlszsAAAAAAAAAAAAAARQnAQ" />
                  )}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}