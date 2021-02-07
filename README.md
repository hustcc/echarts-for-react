# echarts-for-react

A very simple React wrapper for [Apache ECharts (incubating)](https://github.com/apache/incubator-echarts). 

[![npm](https://img.shields.io/npm/v/echarts-for-react.svg)](https://www.npmjs.com/package/echarts-for-react)
[![Build Status](https://github.com/hustcc/echarts-for-react/workflows/build/badge.svg?branch=master)](https://github.com/hustcc/echarts-for-react/actions?query=workflow%3Abuild)
[![Coverage](https://img.shields.io/coveralls/hustcc/echarts-for-react/master.svg)](https://coveralls.io/github/hustcc/echarts-for-react)
[![NPM downloads](https://img.shields.io/npm/dm/echarts-for-react.svg)](https://www.npmjs.com/package/echarts-for-react)
[![License](https://img.shields.io/npm/l/echarts-for-react.svg)](https://www.npmjs.com/package/echarts-for-react)
![ECharts Ver](https://img.shields.io/badge/echarts-%5E3.0.0%20%7C%7C%20%5E4.0.0%20%7C%7C%20%5E5.0.0-blue.svg)
![React Ver](https://img.shields.io/badge/React-%20%5E15.0.0%20%7C%7C%20%20%5E16.0.0%20%7C%7C%20%20%5E17.0.0-blue.svg)


# 1. install

```sh
npm install --save echarts-for-react

# `echarts` is the peerDependence of `echarts-for-react`, you can install echarts with your own version.
npm install --save echarts
```

Then use it.

```js
import ReactEcharts from 'echarts-for-react';

// render echarts option.
<ReactEcharts option={this.getOption()} />
```

You can run demo by:

```sh
git clone git@github.com:hustcc/echarts-for-react.git

npm install

npm start
```

then open [http://127.0.0.1:8080/](http://127.0.0.1:8080/) in your browser. or see [http://git.hust.cc/echarts-for-react/](http://git.hust.cc/echarts-for-react/)

## GL

Install and import [`echarts-gl`](https://www.npmjs.com/package/echarts-gl) module when you want to create a [GL instance](https://www.echartsjs.com/examples/zh/index.html#chart-type-globe)

 - **`Install`**

```sh
npm install --save echarts-gl
```

 - **`Import`**

```js
import 'echarts-gl'
import ReactEcharts from "echarts-for-react";

<ReactEcharts
  option={GL_OPTION}
/>

```


# 2. usage

Code of a simple demo code showed below. For more example can see: [http://git.hust.cc/echarts-for-react/](http://git.hust.cc/echarts-for-react/)

### javascript

```js
import React from 'react';
import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');

<ReactEcharts
  option={this.getOption()}
  notMerge={true}
  lazyUpdate={true}
  theme={"theme_name"}
  onChartReady={this.onChartReadyCallback}
  onEvents={EventsDict}
  opts={} />
```

### typescript

```js
import * as React from "react";
import ReactEcharts from "echarts-for-react";

<ReactEcharts
  option={this.getOption()}
  notMerge={true}
  lazyUpdate={true}
  theme={"theme_name"}
  onChartReady={this.onChartReadyCallback}
  onEvents={EventsDict}
  opts={} />
```

Import ECharts.js modules manually to reduce bundle size

```js
import React from 'react';
// import the core library.
import ReactEchartsCore from 'echarts-for-react/lib/core';

// then import echarts modules those you have used manually.
import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
// import 'echarts/lib/chart/pie';
// import 'echarts/lib/chart/scatter';
// import 'echarts/lib/chart/radar';

// import 'echarts/lib/chart/map';
// import 'echarts/lib/chart/treemap';
// import 'echarts/lib/chart/graph';
// import 'echarts/lib/chart/gauge';
// import 'echarts/lib/chart/funnel';
// import 'echarts/lib/chart/parallel';
// import 'echarts/lib/chart/sankey';
// import 'echarts/lib/chart/boxplot';
// import 'echarts/lib/chart/candlestick';
// import 'echarts/lib/chart/effectScatter';
// import 'echarts/lib/chart/lines';
// import 'echarts/lib/chart/heatmap';

// import 'echarts/lib/component/graphic';
// import 'echarts/lib/component/grid';
// import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/polar';
// import 'echarts/lib/component/geo';
// import 'echarts/lib/component/parallel';
// import 'echarts/lib/component/singleAxis';
// import 'echarts/lib/component/brush';

import 'echarts/lib/component/title';

// import 'echarts/lib/component/dataZoom';
// import 'echarts/lib/component/visualMap';

// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markArea';

// import 'echarts/lib/component/timeline';
// import 'echarts/lib/component/toolbox';

// import 'zrender/lib/vml/vml';

// The usage of ReactEchartsCore are same with above.
<ReactEchartsCore
  echarts={echarts}
  option={this.getOption()}
  notMerge={true}
  lazyUpdate={true}
  theme={"theme_name"}
  onChartReady={this.onChartReadyCallback}
  onEvents={EventsDict}
  opts={} />
```

# 3. component props

 - **`option`** (required, object)

the echarts option config, can see [https://echarts.apache.org/option.html#title](https://echarts.apache.org/option.html#title).

 - **`notMerge`** (optional, object)

when `setOption`, not merge the data, default is `false`. See [https://echarts.apache.org/api.html#echartsInstance.setOption](https://echarts.apache.org/api.html#echartsInstance.setOption).

 - **`lazyUpdate`** (optional, object)

when `setOption`, lazy update the data, default is `false`. See [https://echarts.apache.org/api.html#echartsInstance.setOption](https://echarts.apache.org/api.html#echartsInstance.setOption).

 - **`style`** (optional, object)

the `style` of echarts div. `object`, default is {height: '300px'}.

 - **`className`** (optional, string)

the `class` of echarts div. you can setting the css style of charts by class name.

 - **`theme`** (optional, string)

the `theme` of echarts. `string`, should `registerTheme` before use it (theme object format: [https://github.com/ecomfe/echarts/blob/master/theme/dark.js](https://github.com/ecomfe/echarts/blob/master/theme/dark.js)). e.g.

```js
// import echarts
import echarts from 'echarts';
...
// register theme object
echarts.registerTheme('my_theme', {
  backgroundColor: '#f4cccc'
});
...
// render the echarts use option `theme`
<ReactEcharts
  option={this.getOption()}
  style={{height: '300px', width: '100%'}}
  className='echarts-for-echarts'
  theme='my_theme' />
```

 - **`onChartReady`** (optional, function)

when the chart is ready, will callback the function with the `echarts object` as it's paramter.

 - **`loadingOption`** (optional, object)

the echarts loading option config, can see [https://echarts.apache.org/api.html#echartsInstance.showLoading](https://echarts.apache.org/api.html#echartsInstance.showLoading).

 - **`showLoading`** (optional, bool, default: false)

`bool`, when the chart is rendering, show the loading mask.

 - **`onEvents`** (optional, array(string=>function) )

binding the echarts event, will callback with the `echarts event object`, and `the echart object` as it's paramters. e.g:

```js
let onEvents = {
  'click': this.onChartClick,
  'legendselectchanged': this.onChartLegendselectchanged
}
...
<ReactEcharts
  option={this.getOption()}
  style={{height: '300px', width: '100%'}}
  onEvents={onEvents} />
```
for more event key name, see: [https://echarts.apache.org/api.html#events](https://echarts.apache.org/api.html#events)

 - **`opts`** (optional, object)

the `opts` of echarts. `object`, will be used when initial echarts instance by `echarts.init`. Document [here](https://echarts.apache.org/api.html#echarts.init).

```js
<ReactEcharts
  option={this.getOption()}
  style={{height: '300px'}}
  opts={{renderer: 'svg'}} // use svg to render the chart.
/>
```


# 4. Component API & Echarts API

the Component only has `one API` named `getEchartsInstance`.

 - **`getEchartsInstance()`** : get the echarts instance object, then you can use any `API of echarts`.

for example:

```js
// render the echarts component below with rel
<ReactEcharts ref={(e) => { this.echarts_react = e; }}
  option={this.getOption()} />

// then get the `ReactEcharts` use this.echarts_react

let echarts_instance = this.echarts_react.getEchartsInstance();
// then you can use any API of echarts.
let base64 = echarts_instance.getDataURL();
```

**About API of echarts, can see** [https://echarts.apache.org/api.html#echartsInstance](https://echarts.apache.org/api.html#echartsInstance).

You can use the API to do:

1. `binding / unbinding` event.
2. `dynamic charts` with dynamic data.
3. get the echarts dom / dataURL / base64, save the chart to png.
4. `release` the charts.


# 5. Q & A

 - How to render the chart with svg when using echarts 4.x

Use the props `opts` of component with `renderer = 'svg'`. For example:


```js
<ReactEcharts
  option={this.getOption()}
  style={{height: '300px'}}
  opts={{renderer: 'svg'}} // use svg to render the chart.
/>
```

 - How to resolve Error `Component series.scatter3D not exists. Load it first.`

[Install and import `echarts-gl` first](#GL)


# 6. LICENSE

MIT@[hustcc](https://github.com/hustcc).


