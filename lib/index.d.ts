import React from 'react';

interface ReactEchartsProps {
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

export default class ReactEcharts<P, S> extends React.Component<P, S>{
  getEchartsInstance: () => any;
}
