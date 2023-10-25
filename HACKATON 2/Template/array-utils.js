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

const addLast = (element) => {                                                 //GEORGI
  return (arr) => {
    return [...arr, element];
  };
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
  
    return arr.reduce((accumulator,_,index) =>                               //VYARA
    {
      const result = [];
     if(index in arr)
     {
        result.push(index);
     }

     return result;
    }, [] )  ;                                            
  
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

const map = (mapperFn) => {                                                   //GEORGI
  return (arr) => {
    // TODO
  };
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

const findIndex = (predicate) => {                                            //ANTONIYA
  return (arr) => {
    // TODO
  };
};






// ------------------------- HARD -------------------------------//

const arrayFrom = (objLength, value) => {                                           //ANDY
  if (objLength && objLength.length !== undefined) {
    return Array.from({ length: objLength.length }, () => value);
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
