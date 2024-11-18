import { NewLayout } from '@/components/NewLayout';
import Agenda from '@/pages/new-pages/Activity/info/ components/Agenda';
import Banner from '@/pages/new-pages/Activity/info/ components/Banner';
import DataReview from '@/pages/new-pages/Activity/info/ components/DataReview';
import Host from '@/pages/new-pages/Activity/info/ components/Host';
import Introduction from '@/pages/new-pages/Activity/info/ components/Introduction';

const ActivityInfo = () => {
  return (
    <NewLayout
      content={
        <>
          <Banner />
          <DataReview />
          <Introduction />
          <Agenda />
          <Host />
        </>
      }
    />
  );
};

export default ActivityInfo;
