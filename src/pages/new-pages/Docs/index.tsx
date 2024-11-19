/**
 * file: Tugraph Docs
 * author: Allen
 */

import React, { useRef, useEffect, useState } from 'react';
import { setLocale, useLocation } from 'umi';
import { NewLayout } from '@/components/NewLayout';
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
      window.history.pushState({}, '', '/docs/zh/4.5.0/guide');
      return '/zh/4.5.0/guide';
    }

    return removePrefixFromPath(location.pathname + location.hash, '/docs');
  });

  console.log('iframeUrl:', iframeUrl);

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
    <NewLayout
      content={
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
      }
    />
  );
};

export default Docs;
