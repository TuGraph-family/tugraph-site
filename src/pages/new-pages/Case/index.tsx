import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/new-pages/Case/components/Banner';
import CaseList from '@/pages/new-pages/Case/components/CaseList';
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
    <NewLayout
      content={
        <>
          <Banner intl={intl} />
          <CaseList intl={intl} />
        </>
      }
    />
  );
};

export default Case;
