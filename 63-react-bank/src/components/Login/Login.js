import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import Signup from "../Signup/Signup";

const Login = ({ handleClick }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/">{/* Showing Login form as a default */}
          <LoginForm handleClick={handleClick} />
        </Route>
        <Route exact path="/Signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default Login;
