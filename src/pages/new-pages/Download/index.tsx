import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/new-pages/Download/components/Banner';
import styles from './index.less';
import DownLoadList from '@/pages/new-pages/Download/components/DownloadList';

const DownLoad = () => {
  return (
    <NewLayout
      content={
        <>
          <Banner />
          <DownLoadList />
        </>
      }
    />
  );
};

export default DownLoad;
