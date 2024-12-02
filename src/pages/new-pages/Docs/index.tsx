/**
 * file: Tugraph Docs
 * author: Allen
 */

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { setLocale, useLocation } from 'umi';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';
import { NewHeader } from '@/components/NewHeader';
import styles from './index.less';
import { NewLayout } from '@/components/NewLayout';

const Docs: React.FC = () => {
  const location = useLocation();
  const { search } = location;

  useEffect(() => {
    if (location.pathname.split('/')[2] !== iframeUrl?.split('/')[1]) {
      setIframeUrl(location.pathname.split('/docs')[1]);
    }
  }, [location]);

  const removePrefixFromPath = (path: string, prefix?: string) => {
    if (prefix && path.startsWith(prefix)) {
      return path.slice(prefix.length);
    }
    return path;
  };

  const [iframeUrl, setIframeUrl] = useState<string>(() => {
    return removePrefixFromPath(location.pathname + location.hash, '/docs');
  });

  const solidIframeUrl = useMemo(() => {
    return iframeUrl.includes('/tugraph-analytics')
      ? `https://liukaiming-alipay.github.io${iframeUrl}`
      : `https://zhongyunwan.github.io${iframeUrl}`;
  }, [iframeUrl]);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    /** switch language */
    setLocale(getSearch(search)?.lang || DEFAULT_LOCAL, false);

    const handleReceiveMessage = (event: MessageEvent) => {
      if (event?.data?.path) {
        const formatPath = removePrefixFromPath(event?.data?.path);
        window.history.pushState({}, '', '/docs' + formatPath);
      }
    };

    window.addEventListener('message', handleReceiveMessage);

    return () => {
      window.removeEventListener('message', handleReceiveMessage);
    };
  }, []);

  return (
    <NewLayout
      currentUrl={{
        pathname: '/docs' + iframeUrl.split('#')[0],
        hash: iframeUrl.split('#')[1] ? '#' + iframeUrl.split('#')[1] : '',
      }}
      isFooter={false}
      content={
        <div className={styles.container}>
          <iframe
            ref={iframeRef}
            src={solidIframeUrl}
            title="Docusaurus Docs"
            style={{
              width: '100%',
              height: 'calc(100vh - 84px)',
              marginTop: '18px',
              border: 'none',
            }}
          />
        </div>
      }
    />
  );
};

export default Docs;
