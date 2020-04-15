localStorage.products = JSON.stringify(products);
const productsRender = JSON.parse(localStorage.products);
const quantityObj = {};

const eachItem = () => {
    const productsDiv = document.getElementById("products");
    productsRender.forEach((item,i) => {
        // console.log(item, i);
        const newDiv = document.createElement("div");
        // item img, name, price
        newDiv.innerHTML = `
        <img src= ${item.img} />  
        <h3>${item.name}</h3>
        <p>£${item.price}</p>`    
        productsDiv.appendChild(newDiv);

        // item option from 0 -to each max_quantity
        const select = document.createElement("select");
        select.id = `id${item.id}`;
        select.setAttribute("onchange",`selectQuantity(${item.id})`);                
        // default 0
        const optionZero = document.createElement("option"); 
        optionZero.innerText = 0;
        select.appendChild(optionZero);
        for (let i = 0; i < item.max_quantity; i++) {
            // max_quantities
            const option = document.createElement("option");
            option.innerText = i + 1; // quantity + 1 to plus the 0
            select.appendChild(option);
            newDiv.appendChild(select);
        }
    })
}
eachItem();

const selectQuantity = (idOfSelect)=>{
    const selectId = document.querySelector("#id"+ idOfSelect);
    let quantity = selectId.value;
    let price = productsRender[idOfSelect - 1].price;
    // each items quantity * price
    const result = quantity*price
    // set the result on individual id, this will over write the obj when same item was chose
    quantityObj[idOfSelect] = Number(result.toFixed(2));
    // console.log(quantityObj);


const totalSum = ()=>{
    let totalBudget = `50.00`;
    for (const key in quantityObj) {        
        const span = document.querySelector("span");
        totalBudget -= quantityObj[key];

        if (totalBudget > 0) {
            span.innerHTML = `£${totalBudget.toFixed(2)}`;            
        }else if(totalBudget < 0){
            const error = document.getElementById("remaining");
            const errorDiv = document.createElement("div")
            errorDiv.className = "error"
            errorDiv.innerHTML = `Not enough money left for that!`;
            error.appendChild(errorDiv);
            setTimeout(() => {
                errorDiv.remove();    
            }, 2000);
        }      
    }
}
totalSum();
}