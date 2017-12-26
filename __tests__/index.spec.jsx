/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import EchartsReact from '../src';
import option from './option';


describe('index.js', () => {
  test('default props', () => {
    const component = mount(<EchartsReact
      option={option}
      className="echarts-for-react-root"
    />);

    expect(component.exists()).toBe(true);

    expect(component.find('div').length).toBe(1);

    // root tag
    expect(component.getDOMNode().nodeName.toLowerCase()).toBe('div');
    // class name
    expect(component.getDOMNode().className).toBe('echarts-for-react echarts-for-react-root');
    // style
    expect(component.getDOMNode().style.height).toBe('300px');
    // default props
    expect(component.props().option).toEqual(option);
    expect(component.props().style).toEqual({});
    expect(component.props().className).toBe('echarts-for-react-root');
    expect(component.props().notMerge).toBe(false);
    expect(component.props().lazyUpdate).toBe(false);
    expect(component.props().theme).toBe(null);
    expect(typeof component.props().onChartReady).toBe('function');
    expect(component.props().showLoading).toBe(false);
    expect(component.props().onEvents).toEqual({});
  });

  test('override props', () => {
    const testOnChartReadyFunc = jest.fn();
    const testFunc = () => {};
    // not default props
    const component = mount(<EchartsReact
      option={option}
      style={{ width: 100 }}
      notMerge
      lazyUpdate
      theme="test_theme"
      onChartReady={testOnChartReadyFunc}
      showLoading
      onEvents={{ onClick: testFunc }}
    />);

    // default props
    expect(component.props().option).toEqual(option);
    expect(component.props().style).toEqual({ width: 100 });
    expect(component.props().className).toBe('');
    expect(component.props().notMerge).toBe(true);
    expect(component.props().lazyUpdate).toBe(true);
    expect(component.props().theme).toBe('test_theme');
    expect(typeof component.props().onChartReady).toBe('function');
    expect(component.props().showLoading).toBe(true);
    expect(component.props().onEvents).toEqual({ onClick: testFunc });

    expect(testOnChartReadyFunc).toBeCalled();
  });

  test('update props', () => {
    const component = mount(<EchartsReact
      option={option}
      className="test-classname"
    />);

    expect(component.props().style).toEqual({});
    expect(component.getDOMNode().style.height).toBe('300px');

    const preId = component.instance().getEchartsInstance().id;
    // udpate props
    component.setProps({
      className: 'test-classname',
      style: { height: 500 },
    });

    component.update(); // force update

    expect(component.props().style).toEqual({ height: 500 });
    expect(component.getDOMNode().style.height).toBe('500px');

    expect(component.props().className).toBe('test-classname');

    expect(preId).toBe(component.instance().getEchartsInstance().id);
  });

  test('getEchartsInstance', () => {
    const component = mount(<EchartsReact
      className="cls"
      option={option}
    />);

    // echarts instance, id 以 ec_ 开头
    expect(component.instance().getEchartsInstance().id.substring(0, 3)).toBe('ec_');
  });

  test('upadte theme', () => {
    const component = mount(<EchartsReact
      option={option}
      theme="hello"
    />);

    const preId = component.instance().getEchartsInstance().id;
    // udpate props
    component.setProps({
      theme: 'world',
    });

    component.update(); // force update
    expect(preId).not.toBe(component.instance().getEchartsInstance().id);
  });

  test('unmount', () => {
    const component = mount(<EchartsReact
      option={option}
      className="cls"
    />);

    component.unmount();
    expect(() => { component.instance(); }).toThrow();
  });
});
