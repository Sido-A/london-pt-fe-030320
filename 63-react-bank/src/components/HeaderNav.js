import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/CH.svg"
// import "../scss/App.scss"

const HeaderNav = ({ page, handleClick }) => {
  return (
    <div className="header-navs">
      <div className="logo">
        <img src={logo} />
      </div>

      {page !== "main" ? (
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
            <NavLink activeClassName="active" to="/" 
            onClick={()=>handleClick("login")}
            >
              Sign out
            </NavLink>
          </li>
        </ul> 
      )}
    </div>
  );
};

export default HeaderNav;
