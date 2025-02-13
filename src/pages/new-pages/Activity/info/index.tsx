import { NewLayout } from '@/components/NewLayout';
import { useActivity } from '@/hooks/useActivity';
import Agenda from '@/pages/new-pages/Activity/info/ components/Agenda';
import Banner from '@/pages/new-pages/Activity/info/ components/Banner';
import DataReview from '@/pages/new-pages/Activity/info/ components/DataReview';
import Host from '@/pages/new-pages/Activity/info/ components/Host';
import Introduction from '@/pages/new-pages/Activity/info/ components/Introduction';
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
    <NewLayout
      content={
        <>
          <Banner detail={detail} />
          <div
            style={{
              background: '#fff',
              margin: '0 -120px',
              overflow: 'hidden',
            }}
          >
            {detail?.frontResourceShow ? (
              <DataReview list={detail?.activityResources} />
            ) : null}
            <Introduction markdown={detail?.introduction} isOld={isOld} />
            {detail?.frontProcessShow ? (
              <Agenda list={detail?.processes} />
            ) : null}
            {detail?.frontGuestShow ? <Host list={detail?.guests} /> : null}
          </div>
        </>
      }
    />
  );
};

export default ActivityInfo;
