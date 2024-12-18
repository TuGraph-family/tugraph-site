import { NewLayout } from '@/components/NewLayout';
import AppScene from '@/pages/new-pages/Home/components/AppScene';
import Banner from '@/pages/new-pages/Home/components/Banner';
import UserBox from '@/pages/new-pages/Home/components/UserBox';
import Version from '@/pages/new-pages/Home/components/Version';
import WhyChoose from '@/pages/new-pages/Home/components/WhyChoose';
import { useIntl } from 'umi';
import styles from './index.less';
import { useBlog } from '@/hooks/useBlog';
import { useEffect } from 'react';
import { tracertBPos } from '@/util';
const Home = () => {
  const intl = useIntl();
  const { getList, list } = useBlog();

  useEffect(() => {
    getList({
      current: 1,
      size: 3,
      state: 'PUBLISHED',
      sortMap: {
        publish_time: false,
      },
    });
    tracertBPos('b106229');
  }, []);

  return (
    <NewLayout
      content={
        <>
          <div className={styles.homeBg}>
            <div className={styles.centerBg} />
          </div>
          <Banner intl={intl} blogList={list} />
          <WhyChoose intl={intl} />
          <AppScene intl={intl} />
          <Version intl={intl} />
          <UserBox intl={intl} />
        </>
      }
    />
  );
};

export default Home;
