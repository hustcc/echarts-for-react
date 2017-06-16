'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _elementResizeEvent = require('element-resize-event');

var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactEcharts = function (_React$Component) {
  _inherits(ReactEcharts, _React$Component);

  function ReactEcharts(props) {
    _classCallCheck(this, ReactEcharts);

    var _this = _possibleConstructorReturn(this, (ReactEcharts.__proto__ || Object.getPrototypeOf(ReactEcharts)).call(this, props));

    _this.getEchartsInstance = function () {
      return _this.echartsInstance.getInstanceByDom(_this.echartsElement) || _this.echartsInstance.init(_this.echartsElement, _this.props.theme);
    };

    _this.bindEvents = function (instance, events) {
      var _loopEvent = function _loopEvent(eventName) {
        // ignore the event config which not satisfy
        if (typeof eventName === 'string' && typeof events[eventName] === 'function') {
          // binding event
          instance.off(eventName);
          instance.on(eventName, function (param) {
            events[eventName](param, instance);
          });
        }
      };

      for (var eventName in events) {
        if (Object.prototype.hasOwnProperty.call(events, eventName)) {
          _loopEvent(eventName);
        }
      }
    };

    _this.renderEchartDom = function () {
      // init the echart object
      var echartObj = _this.getEchartsInstance();
      // set the echart option
      echartObj.setOption(_this.props.option, _this.props.notMerge || false, _this.props.lazyUpdate || false);
      // set loading mask
      if (_this.props.showLoading) echartObj.showLoading(_this.props.loadingOption || null);else echartObj.hideLoading();

      return echartObj;
    };

    _this.echartsInstance = _this.props.echarts; // the echarts object.
    _this.echartsElement = null; // echarts div element
    return _this;
  }

  // first add


  _createClass(ReactEcharts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var echartObj = this.renderEchartDom();
      var onEvents = this.props.onEvents || {};

      this.bindEvents(echartObj, onEvents);
      // on chart ready
      if (typeof this.props.onChartReady === 'function') this.props.onChartReady(echartObj);

      // on resize
      (0, _elementResizeEvent2['default'])(this.echartsElement, function () {
        echartObj.resize();
      });
    }

    // update

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderEchartDom();
      this.bindEvents(this.getEchartsInstance(), this.props.onEvents || []);
    }

    // remove

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.echartsElement) {
        // if elementResizeEvent.unbind exist, just do it.
        if (typeof _elementResizeEvent2['default'].unbind === 'function') {
          _elementResizeEvent2['default'].unbind(this.echartsElement);
        }
        this.echartsInstance.dispose(this.echartsElement);
      }
    }
    // return the echart object


    // bind the events


    // render the dom

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.props.style || {
        height: '300px'
      };
      // for render
      return _react2['default'].createElement('div', {
        ref: function ref(e) {
          _this2.echartsElement = e;
        },
        style: style,
        className: this.props.className
      });
    }
  }]);

  return ReactEcharts;
}(_react2['default'].Component);

exports['default'] = ReactEcharts;


ReactEcharts.propTypes = {
  option: _propTypes2['default'].object.isRequired, // eslint-disable-line react/forbid-prop-types
  echarts: _propTypes2['default'].object.isRequired, // eslint-disable-line react/forbid-prop-types
  notMerge: _propTypes2['default'].bool,
  lazyUpdate: _propTypes2['default'].bool,
  style: _propTypes2['default'].object, // eslint-disable-line react/forbid-prop-types
  className: _propTypes2['default'].string,
  theme: _propTypes2['default'].string,
  onChartReady: _propTypes2['default'].func,
  showLoading: _propTypes2['default'].bool,
  loadingOption: _propTypes2['default'].object, // eslint-disable-line react/forbid-prop-types
  onEvents: _propTypes2['default'].object // eslint-disable-line react/forbid-prop-types
};

ReactEcharts.defaultProps = {
  echarts: {},
  notMerge: false,
  lazyUpdate: false,
  style: { height: '300px' },
  className: '',
  theme: null,
  onChartReady: function onChartReady() {},
  showLoading: false,
  loadingOption: null,
  onEvents: {}
};