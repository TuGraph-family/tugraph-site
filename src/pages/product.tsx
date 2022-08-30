import React, { useRef, useState } from 'react';
import { Button, Col, Row } from 'antd';
import { Helmet } from 'react-helmet';
import type { BannerButtonProps } from '@/components/Banner';
import JoLPlayer, { JoLPlayerRef } from 'jol-player';
import { SubTitle } from '@/components/SubTitle';
import { useMedia } from 'react-use';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { useIntl } from 'umi';
import cx from 'classnames';

import styles from './product.less';

export default function ProductPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);
  const [video, setVideo] = useState<string>(
    'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
  );

  const buttons: BannerButtonProps[] = [
    {
      text: intl.formatMessage({ id: 'product.quickStart' }),
      url: '#quickStart',
    },
  ];
  const videoRef = useRef<JoLPlayerRef>(null!);

  const content = (
    <div className={styles.containerWrapper}>
      <Helmet>
        <title>{intl.formatMessage({ id: 'product.title' })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: 'product.description' })}
        />
      </Helmet>
      <div className={styles.banner}>
        <div className={styles.title}>
          {intl.formatMessage({ id: 'home.banner.quickStart' })}
        </div>
        {isWide ? (
          <Row>
            <Col span={16} className={styles.videoContainer}>
              <JoLPlayer
                ref={videoRef}
                option={{
                  videoSrc: video,
                  height: 319,
                }}
              />
            </Col>
            <Col span={8} className={styles.btnGroup}>
              <Button
                onClick={() =>
                  setVideo(
                    'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
                  )
                }
                className={cx(styles.playBtn, 'grayBtn')}
              >
                {intl.formatMessage({ id: 'product.banner.playDesc0' })}
              </Button>
              <Button
                onClick={() =>
                  setVideo(
                    'https://gw.alipayobjects.com/os/bmw-prod/c9cd86a4-6bd6-48bb-8926-ef62b3995d0b.mov',
                  )
                }
                className={cx(styles.playBtn, 'grayBtn')}
              >
                {intl.formatMessage({ id: 'product.banner.playDesc1' })}
              </Button>
            </Col>
          </Row>
        ) : (
          <>
            <JoLPlayer
              ref={videoRef}
              option={{
                videoSrc: video,
                height: 240,
              }}
            />
            <div className={styles.btnGroup}>
              <Button
                type="primary"
                onClick={() =>
                  setVideo(
                    'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
                  )
                }
                className={styles.left}
              >
                {intl.formatMessage({ id: 'product.banner.playDesc0' })}
              </Button>
              <Button
                type="primary"
                ghost
                className={styles.right}
                onClick={() =>
                  setVideo(
                    'https://gw.alipayobjects.com/os/bmw-prod/c9cd86a4-6bd6-48bb-8926-ef62b3995d0b.mov',
                  )
                }
              >
                {intl.formatMessage({ id: 'product.banner.playDesc1' })}
              </Button>
            </div>
          </>
        )}
      </div>
      <SubTitle title={intl.formatMessage({ id: 'product.feature' })} />
      <Row className={styles.featCards} gutter={[24, 24]}>
        <Col className={styles.featCard} span={isWide ? 12 : 24}>
          {isWide && (
            <img
              className={styles.bgImg}
              src="https://gw.alipayobjects.com/zos/bmw-prod/f5a9ce75-c879-4057-9d20-c993ed4e4a47.svg"
            />
          )}
          <div className={styles.title}>
            {!isWide && (
              <img
                className={styles.mobileImg}
                src="https://gw.alipayobjects.com/zos/bmw-prod/18042c99-14ba-42e3-b00c-a3368143fc71.svg"
              />
            )}
            {intl.formatMessage({ id: 'product.feature.title0' })}
          </div>
          <div className={styles.desc}>
            {intl.formatMessage({ id: 'product.feature.desc0' })}
          </div>
        </Col>
        <Col className={styles.featCard} span={isWide ? 12 : 24}>
          {isWide && (
            <img
              className={styles.bgImg}
              src="https://gw.alipayobjects.com/zos/bmw-prod/3a398574-536f-4cd2-b12d-5bfdc6e45cc5.svg"
            />
          )}
          <div className={styles.title}>
            {!isWide && (
              <img
                className={styles.mobileImg}
                src="https://gw.alipayobjects.com/zos/bmw-prod/984031e2-9518-4f10-8aab-486fafcbdc5b.svg"
              />
            )}
            {intl.formatMessage({ id: 'product.feature.title1' })}
          </div>
          <div className={styles.desc}>
            {intl.formatMessage({ id: 'product.feature.desc1' })}
          </div>
        </Col>

        <Col className={styles.featCard} span={isWide ? 12 : 24}>
          {isWide && (
            <img
              className={styles.bgImg}
              src="https://gw.alipayobjects.com/zos/bmw-prod/3a398574-536f-4cd2-b12d-5bfdc6e45cc5.svg"
            />
          )}
          <div className={styles.title}>
            {!isWide && (
              <img
                className={styles.mobileImg}
                src="https://gw.alipayobjects.com/zos/bmw-prod/50eb0393-b8c9-4e23-bdcc-b6983c368b9a.svg"
              />
            )}
            {intl.formatMessage({ id: 'product.feature.title2' })}
          </div>
          <div className={styles.desc}>
            {intl.formatMessage({ id: 'product.feature.desc2' })}
          </div>
        </Col>
        <Col className={styles.featCard} span={isWide ? 12 : 24}>
          {isWide && (
            <img
              className={styles.bgImg}
              src="https://gw.alipayobjects.com/zos/bmw-prod/7fef43b0-8b14-4e2d-8f4f-edac2d9dcf28.svg"
            />
          )}
          <div className={styles.title}>
            {!isWide && (
              <img
                className={styles.mobileImg}
                src="https://gw.alipayobjects.com/zos/bmw-prod/68df5910-6288-4f2b-8fc2-01e944a44b56.svg"
              />
            )}
            {intl.formatMessage({ id: 'product.feature.title3' })}
          </div>
          <div className={styles.desc}>
            {intl.formatMessage({ id: 'product.feature.desc3' })}
          </div>
        </Col>
      </Row>
      <div className={styles.reasonWrapper}>
        <SubTitle title={intl.formatMessage({ id: 'product.choseReason' })} />
        <div className={styles.reasonCard}>
          <div>{intl.formatMessage({ id: 'product.choseReason0' })}</div>

          <div>{intl.formatMessage({ id: 'product.choseReason1' })}</div>

          {isWide && (
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/5eda9000-4c3c-4d30-9378-abfb25b57db3.svg" />
          )}
        </div>
      </div>

      <div className={styles.quickStartWrapper}>
        <SubTitle title={intl.formatMessage({ id: 'product.quickStart' })} />
        <div id="quickStart" className={styles.quickStart}>
          <div className={styles.videoWrapper}>
            <JoLPlayer
              option={{
                videoSrc:
                  'https://gw.alipayobjects.com/v/rms_fa12c2/afts/video/A*CGu4RqkzzDgAAAAAAAAAAAAAARQnAQ/720P',
                height: isWide ? 487 : 220,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <LayoutTemplate
      bannerInfo={{
        buttons,
        bgIconUrl:
          'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*0dYkQpmLLyEAAAAAAAAAAAAAARQnAQ',
        activeKey: 'product',

        slogan: intl.formatMessage({ id: 'product.banner.slogan' }),
      }}
      content={content}
    />
  );
}
