import { request } from 'umi';
import { DOC_HOST_ZH } from '@/constant';

const PRODUCT_CODE = 'tugraph-doc-cn';

const CATEGORY_ID = 0;
const TENANT = 0;

/* 获取版本列表 */
export async function queryVersions() {
  return request(`${DOC_HOST_ZH}/api/docs/gitlab/product/list`, {
    method: 'GET',
    params: {
      productCode: PRODUCT_CODE,
      tenant: TENANT,
    },
  });
}

/* 获取目录列表 */
export async function queryCategory(params: { version: string }) {
  return request(
    `${DOC_HOST_ZH}/api/docs/gitlab/${PRODUCT_CODE}/${params.version}/category`,
    {
      method: 'GET',
    },
  );
}

/* 获取文档内容 */
export async function queryDocDetail(params: { id: string }) {
  return request(
    `${DOC_HOST_ZH}/api/docs/gitlab/detail/${params.id}/${CATEGORY_ID}`,
    {
      method: 'GET',
    },
  );
}
