export const pick = (obj, keys) => {
  const r = {};
  keys.forEach((key) => {
    r[key] = obj[key];
  });
  return r;
};

export const debounce = (fn, delay = 0) => {
  let timer = null;

  return function (...args) {
      clearTimeout(timer);

      timer = setTimeout(() => {
          fn.apply(this, args);
      }, delay);
  };
};
