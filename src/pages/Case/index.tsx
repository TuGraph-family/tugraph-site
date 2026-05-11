import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/Case/components/Banner';
import CaseList from '@/pages/Case/components/CaseList';
import AppScene from '@/pages/Home/components/AppScene';
import { tracertBPos } from '@/util';
import { useEffect } from 'react';
import { useIntl } from 'umi';

const Case = () => {
  /** 案例埋点 */
  useEffect(() => {
    tracertBPos('b106231');
  }, []);
  const intl = useIntl();
  return (
    <>
      <Banner intl={intl} />
      <AppScene intl={intl} />
      <CaseList intl={intl} />
    </>
  );
};

export default Case;
