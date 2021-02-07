import { isString } from '../../src/helper/is-string';

describe('is-function', () => {
  it('isFunction', () => {
    expect(isString(1)).toBe(false);
    expect(isString('')).toBe(true);
    expect(isString(true)).toBe(false);
    expect(isString(() => {})).toBe(false);
  });
});
