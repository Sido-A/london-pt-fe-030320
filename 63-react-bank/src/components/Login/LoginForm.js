import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ changeHandler,submitLogin, inputValue,disabled }) => {
  // const history = useHistory();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [disabled, setDisabled] = useState(false);
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   const getUser = async () => {
  //     return fetchUser().then((res) => setUser(res));
  //   };
  //   getUser();
  // }, []);

  // const handleChange = (e) => {
  //   e.target.name === "email"
  //     ? setEmail(e.target.value)
  //     : setPassword(e.target.value);
  //   if (email && password !== "") {
  //     setDisabled(!false);
  //   }
  // };

  // const submitLogin = (e) => {
  //   e.preventDefault();
  //   // to main page if successful
  //   const loginUser = user
  //     .filter((u) => u.email === email)
  //     .filter((u) => u.password === password);
  //     console.log(loginUser);

  //   if (loginUser.length !== 0) {
  //     history.push("/main");
  //     handleClick();
  //   } else {
  //     alert("Your email or password is not correct");
  //     setEmail("");
  //     setPassword("");
  //   }
  // };

  return (
    <div className="login-main">
      {/*1*/}
      <div className="title">
        {/*2&3*/}
        <h3>Login</h3>
      </div>
      {/* <p className="error-message">Your email or password is not correct</p> */}
      <form onSubmit={submitLogin}>
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
        <button type="submit" disabled={!disabled}>
          Login
        </button>
        {/* </Link> */}

        {/* to sign up page */}
        <Link to="/signup">Sign up</Link>
      </form>
    </div>
  );
};

export default LoginForm;
