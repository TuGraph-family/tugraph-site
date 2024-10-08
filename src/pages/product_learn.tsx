import React, { useEffect } from 'react';

import { useIntl, useLocation } from 'umi';
import { Helmet } from 'react-helmet';

import { useMedia } from 'react-use';
import { Col, Row, Space } from 'antd';
import stylesZh from './product_learn.less';
import stylesEn from './product_learn_en.less';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { SubTitle } from '@/components/SubTitle';
import { getFeats } from '@/data/feats1';
import { getSearch, tracertBPos } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';

const Root = () => {
  const intl = useIntl();
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;
  const isWide = useMedia('(min-width: 767.99px)', true);
  const styles = lang === 'en' || lang === 'en-US' ? stylesEn : stylesZh;

  /** TuGraph Learn 图学习引擎 */
  useEffect(() => {
    tracertBPos('b106247');
  }, []);

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
          {intl.formatMessage({ id: 'product_learn.introfuction' })}
        </div>
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
                ? 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*4AiPRowHYgsAAAAAAAAAAAAADgOBAQ/original'
                : 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*4AiPRowHYgsAAAAAAAAAAAAADgOBAQ/original'
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
          'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*3XeFTrPds44AAAAAAAAAAAAADgOBAQ/original',
        slogan: intl.formatMessage({ id: 'product_learn.slogan' }),
        description: intl.formatMessage({ id: 'product_learn.description' }),
        sloganClassName: styles.slogan,
      }}
      content={content}
    />
  );
};

export default Root;
