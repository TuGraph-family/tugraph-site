import { lastOnline } from '@/services/AdvertisementController';
import { message } from 'antd';
import { useRequest } from 'umi';
import { useImmer } from 'use-immer';

interface IState {
  lastAdvertise?: API.AdvertisementDetailVO;
}

export const useAdvert = () => {
  const [state, setState] = useImmer<IState>({
    lastAdvertise: {},
  });

  const { run: runLastOnline, loading } = useRequest(lastOnline, {
    manual: true,
  });

  const getLastOnline = async () => {
    const res = await runLastOnline();
    if (res?.success) {
      setState((draft) => {
        draft.lastAdvertise = res.data;
      });
    }
  };

  return { ...state, getLastOnline, loading };
};
