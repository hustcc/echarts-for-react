import React, { PureComponent } from 'react';
import ReactEcharts from '../../../src/index';
import echarts from 'echarts';

export default class Gcalendar extends PureComponent {
  getVirtulData = (year) => {
    year = year || '2017';
    const date = +echarts.number.parseDate(year + '-01-01');
    const end = +echarts.number.parseDate((+year + 1) + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 1000)
        ]);
    }
    return data;
  };
  getOption = () => {
    return {
      tooltip: {
        position: 'top'
      },
      visualMap: {
        min: 0,
        max: 1000,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        top: 'top'
      },

      calendar: [{
        range: '2017',
        cellSize: ['auto', 20]
      }, {
        top: 260,
        range: '2016',
        cellSize: ['auto', 20]
      }],

      series: [{
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 0,
        data: this.getVirtulData(2017)
      }, {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 1,
        data: this.getVirtulData(2016)
      }]
    };
  };
  render() {
    return (
      <div className='examples'>
        <div className='parent'>
          <label> render a calendar like github commit history. </label>
          <ReactEcharts
            option={this.getOption()}
            style={{height: '500px', width: '100%'}}
            className='react_for_echarts' />
        </div>
    </div>
    );
  }
}
