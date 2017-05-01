import { rangeUtils, unitUtils } from '../index';

describe('Math-utils', () => {
  it('rangeUtils should be exported', () => {
    expect(rangeUtils.constructor.name).toEqual('RangeUtils');
  });
  it('unitUtils should be exported', () => {
    expect(unitUtils.constructor.name).toEqual('UnitUtils');
  });
});
