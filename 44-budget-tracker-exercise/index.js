localStorage.products = JSON.stringify(products);
const productsRender = JSON.parse(localStorage.products);

// const eachItem = () => {
//     const productsDiv = document.getElementById("products");
//     productsRender.forEach((item,i) => {
//         console.log(item, i);
//         const newDiv = document.createElement("div");
//         newDiv.innerHTML = `
//     <img src= ${item.img} />
//     <h3>${item.name}</h3>
//     <p>${item.price}</p>`    
//     productsDiv.appendChild(newDiv);

//     const select = document.createElement("select");
//     switch (i) {  
//         case 0:
//             select.innerHTML = `
//                 <option>0</option>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>`            
//             break;
//         case 1:
//             select.innerHTML = `
//                 <option>0</option>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>`
//             break;
//         case 2:
//             select.innerHTML = `
//                 <option>0</option>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>`
//             break;
//         case 3:
//             select.innerHTML = `
//                 <option>0</option>
//                 <option>1</option>
//                 <option>2</option>`
//             break
//     }
//     newDiv.appendChild(select);
//     });
// }

eachItem();



// const eachItem = () => {
//     const productsDiv = document.getElementById("products");
//     productsRender.forEach((item, i) => {
//         console.log(item, i);
//         const newDiv = document.createElement("div");

//         newDiv.innerHTML = `
//     <img src= ${item.img} />
//     <h3>${item.name}</h3>
//     <p>${item.price}</p>  
//     <select>
//         <option>0</option>
//         <option>1</option>
//         <option>2</option>
//         <option>3</option>
//     </select>

//     <img src= ${item.img} />
//     <h3>${item.name}</h3>
//     <p>${item.price}</p>  
//     <select>
//         <option>0</option>
//         <option>1</option>
//         <option>2</option>
//         <option>3</option>
//         <option>4</option>
//     </select>

//     <img src= ${item.img} />
//     <h3>${item.name}</h3>
//     <p>${item.price}</p> 
//     <select>
//         <option>0</option>
//         <option>1</option>
//         <option>2</option>
//         <option>3</option>
//         <option>4</option>
//         <option>5</option>
//     </select>

//     <img src= ${item.img} />
//     <h3>${item.name}</h3>
//     <p>${item.price}</p>
//     <select>
//         <option>0</option>
//         <option>1</option>
//         <option>2</option>
//     </select>`
//     productsDiv.appendChild(newDiv);

//     })
// }





























// // const productsContainer = document.querySelector("#products");

// // localStorage.firstName = "John"
// // localStorage.lastName = "Smith"

// // const user = {
// //     firstName: localStorage.getItem("firstName"),
// //     lastName: localStorage.getItem("lastName"),
// // };

// // console.log(user);

// // const myJson = {
// //     "user": {
// //         "name": "Sido",
// //         "age": "26",
// //         "height": {
// //             "unitSystem": "cm",
// //             "value": "200"
// //         }
// //     }
// // }

// // console.log(myJson);

// // localStorage.myJson = myJson;

// // const testJson = '{"title":"My first blog"}'

// // const parsedJson = JSON.parse(testJson);
// // console.log(testJson);
// // console.log(parsedJson);

// // const parsedUser = JSON.stringify(user);
// // console.log(parsedUser);

// // localStorage.userObj = user;
// // localStorage.userStr = parsedUser;


// // const tasks = [
// //     {
// //         value: "Buy milk",
// //         isCompleted: false
// //     }, 
// //     {
// //         value: "Read book",
// //         isCompleted: false
// //     },
// //     {
// //         value: "Training",
// //         isCompleted: false
// //     }
// // ];

// // localStorage.tasks = JSON.stringify(tasks);

// const tasks = JSON.parse(localStorage.tasks);
// const ul = document.createElement("ul");

// tasks.forEach((task, i) => {
//     const li = document.createElement("li");
//     li.innerText = `${i+1}.${task.value}`;
//     ul.appendChild(li);



    
// });

// document.body.appendChild(ul);