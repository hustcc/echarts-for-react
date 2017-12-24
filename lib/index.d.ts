import React from 'react';

interface ReactEchartsProps {
  option: object;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  style?: Object;
  className?: string;
  theme?: string;
  onChartReady?: () => void;
  showLoading?: boolean;
  loadingOption?: object;
  onEvents?: object;
  echarts?: object;
}

export default class ReactEcharts extends React.Component<ReactEchartsProps, any>{
  getEchartsInstance: () => any;
}
