// easy

const isMinLength = (str, minLength) => {  // TODO                //Andi

  if (str.length <= minLength) {
    console.log("false");
  } else {
    console.log("true");
  }
};
const result1 = isMinLength("asd", 2);
const result2 = isMinLength("asd", 4);

const isMaxLength = (str, maxLength) => null; // TODO               //Toni

// medium

const isIn = (value, possibleValues) => null; // TODO                  //vyara

const isArrayOfType = (arr, type) => null; // TODO                    //Toni

// hard

const areValidNumbers = (stringNumbers) => null; // TODO                //georgi

const sumNumbersFromString = (string) => null; // TODO                  //andi

export {
  isMinLength,
  isMaxLength,
  isIn,
  isArrayOfType,
  areValidNumbers,
  sumNumbersFromString,
};
