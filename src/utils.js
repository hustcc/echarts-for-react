/* eslint-disable import/prefer-default-export */
export const pick = (obj, keys) => { // 浅复制obj中的keys
  const r = {};
  keys.forEach((key) => {
    r[key] = obj[key];
  });
  return r;
};
