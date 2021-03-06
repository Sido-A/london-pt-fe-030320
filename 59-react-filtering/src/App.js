import React, { useState, useEffect } from "react";
import "./App.css";
import Contacts from "./Contacts";

/**
 * 
 * Exercise:
 * 1. fetch data from the server(json-server)only if you don't
 * have contacts in state
 * 2. create input which will filter contacts on view based in user query(input value)
 * 3. render contacts
 * 
 * Contact HTML structure
 * =======================
 *	<li>
		<p>{name}</p>
		<p className={"company"}>{company}</p>
	</li>
 */


const App = () => {

  return <div className="App">
	  <Contacts />
  </div>;
};

export default App;
