import { NewLayout } from '@/components/NewLayout';
import Architecture from '@/pages/new-pages/Product/components/Architecture';
import Banner from '@/pages/new-pages/Product/components/Banner';
import Introduction from '@/pages/new-pages/Product/components/Introduction';
import QuickStart from '@/pages/new-pages/Product/components/QuicklyStart';
import UserDemo from '@/pages/new-pages/Product/components/UserDemo';

const Product = () => {
  return (
    <NewLayout
      content={
        <>
          <Banner />
          <Introduction />
          <Architecture />
          <UserDemo />
          <QuickStart />
        </>
      }
    />
  );
};

export default Product;
