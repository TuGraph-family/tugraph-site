import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Banner, BannerInfoProps } from '@/components/Banner';
import { Footer } from '@/components/Footer';

import styles from './index.less';

export interface LayoutProps {
  bannerInfo: BannerInfoProps;
  content: JSX.Element;
}

export const LayoutTemplate = ({ bannerInfo, content }: LayoutProps) => {
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

  return (
    <div>
      <Header isStick={isStick} />
      <Banner {...bannerInfo} />
      <div className={styles.mainWrapper}>
        <div className={styles.content}>{content}</div>
      </div>
      <Footer />
    </div>
  );
};
