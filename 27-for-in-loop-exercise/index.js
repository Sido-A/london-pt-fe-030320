/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 * 
 *
 */

function logProperties(takeObj) {

    for (const key in takeObj) { // look for property names
        console.log(key);
    }
}


/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 * 
 */
function getAllValues(takeObj) {
    const output = [];
    for (const key in takeObj) {  
        output.push(takeObj[key]);  
    }
     return output;
 }

 console.log(getAllValues({name:"Lucie", age: 25}));
/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */

function getAllValuesAsString(takeObj) {
    const output = [];
    for (const key in takeObj) {
        output.push(takeObj[key]);
    }
    return output.join(" ");
     
 }

 console.log(getAllValuesAsString({name: "Sido", age: 26}));

/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */


function propertyValueString(takeObj) {
    for (const key in takeObj) {
        console.log(`${key}: ${takeObj[key]}`);
    }
 }

 console.log(propertyValueString({name: "sido", last: "Abe", age: 26}));

