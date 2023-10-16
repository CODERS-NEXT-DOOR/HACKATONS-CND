// easy

const slice = (string, start = 0, end = string.length) => {     //Martin      
  // TODO
};

const repeat = (string, n) => {                                  //Andi
  // TODO
};

// medium

const capitalize = (string) => {                              //vyara
  // TODO
};

const replace = (string, char, replacement) => {               //Georgi
  // TODO
};

// hard

const split = (string, separator) => {                      //Martin
  // TODO
};


/**
 * Trims the trailing spaces from the start and the end of a given string.
 *
 * @param {string} string the string to trim.
 * @return {array} the trimmed string.
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
