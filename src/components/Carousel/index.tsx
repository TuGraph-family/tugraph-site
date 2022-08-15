import React from 'react';
import { Button, Carousel as AntdCarousel } from 'antd';
import { useMedia } from 'react-use';
import { useIntl } from 'umi';

import styles from './index.less';

export const Carousel = () => {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const sliders = [
    {
      title: intl.formatMessage({ id: 'home.sliders0' }),
      url: 'https://ldbcouncil.org/post/announcing-the-ldbc-financial-benchmark-task-force/',
      imgPc:
        'https://gw.alipayobjects.com/zos/bmw-prod/f9b45673-5cb0-47ab-8496-1bc90426e19e.svg',
      imgMobile:
        'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*5c09T6RzbIwAAAAAAAAAAAAAARQnAQ',
    },
    {
      title: intl.formatMessage({ id: 'home.sliders1' }),
      url: 'https://gw.alipayobjects.com/os/bmw-prod/a9693083-7fb6-430f-a9d4-232e3298c038.pdf',
      imgPc:
        'https://gw.alipayobjects.com/zos/bmw-prod/2ca300c6-47c6-4cda-8d93-8c422dade111.svg',
      imgMobile:
        'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*4jmiQaMBtxQAAAAAAAAAAAAAARQnAQ',
    },
    {
      title: intl.formatMessage({ id: 'home.sliders2' }),
      url: '',
      imgPc:
        'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*8rRjQLVLio0AAAAAAAAAAAAAARQnAQ',
      imgMobile:
        'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*NFQWTJTyvN0AAAAAAAAAAAAAARQnAQ',
    },
    {
      title: intl.formatMessage({ id: 'home.sliders3' }),
      url: '',
      imgPc:
        'https://gw.alipayobjects.com/zos/bmw-prod/fcacd35f-c67e-4d75-a3ef-3217fa527379.svg',
      imgMobile:
        'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*tPZtQIgfSC8AAAAAAAAAAAAAARQnAQ',
    },
  ];

  return (
    <div className={styles.sliders}>
      <AntdCarousel dots={{ className: 'dots' }}>
        {sliders.map((item, key) => (
          <div className={styles.slider} key={key}>
            <div className={styles.demoImg}>
              <img src={isWide ? item.imgPc : item.imgMobile} />
            </div>
            <div className={styles.desc}>
              <h3 className={styles.title}>{item.title}</h3>
              {isWide ? (
                <Button type="primary" block className="darkBtn">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {intl.formatMessage({ id: 'home.knowMore' })}
                  </a>
                </Button>
              ) : (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {intl.formatMessage({ id: 'home.knowMore' })}
                </a>
              )}
            </div>
          </div>
        ))}
      </AntdCarousel>
    </div>
  );
};
