import { request } from 'umi';
import { DOC_HOST } from '@/constant';

const PRODUCT_CODE = 'tugraph-doc-cn';

const CATEGORY_ID = 0;

/* 获取版本列表 */
export async function queryVersions(params: { tenant: number }) {
  return request(`${DOC_HOST}/api/docs/gitlab/product/list`, {
    method: 'GET',
    params: {
      productCode: PRODUCT_CODE,
      ...params,
    },
  });
}

/* 获取目录列表 */
export async function queryCategory(params: { version: string }) {
  return request(
    `${DOC_HOST}/api/docs/gitlab/${PRODUCT_CODE}/${params.version}/category/${CATEGORY_ID}`,
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
