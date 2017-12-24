/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

import 'babel-polyfill';
import { Application, Module } from '76';

import router from './router.jsx';

// 模块无数据
const mainModule = new Module('charts', {
  initialState: {},
  selectors: {
    getOption: {},
  },
});

// 创建应用
const application = new Application('echarts-for-react');

// 加入模块
application.addModule(mainModule);

// 设置路由
application.setRouter(router);

// 启动
application.run('#wrapper', () => {
  console.log(`Application '${application.name}' is running...`);
});