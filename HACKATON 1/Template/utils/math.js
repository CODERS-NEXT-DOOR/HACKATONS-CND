// easy

/**
 * Returns the smallest number in the array.
 * @param {array} array The array to iterate through.
 * @returns {number} The smallest number of the array.
 */
const min = (array) => {               //Georgi

  let minNum = Infinity;

  for (const num of array) {
    if (num < minNum) {
      minNum = num;
    }
  };

  return minNum;

};

/**
 * Finds the sum of all numbers in a given array
 * @param {array} array input array
 * @returns the final sum
 */
const sum = (array) => {                 //Martin
  let finalSum = 0;
  for (const num of array) {
    finalSum += +num;
  }
  return finalSum;
};

// medium
/**
 * Returns the average of all numbers in the array
 *  @param {number} avg keep the average number
 * @param {number} array get the fuction input
 */
// START
const average = (array) => { // TODO              //andi
  let avg = 0
  for (let i = 0; i < array.length; i++) {
    avg += array[i];
  }
  avg /= array.length;
};
// END

/**
 * Raises the number to the chosen power.
 * 
 * @param {number} number the base number
 * @param {number} power the power by which the number should be raised
 * @returns the number raised by the power
 */
const pow = (number, power) => {           //Toni
  let result = number;
  for (let i = 1; i < power; i++) {
    result = result * number
  }
  return result;
};

// hard

/**
 * Checks whether the number is prime.
 * @param {number} number The number to be checked.
 * @returns {boolean} True if it's prime, false otherwise.
 */
const isPrime = (number) => {                      //Georgi

  let isPrime = true;

  if (number <= 1) {
    isPrime = false;
    return isPrime;
  };

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    };
  };

  return isPrime;
};


const swapWholeAndRemainder = (number) => {                  //vyara

  let swappedNumber = number.toString();

  if (number % 1 !== 0) {
    const splitIndex = swappedNumber.indexOf('.');

    if (splitIndex !== -1) {
      const wholePart = swappedNumber.slice(0, splitIndex);
      const remainder = swappedNumber.slice(splitIndex + 1);

      swappedNumber = remainder + '.' + wholePart;
      const finalNumber = parseFloat(swappedNumber);
      console.log(finalNumber);
    }
  }
};

export { min, sum, average, pow, isPrime, swapWholeAndRemainder };
