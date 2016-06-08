import React from 'react';
import ReactEcharts from '../lib/echarts-for-react';

const ChartShowLoadingComponent = React.createClass({
    propTypes: {
    },
    getOtion: function() {
        const option = {
            title: {
                text: '基础雷达图'
            },
            tooltip: {},
            legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
                // shape: 'circle',
                indicator: [
                   { name: '销售（sales）', max: 6500},
                   { name: '管理（Administration）', max: 16000},
                   { name: '信息技术（Information Techology）', max: 30000},
                   { name: '客服（Customer Support）', max: 38000},
                   { name: '研发（Development）', max: 52000},
                   { name: '市场（Marketing）', max: 25000}
                ]
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000, 19000],
                        name : '预算分配（Allocated Budget）'
                    },
                     {
                        value : [5000, 14000, 28000, 31000, 42000, 21000],
                        name : '实际开销（Actual Spending）'
                    }
                ]
            }]
        };
        return option;
    },
    onChartReady: function(chart) {
        setTimeout(function() {
            chart.hideLoading();
        }, 3000);
    },
    render: function() {
        let code = "onChartReady: function(chart) {\n" + 
                   "  'chart.hideLoading();\n" +
                   "}\n\n" +
                   "<ReactEcharts \n" +
                    "    option={this.getOtion()} \n" +
                    "    onChartReady={this.onChartReady} \n" +
                    "    showLoading={true} />";

        return (
            <div className='examples'>
                <div className='parent'>
                    <label> Chart loading With <strong> showLoading </strong>: (when chart ready, hide the loading mask.)</label>
                    <ReactEcharts
                        option={this.getOtion()} 
                        onChartReady={this.onChartReady} 
                        showLoading={true} />
                    <label> code below: </label>
                    <pre>
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
        );
    }
});

export default ChartShowLoadingComponent;