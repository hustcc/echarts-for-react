export const pick = <T>(obj: T, keys: string[]): Partial<T> => {
  const r: Partial<T> = {};
  keys.forEach((key) => {
    r[key] = obj[key];
  });
  return r;
};
