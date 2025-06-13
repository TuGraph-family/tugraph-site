import { request } from 'umi';

export async function video(options?: { [key: string]: any }) {
  return request<API.Result_Long_>(
    'https://api.bilibili.com/x/web-interface/view?bvid=BV1rqj9zyEW2',
    {
      method: 'GET',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        Referer: `https://www.bilibili.com/video/BV1rqj9zyEW2`,
        Origin: 'https://www.bilibili.com',
        Accept: 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
      },
      ...(options || {}),
    },
  );
}
