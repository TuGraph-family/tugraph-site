import React from 'react';
import { getLocale, useIntl } from 'umi';
import { LayoutTemplate } from '@/components/LayoutTemplate';

import stylesZh from './ecosystem.less';
import stylesEn from './ecosystem_en.less';

import { Anchor, Col, Row, Space } from 'antd';
import { useMedia } from 'react-use';

const { Link } = Anchor;

export default function EcosystemPage() {
  const intl = useIntl();
  const lang = getLocale();
  const styles = lang === 'en-US' ? stylesEn : stylesZh;
  const isWide = useMedia('(min-width: 767.99px)', true);
  const content = (
    <div className={styles.containerWrapper}>
      <div className={styles.cardWrapper} style={{ marginBottom: '40px' }}>
        <div className={styles.groupTitle}>
          {intl.formatMessage({ id: 'ecosystem.type.title' })}
        </div>
        <div className={styles.groupDescription}>
          {intl.formatMessage({ id: 'ecosystem.type.description' })}
        </div>
        <div className={styles.typeWrapper}>
          <Row gutter={isWide ? [24, 24] : [0, 0]}>
            <Col span={isWide ? 12 : 24}>
              <div className={styles.typeItem}>
                <img
                  src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*K8-yTqN7GAkAAAAAAAAAAAAADgOBAQ/original"
                  alt="icon"
                />
                <div>
                  <div className={styles.title}>
                    {intl.formatMessage({ id: 'ecosystem.type0.title' })}
                  </div>
                  <div className={styles.description}>
                    {intl.formatMessage({
                      id: 'ecosystem.type0.description',
                    })}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={isWide ? 12 : 24}>
              <div className={styles.typeItem}>
                <img
                  src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*Xgn-TIzNoOsAAAAAAAAAAAAADgOBAQ/original"
                  alt="icon"
                />
                <div>
                  <div className={styles.title}>
                    {intl.formatMessage({ id: 'ecosystem.type1.title' })}
                  </div>
                  <div className={styles.description}>
                    {intl.formatMessage({
                      id: 'ecosystem.type1.description',
                    })}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={isWide ? 8 : 24}>
              <div className={styles.typeItem}>
                <img
                  src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*LwOISbSYRcIAAAAAAAAAAAAADgOBAQ/original"
                  alt="icon"
                />
                <div>
                  <div className={styles.title}>
                    {intl.formatMessage({ id: 'ecosystem.type2.title' })}
                  </div>
                  <div className={styles.description}>
                    {intl.formatMessage({
                      id: 'ecosystem.type2.description',
                    })}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={isWide ? 8 : 24}>
              <div className={styles.typeItem}>
                <img
                  src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*m69zQ7DKKEsAAAAAAAAAAAAADgOBAQ/original"
                  alt="icon"
                />
                <div>
                  <div className={styles.title}>
                    {intl.formatMessage({ id: 'ecosystem.type3.title' })}
                  </div>
                  <div className={styles.description}>
                    {intl.formatMessage({
                      id: 'ecosystem.type3.description',
                    })}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={isWide ? 8 : 24}>
              <div className={styles.typeItem}>
                <img
                  src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*4gXuS7ETkj0AAAAAAAAAAAAADgOBAQ/original"
                  alt="icon"
                />
                <div>
                  <div className={styles.title}>
                    {intl.formatMessage({ id: 'ecosystem.type4.title' })}
                  </div>
                  <div className={styles.description}>
                    {intl.formatMessage({
                      id: 'ecosystem.type4.description',
                    })}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.groupTitle}>
          {intl.formatMessage({ id: 'ecosystem.support.title' })}
        </div>
        <div className={styles.groupDescription}>
          {intl.formatMessage({ id: 'ecosystem.support.description' })}
        </div>
        <div className={styles.supportWrapper}>
          <Row gutter={isWide ? [24, 24] : [20, 20]}>
            <Col span={isWide ? 12 : 24}>
              <div className={styles.supportItem}>
                <Space size={12} align="center">
                  <img
                    style={
                      lang === 'en-US'
                        ? { marginTop: isWide ? '-14px' : '-46px' }
                        : {}
                    }
                    src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*DzUBT6XHsoQAAAAAAAAAAAAADgOBAQ/original"
                    alt="icon"
                  />
                  <div>{intl.formatMessage({ id: 'ecosystem.support0' })}</div>
                </Space>
              </div>
            </Col>
            <Col span={isWide ? 12 : 24}>
              <div className={styles.supportItem}>
                <Space size={12} align="center">
                  <img
                    src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*pQmRRojVUAYAAAAAAAAAAAAADgOBAQ/original"
                    alt="icon"
                  />
                  <div>{intl.formatMessage({ id: 'ecosystem.support1' })}</div>
                </Space>
              </div>
            </Col>
            <Col span={isWide ? 12 : 24}>
              <div className={styles.supportItem}>
                <Space size={12} align="center">
                  <img
                    src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*wAG-S4qKobUAAAAAAAAAAAAADgOBAQ/original"
                    alt="icon"
                  />
                  <div>{intl.formatMessage({ id: 'ecosystem.support2' })}</div>
                </Space>
              </div>
            </Col>
            <Col span={isWide ? 12 : 24}>
              <div className={styles.supportItem}>
                <Space size={12} align="center">
                  <img
                    src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*jwxvT7iWuY8AAAAAAAAAAAAADgOBAQ/original"
                    alt="icon"
                  />
                  <div>{intl.formatMessage({ id: 'ecosystem.support3' })}</div>
                </Space>
              </div>
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
          'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*DFo6QaJTti8AAAAAAAAAAAAADgOBAQ/original',
        slogan: intl.formatMessage({ id: 'ecosystem.banner.slogan' }),
        description: intl.formatMessage({ id: 'ecosystem.banner.description' }),
        footer: (
          <Anchor affix={false} className={styles.contactBtn}>
            <Link
              href="#contactUs"
              title={intl.formatMessage({
                id: 'ecosystem.banner.btn',
              })}
            />
          </Anchor>
        ),
      }}
      content={content}
    />
  );
}
