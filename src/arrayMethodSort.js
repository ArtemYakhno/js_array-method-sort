/* eslint-disable no-console */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (a, b) => {
    if (a === undefined && b === undefined) {
      return 0;
    }

    if (a === undefined) {
      return 1;
    }

    if (b === undefined) {
      return -1;
    }

    const strA = String(a);
    const strB = String(b);

    return strA < strB ? -1 : strA > strB ? 1 : 0;
  };

  [].__proto__.sort2 = function (originalCompare) {
    let compareFn = originalCompare;

    if (typeof originalCompare !== 'function') {
      compareFn = defaultCompare;
    } else {
      compareFn = function (a, b) {
        if (a === undefined && b === undefined) {
          return 0;
        }

        if (a === undefined) {
          return 1;
        }

        if (b === undefined) {
          return -1;
        }

        return originalCompare(a, b);
      };
    }

    const realValues = [];

    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        realValues.push(this[i]);
      }
    }

    let n = realValues.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < n - 1; i++) {
        if (compareFn(realValues[i], realValues[i + 1]) > 0) {
          const temp = realValues[i];

          realValues[i] = realValues[i + 1];
          realValues[i + 1] = temp;
          swapped = true;
        }
      }
      n--;
    } while (swapped);

    for (let i = 0; i < this.length; i++) {
      delete this[i];
    }

    for (let i = 0; i < realValues.length; i++) {
      this[i] = realValues[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
