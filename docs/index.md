---
title: ECharts for React - 全网最好用的 ECharts 的 React 组件封装
order: 10
hero:
  title: ECharts for React
  desc: 全网最好用的 ECharts 的 React 组件封装
  actions:
    - text: 查看在线 DEMO
      link: /examples/dynamic
footer: Open-source MIT Licensed | Copyright © 2021-present
---


## 安装

```bash
$ npm install echarts-for-react
```


## 使用

```tsx | pure
import React from 'react';
import ReactECharts from 'echarts-for-react';

const Page: React.FC = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default Page;
```

最终结果：

```tsx
import React from 'react';
import ReactECharts from 'echarts-for-react';

const Page: React.FC = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default Page;
```


## 反馈

请访问 [GitHub](https://github.com/hustcc/echarts-for-react)。
