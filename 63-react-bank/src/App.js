import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HeaderNav from "./components/HeaderNav";
import LoginForm from "./components/Login/LoginForm"
import Signup from "./components/Signup/Signup";
import Main from "./components/Main/Main";

const loginList = ["Login", "Sign up"];
const mainList = ["Wallet", "Savings", "Loans", "Settings", "Sign out"];

const App = () => {
  const [page, setPage] = useState("Login");
  console.log(page);

  const handleClick = () => {
    setPage("Main");
  };

  return (
    <div className="app">
      <HeaderNav page={page}/>

      <Switch>
        <Route exact path="/Main" component={Main} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/">
          <LoginForm handleClick={handleClick} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
