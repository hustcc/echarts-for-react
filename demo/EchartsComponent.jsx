import React from 'react';

import SimpleChartComponent from './SimpleChartComponent.jsx';
import ChartWithEventComponent from './ChartWithEventComponent.jsx';
import ThemeChartComponent from './ThemeChartComponent.jsx';
import ChartShowLoadingComponent from './ChartShowLoadingComponent.jsx';
import ChartAPIComponent from './ChartAPIComponent.jsx';
import DynamicChartComponent from './DynamicChartComponent.jsx';
import MapChartComponent from './MapChartComponent.jsx';

import { Link } from 'react-router'

const EchartsComponent = React.createClass({
    propTypes: {
    },
    render: function() {
        if (this.props.params.type == 'simple') return (<SimpleChartComponent />);
        if (this.props.params.type == 'loading') return (<ChartShowLoadingComponent />);
        if (this.props.params.type == 'api') return (<ChartAPIComponent />);
        if (this.props.params.type == 'events') return (<ChartWithEventComponent />);
        if (this.props.params.type == 'theme') return (<ThemeChartComponent />);
        if (this.props.params.type == 'dynamic') return (<DynamicChartComponent />);
        if (this.props.params.type == 'map') return (<MapChartComponent />);
        return (<DynamicChartComponent />);
    }
});

export default EchartsComponent;