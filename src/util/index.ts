/* eslint-disable no-cond-assign */
import { DEFAULT_LOCAL, MATCH_LOCAL_SEARCH_REG } from '@/constant';

/** 中英文 banner 标题的 marginTop */
export const ChOrEnStyle = (
  isChinese: boolean,
  isHome: boolean,
  type: 'description' | 'slogan',
) => {
  if (type === 'slogan') return isHome ? '80px' : isChinese ? '160px' : '120px';
  if (type === 'description') {
    return isHome ? '16px' : isChinese ? '8px' : '16px';
  }
};

/** 获取search参数  */

export const getSearch = (search: string) => {
  if (!search) return false;
  const result: any = {};
  let match: any = null;
  while ((match = MATCH_LOCAL_SEARCH_REG.exec(search))) {
    result[match[1]] = match[2];
  }
  return result;
};

/** 强约束跳转  */

export const goLinkAt = (path: string) => {
  const { origin, search } = window.location;
  const curSearch = getSearch(search);
  return `${origin}${path}?lang=${curSearch?.lang || DEFAULT_LOCAL}`;
};

export const historyPushLinkAt = (path: string) => {
  const { search } = window.location;
  const curSearch = getSearch(search);
  return `${path}?lang=${curSearch?.lang || DEFAULT_LOCAL}`;
};

/** 蚂蚁埋点 - 手动 */
export const tracertBPos = (bPos: string, options?: Record<string, any>) => {
  window?.Tracert.call?.('set', {
    spmBPos: bPos,
    bizType: 'common',
    autoExpo: false,
    autoLogPv: false,
    ifRouterNeedPv: false,
  });
  window.Tracert?.call?.('logPv', options || {});
};

// 锚点特殊字符处理
export const slugify = (text?: string) => {
  if (!text) {
    return '';
  }
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5 -]/g, '') // Remove all non-word chars
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/-+/g, '-'); // Replace multiple - with single -
};
