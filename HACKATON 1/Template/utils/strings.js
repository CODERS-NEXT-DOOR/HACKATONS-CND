// easy

/**
 * Cut a section of a given string and return it as a result.
 * @param {string} string input string
 * @param {number} start input starting index of the string
 * @param {number} end input ending index of the string
 * @returns the cut string
 */
const slice = (string, start = 0, end = string.length) => {     //Martin      
  let result = '';

  for (let i = start; i < end; i++) {
    result += string[i];
  }

  return result;
};

/**
 * repeat the string n times
 * @param {string} string repeated string
 * @param {number} n the number of repeats
 */
//START
const repeat = (string, n) => {                                  //Andi
  console.log(string.repeat(n));
};

//END

// medium

/**
 * 
 * @param {String} string the string that is going to be capitalized(its first letter will be upper case)
 * @returns {String} the capitalized string
 */
const capitalize = (string) => {                              //vyara

  let capitalizedString = '';
  capitalizedString += string.charAt(0)
    .toUpperCase() +
    string.slice(1)
      .toLowerCase();

  return capitalizedString;
};

/**
 * Replaces all matches for a single character pattern in a string with replacement string.
 * @param {string} string The input string.
 * @param {string} char The character to be replaced.
 * @param {string} replacement The replacement for the character.
 * @returns {string} The final string.
 */
const replace = (string, char, replacement) => {               //Georgi
  let outputString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      outputString += replacement;
    } else {
      outputString += string[i];
    };
  };
  return outputString;
};


// hard

/**
 * Splits string by separator.
 * @param {string} string input string
 * @param {string} separator input string
 * @returns the split strings
 */
const split = (string, separator) => {                      //Martin
  let finalArr = [];
  let currentStrng = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== separator) {
      currentStrng += string[i];
    } else {
      finalArr.push(currentStrng);
      currentStrng = '';
    }
  }
  finalArr.push(currentStrng);
  return finalArr;
};



/**
 * Trims the trailing spaces from the start and the end of a given string.
 * 
 * @param {string} string the string to trim.
 * @returns the trimmed string.
 */
const trim = (string) => {                                 //Toni
  let startStr = 0;
  let endStr = string.length - 1;
  let trimmedStr = '';

  while (string[startStr] === ' ') {
    startStr++
  }

  while (string[endStr] === ' ') {
    endStr--
  }

  for (let i = startStr; i <= endStr; i++) {
    trimmedStr += string[i];
  }

  return trimmedStr;
};

export { slice, repeat, capitalize, replace, split, trim };
