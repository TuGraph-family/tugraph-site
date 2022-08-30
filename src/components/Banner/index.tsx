import React from 'react';
import { history } from 'umi';
import { Anchor, Row, Col } from 'antd';
import { Space, Button } from 'antd';
import { Header } from '../Header';
import { useMedia } from 'react-use';
import cx from 'classnames';

import styles from './index.less';

const { Link } = Anchor;

export interface BannerButtonProps {
  text: string;
  url: string;
}

export interface BannerInfoProps {
  slogan: string;
  bgIconUrl: string;
  subTitle?: string;
  activeKey?: string;
  buttons?: BannerButtonProps[];
  notice?: string;
}

export const Banner = ({
  slogan,
  bgIconUrl,
  subTitle,
  buttons = [],
  activeKey = '',
  notice = '',
}: BannerInfoProps) => {
  const isWide = useMedia('(min-width: 767.99px)', true);
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url('https://gw.alipayobjects.com/zos/bmw-prod/7cab75ff-4f5f-4fe5-ae73-65ee3856ff97.svg')`,
      }}
    >
      <Header activeKey={activeKey} />
      <div className={styles.containerWrapper}>
        {isWide ? (
          <Row>
            <Col span={14}>
              <div className={styles.slogan}>{slogan}</div>
              {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
              {notice && <div className={styles.notice}>{notice}</div>}
              {buttons?.length > 0 && (
                <Space className={styles.btnGroup} size={30}>
                  {buttons?.[0] && (
                    <Anchor affix={false} className={styles.primaryBtn}>
                      <Link href={buttons[0].url} title={buttons[0].text} />
                    </Anchor>
                  )}
                  {buttons?.[1] && (
                    <Button
                      type="primary"
                      block
                      className="grayBtn"
                      onClick={() => {
                        history.push(buttons[1].url);
                      }}
                    >
                      {buttons[1].text}
                    </Button>
                  )}
                </Space>
              )}
            </Col>
            <Col span={10}>
              <img
                className={isWide ? styles.pcIcon : styles.mobileIcon}
                src={bgIconUrl}
              />
            </Col>
          </Row>
        ) : (
          <>
            <div className={styles.slogan}>{slogan}</div>
            {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
            {notice && <div className={styles.notice}>{notice}</div>}
            <img
              className={isWide ? styles.pcIcon : styles.mobileIcon}
              src={bgIconUrl}
            />
            {isWide ? (
              <Space className={styles.btnGroup} size={12}>
                {buttons?.[0] && (
                  <Anchor affix={false} className={styles.primaryBtn}>
                    <Link href={buttons[0].url} title={buttons[0].text} />
                  </Anchor>
                )}
                {buttons?.[1] && (
                  <Button
                    type="primary"
                    block
                    className="grayBtn"
                    onClick={() => {
                      history.push(buttons[1].url);
                    }}
                  >
                    {buttons[1].text}
                  </Button>
                )}
              </Space>
            ) : (
              <div className={styles.btnGroup} style={{ width: '100%' }}>
                {buttons?.[0] && (
                  <Anchor
                    style={{ width: '100%' }}
                    affix={false}
                    className={styles.primaryBtn}
                  >
                    <Link href={buttons[0].url} title={buttons[0].text} />
                  </Anchor>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
