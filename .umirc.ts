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
    { path: '/download', component: '@/pages/download' },
    { path: '/form', component: '@/pages/form' },
  ],
  ssr: {},
  exportStatic: {},
  fastRefresh: {},
  locale: {
    antd: true,
    baseNavigator: true,
    baseSeparator: '-',
    default: 'zh-CN',
    title: true,
    useLocalStorage: true,
  },
});
