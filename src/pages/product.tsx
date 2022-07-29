import React, { useEffect, useRef, useState } from 'react';
import { Col, Layout, Row, Space, Switch } from 'antd';
import { Banner } from '@/components/Banner';
import type { BannerButtonProps } from '@/components/Banner';
import JoLPlayer, { JoLPlayerRef } from 'jol-player';
import { SubTitle } from '@/components/SubTitle';
import { Footer } from '@/components/Footer';
import { useIntl } from 'umi';

import styles from './product.less';

const { Content } = Layout;

export default function ProductPage() {
  const intl = useIntl();
  const buttons: BannerButtonProps[] = [
    {
      text: intl.formatMessage({ id: 'product.quickStart' }),
      url: '#quickStart',
    },
  ];
  const videoRef = useRef<JoLPlayerRef>(null!);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  useEffect(() => {
    if (!videoRef || !videoRef?.current || !videoRef?.current?.video) {
      return;
    }
    // if (autoPlay) {
    //   videoRef?.current?.play();
    // }
  }, [autoPlay]);

  return (
    <Layout>
      <Content>
        <Banner
          activeKey={'product'}
          bgUrl={
            'https://gw.alipayobjects.com/zos/bmw-prod/87f8aab8-36ee-4834-af97-5e2a61d2e66c.svg'
          }
          slogan={intl.formatMessage({ id: 'product.banner.slogan' })}
          buttons={buttons}
        />
        <div className={styles.containerWrapper}>
          <div className={styles.banner}>
            <div className={styles.title}>
              {intl.formatMessage({ id: 'home.banner.quickStart' })}
            </div>
            <Row>
              <Col span={12}>
                <JoLPlayer
                  ref={videoRef}
                  option={{
                    videoSrc:
                      'https://gw.alipayobjects.com/v/rms_fa12c2/afts/video/A*CGu4RqkzzDgAAAAAAAAAAAAAARQnAQ/720P',
                    width: '100%',
                    height: 319,
                  }}
                />
              </Col>
              <Col span={12}>
                <Space className={styles.autoPlay}>
                  {intl.formatMessage({ id: 'product.banner.autoPlay' })}
                  <Switch
                    defaultChecked
                    onChange={(checked) => {
                      setAutoPlay(checked);
                    }}
                  />
                </Space>

                <div className={styles.list}>
                  {intl.formatMessage({ id: 'product.banner.playDesc0' })}
                </div>
                <div className={styles.list}>
                  {intl.formatMessage({ id: 'product.banner.playDesc1' })}
                </div>
              </Col>
            </Row>
          </div>
          <SubTitle title={intl.formatMessage({ id: 'product.feature' })} />
          <Row className={styles.featCards} gutter={[40, 60]}>
            <Col className={styles.featCard} span={12}>
              <div className={styles.title}>
                {intl.formatMessage({ id: 'product.feature.title0' })}
              </div>
              <div className={styles.desc}>
                {intl.formatMessage({ id: 'product.feature.desc0' })}
              </div>
              <img
                className={styles.leftImg}
                src="https://gw.alipayobjects.com/zos/bmw-prod/3cc369df-0dad-4131-bbda-36127c7ab625.svg"
              />
            </Col>
            <Col className={styles.featCard} span={12}>
              <div className={styles.title}>
                {intl.formatMessage({ id: 'product.feature.title1' })}
              </div>
              <div className={styles.desc}>
                {intl.formatMessage({ id: 'product.feature.desc1' })}
              </div>
              <img
                className={styles.rightImg}
                src="https://gw.alipayobjects.com/zos/bmw-prod/ca547d7d-8080-4fb9-8c3b-71f764ecf09a.svg"
              />
            </Col>

            <Col className={styles.featCard} span={12}>
              <div className={styles.title}>
                {intl.formatMessage({ id: 'product.feature.title2' })}
              </div>
              <div className={styles.desc}>
                {intl.formatMessage({ id: 'product.feature.desc2' })}
              </div>
              <img
                className={styles.leftImg}
                src="https://gw.alipayobjects.com/zos/bmw-prod/c637668a-4ac2-4895-91ab-925b6c989e67.svg"
              />
            </Col>
            <Col className={styles.featCard} span={12}>
              <div className={styles.title}>
                {intl.formatMessage({ id: 'product.feature.title3' })}
              </div>
              <div className={styles.desc}>
                {intl.formatMessage({ id: 'product.feature.desc3' })}
              </div>
              <img
                className={styles.rightImg}
                src="https://gw.alipayobjects.com/zos/bmw-prod/fc4e0d92-2462-4c01-9d68-0f881762b4e7.svg"
              />
            </Col>
          </Row>
          <SubTitle
            title={intl.formatMessage({ id: 'product.choseReason' })}
            showIcon={false}
          />
          <div className={styles.reasonCard}>
            <div>{intl.formatMessage({ id: 'product.choseReason0' })}</div>

            <div style={{ marginTop: '50px' }}>
              {intl.formatMessage({ id: 'product.choseReason1' })}
            </div>

            <img src="https://gw.alipayobjects.com/zos/bmw-prod/5eda9000-4c3c-4d30-9378-abfb25b57db3.svg" />
          </div>

          <SubTitle
            title={intl.formatMessage({ id: 'product.quickStart' })}
            showIcon={false}
          />
          <div id="quickStart" className={styles.quickStart}>
            <div className={styles.videoWrapper}>
              <JoLPlayer
                option={{
                  videoSrc:
                    'https://gw.alipayobjects.com/v/rms_fa12c2/afts/video/A*CGu4RqkzzDgAAAAAAAAAAAAAARQnAQ/720P',
                  width: 865,
                  height: 487,
                }}
              />
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
