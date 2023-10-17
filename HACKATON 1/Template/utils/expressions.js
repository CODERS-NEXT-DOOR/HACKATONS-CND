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

/**
 * Checks if the string have the maximal given length.
 *
 * @param {string} string the string to check.
 * @param {number} number The max length.
 * @returns {boolean} returns true if the validation passes and false if it doesn't
 */
const isMaxLength = (str, maxLength) => str.length <= maxLength;              //Toni

// medium

const isIn = (value, possibleValues) =>                                    //vyara
{
    let result = false;
    
     for(let i = 0; i < possibleValues.length; i++)
     {
        if(possibleValues[i] === value)
        {
            result = true;
            break;
        }
     }
     console.log(result);
};                 

const isIn2 =(value, possibleValues) => possibleValues.includes(value);


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
