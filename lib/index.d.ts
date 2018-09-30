/// <reference types="react" />

import * as React from 'react';

type Func = (...args: any[]) => any;

interface EventMap {
  [key: string]: Func,
}

interface ObjectMap {
  [key: string]: any,
}

interface optsMap {
  devicePixelRatio?: number,
  renderer?: 'canvas' | 'svg',
  width?: number | null | undefined | 'auto',
  height?: number | null | undefined | 'auto',
}

// Index
export interface ReactEchartsPropsTypes {
  option: ObjectMap;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  style?: ObjectMap;
  className?: string;
  theme?: string | null | ObjectMap;
  onChartReady?: Func;
  showLoading?: boolean;
  loadingOption?: ObjectMap;
  onEvents?: EventMap;
  opts?: optsMap;
  shouldSetOption?: Func;
}

export default class ReactEcharts extends React.Component<ReactEchartsPropsTypes, any>{}
