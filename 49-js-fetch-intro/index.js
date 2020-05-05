const form = document.querySelector("form");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve ./` to serve your index page

/**
 * Exercise 1
 *
 * create a function {getResponse} which takes
 * a URL as an argument and makes a GET request.
 * If the response {status} code is successful,
 * call a function which will render "Valid link! {Link}"
 * in {result} element, otherwise render
 * `Request failed with status code: {errorCode}`
 */
// const BOOKS_URL = "https://www.reddit.com/r/books.json";
// const promise = fetch(BOOKS_URL);

// const displayMessage = response =>{
//     const success = document.createElement("div")
//     success.innerText = response.url;
//     document.body.append(success);
// }
// promise.then((response)=> console.log(response))




const responseSuccess = async response => {
    // console.log(response.url);
    
    return await new Promise(resolve=>{
        const anchorLink = document.createElement("a");
        result.innerText = "Valid link!";
        result.style.color = "green";
        anchorLink.innerText = " link";
        anchorLink.setAttribute("target", "_blank");
        anchorLink.href = response;
        result.appendChild(anchorLink);
        resolve();
    })
}
 
const responseError = async response => {
    // console.log(response.url);
    
    return await new Promise((resolve)=>{
        const anchorLink = document.createElement("a");
        result.innerText = "Request failed with status code: ";
        result.style.color = "red";
        anchorLink.innerText = response;
        anchorLink.style.color = "red";
        result.appendChild(anchorLink);
        resolve();
    })
}


 const getResponse = (url)=>{
      fetch(url).then((response)=>{
         if (response.ok) {  
             responseSuccess(url);
         } else {
            responseError(response.status)
         }
     })
 }

// getResponse("https://www.reddit.com/r/books.json");
// getResponse("https://flippingbook.com/404");
input.addEventListener("focus",()=>{
    input.value = "";
    result.innerText = "";
})

form.addEventListener("submit", () => {
    getResponse(input.value);
});


/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. provide URL in input and submit my request
 * 2. if provided URL is a valid API URL, then I should see
 * a message with a link.
 * 3. When I click on a link, it should be opened in a new tab
 * 4. if provided URL is invalid API URL, then I should see
 * an error message in {result} with status code.
 * 5. When I focus on input, it should clear my input and hide
 * {result}
 */
