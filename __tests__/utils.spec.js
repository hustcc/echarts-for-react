/* eslint-disable no-undef */

import { pick } from '../src/utils';

jest.useFakeTimers();

describe('utils.js', () => {
  test('pick', () => {
    expect(pick({ a: 1 }, [])).toEqual({});

    expect(pick({ a: 1 }, ['b'])).toEqual({});

    expect(pick({ a: 1 }, ['a'])).toEqual({ a: 1 });

    expect(pick({ a: 1 }, ['a', 'b'])).toEqual({ a: 1 });
  });

  // test('debounce', () => {
  //   jest.clearAllTimers();
  //
  //   const callback = jest.fn();
  //
  //   let f = debounce(callback, 10);
  //
  //   f(1);
  //   f(2);
  //   f(3);
  //
  //   expect(clearTimeout).toHaveBeenCalledTimes(3);
  //   expect(setTimeout).toHaveBeenCalledTimes(3);
  //   expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10);
  //
  //   expect(callback).not.toBeCalled();
  //
  //   jest.runAllTimers();
  //
  //   expect(callback).toHaveBeenCalledTimes(1);
  //   expect(callback).toHaveBeenLastCalledWith(3);
  //
  //   // default delay
  //   f = debounce(callback);
  //   f();
  //
  //   expect(setTimeout).toHaveBeenCalledTimes(4);
  //   expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 50);
  // });

  // test('debounce function', () => {
  //   const callback = jest.fn();
  //
  //   const f = debounce(callback, 100);
  //   f(); // ran
  //   jest.advanceTimersByTime(200);
  //   f(); // cancel
  //   jest.advanceTimersByTime(10);
  //   f(); // ran
  //   jest.runAllTimers();
  //   expect(callback).toHaveBeenCalledTimes(2);
  // });
});
