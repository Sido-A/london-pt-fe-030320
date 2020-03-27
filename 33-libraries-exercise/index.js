/**
 * Exercise 1
 *
 * Add Chalk(https://github.com/chalk/chalk) to your project
 */

/**
 * =============================================
 * READ CHALK DOCUMENTATION TO SEE HOW TO USE IT
 * =============================================
 */

/**
 * Exercise 2
 *
 *  create a function {renderBlueText} which will log
 * your text but make font colour blue
 *
 * Call this function and run "node index.js" in a terminal
 * to see the result
 */
const chalk = require("chalk");

const renderBlueText = () => {
    console.log(chalk.blue("The text will be blue"));

}

console.log(renderBlueText());
/**
 * Exercise 3
 *
 * create a function {inversedColourText} which takes string as
 * an argument and log it with inversed background and foreground colors
 * Call this function and run "node index.js" in a terminal
 * to see the result
 */

 const inversedColourText = (takeString) => {
     console.log(chalk.inverse(takeString));

 }

 console.log(inversedColourText("Inverted coloured text"));

/**
 * Exercise 4
 *
 * create a function styledText that takes array of strings
 * and style each by adding red background colour and setting
 * font colour to white.
 */

 const styledText = (takeArrayOfStrings) => {
     console.log(chalk.bgRed.white(takeArrayOfStrings));
 }

 console.log(styledText(["Red bg and White text"]));