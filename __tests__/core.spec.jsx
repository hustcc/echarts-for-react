/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import echarts from 'echarts';

import EchartsReactCore from '../src/core';
import option from './option';

describe('core.js', () => {
  test('default props', () => {
    const component = mount(<EchartsReactCore
      option={option}
      className="echarts-for-react-root"
      echarts={echarts}
    />);

    expect(component.exists()).toBe(true);

    expect(component.find('div').length).toBe(1);

    // root tag
    expect(component.getDOMNode().nodeName.toLowerCase()).toEqual('div');
    // class name
    expect(component.getDOMNode().className).toBe('echarts-for-react echarts-for-react-root');
    // style
    expect(component.getDOMNode().style.height).toEqual('300px');
    // default props
    expect(component.props().option).toEqual(option);
    expect(component.props().style).toEqual({});
    expect(component.props().className).toEqual('echarts-for-react-root');
    expect(component.props().notMerge).toEqual(false);
    expect(component.props().lazyUpdate).toEqual(false);
    expect(component.props().theme).toEqual(null);
    expect(typeof component.props().onChartReady).toEqual('function');
    expect(component.props().showLoading).toEqual(false);
    expect(component.props().onEvents).toEqual({});
    expect(component.props().opts).toEqual({});
  });

  test('override props', () => {
    const testOnChartReadyFunc = jest.fn();
    const testFunc = () => {};
    // not default props
    const component = mount(<EchartsReactCore
      option={option}
      style={{ width: 100 }}
      notMerge
      lazyUpdate
      theme="test_theme"
      onChartReady={testOnChartReadyFunc}
      showLoading
      onEvents={{ onClick: testFunc }}
      echarts={echarts}
      opts={{ renderer: 'svg' }}
    />);

    // default props
    expect(component.props().option).toEqual(option);
    expect(component.props().style).toEqual({ width: 100 });
    expect(component.props().className).toBe('');
    expect(component.props().notMerge).toEqual(true);
    expect(component.props().lazyUpdate).toEqual(true);
    expect(component.props().theme).toEqual('test_theme');
    expect(typeof component.props().onChartReady).toEqual('function');
    expect(component.props().showLoading).toEqual(true);
    expect(component.props().onEvents).toEqual({ onClick: testFunc });
    expect(component.props().opts).toEqual({ renderer: 'svg' });

    expect(testOnChartReadyFunc).toBeCalled();
  });
});
