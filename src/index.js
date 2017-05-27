import React from 'react';
import echarts from 'echarts';
import Chart from './echarts-for-react';

const CustomChart = props => (
  <Chart {...props} echarts={echarts} />
);

export default CustomChart;
