import React, { useState } from "react";
import { postUser } from "../../fetchConstructor";
import "./userForm.css";

const UserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.firstName && user.lastName !== "") {
      postUser(user);
    }
    setUser({
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
    });
  };

  return (
    <div className="state">
      <form onSubmit={handleSubmit} className="userForm">
        <input
          onChange={handleChange}
          type="text"
          className="firstName"
          name="firstName"
          placeholder="First name..."
          value={user.firstName}
          required
        />
        <input
          onChange={handleChange}
          type="text"
          className="lastName"
          name="lastName"
          placeholder="Last name..."
          value={user.lastName}
          required
        />
        <input
          onChange={handleChange}
          type="number"
          min="0"
          max="99"
          className="age"
          name="age"
          value={user.age}
          required
        />
        <select
          onChange={handleChange}
          type="select"
          className="gender"
          name="gender"
          value={user.gender}
          required
        >
          <option>Choose one...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
