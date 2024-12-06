import { NewLayout } from '@/components/NewLayout';
import AppScene from '@/pages/new-pages/Home/components/AppScene';
import Banner from '@/pages/new-pages/Home/components/Banner';
import UserBox from '@/pages/new-pages/Home/components/UserBox';
import Version from '@/pages/new-pages/Home/components/Version';
import WhyChoose from '@/pages/new-pages/Home/components/WhyChoose';
import { BACKGROUND } from '@/pages/new-pages/Home/constants';
import { useIntl } from 'umi';
import styles from './index.less';
const Home = () => {
  const intl = useIntl();

  return (
    <NewLayout
      content={
        <>
          <div className={styles.homeBg}>
            <div className={styles.centerBg} />
          </div>
          <Banner intl={intl} />
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
