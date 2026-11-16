---
title: Init Opts
order: 9
---

## Init Opts

`opts` is passed to `echarts.init`, see the [ECharts docs](https://echarts.apache.org/en/api.html#echarts.init). Change an option to see the chart created again with it.

```tsx
import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';

const Page: React.FC = () => {
  const [renderer, setRenderer] = useState<'canvas' | 'svg'>('canvas');
  const [devicePixelRatio, setDevicePixelRatio] = useState(2);

  const option = {
    title: {
      text: `renderer: ${renderer}, devicePixelRatio: ${devicePixelRatio}`,
    },
    tooltip: {},
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {},
    series: [{
      type: 'bar',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    }],
  };

  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: 400 }}
        opts={{
          renderer,
          devicePixelRatio,
          // redraw only the changed area, canvas renderer only
          useDirtyRect: renderer === 'canvas',
          // a larger area responds to touch on touch screens
          useCoarsePointer: true,
          pointerSize: 44,
        }}
      />
      <div>
        <button onClick={() => setRenderer(renderer === 'canvas' ? 'svg' : 'canvas')}>
          renderer: {renderer}
        </button>{' '}
        <button onClick={() => setDevicePixelRatio(devicePixelRatio === 2 ? 1 : 2)}>
          devicePixelRatio: {devicePixelRatio}
        </button>
      </div>
    </>
  );
};

export default Page;
```
