import React, { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginHeader = () => {
  return (
  
      <ul>
        <li>
          <NavLink activeClassName="active" to="/">
            LOGIN
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Signup">
            SIGN UP
          </NavLink>
        </li>
      </ul>
     
    
  );
};

export default LoginHeader;

 {
   /* <Switch>
          <Route path="/Login" component={LoginForm} />
          <Route exact path="/Signup" component={Signup} />
          <Route path="/" component={LoginForm} />
        </Switch> */
 }