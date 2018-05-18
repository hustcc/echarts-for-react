/* eslint-disable no-undef */

import { isEqual, pick } from '../src/utils';

describe('utils.js', () => {
  test('isEqual', () => {
    expect(isEqual({}, {})).toBe(true);

    expect(isEqual({}, null)).toBe(false);

    expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);

    expect(isEqual({ b: 1 }, { a: 1 })).toBe(false);
  });

  test('pick', () => {
    expect(pick({ a: 1 }, [])).toEqual({});

    expect(pick({ a: 1 }, ['b'])).toEqual({});

    expect(pick({ a: 1 }, ['a'])).toEqual({ a: 1 });

    expect(pick({ a: 1 }, ['a', 'b'])).toEqual({ a: 1 });
  });
});
