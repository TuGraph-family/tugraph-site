import { HOST } from '@/constant';
import { request } from 'umi';

/** 合集列表
@return 
 POST /api/dictory/list */
export async function list(
  params: {
    // query
    type?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_List_DictoryVO__>(HOST + '/api/dictory/list', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
