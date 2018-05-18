
export const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

export const pick = (obj, keys) => {
  const r = {};
  keys.forEach((key) => {
    r[key] = obj[key];
  });
  return r;
};
