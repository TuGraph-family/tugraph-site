import { useRequest } from 'umi';
import {
  queryCategory,
  queryDocDetail,
  queryVersions,
} from '../services/DocsENController';

export const useGetENDocsInfo = () => {
  const { run: getCategoryList } = useRequest(queryCategory, { manual: true });
  const { run: getVersions } = useRequest(queryVersions, { manual: true });
  const { run: getDocDetail } = useRequest(queryDocDetail, { manual: true });
  return { getCategoryList, getVersions, getDocDetail };
};
