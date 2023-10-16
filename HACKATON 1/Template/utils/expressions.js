// easy


const isMinLength = (str, minLength) => {  // TODO                //Andi

  if (str.length <= minLength) {
    console.log("false");
  } else {
    console.log("true");
  }
};
//START
const result1 = isMinLength("asd", 2);
const result2 = isMinLength("asd", 4);
//END

const isMaxLength = (str, maxLength) => null; // TODO               //Toni

// medium

const isIn = (value, possibleValues) => null; // TODO                  //vyara

const isArrayOfType = (arr, type) => null; // TODO                    //Toni

// hard

const areValidNumbers = (stringNumbers) => null; // TODO                //georgi

//START
const sumNumbersFromString = (string) => { // TODO                  //andi
  let newSting = string.split(' ').map(Number);
  let result = 0;
  for(let i = 0; i < newSting.length; i++){
    result += newSting[i]
  }
  console.log(result);
}; 
const result = sumNumbersFromString('2 4 5 4 10'); 
//END

export {
  isMinLength,
  isMaxLength,
  isIn,
  isArrayOfType,
  areValidNumbers,
  sumNumbersFromString,
};
