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

export const Banner = ({
  slogan,
  bgIconUrl,
  subTitle,
  buttons = [],
  activeKey = '',
  notice = '',
}: {
  slogan: string;
  bgIconUrl: string;
  subTitle?: string;
  activeKey?: string;
  buttons?: BannerButtonProps[];
  notice?: string;
}) => {
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
        <Row>
          <Col span={isWide ? 14 : 24}>
            <div className={styles.slogan}>{slogan}</div>
            {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
            {notice && <div className={styles.notice}>{notice}</div>}
            {buttons?.length > 0 && (
              <Space className={styles.btnGroup} size={isWide ? 30 : 0}>
                {buttons?.[0] && (
                  <Anchor
                    affix={false}
                    className={cx(
                      styles.primaryBtn,
                      isWide || buttons?.length < 2
                        ? null
                        : styles.primaryBtnMobile,
                    )}
                  >
                    <Link href={buttons[0].url} title={buttons[0].text} />
                  </Anchor>
                )}
                {buttons?.[1] && (
                  <Button
                    type="primary"
                    block
                    ghost={!isWide}
                    className={isWide ? 'grayBtn' : styles.darkBtnMobile}
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
          <Col span={isWide ? 10 : 24}>
            <img
              className={isWide ? styles.pcIcon : styles.mobileIcon}
              src={bgIconUrl}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
