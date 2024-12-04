import React, { useEffect, useState, useCallback } from 'react';
import { setLocale, useLocation, isBrowser } from 'umi';
import { NewHeader } from '../NewHeader';
import styles from './index.less';
import { Banner, BannerInfoProps } from '@/components/Banner';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL, EN_SITE, HOST_EN, HOST_ZH, ZH_SITE } from '@/constant';
import { NewFooter } from '@/components/NewFooter';
import AdBox from '@/components/AdBox';

export interface LayoutProps {
  content: JSX.Element;
  isFooter?: boolean;
  currentUrl?: { pathname: string; hash: string };
  headerBgStyles?: Record<string, any>;
}

export const NewLayout = ({
  isFooter = true,
  content,
  currentUrl,
  headerBgStyles,
}: LayoutProps) => {
  const location = useLocation();
  const { search } = location;
  useEffect(() => {
    setLocale(getSearch(search)?.lang || DEFAULT_LOCAL, false);
    const href = window?.location?.href;
    if (href.includes(ZH_SITE)) {
      window.location.href = HOST_ZH;
    }
    if (href.includes(EN_SITE)) {
      window.location.href = HOST_EN;
    }
  }, [search]);
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
      {/* <AdBox /> */}
      <NewHeader currentUrl={currentUrl} />
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          <div className={styles.headerBg} style={headerBgStyles} />
          {content}
        </div>
      </div>
      {isFooter ? <NewFooter /> : null}
    </div>
  );
};
