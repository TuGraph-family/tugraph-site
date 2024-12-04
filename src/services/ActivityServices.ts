import { request } from 'umi';

/** 详情
@param id
@return
 GET /api/activity/detail/${param0} */
export async function detail(
  params: {
    // path
    id?: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<API.Result_ActivityDetailVO_>(
    `/api/activity/detail/${param0}`,
    {
      method: 'GET',
      params: { ...params },
      ...(options || {}),
    },
  );
}

/** 活动列表
  @param request
  @return
   POST /api/activity/list */
export async function list(
  body?: API.ActivityListRequest,
  options?: { [key: string]: any },
) {
  return request<API.Result_PageVO_ActivityListVO__>('/api/activity/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
