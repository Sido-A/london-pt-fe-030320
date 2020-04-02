/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */

const forEach = (array, callback) => {
  for (const item of array) { // the code will execute times array length
  callback(item, array.indexOf(item));
  }
};


const itemOfArray = () => {
  setTimeout(() => {
      console.log("Hello");
  }, 3000); // log out in 3000ms(3sec)
}

console.log("Call back function will execute after this log, even tho the code is written above this log");

// forEach([1, 2, 3], itemOfArray); // itemOfArray is placed to callback 

/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */

const map = (array, callback) => {
  const newArrayOfMap = [];
  for (const item of array) {
    newArrayOfMap.push(callback(item, array.indexOf(item)));
  }
  return newArrayOfMap;
};

map([10, 2, 3], itemOfArray);

/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */

const filter = (array, callback) => {
  const newArrayOfFilter = [];
  for (const item of array) {
    if (callback(item, array.indexOf(item))) {
      newArrayOfFilter.push(item);
    }
  }
  return newArrayOfFilter;
};

/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */

const find = (array, callback) => {
  let match;
  for (const item of array) {
    if (callback(item, array.indexOf(item))) {
      match = item;
      break;
    }
  }
  return match;
};

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */

const findIndex = (array, callback) => {
  let index;
  for (const item of array) {
    if (callback(item, array.indexOf(item))) {
      index = array.indexOf(item);
      break;
    }
  }
  return index;
};
/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

const every = (array, callback) => {
  let all = true;
  for (const item of array) {
    if (!callback(item, array.indexOf(item))) {
      all = false;
      break;
    }
  }
  return all;
};

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

const some = (array, callback) => {
  let any = false;
  for (const item of array) {
    if (callback(item, array.indexOf(item))) {
      any = true;
      break;
    }
  }
  return any;
};

/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */

const reduce = (array, callback, initialValue = 0) => {
  let acca = initialValue;

  for (const item of array) {
    acca = callback(acca, item, array.indexOf(item));
  }

  return acca;
};
