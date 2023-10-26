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
 * @author Georgi Popov <gwvr028@gmail.com>
 * @param {any} element The element to be added
 * @returns {function} Clousre function to add the element
 */
const addLast = (element) => {                                                 //GEORGI
  /**
   * @param {array} arr 
   * @returns The final array
   */                                             
  const closure = (arr) => [...arr, element];
  return closure;
};

/**
 * Removes the last element of the array.
 * 
 * @author Martin Andreev <xxdead_worldxx@abv.bg>
 * @param {array} arr The array to remove the last element of.
 * @returns The final array.
 */
const removeLast = (arr) => arr.slice(0, -1);                                  //MARTIN


/**
 * Return the key's valid indexes of an array
 * 
 * @author Vyara Delcheva <valentinesbyv@yahoo.com>
 * @param {array} arr  accepts an array 
 * @returns {array}  return an array with the valid indexes
 */
const keys = (arr) => {

  /**
 * Creates a new array containing the indices of defined elements in the input array
 *
 * @param {Array} arr - the input array to extract indices from
 * @returns {Array} an array containing the indices of defined elements in the input array
 */
 
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
 * @author Andrey Raychev <andreyraychev27@gmail.com>
 * @param {number} start New starting point.
 * @param {number} end New ending point.
 * @returns Specific part of the main array.
 */
const slice = (start, end) => {                                                //ANDY
  /**
   * @function slice
   * @param {array} arr an array to add element into
   * @return {array} a copy of the array with the element added
   */
  return (arr) => {
    const copiedArray = arr.filter((element, index) => index >= start && index < end);
    return copiedArray;
  };
};

/**
 * Concatenates the elements from one array with the elements of another creating a result array with all the elements.
 * @param {array} arr The array to concatenate with.
 * @returns {function} Returns a closure that will concatenate the passed inner array with the already received outer.
 */
const concat = (arr) => {
  /**
   * @function concat
   * @param {array} innerArr an array to add element into
   * @return {array} a copy of two arrays merged into one
   */
  (innerArr) => [...arr, ...innerArr]};            //ANTON / Andy 






// ------------------------- MEDIUM -------------------------------//

/**
 * Create a reversed copy of the array
 * @author Georgi Popov <gwvr028@gmail.com>
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

/**
 * Converts all elements in array into a string separated by separator.
 * 
 * @author Martin Andreev <xxdead_worldxx@abv.bg>
 * @param {any} separator The separator element.
 * @returns Returns a closure that will join the elements of the array with the passed separator.
 */
const join = (separator) => {                                                 //MARTIN
  /**
   * @function nestedFn
   * @returns {string} the final result
   */
  return (arr) => {
    return arr.reduce((acc, el) => acc + el + separator, '').slice(0, -1);
  };
};

/**
 * Finds the first element in an array using a predicate function or returns null if it fails
 * 
 * * @author Vyara Delcheva <valentinesbyv@yahoo.com>
 * @param {Boolean} predicate  returns true or false. The closer uses it to evaluate it's expressions
 * @returns {closure} the first element that mathes the predicate's conditions. Otherwise returns null.
 */
const find = (predicate) => {  
  
  /**
 * Find the first element in the array that matches the provided predicate
 *
 
 * @param {Array} arr - the input array to search within
 * @param {Function} predicate - a function that tests each element for a condition
 * @returns {*} the first element in the array that matches the predicate, or null if no match is found
 */                                                                                                          //VYARA
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
 * @author Andrey Raychev <andreyraychev27@gmail.com>
 * @param {*} fn The function to call with the elements. 
 * @returns Returns a closure that will iterate over the passed array and will call the received function 
 * with each of the elements. This function does not return anything.
 */
const forEach = (fn) => {                                                     //ANDY
    /**
   * @function forEach
   * @param {array} arr an array to add element into
   * @return {string} number of elements
   */
    return (arr) => {
      arr.forEach(fn);
    };
  }
  function printElement(element) {
    console.log("Element:", element);
  };

/**
 * Transforms each of the elements of an array using a mapping function.
 * @author Georgi Popov <gwvr028@gmail.com>
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

/**
 * Iterates over elements of collection, returning an array of all elements the passed function returns truthy for.
 * 
 * @author Martin Andreev <xxdead_worldxx@abv.bg>
 * @param {function} predicate The function that accepts an element and (optionally) an index, and returns a boolean value.
 * @returns Returns a closure that will iterate over the passed array and will call the received predicate function with each of the elements.
 */
const filter = (predicate) => {                                               //MARTIN
  /**
   * @function nestedFn
   * @returns {array} the final result as array
   */
  return (arr) => {
    return arr.reduce((acc, el) => {
      if (predicate(el)) {
          acc.push(el);
      }
      return acc;
  }, []);
  };
};

/**
 * Creates a curried reducer function for arrays by applying a given reducer function and an initial value
 *
 * @author Vyara Delcheva <valentinesbyv@yahoo.com>
 * @param {Function} fn - the reducer function that takes an accumulator and an array element and returns a new accumulator
 * @param {*} initialValue - an initial value to start the reduction process
 * @returns {Function} a curried function that, when provided an array, reduces its elements using the specified reducer function and initial value
 */
const reduce = (fn, initialValue) => {    
   /**
    * Returns the new acumulator (the result of Function fn's operations)
    * @param {array} array every element is being acumulated by the map function 
    * @returns {accumulator} the new acumulator is being returned as it contains the result from fn's actions
    * */                                   //VYARA
  return (arr) =>
  {
    let acc = initialValue;
    arr.map((el) =>
    {
        acc= fn(acc,el);
    });

    return acc;
  }
};

/**
 * Iterates over elements of collection backwards and reducing all of them in a single value
 * 
 * @param {function} fn The reducer function that will accept an accumulator 
 * and the next element and will return the updated accumulator.
 * 
 * @author Antoniya Asenova <tonii.asenova@gmail.com>
 * @param {*} initialValue The accumulator's initial value.
 * @returns {array} Returns a closure that will iterate over the passed array in reverse order 
 * and will call the received reducer function with the accumulator variable and the current element. 
 * Return the accumulator at the end.
 */
const reduceRight = (fn, initialValue) => {                                   //ANTONIYA
  return (arr) => {
    const internalReduce = (index, accumulator) => {
      if (index < 0) {
        return accumulator;
      }
      const updatedAccumulator = fn(accumulator, arr[index]);
      return internalReduce(index - 1, updatedAccumulator);
    };

    return internalReduce(arr.length - 1, initialValue);
  };
};

/**
 * Iterates over elements of a collection and returns the result.
 * @author Andrey Raychev <andreyraychev27@gmail.com>
 * @param {number} predicate A function that accepts an element and an index, and returns a boolean value.
 * @returns Returns a closure that will iterate over the passed array.
 */
const some = (predicate) => {                                                 //ANDY
  /**
   * @function some
   * @param {array} arr an array to add element into
   * @return {boolean} true or false
   */
  return (arr) => {
    return arr.reduce(
      (result, element, index) => result || predicate(element, index), false);
  };
};

/**
 * Iterates over elements of a collection and returns true
 * if all the elements pass the predicate function's condition. Otherwise return false.
 * @author Georgi Popov <gwvr028@gmail.com>
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


/**
 * Iterates over elements of a collection and returns true/false if the searched element is/isn't one of them.
 * 
 * @author Martin Andreev <xxdead_worldxx@abv.bg>
 * @param {any} element The searched element
 * @returns {nestedFn} Returns a closure that will iterate over the passed array in and will check if the searched element is there.
 */
const includes = (element) => {                                               //MARTIN
  /**
   * @function nestedFn
   * @returns {boolean} the boolean
   */
  return (arr) => {
    let theSearchedElExists = false;

    arr.forEach((item) => {
        if (element === item) {
            theSearchedElExists = true;
        }
    });

    return theSearchedElExists;
  };
};

/*
Test:
console.log(includes(4)([2, 5, 6, 8, 12, 4, 3, 5]));
*/


/**
 * Creates a closure function that finds and returns the first index of the searched element in an array using map and filter
 *
 * @author Vyara Delcheva <valentinesbyv@yahoo.com>
 * @param {any} searchedElement - The element to search for in the array.
 * @returns {(arr: any[]) => number} a closure function that, when given an array, iterates over the array and checks if the searched element exists using map and filter.
 * 
 */
const indexOf = (searchedElement) => {                                        //VYARA
  /**
   * Searches for the first occurrence of the searched element in the array using map and filter
   *
   * @param {any[]} arr - the array to search for the element.
   * @returns {number} the index of the first occurrence of the element, or -1 if not found
   */
  return (arr) => {
    const foundIndices = arr
      .map((element, index) => (element === searchedElement ? index : -1))
      .filter((index) => index !== -1);

    return foundIndices.length > 0 ? foundIndices[0] : -1;
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
 * @author Andrey Raychev <andreyraychev27@gmail.com>
 * @param {number} obj An object that has the length property.
 * @returns Returns the created array with length equal to the passed object's length property, 
 * filled with undefined values.
 */
const arrayFrom = (obj) => {                                           //ANDY
  /**
   * @function arrayFrom
   * @param {obj} obj an object that keeps the length
   * @return {array} return a array full with undefined
   */
  if (obj && obj.length !== undefined) {
    return Array.from({ length: obj.length });
  } else {
    return [];
  }
};

/**
 * Accepts any number of functions and creates a sequence where the output of the last function becomes the input for the next.
 * @author Georgi Popov <gwvr028@gmail.com>
 * @param  {array} fns The spead functions to pipe.
 * @returns {function} Closure that will iterate over the passed array of functions and will call the each of
 * them with the output of the last.
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

/**
 * Accepts any number of functions and creates a sequence where the output of the last function becomes the input for the next.
 * 
 * @author Martin Andreev <xxdead_worldxx@abv.bg>
 * @param  {...Function} fns the input function
 * @returns {nestedFn} the nested function
 */
const compose = (...fns) => {                                                 //MARTIN
  /**
   * @function nestedFn
   * @returns {any} the final result
   */
  let lastResult;
  return (input) => {
    fns.reverse().forEach((fn, i) => {
      if (i === 0) {
        lastResult = fn(input);
      } else {
        lastResult = fn(lastResult);
      }
    })
    return lastResult;
  };
};

/**
 * Flattens a nested array one level deep by concatenating inner arrays
 *
 * @author Vyara Delcheva <valentinesbyv@yahoo.com>
 * @param {Array} arr - the input array to be flattened.
 * @returns {Array} A new array where inner arrays are flattened one level deep
 */
const flat = (arr) => {

  /**
 * Flattens a nested array one level deep by concatenating inner arrays
 *
 * @param {Array} arr - the input array to be flattened
 * @returns {Array} a new array where inner arrays are flattened 
 */
  return arr.reduce((accumulator, current) => {                                  //VYARA
    if (Array.isArray(current)) {
      return accumulator.concat(current);
    } else {
      accumulator.push(current);
      return accumulator;
    }
  }, []);
};                                                   
  
 

/**
 * Transform each of the elements of an array using a mapping function. The mapping function must always return an array. 
 * Flat the array of arrays after the mapping function and return the result.
 * 
 * @author Antoniya Asenova <tonii.asenova@gmail.com>
 * @param {*} mapperFn The mapping function. It must return an array.
 * @returns {array} Returns a closure that will iterate over the passed array 
 * and will call the mapping function with each of the elements. Flat the result of the mapping and return it.
 */
const flatMap = (mapperFn) => {                                               //ANTONIYA
  /**
   * 
   */
  return (arr) => {
    return arr.reduce(function(acc, el) {
        const mappedArr = mapperFn(el);
        return [...acc, ...mappedArr];
    }, []);
  }
};

/**
 * Creates an object that will group the array values by a passed grouping function.
 * 
 * @author Martin Andreev <xxdead_worldxx@abv.bg>
 * @param {Function} groupingFn any function that accepts an element from the array and returns criterion to group by
 * @returns {nestedFn} the nested function
 */
const groupBy = (groupingFn) => {                                             //MARTIN
  /**
   * @function nestedFn
   * @returns {object} the final result as object
   */
  return (arr) => {
    return arr.reduce((result, item) => {
      const key = groupingFn(item);
      if (!result[key]) {
        result[key] = [];
      }

      result[key].push(item);

      return result;
    }, {});
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
