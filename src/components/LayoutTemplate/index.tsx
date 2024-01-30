import React, { useEffect, useState, useCallback } from 'react';
import { setLocale, useLocation, isBrowser } from 'umi';
import { Header } from '../Header';
import GithubButton from '../githubButton';
import styles from './index.less';
import { Banner, BannerInfoProps } from '@/components/Banner';
import { Footer } from '@/components/Footer';

export interface LayoutProps {
  content: JSX.Element;
  bannerInfo?: BannerInfoProps;
}

export const LayoutTemplate = ({ bannerInfo, content }: LayoutProps) => {
  const location = useLocation();
  const [isStick, setIsStick] = useState<boolean>(false);
  const handleScroll = useCallback(() => {
    if (!isBrowser()) {
      return;
    }
    if (document.documentElement.scrollTop > 0) {
      setIsStick(true);
    } else {
      setIsStick(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
