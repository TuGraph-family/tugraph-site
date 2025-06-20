import { HOST } from '@/constant';
import { request } from 'umi';

/** delete 删除
@param 
@return 
 DELETE /api/video/delete */
export async function deleteUsingDELETE(
  params: {
    // query
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_Void_>(HOST + '/api/video/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增
@param request
@return 
 POST /api/video/upInsert */
export async function insert(
  body?: API.UpInsertVideoRequest,
  options?: { [key: string]: any },
) {
  return request<API.Result_Long_>(HOST + '/api/video/upInsert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 合集列表
@return 
 POST /api/video/list */
export async function list(
  body?: API.VideoListRequest,
  options?: { [key: string]: any },
) {
  return request<API.Result_PageVO_VideoListVO__>(HOST + '/api/video/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    retry: 1,
    data: body,
    ...(options || {}),
  });
}

/** 视频上下线
@param 
@return 
 POST /api/video/online */
export async function online(
  body?: API.VideoOnlineRequest,
  options?: { [key: string]: any },
) {
  return request<API.Result_Void_>(HOST + '/api/video/online', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
