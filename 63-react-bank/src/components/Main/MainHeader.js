import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const MainHeader = () => {
    return (
  <div>
    <ul>
      <li>
        <NavLink activeClassName="active" to="/Wallet">
          Wallet
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/Savings">
          Savings
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/Loans">
          Loans
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/Settings">
          Settings
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/Signout">
          Sign out
        </NavLink>
      </li>
    </ul>
    <hr />
    {/* <Route exact path="/Login" component={Login} />
    <Route path="/Signup" component={Signup} /> */}
  </div>
  )
}

export default MainHeader;
