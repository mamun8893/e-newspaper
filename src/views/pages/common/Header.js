import React from "react";
import Logo from "../../../assets/images/logo.svg";

const header = () => {
  return (
    <header className="header-area">
      <div className="m-container">
        <div className="navbar-brand text-center">
          <a href="#home">
            <img src={Logo} alt="logo" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default header;
