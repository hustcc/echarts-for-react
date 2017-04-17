import React from 'react';
import ReactEcharts from '../';
import { shallow } from 'enzyme';

test('test echarts-for-react of simple echarts option.`', () => {
	let option = {
    title: {
      text: '堆叠区域图'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['邮件营销','联盟广告','视频广告']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [{
      type : 'category',
      boundaryGap : false,
      data : ['周一','周二','周三','周四','周五','周六','周日']
    }],
    yAxis : [{
      type : 'value'
    }],
    series : [{
      name:'邮件营销',
      type:'line',
      stack: '总量',
      areaStyle: {normal: {}},
      data:[120, 132, 101, 134, 90, 230, 210]
    }, {
      name:'联盟广告',
      type:'line',
      stack: '总量',
      areaStyle: {normal: {}},
      data:[220, 182, 191, 234, 290, 330, 310]
    }, {
      name:'视频广告',
      type:'line',
      stack: '总量',
      areaStyle: {normal: {}},
      data:[150, 232, 201, 154, 190, 330, 410]
    }]
  };

  let component = shallow(
    <ReactEcharts option={option}
    							className='my_echarts'
    							style={{height: '400px'}} />
  );
  let echarts_div = component.find('div');
  expect(echarts_div.length).toBe(1);
});