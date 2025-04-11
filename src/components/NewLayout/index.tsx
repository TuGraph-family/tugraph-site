import React, { useEffect, useMemo } from 'react';
import { setLocale, useLocation } from 'umi';
import { NewHeader } from '../NewHeader';
import styles from './index.less';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL, EN_SITE, HOST_EN, HOST_ZH, ZH_SITE } from '@/constant';
import { NewFooter } from '@/components/NewFooter';
import AdBox from '@/components/AdBox';
import { useAdvert } from '@/hooks/useAdvert';

export interface LayoutProps {
  content: JSX.Element;
  isFooter?: boolean;
  currentUrl?: { pathname: string; hash: string };
  headerBgStyles?: Record<string, any>;
  mainStyles?: Record<string, any>;
}

export const NewLayout: React.FC<LayoutProps> = ({
  isFooter = true,
  content,
  currentUrl,
  headerBgStyles,
  mainStyles,
}) => {
  const location = useLocation();
  const { search, pathname } = location;

  const { getLastOnline, lastAdvertise } = useAdvert();

  useEffect(() => {
    getLastOnline();
  }, []);

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

  const bgColor = useMemo(() => {
    if (pathname?.split('/')[1] === 'blog') {
      return '#fff';
    }
    switch (pathname) {
      case '/download':
      case '/':
        return '#fff';
      case '/activity/list':
        return '#F7F8FA';
      default:
        return '#f1f3f6';
    }
  }, [pathname]);

  return (
    <div>
      <AdBox lastAdvertise={lastAdvertise} />
      <div>
        <NewHeader currentUrl={currentUrl} isAd={!!lastAdvertise?.id} />
        <div
          className={styles.mainWrapper}
          style={{ background: bgColor, ...mainStyles }}
        >
          <div className={styles.content}>
            <div
              className={styles.headerBg}
              style={{
                ...headerBgStyles,
                top: lastAdvertise?.id ? 50 : 0,
              }}
            />
            {content}
          </div>
        </div>
        {isFooter ? <NewFooter /> : null}
      </div>
    </div>
  );
};
