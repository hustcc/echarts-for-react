import React from 'react';

import SimpleChartComponent from './SimpleChartComponent.jsx';
import ChartWithEventComponent from './ChartWithEventComponent.jsx';
import ThemeChartComponent from './ThemeChartComponent.jsx';
import ChartShowLoadingComponent from './ChartShowLoadingComponent.jsx';
import ChartAPIComponent from './ChartAPIComponent.jsx';
import DynamicChartComponent from './DynamicChartComponent.jsx';
import MapChartComponent from './MapChartComponent.jsx';

// v1.2.0 add 7 demo.
import AirportCoordComponent from './AirportCoordComponent.jsx';
import CalendarComponent from './CalendarComponent.jsx';
import GaugeComponent from './GaugeComponent.jsx';
import GCalendarComponent from './GCalendarComponent.jsx';
import GraphComponent from './GraphComponent.jsx';
import LunarCalendarComponent from './LunarCalendarComponent.jsx';
import TreemapComponent from './TreemapComponent.jsx';
import LiquidfillComponent from './LiquidfillComponent.jsx';

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

        if (this.props.params.type == 'airport') return (<AirportCoordComponent />);
        if (this.props.params.type == 'graph') return (<GraphComponent />);
        if (this.props.params.type == 'calendar') return (<CalendarComponent />);
        if (this.props.params.type == 'treemap') return (<TreemapComponent />);
        if (this.props.params.type == 'gauge') return (<GaugeComponent />);
        if (this.props.params.type == 'gcalendar') return (<GCalendarComponent />);
        if (this.props.params.type == 'lunar') return (<LunarCalendarComponent />);
        if (this.props.params.type == 'liquid') return (<LiquidfillComponent />);
        return (<DynamicChartComponent />);
    }
});

export default EchartsComponent;