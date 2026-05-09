import AppScene from '@/pages/Home/components/AppScene';
import Version from '@/pages/Home/components/Version';
import { useIntl } from 'umi';
import { useEffect } from 'react';
import { tracertBPos } from '@/util';
import { useAdvert } from '@/hooks/useAdvert';
import DynamicCard from '@/components/DynamicCard';
import { getReason } from '@/pages/Home/constants/data';
import ProductBanner from '@/components/ProductBanner';
import Tag from '@/components/Tag';
import MainButton from '@/components/MainButton';
import { DownOutlined } from '@ant-design/icons';

const Home = () => {
  const intl = useIntl();

  // 广告位
  const { getLastOnline, lastAdvertise } = useAdvert();

  useEffect(() => {
    getLastOnline();
  }, []);

  useEffect(() => {
    tracertBPos('b106229');
  }, []);

  return (
    <>
      <ProductBanner
        tag={<Tag text={intl.formatMessage({ id: 'header.tag' })} />}
        btnContent={
          <>
            <MainButton
              type="real"
              btnText={intl.formatMessage({ id: 'home.btn.desc' })}
              isAnimation={true}
              affterIcon={<DownOutlined />}
            />
            <MainButton
              type="illusory"
              btnText={intl.formatMessage({ id: 'home.btn.tryOut' })}
            />
          </>
        }
        title={intl.formatMessage({ id: 'home.banner.slogan' })}
        description={intl.formatMessage({ id: 'home.banner.description' })}
      />
      <DynamicCard
        title={intl.formatMessage({ id: 'home.choseReason' })}
        list={getReason(intl)}
        viewBox="0 0 32 32"
      />
      <AppScene intl={intl} />
      <Version intl={intl} />
    </>
  );
};

export default Home;
