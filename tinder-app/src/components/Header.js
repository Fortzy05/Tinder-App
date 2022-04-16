import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div className="header">
      <button className="mini ui icon button">
        <i className="user large icon header__icon"></i>
      </button>

      <img
        className="header__logo"
        src="https://th.bing.com/th/id/OIP.R21N7vsa1foQvG8TXkU__QHaFG?pid=ImgDet&rs=1"
        alt="tinder logo"
      />
      <button className=" mini ui icon button">
        <i className="comments large icon header__icon"></i>
      </button>
    </div>
  );
};

export default Header;
