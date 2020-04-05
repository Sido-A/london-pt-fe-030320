// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */

 const createDOMElement = (tagName) => {
     const newTag = document.createElement(tagName);
     document.body.appendChild(newTag);
     return newTag;
 }

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */

 const addPTag = (getText) => {
     const pNewTag = document.createElement('p');
     pNewTag.innerText = getText;
     document.body.appendChild(pNewTag);

 }

/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */

 const addElementWithClass = (tagName, getText, className) => {
     const addElement = document.createElement(tagName);
     addElement.className = className;
     addElement.innerText = getText;
     
     document.body.appendChild(addElement);

 }

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */

//  const addElementWithMultipleClasses = (tagName, getText, arrayOfClasses) => {
//      const addElement = document.createElement(tagName);
//      addElement.innerText = getText;
//      addElement.className = [arrayOfClasses];
//      document.body.appendChild(addElement);

//  }

/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */

 const buildAList = (listType, className, numberOfItem) => {
     const addElement = document.createElement(listType);
     addElement.className = className;
     document.body.appendChild(addElement);

     for (let i = 0; i < numberOfItem; i++) {
         const liNewAdd = document.createElement('li');
         liNewAdd.innerText = `Item ${i}`;
         addElement.appendChild(liNewAdd);         
     }
 }

/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */
const prependLiToList = (getText, className) => {
    const getUl = document.querySelector('ul');
    const liNewAdd = document.createElement('li');
    liNewAdd.innerText = getText;
    liNewAdd.className = className;
    getUl.prepend(liNewAdd);


}

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */
// const pushToSelectedPosition = (getText, className, index) => {
//     const liNewAdd = document.createElementNS('li');
//     liNewAdd.innerText = getText;
//     liNewAdd.className = className;

// }

/**
 * Exercise 8
 *
 * create a function {deleteSelectedElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */


 const deleteSelectedElements = (parentSelector, childSelector) => {
   const parent = document.querySelector(parentSelector);
   const child = document.querySelectorAll(childSelector);

   parent.remove(child);
 };