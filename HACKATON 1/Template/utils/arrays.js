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
  // TODO

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
  // TODO
};

const zip = (...arrays) => {                                         //Toni
  // TODO
};

export { reverse, fill, join, indexOf, filter, zip };
