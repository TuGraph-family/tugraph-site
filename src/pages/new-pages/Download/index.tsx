import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/new-pages/Download/components/Banner';

import DownLoadList from '@/pages/new-pages/Download/components/DownloadList';
import { tracertBPos } from '@/util';
import { useEffect } from 'react';
import { useIntl } from 'umi';

const DownLoad = () => {
  useEffect(() => tracertBPos('b106235'), []);
  const intl = useIntl();
  return (
    <NewLayout
      headerBgStyles={{
        backgroundImage:
          'linear-gradient(180deg, #e1ecff 0%, #e3ecff 32%, #fff 100%)',
        height: 334,
      }}
      mainStyles={{ background: '#fff' }}
      content={
        <>
          <Banner intl={intl} />
          <DownLoadList intl={intl} />
        </>
      }
    />
  );
};

export default DownLoad;
