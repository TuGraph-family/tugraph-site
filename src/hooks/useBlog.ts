import { detail, list, categorylist } from '@/services/BlogServices';
import { message } from 'antd';
import { useRequest } from 'umi';
import { useImmer } from 'use-immer';

interface IState {
  total: number;
  list: API.BlogListVO[];
  detail: API.BlogDetailVO;
  categorylist: { value: string; label: string }[];
}

export const useBlog = () => {
  const [state, setState] = useImmer<IState>({
    total: 0,
    list: [],
    detail: {},
    categorylist: [],
  });

  const { run: getBlogList } = useRequest(list, { manual: true });
  const { run: getBlogDetail } = useRequest(detail, { manual: true });
  const { run: getCategorylist } = useRequest(categorylist, { manual: true });

  const getList = async (params: API.BlogListRequest) => {
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

  const getCategory = async () => {
    try {
      const res = await getCategorylist();
      if (res?.success) {
        setState((draft) => {
          draft.categorylist = (res?.data || [])?.map((item) => {
            return {
              value: item,
              label: item,
            };
          });
        });
      } else {
        message.error(res?.message);
        setState((draft) => {
          draft.categorylist = [];
        });
      }
    } catch (error) {
      console.log('getCategory' + error);
    }
  };

  return {
    getList,
    getDetail,
    getCategory,
    ...state,
  };
};
