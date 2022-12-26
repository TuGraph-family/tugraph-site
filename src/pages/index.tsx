import React, { useState } from 'react';
import { Button, Col, Modal, Row, Space } from 'antd';
import cx from 'classnames';
import JoLPlayer from 'jol-player';
import { Helmet } from 'react-helmet';
import {
  CheckOutlined,
  ArrowRightOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { SubTitle } from '@/components/SubTitle';
import { useIntl, history } from 'umi';
import { getReasons } from '@/data/reasons';
import { getCases } from '@/data/cases';
import { getVersions } from '@/data/version-feats';
import { useMedia } from 'react-use';
import { ApplyForm } from '@/components/ApplyForm';

import styles from './index.less';

export default function IndexPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const bannerButton = (
    <div className={styles.bannerButtons}>
      <Button
        className={styles.github}
        onClick={() => {
          window.open('https://github.com/TuGraph-db');
        }}
        type="primary"
      >
        <GithubOutlined />
        GitHub
      </Button>
      <Button
        className={styles.play}
        type="text"
        onClick={() => {
          setShowVideo(true);
        }}
      >
        <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*NyD0T5CdYfMAAAAAAAAAAAAADgOBAQ/original" />
        {intl.formatMessage({ id: 'home.banner.quickStart' })}
      </Button>
    </div>
  );

  const content = (
    <>
      <div className="maxContainer">
        <img
          className={styles.bannerImg}
          src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*SeWxTJnZ4_8AAAAAAAAAAAAADgOBAQ/original"
          alt="banner"
        />
      </div>

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
              <a className="textLink" href="/blog?id=0" target="_blank">
                {intl.formatMessage({ id: 'home.knowMore' })}
                <ArrowRightOutlined />
              </a>
            </Col>
            <Col span={isWide ? 8 : 24} className={styles.card}>
              <div className={styles.tag}>
                {intl.formatMessage({ id: 'home.notice1.tag' })}
              </div>
              <div className={styles.title} style={{ width: '244px' }}>
                {intl.formatMessage({ id: 'home.notice1.title' })}
              </div>
              <div className={styles.desc}>
                {intl.formatMessage({ id: 'home.notice1.desc' })}
              </div>
              <a className="textLink" href="/blog?id=3" target="_blank">
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
              <a
                className="textLink"
                target="_blank"
                href="https://mp.weixin.qq.com/s/h8TR4gn5keqGNEUAd4lBOQ"
              >
                {intl.formatMessage({ id: 'home.knowMore' })}
                <ArrowRightOutlined />
              </a>
            </Col>
          </Row>
        </div>

        <SubTitle title={intl.formatMessage({ id: 'home.choseReason' })} />
        <div className="maxContainer">
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
                      <Space size={24}>
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
        </div>

        <div className={styles.cases}>
          <Row className="maxContainer">
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
              {/* <a className={cx('textLink', styles.knowMore)} href="/demo">
                {intl.formatMessage({ id: 'home.knowMore' })}
                <ArrowRightOutlined />
              </a> */}
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
        <div className="maxContainer">
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
        </div>

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
            <Col
              span={isWide ? 12 : 24}
              className={styles.version}
              style={{ paddingRight: '12px' }}
              key={0}
            >
              <div className={styles.versionCard}>
                <div
                  className={cx(styles.title, styles.textAlignLeft, 'boldText')}
                >
                  {intl.formatMessage({ id: 'home.version0' })}
                </div>
                <div className={styles.desc}>
                  {intl.formatMessage({ id: 'home.version.desc0' })}
                </div>
                <Button
                  type="primary"
                  block
                  onClick={() => window.location.replace('/download')}
                  className="lightBtn"
                >
                  {intl.formatMessage({ id: 'home.version.startUse' })}
                </Button>
              </div>
            </Col>
            <Col
              style={{ paddingLeft: '12px' }}
              span={isWide ? 12 : 24}
              className={styles.version}
              key={1}
            >
              <div className={styles.versionCard}>
                <div className={styles.title}>
                  {intl.formatMessage({ id: 'home.version1' })}
                </div>
                <div className={styles.desc}>
                  {intl.formatMessage({ id: 'home.version.desc1' })}
                </div>
                <Button
                  type="primary"
                  block
                  onClick={() => setShowApplyForm(true)}
                  className="lightBtn"
                >
                  {intl.formatMessage({ id: 'home.version.contactUs' })}
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="maxContainer">
          <div className={styles.featList}>
            <Row>
              <Col
                span={14}
                className={cx(styles.title, styles.textAlignLeft, 'boldText')}
              >
                {intl.formatMessage({ id: 'home.function' })}
              </Col>
              <Col span={5} className={cx(styles.title, 'boldText')}>
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

        <ApplyForm visible={showApplyForm} setVisible={setShowApplyForm} />
        <Modal
          centered
          bodyStyle={{ padding: 0 }}
          open={showVideo}
          onCancel={() => setShowVideo(false)}
          width={800}
          footer={null}
        >
          <div className={styles.videoBtn} onClick={() => setShowVideo(false)}>
            X
          </div>
          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
              height: isWide ? 450 : 102,
              width: 800,
            }}
          />
        </Modal>
      </div>
    </>
  );

  return (
    <LayoutTemplate
      bannerInfo={{
        slogan: intl.formatMessage({ id: 'home.banner.slogan' }),
        description: intl.formatMessage({ id: 'home.banner.description' }),
        footer: bannerButton,
      }}
      content={content}
    />
  );
}
