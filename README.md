# echart-for-react

A very simple echarts(v3.0) wrapper for react.

[![npm](https://img.shields.io/npm/v/echarts-for-react.svg?style=flat-square)](https://www.npmjs.com/package/echarts-for-react) [![npm](https://img.shields.io/npm/dt/echarts-for-react.svg?style=flat-square)](https://www.npmjs.com/package/echarts-for-react) [![npm](https://img.shields.io/npm/l/echarts-for-react.svg?style=flat-square)](https://www.npmjs.com/package/echarts-for-react)

# install

```
npm install echart-for-react
```

How to run the demo:

```
git clone git@github.com:hustcc/echarts-for-react.git

npm install

npm start
```

then open [http://127.0.0.1:8080/](http://127.0.0.1:8080/) in your browser. or see [http://hustcc.github.io/echarts-for-react/](http://hustcc.github.io/echarts-for-react/)


# usage

Simple demo code: more can see: [http://hustcc.github.io/echarts-for-react/](http://hustcc.github.io/echarts-for-react/)

```js
import React from 'react';
import ReactEcharts from '../src/echarts-for-react';

<ReactEcharts
    option={this.getOtion()} 
    height={300} 
    onEvents={onEvents} />
```


# component props

 - **`option`** 

the echart option config, can see [http://echarts.baidu.com/option.html#title](http://echarts.baidu.com/option.html#title).

 - **`height`**

the `height` of echart. number, with `px` as it's unit.

 - **`onChartReady`**

when chart is ready, will callback the function with the echart object as it's paramter.

 - **`onEvents`**

binding the echarts event, will callback the function with the echart event parameter, and `the echart object`. e.g: 

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
for more event name, see: [http://echarts.baidu.com/api.html#events](http://echarts.baidu.com/api.html#events)


# TODO

1. theme props
2. echart API


# LICENSE

MIT