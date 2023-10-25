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

/**
 * Concatenates the elements from one array with the elements of another creating a result array with all the elements.
 * @param {number/string} arr The array to concatenate with.
 * @returns Returns a closure that will concatenate the passed inner array with the already received outer.
 */
const concat = (arr) => {                                                      //ANTON / Andy
  return (innerArr) => [...innerArr, ...arr];
};
// Test:
// const outerArray = [1, 2, 3];
// const innerArray = [4, 5, 6];

// const concatArrays = concat(outerArray); 
// const resultArray = concatArrays(innerArray); 
// console.log(resultArray); 






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
/**
 * Call a function with each of the elements of an array as a parameter.
 * @param {*} fn The function to call with the elements. 
 * @returns Returns a closure that will iterate over the passed array and will call the received function 
 * with each of the elements. This function does not return anything.
 */
const forEach = (fn) => {                                                     //ANDY
    return (arr) => {
      arr.forEach(fn);
    };
  }
  function printElement(element) {
    console.log("Element:", element);

  // Test:
  // const myArray = [1, 2, 3, 4, 5];
  // const caller = iterateAndCall(printElement);
  // caller(myArray);
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

/**
 * Iterates over elements of a collection and returns the result.
 * @param {number} predicate A function that accepts an element and an index, and returns a boolean value.
 * @returns Returns a closure that will iterate over the passed array.
 */
const some = (predicate) => {                                                 //ANDY
  return (arr) => {
    return arr.reduce(
      (result, element, index) => result || predicate(element, index), false);
  };
  //Test:
  // const isEven = (el) => el % 2 === 0;
  // const hasEvenNumber = some(isEven);
  // const array1 = [1, 3, 5, 7, 9];
  // const array2 = [1, 2, 3, 4, 5];
  // console.log(hasEvenNumber(array1));
  // console.log(hasEvenNumber(array2));
};

/**
 * Iterates over elements of a collection and returns true
 * if all the elements pass the predicate function's condition. Otherwise return false.
 * @param {function} predicate The test function that returns a boolean
 * @returns {function} A closure that will iterate over the passed array in and will call
 * the received predicate function with each of the elements.
 * If all of the calls return true, return true. Otherwise return false.
 */
const every = (predicate) => {                                                //GEORGI
  let output = true;
  /**
   * @param {array} arr The input array
   * @returns {boolean} The output boolean.
   */
  const closure = (arr) => {
    arr.map(el => {
      if(!predicate(el)) {
        output = !output;
      }
    });
    return output;
  };
  return closure;
};

// EVERY() FUNC TEST (IGNORE)
// const predicate = function(c) {
//   if (typeof c === 'number') {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(every(predicate)([1,2,3]))

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

/**
 * Accepts any number of functions and creates a sequence where the output of the last function becomes the input for the next.
 * @param  {array} fns The spead functions to pipe.
 * @returns {function} Closure that will iterate over the passed array of functions and will call the each of them with the output of the last.
 */
const pipe = (...fns) => {                                             //GEORGI 
  const functionsArr = [...fns].flat();   
  /**
   * @param {any} input 
   * @returns {any} The result of the last output
   */                               
  const closure = (input) => {
    return functionsArr.reduce((acc, func) => func(acc), input)
  };
  return closure;
};

// console.log(pipe([(e) => ++e, (e) => e += 10, (e) => e*3])(10))


const compose = (...fns) => {                                                 //MARTIN
  return (input) => {
    
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
