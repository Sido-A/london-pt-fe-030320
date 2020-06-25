import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/CH.svg"
// import "../scss/App.scss"

const HeaderNav = ({ page, signOutHandler }) => {
  return (
    <div className="header-navs">
      <div className="logo">
        <img src={logo} />
      </div>

      {page !== "wallet" ? (
        <ul className="header-menu">
          <li>
            <NavLink activeClassName="active" to="/">
              LOGIN
            </NavLink>
          </li>
          <span>/</span>
          <li>
            <NavLink activeClassName="active" to="/signup">
              SIGN UP
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className="header-menu">
          <li>
            <NavLink activeClassName="active" to="/wallet">
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/savings">
              Savings
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/loans">
              Loans
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/settings">
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/" onClick={signOutHandler}>
              Sign out
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HeaderNav;
