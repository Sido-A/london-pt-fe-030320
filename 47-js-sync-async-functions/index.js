const ingredients = [
  { name: "carrot", time: 500 },
  { name: "potato", time: 1000 },
  { name: "onion", time: 250 },
  { name: "celery", time: 150 },
  { name: "tomato", time: 100 },
];

const syncCookIngredient = ({ name, time }) => {    
  const start = Date.now();
  console.log(`Start cooking ${name}`);
  while (start + time > Date.now()) {}

  console.log(`${name} cooked!`);
};

/**
 * Exercise 1
 *
 * create a function {syncCookMeal} which will receive an
 * array of {ingredientsToCook}, (similar to the array
 * defined on line 1) and call {syncCookIngredient} 
 * for each ingredient in the array
 * 
 * After all the ingredients are cooked,
 * log the message "Soup is ready to serve"
 */

// sync blocks the code 
const syncCookMeal = (ingredientsToCook) =>{
  ingredientsToCook.forEach(ingredient => {
    // console.log(ingredient)
    syncCookIngredient(ingredient)    
  });  
  console.log("Soup is ready to serve");  
}
// syncCookMeal(ingredients);


/**
 * Exercise 2
 *
 * create a function {asyncCookIngredient} which takes 1 argument:
 * 
 * an {ingredient} object (like the objects in the array on line 1)
 * with 2 keys: name and time.
 * 
 * Log out the message "Start cooking INGREDIENT_NAME"
 * then after the cooking time has elapsed,
 * log out "INGREDIENT_NAME cooked!". Both times displaying
 * the name of the ingredient.
 */
const asyncCookIngredient = async ingredient => {
  console.log(`Start cooking ${ingredient.name}`);
    return await new Promise ((resolve)=>{
     setTimeout(() => {
       console.log(`${ingredient.name} cooked!`);
      resolve()
    }, ingredient.time)
  });
};

// console.log(`${ingredient.name} cooked!`);


/**
 * Exercise 3
 *
 * create a function {asyncCookMeal} which will receive an
 * array of {ingredientsToCook} and call {asyncCookIngredient} for
 * each ingredient
 * 
 * After all the ingredients are cooked,
 * log the message "Soup is ready to serve"
 */
// dont really know where to add async and await...

const asyncCookMeal =  ingredientsToCook =>{
  const arr = ingredientsToCook.map(asyncCookIngredient)
  Promise.all(arr).then(() => console.log("Soup is ready to serve"))
}
// asyncCookMeal(ingredients);

// const p = new Promise ((resolve, reject)=>{
//   let a = 1+1
//   if (a == 2) {
//     resolve("Success")    
//   } else {
//     reject("Failed")
//   }
// })

// p.then((message) =>{
//   console.log("this is in the then " + message);  
// }).catch((message)=>{
//   console.log("this is in the then " + message);
  
// })

