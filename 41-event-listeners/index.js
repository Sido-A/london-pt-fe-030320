// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */

 const clickTheButton = () => {
     const classNameWithClick = document.querySelector(".click");
     classNameWithClick.addEventListener("click", () =>{
         console.log("The button was clicked");         
     })
 }

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */

 const hoverOver = () => {
     const logMessageMouseOver = document.querySelector(".mouseover a");
     logMessageMouseOver.addEventListener("mouseover", () =>{
         console.log("a tag hovered")
     })
 }

/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
const handleLeave = () => {
    const logMessageLeave = document.querySelector("a");
    logMessageLeave.addEventListener("mouseout", () => {
        console.log("Left a tag");
    });
}

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */

 const focusOnMe = () => {
     const logMessageFocus = document.querySelector(".input input");
     logMessageFocus.addEventListener("focus", ()=>{
         console.log("Input focusing")

     })
 }

/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */

 const clickElsewhere = ()=> {
     const removeFocus = document.querySelector(".input input");
     removeFocus.addEventListener("blur", ()=>{
         console.log("Blur")

     })

 }

/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */
// keypress イベントとは異なり、 keydown イベントはすべてのキーにおいて、
// 文字が入力されるかどうかにかかわらず発生します。
 const pressAKey = () => {
     const pressKeyInFocus = document.querySelector(".input input");
     pressKeyInFocus.addEventListener("keydown", ()=>{
         console.log("A key was pressed");
         

     })

 }

/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const releaseAKey = () => {
    const releaseKeyInFocus = document.querySelector(".input input");
    releaseKeyInFocus.addEventListener("keyup", ()=> {
        console.log("A key was released");
    })

}

/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const inputToUpperCase = () => {
    const upperCaseInput = document.querySelector(".input input[type='text']");

    upperCaseInput.addEventListener("keyup", () => {
      upperCaseInput.value = upperCaseInput.value.toUpperCase();
    });
}

inputToUpperCase();



/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */

 const handleSelectChange = () => {
     const idItemsInSelect = document.getElementById("items");
     idItemsInSelect.addEventListener("change", (event)=> {
         console.log(event.target.value)

     })
 }

 handleSelectChange();
/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */
const submitFormHandler = () => {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("form > input") 
    const newObj = {};   

    form.addEventListener("submit",(event)=>{
    inputs.forEach((input, index) => {
        // console.log(input, index);
        if (index === 0) {
            newObj.firstName = input.value;
        } else if (index === 1){
            newObj.lastName = input.value;
        }        
 });

    console.log(newObj);

    
        event.preventDefault();
    })
}

submitFormHandler();

/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */

 const handleScroll = () => {
     window.addEventListener("scroll", () => {
         console.log(window.pageYOffset);
     });
 }
