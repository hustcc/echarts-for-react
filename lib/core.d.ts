/// <reference types="react" />

import * as React from 'react';
import {ReactEchartsPropsTypes} from './index.d'

// Core
export interface ReactEchartsCorePropsTypes extends ReactEchartsPropsTypes{
  echarts: object;
}

export default class ReactEchartsCore extends React.Component<ReactEchartsCorePropsTypes, any>{}
