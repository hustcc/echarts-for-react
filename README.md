# echarts-for-react

A very simple echarts(v3.0) wrapper for react.

[![Build Status](https://travis-ci.org/hustcc/echarts-for-react.svg?branch=master)](https://travis-ci.org/hustcc/echarts-for-react) [![npm](https://img.shields.io/npm/v/echarts-for-react.svg?style=flat-square)](https://www.npmjs.com/package/echarts-for-react) [![npm](https://img.shields.io/npm/dt/echarts-for-react.svg?style=flat-square)](https://www.npmjs.com/package/echarts-for-react) [![npm](https://img.shields.io/npm/l/echarts-for-react.svg?style=flat-square)](https://www.npmjs.com/package/echarts-for-react)

# install

```sh
npm install echarts-for-react
```

How to run the demo:

```sh
git clone git@github.com:hustcc/echarts-for-react.git

npm install

npm start
```

then open [http://127.0.0.1:8080/](http://127.0.0.1:8080/) in your browser. or see [http://git.hust.cc/echarts-for-react/](http://git.hust.cc/echarts-for-react/)


# usage

Simple demo code. for more example can see: [http://git.hust.cc/echarts-for-react/](http://git.hust.cc/echarts-for-react/)

```js
import React from 'react';
import ReactEcharts from 'echarts-for-react';

<ReactEcharts
    option={this.getOtion()} 
    height={300} 
	theme={"theme_name"}
	onChartReady={this.onChartReadyCallback}
    onEvents={EventsDict} />
```


# component props

 - **`option`** (required, object)

the echarts option config, can see [http://echarts.baidu.com/option.html#title](http://echarts.baidu.com/option.html#title).

 - **`height`** (required, number)

the `height` of echarts. `number`, with `px` as it's unit.

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
    option={this.getOtion()} 
    height={300} 
    theme='my_theme' /> 

```

 - **`onChartReady`** (optional, function)

when the chart is ready, will callback the function with the `echarts object` as it's paramter.

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
    option={this.getOtion()} 
    height={300} 
    onEvents={onEvents} />
```
for more event key name, see: [http://echarts.baidu.com/api.html#events](http://echarts.baidu.com/api.html#events)


# TODO

1. echart API


# LICENSE

MIT