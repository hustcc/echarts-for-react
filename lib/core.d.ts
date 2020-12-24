/// <reference types="react" />

import * as React from 'react';
import { ReactEchartsPropsTypes } from './index.d'
import { ECharts } from 'echarts';

// Core
export interface ReactEchartsCorePropsTypes extends ReactEchartsPropsTypes{
  echarts: object;
}

declare class ReactEchartsCore extends React.Component<ReactEchartsPropsTypes, any>{
  getEchartsInstance(): ECharts;
}

export default ReactEchartsCore
