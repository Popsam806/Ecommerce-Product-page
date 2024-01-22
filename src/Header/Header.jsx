import React from "react";
import "./Header.css";
import Navlist from "./Nav/Navlist";
import User from "./User/User";
function Header() {
  return (
    <div className="header">
      <div className="head-cont">
        <div className="comp-name">
          <h2>sneakers</h2>
          <Navlist />
        </div>
        <User />
      </div>
    </div>
  );
}

export default Header;
