import { NewLayout } from '@/components/NewLayout';
import Architecture from '@/pages/new-pages/Product/components/Architecture';
import Banner from '@/pages/new-pages/Product/components/Banner';
import Introduction from '@/pages/new-pages/Product/components/Introduction';
import QuickStart from '@/pages/new-pages/Product/components/QuicklyStart';
import UserDemo from '@/pages/new-pages/Product/components/UserDemo';
import { useLocation } from 'umi';

const Product = () => {
  const { pathname } = useLocation();

  const type = pathname.split('/')[2];

  return (
    <NewLayout
      content={
        <>
          <Banner type={type} />

          <Introduction type={type} />
          {type !== 'clound' ? <Architecture /> : null}
          {type === 'db' ? (
            <>
              <UserDemo />
              <QuickStart />
            </>
          ) : null}
        </>
      }
    />
  );
};

export default Product;
