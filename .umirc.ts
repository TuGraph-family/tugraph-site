import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'TuGraph 高性能图数据库',
  favicon:
    'https://gw.alipayobjects.com/zos/bmw-prod/6290edfc-e134-4074-a550-079eeba9926d.svg',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/product', component: '@/pages/product' },
    { path: '/demo', component: '@/pages/demo' },
    { path: '/doc', component: '@/pages/doc' },
    { path: '/blog', component: '@/pages/blog' },
    { path: '/download', component: '@/pages/download' },
    { path: '/form', component: '@/pages/form' },
  ],
  theme: {
    'primary-color': '#1677FF',
  },
  chainWebpack(memo, { env, webpack }) {
    memo.module
      .rule('plaintext')
      .test(/\.(txt|text)$/)
      .use('raw-loader')
      .loader(require.resolve('raw-loader'));
    memo.module
      .rule('markdown')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
      .loader('frontmatter-markdown-loader');
  },
  ssr: false,
  exportStatic: {},
  fastRefresh: {},
  request: {
    dataField: '',
  },
  locale: {
    antd: true,
    baseNavigator: true,
    baseSeparator: '-',
    default: 'zh-CN',
    title: true,
    useLocalStorage: true,
  },
});
