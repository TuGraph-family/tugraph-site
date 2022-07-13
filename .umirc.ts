import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
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
