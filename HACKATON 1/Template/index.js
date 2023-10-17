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
  // TODO
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

const min = () => {
  const arr = [1, 2, -2, 4, 9, 11, 0, -6, 7]
  const result = utils.min(arr)
  console.log(result) //CASE 1
};

const sum = () => {
  // TODO
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

const average = (array) => {
  let avg = 0
  for(let i = 0; i < array.length; i++){
    avg += array[i];
  }
  avg /= array.length;

  console.log(avg);
  };
  const average1 = average([1, -2, 3]);
  // => 0.6666666666666666

const isPrime = () => {
  // TODO
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

const removeProp = () => {
  // TODO
};

const copy = (obj) => {                               //andi
  let newObj = {};
  for(const key in obj){
    newObj = obj;
  }
    console.log(newObj);
  };
const initialObject = { name: 'Pesho', age: 20, isAlive: true, addressstreet: 'Al Malinov' };
const resultObject = copy(initialObject);
console.log(initialObject === resultObject);

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

const entries = (obj) => {                   //andi
  const result = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  console.log(result);
}
const result = entries({ a: 5, b: 6, c: 7 });
// => [ [ 'a', 5 ], [ 'b', 6 ], [ 'c', 7 ] ]

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

const replace = () => {
  // TODO
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
  const result1 = utils.isMinLength("asd", 2);
  const result2 = utils.isMinLength("asd", 4);
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
const result = sumNumbersFromString('2 4 5 4 10'); 
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
join();
// indexOf();
// filter();
// zip();
// arrays();

// Math

min();
// sum();
// average();
// pow();
// isPrime();
// swapWholeAndRemainder();
// math();

// Objects

// existInObject();
// removeProp();
// copy();
// typeOfProps();
// flat();
// entries();
// objects();

// Strings

// slice();
// repeat();
// capitalize();
// replace();
// split();
// trim();
// strings();

// Expressions

// isMinLength();
// isMaxLength();
// isIn();
// isArrayOfType();
areValidNumbers();
// sumNumbersFromString();
// expressions();
