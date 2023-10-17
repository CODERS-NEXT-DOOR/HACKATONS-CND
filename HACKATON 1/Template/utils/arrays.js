// easy

/**
 * Reverse an array
 *
 * @param {array} array the array to be reversed
 * @returns {array} a new reversed copy of the array
 */
const reverse = (array) => {
  const reversed = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversed.push(array[index]);
  }

  return reversed;
};

/**
 * Creates a new array by filling it with a specified value within a specified range.
 *
 * @param {Array} array - The input array where the values will be filled.
 * @param {*} value - The value to fill the array with.
 * @param {number} [start=0] - The starting index for filling the array. Default is 0.
 * @param {number} [end=array.length] - The ending index (exclusive) for filling the array. Default is the length of the array.
 * @returns {Array} - A new array filled with the specified value within the given range.
 */
const fill = (array, value, start = 0, end = array.length) => {      //Vyara

  const filledArray = [];

  for (let i = start; i < end; i++) {
    filledArray.push(value);
  }

  return filledArray;

};

// medium

/**
 * Converts all elements in an array into a string separated by a separator.
 *
 * @param {array} array the array to be reversed
 * @param {[separator = ',']} the separators between the array elements
 * @returns the concatinated string
 */
const join = (array, separator = ',') => {                          //Georgi

  let outputString = '';
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      outputString += array[i]
    } else {
      outputString += array[i] + separator
    }

  };
  return outputString;
};


const indexOf = (array, element) => {                              //martin
  // TODO
};

// hard

/**
* Filters an array based on a provided predicate function.
*
* @param {array} array - The input array to be filtered.
* @param {function} predicate - A function that takes an array element and returns a Boolean value.
* @returns {array} - A new array containing elements that satisfy the predicate condition.
*/
const filter = (array, predicate) => {                              // Vyara
  const filteredArray = [];
  for (let item of array) {
    if (predicate(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

const zip = (...arrays) => {                                         //Toni

};

export { reverse, fill, join, indexOf, filter, zip };
