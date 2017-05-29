import React from 'react';
// import CustomChart from '../../';
import Chart from '../../lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

const CustomChart = (props) => (
    <Chart {...props} echarts={echarts} />
);

const option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

const App = () => (
  <CustomChart style={{
      width: '400px',
      height: '300px'
  }} option={option}  />
);

export default App;
