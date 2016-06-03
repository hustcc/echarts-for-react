'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementResizeEvent = require('element-resize-event');

var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactEcharts = _react2.default.createClass({
    displayName: 'ReactEcharts',

    propTypes: {
        option: _react2.default.PropTypes.object.isRequired,
        height: _react2.default.PropTypes.number.isRequired,
        // theme: React.PropTypes.string, TODO
        onChartReady: _react2.default.PropTypes.func,
        showLoading: _react2.default.PropTypes.bool,
        onEvents: _react2.default.PropTypes.object
    },
    // first add
    componentDidMount: function componentDidMount() {
        var echartObj = this.renderEchartDom();
        var onEvents = this.props.onEvents || [];

        var _loop = function _loop(eventName) {
            // ignore the event config which not satisfy
            if (typeof eventName === 'string' && typeof onEvents[eventName] === 'function') {
                // binding event
                echartObj.on(eventName, function (param) {
                    onEvents[eventName](param, echartObj);
                });
            }
        };

        for (var eventName in onEvents) {
            _loop(eventName);
        }
        // on chart ready
        if (typeof this.props.onChartReady === 'function') this.props.onChartReady(echartObj);

        // on resize
        (0, _elementResizeEvent2.default)(this.refs.echartsDom, function () {
            echartObj.resize();
        });
    },

    // update
    componentDidUpdate: function componentDidUpdate() {
        this.renderEchartDom();
    },

    // remove
    componentWillUnmount: function componentWillUnmount() {
        _echarts2.default.dispose(this.refs.chart);
    },

    // render the dom
    renderEchartDom: function renderEchartDom() {
        // init the echart object
        var echartObj = _echarts2.default.getInstanceByDom(this.refs.echartsDom) || _echarts2.default.init(this.refs.echartsDom);
        // set the echart option
        echartObj.setOption(this.props.option);

        // set loading mask
        if (this.props.showLoading) echartObj.showLoading();else echartObj.hideLoading();

        return echartObj;
    },
    render: function render() {
        var height = this.props.height;
        // for render

        return _react2.default.createElement('div', { ref: 'echartsDom',
            style: { height: height } });
    }
});
exports.default = ReactEcharts;