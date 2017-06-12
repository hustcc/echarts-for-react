import React from 'react';
import echarts from 'echarts';

import Core from './core';

const Chart = props => (
  <Core {...props} echarts={echarts} />
);

export default Chart;
