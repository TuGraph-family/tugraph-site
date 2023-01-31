import React, { useRef, useState } from 'react';
import { Button, Carousel, Col, Menu, Row, Space } from 'antd';
import { Helmet } from 'react-helmet';
import JoLPlayer from 'jol-player';
import { SubTitle } from '@/components/SubTitle';
import { useMedia } from 'react-use';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { getLocale, useIntl } from 'umi';
import { getFeats } from '@/data/feats';
import cx from 'classnames';

import stylesZh from './product.less';
import stylesEn from './product_en.less';

export default function ProductPage() {
  const intl = useIntl();
  const lang = getLocale();
  const styles = lang === 'en-US' ? stylesEn : stylesZh;
  const isWide = useMedia('(min-width: 767.99px)', true);

  const pcVideoList = (
    <div className={styles.videoWrapper}>
      <Space size={25}>
        <div className={styles.card}>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
              height: isWide ? 204 : 102,
              width: 362,
            }}
          />
          <Space size={12}>
            <div className={styles.title}>
              {intl.formatMessage({ id: 'product.video0' })}
            </div>
            <div className={styles.tag}>
              {intl.formatMessage({ id: 'product.videoTime0' })}
            </div>
          </Space>
        </div>
        <div className={styles.card}>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/os/bmw-prod/c9cd86a4-6bd6-48bb-8926-ef62b3995d0b.mov',
              height: isWide ? 204 : 102,
              width: 362,
            }}
          />
          <Space size={12}>
            <div className={styles.title}>
              {intl.formatMessage({ id: 'product.video1' })}
            </div>
            <div className={styles.tag}>
              {intl.formatMessage({ id: 'product.videoTime1' })}
            </div>
          </Space>
        </div>
        <div className={styles.card}>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/file/A*CGu4RqkzzDgAAAAAAAAAAAAAARQnAQ',
              height: isWide ? 204 : 102,
              width: 362,
            }}
          />
          <Space size={12}>
            <div className={styles.title}>
              {intl.formatMessage({ id: 'product.video2' })}
            </div>
            <div className={styles.tag}>
              {intl.formatMessage({ id: 'product.videoTime2' })}
            </div>
          </Space>
        </div>
      </Space>
    </div>
  );
  const mobileVideoList = (
    <div className={styles.videoWrapper}>
      <Carousel>
        <div className={styles.card}>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
              height: isWide ? 204 : 266,
              width: isWide ? 362 : '100%',
            }}
          />
          <div className={styles.videoInfo}>
            <div className={styles.title}>
              {intl.formatMessage({ id: 'product.video0' })}
            </div>
            <div className={styles.tag}>
              {intl.formatMessage({ id: 'product.videoTime0' })}
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/os/bmw-prod/c9cd86a4-6bd6-48bb-8926-ef62b3995d0b.mov',
              height: isWide ? 204 : 266,
              width: isWide ? 362 : '100%',
            }}
          />
          <div className={styles.videoInfo}>
            <div className={styles.title}>
              {intl.formatMessage({ id: 'product.video1' })}
            </div>
            <div className={styles.tag}>
              {intl.formatMessage({ id: 'product.videoTime1' })}
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/file/A*CGu4RqkzzDgAAAAAAAAAAAAAARQnAQ',
              height: isWide ? 204 : 266,
              width: isWide ? 362 : '100%',
            }}
          />

          <div className={styles.videoInfo}>
            <div className={styles.title}>
              {intl.formatMessage({ id: 'product.video2' })}
            </div>
            <div className={styles.tag}>
              {intl.formatMessage({ id: 'product.videoTime2' })}
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );

  const content = (
    <div className={styles.containerWrapper}>
      <Helmet>
        <title>{intl.formatMessage({ id: 'product.title' })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: 'product.description' })}
        />
      </Helmet>

      {isWide ? pcVideoList : mobileVideoList}

      <SubTitle title={intl.formatMessage({ id: 'product.intro' })} />
      <div className={styles.introWrapper}>
        <div>{intl.formatMessage({ id: 'product.introduction0' })}</div>
        <div>{intl.formatMessage({ id: 'product.introduction1' })}</div>
      </div>

      <SubTitle title={intl.formatMessage({ id: 'product.feature' })} />
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
                  <Space size={16}>
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
        <SubTitle title={intl.formatMessage({ id: 'product.ecosystem' })} />
        <div className="maxContainer">
          <img
            src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*Fk3USIh9o1MAAAAAAAAAAAAADgOBAQ/original"
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
        slogan: intl.formatMessage({ id: 'product.slogan' }),
        description: intl.formatMessage({ id: 'product.description' }),
      }}
      content={content}
    />
  );
}
