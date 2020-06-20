import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import fetchUser from "../../API";

const LoginForm = ({ handleClick }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      return fetchUser().then((res) => setUser(res));
    };
    getUser();
  }, []);

  const handleChange = (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
    if (email && password !== "") {
      setDisabled(!false);
    }
  };

  const submitLogin = (e) => {
    e.preventDefault();
    // to main page if successful
    const loginUser = user
      .filter((u) => u.email === email)
      .filter((u) => u.password === password);

    if (loginUser) {
      history.push("/Main");
    } else {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login-main">
      {/*1*/}
      <div className="title">
        {/*2&3*/}
        <h3>Login</h3>
      </div>
      <form onSubmit={(e) => submitLogin(e)}>
        {/*4*/}
        <label for="email">Email</label>
        <input
          value={email}
          type="email"
          name="email"
          onChange={handleChange}
          required
        />
        <label for="password">Password</label>
        <input
          value={password}
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
        {/* <Link to="/Main"> */}
        <button type="submit" onClick={handleClick} disabled={!disabled}>
          Login
        </button>
        {/* </Link> */}

        {/* to sign up page */}
        <Link to="/Signup">Sign up</Link>
      </form>
    </div>
  );
};

export default LoginForm;
