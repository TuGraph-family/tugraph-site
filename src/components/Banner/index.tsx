import React, { ReactNode } from 'react';
import { Row, Col } from 'antd';
import { useMedia } from 'react-use';

import styles from './index.less';
import { useLocation } from 'umi';

export interface BannerInfoProps {
  slogan: string;
  bgIconUrl?: string;
  footer?: ReactNode;
  description?: string;
}

export const Banner = ({
  slogan,
  bgIconUrl,
  footer,
  description = '',
}: BannerInfoProps) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/' ? true : false;

  const isWide = useMedia('(min-width: 767.99px)', true);
  let background = `url('https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*399oSYCBVagAAAAAAAAAAAAADgOBAQ/original')`;
  if (isHome) {
    background = `url('https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*if0TTLtCrA0AAAAAAAAAAAAADgOBAQ/original')`;
  }
  return (
    <div
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
            <Col span={isHome ? 10 : 14}>
              <div className={styles.slogan}>{slogan}</div>
              {description && (
                <div className={styles.description}>{description}</div>
              )}
              {footer}
            </Col>
            {bgIconUrl && (
              <Col span={isHome ? 14 : 10}>
                <img
                  className={isWide ? styles.pcIcon : styles.mobileIcon}
                  style={{
                    margin: isWide ? '40px 0 0 0' : '-24px 80px',
                  }}
                  src={bgIconUrl}
                />
              </Col>
            )}
          </Row>
        ) : (
          <>
            <div className={styles.slogan}>{slogan}</div>
            {description && (
              <div className={styles.description}>{description}</div>
            )}
            <img
              className={isWide ? styles.pcIcon : styles.mobileIcon}
              src={bgIconUrl}
            />
            {footer}
          </>
        )}
      </div>
    </div>
  );
};
