// easy

const existInObject = (obj, prop) => {                 //vyara
  // TODO
};

/**
 * Removes a given property from an object.
 *
 * @param {object} the input object
 * @param {string} propety to get rid of
 * @returns {object} the new object
 */
const removeProp = (obj, prop) => {                 //Georgi
  const outputObj = {...obj};
  delete outputObj[prop];
  return outputObj;
};


// medium

const copy = (obj) => {                               //andi
  // TODO
};

const typeOfProps = (obj) => {                       //Martin
  // TODO
};

// hard

const flat = (obj) => {                           //Martin
  // TODO
};

const entries = (obj) => {                        //andi
  // TODO
};

export { existInObject, typeOfProps, copy, removeProp, flat, entries };
