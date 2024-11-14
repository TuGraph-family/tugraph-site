import { NewLayout } from '@/components/NewLayout';
import AppScene from '@/pages/new-pages/Home/components/AppScene';
import FeatureSection from '@/pages/new-pages/Home/components/Banner';
import UserBox from '@/pages/new-pages/Home/components/UserBox';
import Version from '@/pages/new-pages/Home/components/Version';
import WhyChoose from '@/pages/new-pages/Home/components/WhyChoose';

const Home = () => {
  const content = <div style={{ height: 1000, background: '#ccc' }}>home</div>;

  return (
    <NewLayout
      // bannerInfo={{
      //     bgIconUrl:
      //         'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*SeWxTJnZ4_8AAAAAAAAAAAAADgOBAQ/original',
      //     slogan: '哈哈哈',
      //     //   description: intl.formatMessage({ id: 'home.banner.description' }),
      //     //   footer: bannerButton,
      //     //   sloganClassName: isWide ? styles.slogan : styles.mobileSlogan,
      // }}
      content={
        <>
          <FeatureSection />
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
