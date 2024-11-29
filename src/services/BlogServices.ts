import { HOST } from '@/constant';
import { request } from 'umi';

/* 获取版本列表 */
/** 博客列表
@param request
@return 
 POST /api/bolg/list */
export async function list(
  body?: API.BlogListRequest,
  options?: { [key: string]: any },
) {
  return request<API.Result_PageVO_BlogListVO__>(HOST + '/api/bolg/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function detail(
  params: {
    // path
    id?: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<API.Result_BlogDetailVO_>(
    HOST + `/api/bolg/detail/${param0}`,
    {
      method: 'GET',
      params: { ...params },
      ...(options || {}),
    },
  );
}

export async function categorylist(options?: { [key: string]: any }) {
  return request<API.Result_List_String__>(HOST + '/api/category/list', {
    method: 'POST',
    ...(options || {}),
  });
}
