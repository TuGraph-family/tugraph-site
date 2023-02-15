import { request } from 'umi';
import { DOC_HOST_EN } from '@/constant';

const PRODUCT_CODE = 'oceanbase-tugraph-en';

const TENANT = 11;

/* 获取版本列表 */
export async function queryVersions() {
  return request(
    `${DOC_HOST_EN}/wanApi/forum/docGitlab/v1/queryProductDocFileVersionList`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productCode: PRODUCT_CODE,
        tenant: TENANT,
      }),
    },
  );
}

/* 获取目录列表 */
export async function queryCategory(params: { version: string }) {
  return request(`${DOC_HOST_EN}/wanApi/forum/docGitlab/v1/getDocStructure`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      productCode: PRODUCT_CODE,
      tenant: TENANT,
      ...params,
    }),
  });
}

/* 获取文档内容 */
export async function queryDocDetail(params: { id: string }) {
  return request(`${DOC_HOST_EN}/wanApi/forum/docGitlab/v1/docDetails`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...params }),
  });
}
