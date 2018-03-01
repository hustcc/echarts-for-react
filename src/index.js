import echarts from 'echarts';
import EchartsReactCore from './core';

// export the Component the echarts Object.
export default class EchartsReact extends EchartsReactCore {
  constructor(props) {
    super(props);
    this.echartsLib = echarts;
  }
}
