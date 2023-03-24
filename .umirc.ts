import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'site.title',
  favicon:
    'https://gw.alipayobjects.com/zos/bmw-prod/6290edfc-e134-4074-a550-079eeba9926d.svg',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/product', component: '@/pages/product', title: 'product.title' },
    { path: '/case', component: '@/pages/case', title: 'case.title' },
    {
      path: '/ecosystem',
      component: '@/pages/ecosystem',
      title: 'ecosystem.title',
    },
    { path: '/doc', component: '@/pages/doc', title: 'doc.title' },
    { path: '/blog', component: '@/pages/blog', title: 'blog.title' },
    {
      path: '/download',
      component: '@/pages/download',
      title: 'download.title',
    },
    {
      path: '/overview',
      component: '@/pages/overview',
      title: 'product.title',
    },
  ],
  scripts: [
    `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e4bea71987c7daae77ee69586aad5bec";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`,
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=AW-11092859162',
      async: true,
    },
    `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-11092859162');`,
  ],
  theme: {
    'primary-color': 'rgba(22,80,255,1)',
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
  ssr: { mode: 'stream' },
  exportStatic: {},
  fastRefresh: {},
  request: {
    dataField: '',
  },
  hash: true,
  locale: {
    antd: true,
    baseNavigator: false,
    baseSeparator: '-',
    title: true,
    default: 'zh-CN',
    useLocalStorage: false,
  },
});
