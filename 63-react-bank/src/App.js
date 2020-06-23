import React, { useState, useEffect } from "react";
import "./normalize.css";
import "./scss/App.scss";
import { Route, Switch, useHistory } from "react-router-dom";
import fetchUser, { newUser } from "./API";
import HeaderNav from "./components/HeaderNav";
import LoginForm from "./components/Login/LoginForm";
import Signup from "./components/Signup/Signup";
import Main from "./components/Main/Main";

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
      handleClick("main");
      history.push("/main");
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
          balances: [
            { balance: 0 },
            { saving_balance: 0 },
            { loan_balance: 0 },
          ],
          transactions: [],
          savings: [],
          loans: [],
        });
        handleClick("main");
        history.push("/main");        
      } else if (password !== confirmPassword) {
        alert("Your password doesn't much");
      }
    }
  };

  return (
    <div className="app">
      <HeaderNav page={page} handleClick={handleClick} />

      <Switch>
        <Route exact path="/main">
          <Main loginUser={loginUser} />
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
    </div>
  );
};

export default App;
