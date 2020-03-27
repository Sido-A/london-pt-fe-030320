// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */

 const convertToPositive = (takeNumbersArray) => {
     let newArray = [];
     takeNumbersArray.map(takeNumbersArray => {
         if (takeNumbersArray < 0) {
            takeNumbersArray = takeNumbersArray * -1;
            // console.log(takeNumbersArray); log lower than 0 num -1,-2
            newArray.push(takeNumbersArray);
            

         } else if(takeNumbersArray > 0){
            //  console.log(takeNumbersArray); log higher than 0 num 3,4
             newArray.push(takeNumbersArray);
            }
         })
     return newArray;

        }

//  console.log(convertToPositive([-1,-2,3,4]));
/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', 
 *    age: 26
 * },
 *   {name: 'John', 
 *    age: 25
 * }
 * ]) will return ['Alex', 'John']
 */

 const getAllNames = (takeNames) => {
     let takeAllNamesNewArray = [];
     takeNames.map(takeNames => {
             takeAllNamesNewArray.push(takeNames["name"]);             
         })
     return takeAllNamesNewArray;
 }

console.log(getAllNames([{name: 'Alex', age: 26},{name: 'John', age: 25}]));

/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */

 const greetAll = (takesNamesArray) => {
    let newNamesArray = [];
     takesNamesArray.map(takesNamesArray => {
        //  console.log(takesNamesArray) // output ["Sido","Lucie","FL"]
         newNamesArray.push(`Hi, ${takesNamesArray}!`)
     })
     return newNamesArray;
 }


 console.log(greetAll(["Sido","Lucie","FL"]));

/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */

const multiplyAllNumbers = (takeArray) => {
    let numbersMultipliedArray = [];
    takeArray.map(takeArray=> {
        if(typeof takeArray == 'number'){
            takeArray = takeArray * 5;
            numbersMultipliedArray.push(takeArray);            
            // console.log(numbersMultipliedArray); // output multiplied numbers
        }else{
            numbersMultipliedArray.push(takeArray);
        }
    })
    return numbersMultipliedArray;
}

console.log(multiplyAllNumbers([1,2,3,"Sido"]));