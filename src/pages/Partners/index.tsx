import DynamicCard from '@/components/DynamicCard';
import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/Partners/components/Banner';
import PartnersSupport from '@/pages/Partners/components/PartnersSupport';
import { getPartner } from '@/pages/Partners/constants/data';
import { tracertBPos } from '@/util';
import { useEffect } from 'react';
import { useIntl } from 'umi';

const Partners = () => {
  useEffect(() => {
    tracertBPos('b106232');
  }, []);
  const intl = useIntl();
  return (
    <>
      <Banner intl={intl} />
      <DynamicCard list={getPartner(intl)} />
      <PartnersSupport intl={intl} />
    </>
  );
};

export default Partners;
