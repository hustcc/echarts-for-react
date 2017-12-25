/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */
/* eslint-disable */
import { Echarts } from './Echarts';

const instances = {}; // all instances
let counter = 0; // counter for instance' id

const init = (target, theme, opts) => {
  const echartsInstance = new Echarts(counter, target, theme, opts);
  // 存起来，方便取
  instances[counter] = echartsInstance;
  counter += 1;
  return echartsInstance;
};

const connect = () => {};

const disconnect = () => {};

const dispose = (target) => {
  const instance = getInstanceByDom(target);
  if (instance) instance.clear();
};

const getInstanceByDom = (target) => {
  const keys = Object.keys(instances);
  for (const key of keys) {
    if (instances[key].target === target) return instances[key];
  }
};

const registerMap = (mapName, geoJson, specialAreas) => {};

const getMap = (mapName) => ({
  geoJson: {},
  specialAreas: {},
});

const registerTheme = (themeName, theme) => {};

const graphic = {
  clipPointByRect: (points, rect) => [],
  clipRectByRect: (targetRect, rect) => ({ // 截取结果
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  }),
};

export default {
  init,
  connect,
  disconnect,
  dispose,
  getInstanceByDom,
  registerMap,
  getMap,
  registerTheme,
  graphic,
}
