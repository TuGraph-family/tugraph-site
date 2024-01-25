import { Anchor, Col, Row, Space } from 'antd';
import cx from 'classnames';
import { useMedia } from 'react-use';
import { getLocale, useIntl } from 'umi';
import React from 'react';

import stylesZh from './ecosystem.less';
import stylesEn from './ecosystem_en.less';
import { getPartnerReason } from '@/data/get_partner_reason';
import { getPartner } from '@/data/get_partner';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { logoList } from '@/constant';

const { Link } = Anchor;

export default function EcosystemPage() {
  const intl = useIntl();
  const lang = getLocale();
  const styles = lang === 'en' || lang === 'en-US' ? stylesEn : stylesZh;
  const isWide = useMedia('(min-width: 767.99px)', true);
  const content = (
    <div className={styles.containerWrapper}>
      <div className={styles.cardWrapper} style={{ marginBottom: 40 }}>
        <div className={styles.groupTitle}>
          {intl.formatMessage({ id: 'ecosystem.type.title' })}
        </div>
        <div className={styles.groupDescription}>
          {intl.formatMessage({ id: 'ecosystem.type.description' })}
        </div>
        <div className={styles.typeWrapper}>
          <Row
            gutter={isWide ? [24, 24] : [0, 0]}
            className={styles.typeWrapper}
          >
            {getPartner(intl).map((item, key) => {
              return (
                <Col span={isWide ? item.span : 24} key={key}>
                  <div className={styles.typeItem}>
                    <img src={item.src} alt="icon" />
                    <div>
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.description}>{item.desc}</div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <div className={styles.wrapper} style={{ marginBottom: 40 }}>
        <div className={styles.groupTitle}>
          {intl.formatMessage({ id: 'ecosystem.support.title' })}
        </div>
        <div className={styles.groupDescription}>
          {intl.formatMessage({ id: 'ecosystem.support.description' })}
        </div>
        <div className={styles.supportWrapper}>
          <Row gutter={isWide ? [24, 24] : [20, 20]}>
            {getPartnerReason(intl).map((item, index) => {
              return (
                <Col span={isWide ? item.span : 24} key={index}>
                  <div
                    className={cx(styles.supportItem, {
                      [styles.enSupportItemPadding]:
                        index === 0 && (lang === 'en' || lang === 'en-US'),
                    })}
                  >
                    <Space
                      size={12}
                      align={isWide ? 'center' : 'start'}
                      style={{ height: '100%' }}
                    >
                      <img src={item.src} alt="icon" />
                      <div>{item.support}</div>
                    </Space>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.groupTitle}>
          {intl.formatMessage({ id: 'ecosystem.support.title1' })}
        </div>
        <div className={styles.iconWrap}>
          {logoList.map((item) => {
            return (
              <div className={styles.imgBox} key={item?.icon}>
                <img
                  src={item.icon}
                  alt=""
                  style={{
                    width: item?.width,
                    height: item?.height,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <LayoutTemplate
      bannerInfo={{
        bgIconUrl:
          'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*DFo6QaJTti8AAAAAAAAAAAAADgOBAQ/original',
        slogan: intl.formatMessage({ id: 'ecosystem.banner.slogan' }),
        description: intl.formatMessage({ id: 'ecosystem.banner.description' }),
        footer: (
          <Link
            className={styles.contactBtn}
            href="#contactUs"
            title={intl.formatMessage({
              id: 'ecosystem.banner.btn',
            })}
          />
        ),
      }}
      content={content}
    />
  );
}
