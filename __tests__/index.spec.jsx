/* eslint-disable no-undef */
import React from 'react';
//enzyme库用来判断、操纵和遍历 ReactComponents
import {mount} from 'enzyme';
import EchartsReact from '../src';
import option from './option';


describe('index.js', () => {
  // 测试默认props
  test('default props', () => {
    // mount()借助jsdom模拟浏览器环境，并提供DOM api和生命周期的支持，方便测试HOC（高阶组件）
    // shallow()浅渲染，将组件渲染成虚拟DOM对象，不会渲染内部子组件，也无法与子组件互动
    // render()用于将React组件渲染成静态的HTML并分析生成的HTML结构

    // 渲染一个react组件
    const component = mount(<EchartsReact
      option={option}
      className="echarts-for-react-root"
    />);
    // 判断 组件是否存在
    expect(component.exists()).toBe(true);
    // 判断是否 只有一层div嵌套
    // find()会递归遍历所有子节点
    expect(component.find('div').length).toBe(1);

    // root tag
    // 获取最外层节点，判断节点名是否为div
    // getDOMNode() 获取DOM节点
    expect(component.getDOMNode().nodeName.toLowerCase()).toBe('div');
    // class name
    // 获取最外层节点，判断类名是否为 xxx
    expect(component.getDOMNode().className).toBe('echarts-for-react echarts-for-react-root');
    // style
    // 获取最外层节点，判断height是否为 300px
    expect(component.getDOMNode().style.height).toBe('300px');
    // default props
    // 对默认props的值进行判断
    // toBe和toEqual的区别：toEqual保证值相等，toBe除值相等外，还要保证是同一对象
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
  //测试实例
  test('override props', () => {
    // jest.fn()建立 mock function
    // 进行单元测试时，应该将关注点放在「测试目标」上，onChartReady 作为被依赖的function，
    // 内部发生了什么与「测试目标」无关，只需关注返回的值（return xxx）即可，
    // 不能因为 onChartReady 而影响到「测试目标」，为了减少依赖，就使用了 mock function 即 jest.fn()
    // 参考：https://medium.com/enjoy-life-enjoy-coding/jest-jojo%E6%98%AF%E4%BD%A0-%E6%88%91%E7%9A%84%E6%9B%BF%E8%BA%AB%E8%83%BD%E5%8A%9B%E6%98%AF-mock-4de73596ea6e
    const testOnChartReadyFunc = jest.fn();
    const testFunc = () => {
    };
    // not default props
    const component = mount(<EchartsReact
      option={option}
      style={{width: 100}}
      notMerge
      lazyUpdate
      theme="test_theme"
      onChartReady={testOnChartReadyFunc}
      showLoading
      onEvents={{onClick: testFunc}}
    />);

    // default props
    // 测试实例的props是否符合预期
    expect(component.props().option).toEqual(option);
    expect(component.props().style).toEqual({width: 100});
    expect(component.props().className).toBe('');
    expect(component.props().notMerge).toBe(true);
    expect(component.props().lazyUpdate).toBe(true);
    expect(component.props().theme).toBe('test_theme');
    expect(typeof component.props().onChartReady).toBe('function');
    expect(component.props().showLoading).toBe(true);
    // 这里用了toEqual而不是toBe，意思是只要值相等即可
    expect(component.props().onEvents).toEqual({onClick: testFunc});
    // 判断 testOnChartReadyFunc 被调用
    expect(testOnChartReadyFunc).toBeCalled();
  });

  test('update props', () => {
    const component = mount(<EchartsReact
      option={option}
      className="test-classname"
    />);

    expect(component.props().style).toEqual({});
    expect(component.getDOMNode().style.height).toBe('300px');
    // getDOMNode()是获取真实的DOM节点，instance() 是获取React组件实例
    // 参考：https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/instance.html
    const preId = component.instance().getEchartsInstance().id;
    // udpate props 更新传入的props
    component.setProps({
      className: 'test-classname',
      style: {height: 500},
      // notMerge:false,
    });

    component.update(); // force update

    expect(component.props().style).toEqual({height: 500});
    expect(component.getDOMNode().style.height).toBe('500px');

    expect(component.props().className).toBe('test-classname');
    // expect(component.props().notMerge).toBe(true);

    // 保证id不变
    expect(preId).toBe(component.instance().getEchartsInstance().id);
  });

  test('getEchartsInstance', () => {
    const component = mount(<EchartsReact
      className="cls"
      option={option}
    />);

    // echarts instance, id 以 ec_ 开头，如：ec_1595664672003
    expect(component.instance().getEchartsInstance().id.substring(0, 3)).toBe('ec_');
  });

  // update theme, should dispose echarts instance.
  test('update theme', () => {
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
    // theme改变后，会重建echarts实例，此时id应该不同
    expect(preId).not.toBe(component.instance().getEchartsInstance().id);
  });

  // update theme, should dispose echarts instance.
  test('update className', () => {
    const component = mount(<EchartsReact
      option={option}
    />);

    const preId = component.instance().getEchartsInstance().id;
    // udpate props
    component.setProps({
      className: 'cls',
      option: {},
    });

    component.update(); // force update
    expect(preId).toBe(component.instance().getEchartsInstance().id);
  });

  // update opts, should dispose echarts instance.
  test('update opts', () => {
    const component = mount(<EchartsReact
      option={option}
      opts={{renderer: 'svg'}}
    />);

    const preId = component.instance().getEchartsInstance().id;
    // udpate props
    component.setProps({
      opts: {renderer: 'svg'}
    });

    component.update(); // force update
    expect(preId).toBe(component.instance().getEchartsInstance().id);

    // udpate props
    component.setProps({
      opts: {renderer: 'canvas'}
    });

    component.update(); // force update
    expect(preId).not.toBe(component.instance().getEchartsInstance().id);
  });

  // update onEvents, should dispose echarts instance.
  test('update onEvents', () => {
    const onEvents = {
      click: () => {
      },
      mousemove: () => {
      },
    };
    const component = mount(<EchartsReact
      option={option}
      onEvents={onEvents}
    />);

    const preId = component.instance().getEchartsInstance().id;

    // udpate props
    component.setProps({
      onEvents,
    });

    component.update(); // force update
    expect(preId).toBe(component.instance().getEchartsInstance().id);

    // udpate props
    component.setProps({
      onEvents: {
        mousemove: () => {
        },
        click: () => {
        },
      }
    });

    component.update(); // force update
    expect(preId).not.toBe(component.instance().getEchartsInstance().id);

    // udpate props
    component.setProps({
      onEvents: {
        click: () => {
        },
      }
    });
    component.update(); // force update
    expect(preId).not.toBe(component.instance().getEchartsInstance().id);

    // to null
    component.setProps({
      onEvents: null,
    });
    component.update();
    expect(preId).not.toBe(component.instance().getEchartsInstance().id);
  });

  test('update option update', () => {
    const component = mount(<EchartsReact
      option={option}
      opts={{renderer: 'svg'}}
    />);

    const preId = component.instance().getEchartsInstance().id;
    // udpate props
    component.setProps({
      option: {...option}
    });

    component.update(); // force update
    expect(preId).toBe(component.instance().getEchartsInstance().id);

    // udpate props
    component.setProps({
      option: {}
    });

    component.update(); // force update

    expect(component.instance().getEchartsInstance().getOption().title.text).toBe(undefined);
    expect(preId).toBe(component.instance().getEchartsInstance().id);
  });

  test('shouldSetOption', () => {
    const component = mount(<EchartsReact
      option={option}
      shouldSetOption={() => false}
      className="cls"
    />);

    const preId = component.instance().getEchartsInstance().id;
    component.setProps({
      option,
    });

    component.update(); // force update
    expect(preId).toBe(component.instance().getEchartsInstance().id);
  });

  test('unmount', () => {
    const component = mount(<EchartsReact
      option={option}
      className="cls"
    />);
    // 注销组件
    component.unmount();
    expect(() => {
      // 组件注销后是获取不到实例的，所以判断是 toThrow() 抛出错误
      component.instance();
    }).toThrow();
  });
});
