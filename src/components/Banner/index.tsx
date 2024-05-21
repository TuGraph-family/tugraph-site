import { Col, Row } from 'antd';
import cx from 'classnames';
import { ReactNode } from 'react';
import { useMedia } from 'react-use';
import { useLocation } from 'umi';
import styles from './index.less';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';

import { ChOrEnStyle } from '@/util';

export interface BannerInfoProps {
  slogan: string | ReactNode;
  bgIconUrl?: string;
  footer?: ReactNode;
  description?: string;
  sloganClassName?: string;
  mobileImgClassName?: string;
  bannerClassName?: string;
}

export const Banner = ({
  slogan,
  bgIconUrl,
  footer,
  description = '',
  sloganClassName = '',
  mobileImgClassName = '',
  bannerClassName = '',
}: BannerInfoProps) => {
  const { pathname, search } = useLocation();
  const isHome = pathname === '/';
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;

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
      className={cx(styles.banner, bannerClassName)}
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
              className={
                isWide
                  ? styles.pcIcon
                  : cx(styles.mobileIcon, mobileImgClassName)
              }
              src={bgIconUrl}
            />
          </>
        )}
      </div>
    </div>
  );
};
