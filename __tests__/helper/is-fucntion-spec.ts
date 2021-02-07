import { isFunction } from '../../src/helper/is-function';

describe('is-function', () => {
  it('isFunction', () => {
    expect(isFunction(1)).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(() => {})).toBe(true);
  });
});
