// Examples
/**
 * with Inline function callback
 *
 * const callback = () => {}
 * array.foreach(callback)
 */

/**
 * with anonymous function callback
 *
 * array.foreach(arrayItem => {})
 */

/* ======================== */
/* external callback version */
/* ======================== */

/**
 * Exercise 1
 * create an arrow function {forEachCallback} that takes
 * param and logout it.
 *
 * create a function {logAllWithExternalCallback} that will take an array
 * and with forEach log every element from your array
 * use {forEachCallback} as a callback function for forEach
 */


 const forEachCallback = (param) => {
     console.log(param);
 }
// console.log(forEachCallback([5, 6, 7]));    
 
const logAllWithExternalCallback = takeArray => {
       takeArray.forEach(forEachCallback);
     };

    //  console.log(logAllWithExternalCallback([1,2,3,"Sido"]));  
     // 1
     // 2
     // 3
     // "Sido"
     // output each element


/* =========================== */
/* anonymous callbacks version */
/* =========================== */
/**
 *
 * create a function {logAllWithAnonymousCallback} which will
 * do same thing as {logAllWithExternalCallback} but with
 * anonymous callback
 */
 const logAllWithAnonymousCallback = (array) => {
   
  array.forEach(arrayValue =>
    console.log(arrayValue)
     );     
 }
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
//  console.log(logAllWithAnonymousCallback([9,8,7]));
 
/**
 * Exercise 2
 * module 3
 * create a arrow function {dividableBy3} that takes an array
 * of numbers as a param. With forEach, filter it and return a new
 * filtered array what will contain only numbers that dividable by 3
 * without remainder
 *
 * Ex: dividableBy3([3,7,9,11]) => return [3,9]
 */
const dividableBy3 = (takeNumbers) => {
  const filteredNumber = [];
  takeNumbers.forEach(takeNumbersValue => {
    if (takeNumbersValue % 3 === 0) {
      // console.log(takeNumbersValue)
      filteredNumber.push(takeNumbersValue);  
    }
  });
  return filteredNumber;
}

// console.log(dividableBy3([3,5,6]));

/**
 * Exercise 3
 * create an arrow function {oddNumbersSum} which takes an array
 * of numbers and return sum of all odd numbers.
 *
 * Use forEach to loop through the array.
 */

const oddNumbersSum = (takeNumbers) => {
   let sumOfOddNumber = 0;
  //  console.log(sumOfOddNumber); holds 0
   takeNumbers.forEach(takeNumbersValue => {
     
     if (takeNumbersValue % 2 !== 0) {
      //  console.log(takeNumbersValue); holds 1,3
       sumOfOddNumber += takeNumbersValue; 
       // sumOfOddNumber (0) = sumOfOddNumber(0) + takeNumbersValue(1) = 1
       //*sumOfOddNumber updated to 1
      // sumOfOddNumber (1) = sumOfOddNumber(1) + takeNumbersValue(3) = 4 
      //*sumOfOddNumber updated to 4
      // sumOfOddNumber (4) = sumOfOddNumber(4) + takeNumbersValue(??) = ?? 
     }
   })
   return sumOfOddNumber;
 }
 console.log(oddNumbersSum([1,2,3]));

/**
 * Exercise 4
 * create an arrow function {totalLength} which takes an array
 * with different types. You need to get only strings and return
 * total of their lengths.
 *
 * Use forEach to loop through the array.
 *
 * Ex: ["cat", 5, "dog"] => 6
 */

 const totalLength = (takeArrayOfStrings) => {
   let newArrayOfStrings = 0;
   takeArrayOfStrings.forEach(takeArrayOfString => {
     if (typeof takeArrayOfString == 'string') {
       newArrayOfStrings += takeArrayOfString.length;
      //  console.log(takeArrayOfString)   it only logs each length
     }
   });
   return newArrayOfStrings;
 }

 console.log(totalLength(["Sido","Lucie"]));