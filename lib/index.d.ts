/// <reference types="react" />

import * as React from 'react';

type Func = (...args: any[]) => any;

interface EventMap {
  [key: string]: Func,
}

interface ObjectMap {
  [key: string]: any,
}

// Index
export interface ReactEchartsPropsTypes {
  option: ObjectMap;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  style?: ObjectMap;
  className?: string;
  theme?: string | null;
  onChartReady?: Func;
  showLoading?: boolean;
  loadingOption?: ObjectMap;
  onEvents?: EventMap;
  echarts?: object;
}

export default class ReactEcharts extends React.Component<ReactEchartsPropsTypes, any>{}
