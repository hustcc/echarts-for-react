/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import EchartsReact from '../src';
import option from './option';

test('test echarts-for-react\'s index.js.', () => {
  let component = mount(<EchartsReact
    option={option}
    className="echarts-for-react"
  />);
  expect(component.exists()).toBe(true);

  expect(component.getDOMNode().className).toBe('echarts-for-react-div echarts-for-react');

  expect(component.find('div').length).toBe(1);

  expect(component.name()).toEqual('EchartsReact');
  // default props
  expect(component.instance().props.option).toEqual(option);
  expect(component.props().style).toEqual({});

  expect(component.getDOMNode().style.height).toEqual('300px');
  expect(component.instance().props.className).toEqual('echarts-for-react');
  expect(component.instance().props.notMerge).toEqual(false);
  expect(component.instance().props.lazyUpdate).toEqual(false);
  expect(component.instance().props.theme).toEqual(null);
  expect(typeof component.instance().props.onChartReady).toEqual('function');
  expect(component.instance().props.showLoading).toEqual(false);
  expect(component.instance().props.onEvents).toEqual({});


  const testFunc = () => {};
  const chartReady = jest.fn();
  // not default props
  component = mount(<EchartsReact
    option={option}
    style={{ width: 100 }}
    notMerge
    lazyUpdate
    theme="test_theme"
    onChartReady={chartReady}
    showLoading
    onEvents={{ onClick: testFunc }}
    className="echarts-for-react"
  />);

  expect(chartReady).toBeCalled();

  expect(component.instance().props.option).toEqual(option);
  expect(component.instance().props.style).toEqual({ width: 100 });
  expect(component.instance().props.className).toEqual('echarts-for-react');
  expect(component.instance().props.notMerge).toEqual(true);
  expect(component.instance().props.lazyUpdate).toEqual(true);
  expect(component.instance().props.theme).toEqual('test_theme');
  expect(component.instance().props.onChartReady).toEqual(chartReady);
  expect(component.instance().props.showLoading).toEqual(true);
  expect(component.instance().props.onEvents).toEqual({ onClick: testFunc });
});


test('test echarts-for-react update props.', () => {
  const component = shallow(<EchartsReact
    option={option}
    className="echarts-for-react"
  />);

  expect(component.props().style).toEqual({ height: 300 });
  expect(component.hasClass('echarts-for-react')).toBe(true);
  expect(component.hasClass('echarts-for-react-div')).toBe(true);

  component.setProps({
    className: 'test-classname',
    style: { height: 500 },
  });

  component.update();

  expect(component.props().style).toEqual({ height: 500 });
  expect(component.hasClass('test-classname')).toBe(true);
  expect(component.hasClass('echarts-for-react-div')).toBe(true);
});


test('test echarts-for-react getEchartsInstance.', () => {
  const component = mount(<EchartsReact
    option={option}
    className="echarts-for-react"
  />);

  expect(component.instance().getEchartsInstance().displayName).toBe('EchartsInstance');
});


test('test echarts-for-react unmount.', () => {
  const component = mount(<EchartsReact
    option={option}
    className="echarts-for-react"
  />);

  component.unmount();
  expect(true).toBe(true);
});
