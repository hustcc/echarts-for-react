'use strict';

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementResizeEvent = require('element-resize-event');

var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReactEcharts = _react2['default'].createClass({
    displayName: 'ReactEcharts',

    propTypes: {
        option: _react2['default'].PropTypes.object.isRequired,
        notMerge: _react2['default'].PropTypes.bool,
        lazyUpdate: _react2['default'].PropTypes.bool,
        style: _react2['default'].PropTypes.object,
        className: _react2['default'].PropTypes.string,
        theme: _react2['default'].PropTypes.string,
        onChartReady: _react2['default'].PropTypes.func,
        showLoading: _react2['default'].PropTypes.bool,
        onEvents: _react2['default'].PropTypes.object
    },
    // first add
    componentDidMount: function componentDidMount() {
        var echartObj = this.renderEchartDom();
        var onEvents = this.props.onEvents || {};

        this.bindEvents(echartObj, onEvents);
        // on chart ready
        if (typeof this.props.onChartReady === 'function') this.props.onChartReady(echartObj);

        // on resize
        (0, _elementResizeEvent2['default'])(this.refs.echartsDom, function () {
            echartObj.resize();
        });
    },

    // update
    componentDidUpdate: function componentDidUpdate() {
        this.renderEchartDom();
        this.bindEvents(this.getEchartsInstance(), this.props.onEvents || []);
    },

    // remove
    componentWillUnmount: function componentWillUnmount() {
        _echarts2['default'].dispose(this.refs.echartsDom);
    },


    //bind the events
    bindEvents: function bindEvents(instance, events) {
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
    },

    // render the dom
    renderEchartDom: function renderEchartDom() {
        // init the echart object
        var echartObj = this.getEchartsInstance();
        // set the echart option
        echartObj.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || false);
        // set loading mask
        if (this.props.showLoading) echartObj.showLoading();else echartObj.hideLoading();

        return echartObj;
    },
    getEchartsInstance: function getEchartsInstance() {
        // return the echart object
        return _echarts2['default'].getInstanceByDom(this.refs.echartsDom) || _echarts2['default'].init(this.refs.echartsDom, this.props.theme);
    },
    render: function render() {
        var style = this.props.style || {
            height: '300px'
        };
        // for render
        return _react2['default'].createElement('div', { ref: 'echartsDom',
            className: this.props.className,
            style: style });
    }
});
module.exports = ReactEcharts;