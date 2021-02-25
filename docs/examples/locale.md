---
title: Locale
order: 8
---

## Locale

```tsx
import React from 'react';
import ReactECharts from 'echarts-for-react';

import "echarts/i18n/langFR";

const Page: React.FC = () => {
  const option = {
    title: {
      text: 'ECharts 入门示例'
    },
    toolbox: {
        feature: {
            saveAsImage: {},
            dataZoom: {},
            restore: {}
        }
    },
    tooltip: {},
    legend: {
      data:['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
    opts={{ locale: 'FR' }}
  />;
};

export default Page;
```
