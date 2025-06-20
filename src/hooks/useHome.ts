import { register } from '@/services/services';
import { useRequest } from 'umi';

export const useHome = () => {
  const { run: runRegister } = useRequest(register, { manual: true });

  return {
    runRegister,
  };
};
