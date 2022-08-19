import { request } from 'umi';
import { DOC_HOST } from '@/constants';

/* 获取版本列表 */
export async function queryVersions(params: { tenant: number }) {
  return request(`${DOC_HOST}/api/docs/gitlab/product/list`, {
    method: 'GET',
    params: {
      productCode: 'tutorials-doc-cn',
      ...params,
    },
  });
}

/* 获取目录列表 */
export async function queryCategory(params: { version: string }) {
  return request(
    `${DOC_HOST}/api/docs/gitlab/tutorials-doc-cn/${params.version}/category/1`,
    {
      method: 'GET',
    },
  );
}

/* 获取文档内容 */
export async function queryDocDetail(params: { id: string }) {
  return request(`${DOC_HOST}/api/docs/gitlab/detail/${params.id}/1`, {
    method: 'GET',
  });
}
