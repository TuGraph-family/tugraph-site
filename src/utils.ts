import { map } from 'lodash';

export const versionListTranslator = (list: []) => {
  return map(list, (item: any) => item.version);
};

export const docDetailTranslator = (data: any) => {
  const { docContent, ...res } = data;
  const newDocContent = docContent.replace(/<h1.*?(?=<\/h1>)/g, '');
  return { docContent: newDocContent, ...res };
};
