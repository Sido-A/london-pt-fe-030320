import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Signup = () => {
  return (
    
    <div className="sign-up">
      {/* 1 */}
      <div>
        <Link to="/">Back</Link>
        <h3>Sign up</h3>
      </div>
      <form>
        <div>
          <label>First name</label>
          <input required type="text" name="firstName" />
        </div>

        <div>
          <label>Last name</label>
          <input required type="text" name="lastName" />
        </div>

        <div>
          <label>Email</label>
          <input required type="email" name="email" />
        </div>

        <div>
          <label>Password</label>
          <input required type="password" name="password" />
        </div>

        <div>
          <label>Confirm Password</label>
          <input required type="password" name="password" />
        </div>

        <div>
          <button>Upload</button>
          <img alt="avatar" />
        </div>
        <Link to="/Main">
          <button>Sign up</button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
