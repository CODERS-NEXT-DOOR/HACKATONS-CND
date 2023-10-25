// ------------------------- EASY -------------------------------//

/**
 * Add an element at front of the array
 *
 * @param {any} element the element to add
 * @return {addFirstFunc} inner function
 */
const addFirst = (element) => {
  /**
   * @function addFirstFunc
   * @param {array} array an array to add element into
   * @return {array} a copy of the array with the element added
   */
  return (arr) => [element, ...arr];
};

const removeFirst = (arr) => arr.slice(1); // it does not take additional parameters to be splitted

/**
 * Add an element at the back of the array.
 * @param {any} element The element to be added
 * @returns {function} Clousre function to add the element
 */
const addLast = (element) => {                                                 //GEORGI
  /**
   * @param {array} arr 
   * @returns The final array
   */                                             
  const closure = (arr) => {
    return [...arr, element];
  };
  return closure;
};

const removeLast = (arr) => {                                                  //MARTIN
  // TODO
};

/**
 * Return the key's valid indexes of an array
 * 
 * @param {array} arr  accepts an array 
 * @returns {array}  return an array with the valid indexes
 */
const keys = (arr) => {

  return arr.reduce((accumulator, _, index) =>                               //VYARA
  {
    const result = [];
    if (index in arr) {
      result.push(index);
    }

    return result;
  }, []);

};

/**
 * Get the array's entries in the form of key-value pairs [index, element].
 * 
 * @param {array} arr The array to get the entries from.
 * @returns {array} Returns a new array with the valid entries in the form [index, element].
 */
const entries = (arr) => arr.map((element, index) => [index, element]);      //ANTONIYA


/**
 * Obtain a start and end position. Making changes to the array and returning it.
 * @param {number} start New starting point.
 * @param {number} end New ending point.
 * @returns Specific part of the main array.
 */
const slice = (start, end) => {                                                //ANDY
  return (arr) => {
    const copiedArray = arr.filter((element, index) => index >= start && index < end);
    return copiedArray;
  };
};

const concat = (arr) => {                                                      //ANTON
  return (innerArr) => {
    // TODO
  };
};






// ------------------------- MEDIUM -------------------------------//

/**
 * Create a reversed copy of the array
 * @param {array} arr The input array
 * @returns {array} The reversed array
 */
const reverse = (arr) => {                                                    //GEORGI
  const outputArr = arr.reduce((acc, current) => {
    acc.unshift(current);
    return acc;
  }, [])
  return outputArr;
};

const join = (separator) => {                                                 //MARTIN
  return (arr) => {
    // TODO
  };
};

const find = (predicate) => {                                                 //VYARA
  return (arr) => {
    return arr.reduce((accumulator, current, index) => {
      if (accumulator.found !== null) {
        return accumulator;
      }
      if (predicate(current, index)) {
        accumulator.found = current;
      }
      return accumulator;
    }, { found: null }).found;
  };
};

/**
 * Fills elements of array with value from start up to, but not including, end. 
 * This should not change the original array.
 * 
 * @param {*} value The value to fill array with.
 * @param {number} start The start position.
 * @param {number} end The end position.
 * @returns {array} Returns a closure that will fill the passed array with the value.
 */
const fill = (value, start, end) => {                                         //ANTONIYA
  return (arr) => {
    return arr.map((element, index) => {
      if (index >= start && index < end) {
        return value;
      } else {
        return element;
      }
    });
  };
};

const forEach = (fn) => {                                                     //ANDY
  return (arr) => {
    // TODO
  };
};

/**
 * Transforms each of the elements of an array using a mapping function.
 * @param {function} mapperFn The mapping function to call with the elements.
 * @returns {function} Closure function to accept the array
 */
const map = (mapperFn) => {                                                   //GEORGI   
  /**
   * @param {array} arr The input array
   * @returns {array} The mapped array.
   */                                                                                             
  const closure = (arr) => {
    const mappedArr = arr.reduce((acc, el) => {
      acc.push(mapperFn(el));
      return acc;
    }, []);
    return mappedArr;
  };
  return closure;
};


const filter = (predicate) => {                                               //MARTIN
  return (arr) => {
    // TODO
  };
};

const reduce = (fn, initialValue) => {                                        //VYARA
  return (arr) => {
    // TODO
  };
};

const reduceRight = (fn, initialValue) => {                                   //ANTONIYA
  return (arr) => {
    // TODO
  };
};

const some = (predicate) => {                                                 //ANDY
  return (arr) => {
    // TODO
  };
};

const every = (predicate) => {                                                //GEORGI
  return (arr) => {
    // TODO
  };
};

const includes = (element) => {                                               //MARTIN
  return (arr) => {
    // TODO
  };
};

const indexOf = (searchedElement) => {                                        //VYARA
  return (arr) => {
    // TODO
  };
};

/**
 * Finds and returns the index of the searched element in the array based on a predicate function. 
 * If the element does not exist in the array, return -1.
 * 
 * @param {function} predicate A function that accepts an element and (optionally) an index, and returns a boolean value.
 * @returns {number} Finds and returns the index of the searched element in the array based on a predicate function. 
 * If the element does not exist in the array, return -1.
 */
const findIndex = (predicate) => {                                            //ANTONIYA
  return (arr) => {
    const filteredArray = arr.filter((element, index) => predicate(element, index));
    if (filteredArray.length > 0) {
      return arr.indexOf(filteredArray[0]);
    } else {
      return -1;
    }
  };
};






// ------------------------- HARD -------------------------------//
/**
 * Creates an array from object by using its length property.
 * @param {number} obj An object that has the length property.
 * @returns Returns the created array with length equal to the passed object's length property, 
 * filled with undefined values.
 */
const arrayFrom = (obj) => {                                           //ANDY
  if (obj && obj.length !== undefined) {
    return Array.from({ length: obj.length });
  } else {
    return [];
  }
};

const pipe = (...fns) => {                                                    //GEORGI 
  return (input) => {
    // TODO
  };
};

const compose = (...fns) => {                                                 //MARTIN
  return (input) => {
    // TODO
  };
};

const flat = (arr) => {                                                       //VYARA
  // TODO
};

const flatMap = (mapperFn) => {                                               //ANTONIYA
  return (arr) => {
    // TODO
  };
};

const groupBy = (groupingFn) => {                                             //MARTIN
  return (arr) => {
    // TODO
  };
};

export {
  addFirst,
  removeFirst,
  addLast,
  removeLast,
  keys,
  entries,
  slice,
  concat,
  reverse,
  join,
  find,
  fill,
  forEach,
  map,
  filter,
  reduce,
  reduceRight,
  some,
  every,
  includes,
  indexOf,
  findIndex,
  arrayFrom,
  pipe,
  compose,
  flat,
  flatMap,
  groupBy,
};
