import React from "react";
import "./form.css";

const Form = () => {
  return (
    <form>
      <div className="inner">
        <div className="name-input">
          <label htmlFor="name">Name: </label>
          <input className="name" id="name" placeholder="Type name..." />
        </div>
        <div className="address-input">
          <label htmlFor="address">Address: </label>
          <input
            className="address"
            id="address"
            placeholder="Type address..."
          />
        </div>

        <div className="phone-number-input">
          <label htmlFor="phone-number">Phone Number: </label>
          <input
            className="phone-number"
            id="phone-number"
            placeholder="Type phone number..."
          />
        </div>

        <button className="submitForm" type="submit" value="Submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
