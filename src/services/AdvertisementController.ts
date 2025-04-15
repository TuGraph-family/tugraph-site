import { HOST } from '@/constant';
import { request } from 'umi';

/** 查询最后一条上线的广告 GET /api/advertisement/lastOnline */
export async function lastOnline(options?: { [key: string]: any }) {
  return request<API.Result_AdvertisementDetailVO_>(
    HOST + '/api/advertisement/lastOnline',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
