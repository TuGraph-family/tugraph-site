import { NewLayout } from '@/components/NewLayout';
import AppScene from '@/pages/new-pages/Home/components/AppScene';
import Banner from '@/pages/new-pages/Home/components/Banner';
import UserBox from '@/pages/new-pages/Home/components/UserBox';
import Version from '@/pages/new-pages/Home/components/Version';
import WhyChoose from '@/pages/new-pages/Home/components/WhyChoose';
import { useIntl } from 'umi';

const Home = () => {
  const intl = useIntl();
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/3JdrQYNnZU4AAAAAAAAAAAAADh8WAQFr/fmt.webp) no-repeat ';

  return (
    <NewLayout
      headerBgStyles={{
        background: background,
        backgroundSize: '100% 100%',
        height: 619,
      }}
      content={
        <>
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
