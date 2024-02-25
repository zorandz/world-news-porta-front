import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <div className="logo">WORLD NEWS</div>
      </div>
      <div className="header-links-container">
        <div>HOME PAGE</div>
        <div>NEWS</div>
        <div>SPORT</div>
        <div>MISCELANEOUS</div>
      </div>
      <div className="login-container">
        <i>Icon</i>
        <div>Login</div>
      </div>
    </header>
  );
};

export default Header;
