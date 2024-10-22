/**
 * file: Tugraph Docs
 * author: Allen
 */

import React, { useRef, useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { setLocale, useLocation } from 'umi';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';

const Docs: React.FC = () => {
  const location = useLocation();
  const { search } = location;

  const removePrefixFromPath = (path: string, prefix: string) => {
    if (path.startsWith(prefix)) {
      return path.slice(prefix.length);
    }
    return path;
  };

  const [iframeUrl, setIframeUrl] = useState<string>(() => {
    if (['/docs', '/docs/'].includes(location.pathname)) {
      window.history.pushState({}, '', '/docs/zh/guide');
      return '/zh/guide';
    }

    return removePrefixFromPath(location.pathname + location.hash, '/docs');
  });

  const [solidIframeUrl] = useState<string>(() => {
    return `https://zhongyunwan.github.io/tugraph-db${iframeUrl}`;
  });

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    /** switch language */
    setLocale(getSearch(search)?.lang || DEFAULT_LOCAL, false);

    const handleReceiveMessage = (event: MessageEvent) => {
      if (event?.data?.path) {
        const formatPath = removePrefixFromPath(
          event?.data?.path,
          '/tugraph-db',
        );
        setIframeUrl(formatPath);
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
      <Header
        isStick={true}
        currentUrl={{
          pathname: '/docs' + iframeUrl.split('#')[0],
          hash: iframeUrl.split('#')[1] ? '#' + iframeUrl.split('#')[1] : '',
        }}
      />
      <iframe
        ref={iframeRef}
        src={solidIframeUrl}
        title="Docusaurus Docs"
        style={{
          width: '100%',
          height: 'calc(100vh - 56px)',
          border: 'none',
          padding: '0 120px',
        }}
      />
    </div>
  );
};

export default Docs;
