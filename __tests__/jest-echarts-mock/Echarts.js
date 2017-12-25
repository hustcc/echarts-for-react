/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

/* eslint-disable */
export class Echarts {
  // 构造方法
  constructor(id, target, theme, opts) {
    this.displayName = 'EchartsInstance';
    this.id = id;
    this.target = target;
    this.theme = theme;
    this.opts = opts;
  }

  setOption = (option, ...args) => {
    this.option = option;
  };

  getOption = () => this.option;

  getWidth = () => 0;

  getHeight = () => 0;

  getDom = () => this.target;

  resize = () => {};

  dispatchAction = (action) => {};

  on = (string, handler, context) => {};

  off = (string, handler) => {};

  convertToPixel = (finder, value) => [];

  convertFromPixel = (finder, value) => [];

  containPixel = (finder, value) => false;

  showLoading = (type, opts) => {};

  hideLoading = () => {};

  getDataURI = () => '';

  getConnectedDataURL = (opts) => '';

  clear = () => {
    this.target = null;
  };

  isDisposed = () => false;

  dispose = () => {};
}
