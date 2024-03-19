/* eslint-disable no-cond-assign */
import { MATCH_LOCAL_SEARCH_REG } from '@/constant';

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
