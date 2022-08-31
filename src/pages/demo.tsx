import React from 'react';
import { Helmet } from 'react-helmet';
import { Col, Layout, Row, Space } from 'antd';
import { SubTitle } from '@/components/SubTitle';
import { useIntl } from 'umi';
import { getDemos } from '@/data/demos';
import { useMedia } from 'react-use';
import { LayoutTemplate } from '@/components/LayoutTemplate';

import styles from './demo.less';

export default function DemoPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);
  const content = (
    <div className={styles.containerWrapper}>
      <Helmet>
        <title>{intl.formatMessage({ id: 'demo.title' })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: 'demo.description' })}
        />
      </Helmet>
      <Row wrap={true} className={styles.demoCards}>
        {getDemos(intl)?.map((item, key) => (
          <Col
            span={isWide ? 8 : 24}
            className={styles.demoCardWrapper}
            key={key}
          >
            <div className={styles.demoCard}>
              <img src={item.iconUrl} />
              <div className={styles.title}>{item.title}</div>
              <div className={styles.desc}>{item.desc}</div>
              <div className={styles.type}>{item.type}</div>
            </div>
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
              {!isWide && (
                <img src="https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*sDXjRLtJWygAAAAAAAAAAAAAARQnAQ" />
              )}
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
              {!isWide && (
                <img src="https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*vGTURoxbMP8AAAAAAAAAAAAAARQnAQ" />
              )}
            </Col>
          </Row>
          <Row className={styles.exampleCard} style={{ marginBottom: '120px' }}>
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
              {!isWide && (
                <img src="https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*A6DZTI6GU6EAAAAAAAAAAAAAARQnAQ" />
              )}
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
  );

  return (
    <LayoutTemplate
      bannerInfo={{
        bgIconUrl:
          'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*iYl4SKalE60AAAAAAAAAAAAAARQnAQ',
        activeKey: 'demo',

        slogan: intl.formatMessage({ id: 'demo.banner.slogan' }),
        subTitle: intl.formatMessage({ id: 'demo.banner.subTitle' }),
      }}
      content={content}
    />
  );
}
