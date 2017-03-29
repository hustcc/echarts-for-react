import React from 'react';
import ReactEcharts from '../lib/echarts-for-react';
import echarts from 'echarts';

const GCalendarComponent = React.createClass({
  getVirtulData: function(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 1000)
        ]);
    }
    return data;
  },
  getOtion: function() {
    const option = {
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
    return option;
  },
  render: function() {
    return (
      <div className='examples'>
        <div className='parent'>
          <label> render a calendar like github commit history. </label>
          <ReactEcharts
            option={this.getOtion()} 
            style={{height: '500px', width: '100%'}} 
            className='react_for_echarts' />
        </div>
    </div>
    );
  }
});

export default GCalendarComponent;