  // start simple with a loop that prompts the question after each input
  // if you're stuck always try to break down the problem is smaller pieces


// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");
// /**
//  * Exercise 1
//  *
//  * ask user for a name and assign a response to variable {name}
//  */
const name = readlineSync.question("May I have your name? ");

//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */

const symbols = ['+' , '-', '*', '/']

let selectedSymbol = readlineSync.question(`Do you want to sum, subtract, multiply or divide? Please input one symbol from ${symbols.join(", ")} `); 

const acceptedSymbol = () => {
  selectedSymbol = readlineSync.question(
    `Invalid input. Please choose again ${symbols.join(", ")} `);
};

while(!symbols.includes(selectedSymbol)) { // if selectedSymbol does not(!) include symbols 
  acceptedSymbol();
}

/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

let number1 = readlineSync.questionFloat("Input your first number: ", {limitMessage: "Input invalid please type any number again"}); 
// console.log(number1);
// Integer is  1 == 1.0 technically a float 


/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

 let number2 = readlineSync.questionFloat("Input your second number: ", {
   limitMessage: "Input invalid please type any number again"
 });


/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */


let result = 0;

const userInputTotal = () => {
     switch (selectedSymbol) {
          case '+':
               result = eval(`${number1}${selectedSymbol}${number2}`);
               // result = number1 + number2;
               break;

          case '-':
               result = eval(`${number1}${selectedSymbol}${number2}`);
               // result = number1 - number2;
               break;

          case '*':
               result = eval(`${number1}${selectedSymbol}${number2}`);
               // result = number1 * number2;
               break;

          case '/':
               result = eval(`${number1}${selectedSymbol}${number2}`);
               // result = number1 / number2;
               break;

     }
}

userInputTotal();

// let result = 0;

// const userInputTotal = () => {

//      if (selectedSymbol == '+') {
//           result = number1 + number2;
          
//      } 
//      else if(selectedSymbol == '-'){
//           result = number1 - number2;

//      }
//      else if (selectedSymbol == "*") {
//           result = number1 * number2;
//      }
//      else {
//           result = number1 / number2;
//      }
// }




console.log("=====================");
console.log(`Here you go, the result is ${result}`);