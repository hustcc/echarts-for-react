/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

/* eslint-disable */

class Echarts {
  static instances = {}; // all instances
  static counter = 0; // counter for instance' id

  static init = (target, theme, opts) => {
    const echartsInstance = new Echarts(Echarts.counter, target, theme, opts);
    // 存起来，方便取
    Echarts.instances[Echarts.counter] = echartsInstance;
    Echarts.counter += 1;
    return echartsInstance;
  };

  static connect = () => {};

  static disconnect = () => {};

  static dispose = (target) => {
    const instance =  Echarts.getInstanceByDom(target);
    if (instance) instance.clear();
  };

  static getInstanceByDom = (target) =>
    Object.values(Echarts.instances).filter(i => i.target === target)[0];

  static registerMap = (mapName, geoJson, specialAreas) => {};

  static getMap = (mapName) => ({
    geoJson: {},
    specialAreas: {},
  });

  static registerTheme = (themeName, theme) => {};

  static graphic = {
    clipPointByRect: (points, rect) => [],
    clipRectByRect: (targetRect, rect) => ({ // 截取结果
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }),
  };

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

export default Echarts;