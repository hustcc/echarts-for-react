import { isEqual } from '../../src/helper/is-equal';

describe('is-equal', () => {
  it('isEqual', () => {
    expect(isEqual({}, {})).toBe(true);
  });
});
