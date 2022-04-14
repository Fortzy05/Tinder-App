import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div className="header">
      <i className="user large icon header__icon"></i>
      <img
        className="header__logo"
        src="https://th.bing.com/th/id/OIP.R21N7vsa1foQvG8TXkU__QHaFG?pid=ImgDet&rs=1"
        alt="tinder logo"
      />
      <i className="comments large icon header__icon"></i>
    </div>
  );
};

export default Header;
