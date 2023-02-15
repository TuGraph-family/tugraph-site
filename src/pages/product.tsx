import React from 'react';
import { Carousel, Col, Row, Space, Tag } from 'antd';
import { Helmet } from 'react-helmet';
import JoLPlayer from '@/components/Player';
import { SubTitle } from '@/components/SubTitle';
import { useMedia } from 'react-use';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { getLocale, isBrowser, useIntl } from 'umi';
import { getFeats } from '@/data/feats';

import stylesZh from './product.less';
import stylesEn from './product_en.less';

export default function ProductPage() {
  const intl = useIntl();
  const lang = getLocale();
  const styles = lang === 'en' || lang === 'en-US' ? stylesEn : stylesZh;
  const isWide = useMedia('(min-width: 767.99px)', true);
  const MOBILE_HEIGHT = isBrowser()
    ? 266 * (document.body.clientWidth / 750)
    : 266;
  const SWIPE_PADDING = isBrowser()
    ? (40 * document.body.clientWidth) / 750
    : 40;
  const pcVideoList = (
    <div className={styles.videoWrapper}>
      {isBrowser() && (
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
              <Tag className={styles.tag}>
                {intl.formatMessage({ id: 'product.videoTime0' })}
              </Tag>
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
              <Tag className={styles.tag}>
                {intl.formatMessage({ id: 'product.videoTime1' })}
              </Tag>
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
              <Tag className={styles.tag}>
                {intl.formatMessage({ id: 'product.videoTime2' })}
              </Tag>
            </Space>
          </div>
        </Space>
      )}
    </div>
  );
  const mobileVideoList = (
    <div className={styles.videoWrapper}>
      <Carousel centerMode={true} centerPadding={`${SWIPE_PADDING}px`}>
        <div className={styles.card}>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
              height: isWide ? 204 : MOBILE_HEIGHT,
              width: isWide ? 362 : '100%',
            }}
          />
          <Space className={styles.videoInfo} align="start">
            <div className={styles.title}>
              {intl.formatMessage({ id: 'product.video0' })}
            </div>
            <Tag className={styles.tag}>
              {intl.formatMessage({ id: 'product.videoTime0' })}
            </Tag>
          </Space>
        </div>
        <div className={styles.card}>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/os/bmw-prod/c9cd86a4-6bd6-48bb-8926-ef62b3995d0b.mov',
              height: isWide ? 204 : MOBILE_HEIGHT,
              width: isWide ? 362 : '100%',
            }}
          />
          <Space className={styles.videoInfo} align="start">
            <div className={styles.title}>
              {intl.formatMessage({ id: 'product.video1' })}
            </div>
            <Tag className={styles.tag}>
              {intl.formatMessage({ id: 'product.videoTime1' })}
            </Tag>
          </Space>
        </div>
        <div className={styles.card}>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/file/A*CGu4RqkzzDgAAAAAAAAAAAAAARQnAQ',
              height: isWide ? 204 : MOBILE_HEIGHT,
              width: isWide ? 362 : '100%',
            }}
          />

          <Space className={styles.videoInfo} align="start">
            <div className={styles.title}>
              {intl.formatMessage({ id: 'product.video2' })}
            </div>
            <Tag className={styles.tag}>
              {intl.formatMessage({ id: 'product.videoTime2' })}
            </Tag>
          </Space>
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

      <SubTitle
        title={intl.formatMessage({ id: 'product.intro' })}
        className={styles.subTitle}
      />
      <div className={styles.introWrapper}>
        <div>{intl.formatMessage({ id: 'product.introduction0' })}</div>
        <div>{intl.formatMessage({ id: 'product.introduction1' })}</div>
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
            src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*kt3iT4DKE58AAAAAAAAAAAAADgOBAQ/original"
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
