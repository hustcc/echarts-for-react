import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: '\b',
  base: '/',
  exportStatic: {},
  publicPath: process.env.NODE_ENV === 'production' ? '/echarts-for-react/' : '/',
  base: process.env.NODE_ENV === 'production' ? '/echarts-for-react/' : '/',
  logo: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/logo.png?_v_=20200710_1',
  styles: [
    '.__dumi-default-navbar-logo:not([data-plaintext]) { padding-left: 200px!important; }',
    '.echarts-for-react.class_1 { height: 400px!important; }',
    '.echarts-for-react.class_2 { height: 500px!important; }',
  ],
  navs: [
    null,
    { title: 'G2Plot', path: 'https://github.com/antvis/G2Plot' },
    { title: '在线文档', path: 'https://github.com/hustcc/echarts-for-react' },
    { title: 'GitHub', path: 'https://github.com/hustcc/echarts-for-react' },
  ],
  analytics: {
    // Google Analytics 代码，配置后会启用
    ga: 'G-T1MYFFZ6TL',
    baidu: 'df880ba684fa4f42e9e672abeef0e34b',
  },
  // more config: https://d.umijs.org/config
});