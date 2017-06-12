import React from 'react';
import ReactEcharts from '../src/';
import Core from '../src/core';
import { shallow } from 'enzyme';

test('test echarts-for-react of simple echarts option.`', () => {
  const option = {
    title: {
      text: 'ECharts 入门示例'
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
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  const component = shallow(
    <ReactEcharts
      option={option}
      style={{height: '400px'}}
    />
  );
  const echartsCore = component.find(Core);
  expect(echartsCore.length).toBe(1);
});
