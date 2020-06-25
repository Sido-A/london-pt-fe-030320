import React, { useState, useEffect } from "react";
import "./normalize.css";
import "./scss/App.scss";
import { Route, Switch, useHistory } from "react-router-dom";
import fetchUser, { newUser } from "./API";
import HeaderNav from "./components/HeaderNav";
import LoginForm from "./components/Login/LoginForm";
import Signup from "./components/Signup/Signup";
import Wallet from "./components/Main/Wallet";
import Savings from "./components/Main/Savings"
import Loans from "./components/Main/Loans";
import Settings from "./components/Main/Settings";

const App = () => {
  //set page
  const history = useHistory();
  const [page, setPage] = useState("login");
  const [user, setUser] = useState([]);
  const [loginUser, setLoginUser] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = inputValue;

  useEffect(() => {
    setInputValue(inputValue);
  }, [inputValue]);

  useEffect(() => {
    const getUser = async () => {
      return fetchUser().then((res) => setUser(res));
    };
    getUser();
  }, []);

  const handleClick = (page) => {
    setPage(page);
  };

  const changeHandler = (e) => {
    if (email !== "" && password !== "") {
      setDisabled(!false);
    }

    if (e.target.name === "file") {
      const IMG_PATH = e.target.value.split("\\").pop();
      setImageUrl(IMG_PATH);
    } else {
      setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    }
  };

  const submitLogin = (e) => {
    e.preventDefault();
    // to main page if successful
    const verifyUser = user
      .filter((u) => u.email === email)
      .filter((u) => u.password === password);

    if (verifyUser.length !== 0) {
      handleClick("wallet");
      history.push("/wallet");
      setLoginUser(verifyUser);
    } else {
      alert("Your email or password is not correct");
      setInputValue({ ...inputValue });
    }
  };

  const submitSignup = (e) => {
    e.preventDefault();

    if (password !== "") {
      if (
        firstName &&
        lastName &&
        email !== "" &&
        password === confirmPassword
      ) {
        newUser({
          firstname: firstName,
          lastname: lastName,
          email,
          password,
          avatar: imageUrl,
          wallet: [{ balance: 0 }, { transactions: [] }],
          savings: [{ balance: 0 }, { transactions: [] }],
          loans: [{ balance: 0 }, { transactions: [] }],
        });
        handleClick("wallet");
        history.push("/wallet");        
      } else if (password !== confirmPassword) {
        alert("Your password doesn't much");
      }
    }
  };

  const signOutHandler = ()=>{
    setLoginUser({})
    setInputValue({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    handleClick("login")  
  }

  return (
    <div className="app">
      <HeaderNav page={page} signOutHandler={signOutHandler} />

      <Switch>
        <Route exact path="/loans">
          <Loans loginUser={loginUser} />
        </Route>
        <Route exact path="/savings">
          <Savings loginUser={loginUser} />
        </Route>
        <Route exact path="/wallet">
          <Wallet loginUser={loginUser} />
        </Route>
        <Route exact path="/signup">
          <Signup
            changeHandler={changeHandler}
            submitSignup={submitSignup}
            imageUrl={imageUrl}
          />
        </Route>
        <Route exact path="/">
          <LoginForm
            changeHandler={changeHandler}
            submitLogin={submitLogin}
            inputValue={inputValue}
            disabled={disabled}
          />
        </Route>
      </Switch>
      <Settings />
    </div>
  );
};

export default App;
