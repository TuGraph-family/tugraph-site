import { HOST } from '@/constant';
import { request } from 'umi';

/** 登记
@param request
@return 
 POST /api/ask/register */
export async function register(
  body?: API.AskRegisterRequest,
  options?: { [key: string]: any },
) {
  return request<API.Result_Long_>(HOST + '/api/ask/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
