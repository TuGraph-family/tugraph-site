import React, { ReactNode } from 'react';
import {  Row, Col } from 'antd';
import { useMedia } from 'react-use';

import styles from './index.less';

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
  const isWide = useMedia('(min-width: 767.99px)', true);
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url('https://mdn.alipayobjects.com/mdn/huamei_qcdryc/afts/img/A*O6LBSacdQS8AAAAAAAAAAAAADgOBAQ')`,
        height: '600px',
      }}
    >
      <div className={styles.containerWrapper}>
        {isWide ? (
          <Row>
            <Col span={12}>
              <div className={styles.slogan}>{slogan}</div>
              {description && <div className={styles.description}>{description}</div>}
              {footer}
            </Col>
            {bgIconUrl && <Col span={12}>
              <img
                className={isWide ? styles.pcIcon : styles.mobileIcon}
                style={{
                  margin:
                    isWide ? '0' : '-24px 80px',
                }}
                src={bgIconUrl}
              />
            </Col>}   
          </Row>
        ) : (
          <>
            <div className={styles.slogan}>{slogan}</div>
            {description && <div className={styles.description}>{description}</div>}
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
