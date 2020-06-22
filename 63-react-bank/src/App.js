import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import fetchUser, {newUser} from "./API";
import HeaderNav from "./components/HeaderNav";
import LoginForm from "./components/Login/LoginForm";
import Signup from "./components/Signup/Signup";
import Main from "./components/Main/Main";

// const loginList = ["Login", "Sign up"];
// const mainList = ["Wallet", "Savings", "Loans", "Settings", "Sign out"];

const App = () => {
  //set page
  const [page, setPage] = useState("login");
  const handleClick = () => {
    setPage("main");
  };

  const history = useHistory();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useState([]);
  const [loginUser, setLoginUser] = useState({});

  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setInputValue(inputValue);
  }, [inputValue]);

  const changeHandler = (e) => {
    if (inputValue.email && inputValue.password !== "") {
      setDisabled(!false);
    }
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getUser = async () => {
      return fetchUser().then((res) => setUser(res));
    };
    getUser();
  }, []);

  // const handleChange = (e) => {
  //   e.target.name === "email"
  //     ? setEmail(e.target.value)
  //     : setPassword(e.target.value);
  //   if (email && password !== "") {
  //     setDisabled(!false);
  //   }
  // };

  const submitLogin = (e) => {
    e.preventDefault();
    // to main page if successful

    const verifyUser = user
      .filter((u) => u.email === inputValue.email)
      .filter((u) => u.password === inputValue.password);
    console.log(verifyUser);

    if (verifyUser.length !== 0) {
      history.push("/main");
      handleClick();
      setLoginUser(verifyUser);
    } else {
      alert("Your email or password is not correct");
      // setEmail("");
      // setPassword("");
      setInputValue({ ...inputValue });
      console.log(inputValue);
    }
  };

  const submitSignup = (e)=>{
    e.preventDefault();
    if (inputValue.password === inputValue.confirmPassword) {
      if (
        inputValue.firstName &&
        inputValue.lastName &&
        inputValue.email !== ""
      ) {
        console.log("hi");
        setUser({ ...user }, inputValue);
        console.log(user);
      }
    }

  }



  return (
    <div className="app">
      <HeaderNav page={page} />

      <Switch>
        <Route exact path="/main">
          <Main loginUser={loginUser} />
        </Route>
        <Route exact path="/signup">
          <Signup changeHandler={changeHandler} submitSignup={submitSignup} />
        </Route>
        <Route exact path="/">
          <LoginForm
            changeHandler={changeHandler}
            submitLogin={submitLogin}
            inputValue={inputValue}
            disabled={disabled}
          />
          {/* <LoginForm handleClick={handleClick} /> */}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
