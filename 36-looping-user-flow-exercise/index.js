// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");


let selectedItems = {
	book: "",
	movie: "",
	nextTrip: ""
};

const books = [
  "My Dark Vanessa",
  "Uncanny Valley",
  "Weather",
  "The night watchman",
  "All adults here",
  "Dear Edward",
  "Grown ups"
];


const movies = [
	"The Invisible Man",
	"Never Rarely Sometimes Always",
	"Gretel & Hansel",
	"No time to die",
	"Bloodshot",
	"Onward",
	"Sonic"
];


const countries = [
	"Italy",
	"France",
	"Germany",
	"Spain",
	"Portugal",
	"Denmark",
	"Netherland"
];

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

const chooseBook = () => {
	
	let indexOfBook = readlineSync.keyInSelect(books, "Which book?", {
    cancel: "Return t top"
  });
	console.log("Ok, " + books[indexOfBook] + " has been added to your item.");
	selectedItems.book = books[indexOfBook];


 if (indexOfBook == -1) {
	 chooseTopMenu();	 
 	}
	  chooseTopMenu();	 
}
//  chooseBook();
//  console.log(selectedItems);

/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */

 
const chooseMovie= () => {
  let indexOfMovie = readlineSync.keyInSelect(movies, "Which movie?", {cancel: "Return to top"});

  console.log("Ok, " + movies[indexOfMovie] + " has been added to your item.");
  selectedItems.movie = movies[indexOfMovie];

  if (indexOfMovie == -1) {
    chooseTopMenu();
  }
  chooseTopMenu();
};

// chooseMovie();

// console.log(selectedItems);

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

 
const chooseTrip = () => {
  let indexOfTrip = readlineSync.keyInSelect(countries, "Which movie?", {
    cancel: "Return to top"
  });
  console.log("Ok, " + countries[indexOfTrip] + " has been added to your item.");
  selectedItems.nextTrip = countries[indexOfTrip];

  if (indexOfTrip == -1) {
    chooseTopMenu();
  }
  chooseTopMenu();
};

// chooseTrip();
// console.log(selectedItems);

/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */

 

const chooseTopMenu = () => {
	const topMenu = ["Books", "Movies", "Next trip"],
	pickCategoryIndex = readlineSync.keyInSelect(topMenu, "Pick a category?", {cancel: "Exit"});
	console.log(pickCategoryIndex);

	switch (pickCategoryIndex) {
    case 0:
      chooseBook();
      break;

    case 1:
      chooseMovie();
      break;

    case 2:
      chooseTrip();
      break;

    case -1:
      console.log(selectedItems);;
      break;
  }
}
	chooseTopMenu();

	

// 	if (pickCategoryIndex +1 == 1) {
// 	chooseBook();
	
//   } else if (pickCategoryIndex +1 == 2) {
// 	chooseMovie();
	
//   } else if (pickCategoryIndex +1 == 3) {
// 	chooseTrip();
	
//   } else if(pickCategoryIndex == -1) {
// 	  console.log(selectedItems);

//   }

	// const friends = ["Rachel", "Ross", "Chandler", "Monica", "Joey", "Phoebe"];

//   function chooseAFriend() {
//     console.log("Here are the friends");
//     friends.forEach((friend, index) => {
//       console.log(`${index + 1}: ${friend}`);
//     });

//     const choice = readlineSync.question("Make your choice");
//     const choiceAsNumber = parseInt(choice);
//     const chosenFriend = friends[choiceAsNumber - 1];

//     if (chosenFriend !== undefined) {
//       console.log(`You chose ${chosenFriend}!`);
//     } else {
//       console.log("That is not a valid choice");
//       chooseAFriend();
//     }
//   }