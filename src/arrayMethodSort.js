/* eslint-disable no-console */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (a, b) => {
    const strA = String(a);
    const strB = String(b);

    return strA < strB ? -1 : strA > strB ? 1 : 0;
  };

  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError(
        'The comparison function must be either a function or undefined',
      );
    }

    const undefinedCount = [];

    const nonSparseValues = this.filter((el) => {
      if (el === undefined) {
        undefinedCount.push(el);

        return false;
      }

      return true;
    });

    let n = nonSparseValues.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < n - 1; i++) {
        if (compareFunction(nonSparseValues[i], nonSparseValues[i + 1]) > 0) {
          const temp = nonSparseValues[i];

          nonSparseValues[i] = nonSparseValues[i + 1];
          nonSparseValues[i + 1] = temp;
          swapped = true;
        }
      }
      n--;
    } while (swapped);

    for (let i = 0; i < this.length; i++) {
      delete this[i];
    }

    let index = 0;

    for (const value of nonSparseValues) {
      this[index++] = value;
    }

    for (const undef of undefinedCount) {
      this[index++] = undef;
    }

    return this;
  };
}

module.exports = applyCustomSort;
