import React, { PureComponent } from 'react';

import Simple from './charts/Simple.jsx';
import Events from './charts/Events.jsx';
import Theme from './charts/Theme.jsx';
import Loading from './charts/Loading.jsx';
import Api from './charts/Api.jsx';
import Dynamic from './charts/Dynamic.jsx';
import Map from './charts/Map.jsx';
import Gl from './charts/Gl.jsx';

// v1.2.0 add 7 demo.
import Airport from './charts/Airport.jsx';
import Calendar from './charts/Calendar.jsx';
import Gauge from './charts/Gauge.jsx';
import Gcalendar from './charts/Gcalendar.jsx';
import Graph from './charts/Graph.jsx';
import Lunar from './charts/Lunar.jsx';
import Treemap from './charts/Treemap.jsx';
import Sunburst from './charts/Sunburst.jsx';
import Svg from './charts/Svg.jsx';

const Components = {
  Simple,
  Loading,
  Api,
  Events,
  Theme,
  Dynamic,
  Map,
  Airport,
  Graph,
  Calendar,
  Treemap,
  Gauge,
  Gcalendar,
  Lunar,
  Gl,
  Sunburst,
  Svg,
};

export default class Chart extends PureComponent {
  upperFirst = (s) => s.substring(0, 1).toUpperCase() + s.substring(1);

  getChartComponent = (type) => {
    const s = this.upperFirst(type);
    return Components[s] ? Components[s] : Dynamic;
  };

  render() {
    const {
      params,
    } = this.props;

    const ChartComponent = this.getChartComponent(params.type);

    return (<ChartComponent />);
  }
};
