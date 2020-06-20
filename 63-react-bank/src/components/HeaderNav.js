import React, { useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const HeaderNav = ({ page }) => {
  return (
    <div>
      {page !== "Main" ? (
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
      ) : (
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
      )}
    </div>
  );
};

export default HeaderNav;
