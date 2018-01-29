import React, { PureComponent } from 'react';
import { Link } from 'react-router'
import AdSense from 'react-adsense';
import Dynamic from './charts/Dynamic.jsx';

import './index.css';

export default class App extends PureComponent {
  render() {
    const { params, children } = this.props;
    return (
      <div>
        <h1> echarts-for-react {params.type} </h1>
        <h3> A very simple echarts(v3.x & v4.x) wrapper for React. <a href='https://github.com/hustcc/echarts-for-react'>hustcc/echarts-for-react</a></h3>

        <AdSense.Google client='ca-pub-7292810486004926' slot='7806394673' />

        <h4>
          <Link to="/echarts/simple">Simple demo</Link> |
          <Link to="/echarts/loading">Echarts loading</Link> |
          <Link to="/echarts/api">Echarts API</Link> |
          <Link to="/echarts/events">Echarts events</Link> |
          <Link to="/echarts/theme">Echarts theme</Link> |
          <Link to="/echarts/dynamic">Dynamic chart</Link> |
          <Link to="/echarts/map">Map chart</Link>
        </h4>
        <h4>
          <span style={{color: 'red'}}>New</span>:&nbsp;&nbsp;
          <Link to="/echarts/airport">Airport</Link> |
          <Link to="/echarts/graph">Graph</Link> |
          <Link to="/echarts/calendar">Calendar</Link> |
          <Link to="/echarts/treemap">Treemap</Link> |
          <Link to="/echarts/gauge">Gauge</Link> |
          <Link to="/echarts/gcalendar">GCalendar</Link> |
          <Link to="/echarts/lunar">Lunar</Link> |
          <Link to="/echarts/gl">gl</Link> |
          <Link to="/echarts/sunburst">Sunburst</Link> |
          <Link to="/echarts/svg">SVG</Link>
        </h4>
        { children || <Dynamic /> }

        <h3>
          Get it on GitHub!
          <a href='https://github.com/hustcc/echarts-for-react'>hustcc/echarts-for-react</a>
        </h3>
      </div>
    );
  }
}