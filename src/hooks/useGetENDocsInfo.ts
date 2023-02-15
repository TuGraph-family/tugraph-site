import {
  queryCategory,
  queryVersions,
  queryDocDetail,
} from '../services/DocsENController';
import { useRequest } from 'umi';

export const useGetENDocsInfo = () => {
  const { run: getCategoryList } = useRequest(queryCategory, { manual: true });
  const { run: getVersions } = useRequest(queryVersions, { manual: true });
  const { run: getDocDetail } = useRequest(queryDocDetail, { manual: true });
  return { getCategoryList, getVersions, getDocDetail };
};
