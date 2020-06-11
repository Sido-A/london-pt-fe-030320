import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import MainHeader from "./components/Main/MainHeader";
import LoginHeader from "./components/Login/LoginHeader";


function App() {
  const [page, setPage] = useState("Login");
  console.log(page);

  const handleClick = ()=>{
	  setPage("Main")
  }
  

  return (
    <div className="app">
      <div className="app-header">
        {page === "Login" ? <LoginHeader /> : <MainHeader />}
      </div>

      <Switch>
        <Route exact path="/Main" component={Main} />
        <Route exact path="/">
          <Login handleClick={handleClick} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
