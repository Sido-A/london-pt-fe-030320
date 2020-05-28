import React from "react";
// import Navigation from "./navigation";
import "./header.nav.css"

const Header = () => {
  return (
    <header>
      <div className="inner">
        <div className="logo">
          <img src="../public/logo192.png" alt="lol" />
        </div>
        {/* <Navigation /> */}
      </div>
    </header>
  );
};

export default Header;
