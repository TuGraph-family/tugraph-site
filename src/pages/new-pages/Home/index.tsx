import { NewLayout } from '@/components/NewLayout';
import AppScene from '@/pages/new-pages/Home/components/AppScene';
import Banner from '@/pages/new-pages/Home/components/Banner';
import UserBox from '@/pages/new-pages/Home/components/UserBox';
import Version from '@/pages/new-pages/Home/components/Version';
import WhyChoose from '@/pages/new-pages/Home/components/WhyChoose';

const Home = () => {
  return (
    <NewLayout
      content={
        <>
          <Banner />
          <WhyChoose />
          <AppScene />
          <Version />
          <UserBox />
        </>
      }
    />
  );
};

export default Home;
