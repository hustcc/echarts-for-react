import React from 'react';
import echarts from 'echarts';

import Core from './core';

//const Chart = props => (
//  <Core {...props} echarts={echarts} />
//);

export default class Chart extends React.Component {

	render = () => (
		<Core {...this.props} ref="core" echarts={echarts} />
	)
	getEchartsInstance = () =>this.refs.core.getEchartsInstance();

}
