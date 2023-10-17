// easy
/**
 * 
 * @param {*} str  the string to check.
 * @param {*} minLength The min length.
 * @returns {boolean} returns true if the validation passes and false if it doesn't
 */
//START
const isMinLength = (str, minLength) => str.length <= minLength          //Andi

//END


/**
 * Checks if the string have the maximal given length.
 * 
 * @param {string} str the string to check.
 * @param {number} maxLength The max length.
 * @returns returns true if the validation passes and false if it doesn't
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
const sumNumbersFromString = (string) => {                  //andi
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
