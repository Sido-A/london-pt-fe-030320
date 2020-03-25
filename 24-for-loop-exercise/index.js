const myName = "Sido"; // SET YOUR NAME

const visitors = ["Alex", "Mike", "Sam","Bob","Lucie"]; // Add at least 5 names

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */

 function greetVisitors() {
     for (let i = 0; i < visitors.length; i++) {
         const visitor = visitors[i];
         console.log(`Hi ${visitor}, my names is ${myName}`);
         
     }
     
 }

 console.log(greetVisitors());
// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */

 // console.log(numbers.length);
 // console.log(numbers.indexOf(123));

//   the first time you want to have return when you find a match OR  AFTER the last call on your array

// const numbers = [2, 123, 13, 1, 6, 84, 23, 12]; // DON'T TOUCH THIS LINE :)

 function getElementIndex(inputNumber) {
     let getIndex = numbers[0]
     for (let i = 0; i < numbers.length; i++) {
         // console.log(numbers[i]); output numbers.length value         
         
         if (inputNumber == numbers[i]) {
            //  console.log(numbers[i]);
            return i;
             // out put the return when "else" is not declare...
         };
     }     
     return 'Item not found' // you have to give the return out side of 'if' to finish the loop
     //If the value was found in 'if' then the function will stop without finishing the loop
 }

 console.log(getElementIndex(12)); 
// ========================

/*
/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */

// https://qiita.com/phi/items/3b10288b02c87057c006
 function total() {
     let number = 0;
     for (let i = 0; i < numbers.length; i++) {
          number += numbers[i];     
        //  console.log(number);    
     };
     return number;     
 }

 console.log(total());

// ========================

const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */

 // const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

 function addIndex() {
     let totalAfterAdded = [];

     for (let i = 0; i < numbersForIndexes.length; i++) {
         
         totalAfterAdded.push(numbersForIndexes[i] + i);
     }
     
     return totalAfterAdded;
 }

 console.log(addIndex());


const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */

 function lowestNumber() {
     let lowestInteger = forLowestNumber[0]; // 
     for (let i = 0; i < forLowestNumber.length; i++) {
         if(lowestInteger > forLowestNumber[i]){
             lowestInteger = forLowestNumber[i];
         }
        }
        return lowestInteger;
    }
 console.log(lowestNumber());
