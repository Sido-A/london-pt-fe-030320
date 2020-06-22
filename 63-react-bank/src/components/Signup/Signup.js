import React from "react";
import { Link } from "react-router-dom";


const Signup = ({ changeHandler, submitSignup }) => {
  return (
    <div className="sign-up">
      {/* 1 */}
      <div>
        <Link to="/">Back</Link>
        <h3>Sign up</h3>
      </div>
      <form onSubmit={submitSignup}>
        <div>
          <label>First name</label>
          <input
            required
            type="text"
            name="firstName"
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Last name</label>
          <input
            required
            type="text"
            name="lastName"
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Email</label>
          <input required type="email" name="email" onChange={changeHandler} />
        </div>

        <div>
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            required
            type="password"
            name="confirmPassword"
            onChange={changeHandler}
          />
        </div>

        <div>
          <button>Upload</button>
          <img alt="avatar" />
        </div>
        <Link to="/main">
          <button>Sign up</button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
