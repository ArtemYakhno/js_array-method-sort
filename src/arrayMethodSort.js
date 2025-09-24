/* eslint-disable no-console */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };

  const defaultCompare = (a, b) => {
    const strA = String(a);
    const strB = String(b);

    return strA < strB ? -1 : strA > strB ? 1 : 0;
  };
}

applyCustomSort();

['b', 'a', 'c'].sort2();

module.exports = applyCustomSort;
