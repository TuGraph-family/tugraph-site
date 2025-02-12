import { detail, list } from '@/services/ActivityServices';
import { message } from 'antd';
import { useRequest } from 'umi';
import { useImmer } from 'use-immer';

interface IState {
  list: API.ActivityListVO[];
  detail: API.ActivityDetailVO;
  total: number;
  lastDetial: API.ActivityListVO;
}

export const useActivity = () => {
  const [state, setState] = useImmer<IState>({
    list: [],
    detail: {},
    total: 0,
    lastDetial: {},
  });

  const { run: getBlogList } = useRequest(list, { manual: true });
  const { run: getBlogDetail } = useRequest(detail, { manual: true });

  const getList = async (params: API.ActivityListRequest) => {
    try {
      const res = await getBlogList({
        ...params,
      });
      if (res?.success) {
        setState((draft) => {
          draft.list = res?.data?.records || [];
          draft.total = res?.data?.total || 0;
        });
      } else {
        message.error(res?.message);
        setState((draft) => {
          draft.list = [];
          draft.total = 0;
        });
      }
    } catch (error) {
      console.log('getBlogList' + error);
    }
  };

  const getDetail = async (params: { id?: number }) => {
    try {
      const res = await getBlogDetail({
        ...params,
      });
      if (res?.success) {
        setState((draft) => {
          draft.detail = res?.data || {};
        });
      } else {
        message.error(res?.message);
        setState((draft) => {
          draft.detail = {};
        });
      }
    } catch (error) {
      console.log('getDetail' + error);
    }
  };

  const getLastActicity = async (state?: API.ActivityStateEnum) => {
    try {
      const res = await getBlogList({
        current: 1,
        size: 1,
        activityStatusEnum: 'PUBLISHED',
        activityStateEnum: state,
      });
      if (res?.success) {
        if (res?.data?.total) {
          setState((draft) => {
            draft.lastDetial = res?.data?.records?.[0] || {};
          });
        } else {
          if (state === 'REGISTRATION_DURING') {
            getLastActicity('PROGRESS');
          }
          if (state === 'PROGRESS') {
            getLastActicity('NOT_STARTED');
          }
          if (state === 'NOT_STARTED') {
            getLastActicity('OVER');
          }
        }
      }
    } catch (error) {
      console.log('getLastActicity' + error);
    }
  };

  return {
    ...state,
    getDetail,
    getList,
    getLastActicity,
  };
};
