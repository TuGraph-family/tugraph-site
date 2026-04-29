import { IRouteComponentProps, setLocale } from 'umi';
import styles from './index.less';
import UnicornBackground from '@/components/UnicornBackground';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL, EN_SITE, HOST_EN, HOST_ZH, ZH_SITE } from '@/constant';
import { useAdvert } from '@/hooks/useAdvert';
import AdBox from '@/components/AdBox';

export default function Layout({ children, location }: IRouteComponentProps) {
  const { search } = location;

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

  return (
    <div className={styles.main}>
      <UnicornBackground />
      <AdBox lastAdvertise={lastAdvertise} />
      <div className={styles.mainWrapper}>
        <Navbar />
        <div className={styles.content}>{children}</div>

        <Footer />
      </div>
    </div>
  );
}
