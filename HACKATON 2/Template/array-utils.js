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

const entries = (arr) => {                                                     //ANTONIYA
  // TODO
};

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
  // TODO
};

const join = (separator) => {                                                 //MARTIN
  return (arr) => {
    // TODO
  };
};

/**
 * 
 * @param {Boolean} predicate  returns 
 * @returns 
 */
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


const fill = (value, start, end) => {                                         //ANTONIYA
  return (arr) => {
    // TODO
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

/**
 * 
 * @param {Function} fn  a function hat
 * @param {*} initialValue 
 * @returns 
 */
const reduce = (fn, initialValue) => {                                        //VYARA
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

const arrayFrom = ({ length }) => {                                           //ANDY
  // TODO
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
