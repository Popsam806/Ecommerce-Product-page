import React, { useState } from "react";
import "./User.css";
import Cartdetail from "../Cart-detail/Cartdetail";
import UserImg from "../../images/image-avatar.png"
function User() {
  const [Show, setShow] = useState(false);


  return (
    <div className="user">
      <div className="cart" >
        <i className="fas fa-cart-shopping" onClick={() => setShow(!Show)}></i>
        {Show && <Cartdetail />}
      </div>
      <img
        src={UserImg}
        alt="user"
      />
    </div> 
  );
}

export default User;
