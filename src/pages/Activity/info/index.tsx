import { NewLayout } from '@/components/NewLayout';
import { useActivity } from '@/hooks/useActivity';
import Agenda from '@/pages/Activity/info/ components/Agenda';
import Banner from '@/pages/Activity/info/ components/Banner';
import DataReview from '@/pages/Activity/info/ components/DataReview';
import Host from '@/pages/Activity/info/ components/Host';
import Introduction from '@/pages/Activity/info/ components/Introduction';
import { tracertBPos } from '@/util';
import { useEffect } from 'react';
import { useLocation } from 'umi';

const ActivityInfo = () => {
  const location = useLocation();
  const id = Number(location.pathname.split('/')[3]);
  const isOld = location.pathname.split('/')[4] === 'old';
  const { getDetail, detail } = useActivity();

  useEffect(() => {
    getDetail({
      id,
    });
    tracertBPos('b116454');
  }, [id]);

  return (
    <>
      <Banner detail={detail} />
      <div>
        {detail?.frontResourceShow ? (
          <DataReview list={detail?.activityResources} />
        ) : null}
        <Introduction markdown={detail?.introduction} isOld={isOld} />
        {detail?.frontProcessShow ? <Agenda list={detail?.processes} /> : null}
        {detail?.frontGuestShow ? <Host list={detail?.guests} /> : null}
      </div>
    </>
  );
};

export default ActivityInfo;
