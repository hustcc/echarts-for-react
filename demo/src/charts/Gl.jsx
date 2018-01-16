import React, { PureComponent } from 'react';
import ReactEcharts from '../../../src/index';
import 'echarts-gl';

export default class Api extends PureComponent {
  getOption = () => ({
    grid3D: {},
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    series: [{
      type: 'scatter3D',
      symbolSize: 50,
      data: [[-1, -1, -1], [0, 0, 0], [1, 1, 1]],
      itemStyle: {
        opacity: 1
      }
    }]
  });

  render() {
    return (
      <div className='examples'>
        <div className='parent'>
          <label>echarts-gl demo</label>
          <ReactEcharts option={this.getOption()}  />
          <label>echarts-gl doc: https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#globe</label>
        </div>
      </div>
    );
  }
}
