/**
 * file: Tugraph Docs
 * author: Allen
 */

import React, { useRef, useEffect, useState } from 'react';
import { setLocale, useLocation } from 'umi';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';
import { NewHeader } from '@/components/NewHeader';
import styles from './index.less';

const Docs: React.FC = () => {
  const location = useLocation();
  const { search } = location;

  const removePrefixFromPath = (path: string, prefix?: string) => {
    if (prefix && path.startsWith(prefix)) {
      return path.slice(prefix.length);
    }
    return path;
  };

  const [iframeUrl] = useState<string>(() => {
    if (['/docs', '/docs/'].includes(location.pathname)) {
      window.history.pushState({}, '', '/docs/tugraph-db/zh/4.5.0/guide');
      return '/tugraph-db/zh/4.5.0/guide';
    }

    return removePrefixFromPath(location.pathname + location.hash, '/docs');
  });

  console.log('iframeUrl:', iframeUrl);

  const [solidIframeUrl] = useState<string>(() => {
    return iframeUrl.includes('/tugraph-analytics')
      ? `https://liukaiming-alipay.github.io${iframeUrl}`
      : `https://zhongyunwan.github.io${iframeUrl}`;
  });

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
    <div>
      <NewHeader
        currentUrl={{
          pathname: '/docs' + iframeUrl.split('#')[0],
          hash: iframeUrl.split('#')[1] ? '#' + iframeUrl.split('#')[1] : '',
        }}
      />
      <div className={styles.container}>
        <iframe
          ref={iframeRef}
          src={solidIframeUrl}
          title="Docusaurus Docs"
          style={{
            width: '100%',
            height: 'calc(100vh - 66px)',
            marginTop: '66px',
            border: 'none',
          }}
        />
      </div>
    </div>
  );
};

export default Docs;
