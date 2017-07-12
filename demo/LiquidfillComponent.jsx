import React from 'react';
import ReactEcharts from '../';
require('echarts-liquidfill');

const LiquidfillComponent = React.createClass({
    propTypes: {
    },
    getOption: function() {
        var option = {
		    series: [{
		        type: 'liquidFill',
		        data: [0.6]
		    }]
		};
        return option;
    },
    render: function() {
        return (
            <div className='examples'>
                <div className='parent'>
                    <label> render a Liquidfill chart: </label>
                    <ReactEcharts
                        option={this.getOption()}
                        style={{height: '400px', width: '100%'}}
                        className='react_for_echarts' />
                </div>
            </div>
        );
    }
});

export default LiquidfillComponent;
