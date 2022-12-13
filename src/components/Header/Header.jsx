import React from "react";
import "./Header.scss";
import logo from "../../logo.png";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo-img" />

    </nav>
  );
};

export default Header;
