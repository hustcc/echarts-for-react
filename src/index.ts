import * as echarts from 'echarts';
import { EChartsReactProps } from './types';
import EChartsReactCore from './core';

// export type { EChartsReactProps, EChartsReactOption, EChartsInstance };
export * from './types';

// export the Component the echarts Object.
export default class EChartsReact extends EChartsReactCore {
  constructor(props: EChartsReactProps) {
    super(props);

    // 初始化为 echarts 整个包
    this.echarts = echarts;
  }
}
