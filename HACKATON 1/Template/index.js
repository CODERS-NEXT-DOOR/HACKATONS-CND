import * as utils from './utils/index.js';

// Arrays

const reverse = () => {
  const array = [1, 2, 3];
  const reversed = utils.reverse(array);

  console.log(reversed);
  // => [3, 2, 1]

  console.log(array);
  // => [1, 2, 3]
};

const fill = () => {
  const array = [1, 2, 3];

  const filled = utils.fill(array, 'a');
  const filledNewArr = utils.fill(Array(3), 2);
  const filledInRange = utils.fill([4, 6, 8, 10], '*', 1, 3);

  console.log(filled);
  // => ['a', 'a', 'a']

  console.log(filledNewArr);
  // => [2, 2, 2]

  console.log(filledInRange);
  // => [4, '*', '*', 10]

  console.log(array);
  // => [1, 2, 3]
  // array is not changed!
};

const join = () => {    //GEORGI
  const arr = [1, 2, 3, 4, 5];
  const outputArr = utils.join(arr, '!');
  console.log(outputArr); // CASE 1
};

const indexOf = () => {
  const finalIndex = utils.indexOf([6, 0, 0, 2], 6);
  console.log(finalIndex);
  // => 0
};

const filter = () => {
  // TODO
};

const zip = (...arrays) => {                                         
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
}
console.log(zip(['a', 'b'], [1, 2], [true, false]));
// => [ [ 'a', 1, true ], [ 'b', 2, false ] ]

const arrays = () => {
  const separators = ['-', '_', '~'];
  const array = [1, 2, 3, 4, 5, 6];

  const filled = utils.fill(array, 0, 2, 4); // [1, 2, 0, 0, 5, 6]
  const reversed = utils.reverse(filled); // [6, 5, 0, 0, 2, 1]
  const filtered = utils.filter(reversed, (x) => x % 2 === 0); // [6, 0, 0, 2]
  const index = utils.indexOf(filtered, 6); // 0
  const joined = utils.join(filtered, separators[index]); // 6-0-0-2
  const zipped = utils.zip(array, joined.split('')); // [[1, 6], [2, -], [3, 0], [4, -], [5, 0], [6, -]]

  console.log(zipped);
};

// Math

const min = () => {               //GEORGI
  const arr = [1, 2, -2, 4, 9, 11, 0, -6, 7]
  const result = utils.min(arr)
  console.log(result) //CASE 1
};

const sum = () => {
  let finalSum = utils.sum([2, 3, 4, 5, 6, 2, 4]);
  console.log(finalSum);
  // => 26
};

const pow = (number, power) => {        
  let result = number;
  for(let i = 1; i<power; i++){
    result = result*number
  }
  return result;
};
console.log(pow(3,2));
// => "9"

const average = () => {
  const average1 = [1, -2, 3];
  const average2 = [2, 3, 6];
  const average3 = [3, 5, 7];
  console.log(utils.average(average1)); // => 0.6666666666666666
  console.log(utils.average(average2)); // => 3.6666666667
  console.log(utils.average(average3)); // => 5
}

const isPrime = () => {            //GEORGI
  const num1 = 1;
  const num2 = 5;
  const num3 = 15;
  const num4 = -6;
  const num5 = 84;
  console.log(utils.isPrime(num1)) //CASE 1
  console.log(utils.isPrime(num2)) //CASE 2
  console.log(utils.isPrime(num3)) //CASE 3
  console.log(utils.isPrime(num4)) //CASE 4
  console.log(utils.isPrime(num5)) //CASE 5
};

const swapWholeAndRemainder = () => {
  // TODO
};

const math = () => {
  const array = [2, 3, 4, 5, 6, 7];

  const min = utils.min(array); // 2
  const sum = utils.sum(array); // 27
  const pow = utils.pow(min, sum); // 134217728

  const powArray = pow.toString().split('').map(Number);
  const average = utils.average(powArray).toFixed(2); // 3.89
  const swapped = utils.swapWholeAndRemainder(average); // 89.3
  const isPrime = utils.isPrime(Math.floor(swapped)); // true

  console.log(isPrime);
};

// Objects

const existInObject = () => {
  // TODO
};

const removeProp = () => {                            //GEORGI
  const obj = {
    name: 'Georgi',
    age: 35,
    drivingLicense: true
  };
  const result = utils.removeProp(obj, 'drivingLicense');
  console.log(result)
};

const copy = (obj) => {                               //andi
  const initialObject = { name: 'Pesho', age: 20, isAlive: true, addressstreet: 'Al Malinov' };
  const initialObject1 = { name: 'Andy', age: 30, isAlive: true, addressstreet: 'Grafa' };
  console.log(copy(initialObject)); // { name: 'Pesho', age: 20, isAlive: true, addressstreet: 'Al Malinov' }
  console.log(copy(initialObject1)); // { name: 'Andy', age: 30, isAlive: true, addressstreet: 'Grafa' }
  
}

const typeOfProps = () => {
  // TODO
};

const flat = () => {
  const result = utils.flat({
    name: 'Pesho',
    age: 20,
    isAlive: true,
    keyWithNullValue: null,
    keyWithArrValue: [2, 3, 5, 7, 2],
    address: { street: 'Al Malinov', number: 34 },
  });
  console.log(result);
  // => {"name":"Pesho","age":20,"isAlive":true,"keyWithNullValue":null,"keyWithArrValue":[2,3,5,7,2],"address.street":"Al Malinov","address.number":34}
};

const entries = (obj) => {                //andi
  const result ={ a: 5, b: 6, c: 7 };
  const result1 ={ a: 3, b: 10, c: 6};
  const result2 ={ a: 8, b: 2, c: 20};
  console.log(entries(result)); // => [ [ 'a', 5 ], [ 'b', 6 ], [ 'c', 7 ] ]
  console.log(entries(result1)); // => [ [ 'a', 3 ], [ 'b', 10 ], [ 'c', 6 ] ]
  console.log(entries(result2)); // => [ [ 'a', 8], [ 'b', 2 ], [ 'c', 20 ] ]
}

const objects = () => {
  const object = {
    name: 'Pesho',
    age: 20,
    isAlive: true,
    address: { street: 'Al Malinov', number: 34 },
  };

  const flatten = utils.flat(object); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov', address.number: 34 }
  const removedPropCopy = utils.removeProp(flatten, 'address.number'); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov' }
  const exactCopy = utils.copy(removedPropCopy); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov' }
  const propTypes = utils.typeOfProps(exactCopy); // ['string', 'number', 'boolean', 'string']
  const entries = utils.entries(propTypes); // [[0, 'string'], [1, 'number], [2, 'boolean'], [3, 'string']]
  const existInObject = utils.existInObject(entries, '3'); // true

  console.log(existInObject);
};

// Strings

const slice = () => {
  // TODO
};

const repeat = () => {
  // TODO
};

const capitalize = () => {
  // TODO
};

const replace = () => {                 //GEORGI
  const string = 'Txlxrik Acadxmy'
  const result = utils.replace(string, 'x', 'e')
  console.log(result) //CASE 1
};

const split = () => {
  // TODO
};

const trim = (string) => {
  let startStr = 0;
  let endStr = string.length-1;
  let trimmedStr = '';

  while(string[startStr] === ' '){
    startStr++
  }
  while(string[endStr] === ' '){
    endStr--
  }

  for(let i = startStr; i<= endStr; i++){
    trimmedStr += string[i];
  }

  return trimmedStr;
};
console.log(trim('     Telerik   '));
// => "Telerik"

const strings = () => {
  const string = utils.repeat('  home', 2); //   home  home
  const trimmed = utils.trim(string); // home  home
  const sliced = utils.slice(trimmed, 1, 8); // ome  ho
  const replaced = utils.replace(sliced, 'o', 'ri'); // rime  hri
  const capitalized = utils.capitalize(replaced); // Rime  hri
  const splitted = utils.split(capitalized, ' '); // ['Rime', '', 'hri']

  console.log(splitted);
};

// Expressions

const isMinLength = () => {
  console.log(isMinLength('asd', 2)); // Output: true
  console.log(isMinLength('asd', 4)); // Output: false
};

const isMaxLength = (str, maxLength) => str.length <= maxLength;  
console.log(isMaxLength("Telerik", 9));
// => "true"

const isIn = () => {
  // TODO
};

const isArrayOfType = (arr, type) => arr.every(element => typeof element === type); 
console.log(isArrayOfType(['apple', 4, 'cherry'], 'string'));
  // => "false" 

const areValidNumbers = () => {    //GEORGI
  const arr1 = ['1', '2', '3', '4', '5'];
  const arr2 = ['1', '2', 'dsg', '4', '5'];
  const result1 = utils.areValidNumbers(arr1);
  const result2 = utils.areValidNumbers(arr2);
  console.log(result1); // CASE 1
  console.log(result2); // CASE 2
};

const sumNumbersFromString = () => {
const result = '2 4 5 4 10'
const result1 = '3 5 6 2 20'
sumNumbersFromString(result); // 25
sumNumbersFromString(result1); // 36
};

const expressions = () => {
  const string = '1 0 1 1 0 2';

  const isMinLen = utils.isMinLength(string, 3); // true
  const isMaxLen = utils.isMaxLength(string, 11); // true
  const sum = utils.sumNumbersFromString(string); // 5

  const splitted = string.split(' ');
  const areValidNumbers = utils.areValidNumbers(splitted); // true
  const isArrayOfType = utils.isArrayOfType(splitted, 'string'); // true
  const isIn = utils.isIn('2', splitted); // true

  const validations = [
    isMinLen,
    isMaxLen,
    areValidNumbers,
    isArrayOfType,
    isIn,
  ];

  const areAllCorrect =
    validations.every((validation) => validation === true) &&
    validations.length === sum;

  console.log(areAllCorrect);
};

// Arrays

// reverse();
// fill();
// join();
// indexOf();
// filter();
// zip();
// arrays();

// Math

// min();
// sum();
// average();
// pow();
// isPrime();                              //GEORGI
// swapWholeAndRemainder();
// math();

// Objects

// existInObject();
// removeProp();                           //GEORGI
// copy();
// typeOfProps();
// flat();
// entries();
// objects();

// Strings

// slice();
// repeat();
// capitalize();
// replace();                              //GEORGI
// split();
// trim();
// strings();

// Expressions

// isMinLength();
// isMaxLength();
// isIn();
// isArrayOfType();
// areValidNumbers();
// sumNumbersFromString();
// expressions();
