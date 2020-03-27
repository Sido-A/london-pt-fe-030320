/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */
const noStrings = (takeArrays) => {
    let newNoStringArray = [];
    takeArrays.filter(takeArrays => {
        if (typeof takeArrays !== 'string') {
            newNoStringArray.push(takeArrays);       
        }
    })
    return newNoStringArray;
}

// console.log(noStrings(["Sido",1,2,3,{name: "FL"}]))
/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */

 const justStrings = (takeArrays) => {
     let newJustStringArray = [];
     takeArrays.filter(takeArrays => {
         if (typeof takeArrays === 'string') {
             newJustStringArray.push(takeArrays);             
         }
     })
     return newJustStringArray;
}
  
// console.log(justStrings([4,5,6,"Sido","Lucie",{name: "Bib"}]));

/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */

 const justStringsLongerThan5 = (takeArrays) => {
     let newJustStringsLongerThanFive = [];
     takeArrays.filter(takeArrays => {
         if (typeof takeArrays === 'string' && takeArrays.length > 5) {
             newJustStringsLongerThanFive.push(takeArrays);             
         }
     })
     return newJustStringsLongerThanFive;
 }

//  console.log(justStringsLongerThan5(["ABESIDONIE","FLions"]));

/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */

 const numbersMoreThan13 = (takeArrays) => {
     let newNumberMoreThanThirteen = [];
     takeArrays.filter(takeArrays => {
         if (takeArrays > 13) {
             newNumberMoreThanThirteen.push(takeArrays);             
         }
     })
     return newNumberMoreThanThirteen;
 }

//  console.log(numbersMoreThan13([11,12,13,14,15,16]))

/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */

 const objectsOnly = (takeArrays) => {
     let newObjectOnlyArray = [];
     takeArrays.filter(takeArrays => {
         if (typeof takeArrays === 'object') {
             newObjectOnlyArray.push(takeArrays);             
         }
        })
        return newObjectOnlyArray;
 }

//  console.log(objectsOnly([{name: "Bib"},["Haloo"],1,2,3]))
/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */

 const truthyOnly = (takeArrays) => {
     let newTruthyOnlyArray = [];
    //  console.log(takeArrays); // output ["kitten",{},0]
     takeArrays.filter(takeArrays => {
         if (takeArrays || takeArrays === 0 ) {
             newTruthyOnlyArray.push(takeArrays);  
            //  console.log(takeArrays);  log only [0]
            // console.log(newTruthyOnlyArray); log only [0]           
         }
     })
     return newTruthyOnlyArray;
 }

 console.log(truthyOnly(["kitten",{},0,undefined]));