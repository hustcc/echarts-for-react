/* eslint-disable no-undef */

import { pick, debounce } from '../src/utils';

describe('utils.js', () => {
  test('pick', () => {
    expect(pick({ a: 1 }, [])).toEqual({});

    expect(pick({ a: 1 }, ['b'])).toEqual({});

    expect(pick({ a: 1 }, ['a'])).toEqual({ a: 1 });

    expect(pick({ a: 1 }, ['a', 'b'])).toEqual({ a: 1 });
  });

  test('debounce', () => {
    let count = 0;
    const f = debounce((i) => { count += i; });
    f(1);
    expect(count).toEqual(0);
    f(1);
    f(1);
    setTimeout(() => {
      expect(count).toEqual(3);
    }, 20);
  });
});
