import React from 'react';
import { useIntl, history, getLocale } from 'umi';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import cx from 'classnames';
import { Anchor, Button, Col, Row, Space } from 'antd';
import { useMedia } from 'react-use';
import { getPartner } from '@/data/get_partner';
import { getPartnerReason } from '@/data/get_partner_reason';
import { Helmet } from 'react-helmet';
import { SubTitle } from '@/components/SubTitle';
import { getFeats, getOverViewFeats } from '@/data/feats';

import stylesZh from './overview.less';
import stylesEn from './overview_en.less';

const { Link } = Anchor;
export default function OverviewPage() {
  const intl = useIntl();
  const lang = getLocale();
  const styles = lang === 'en' || lang === 'en-US' ? stylesEn : stylesZh;
  const isWide = useMedia('(min-width: 767.99px)', true);
  const content = (
    <div className={styles.containerWrapper}>
      <Helmet>
        <title>{intl.formatMessage({ id: 'product.overview.slogan' })}</title>
      </Helmet>
      <SubTitle
        title={intl.formatMessage({ id: 'product.intro' })}
        className={styles.introSubTitle}
      />
      <div className={styles.introWrapper}>
        <div>
          {intl.formatMessage({ id: 'product.feature.overview.introduction0' })}
        </div>
        {lang !== 'zh-CN' && (
          <div style={{ marginTop: '22px' }}>
            {intl.formatMessage({
              id: 'product.feature.overview.introduction1',
            })}
          </div>
        )}
      </div>

      <SubTitle
        title={intl.formatMessage({ id: 'product.feature' })}
        className={styles.subTitle}
      />
      <div className="maxContainer">
        <Row className={styles.featCards}>
          {getOverViewFeats(intl)?.map((item, key) => {
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
          title={intl.formatMessage({ id: 'product.overview.ecosystem' })}
          className={styles.subTitleTop}
        />
        <div className="maxContainer">
          <img
            src={
              lang === 'en' || lang === 'en-US'
                ? 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*wqMyTZ93ndYAAAAAAAAAAAAADgOBAQ/original'
                : 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*z0V4Q7BJpOQAAAAAAAAAAAAADgOBAQ/original'
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
          'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*UN91TpJfDTUAAAAAAAAAAAAADgOBAQ/original',
        slogan: intl.formatMessage({ id: 'product.overview.slogan' }),
        description: intl.formatMessage({ id: 'product.overview.desc' }),
        sloganClassName: isWide ? styles.sloganTitle : '',
      }}
      content={content}
    />
  );
}
