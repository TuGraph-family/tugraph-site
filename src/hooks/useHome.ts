import { register } from '@/services/services';
import { useRequest } from 'umi';

interface IState {
  list: API.ActivityListVO[];
  detail: API.ActivityDetailVO;
  total: number;
  lastDetial: API.ActivityDetailVO;
}

export const useHome = () => {
  const { run: runRegister } = useRequest(register, { manual: true });

  return {
    runRegister,
  };
};
