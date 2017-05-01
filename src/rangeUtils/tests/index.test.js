import rangeUtils from '../index';

describe('rangeUtils', () => {
  describe('mapBetween', () => {
    let valueNow;
    let valueMin;
    let valueMax;
    let rangeMin;
    let rangeMax;

    beforeAll(() => {
      valueNow = 50;
      valueMin = 0;
      valueMax = 100;
      rangeMin = 0;
      rangeMax = 100;
    });

    it('should select return 50', () => {
      expect(rangeUtils.mapBetween(
        valueNow,
        valueMin,
        valueMax,
      )).toEqual(50);
    });

    it('should select return 50', () => {
      expect(rangeUtils.mapBetween(
        0,
        -100,
        valueMax,
        rangeMin,
        rangeMax,
      )).toEqual(50);
    });

    it('should select return 50', () => {
      expect(rangeUtils.mapBetween(
        0,
        -200,
        200,
        rangeMin,
        rangeMax,
      )).toEqual(50);
    });

    it('should select return 50', () => {
      expect(rangeUtils.mapBetween(
        100,
        0,
        200,
        rangeMin,
        rangeMax,
      )).toEqual(50);
    });

    it('should select return 100', () => {
      expect(rangeUtils.mapBetween(
        100,
        0,
        200,
        0,
        200,
      )).toEqual(100);
    });
  });
});
