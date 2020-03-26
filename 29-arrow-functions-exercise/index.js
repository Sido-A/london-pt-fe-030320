/* =================== */
/*   ARROW FUNCTIONS   */
/* =================== */

/**
 * Exercise 1
 *
 * create an arrow function {isEqual} which takes 2 numbers as params
 * and return true if they are equal or false if not
 */

 const isEqual = (num1, num2) => {
     if (num1 === num2) {
         return true;         
     } else {
         return false;
     }
 }

 console.log(isEqual(1,2));

/**
 * Exercise 2
 *
 * create an arrow function {isLessOrEqual0} which takes number as a param
 * and return true if it equals or less than 0 or false if not
 */

 const isLessOrEqual0 = numbers => {
   if (numbers <= 0) {
     return true;
   } else {
       return false;
   }
 }

 console.log(isLessOrEqual0(-1));

/**
 * Exercise 3
 *
 * create an arrow function {timeToSeconds} that takes
 * 2 params. First - hours, second - minutes, and as a result
 * return amount of seconds.
 *
 * Don't forget to set default values for your params, 0 and 0
 * so you will not break your function if you forget to pass params
 */

 const timeToSeconds = (hours = 0, minutes = 0) => {
     hours = hours*3600; // 1hr = 3600
     // console.log(hours);
     minutes = minutes*60; // 1min = 60
     // console.log(minutes);

     let seconds = hours + minutes;
     return seconds;
 
 }

 console.log(timeToSeconds(1,31))



/**
 * Exercise 4
 *
 * create an arrow function {isGameWorthTheCandle} which
 * takes 3 params. probability, prize and
 * pay. If probability * prize is more than
 * pay then return true otherwise return false
 */

 const isGameWorthTheCandle = (probability, prize, pay) => {
     if (probability * prize > pay){
         return true;
     } else {
         return false;
     }

 }

/**
 * Exercise 5
 *
 * create an arrow function {longerString} that takes two strings
 * as parameters and returns the string which is longest. If the strings are
 * equal in length return the string "Equal!"
 */

 const longerString = (stringOne, stringTwo) =>{

    if (stringOne.length > stringTwo.length ) {
        return stringOne;        
    } else if (stringOne.length < stringTwo.length) {
        return stringTwo       
    } else {
        return "Equal!";
    }     
 }

 console.log(longerString("Worlds","World"));


 /**
 function compareStr(string1, string2) {
            const result = string1.localeCompare(string2);
            return result;
 }

 console.log(compareStr("Worlds","World"));

 **/