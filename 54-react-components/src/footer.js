import React from "react";
import "./footer.css";

const Footer = ()=>{
    return (
      <footer>
        <div className="inner">
          <nav className="navigation">
            <ul>
              <li className="home">Home</li>
              <li className="about">About</li>
              <li className="sign-in">Sign in</li>
            </ul>
          </nav>
        </div>
      </footer>
    );
}

export default Footer;