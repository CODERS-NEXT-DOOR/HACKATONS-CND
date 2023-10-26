import {
  addFirst,         // 1
  removeFirst,      // 2
  addLast,          // 3
  removeLast,       // 4
  keys,             // 5
  entries,          // 6
  slice,            // 7
  concat,           // 8
  reverse,          // 9
  join,             // 10
  find,             // 12
  fill,             // 13
  forEach,          // 14
  map,              // 15
  filter,           // 16
  reduce,           // 17
  reduceRight,      // 18
  some,             // 19
  every,            // 20
  includes,         // 21
  indexOf,          // 22
  arrayFrom,        // 23
  pipe,             // 24
  compose,          // 25
  flat,             // 26
  flatMap,          // 27
  groupBy,          // 28
  findIndex         // 29
} from './array-utils.js';

/*
*  Single function tests
*  Write tests for each function you have implemented
*/

const addFirstTest = () => {
  const arr = [1, 2, 3];
  const copy = addFirst(5)(arr);
  console.log(arr); // 1, 2, 3
  console.log(copy); // 5, 1, 2, 3
};
// addFirstTest();

const removeFirstTest = () => {
  const arr = [1, 2, 3, 4, 5]
  const res = removeFirst(arr)
  console.log(arr) // [1, 2, 3, 4, 5]
  console.log(res) // [2, 3, 4, 5]
}
// removeFirstTest()                             //GEORGI

const addLastTest = () => {
  const arr = [1, 2, 3, 4];
  const res = addLast(5)(arr);
  console.log(arr); // [1, 2, 3, 4]
  console.log(res); // [1, 2, 3, 4, 5]
}
// addLastTest()                                 //GEORGI

const reverseTest = () => {
  const arr = [1, 2, 3, 4, 5];
  const res = reverse(arr);
  console.log(arr) // [1, 2, 3, 4, 5]
  console.log(res) // [5, 4, 3, 2, 1]
}
// reverseTest()                                 //GEORGI

const mapTest = () => {
  const arr = [1, 2, 3, 4, 5];
  const res = arr.map((el) => ++el)
  console.log(arr) // [1, 2, 3, 4, 5]
  console.log(res) // [2, 3, 4, 5, 6]
}
// mapTest()                                     //GEORGI

const EveryTest = () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, '3', 4, 5];
  const predicate = c => typeof c === 'number' ? true : false
  const res1 = every(predicate)(arr1);
  const res2 = every(predicate)(arr2)    
  console.log(arr1); // [1, 2, 3, 4, 5]
  console.log(arr2); // [1, 2, '3', 4, 5]
  console.log(res1); // true
  console.log(res2); // false
}
// EveryTest()                                   //GEORGI

const pipeTest = () => {
  const funcArr = [(e) => ++e, (e) => e += 10, (e) => e*3];
  const res = pipe(funcArr)(1);
  console.log(res) // 36
}
// pipeTest()                                    //GEORGI

const sliceTest = () => {                        //ANDY
  const arr = [undefined, undefined, undefined, 1, 1, 1, 8, 2, 3];
  const arr1 = [3, 4, 8, 5, 7, 2];
  console.log(arr(4, 7)); // 1, 1, 8
  console.log(arr1(2, 4)); // 8, 5
};
// sliceTest();

const concatTest = () => {                        //ANDY
  const outerArray = [1, 2, 3];
  const innerArray = [4, 5, 6];
  console.log(concat(outerArray)(innerArray)); // [ 4, 5, 6, 1, 2, 3 ]
};
// concatTest();

const forEachTest = () => {                        //ANDY
  const myArray = [1, 2, 3, 4, 5];
  const caller = iterateAndCall(printElement);
  const result = caller(myArray);
  console.log(result);
  // Element: 1
  // Element: 2
  // Element: 3
  // Element: 4
  // Element: 5
};
// forEachTest();

const someTest = () => {                        //ANDY
  const isEven = (el) => el % 2 === 0;
  const hasEvenNumber = some(isEven);
  const array1 = [1, 3, 5, 7, 9];
  const array2 = [1, 2, 3, 4, 5];
  const res1 = hasEvenNumber(array1);
  const res2 = hasEvenNumber(array2);
  console.log(res1); //false
  console.log(res2); // true
};
//  someTest();

const arrayFromTest = () => {                        //ANDY
  const objWithLength = { length: 5 };
  const newArray = arrayFrom(objWithLength);
  console.log(newArray); // [ undefined, undefined, undefined, undefined, undefined ]
};
//arrayFromTest();

// removeLast:
const removeLastTest = (arr) => arr.slice(0, -1);            // Martin

const arr = ['Inter', 'Chelsea', 'Crew Alexandra', 'Monaco', 'Juventus'];

// console.log(removeLastTest(arr)); // ['Inter', 'Chelsea', 'Crew Alexandra', 'Monaco']
// console.log(arr); // ['Inter', 'Chelsea', 'Crew Alexandra', 'Monaco', 'Juventus']

// join:
const joinTest = (separator) => {                            // Martin
    return (arr) => {
        return arr.reduce((acc, el) => acc + el + separator, '').slice(0, -1);
    };
};

const separator = ('-');
const arr1 = [5, true, 'proba', false, 10, 'spacecraft', 'stamm'];
// console.log(joinTest(separator)(arr1));  // 5-true-proba-false-10-spacecraft-stamm
// console.log(arr1) // [5, true, 'proba', false, 10, 'spacecraft', 'stamm']

//filter:
const filterTest = (predicate) => {                           // Martin
    return (arr) => {
        return arr.reduce((acc, el) => {
            if (predicate(el)) {
                acc.push(el);
            }
            return acc;
        }, []);
    };
};

const predicate = x => x === 7;
const arr2 = [2, 5, 7, 6, 5, 6, 3, 7, 6, 8, 7];
// console.log(filterTest(predicate)(arr2)); // [7, 7, 7]
// console.log(arr2); // [2, 5, 7, 6, 5, 6, 3, 7, 6, 8, 7]

// includes:
const includesTest = (element) => {                            // Martin
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

const element = 'Trophy';
const arr3 = ['Juventus', 'Juve', 'Fc Juve', 'Milan', 'AC Milan'];
// console.log(includesTest(element)(arr3)); // false
// console.log(arr3); // ['Juventus', 'Juve', 'Fc Juve', 'Milan', 'AC Milan']

// compose:
const composeTest = (...fns) => {                               // Martin
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

const addOne = (num) => num + 1;
const num = 3;
const subtractOne = (num) => num - 1;
const num1 = 3;
const multiplyByTwo = (num) => num * 2;
const num2 = 3;

// console.log(composeTest(multiplyByTwo, subtractOne, addOne, addOne)(num)); // 8
// console.log(num2); // 3

// groupBy:
const groupByTest = (groupingFn) => {                            // Martin
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

const groupingFn = x => x;
const arr4 = [7, 2, 3, 7, 3, 9];
// console.log(groupByTest(groupingFn)(arr4)); // { '2': [ 2 ], '3': [ 3, 3 ], '7': [ 7, 7 ], '9': [ 9 ] }
// console.log(arr4); // [ 7, 2, 3, 7, 3, 9 ] 

const entriesTest = () => {                      //Antoniya
  const arr1 = [1,2,3,4];
  const arr2 = ["Ivan", "Pesho", "Mitko"];
  const res1 = entries(arr1);
  const res2 = entries(arr2);
  console.log(res1); // [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 3, 4 ] ]
  console.log(res2); // [ [ 0, 'Ivan' ], [ 1, 'Pesho' ], [ 2, 'Mitko' ] ]
}
// entriesTest()

const fillTest = () => {                          //Antoniya
 const arr = [2, 3, 4, 5, 2, 2, 4];
 const filledArray = fill(0, 2, 6)(arr);
 console.log(filledArray); // [2, 3, 0, 0, 0, 0, 4]
}
// fillTest();

const reduceRightTest = () => {                   //Antoniya
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = ["a", "b", "c"];
  const sumReducer = (acc, el) => acc + el;
  const concatReducer = (acc, el) => acc + el;
  const sumResult = reduceRight(sumReducer, 0)(arr1);
  const concatResult = reduceRight(concatReducer, "")(arr2);
  console.log(sumResult); // 15
  console.log(concatResult); // "cba"
}
// reduceRightTest();

const findIndexTest = () => {                      //Antoniya
  const isEven = (number) => number % 2 === 0;
  const numbers = [1, 3, 5, 7, 9, 2, 4, 6];
  const findEvenIndex = findIndex(isEven)(numbers);
  console.log(findEvenIndex); // 5
}
// findIndexTest();

const flatMapTest = () => {                         //Antoniya
  const mapperFnc = (el) => [el * 2, el * 3];
  const arr = [1,2,3];
  const flattenedArray = flatMap(mapperFnc)(arr);
  console.log(flattenedArray); // [ 2, 3, 4, 6, 6, 9 ]
}
// flatMapTest()



const keysTest = () => {                                                //vyara
  const inputArray = [1, 2, undefined, 4, undefined, 6];
  const result = keys(inputArray);

  console.log(inputArray); // [1, 2, undefined, 4, undefined, 6]
  console.log(result); // [0, 1, 3, 5]
};

// keysTest();


const findTest = () => {                                                  //vyara
  const inputArray = [1, 2, 3, 4, 5, 6];
  const isEven = (element) => element % 2 === 0;
  const result = find(isEven)(inputArray);
  console.log(inputArray);
  console.log(result);
};


// findTest();

const reduceTest = () => {                                                    //vyara
  const inputArray = [1, 2, 3, 4, 5];
  const reducer = (accumulator, current) => accumulator + current;
  const initialValue = 0;
  const result = reduce(reducer, initialValue)(inputArray);
  console.log(result);
};

// reduceTest();

 
const indexOfTest = () => {                                                   //vyara
  const inputArray = [1, 2, 3, 4, 3, 5];
  const findIndex = indexOf(3);
  const result = findIndex(inputArray);
  console.log(result);
};

// indexOfTest();
 
const flatTest = () => {                                                       //vyara
  const inputArray = [1, [2, 3], 4, [5, 6]];
  const result = flat(inputArray);
  console.log(result);
};

// flatTest();



/*
*  Composite functions tests
*/

const testOne = () => {
  const startValue = { length: 6 };
  const piped = pipe(
      arrayFrom,
      // [undefined, undefined, undefined, undefined, undefined, undefined]
      fill(1, 3, 6), // [undefined, undefined, undefined, 1, 1, 1]
      (arr) => [...arr, 8], // [undefined, undefined, undefined, 1, 1, 1, 8]
      (arr) => [...arr, 2, 3], // [undefined, undefined, undefined, 1, 1, 1, 8, 2, 3]
      slice(4, 7), // [1, 1, 8]
      removeFirst, // [1, 8]
      (arr) => [5, ...arr], // [5, 1, 8]
      reverse, // [8, 1, 5]
      map(x => x ** 2), // [64, 1, 25]
      reduce((a, b) => a + b, 0) // 90
  );

  console.log(piped(startValue));
};

//  testOne();



const testTwo = () => {
  const startValue = [
    { name: 'Ivan', age: 15 },
    { name: 'Pesho', age: 32 },
    { name: 'Pesho', age: 23 },
    { name: 'Maria', age: 19 },
  ];
  // its compose so it will run backwards
  const composed = compose(
      find(x => x > 10), // 47
      (arr) => [...arr, 9], // [ 47, 9 ]
      (str) => [str.length], // [ 47 ]
      join('&'), // 1&false&odd&2&true&even&3&false&odd&4&true&even
      flat,
      // [1, false, 'odd', 2, true, 'even', 3, false, 'odd', 4, true, 'even']
      (arr) => arr.map((el, index) => [ el, index % 2 === 1, index % 2 === 0 ? 'odd' : 'even' ]),
      /* [[1, false, 'odd'],
          [2, true, 'even'],
          [3, false, 'odd'],
          [4, true, 'even']
        ]*/
      (arr) => arr.map((_, index) => index + 1),
      fill(true, 0, 7), // [true, true, true, true]
      (arr) => [...arr, 8], // [[0, 'Ivan'], [1, 'Pesho'], [2, 'Pesho'], 8]
      entries, // [[0, 'Ivan'], [1, 'Pesho'], [2, 'Pesho']]
      removeLast, // ['Ivan', 'Pesho', 'Pesho']
      (arr) => arr.map(obj => obj.name), // ['Ivan', 'Pesho', 'Pesho', 'Maria']
      flat,
      /* [{ name: 'Ivan', age: 15 },
          { name: 'Pesho', age: 32 },
          { name: 'Pesho', age: 23 },
          { name: 'Maria', age: 19 }
        ]*/
      Object.values,
      /* [[{ name: 'Ivan', age: 15 }],
          [{ name: 'Pesho', age: 32 }, { name: 'Pesho', age: 23 }],
          [{ name: 'Maria', age: 19 }]
        ]*/
      (arr) => groupBy(obj => obj.name)(arr)
      /* {Ivan: [{ name: 'Ivan', age: 15 }],
          Pesho: [{ name: 'Pesho', age: 32 }, { name: 'Pesho', age: 23 }],
          Maria: [{ name: 'Maria', age: 19 }]} */
  );

  console.log(composed(startValue));
};

// testTwo();


const testThree = () => {
  const startValue = [
    { name: 'Ivan', grades: [2, 4, 5] },
    { name: 'Pesho', grades: [3, 2, 6] },
    { name: 'Pesho', grades: [2, 5, 2] },
  ];
  const piped = pipe(
      filter(x => x.name === 'Pesho'),
      /* [{ name: 'Pesho', grades: [3, 2, 6] },
          { name: 'Pesho', grades: [2, 5, 2] }
        ];*/
      map(x => x.grades), // [[3, 2, 6], [2, 5, 2]]
      flat, // [3, 2, 6, 2, 5, 2]
      filter(x => x < 4), // [3, 2, 2, 2]
      groupBy(x => x), // { 2: [2, 2, 2], 3: [3] }
      Object.values, // [[2, 2, 2], [3]],
      flat, // [2, 2, 2, 3]
      (arr) => [7, ...arr], // [7, 2, 2, 2, 3]
      join('-'), // 7-2-2-2-3
      (str) => str.split(''), // ['7', '-', '2', '-', '2', '-', '2', '-', '3'],
      (filter((_, index) => index < 5)),
      map((el, index) => [index + 1, el]), // [[1, '7'], [2, '-'], [3, '2'], [4, '-'], [5, '2']]
      keys, // [0, 1, 2, 3, 4]
      removeFirst, // [1, 2, 3, 4]
      reduce((a, b) => a * b, 1) // 24
  );

  console.log(piped(startValue));
};

// testThree();

