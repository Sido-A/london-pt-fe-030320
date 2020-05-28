import React from "react";
import "./header.nav.css";


const Navigation = ()=>{
    return (
      <div className="inner">
        <nav className="navigation">
          <ul>
            <li className="home">Home</li>
            <li className="about">About</li>
            <li className="sign-in">Sign in</li>
          </ul>
        </nav>
      </div>
    );
}

export default Navigation;