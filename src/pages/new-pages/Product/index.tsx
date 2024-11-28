import { NewLayout } from '@/components/NewLayout';
import Architecture from '@/pages/new-pages/Product/components/Architecture';
import Banner from '@/pages/new-pages/Product/components/Banner';
import Introduction from '@/pages/new-pages/Product/components/Introduction';
import QuickStart from '@/pages/new-pages/Product/components/QuicklyStart';
import UserDemo from '@/pages/new-pages/Product/components/UserDemo';
import { useIntl, useLocation } from 'umi';

const Product = () => {
  const { pathname } = useLocation();
  const intl = useIntl();

  const type = pathname.split('/')[2];

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
