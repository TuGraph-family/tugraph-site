import { NewLayout } from '@/components/NewLayout';
import AppScene from '@/pages/new-pages/Home/components/AppScene';
import Banner from '@/pages/new-pages/Home/components/Banner';
import UserBox from '@/pages/new-pages/Home/components/UserBox';
import Version from '@/pages/new-pages/Home/components/Version';
import WhyChoose from '@/pages/new-pages/Home/components/WhyChoose';
import { useIntl } from 'umi';

const Home = () => {
  const intl = useIntl();
  return (
    <NewLayout
      content={
        <>
          <Banner intl={intl} />
          <WhyChoose />
          <AppScene intl={intl} />
          <Version intl={intl} />
          <UserBox />
        </>
      }
    />
  );
};

export default Home;
