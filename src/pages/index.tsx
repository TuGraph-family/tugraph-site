import {
  AliyunOutlined,
  ArrowRightOutlined,
  CheckOutlined,
  DownOutlined,
  GithubOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  Button,
  Carousel,
  Col,
  Collapse,
  Dropdown,
  Menu,
  Modal,
  Row,
  Space,
  Tag,
  Tooltip,
} from 'antd';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useMedia } from 'react-use';
import { isBrowser, useIntl, useLocation } from 'umi';

import AnnouncementBanner from '@/components/AnnouncementBanner';
import { ApplyForm } from '@/components/ApplyForm';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import JoLPlayer from '@/components/Player';
import { SubTitle } from '@/components/SubTitle';
import { getCases } from '@/data/cases';
import { getTugraphFun } from '@/data/get_tugraph_functions';
import { getReasons } from '@/data/reasons';
import { getSearch, tracertBPos } from '@/util';
import stylesZh from './index.less';
import stylesEn from './index_en.less';

export default function IndexPage() {
  const intl = useIntl();
  const location = useLocation();
  const { search } = location;
  const lang = getSearch(search)?.lang || 'zh-CN';

  const styles = lang === 'zh-CN' ? stylesZh : stylesEn;
  const isWide = useMedia('(min-width: 767.99px)', true);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [rotate, setRotate] = useState(0);
  const isCn = lang === 'zh-CN';
  const SWIPE_PADDING = isBrowser()
    ? (48 * document.body.clientWidth) / 750
    : 24;

  /** 首页埋点 */
  useEffect(() => {
    console.log('12345');
    tracertBPos('b106229');
  }, []);

  const bannerButton = (
    <div className={styles.bannerButtons}>
      <Space>
        <Dropdown
          overlay={
            <Menu className={styles.dropMenu}>
              <Menu.Item
                onClick={() => {
                  window.open('https://github.com/TuGraph-family');
                }}
              >
                <GithubOutlined />
                GitHub
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  window.open(
                    'https://aliyun-computenest.github.io/quickstart-tugraph/',
                  );
                }}
              >
                <AliyunOutlined />
                {intl.formatMessage({ id: 'home.btn.desc1' })}
              </Menu.Item>
            </Menu>
          }
        >
          <div
            className={styles.github}
            onMouseMove={() => {
              setRotate(180);
            }}
            onMouseLeave={() => {
              setRotate(0);
            }}
          >
            <span className={styles.githubText}>
              {intl.formatMessage({ id: 'home.btn.desc' })}
            </span>
            <DownOutlined className={styles.btnIcon} rotate={rotate} />
          </div>
        </Dropdown>
        <Button
          className={styles.tryout}
          onClick={() => setShowApplyForm(true)}
        >
          {intl.formatMessage({ id: 'home.btn.tryOut' })}
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
          <a
            className={styles.learnMore}
            href={`/blog?id=1000`}
            target="_blank"
            rel="noreferrer"
          >
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
            rel="noreferrer"
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
            rel="noreferrer"
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
          <a className={styles.learnMore} href="/blog?id=1000" target="_blank">
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
            rel="noreferrer"
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
            rel="noreferrer"
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
              <Row style={{ margin: isWide ? '-12px' : '0' }}>
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
              <img
                src={
                  isCn
                    ? 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*XsI4QYzHC7wAAAAAAAAAAAAADgOBAQ/original'
                    : 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*tZzVTLe-dogAAAAAAAAAAAAADgOBAQ/original'
                }
                style={{
                  ...(isCn
                    ? {
                        height: 44,
                        marginTop: 7,
                      }
                    : {
                        transform: 'scale(.5)',
                        marginTop: -4,
                      }),
                }}
              />
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
                  {`${isWide ? 'TuGraph ' : ''}${intl.formatMessage({
                    id: 'home.version0',
                  })}`}
                </div>
                {lang === 'zh-CN' && (
                  <div
                    style={{ fontWeight: 500 }}
                    className={styles.versionDesc}
                  >
                    {intl.formatMessage({ id: 'home.version0.desc' })}
                  </div>
                )}

                <div className={styles.desc}>
                  {intl.formatMessage({ id: 'home.version.desc0' })}
                </div>
                <Dropdown
                  overlay={
                    <Menu className={styles.downMenu}>
                      <Menu.Item
                        onClick={() => {
                          window.open('https://github.com/TuGraph-family');
                        }}
                      >
                        <GithubOutlined />
                        GitHub
                      </Menu.Item>
                      <Menu.Item
                        onClick={() => {
                          window.open(
                            'https://aliyun-computenest.github.io/quickstart-tugraph/',
                          );
                        }}
                      >
                        <AliyunOutlined />
                        {intl.formatMessage({ id: 'home.btn.desc1' })}
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <div
                    className="lightBtn"
                    onMouseMove={() => {
                      setRotate(180);
                    }}
                    onMouseLeave={() => {
                      setRotate(0);
                    }}
                  >
                    <span className={styles.freeDown}>
                      {intl.formatMessage({ id: 'home.version.startUse' })}
                    </span>
                    <DownOutlined className={styles.btnIcon} rotate={rotate} />
                  </div>
                </Dropdown>
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
                  {`${isWide ? 'TuGraph ' : ''} ${intl.formatMessage({
                    id: 'home.version1',
                  })}`}
                </div>
                {lang === 'zh-CN' && (
                  <div
                    style={{ fontWeight: 500 }}
                    className={styles.versionDesc}
                  >
                    {intl.formatMessage({ id: 'home.version1.desc' })}
                  </div>
                )}
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
                span={isWide ? (isCn ? 14 : 12) : 12}
                className={cx(styles.title, styles.textAlignLeft, 'boldText')}
              >
                {intl.formatMessage({ id: 'home.function' })}
              </Col>
              <Col
                span={isWide ? (isCn ? 4 : 5) : 6}
                className={cx(styles.title, 'boldText')}
              >
                {isWide ? (
                  <>
                    {intl.formatMessage({
                      id: 'home.version.title1',
                    })}
                    <div>{intl.formatMessage({ id: 'home.tugrpah.db' })}</div>
                    <p>
                      {intl.formatMessage({
                        id: 'home.highAvailability',
                      })}
                    </p>
                  </>
                ) : (
                  <>
                    {intl.formatMessage({ id: 'home.version0' })}
                    <div className={styles.verDesc}>
                      {intl.formatMessage({ id: 'home.tugrpah.db' })}
                    </div>
                  </>
                )}
              </Col>
              <Col
                span={isWide ? 4 : 6}
                className={cx(styles.title, 'boldText')}
              >
                {isWide ? (
                  <>
                    {intl.formatMessage({
                      id: 'home.version.title2',
                    })}
                    <div>{intl.formatMessage({ id: 'home.distributed' })}</div>
                    <p>
                      {intl.formatMessage({
                        id: 'home.three.lines.consistent',
                      })}
                    </p>
                  </>
                ) : (
                  <>
                    {intl.formatMessage({ id: 'home.version1' })}
                    <div className={styles.verDesc}>
                      {intl.formatMessage({ id: 'home.distributed' })}
                    </div>
                  </>
                )}
              </Col>
            </Row>
            <Collapse
              ghost
              defaultActiveKey={[0, 1, 2]}
              expandIcon={({ isActive }) => {
                return (
                  <div className={styles.collapseIcon}>
                    {isActive ? <MinusOutlined /> : <PlusOutlined />}
                  </div>
                );
              }}
            >
              {getTugraphFun(intl)?.map((item, index) => {
                return (
                  <Collapse.Panel header={item.title} key={index}>
                    <Row className={styles.funDesc}>
                      <Col span={isWide ? 14 : 24}>{item.desc}</Col>
                    </Row>
                    {item.list.map((i, key) => {
                      return (
                        <Row key={key} className={styles.baseRow}>
                          <Col
                            span={isWide && !isCn ? 12 : 13}
                            className={cx(styles.textAlignLeft, styles.text)}
                          >
                            {i.featMore ? (
                              <Tooltip
                                title={i.featTooltip}
                                color="#FFFFFF"
                                placement="topRight"
                              >
                                {i.feat}
                                <sup>{i.featSup}</sup>
                                {i.featMore}
                              </Tooltip>
                            ) : (
                              <>
                                {i.feat}
                                <sup>{i.featSup}</sup>
                                {i.featMore}
                              </>
                            )}
                          </Col>
                          <Col span={5} className={styles.text}>
                            {i.community ? <CheckOutlined /> : '-'}
                          </Col>
                          <Col
                            span={isWide ? 4 : 1}
                            className={cx(styles.text, styles.textRight)}
                          >
                            {i.pro ? <CheckOutlined /> : '-'}
                            {isWide && (
                              <span className={styles.featDesc}>{i.desc}</span>
                            )}
                          </Col>
                        </Row>
                      );
                    })}
                  </Collapse.Panel>
                );
              })}
            </Collapse>
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
          sloganClassName: isWide ? styles.slogan : styles.mobileSlogan,
        }}
        content={content}
      />
      {isWide && <AnnouncementBanner />}
    </>
  );
}
