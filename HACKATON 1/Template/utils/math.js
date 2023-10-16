// easy

/**
 * Returns the smallest number in the array.
 *
 * @param {array} the array to itetate through
 * @returns {array} the smallest number of the array
 */
const min = (array) => {               //Georgi
  
  let minNum = 0;

  for (const num of array) {
    if (num < minNum) {
      minNum = num;
    }
  };
  
  return minNum;

};

const sum = (array) => {                 //Martin
  // TODO
};

// medium
// START
const average = (array) => { // TODO              //andi
  let avg = 0
  for(let i = 0; i < array.length; i++){
    avg += array[i];
  }
  avg /= array.length;

  console.log(avg);
  };

  const average1 = average([1, -2, 3]);
// END
/**
 * Raises the number to the chosen power.
 *
 * @param {number} number the base number
 * @param {number} number the power by which the number should be raised
 * @returns {number} the number raised by the power
 */
const pow = (number = 2, power = 3) => {           //Toni
  let result = number;
  for(let i = 1; i<power; i++){
    result = result*number
  }
  return result;
};

// hard

const isPrime = (number) => {                              //Georgi
  // TODO
};

const swapWholeAndRemainder = (number) => {                  //vyara
  // TODO
};

export { min, sum, average, pow, isPrime, swapWholeAndRemainder };
