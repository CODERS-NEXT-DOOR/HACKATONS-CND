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

const fill = (array, value, start = 0, end = array.length) => {      //Vyara
  
  const filledArray = [];

  for(let i = start; i < end; i++)
  {
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
 * @returns Returns the new array of grouped elements.
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
