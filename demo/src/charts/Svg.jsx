import React, { PureComponent } from 'react';
import ReactEcharts from '../../../src/index';

export default class Svg extends PureComponent {
  getOption = () => ({
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
  })

  render() {
    let code = "<ReactEcharts \n" +
      "  option={this.getOption()} \n" +
      "  style={{height: '400px', width: '100%'}}  \n" +
      "  opts={{renderer: 'svg'}}  \n" +
      "  className='react_for_echarts' />";
    return (
      <div className='examples'>
        <div className='parent'>
          <label> SVG renderer chart </label>
          <ReactEcharts
            option={this.getOption()}
            style={{height: '400px', width: '100%'}}
            opts={{ renderer: 'svg' }}
            className='react_for_echarts' />
          <label> code below: </label>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    );
  }
}
