import * as echarts from 'echarts';
import { EchartsReactCore, ComponentProps } from './core';

// export the Component the echarts Object.
export default class EchartsReact extends EchartsReactCore {
  echartsLib: typeof echarts;

  constructor(props: ComponentProps) {
    super(props);
    this.echartsLib = echarts;
  }
}
