import { pick } from '../src/utils';

jest.useFakeTimers();

describe('utils.js', () => {
  test('pick', () => {
    expect(pick({ a: 1 }, [])).toEqual({});

    expect(pick({ a: 1 }, ['b'])).toEqual({});

    expect(pick({ a: 1 }, ['a'])).toEqual({ a: 1 });

    expect(pick({ a: 1 }, ['a', 'b'])).toEqual({ a: 1 });
  });
});
