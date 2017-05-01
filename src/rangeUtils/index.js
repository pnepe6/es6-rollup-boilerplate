class RangeUtils {
  /**
   * Convert a value within a range to it's equivalent within another map range
   *
   * This function is usefull for example to convert a range like a ProgressBar range to it's equivalent in %
   * @param valueNow
   * @param valueMin
   * @param valueMax
   * @param rangeMin
   * @param rangeMax
   * @returns {number}
   */
  mapBetween(valueNow, valueMin, valueMax, rangeMin = 0, rangeMax = 100) {
    return (rangeMax - rangeMin) * (valueNow - valueMin) / (valueMax - valueMin) + rangeMin // eslint-disable-line no-mixed-operators
  }
}

export default new RangeUtils()
