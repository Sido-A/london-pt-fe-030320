import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ changeHandler,submitLogin, inputValue,disabled }) => {

  return (
    <div className="login-main">
      {/*1*/}
      <div className="login-title">
        {/*2&3*/}
        <h1>Login</h1>
      </div>
      {/* <p className="error-message">Your email or password is not correct</p> */}
      <form className="login-form" onSubmit={submitLogin}>
        {/*4*/}
        <label htmlFor="email">Email</label>
        <input
          value={inputValue.email}
          type="email"
          name="email"
          onChange={changeHandler}
          placeholder="email@email.com"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={inputValue.password}
          type="password"
          name="password"
          onChange={changeHandler}
          placeholder="Minimum 4 character"
          min="4"
          required
        />
        {/* <Link to="/Main"> */}
        <button className="login-button" type="submit" disabled={!disabled}>
          Login
        </button>
        {/* </Link> */}

        {/* to sign up page */}
        <Link to="/signup" className="sign-up-link">Sign up</Link>
      </form>
    </div>
  );
};

export default LoginForm;
