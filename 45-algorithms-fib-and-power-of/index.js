/**
 * Exercise 1
 *
 * create a function {generateFibonacci} which will take a parameter
 * that represents a length of an array that needs to be generated
 * 
 * The array must be a Fibonacci sequence:
 * 
 * The next number is found by adding up the two numbers before it, 
 * always starting with 0 and 1.
 *
 * Ex: generateFibonacci(5) // return [0, 1, 1, 2, 3];
 */

 const generateFibonacci = (number) => {
     let fibonacciArray = [0];
     let defaultNum = 1; 
     let pushToArray = 0;
     while (number > 0) {
        // assign defaultNum to temp
        temp = defaultNum;
        //  console.log(`temp`,temp);
        //  console.log(`defaultNum`, defaultNum);
        //  console.log(`pushToArray`, pushToArray);         
        defaultNum = defaultNum + pushToArray; 
        // defaultNum(num) = defaultNum(num) + n(num)
        // console.log(`defaultNum:${defaultNum} = defaultNum:${defaultNum} + pushToArray:${pushToArray}`);     
         pushToArray = temp;
        //  console.log(`temp to pushToArray`,temp);
        //  console.log(`========`);
         fibonacciArray.push(pushToArray);          
         number--;         
     }
     fibonacciArray.pop()   
    //  console.log(fibonacciArray);         
     return fibonacciArray;  
 }
generateFibonacci(0);
generateFibonacci(5);
generateFibonacci(10);


/**
 * Exercise 2
 *
 * create a function {isPowerOf} which takes 2 arguments:
 * 
 * number – a number
 * primeNumber – a number (a prime number)
 * 
 * return a Boolean if your number is a power of primeNumber
 *
 * Ex: isPowerOf(27, 3) // return true;
 */

const isPowerOf = (number, primeNumber)=> {
    let result = 0;
    // result = primeNumber % number // 3 % 27 === 9
    // console.log(result);
    // console.log(primeNumber % number === 0);
    // console.log(primeNumber % number === 9);
    // console.log(primeNumber % number === primeNumber);
    // console.log(primeNumber % number === 1);
    // console.log(primeNumber % number);

    
    if (primeNumber === 0 || primeNumber === 1 ){
            console.log("false");        
            return false;
            
    } else if (primeNumber >= 2) {
        if (number === primeNumber**primeNumber) {            
            return true;                               
        }else {
            return false
        }
    }
}
 
    

isPowerOf(27,3); // true
isPowerOf(28, 3); // false
isPowerOf(0, 3); // false 
isPowerOf(1, 3); // false 
isPowerOf(-27, 3); // false
