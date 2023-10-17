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
 * @param {number} power the power by which the number should be raised
 * @returns the number raised by the power
 */
const pow = (number, power) => {           //Toni
  let result = number;
  for(let i = 1; i<power; i++){
    result = result*number
  }
  return result;
};

// hard
/**
 * Checks whether the number is prime.
 *
 * @param {number} the number to be checked
 * @returns {boolean} true if it's prime; else - false
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
