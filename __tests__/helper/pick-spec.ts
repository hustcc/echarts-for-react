import { pick } from '../../src/helper/pick';

describe('pick', () => {
  it('pick', () => {
    const obj: { a: number; b?: number } = { a: 1 };
    expect(pick(obj, [])).toEqual({});
    expect(pick(obj, ['b'])).toEqual({});
    expect(pick(obj, ['a'])).toEqual({ a: 1 });
    expect(pick(obj, ['a', 'b'])).toEqual({ a: 1 });
  });
});
