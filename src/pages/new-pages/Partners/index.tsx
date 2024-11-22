import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/new-pages/Partners/components/Banner';
import PartnersCase from '@/pages/new-pages/Partners/components/PartnersCase';
import PartnersSupport from '@/pages/new-pages/Partners/components/PartnersSupport';
import { useIntl } from 'umi';

const Partners = () => {
  const intl = useIntl();
  return (
    <NewLayout
      content={
        <>
          <Banner intl={intl} />

          <PartnersSupport intl={intl} />

          <PartnersCase intl={intl} />
        </>
      }
    />
  );
};

export default Partners;
