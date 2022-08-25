import React from 'react';
import { history } from 'umi';
import { Anchor } from 'antd';
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
  bgUrl,
  subTitle,
  buttons = [],
  activeKey = '',
  notice = '',
  mobileIcon = '',
}: {
  slogan: string;
  bgUrl: string;
  subTitle?: string;
  activeKey?: string;
  buttons?: BannerButtonProps[];
  notice?: string;
  mobileIcon?: string;
}) => {
  const isWide = useMedia('(min-width: 767.99px)', true);
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${bgUrl})` }}>
      <Header activeKey={activeKey} />
      <div className={styles.containerWrapper}>
        {notice && <div className={styles.notice}>{notice}</div>}
        <div className={styles.slogan}>{slogan}</div>
        {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
        {mobileIcon && !isWide && (
          <img className={styles.mobileIcon} src={mobileIcon} />
        )}

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
      </div>
    </div>
  );
};
