import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/new-pages/Partners/components/Banner';
import PartnersCase from '@/pages/new-pages/Partners/components/PartnersCase';
import PartnersSupport from '@/pages/new-pages/Partners/components/PartnersSupport';
import PartnersType from '@/pages/new-pages/Partners/components/PartnersType';

const Partners = () => {
  return (
    <NewLayout
      content={
        <>
          <Banner />

          <PartnersType />

          <PartnersSupport />

          <PartnersCase />
        </>
      }
    />
  );
};

export default Partners;
