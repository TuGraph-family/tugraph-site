import React from 'react';
import { Helmet } from 'react-helmet';
import { Col, Row } from 'antd';
import { SubTitle } from '@/components/SubTitle';
import { useIntl } from 'umi';
import { getDemos } from '@/data/demos';
import { getExamples } from '@/data/examples';
import cx from 'classnames';
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

      <div className={styles.exampleWrapper}>
        <SubTitle title={intl.formatMessage({ id: 'demo.examples' })} />
        {getExamples(intl)?.map((item, key) => (
          <Row
            className={cx(
              key % 2 !== 0 ? styles.crossRow : null,
              styles.exampleCard,
            )}
            key={key}
          >
            <Col className={styles.textWrapper} span={16}>
              <div className={styles.title}>{item.title}</div>
              <div>{item.description}</div>

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
            </Col>
            <Col span={8}>
              <img src={item.img} />
            </Col>
          </Row>
        ))}
      </div>
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
