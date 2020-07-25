/* eslint-disable no-undef */
// 浅复制obj中的keys
import { pick } from '../src/utils';
// 把遇到的计时器挂起，在必要时，再使用jest.runOnlyPendingTimers执行掉已经挂起的计时器
jest.useFakeTimers();
// 描述块，将多个test用例包裹在一起
describe('utils.js', () => {
  // test即it
  test('pick', () => {
    // 期望值
    // 当执行pick函数后，希望它的返回值符合我的期望
    expect(pick({ a: 1 }, [])).toEqual({});

    expect(pick({ a: 1 }, ['b'])).toEqual({});

    expect(pick({ a: 1 }, ['a'])).toEqual({ a: 1 });

    expect(pick({ a: 1 }, ['a', 'b'])).toEqual({ a: 1 });
  });
});
