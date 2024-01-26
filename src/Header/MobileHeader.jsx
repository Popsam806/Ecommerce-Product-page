import React from "react";
import User from "./User/User";
import "./Header.css";

function MobileHeader() {
  return (
    <div className="mobile-header">
      <div className="mobile-comp-name">
        <i className="fas fa-home" onClick={() => setShow(!Show)}></i>
        <h1>sneakers</h1>
      </div>
      <User />
    </div>
  );
}

export default MobileHeader;
