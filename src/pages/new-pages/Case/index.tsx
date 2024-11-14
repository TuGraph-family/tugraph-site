import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/new-pages/Case/components/Banner';
import CaseList from '@/pages/new-pages/Case/components/CaseList';

const Case = () => {
  return (
    <NewLayout
      content={
        <>
          <Banner />
          <CaseList />
        </>
      }
    />
  );
};

export default Case;
