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
 * Fills a specified range of an array with a given value.
 *
 * @param {Array} array - The array to be filled.
 * @param {*} value - The value to fill the array with.
 * @param {number} [start=0] - The index at which filling should begin (inclusive). Defaults to 0.
 * @param {number} [end=array.length] - The index at which filling should stop (exclusive). Defaults to the length of the input array.
 * @returns {Array} - A new array with the specified range filled with the provided value.
 */
const fill = (array, value, start = 0, end = array.length) => {          //vyara
  const filledArray = [...array]; 

  for (let i = start; i < end; i++) {
    filledArray[i] = value;
  }

  return filledArray;
};



// medium

/**
 * Converts all elements in an array into a string separated by a separator.
 * @param {array} array The array to be concatinated.
 * @param {string} separator The separator between the array elements.
 * @returns {string} The concatinated string.
 */
const join = (array, separator = ',') => {                         //Georgi

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

/**
 * Returns the index of a given element in a given array.
 * @param {array} array input array
 * @param {number} element input number
 * @returns the index of the element
 */
const indexOf = (array, element) => {                              //martin
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
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

/**
 * Takes multiple arrays as arguments and combines them into a single array of tuples.
 * 
 * @param  {...any} arrays The arrays to process.
 * @returns {array} Returns the new array of grouped elements.
 */
const zip = (...arrays) => {                                         //Toni
  let minLength = arrays[0].length;
  for (let i = 1; i < arrays.length; i++) {
    if (arrays[i].length < minLength) {
      minLength = arrays[i].length;
    }
  }

  const result = [];
  for (let i = 0; i < minLength; i++) {
    const groupedArr = [];
    for (const array of arrays) {
      groupedArr.push(array[i]);
    }
    result.push(groupedArr);
  }
  return result;
};

export { reverse, fill, join, indexOf, filter, zip };
