import React, { useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import ReactECharts from '../../src';
import { render, destroy, createDiv, removeDom } from '../utils';

describe('chart', () => {
  it('event change', async () => {
    let echartsInstance;
    const div = createDiv();
    let eventParam = null;
    const ChartEventChange: React.FC<any> = (props) => {
      const option = {
        title : {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      const [onEvents, setOnEvents] = useState(null);

      useEffect(() => {
        setTimeout(() => {
          setOnEvents({
            mousedown: param => eventParam = param
          });
        }, 500)
      }, []);

      return (
        <ReactECharts { ...props } option={option} onEvents={onEvents} />
      );
    };
    const Comp = <ChartEventChange onChartReady={echarts => (echartsInstance = echarts)} />;
    render(Comp, div);

    expect(echartsInstance).toBeDefined();

    let e = new MouseEvent('mousedown', {
      clientX: div.offsetLeft + div.offsetWidth / 2,
      clientY: div.offsetTop + div.offsetHeight / 2,
      bubbles: true,
      cancelable: false
    });
    div.querySelector('canvas').dispatchEvent(e);
    expect(eventParam).toBe(null);

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 600));
      div.querySelector('canvas').dispatchEvent(e);
      expect(eventParam).toBeDefined();
      expect(eventParam.type).toEqual('mousedown');
    });

    destroy(div);
    removeDom(div);
  });
});
