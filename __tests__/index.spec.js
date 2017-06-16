/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import IU from 'immutability-util';

import ReactEcharts from '../src/';
import option from './option';

test('test echarts-for-react\'s index.js.', () => {
  const component = shallow(
    <ReactEcharts
      option={option}
      className="echarts-for-react"
      style={{height: '400px'}}
    />
  );
  expect(component.exists()).toBe(true);

  expect(component.find('div').length).toBe(1);

  expect(component.hasClass('echarts-for-react')).toBe(true);

  expect(component.type()).toEqual('div');
});
