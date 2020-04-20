const textarea = document.querySelector("textarea");
const encrypt = document.getElementById("encrypt");
const decrypt = document.getElementById("decrypt");
const result = document.querySelector(".result");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click",event =>{    
    if (event.target === encrypt) {
        result.innerText = rot13(textarea.value);  

    } else if (event.target === decrypt) {
        result.innerText = rot13(textarea.value);  
    }
});

const rot13 = (text) => {
    let userInput = [];
    // split the passed text
    userInput = text.split("");

    // check each letter and return
    return userInput.map.call(userInput, function (splitText) {
        unicode = splitText.charCodeAt(0);

        // A=> 65, N=> 78 || a=> 97, n=> 110 if the text unicode match plus 13
        // B=> 66 + 13 will convert to O(79)
        if ((65 <= unicode && unicode < 78) || (97 <= unicode && unicode < 110)) {            
            return String.fromCharCode(unicode + 13);

        // N=> 78, Z=> 90 || n=> 110, z=> 122 if the text unicode match minus 13
        // q=> 113 -13 will convert to d(100)
        } else if ((78 <= unicode && unicode <= 90) || (110 <= unicode && unicode <= 122)) {
            return String.fromCharCode(unicode - 13);
        }
        // return space and other unicode that's not match above is statement
        return String.fromCharCode(unicode);

        // concat the text that was split at the beginning
    }).join('');
}