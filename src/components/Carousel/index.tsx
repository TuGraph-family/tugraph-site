import React from 'react';
import { Button, Carousel as AntdCarousel } from 'antd';
import { useIntl } from 'umi';

import styles from './index.less';

export const Carousel = () => {
  const intl = useIntl();

  return (
    <div className={styles.sliders}>
      <AntdCarousel autoplay dots={{ className: 'dots' }}>
        <div className={styles.slider} key="sliders0">
          <div className={styles.desc}>
            <h3 className={styles.title}>
              {intl.formatMessage({ id: 'home.sliders0' })}
            </h3>
            <Button type="primary" block className="darkBtn">
              <a href="" target="_blank" rel="noopener noreferrer">
                {intl.formatMessage({ id: 'home.knowMore' })}
              </a>
            </Button>
          </div>
          <div className={styles.demoImg}>
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/f9b45673-5cb0-47ab-8496-1bc90426e19e.svg" />
          </div>
        </div>
        <div className={styles.slider} key="sliders1">
          <div className={styles.desc}>
            <h3 className={styles.title}>
              {intl.formatMessage({ id: 'home.sliders1' })}
            </h3>
            <Button type="primary" block className="darkBtn">
              <a href="" target="_blank" rel="noopener noreferrer">
                {intl.formatMessage({ id: 'home.knowMore' })}
              </a>
            </Button>
          </div>
          <div className={styles.demoImg}>
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/2ca300c6-47c6-4cda-8d93-8c422dade111.svg" />
          </div>
        </div>
        <div className={styles.slider} key="sliders2">
          <div className={styles.desc}>
            <h3 className={styles.title}>
              {intl.formatMessage({ id: 'home.sliders2' })}
            </h3>
            <Button type="primary" block className="darkBtn">
              <a href="" target="_blank" rel="noopener noreferrer">
                {intl.formatMessage({ id: 'home.knowMore' })}
              </a>
            </Button>
          </div>
          <div className={styles.demoImg}>
            <img src="https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*8rRjQLVLio0AAAAAAAAAAAAAARQnAQ" />
          </div>
        </div>
        <div className={styles.slider} key="sliders3">
          <div className={styles.desc}>
            <h3 className={styles.title}>
              {intl.formatMessage({ id: 'home.sliders3' })}
              <span>(2020)</span>
            </h3>

            <Button type="primary" block className="darkBtn">
              <a href="" target="_blank" rel="noopener noreferrer">
                {intl.formatMessage({ id: 'home.knowMore' })}
              </a>
            </Button>
          </div>
          <div className={styles.demoImg}>
            <img src="https://gw.alipayobjects.com/zos/bmw-prod/fcacd35f-c67e-4d75-a3ef-3217fa527379.svg" />
          </div>
        </div>
      </AntdCarousel>
    </div>
  );
};
