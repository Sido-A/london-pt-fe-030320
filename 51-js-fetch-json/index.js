const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */

<<<<<<< HEAD
 // return data object in a array
const fetchData = async url=>{
	const factArr = await fetch(url).then(response=> response.json())
	// console.log(factArr.all);
	return factArr.all;
}


// get random facts within the object length
const randomFacts = (length) =>{
	return Math.floor(Math.random() * length);
}

// render facts
const factElement = (facts)=>{	
	result.innerHTML = "";
	facts.forEach((fact, i) => {
		// console.log(fact);
	const list = document.createElement("li");
			if (facts.user == null) {
				list.innerHTML = `<p class="fact">${fact.text}</p><p class="author">Anonymous</p>`
			} else {
				const userFullName = fact.user.name.first + fact.user.name.last;
				list.innerHTML = `<p class="fact">${fact.text}</p><p class="author">${userFullName}</p>`
			}
			result.append(list);
	})
}

/* 
<li>
	<p class="fact">Text</p>
	<p class="author">Author</p>
</li>  
*/

button.addEventListener("click", async ()=>{
	const facts = await fetchData("https://cat-fact.herokuapp.com/facts");
	const factsArr = []	
	for (let i = 0; i < 3; i++) {
		factsArr.push(facts[randomFacts(facts.length)])	
	}	
	factElement(factsArr);
})
=======
>>>>>>> 313149d5869877fe032d44c9a1310cfabb3e670f

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */
