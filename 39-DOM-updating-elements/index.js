// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1 */
 const h1AddText = document.querySelector("h1");


 const setTitle = (string) => {
      h1AddText.innerText = string; 
    //   console.log(h1AddText);
     // text added to h1 <h1>string</h1>

 }

/**
 * Exercise 2
 * create a function {appendToTitle} which takes a string as an argument
 * and appends it to existing h1 text */

 const appendToTitle = (string) => {
      h1AddText.innerText += string;
      // concat strings with existing h1
    
 }



/**
 * Exercise 3
 * create a function {prependToTitle} which takes a string as an argument
 * and prepends it to existing h1 element text */

 const prependToTitle = (string) => {
     h1AddText.innerText = string + h1AddText.innerText;

 }


/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and uses innerHTML to create an element inside the div, and the
 * text is displayed inside that element. The element should the tag name
 * passed into the function
 */

 const setInnerHTMLForDiv = (tagName, tagText) => {
     const div = document.querySelector('div');
     div.innerHTML = `<${tagName}>${tagText}</${tagName}>`;

 }


/**
 * Exercise 5
 * create a function {pushPtoDivWithText} which takes a string as an argument
 * and uses innerHTML to add a p tag containing the text into the div
 */

 
 const pushPtoDivWithText = string => {
   const div = document.querySelector("div");
   const pNewElement = document.createElement("p");
   pNewElement.innerHTML = string;
   div.append(pNewElement);
 };


/**
 * Exercise 6
 *
 * create a function {setSrcToImage} which takes a url and image description
 * as arguments and set it as a src and alt attributes values
 * for existing img
 * const imgEl = document.querySelector("img");
 * imgEl.src = "dankest_meme.gif";
 */

 const setSrcToImage = (takeUrl, takeAlt) => {
     const newImg = document.querySelector('img');
     newImg.src = takeUrl;
     newImg.alt = takeAlt;

 };

/**
 * Exercise 7
 *
 * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
 * and some text
 *
 * Find the a tag in the page, set the href to the URL and display the text
 *
 * Also add an attribute that opens your page in a new tab
 */

 const setCodersInHoodsLink = (takeUrl, takeText) => {
     const a = document.querySelector('a');
     a.href = takeUrl;
     a.innerText = takeText;
     a.target = ('_blank'); 
 }

/**
 * Exercise 8
 *
 * create a function {disableResetBtn} which will disable button
 * with class "reset"
 */

 const disableResetBtn = () => {
     const resetBtn = document.querySelector('.reset');
     resetBtn.disabled = true;

 }

/**
 * Exercise 9
 *
 * create a function {disableBtns} which takes class name as an argument
 * and disable all buttons with this class name
 */

 const disableBtns = (classNames) => {
     const disableAll = document.querySelectorAll("button");
    //  console.log(disableAll);

     for (let i = 0; i < disableAll.length; i++) {
         const element = disableAll[i];
         if (element.className === classNames) {
             element.disabled = true;            
        }
     }
 }

/**
 * Exercise 10
 *
 * create a function {addClassToLi} which adds the class
 * "list_item_$" (where $ is a position in a list) to each li
 * that is inside the ul with the class "list"
 *
 * NOTE: We've added some CSS so when your classes are added,
 * you will see a difference
 */

 const addClassToLi = ()=> {
     const addClass = document.querySelectorAll('.list li');
    //  console.log(addClass);
     for (let i = 0; i < addClass.length; i++) {
         const element = addClass[i];
         element.className = `list_item_${i}`;

         
     }
 }

/**
 * Exercise 11
 *
 *  create a function {removeListItemClass} which removes the class
 * "list_item" from all li elements with this class
 */

const removeListItemClass = () => {
    const removeClass = document.querySelectorAll("li")
    for (let i = 0; i < removeClass.length; i++) {
        const element = removeClass[i];
        // console.log(element);
        element.classList.remove("list_item");

        
    }
}

/**
 * Exercise 12
 *
 *  create a function {addId} which takes 2 arguments: an id and
 * a CSS selector. Use to selector to find an element, then add
 * the id to the element
 */

 const addId = (takeId, takeCssSelector) => {
     const getSelector = document.querySelector(takeCssSelector);
     getSelector.id = takeId;

 }

/**
 * Exercise 13
 *
 *  create a function {setStyles} which takes 3 arguments
 * 1 - a CSS property name,
 * 2 - property value,
 * 3 - a CSS selector
 *
 * use the selector to find all the elements which match, then
 * set the CSS property to the value
 */

 const setStyles = (cssProperty, propertyValue, cssSelector) => {
     const getAllMatch = document.querySelectorAll(cssSelector);
    //  console.log(getAllMatch);
    for (let i = 0; i < getAllMatch.length; i++) {
        const element = getAllMatch[i];
        element.setAttribute("style", `${cssProperty}: ${propertyValue}`);
    }
 }
