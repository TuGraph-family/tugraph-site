/** 中英文 banner 标题的 marginTop */
export const ChOrEnStyle = (
  isChinese: boolean,
  isHome: boolean,
  type: 'description' | 'slogan',
) => {
  if (type === 'slogan') return isHome ? '80px' : isChinese ? '160px' : '120px';
  if (type === 'description')
    return isHome ? '16px' : isChinese ? '8px' : '16px';
};
