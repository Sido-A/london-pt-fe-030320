import React, { useState } from "react";
import Signup from "../Signup/Signup";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const LoginForm = ({ handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);

    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    // to main page if successful

    if (email !== "" && password !== "") {
      console.log("email", email);
      console.log("password", password);
    }
  };

  return (
    <div className="login-main">
      {/*1*/}
      <div>
        {/*2&3*/}
        <h3>Login</h3>
      </div>
      <form onSubmit={(e) => submitLogin(e)}>
        {/*4*/}
        <label for="email">Email</label>
        <input type="email" name="email" onChange={handleChange} required />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
        <Link to="/Main">
          <button type="submit" onClick={handleClick}>
            Login
          </button>
        </Link>

        {/* to sign up page */}
        <Link to="/Signup">Sign up</Link>
      </form>
    </div>
  );
};

export default LoginForm;
