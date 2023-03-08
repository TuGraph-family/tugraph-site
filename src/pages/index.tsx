import React, { useState } from 'react';
import { Button, Carousel, Col, Modal, Row, Space, Tag } from 'antd';
import cx from 'classnames';
import { getLocale, isBrowser } from 'umi';
import JoLPlayer from '@/components/Player';
import { Helmet } from 'react-helmet';
import {
  CheckOutlined,
  ArrowRightOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { SubTitle } from '@/components/SubTitle';
import { useIntl } from 'umi';
import { getReasons } from '@/data/reasons';
import { getCases } from '@/data/cases';
import { getVersions } from '@/data/version-feats';
import { useMedia } from 'react-use';
import { ApplyForm } from '@/components/ApplyForm';

import stylesZh from './index.less';
import stylesEn from './index_en.less';
import AnnouncementBanner from '@/components/AnnouncementBanner';

export default function IndexPage() {
  const intl = useIntl();
  const lang = getLocale();
  const styles = lang === 'zh-CN' ? stylesZh : stylesEn;
  const isWide = useMedia('(min-width: 767.99px)', true);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const SWIPE_PADDING = isBrowser()
    ? (48 * document.body.clientWidth) / 750
    : 24;
  const bannerButton = (
    <div className={styles.bannerButtons}>
      <Space>
        <Button
          className={styles.github}
          onClick={() => {
            window.open('https://github.com/TuGraph-family');
          }}
          type="primary"
        >
          <Space>
            <GithubOutlined />
            <span className={styles.githubText}>GitHub</span>
          </Space>
        </Button>
        <Button
          className={styles.play}
          type="text"
          onClick={() => {
            setShowVideo(true);
          }}
        >
          <div className={styles.playContent}>
            <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*NyD0T5CdYfMAAAAAAAAAAAAADgOBAQ/original" />
            {intl.formatMessage({ id: 'home.banner.quickStart' })}
          </div>
        </Button>
      </Space>
    </div>
  );

  const pcNoticeWrapper = (
    <div className={styles.noticeWrapper}>
      <Row>
        <Col span={8} className={styles.card}>
          <Tag> {intl.formatMessage({ id: 'home.notice0.tag' })}</Tag>
          <div className={styles.title}>
            {intl.formatMessage({ id: 'home.notice0.title' })}
          </div>
          <div className={styles.desc}>
            {intl.formatMessage({ id: 'home.notice0.desc' })}
          </div>
          <a className={styles.learnMore} href="/blog?id=0" target="_blank">
            {intl.formatMessage({ id: 'home.knowMore' })}
            <ArrowRightOutlined />
          </a>
        </Col>
        <Col span={8} className={styles.card}>
          <Tag> {intl.formatMessage({ id: 'home.notice1.tag' })}</Tag>
          <div className={styles.title} style={{ width: '244px' }}>
            {intl.formatMessage({ id: 'home.notice1.title' })}
          </div>
          <div className={styles.desc}>
            {intl.formatMessage({ id: 'home.notice1.desc' })}
          </div>
          <a
            className={styles.learnMore}
            href={lang === 'zh-CN' ? `/blog?id=3` : `/blog?id=1`}
            target="_blank"
          >
            {intl.formatMessage({ id: 'home.knowMore' })}
            <ArrowRightOutlined />
          </a>
        </Col>
        <Col span={8} className={styles.card}>
          <Tag> {intl.formatMessage({ id: 'home.notice2.tag' })}</Tag>
          <div className={styles.title}>
            {intl.formatMessage({ id: 'home.notice2.title' })}
          </div>
          <div className={styles.desc}>
            {intl.formatMessage({ id: 'home.notice2.desc' })}
          </div>
          <a
            className={styles.learnMore}
            target="_blank"
            href={lang === 'zh-CN' ? `/blog?id=12` : `/blog?id=10`}
          >
            {intl.formatMessage({ id: 'home.knowMore' })}
            <ArrowRightOutlined />
          </a>
        </Col>
      </Row>
    </div>
  );

  const mobileNoticeWrapper = (
    <div className={styles.noticeWrapper}>
      <Carousel centerMode={true} centerPadding={`${SWIPE_PADDING}px`}>
        <div className={styles.card}>
          <Tag>{intl.formatMessage({ id: 'home.notice0.tag' })}</Tag>
          <div className={styles.title}>
            {intl.formatMessage({ id: 'home.notice0.title' })}
          </div>
          <div className={styles.desc}>
            {intl.formatMessage({ id: 'home.notice0.desc' })}
          </div>
          <a className={styles.learnMore} href="/blog?id=0" target="_blank">
            {intl.formatMessage({ id: 'home.knowMore' })}
            <ArrowRightOutlined />
          </a>
        </div>
        <div className={styles.card}>
          <Tag> {intl.formatMessage({ id: 'home.notice1.tag' })}</Tag>
          <div className={styles.title}>
            {intl.formatMessage({ id: 'home.notice1.title' })}
          </div>
          <div className={styles.desc}>
            {intl.formatMessage({ id: 'home.notice1.desc' })}
          </div>
          <a
            className={styles.learnMore}
            href={lang === 'zh-CN' ? `/blog?id=3` : `/blog?id=1`}
            target="_blank"
          >
            {intl.formatMessage({ id: 'home.knowMore' })}
            <ArrowRightOutlined />
          </a>
        </div>
        <div className={styles.card}>
          <Tag> {intl.formatMessage({ id: 'home.notice2.tag' })}</Tag>
          <div className={styles.title}>
            {intl.formatMessage({ id: 'home.notice2.title' })}
          </div>
          <div className={styles.desc}>
            {intl.formatMessage({ id: 'home.notice2.desc' })}
          </div>
          <a
            className={cx(styles.learnMore, {
              [styles.lastLearnMore]: lang === 'zh-CN',
            })}
            target="_blank"
            href={lang === 'zh-CN' ? `/blog?id=12` : `/blog?id=10`}
          >
            {intl.formatMessage({ id: 'home.knowMore' })}
            <ArrowRightOutlined />
          </a>
        </div>
      </Carousel>
    </div>
  );

  const content = (
    <>
      <div className={styles.containerWrapper}>
        <Helmet>
          <title>{intl.formatMessage({ id: 'home.title' })}</title>
          <meta
            name="description"
            content={intl.formatMessage({ id: 'home.description' })}
          />
        </Helmet>

        {isWide ? pcNoticeWrapper : mobileNoticeWrapper}

        <SubTitle
          title={intl.formatMessage({ id: 'home.choseReason' })}
          className={styles.subTitle}
        />
        <div className="maxContainer">
          <Row className={styles.reasonCards}>
            {getReasons(intl)?.map((item, key) => {
              return (
                <Col
                  span={isWide ? 12 : 24}
                  className={styles.reasonCardGroup}
                  key={key}
                >
                  <div className={styles.reasonCard}>
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

        <div className={styles.cases}>
          <Row className="maxContainer">
            <Col span={isWide ? 6 : 24} className={styles.caseGroup}>
              <div className={styles.groupTitle}>
                {intl.formatMessage({ id: 'home.case.title' })}
              </div>

              <div className={styles.groupDesc}>
                {isWide ? (
                  <>
                    <div>{intl.formatMessage({ id: 'home.case.desc0' })}</div>
                    <div>{intl.formatMessage({ id: 'home.case.desc1' })}</div>
                  </>
                ) : (
                  <>
                    {intl.formatMessage({ id: 'home.case.desc0' })}
                    {intl.formatMessage({ id: 'home.case.desc1' })}
                  </>
                )}
              </div>
            </Col>
            <Col span={isWide ? 18 : 24}>
              <Row style={{ margin: '-12px' }}>
                {getCases(intl)?.map((item, key) => (
                  <Col
                    span={isWide ? 8 : 12}
                    className={styles.cardWrapper}
                    key={key}
                  >
                    <div className={styles.card}>
                      <img src={item.iconUrl} alt="icon" />
                      <div className={styles.title}>{item.title}</div>
                      {lang === 'zh-CN' && isWide ? (
                        <>
                          <div className={styles.desc}>{item.desc0}</div>
                          <div className={styles.desc}> {item.desc1}</div>
                        </>
                      ) : (
                        <div
                          className={styles.desc}
                        >{`${item.desc0}${item.desc1}`}</div>
                      )}
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>

        <SubTitle title={intl.formatMessage({ id: 'home.users' })} />
        {!isWide && (
          <a className={styles.textLink} href="/case">
            {intl.formatMessage({ id: 'home.moreDemo' })}
            <ArrowRightOutlined />
          </a>
        )}
        <div className="maxContainer">
          <Row className={styles.users} gutter={20}>
            <Col span={isWide ? 6 : 12}>
              <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*yZnbTbOz1RAAAAAAAAAAAAAADgOBAQ/original" />
            </Col>
            <Col span={isWide ? 6 : 12}>
              <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*6qfKQo719XQAAAAAAAAAAAAADgOBAQ/original" />
            </Col>
            <Col span={isWide ? 6 : 12}>
              <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*7szLS7kQW-QAAAAAAAAAAAAADgOBAQ/original" />
            </Col>
            <Col span={isWide ? 6 : 12}>
              <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*LsymQLEes6wAAAAAAAAAAAAADgOBAQ/original" />
            </Col>
            {isWide && (
              <a className={styles.textLink} href="/case">
                {intl.formatMessage({ id: 'home.moreDemo' })}
                <ArrowRightOutlined />
              </a>
            )}
          </Row>
        </div>

        <div className={styles.versionsWrapper}>
          <SubTitle title={intl.formatMessage({ id: 'home.chooseVersion' })} />
          <Row className={styles.versions}>
            <Col
              span={isWide ? 12 : 24}
              className={styles.version}
              style={{ paddingRight: isWide ? '12px' : '0' }}
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
              style={{ paddingLeft: isWide ? '12px' : '0' }}
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
                {isWide
                  ? `TuGraph ${intl.formatMessage({ id: 'home.version0' })}`
                  : intl.formatMessage({ id: 'home.version0' })}
              </Col>
              <Col span={5} className={cx(styles.title, 'boldText')}>
                {isWide
                  ? `TuGraph ${intl.formatMessage({ id: 'home.version1' })}`
                  : intl.formatMessage({ id: 'home.version1' })}
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
          width={isWide ? 800 : '100%'}
          footer={null}
        >
          <div className={styles.videoBtn} onClick={() => setShowVideo(false)}>
            X
          </div>

          <JoLPlayer
            option={{
              videoSrc:
                'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
              height: 450,
              width: isWide ? 800 : '100%',
            }}
          />
        </Modal>
      </div>
    </>
  );
  return (
    <>
      <LayoutTemplate
        bannerInfo={{
          bgIconUrl:
            'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*SeWxTJnZ4_8AAAAAAAAAAAAADgOBAQ/original',
          slogan: intl.formatMessage({ id: 'home.banner.slogan' }),
          description: intl.formatMessage({ id: 'home.banner.description' }),
          footer: bannerButton,
        }}
        content={content}
      />
      {isWide && <AnnouncementBanner />}
    </>
  );
}
