import React from 'react';
import { Helmet } from 'react-helmet';
import { Carousel, Col, Row, Space } from 'antd';
import { SubTitle } from '@/components/SubTitle';
import { getLocale, useIntl } from 'umi';
import { getDemos } from '@/data/demos';
import { getExamples } from '@/data/examples';
import cx from 'classnames';
import { useMedia } from 'react-use';
import { LayoutTemplate } from '@/components/LayoutTemplate';

import stylesZh from './case.less';
import stylesEn from './case_en.less';

export default function DemoPage() {
  const intl = useIntl();
  const lang = getLocale();
  const styles = lang === 'en-US' ? stylesEn : stylesZh;
  const isWide = useMedia('(min-width: 767.99px)', true);
  const pcDemo = (
    <div className="maxContainer">
      <Row wrap={true} className={styles.demoWrapper}>
        {getDemos(intl)?.map((item, key) => (
          <Col span={isWide ? 8 : 24} className={styles.demoCards} key={key}>
            <div className={styles.demoCard}>
              <img src={item.iconUrl} />
              <div className={styles.type}>{item.type}</div>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.desc}>{item.desc}</span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
  const mobileDemo = (
    <div className={styles.demoWrapper}>
      <Carousel>
        {getDemos(intl)?.map((item, key) => (
          <Col span={isWide ? 8 : 24} className={styles.demoCards} key={key}>
            <div className={styles.demoCard}>
              <Space size={12}>
                <img src={item.iconUrl} />
                <div className={styles.type}>{item.type}</div>
              </Space>
              <div>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.desc}>{item.desc}</span>
              </div>
            </div>
          </Col>
        ))}
      </Carousel>
    </div>
  );

  const pcExample = (
    <div className={styles.exampleWrapper}>
      <SubTitle title={intl.formatMessage({ id: 'demo.examples' })} />
      {getExamples(intl)?.map((item, key) => (
        <div
          className={cx(
            key % 2 !== 0 ? styles.crossRow : null,
            styles.exampleCard,
          )}
          key={key}
        >
          <div className="maxContainer">
            <Space size={32}>
              <div className={styles.textWrapper}>
                <div className={styles.title}>{item.title}</div>
                <div style={{ marginBottom: '20px' }}>{item.description}</div>

                <div className={styles.subTitle}>
                  {intl.formatMessage({ id: 'demo.example.challenge' })}
                </div>
                {item?.challenge}

                <div className={styles.subTitle}>
                  {intl.formatMessage({ id: 'demo.example.solution' })}
                </div>
                {item?.solution}

                <div className={styles.subTitle}>
                  {intl.formatMessage({ id: 'demo.example.profit' })}
                </div>
                {item?.profit}
              </div>
              <div>
                <img src={item.img} />
              </div>
            </Space>
          </div>
        </div>
      ))}
    </div>
  );

  const mobileExample = (
    <div className={styles.exampleWrapper}>
      <SubTitle title={intl.formatMessage({ id: 'demo.examples' })} />
      {getExamples(intl)?.map((item, key) => (
        <div className={styles.exampleCard} key={key}>
          <img src={item.img} />
          <div className="maxContainer">
            <div className={styles.textWrapper}>
              <div className={styles.title}>{item.title}</div>
              <div style={{ marginBottom: '20px' }}>{item.description}</div>

              <div className={styles.subTitle}>
                {intl.formatMessage({ id: 'demo.example.challenge' })}
              </div>
              {item?.challenge}

              <div className={styles.subTitle}>
                {intl.formatMessage({ id: 'demo.example.solution' })}
              </div>
              {item?.solution}

              <div className={styles.subTitle}>
                {intl.formatMessage({ id: 'demo.example.profit' })}
              </div>
              {item?.profit}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const content = (
    <div className={styles.containerWrapper}>
      <Helmet>
        <title>{intl.formatMessage({ id: 'demo.title' })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: 'demo.description' })}
        />
      </Helmet>
      {isWide ? pcDemo : mobileDemo}

      {isWide ? pcExample : mobileExample}
    </div>
  );

  return (
    <LayoutTemplate
      bannerInfo={{
        bgIconUrl:
          'https://mdn.alipayobjects.com/mdn/huamei_qcdryc/afts/img/A*cgX1TZO2nlAAAAAAAAAAAAAADgOBAQ',
        slogan: intl.formatMessage({ id: 'demo.banner.slogan' }),
        description: intl.formatMessage({ id: 'demo.banner.subTitle' }),
      }}
      content={content}
    />
  );
}
