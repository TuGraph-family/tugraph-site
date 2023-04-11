import React, { ReactNode } from 'react';
import { Row, Col } from 'antd';
import { useMedia } from 'react-use';
import cx from 'classnames';

import styles from './index.less';
import { getLocale, useLocation } from 'umi';
import { ChOrEnStyle } from '@/util';

export interface BannerInfoProps {
  slogan: string;
  bgIconUrl?: string;
  footer?: ReactNode;
  description?: string;
  sloganClassName?: string;
}

export const Banner = ({
  slogan,
  bgIconUrl,
  footer,
  description = '',
  sloganClassName = '',
}: BannerInfoProps) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/' ? true : false;
  const lang = getLocale();

  const isWide = useMedia('(min-width: 767.99px)', true);
  let background = isWide
    ? `url('https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*399oSYCBVagAAAAAAAAAAAAADgOBAQ/original')`
    : `url('https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*LGBDR6rA9hIAAAAAAAAAAAAADgOBAQ/original')`;
  if (isHome && isWide) {
    background = `url('https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*if0TTLtCrA0AAAAAAAAAAAAADgOBAQ/original')`;
  }

  return (
    <div
      id="banner"
      className={styles.banner}
      style={{
        backgroundImage: background,
        height: '600px',
        backgroundColor: 'rgba(22,80,255,0.05)',
      }}
    >
      <div className={styles.containerWrapper}>
        {isWide ? (
          <Row>
            <Col span={isHome ? 10 : 12}>
              <div
                style={{
                  marginTop: ChOrEnStyle(lang === 'zh-CN', isHome, 'slogan'),
                }}
                className={cx(styles.slogan, sloganClassName)}
              >
                {slogan}
              </div>
              {description && (
                <div
                  className={styles.description}
                  style={{
                    marginTop: ChOrEnStyle(
                      lang === 'zh-CN',
                      isHome,
                      'description',
                    ),
                  }}
                >
                  {description}
                </div>
              )}
              {footer}
            </Col>

            {bgIconUrl && (
              <Col span={isHome ? 14 : 12}>
                <img
                  className={isWide ? styles.pcIcon : styles.mobileIcon}
                  style={{
                    margin: isWide ? '34px 0 0 0' : '-24px 80px',
                    height: isHome ? '460px' : '375px',
                  }}
                  src={bgIconUrl}
                />
              </Col>
            )}
          </Row>
        ) : (
          <>
            <div className={cx(styles.slogan, sloganClassName)}>{slogan}</div>
            {description && (
              <div className={styles.description}>{description}</div>
            )}
            {footer}
            <img
              id="tugraphMobileIcon"
              style={
                isHome && !isWide
                  ? {
                      margin: '7.7vw -16vw',
                      width: '117.2vw',
                    }
                  : {}
              }
              className={isWide ? styles.pcIcon : styles.mobileIcon}
              src={bgIconUrl}
            />
          </>
        )}
      </div>
    </div>
  );
};
