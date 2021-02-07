import React from 'react';
import ReactECharts from '../../src/';
import { render, destroy, createDiv, removeDom } from '../utils';

const options = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
    },
  ],
};

describe('chart', () => {
  it('simple', () => {
    let instance;
    const div = createDiv();
    const Comp = <ReactECharts ref={(e) => (instance = e)} option={options} />;
    render(Comp, div);

    expect(instance).toBeDefined();
    expect(instance.getEchartsInstance()).toBeDefined();

    destroy(div);
    expect(div.querySelector('*')).toBe(null);

    removeDom(div);
  });
});
