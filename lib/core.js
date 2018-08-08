'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fastDeepEqual = require('fast-deep-equal');

var _fastDeepEqual2 = _interopRequireDefault(_fastDeepEqual);

var _sizeSensor = require('size-sensor');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EchartsReactCore = function (_Component) {
  _inherits(EchartsReactCore, _Component);

  function EchartsReactCore(props) {
    _classCallCheck(this, EchartsReactCore);

    var _this = _possibleConstructorReturn(this, (EchartsReactCore.__proto__ || Object.getPrototypeOf(EchartsReactCore)).call(this, props));

    _this.getEchartsInstance = function () {
      return _this.echartsLib.getInstanceByDom(_this.echartsElement) || _this.echartsLib.init(_this.echartsElement, _this.props.theme, _this.props.opts);
    };

    _this.dispose = function () {
      if (_this.echartsElement) {
        try {
          (0, _sizeSensor.clear)(_this.echartsElement);
        } catch (e) {
          console.warn(e);
        }
        // dispose echarts instance
        _this.echartsLib.dispose(_this.echartsElement);
      }
    };

    _this.rerender = function () {
      var _this$props = _this.props,
          onEvents = _this$props.onEvents,
          onChartReady = _this$props.onChartReady;


      var echartObj = _this.renderEchartDom();
      _this.bindEvents(echartObj, onEvents || {});

      // on chart ready
      if (typeof onChartReady === 'function') _this.props.onChartReady(echartObj);
      // on resize
      if (_this.echartsElement) {
        (0, _sizeSensor.bind)(_this.echartsElement, function () {
          try {
            echartObj.resize();
          } catch (e) {
            console.warn(e);
          }
        });
      }
    };

    _this.bindEvents = function (instance, events) {
      var _bindEvent = function _bindEvent(eventName, func) {
        // ignore the event config which not satisfy
        if (typeof eventName === 'string' && typeof func === 'function') {
          // binding event
          // instance.off(eventName); // 已经 dispose 在重建，所以无需 off 操作
          instance.on(eventName, function (param) {
            func(param, instance);
          });
        }
      };

      // loop and bind
      for (var eventName in events) {
        if (Object.prototype.hasOwnProperty.call(events, eventName)) {
          _bindEvent(eventName, events[eventName]);
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

    _this.echartsLib = _this.props.echarts; // the echarts object.
    _this.echartsElement = null; // echarts div element
    return _this;
  }

  // first add


  _createClass(EchartsReactCore, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.rerender();
    }

    // update

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // 以下属性修改的时候，需要 dispose 之后再新建
      // 1. 切换 theme 的时候
      // 2. 修改 opts 的时候
      // 3. 修改 onEvents 的时候，这样可以取消所以之前绑定的事件 issue #151
      if (prevProps.theme !== this.props.theme || !(0, _fastDeepEqual2['default'])(prevProps.opts, this.props.opts) || !(0, _fastDeepEqual2['default'])(prevProps.onEvents, this.props.onEvents)) {
        this.dispose();

        this.rerender(); // 重建
        return;
      }

      // 当这些属性保持不变的时候，不 setOption
      var pickKeys = ['option', 'notMerge', 'lazyUpdate', 'showLoading', 'loadingOption'];
      if ((0, _fastDeepEqual2['default'])((0, _utils.pick)(this.props, pickKeys), (0, _utils.pick)(prevProps, pickKeys))) {
        return;
      }

      // 判断是否需要 setOption，由开发者自己来确定。默认为 true
      if (typeof this.props.shouldSetOption === 'function' && !this.props.shouldSetOption(prevProps, this.props)) {
        return;
      }

      var echartObj = this.renderEchartDom();
      // 样式修改的时候，可能会导致大小变化，所以触发一下 resize
      if (!(0, _fastDeepEqual2['default'])(prevProps.style, this.props.style) || !(0, _fastDeepEqual2['default'])(prevProps.className, this.props.className)) {
        try {
          echartObj.resize();
        } catch (e) {
          console.warn(e);
        }
      }
    }

    // remove

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.dispose();
    }

    // return the echart object


    // dispose echarts and clear size-sensor


    // bind the events


    // render the dom

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          className = _props.className;

      var newStyle = _extends({
        height: 300
      }, style);
      // for render
      return _react2['default'].createElement('div', {
        ref: function ref(e) {
          _this2.echartsElement = e;
        },
        style: newStyle,
        className: 'echarts-for-react ' + className
      });
    }
  }]);

  return EchartsReactCore;
}(_react.Component);

exports['default'] = EchartsReactCore;


EchartsReactCore.propTypes = {
  option: _propTypes2['default'].object.isRequired, // eslint-disable-line react/forbid-prop-types
  echarts: _propTypes2['default'].object, // eslint-disable-line react/forbid-prop-types
  notMerge: _propTypes2['default'].bool,
  lazyUpdate: _propTypes2['default'].bool,
  style: _propTypes2['default'].object, // eslint-disable-line react/forbid-prop-types
  className: _propTypes2['default'].string,
  theme: _propTypes2['default'].string,
  onChartReady: _propTypes2['default'].func,
  showLoading: _propTypes2['default'].bool,
  loadingOption: _propTypes2['default'].object, // eslint-disable-line react/forbid-prop-types
  onEvents: _propTypes2['default'].object, // eslint-disable-line react/forbid-prop-types
  opts: _propTypes2['default'].shape({
    devicePixelRatio: _propTypes2['default'].number,
    renderer: _propTypes2['default'].oneOf(['canvas', 'svg']),
    width: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].oneOf([null, undefined, 'auto'])]),
    height: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].oneOf([null, undefined, 'auto'])])
  }),
  shouldSetOption: _propTypes2['default'].func
};

EchartsReactCore.defaultProps = {
  echarts: {},
  notMerge: false,
  lazyUpdate: false,
  style: {},
  className: '',
  theme: null,
  onChartReady: function onChartReady() {},
  showLoading: false,
  loadingOption: null,
  onEvents: {},
  opts: {},
  shouldSetOption: function shouldSetOption() {
    return true;
  }
};