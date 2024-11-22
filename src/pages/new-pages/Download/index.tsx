import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/new-pages/Download/components/Banner';

import DownLoadList from '@/pages/new-pages/Download/components/DownloadList';
import { useIntl } from 'umi';

const DownLoad = () => {
  const intl = useIntl();
  return (
    <NewLayout
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
