/**
 * file: Tugraph Docs
 * author: Allen
 */

import React, { useRef, useEffect, useState } from 'react';
import { setLocale, useLocation } from 'umi';
import { NewLayout } from '@/components/NewLayout';
import { getSearch } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';
import { NewHeader } from '@/components/NewHeader';
import styles from './index.less';

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
    const docsType = location.pathname.split('/')[2];
    if (
      ['/docs/tugraph-db', '/docs/tugraph-analytics'].includes(
        location.pathname,
      )
    ) {
      const pathname =
        docsType === 'tugraph-db' ? '/zh/4.5.0/guide' : '/zh/introduction';

      window.history.pushState({}, '', `/docs/${docsType}/${pathname}`);
      return pathname;
    }

    return removePrefixFromPath(
      location.pathname + location.hash,
      `/docs/${docsType}`,
    );
  });

  const [solidIframeUrl] = useState<string>(() => {
    const docsType = location.pathname.split('/')[2];
    const origin =
      docsType === 'tugraph-db'
        ? 'https://zhongyunwan.github.io'
        : 'https://liukaiming-alipay.github.io';

    return `${origin}/${docsType}${iframeUrl}`;
  });

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    /** switch language */
    setLocale(getSearch(search)?.lang || DEFAULT_LOCAL, false);

    const handleReceiveMessage = (event: MessageEvent) => {
      if (event?.data?.path) {
        const formatPath = removePrefixFromPath(event?.data?.path, '');
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
