import { NewLayout } from '@/components/NewLayout';
import Architecture from '@/pages/new-pages/Product/components/Architecture';
import Banner from '@/pages/new-pages/Product/components/Banner';
import Introduction from '@/pages/new-pages/Product/components/Introduction';
import QuickStart from '@/pages/new-pages/Product/components/QuicklyStart';
import UserDemo from '@/pages/new-pages/Product/components/UserDemo';
import { tracertBPos } from '@/util';
import { useEffect } from 'react';
import { useIntl, useLocation } from 'umi';

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
    <NewLayout
      content={
        <>
          <Banner type={type} intl={intl} />
          <Introduction type={type} intl={intl} />
          {type !== 'clound' ? <Architecture type={type} intl={intl} /> : null}
          {type === 'db' ? (
            <>
              <UserDemo intl={intl} />
              <QuickStart intl={intl} />
            </>
          ) : null}
        </>
      }
    />
  );
};

export default Product;
