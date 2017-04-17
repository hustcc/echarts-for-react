'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

    _this.timeagoInstance = null;
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
      (0, _elementResizeEvent2['default'])(this.refs.echartsDom, function () {
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
      _echarts2['default'].dispose(this.refs.echartsDom);
    }

    //bind the events

  }, {
    key: 'bindEvents',
    value: function bindEvents(instance, events) {
      var _loop = function _loop(eventName) {
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
        _loop(eventName);
      }
    }
    // render the dom

  }, {
    key: 'renderEchartDom',
    value: function renderEchartDom() {
      // init the echart object
      var echartObj = this.getEchartsInstance();
      // set the echart option
      echartObj.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || false);
      // set loading mask
      if (this.props.showLoading) echartObj.showLoading(this.props.loadingOption || null);else echartObj.hideLoading();

      return echartObj;
    }
  }, {
    key: 'getEchartsInstance',
    value: function getEchartsInstance() {
      // return the echart object
      return _echarts2['default'].getInstanceByDom(this.refs.echartsDom) || _echarts2['default'].init(this.refs.echartsDom, this.props.theme);
    }
  }, {
    key: 'render',
    value: function render() {
      var style = this.props.style || {
        height: '300px'
      };
      // for render
      return _react2['default'].createElement('div', { ref: 'echartsDom',
        className: this.props.className,
        style: style });
    }
  }]);

  return ReactEcharts;
}(_react2['default'].Component);

exports['default'] = ReactEcharts;
;

ReactEcharts.propTypes = {
  option: _react2['default'].PropTypes.object.isRequired,
  notMerge: _react2['default'].PropTypes.bool,
  lazyUpdate: _react2['default'].PropTypes.bool,
  style: _react2['default'].PropTypes.object,
  className: _react2['default'].PropTypes.string,
  theme: _react2['default'].PropTypes.string,
  onChartReady: _react2['default'].PropTypes.func,
  showLoading: _react2['default'].PropTypes.bool,
  loadingOption: _react2['default'].PropTypes.object,
  onEvents: _react2['default'].PropTypes.object
};

ReactEcharts.defaultProps = {
  live: true,
  locale: 'en'
};