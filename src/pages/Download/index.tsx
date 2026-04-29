import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/Download/components/Banner';

import DownLoadList from '@/pages/Download/components/DownloadList';
import { tracertBPos } from '@/util';
import { useEffect } from 'react';
import { useIntl } from 'umi';

const DownLoad = () => {
  useEffect(() => tracertBPos('b106235'), []);
  const intl = useIntl();
  return (
    <>
      <Banner intl={intl} />
      <DownLoadList intl={intl} />
    </>
  );
};

export default DownLoad;
