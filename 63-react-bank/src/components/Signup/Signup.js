import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/CH.svg";

const Signup = ({ changeHandler, submitSignup, imageUrl }) => {
  return (
    <div className="sign-up">
      {/* 1 */}
      <div className="sign-up-title">
        <Link to="/" className="back">
          Back
        </Link>
        <h1>Sign up</h1>
      </div>
      <form className="sign-up-form" onSubmit={submitSignup}>
        <label>First name</label>
        <input
          max="30"
          required
          type="text"
          name="firstName"
          onChange={changeHandler}
        />

        <label>Last name</label>
        <input
          max="30"
          required
          type="text"
          name="lastName"
          onChange={changeHandler}
        />

        <label>Email</label>
        <input
          max="30"
          required
          type="email"
          name="email"
          onChange={changeHandler}
          placeholder="email@email.com"
        />

        <label>Password</label>
        <input
          max="10"
          min="4"
          required
          type="password"
          name="password"
          onChange={changeHandler}
          placeholder="Min 4 , Max 10 character"
        />

        <label>Confirm Password</label>
        <input
          required
          type="password"
          name="confirmPassword"
          onChange={changeHandler}
          min="4"
        />

        <input
          id="file-input"
          className="uploadInput"
          name="file"
          type="file"
          onChange={changeHandler}
        />
        <div className="upload-container">
          <label htmlFor="file-input" className="upload-button">
            Upload
          </label>
          <div className="avatar-img">
            <img src={logo} alt="avatar" />
          </div>
        </div>

        <button className="sign-up-button">
          {/* <Link className="sign-up-button-link" to="/main"> */}
            Sign up
          {/* </Link> */}
        </button>
      </form>
    </div>
  );
};

export default Signup;
