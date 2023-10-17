// easy

const existInObject = (obj, prop) => {                 //vyara
  // TODO
};

/**
 * Removes a given property from an object.
 * @param {object} obj The input object.
 * @param {string} prop The prop to get rid of.
 * @returns {object} The new object.
 */
const removeProp = (obj, prop) => {                 //Georgi
  const outputObj = {...obj};
  delete outputObj[prop];
  return outputObj;
};


// medium
//START
const copy = (obj) => {                               //andi
  let newObj = {};
  for(const key in obj){
    newObj = obj;
  }
    console.log(newObj);
  };

const initialObject = { name: 'Pesho', age: 20, isAlive: true, addressstreet: 'Al Malinov' };
const resultObject = copy(initialObject);

console.log(initialObject === resultObject);
//END

const typeOfProps = (obj) => {                       //Martin
  // TODO
};

// hard

/**
 * Flattens nested objects into a single flat object.
 * @param {object} obj input object
 * @returns {object} the flattened object
 */

const flat = (obj) => {                           //Martin
  let newObj = {};

  for (const key of Object.keys(obj)) {
    if (typeof obj[key] !== 'object' || Array.isArray(obj[key]) || obj[key] === null) {
      newObj[key] = obj[key];
    } else {
      let strng = key + '.';

      for (const key1 in obj[key]) {
        strng += key1;
        newObj[strng] = obj[key][key1];
        strng = key + '.';
      }
    }
  }
  return newObj;
};

/**
 * takes an object, reconfigures it, and returns it as an array full of small arrays that contain key and value
 * @param {*} obj input object
 * @param {*} result keep the changes
 */
//START
const entries = (obj) => {                   //andi
  const result = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  console.log(result);
}
//END

export { existInObject, typeOfProps, copy, removeProp, flat, entries };
