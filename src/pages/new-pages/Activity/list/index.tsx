import { NewLayout } from '@/components/NewLayout';
import ActivityCard from '@/pages/new-pages/Activity/list/components/ActivityCard';
import Banner from '@/pages/new-pages/Activity/list/components/Banner';
import FilterCard from '@/pages/new-pages/Activity/list/components/FilterCard';
import styles from './index.less';
import { Pagination } from 'antd';
const ActivityList = () => {
  const dataList = new Array(10).fill(1);

  return (
    <NewLayout
      content={
        <>
          <Banner />
          <FilterCard />
          <div className={styles.activityList}>
            {dataList.map(() => (
              <ActivityCard />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: 40,
            }}
          >
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </>
      }
    />
  );
};

export default ActivityList;
