import React from "react";
import "./App.css";
import List from "./list";
import Title from "./title";
import TodayDate from "./date";

const APP_TITLE = "Awesome Pet Shop";

/**
 * Exercise: 1
 *
 * 1. Create a list element and render all animals as list items.
 *
 * Exercise 2
 *
 * 1. Display the APP_TITLE in an h1
 * 2. Display today's date in a p
 */

const App = () => {
  const animals = ["cat", "dog", "giraffe", "pig", "lion", "rabbit"];

  return (
    <div className="app">
      <h1>{Title(APP_TITLE)}</h1>
      <ul>{List(animals)}</ul>
      <div>{TodayDate()}</div>
    </div>
  );
};

export default App;

