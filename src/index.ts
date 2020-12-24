import * as echarts from 'echarts';
import { EchartsModule, EchartsReactCore, ReactEchartsPropsTypes } from './core';

// export the Component the echarts Object.
export default class EchartsReact extends EchartsReactCore {
  echartsLib: EchartsModule;

  constructor(props: ReactEchartsPropsTypes) {
    super(props);
    this.echartsLib = echarts;
  }
}
