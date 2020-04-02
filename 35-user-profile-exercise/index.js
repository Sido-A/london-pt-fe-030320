// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require('readline-sync');
const chalk = require("chalk");



const user = {};

/**
 * Exercise 1
 *
 * ask user for a first name and save response to {user.firstName}
 */

 user.firstName = readlineSync.question('What is your first name? : ');

/**
 * Exercise 2
 *
 * ask user for a last name and save response to {user.lastName}
 */

  user.lastName = readlineSync.question("What is your last name? : ");


  // console.log(user);
console.log(`Hello ${user.firstName} ${user.lastName}!`);

/*
 * Exercise 3
 *
 * ask user for a age and save response to {user.age}
 */
 user.age = readlineSync.questionFloat("What is your age : ");


/*
 * Exercise 4
 *
 * ask user for a email and save response to {user.email}
 */

user.email = readlineSync.questionEMail("What is your email address : ");


/**
 * OPTIONAL:
 *
 * use "chalk" to print out user data with colours :)
 */

console.log(chalk`Here what we have, your full name is {blue.bold ${user.firstName}} {blue.bold ${user.lastName}}. 
    You are {red.bold ${user.age}} and if we need to contact with you we can send 
    a letter to {inverse.bold ${user.email}}.`
);
