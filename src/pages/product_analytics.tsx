import React from 'react';

import { getLocale, isBrowser, useIntl } from 'umi';
import { Helmet } from 'react-helmet';

import { useMedia } from 'react-use';
import { Col, Row, Space } from 'antd';
import stylesZh from './product_analytics.less';
import stylesEn from './product_analytics_en.less';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { SubTitle } from '@/components/SubTitle';
import { getFeats } from '@/data/feats2';

const Root = () => {
  const intl = useIntl();
  const lang = getLocale();
  const isWide = useMedia('(min-width: 767.99px)', true);
  const styles = lang === 'en' || lang === 'en-US' ? stylesEn : stylesZh;
  const MOBILE_HEIGHT = isBrowser()
    ? 266 * (document.body.clientWidth / 750)
    : 266;
  const SWIPE_PADDING = isBrowser()
    ? (40 * document.body.clientWidth) / 750
    : 40;
  const content = (
    <div className={styles.containerWrapper}>
      <Helmet>
        <title>{intl.formatMessage({ id: 'product.title' })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: 'product_learn.description' })}
        />
      </Helmet>
      <div
        style={{
          paddingTop: '80px',
        }}
      />
      <SubTitle
        title={intl.formatMessage({ id: 'product.intro' })}
        className={styles.subTitle}
      />
      <div className={styles.introWrapper}>
        <div style={lang !== 'zh-CN' ? { marginBottom: '22px' } : {}}>
          {intl.formatMessage({ id: 'product_analytics.introfuction' })}
        </div>
        {/* <div>{intl.formatMessage({ id: 'product.introduction1' })}</div> */}
      </div>
      <SubTitle
        title={intl.formatMessage({ id: 'product.feature' })}
        className={styles.subTitle}
      />
      <div className="maxContainer">
        <Row className={styles.featCards}>
          {getFeats(intl)?.map((item, key) => {
            return (
              <Col
                span={isWide ? 12 : 24}
                className={styles.featCardGroup}
                key={key}
              >
                <div className={styles.featCard}>
                  <Space size={16} align="start">
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
      </div>

      <div className={styles.ecoWrapper}>
        <SubTitle
          title={intl.formatMessage({ id: 'product.ecosystem' })}
          className={styles.subTitleTop}
        />
        <div className="maxContainer">
          <img
            src={
              lang === 'zh-CN'
                ? 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*2TuZSYCq8egAAAAAAAAAAAAADgOBAQ/original'
                : 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*2TuZSYCq8egAAAAAAAAAAAAADgOBAQ/original'
            }
            alt="ecosystem"
          />
        </div>
      </div>
    </div>
  );
  return (
    <LayoutTemplate
      bannerInfo={{
        bgIconUrl:
          'https://mdn.alipayobjects.com/mdn/huamei_qcdryc/afts/img/A*ga9NQ6eVsx4AAAAAAAAAAAAADgOBAQ',
        slogan: intl.formatMessage({ id: 'product_analytics.slogan' }),
        description: intl.formatMessage({
          id: 'product_analytics.description',
        }),
        sloganClassName: styles.slogan,
      }}
      content={content}
    />
  );
};

export default Root;
