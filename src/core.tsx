import type { ECharts } from 'echarts';
import React, { PureComponent } from 'react';
import { bind, clear } from 'size-sensor';
import { pick } from './helper/pick';
import { isFunction } from './helper/is-function';
import { isString } from './helper/is-string';
import { isEqual } from './helper/is-equal';
import { EChartsReactProps, EChartsInstance } from './types';

/**
 * core component for echarts binding
 */
export default class EChartsReactCore extends PureComponent<EChartsReactProps> {
  /**
   * echarts render container
   */
  public ele: HTMLElement;

  /**
   * if this is the first time we are resizing
   */
  private isInitialResize: boolean;

  /**
   * echarts library entry
   */
  protected echarts: any;

  constructor(props: EChartsReactProps) {
    super(props);

    this.echarts = props.echarts;
    this.ele = null;
    this.isInitialResize = true;
  }

  componentDidMount() {
    this.renderNewEcharts();
  }

  // update
  componentDidUpdate(prevProps: EChartsReactProps) {
    /**
     * if shouldSetOption return false, then return, not update echarts options
     * default is true
     */
    const { shouldSetOption } = this.props;
    if (isFunction(shouldSetOption) && !shouldSetOption(prevProps, this.props)) {
      return;
    }

    // 以下属性修改的时候，需要 dispose 之后再新建
    // 1. 切换 theme 的时候
    // 2. 修改 opts 的时候
    // 3. 修改 onEvents 的时候，这样可以取消所有之前绑定的事件 issue #151
    if (
      !isEqual(prevProps.theme, this.props.theme) ||
      !isEqual(prevProps.opts, this.props.opts) ||
      !isEqual(prevProps.onEvents, this.props.onEvents)
    ) {
      this.dispose();

      this.renderNewEcharts(); // 重建
      return;
    }

    // when these props are not isEqual, update echarts
    const pickKeys = ['option', 'notMerge', 'lazyUpdate', 'showLoading', 'loadingOption'];
    if (!isEqual(pick(this.props, pickKeys), pick(prevProps, pickKeys))) {
      this.updateEChartsOption();
    }

    /**
     * when style or class name updated, change size.
     */
    if (!isEqual(prevProps.style, this.props.style) || !isEqual(prevProps.className, this.props.className)) {
      this.resize();
    }
  }

  componentWillUnmount() {
    this.dispose();
  }

  /**
   * return the echart object
   * 1. if exist, return the existed instance
   * 2. or new one instance
   */
  public getEchartsInstance(): ECharts {
    return this.echarts.getInstanceByDom(this.ele) || this.echarts.init(this.ele, this.props.theme, this.props.opts);
  }

  /**
   * dispose echarts and clear size-sensor
   */
  private dispose() {
    if (this.ele) {
      try {
        clear(this.ele);
      } catch (e) {
        console.warn(e);
      }
      // dispose echarts instance
      this.echarts.dispose(this.ele);
    }
  }

  /**
   * render a new echarts instance
   */
  private renderNewEcharts() {
    const { onEvents, onChartReady } = this.props;

    // 1. new echarts instance
    const echartsInstance = this.updateEChartsOption();

    // 2. bind events
    this.bindEvents(echartsInstance, onEvents || {});

    // 3. on chart ready
    if (isFunction(onChartReady)) onChartReady(echartsInstance);

    // 4. on resize
    if (this.ele) {
      bind(this.ele, () => {
        this.resize();
      });
    }
  }

  // bind the events
  private bindEvents(instance, events: EChartsReactProps['onEvents']) {
    function _bindEvent(eventName: string, func: Function) {
      // ignore the event config which not satisfy
      if (isString(eventName) && isFunction(func)) {
        // binding event
        instance.on(eventName, (param) => {
          func(param, instance);
        });
      }
    }

    // loop and bind
    for (const eventName in events) {
      if (Object.prototype.hasOwnProperty.call(events, eventName)) {
        _bindEvent(eventName, events[eventName]);
      }
    }
  }

  /**
   * render the echarts
   */
  private updateEChartsOption(): EChartsInstance {
    const { option, notMerge = false, lazyUpdate = false, showLoading, loadingOption = null } = this.props;
    // 1. get or initial the echarts object
    const echartInstance = this.getEchartsInstance();
    // 2. set the echarts option
    echartInstance.setOption(option, notMerge, lazyUpdate);
    // 3. set loading mask
    if (showLoading) echartInstance.showLoading(loadingOption);
    else echartInstance.hideLoading();

    return echartInstance;
  }

  /**
   * resize wrapper
   */
  private resize() {
    // 1. get the echarts object
    const echartsInstance = this.getEchartsInstance();

    // 2. call echarts instance resize if not the initial resize
    // resize should not happen on first render as it will cancel initial echarts animations
    if (!this.isInitialResize) {
      try {
        echartsInstance.resize();
      } catch (e) {
        console.warn(e);
      }
    }

    // 3. update variable for future calls
    this.isInitialResize = false;
  }

  render(): JSX.Element {
    const { style, className = '' } = this.props;
    // default height = 300
    const newStyle = { height: 300, ...style };

    return (
      <div
        ref={(e: HTMLElement) => {
          this.ele = e;
        }}
        style={newStyle}
        className={`echarts-for-react ${className}`}
      />
    );
  }
}
