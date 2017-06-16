/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import echarts from 'echarts';

import ReactEcharts from '../src/core';
import option from './option';

test('test echarts-for-react\'s core.js.', () => {
  const component = shallow(
    <ReactEcharts
      option={option}
      style={{height: '400px'}}
      className="echarts-for-react"
      echarts={echarts}
    />
  );

  expect(component.exists()).toBe(true);

  expect(component.find('div').length).toBe(1);

  expect(component.hasClass('echarts-for-react')).toBe(true);

  expect(component.type()).toEqual('div');
});
