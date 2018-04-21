/**
 * Returns whether a value is numeric.
 * @ignore
 *
 * @param  {} value - The value to test.
 *
 * @return {Boolean}
 */
export function isNumeric(value) {
  let type

  if (value == null) {
    type = value + ''
  } else {
    // Support: Android <=2.3 only (functionish RegExp)
    type =
      typeof value === 'object' || typeof value === 'function'
        ? {}[toString.call(value)] || 'object'
        : typeof value
  }

  return (
    (type === 'number' || type === 'string') &&
    // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(value - parseFloat(value))
  )
}

/**
 * Returns whether a value is even.
 * @ignore
 *
 * @param  {Number} value - The value to test.
 *
 * @return {Boolean}
 */
export function isEven(value) {
  return value % 2 === 0
}

/**
 * Returns whether a value is a float.
 * @ignore
 *
 * @param  {}  value - The value to test.
 *
 * @return {Boolean}
 */
export function isFloat(value) {
  return isNumeric(value) && !Number.isInteger(value)
}

/**
 * Returns how many fraction digits a number has.
 * @ignore
 *
 * @param  {Number} number - The number to test.
 *
 * @return {Number}
 */
export function countFractionDigits(number = 0) {
  const fractionDigits = number.toString().split('.')[1]
  return fractionDigits ? fractionDigits.length : 0
}
