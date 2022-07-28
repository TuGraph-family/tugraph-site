import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/product', component: '@/pages/product' },
    { path: '/demo', component: '@/pages/demo' },
    { path: '/doc', component: '@/pages/doc' },
    { path: '/download', component: '@/pages/download' },
    { path: '/form', component: '@/pages/form' },
  ],
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
