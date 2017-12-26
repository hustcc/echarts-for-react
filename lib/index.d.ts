import React, { Component } from 'react';

// Index
export interface ReactEchartsPropsTypes {
  option: object;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  style?: object;
  className?: string;
  theme?: string;
  onChartReady?: () => void;
  showLoading?: boolean;
  loadingOption?: object;
  onEvents?: object;
  echarts?: object;
}

export class ReactEcharts extends Component<ReactEchartsPropsTypes, any> {
  getEchartsInstance: () => any;
}
