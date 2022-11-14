import React from 'react';
import { Anchor, Button, Col, Row, Space } from 'antd';
import cx from 'classnames';
import { Helmet } from 'react-helmet';
import { CheckOutlined } from '@ant-design/icons';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { Carousel } from '@/components/Carousel';
import { SubTitle } from '@/components/SubTitle';
import { useIntl, history } from 'umi';
import { getReasons } from '@/data/reasons';
import { getVersions } from '@/data/version-feats';

import styles from './index.less';
import { useMedia } from 'react-use';

const { Link } = Anchor;

export default function IndexPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const content = (
    <div className={styles.containerWrapper}>
      <Helmet>
        <title>{intl.formatMessage({ id: 'home.title' })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: 'home.description' })}
        />
      </Helmet>
      <Carousel />
      <SubTitle title={intl.formatMessage({ id: 'home.users' })} />
      <Row className={styles.users}>
        <Col span={isWide ? 5 : 6}>
          <img src="https://gw.alipayobjects.com/zos/bmw-prod/30ae5685-3a2a-4363-a664-99d3872b5b11.svg" />
        </Col>
        <Col span={isWide ? 5 : 6}>
          <img src="https://gw.alipayobjects.com/zos/bmw-prod/891eceee-c0b0-4a40-bc31-b945d57f6d93.svg" />
        </Col>
        <Col span={isWide ? 5 : 6}>
          <img src="https://gw.alipayobjects.com/zos/bmw-prod/8d4767b8-f93a-4c83-8f76-a8298ecaf274.svg" />
        </Col>
        <Col span={isWide ? 5 : 6}>
          <img src="https://gw.alipayobjects.com/zos/bmw-prod/58f9c5a7-e689-4319-80cf-7a7e699ec515.svg" />
        </Col>

        {isWide && (
          <Col span={4}>
            <Button
              type="primary"
              block
              onClick={() => {
                history.push('/demo');
              }}
              className="grayBtn"
            >
              {intl.formatMessage({ id: 'home.moreDemo' })}
            </Button>
          </Col>
        )}
      </Row>

      {!isWide && (
        <Button
          type="primary"
          block
          onClick={() => {
            history.push('/demo');
          }}
          className={cx('grayBtn', styles.moreDemo)}
        >
          {intl.formatMessage({ id: 'home.moreDemo' })}
        </Button>
      )}

      <SubTitle title={intl.formatMessage({ id: 'home.choseReason' })} />
      <Row className={styles.reasonCards}>
        {getReasons(intl)?.map((item, key) => {
          return (
            <Col
              span={isWide ? 12 : 6}
              className={styles.reasonCardGroup}
              key={key}
            >
              <div className={styles.reasonCard}>
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
      <div className={styles.versionsWrapper}>
        <SubTitle title={intl.formatMessage({ id: 'home.chooseVersion' })} />
        <Row className={styles.versions}>
          <Col span={isWide ? 12 : 24} className={styles.version} key={0}>
            <div className={styles.versionCard}>
              <div className={styles.title}>
                {intl.formatMessage({ id: 'home.version0' })}
              </div>
              <div className={styles.desc}>
                {intl.formatMessage({ id: 'home.version.desc0' })}
              </div>
              <Button
                type="primary"
                block
                onClick={() => history.push('/download')}
                className="lightBtn"
              >
                {intl.formatMessage({ id: 'home.version.startUse' })}
              </Button>
            </div>
          </Col>
          <Col span={isWide ? 12 : 24} className={styles.version} key={1}>
            <div className={styles.versionCard}>
              <div className={styles.title}>
                {intl.formatMessage({ id: 'home.version1' })}
              </div>
              <div className={styles.desc}>
                {intl.formatMessage({ id: 'home.version.desc1' })}
              </div>
              <Anchor affix={false} className={styles.primaryBtn}>
                <Link
                  href="#contactUs"
                  title={intl.formatMessage({
                    id: 'home.version.contactUs',
                  })}
                />
              </Anchor>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.featList}>
        <Row>
          <Col offset={14} span={5} className={styles.title}>
            {intl.formatMessage({ id: 'home.version0' })}
          </Col>
          <Col span={5} className={cx(styles.title, 'boldText')}>
            {intl.formatMessage({ id: 'home.version1' })}
          </Col>
        </Row>
        {getVersions(intl)?.map((item, key) => {
          return (
            <Row
              key={key}
              className={key % 2 === 0 ? styles.crossRow : styles.baseRow}
            >
              <Col span={14} className={cx(styles.textAlignLeft, styles.text)}>
                {item.feat}
              </Col>
              <Col span={5} className={styles.text}>
                {item.community ? <CheckOutlined /> : null}
              </Col>
              <Col span={5} className={styles.text}>
                {item.pro ? <CheckOutlined /> : null}
              </Col>
            </Row>
          );
        })}
      </div>
      <div className={styles.footerBtn}>
        <Space size={isWide ? 24 : 12}>
          <Button
            onClick={() => {
              history.push('/download');
            }}
            type="primary"
            block
            className={isWide ? 'darkBtn' : 'lightBtn'}
          >
            {intl.formatMessage({ id: 'home.version.download' })}
          </Button>

          <Button
            onClick={() => {
              history.push('/form');
            }}
            type="primary"
            block
            className={isWide ? 'lightBtn' : 'grayBtn'}
          >
            {intl.formatMessage({ id: 'home.version.useFree' })}
          </Button>
        </Space>
      </div>
    </div>
  );

  return (
    <LayoutTemplate
      bannerInfo={{
        bgIconUrl:
          'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*hP1DSZ24ZCIAAAAAAAAAAAAADgOBAQ/original',

        slogan: intl.formatMessage({ id: 'home.banner.slogan' }),
      }}
      content={content}
    />
  );
}
