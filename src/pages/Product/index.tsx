import { NewLayout } from '@/components/NewLayout';
import Architecture from '@/pages/Product/components/Architecture';
import Banner from '@/pages/Product/components/Banner';
import Introduction from '@/pages/Product/components/Introduction';
import QuickStart from '@/pages/Product/components/QuicklyStart';
import RowBox from '@/pages/Product/components/RowBox';
import UserDemo from '@/pages/Product/components/UserDemo';
import { IMG_SRC } from '@/pages/Product/constants';
import { tracertBPos } from '@/util';
import { useEffect } from 'react';
import { useIntl, useLocation } from 'umi';
import JoLPlayer from '@/components/Player';

const Product = () => {
  const { pathname } = useLocation();
  const intl = useIntl();

  const type = pathname.split('/')[2];

  useEffect(() => {
    switch (type) {
      case 'analytics':
        tracertBPos('b106246');
        break;
      case 'enterprise':
        tracertBPos('b106248');
        break;
      case 'clound':
        tracertBPos('b116460');
        break;
      default:
        tracertBPos('b106230');
    }
  }, [type]);

  return (
    <>
      <Banner type={type} intl={intl} />
      <Introduction type={type} intl={intl} />
      {type !== 'cloud' ? (
        <RowBox
          title={intl.formatMessage({ id: 'product.architecture' })}
          desc={intl.formatMessage({ id: `product.architecture.${type}` })}
        >
          <img src={IMG_SRC[type]} alt="ecosystem" />
        </RowBox>
      ) : null}
      {type === 'db' ? (
        <>
          <QuickStart intl={intl} />
          <RowBox
            title={intl.formatMessage({ id: 'product.video' })}
            desc={intl.formatMessage({ id: `product.video.desc` })}
          >
            <JoLPlayer
              option={{
                videoSrc:
                  'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
                poster:
                  'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/lkQhTbWUWoAAAAAAgEAAAAgAeh8WAQFr/original',
                height: 311,
                width: 553,
                isShowPicture: false,
                isShowWebFullScreen: false,
              }}
            />
          </RowBox>
        </>
      ) : null}
    </>
  );
};

export default Product;
