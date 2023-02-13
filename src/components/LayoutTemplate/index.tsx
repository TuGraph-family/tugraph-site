import React, { useEffect, useState } from 'react';
import { setLocale, useLocation } from 'umi';
import { Header } from '../Header';
import { Banner, BannerInfoProps } from '@/components/Banner';
import { Footer } from '@/components/Footer';

import styles from './index.less';

export interface LayoutProps {
  content: JSX.Element;
  bannerInfo?: BannerInfoProps;
}

export const LayoutTemplate = ({ bannerInfo, content }: LayoutProps) => {
  const location = useLocation();
  const [isStick, setIsStick] = useState<boolean>(false);
  const handleScroll = (e: Event) => {
    if (document.documentElement.scrollTop > 0) {
      setIsStick(true);
    } else {
      setIsStick(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // DEBUG: 为了方便调试，暂时注释掉
  // const { lang } = location.query;

  // useEffect(() => {
  //   if (!lang) {
  //     return;
  //   }
  //   if (lang === 'zh' || lang === 'zh_CN' || lang === 'zh-CN') {
  //     setLocale('zh-CN');
  //   } else if (lang === 'en' || lang === 'en_US' || lang === 'en-US') {
  //     setLocale('en-US');
  //   }
  // }, [lang]);
  return (
    <div>
      <Header isStick={isStick} />
      {bannerInfo && <Banner {...bannerInfo} />}
      <div className={styles.mainWrapper}>
        <div className={styles.content}>{content}</div>
      </div>
      <Footer />
    </div>
  );
};
