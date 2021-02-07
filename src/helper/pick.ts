/**
 * 保留 object 中的部分内容
 * @param obj
 * @param keys
 */
export function pick(obj: Record<string, unknown>, keys: string[]): Record<string, unknown> {
  const r = {};
  keys.forEach((key) => {
    r[key] = obj[key];
  });
  return r;
}
