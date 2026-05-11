import { defineConfig } from 'umi';
import { DEFAULT_LOCAL } from './src/constant';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'TuGraph the high-performance graph database',
  favicon:
    'https://gw.alipayobjects.com/zos/bmw-prod/6290edfc-e134-4074-a550-079eeba9926d.svg',
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '@/pages/Home',
        },
        {
          path: '/product',
          component: '@/pages/Product',
          title: 'product.title',
        },
        {
          path: '/product/*',
          component: '@/pages/Product',
          title: 'product.title',
        },
        {
          path: '/case',
          component: '@/pages/Case',
          title: 'case.title',
        },
        {
          path: '/partners',
          component: '@/pages/Partners',
        },
        {
          path: '/docs',
          component: '@/pages/Docs',
          title: 'docs.title',
        },
        {
          path: '/docs/*',
          component: '@/pages/Docs',
          title: 'docs.title',
        },
        {
          path: '/download',
          component: '@/pages/Download',
          title: 'download.title',
        },
        {
          path: '/blog/list',
          component: '@/pages/Blog/list',
          title: 'blog.title',
        },
        {
          path: '/blog/info/*',
          component: '@/pages/Blog/info',
        },
        {
          path: '/blog/info',
          component: '@/pages/Blog/info',
        },
        {
          path: '/activity/list',
          component: '@/pages/Activity/list',
        },
        {
          path: '/activity/info',
          component: '@/pages/Activity/info',
        },
        {
          path: '/activity/info/*',
          component: '@/pages/Activity/info',
        },
        {
          path: '/video/home',
          component: '@/pages/Video/home',
        },
        {
          path: '/video/list',
          component: '@/pages/Video/list',
        },
        {
          path: '/video/info/*',
          component: '@/pages/Video/info',
        },
      ],
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
    `window.TUGRAPH_UNICORN_FOOTER_PROJECT = "2vXUY5TYl56AhqFP953l";`,
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11092859162');`,
    `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?9452f06d5325a3907efec5619d9f2392";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();`,
    {
      src: 'https://ur.alipay.com/tracert_a4609.js',
      async: true,
    },
    ` window.TracertCmdCache=window.TracertCmdCache||[]
    ;var t=window.Tracert||{_isRenderInit:!0,call:function(){window.TracertCmdCache.push(arguments)}},f=["call","start","config","logPv","info","err","click","expo","pageName","pageState","time","timeEnd","parse","checkExpo","stringify","report","set","before"];for(let i=0;i<f.length;i++){(function(fn){t[fn]=function(){var a=[],l=arguments.length;for (var j=0;j<l;j++) {a.push(arguments[j])}a.unshift(fn);window.TracertCmdCache.push(a)}})(f[i])}window.Tracert=t;
    window._to={autoLogPv:false};
    window.Tracert.start({});`,
    `window.onload = ()=>{
    const currentWidth = window.innerWidth;
    if(currentWidth < 768){
      const baseWidth = 1440; 
      const scaleValue = currentWidth / baseWidth;
      const rootElement = document.getElementById('root');
      rootElement.style.transform = 'scale(' + scaleValue + ')';
      rootElement.style.width =  baseWidth + 'px';
    }};`,
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
    memo.module
      .rule('mjs')
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type('javascript/auto');
  },
  exportStatic: {},
  fastRefresh: {},
  request: {
    dataField: '',
  },
  proxy: {
    '/api': {
      target: 'https://tugraph.tech',
      changeOrigin: true,
    },
  },
  hash: true,
  locale: {
    antd: true,
    baseNavigator: false,
    baseSeparator: '-',
    title: true,
    default: DEFAULT_LOCAL,
    useLocalStorage: false,
  },
  metas: [
    {
      name: 'referrer',
      content: 'never',
    },
    {
      name: 'viewport',
      content:
        'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0',
    },
  ],
  antd: {
    dark: true,
  },
});
