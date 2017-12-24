import React, { Component } from 'react';
import PropTypes from 'prop-types';
import elementResizeEvent from 'element-resize-event';

const isEqual = (a, b) => JSON.stringify(a) !== JSON.stringify(b);

export default class EchartsReactCore extends Component {
  constructor(props) {
    super(props);
    this.echartsInstance = this.props.echarts; // the echarts object.
    this.echartsElement = null; // echarts div element
  }

  // first add
  componentDidMount() {
    const { onEvents, onChartReady } = this.props;

    const echartObj = this.renderEchartDom();
    if (echartObj) {
      this.bindEvents(echartObj, onEvents || {});
      // on chart ready
      if (typeof onChartReady === 'function') this.props.onChartReady(echartObj);
      // on resize
      if (this.echartsElement) {
        elementResizeEvent(this.echartsElement, () => {
          echartObj.resize();
        });
      }
    }
  }

  // update
  componentDidUpdate(prevProps) {
    const echartObj = this.renderEchartDom();
    this.bindEvents(this.getEchartsInstance(), this.props.onEvents || []);

    if (!isEqual(prevProps.style, this.props.style) || !isEqual(prevProps.className, this.props.className)) {
      try {
        echartObj.resize();
      } catch (_) {}
    }
  }

  // remove
  componentWillUnmount() {
    if (this.echartsElement) {
      // if elementResizeEvent.unbind exist, just do it.
      if (typeof elementResizeEvent.unbind === 'function') {
        elementResizeEvent.unbind(this.echartsElement);
     }
      this.echartsInstance.dispose(this.echartsElement);
    }
  }
  // return the echart object
  getEchartsInstance = () => (this.echartsElement ?
    this.echartsInstance.getInstanceByDom(this.echartsElement) ||
    this.echartsInstance.init(this.echartsElement, this.props.theme) :
    false);

  // bind the events
  bindEvents = (instance, events) => {
    const _loopEvent = (eventName) => {
      // ignore the event config which not satisfy
      if (typeof eventName === 'string' && typeof events[eventName] === 'function') {
        // binding event
        instance.off(eventName);
        instance.on(eventName, (param) => {
          events[eventName](param, instance);
        });
      }
    };

    for (const eventName in events) {
      if (Object.prototype.hasOwnProperty.call(events, eventName)) {
        _loopEvent(eventName);
      }
    }
  };

  // render the dom
  renderEchartDom = () => {
    // init the echart object
    const echartObj = this.getEchartsInstance();
    if (echartObj) {
      // set the echart option
      echartObj.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || false);
      // set loading mask
      if (this.props.showLoading) echartObj.showLoading(this.props.loadingOption || null);
      else echartObj.hideLoading();

      return echartObj;
    }
  };

  render() {
    const { style = {}, className } = this.props;
    const newStyle = {
      height: 300,
      ...style,
    };
    // for render
    return (
      <div
        ref={(e) => { this.echartsElement = e; }}
        style={newStyle}
        className={`echarts-for-react-div ${className}`}
      />
    );
  }
}

EchartsReactCore.propTypes = {
  option: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  echarts: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  notMerge: PropTypes.bool,
  lazyUpdate: PropTypes.bool,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  className: PropTypes.string,
  theme: PropTypes.string,
  onChartReady: PropTypes.func,
  showLoading: PropTypes.bool,
  loadingOption: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onEvents: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

EchartsReactCore.defaultProps = {
  echarts: {},
  notMerge: false,
  lazyUpdate: false,
  style: {},
  className: '',
  theme: null,
  onChartReady: () => {},
  showLoading: false,
  loadingOption: null,
  onEvents: {},
};
