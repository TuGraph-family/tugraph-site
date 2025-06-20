import { HOST } from '@/constant';
import { request } from 'umi';

/** delete 删除
@param 
@return 
 DELETE /api/collection/delete */
export async function deleteUsingDELETE(
  params: {
    // query
    id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_Void_>(HOST + '/api/collection/delete', {
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
 POST /api/collection/upInsert */
export async function insert(
  body?: API.UpInsertCollectionRequest,
  options?: { [key: string]: any },
) {
  return request<API.Result_Long_>(HOST + '/api/collection/upInsert', {
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
 POST /api/collection/list */
export async function list(
  body?: API.CollectionListRequest,
  options?: { [key: string]: any },
) {
  return request<API.Result_PageVO_CollectionListVO__>(
    HOST + '/api/collection/list',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
