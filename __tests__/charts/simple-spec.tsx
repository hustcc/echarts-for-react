import React from 'react';
import ReactECharts from '../../src/';
import type { EChartsOption } from '../../src/';
import { render, destroy, createDiv, removeDom } from '../utils';

const options: EChartsOption = {
  legend: {
    data: ['series1', 'series2'],
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'series1',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
    },
    {
      name: 'series2',
      data: [720, 832, 801, 834, 1190, 1230, 1220],
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

  describe('container size', () => {
    it('default', () => {
      let instance;
      const div = createDiv();
      div.style.display = 'block';
      div.style.width = '1200px';
      div.style.height = '720px';

      const Comp = <ReactECharts ref={(e) => (instance = e)} option={options} />;
      render(Comp, div);

      expect(instance).toBeDefined();
      expect(instance.getEchartsInstance()).toBeDefined();
      expect(instance.getEchartsInstance().getWidth()).toBe(1200);
      expect(instance.getEchartsInstance().getHeight()).toBe(300); // default height

      destroy(div);
      expect(div.querySelector('*')).toBe(null);

      removeDom(div);
    });

    describe('style', () => {
      it('100% width', () => {
        let instance;
        const div = createDiv();
        div.style.display = 'block';
        div.style.width = '1200px';
        div.style.height = '720px';

        const style = {
          width: '100%',
        };

        const Comp = <ReactECharts ref={(e) => (instance = e)} option={options} style={style} />;
        render(Comp, div);

        expect(instance).toBeDefined();
        expect(instance.getEchartsInstance()).toBeDefined();
        expect(instance.getEchartsInstance().getWidth()).toBe(1200);
        expect(instance.getEchartsInstance().getHeight()).toBe(300); // default height

        destroy(div);
        expect(div.querySelector('*')).toBe(null);

        removeDom(div);
      });

      it('100% width, 100% height', () => {
        let instance;
        const div = createDiv();
        div.style.display = 'block';
        div.style.width = '1200px';
        div.style.height = '720px';

        const style = {
          width: '100%',
          height: '100%',
        };

        const Comp = <ReactECharts ref={(e) => (instance = e)} option={options} style={style} />;
        render(Comp, div);

        expect(instance).toBeDefined();
        expect(instance.getEchartsInstance()).toBeDefined();
        expect(instance.getEchartsInstance().getWidth()).toBe(1200);
        expect(instance.getEchartsInstance().getHeight()).toBe(720);

        destroy(div);
        expect(div.querySelector('*')).toBe(null);

        removeDom(div);
      });

      it('custom width, custom height', () => {
        let instance;
        const div = createDiv();
        div.style.display = 'block';
        div.style.width = '1200px';
        div.style.height = '720px';

        const style = {
          width: '400px',
          height: '150px',
        };

        const Comp = <ReactECharts ref={(e) => (instance = e)} option={options} style={style} />;
        render(Comp, div);

        expect(instance).toBeDefined();
        expect(instance.getEchartsInstance()).toBeDefined();
        expect(instance.getEchartsInstance().getWidth()).toBe(400);
        expect(instance.getEchartsInstance().getHeight()).toBe(150);

        destroy(div);
        expect(div.querySelector('*')).toBe(null);

        removeDom(div);
      });
    });

    describe('opts', () => {
      it('default', () => {
        let instance;
        const div = createDiv();
        div.style.display = 'block';
        div.style.width = '1200px';
        div.style.height = '720px';

        const opts = {
          width: null,
          height: null,
        };

        const Comp = <ReactECharts ref={(e) => (instance = e)} option={options} opts={opts} />;
        render(Comp, div);

        expect(instance).toBeDefined();
        expect(instance.getEchartsInstance()).toBeDefined();
        expect(instance.getEchartsInstance().getWidth()).toBe(1200);
        expect(instance.getEchartsInstance().getHeight()).toBe(300); // default height

        destroy(div);
        expect(div.querySelector('*')).toBe(null);

        removeDom(div);
      });

      it('custom width, custom height', () => {
        let instance;
        const div = createDiv();
        div.style.display = 'block';
        div.style.width = '1200px';
        div.style.height = '720px';

        const opts = {
          width: 400,
          height: 150,
        };

        const Comp = <ReactECharts ref={(e) => (instance = e)} option={options} opts={opts} />;
        render(Comp, div);

        expect(instance).toBeDefined();
        expect(instance.getEchartsInstance()).toBeDefined();
        expect(instance.getEchartsInstance().getWidth()).toBe(400);
        expect(instance.getEchartsInstance().getHeight()).toBe(150);

        destroy(div);
        expect(div.querySelector('*')).toBe(null);

        removeDom(div);
      });
    });
  });

  describe('props', () => {
    it('default', () => {
      let instance;
      const div = createDiv();
      div.style.display = 'block';
      div.style.width = '1200px';
      div.style.height = '720px';

      const opts = {
        width: null,
        height: null,
      };

      const Comp = <ReactECharts ref={(e) => (instance = e)} option={options} opts={opts} data-testid="props-test" />;
      render(Comp, div);

      expect(div.querySelector('[data-testid="props-test"]')).toBe(instance.ele);

      destroy(div);
      expect(div.querySelector('*')).toBe(null);

      removeDom(div);
    });
  });
});
