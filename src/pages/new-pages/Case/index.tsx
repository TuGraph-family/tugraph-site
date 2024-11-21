import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/new-pages/Case/components/Banner';
import CaseList from '@/pages/new-pages/Case/components/CaseList';
import { useIntl } from 'umi';

const Case = () => {
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
