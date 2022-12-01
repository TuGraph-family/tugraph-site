import React, { useRef, useState } from 'react';
import { Button, Col, Menu, Row, Space } from 'antd';
import { Helmet } from 'react-helmet';
import JoLPlayer from 'jol-player';
import { SubTitle } from '@/components/SubTitle';
import { useMedia } from 'react-use';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { useIntl } from 'umi';
import { getFeats } from '@/data/feats';
import cx from 'classnames';

import styles from './product.less';

export default function ProductPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const content = (
    <div className={styles.containerWrapper}>
      <Helmet>
        <title>{intl.formatMessage({ id: 'product.title' })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: 'product.description' })}
        />
      </Helmet>

      <div className={styles.videoWrapper}>
        <Row>
          <Col span={isWide ? 8 : 24} className={styles.card}>
            <JoLPlayer
              option={{
                videoSrc:
                  'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
                height: isWide ? 204 : 102,
                width: 362,
              }}
            />
            <div className={styles.title}>
              {intl.formatMessage({ id: 'product.video0' })}
            </div>
            <div className={styles.tag}>
              {intl.formatMessage({ id: 'product.videoTime0' })}
            </div>
          </Col>
          <Col span={isWide ? 8 : 24} className={styles.card}>
            <JoLPlayer
              option={{
                videoSrc:
                  'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/file/A*CGu4RqkzzDgAAAAAAAAAAAAAARQnAQ',
                height: isWide ? 204 : 102,
                width: 362,
              }}
            />
            <div className={styles.title}>
              {intl.formatMessage({ id: 'product.video1' })}
            </div>
            <div className={styles.tag}>
              {intl.formatMessage({ id: 'product.videoTime1' })}
            </div>
          </Col>
          <Col span={isWide ? 8 : 24} className={styles.card}>
            <JoLPlayer
              option={{
                videoSrc:
                  'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/file/A*CGu4RqkzzDgAAAAAAAAAAAAAARQnAQ',
                height: isWide ? 204 : 102,
                width: 362,
              }}
            />
            <div className={styles.title}>
              {intl.formatMessage({ id: 'product.video1' })}
            </div>
            <div className={styles.tag}>
              {intl.formatMessage({ id: 'product.videoTime1' })}
            </div>
          </Col>
        </Row>
      </div>

      <SubTitle title={intl.formatMessage({ id: 'product.intro' })} />
      <div className={styles.introWrapper}>
        <div>{intl.formatMessage({ id: 'product.introduction0' })}</div>
        <div>{intl.formatMessage({ id: 'product.introduction1' })}</div>
      </div>

      <SubTitle title={intl.formatMessage({ id: 'product.feature' })} />
      <Row className={styles.featCards}>
        {getFeats(intl)?.map((item, key) => {
          return (
            <Col
              span={isWide ? 12 : 6}
              className={styles.featCardGroup}
              key={key}
            >
              <div className={styles.featCard}>
                {isWide ? (
                  <Space size={36}>
                    <img src={item.icon} />
                    <div className={styles.textGroup}>
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.desc}>{item.desc}</div>
                    </div>
                  </Space>
                ) : (
                  <>
                    <img src={item.icon} />
                    <div className={styles.textGroup}>
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.desc}>{item.desc}</div>
                    </div>
                  </>
                )}
              </div>
            </Col>
          );
        })}
      </Row>

      <div className={styles.reasonWrapper}>
        <SubTitle title={intl.formatMessage({ id: 'product.choseReason' })} />
        <div className={styles.reasonCard}>
          <div>{intl.formatMessage({ id: 'product.choseReasonDesc' })}</div>
        </div>
      </div>
    </div>
  );

  return (
    <LayoutTemplate
      bannerInfo={{
        bgIconUrl:
          'https://mdn.alipayobjects.com/mdn/huamei_qcdryc/afts/img/A*ga9NQ6eVsx4AAAAAAAAAAAAADgOBAQ',
        slogan: intl.formatMessage({ id: 'product.slogan' }),
        description: intl.formatMessage({ id: 'product.description' }),
      }}
      content={content}
    />
  );
}
