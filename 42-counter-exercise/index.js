let step = 0;
let counter = 0;
const counterValue = document.querySelector(".counter_value");



/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */

 const action = (symbol) => {
     if (symbol == "+") {
         counter += step;  
         counterValue.value = counter;       
         counterValue.innerText = counterValue.value;
        
     } else if(symbol == "-"){
         counter -= step;
         counterValue.value = counter;       
         counterValue.innerText = counterValue.value;
     }
 }
 action();

 /**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */

const setStep = () => {
    const stepForm = document.querySelector(".step_form");
        stepForm.addEventListener("submit", ()=> {
        const currentStepIs = document.querySelector(".step_value"); // current step is: 
        const stepInput = document.querySelector("#step"); //Step [input]
        // update Step[input] value on let step = 0;
        step = Number(stepInput.value); //Step [input]

         // giving the Step[input number] to Current Step is: #        currentStepIs.innerText = step;  
        currentStepIs.value = step;  
        currentStepIs.innerText = currentStepIs.value;
            // console.log(typeof currentStepIs.value);
            // console.log(typeof currentStepIs.innerText);      

        // reset the Step[input] value to 1
        stepInput.value = 1;        
    })
}
setStep();

/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const decrement = document.querySelector("#decrement")
     decrement.addEventListener("click", () =>{
         action("-");
        //  console.log(counter);         
     })     
 

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const increment = document.querySelector("#increment")
    increment.addEventListener("click", () => {
        action("+");
        // console.log(counter);
    })

/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
    const autoDecrementButton = document.querySelector("#auto_decrement")
    autoDecrementButton.addEventListener("click", () => {
        setInterval(() => {
            action("-");
            // console.log(counter);            
            // console.log(counterValue);   
        }, 1000);
    })

/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

    const autoIncrementButton = document.querySelector("#auto_increment")
    autoIncrementButton.addEventListener("click", () => {
        setInterval(() => {
            action("+");
            // console.log(counter);            
            // console.log(counterValue);               
        }, 1000);
    })


/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */

     const stopAutoButton = document.querySelector("#stop_auto");
     stopAutoButton.addEventListener("click", () =>{
         console.log(autoDecrementButton);         
         console.log("hi");    
     })     
