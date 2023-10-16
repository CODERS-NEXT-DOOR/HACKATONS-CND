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

const join = (array, separator = ',') => {                          //Georgi
  return "Hi World!";
  // TODO
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
