// easy

const slice = (string, start = 0, end = string.length) => {     //Martin      
  // TODO
};

//START
  const repeat = (string, n) => {                                  //Andi
    console.log(string.repeat(n));
  };
  const stars = repeat('*', 3);
  const abc = repeat('abc', 2);
  const nothing = repeat('abc', 0);
//END

// medium

const capitalize = (string) => {                              //vyara
  // TODO
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

const split = (string, separator) => {                      //Martin
  // TODO
};



/**
 * Trims the trailing spaces from the start and the end of a given string.
 * 
 * @param {string} string the string to trim.
 * @returns the trimmed string.
 */
const trim = (string) => {                                 //Toni
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

export { slice, repeat, capitalize, replace, split, trim };
