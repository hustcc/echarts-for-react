import React from 'react';
import SimpleChartComponent from './SimpleChartComponent.jsx';
import ChartWithEventComponent from './ChartWithEventComponent.jsx';

const MainPageComponent = React.createClass({
    propTypes: {
    },
    render: function() {
        return (
            <div>
                <h1> echarts-for-react </h1>
                <h3> A very simple echarts(v3.0) wrapper for react. </h3>
                <SimpleChartComponent />
                <ChartWithEventComponent />
                {false ?
                    <h3>Get it on GitHub! <a href='https://github.com/hustcc/echarts-for-react'>hustcc/echarts-for-react</a></h3>
                    :
                    <div />
                }
            </div>
        );
    }
});

export default MainPageComponent;