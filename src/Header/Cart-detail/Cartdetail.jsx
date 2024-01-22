import React, {  useContext } from "react";
import "./Cartdetail.css";
import CartItem from "./CartItem";
import { Btn } from "../extra/Extra";
import { ItemContext } from "../../App";

function Cartdetail() {
  const Items = useContext(ItemContext);


  return (
    <div className="cart-detail">
      <h3>Cart</h3>
      <div className="cart-content">
        <ul>
          {Items.map((item) => (
            <CartItem name="Fall Limited Edition Sneakers " price= "$125"/>
          ))}
        </ul>
        <Btn name="Checkout" />
      </div>
    </div>
  );
}

export default Cartdetail;
