import React, { PureComponent } from 'react';
import { udpate } from '76';
import ReactEcharts from '../../../src/index';

import echarts from 'echarts';

export default class Theme extends PureComponent {
  constructor(props) {
    super(props);
    this.registerTheme();
    this.state = {
      theme: 'my_theme',
      className: 'class_1'
    }
  }
  getOption = () => {
    return {
      title: {
        text: '阶梯瀑布图',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {      // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'    // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data:['支出','收入']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type : 'category',
        splitLine: {show:false},
        data :  ["11月1日", "11月2日", "11月3日", "11月4日", "11月5日", "11月6日", "11月7日", "11月8日", "11月9日", "11月10日", "11月11日"]
      },
      yAxis: {
        type : 'value'
      },
      series: [
        {
          name: '辅助',
          type: 'bar',
          stack: '总量',
          itemStyle: {
            normal: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            },
            emphasis: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            }
          },
          data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
          name: '收入',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
          name: '支出',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'bottom'
            }
          },
          data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
      ]
    };
  };

  registerTheme = () => {
    echarts.registerTheme('my_theme', {
      backgroundColor: '#f4cccc'
    });
    echarts.registerTheme('another_theme', {
      backgroundColor: '#eee'
    });
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === 'my_theme' ? 'another_theme' : 'my_theme',
    })
  };

  toggleClassName = () => {
    this.setState({
      className: this.state.className === 'class_1' ? 'class_2' : 'class_1',
    })
  }

  render() {
    let code = "echarts.registerTheme('my_theme', {\n" +
           "  backgroundColor: '#f4cccc'\n" +
           "});\n\n" +
           "<ReactEcharts \n" +
          "  option={this.getOption()} \n" +
          "  theme='my_theme' />";
    return (
      <div className='examples'>
        <div className='parent'>
          <label> render a echart With <strong>theme</strong>, should <strong>echarts.registerTheme(themeName, themeObj)</strong> before use.</label>
          <ReactEcharts
            option={this.getOption()}
            className={this.state.className}
            theme={this.state.theme} />
          <div>
            <button className='a_line' onClick={this.toggleTheme}>Click to Toggle theme.</button>
          </div>
          <div>
            <button className='a_line' onClick={this.toggleClassName}>Click to Toggle className.</button>
          </div>
          <label> the theme object format: https://github.com/ecomfe/echarts/blob/master/theme/dark.js</label>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    );
  }
}
