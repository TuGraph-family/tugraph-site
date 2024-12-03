import { NewLayout } from '@/components/NewLayout';
import ActivityCard from '@/pages/new-pages/Activity/list/components/ActivityCard';
import Banner from '@/pages/new-pages/Activity/list/components/Banner';
import FilterCard from '@/pages/new-pages/Activity/list/components/FilterCard';
import styles from './index.less';
import { Pagination } from 'antd';
import { useActivity } from '@/hooks/useActivity';
import { useImmer } from 'use-immer';
import { useEffect } from 'react';
import SiteEmpty from '@/components/SiteEmpty';
const ActivityList = () => {
  const [state, setState] = useImmer<any>({
    activityWayEnum: 'all',
    activityStateEnum: 'all',
    activityResourceFlag: 'all',
    current: 1,
    pageSize: 12,
  });

  const {
    activityWayEnum,
    activityStateEnum,
    activityResourceFlag,
    current,
    pageSize,
  } = state;

  const updateFilter = (key: string, val: string) => {
    setState((draft) => {
      draft[key] = val;
    });
  };

  const { getList, list, total } = useActivity();

  const onChangePage = (page: number, pageSize: number) => {
    setState((draft) => {
      draft.current = page;
      draft.pageSize = pageSize;
    });
  };

  useEffect(() => {
    getList({
      current,
      size: pageSize,
      activityStatusEnum: 'PUBLISHED',
      activityStateEnum:
        activityStateEnum === 'all' ? undefined : activityStateEnum,
      activityResourceFlag:
        activityResourceFlag === 'all' ? undefined : activityResourceFlag,
      activityWayEnum: activityWayEnum === 'all' ? undefined : activityWayEnum,
    });
  }, [
    current,
    pageSize,
    activityStateEnum,
    activityWayEnum,
    activityResourceFlag,
  ]);

  return (
    <NewLayout
      content={
        <>
          <Banner />
          <FilterCard
            activityWayEnum={activityWayEnum}
            activityStateEnum={activityStateEnum}
            activityResourceFlag={activityResourceFlag}
            updateFilter={updateFilter}
          />
          {list?.length ? (
            <div className={styles.activityList}>
              {list?.map((item) => (
                <ActivityCard key={item?.id} detail={item} />
              ))}
            </div>
          ) : (
            <SiteEmpty text={'暂无活动'} />
          )}

          <div className={styles.pagination}>
            {total > 10 ? (
              <Pagination
                current={current}
                pageSize={pageSize}
                total={total}
                showSizeChanger={false}
                onChange={onChangePage}
              />
            ) : null}
          </div>
        </>
      }
    />
  );
};

export default ActivityList;
