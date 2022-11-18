import React from 'react';
import { Anchor, Button, Col, Row, Space } from 'antd';
import cx from 'classnames';
import { Helmet } from 'react-helmet';
import { CheckOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { SubTitle } from '@/components/SubTitle';
import { useIntl, history } from 'umi';
import { getReasons } from '@/data/reasons';
import { getCases } from '@/data/cases';
import { getVersions } from '@/data/version-feats';
import { useMedia } from 'react-use';

import styles from './index.less';

const { Link } = Anchor;

export default function IndexPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const content = (
    <>
      <img
        className={styles.bannerImg}
        src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*hP1DSZ24ZCIAAAAAAAAAAAAADgOBAQ/original"
        alt="banner"
      />
      <div className={styles.containerWrapper}>
        <Helmet>
          <title>{intl.formatMessage({ id: 'home.title' })}</title>
          <meta
            name="description"
            content={intl.formatMessage({ id: 'home.description' })}
          />
        </Helmet>

        <div className={styles.noticeWrapper}>
          <Row>
            <Col span={isWide ? 8 : 24} className={styles.card}>
              <div className={styles.tag}>
                {intl.formatMessage({ id: 'home.notice0.tag' })}
              </div>
              <div className={styles.title}>
                {intl.formatMessage({ id: 'home.notice0.title' })}
              </div>
              <div className={styles.desc}>
                {intl.formatMessage({ id: 'home.notice0.desc' })}
              </div>
              <a className="textLink" href="">
                {intl.formatMessage({ id: 'home.knowMore' })}
                <ArrowRightOutlined />
              </a>
            </Col>
            <Col span={isWide ? 8 : 24} className={styles.card}>
              <div className={styles.tag}>
                {intl.formatMessage({ id: 'home.notice1.tag' })}
              </div>
              <div className={styles.title}>
                {intl.formatMessage({ id: 'home.notice1.title' })}
              </div>
              <div className={styles.desc}>
                {intl.formatMessage({ id: 'home.notice1.desc' })}
              </div>
              <a className="textLink" href="">
                {intl.formatMessage({ id: 'home.knowMore' })}
                <ArrowRightOutlined />
              </a>
            </Col>
            <Col span={isWide ? 8 : 24} className={styles.card}>
              <div className={styles.tag}>
                {intl.formatMessage({ id: 'home.notice2.tag' })}
              </div>
              <div className={styles.title}>
                {intl.formatMessage({ id: 'home.notice2.title' })}
              </div>
              <div className={styles.desc}>
                {intl.formatMessage({ id: 'home.notice2.desc' })}
              </div>
              <a className="textLink" href="">
                {intl.formatMessage({ id: 'home.knowMore' })}
                <ArrowRightOutlined />
              </a>
            </Col>
          </Row>
        </div>

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

        <div className={styles.cases}>
          <Row>
            <Col span={6} className={styles.caseGroup}>
              <div className={styles.title}>
                {intl.formatMessage({ id: 'home.case.title' })}
              </div>
              <div className={styles.desc}>
                {intl.formatMessage({ id: 'home.case.desc0' })}
              </div>
              <div className={styles.desc}>
                {intl.formatMessage({ id: 'home.case.desc1' })}
              </div>
              <a className={cx('textLink', styles.knowMore)} href="">
                {intl.formatMessage({ id: 'home.knowMore' })}
                <ArrowRightOutlined />
              </a>
            </Col>
            <Col span={18}>
              <Row style={{ margin: '-12px' }}>
                {getCases(intl)?.map((item, key) => (
                  <Col span={8} className={styles.cardWrapper} key={key}>
                    <div className={styles.card}>
                      <img src={item.iconUrl} alt="icon" />
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.desc}>{item.desc0}</div>
                      <div className={styles.desc}>{item.desc1}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>

        <SubTitle title={intl.formatMessage({ id: 'home.users' })} />
        <Row className={styles.users}>
          <Col span={6}>
            <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*yZnbTbOz1RAAAAAAAAAAAAAADgOBAQ/original" />
          </Col>
          <Col span={6}>
            <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*6qfKQo719XQAAAAAAAAAAAAADgOBAQ/original" />
          </Col>
          <Col span={6}>
            <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*7szLS7kQW-QAAAAAAAAAAAAADgOBAQ/original" />
          </Col>
          <Col span={6}>
            <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*LsymQLEes6wAAAAAAAAAAAAADgOBAQ/original" />
          </Col>
          <a className="textLink" href="/demo">
            {intl.formatMessage({ id: 'home.moreDemo' })}
            <ArrowRightOutlined />
          </a>
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
            <Col
              span={14}
              className={cx(styles.title, styles.textAlignLeft, 'boldText')}
            >
              {intl.formatMessage({ id: 'home.function' })}
            </Col>
            <Col span={5} className={styles.title}>
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
                className={key % 2 === 1 ? styles.crossRow : styles.baseRow}
              >
                <Col
                  span={14}
                  className={cx(styles.textAlignLeft, styles.text)}
                >
                  {item.feat}
                </Col>
                <Col span={5} className={styles.text}>
                  {item.community ? <CheckOutlined /> : '-'}
                </Col>
                <Col span={5} className={styles.text}>
                  {item.pro ? <CheckOutlined /> : '-'}
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    </>
  );

  return (
    <LayoutTemplate
      bannerInfo={{
        slogan: intl.formatMessage({ id: 'home.banner.slogan' }),
        description: intl.formatMessage({ id: 'home.banner.description' }),
      }}
      content={content}
    />
  );
}
