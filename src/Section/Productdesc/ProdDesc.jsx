import React, { useContext } from "react";
import { Btn, Incre } from "../../Header/extra/Extra";
import "./Proddesc.css";
import { UserContext } from "../../App";

function ProdDesc(props) {

  
  const Addtocart = useContext(UserContext);

  return (
    <div className="prod-desc">
      <span className="orange-text">SNEAKER COMPANY</span>
      <h1 style={{borderBottom: "1.5rem"}}>Fall Limited Edition Sneakers</h1>
      <p className="grey-text">
        Those low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
      <div className="price">
        <div className="new-price">
          <h2>$125.00</h2> <span className="discount">50%</span>
        </div>
        <div className="old-price grey-text" style={{textDecoration: "line-through"}}>$250</div>
      </div>
      <div className="buttons">
        <Incre />
        <Btn name="Add to Cart" click={Addtocart} />
      </div>
    </div>
  );
}

export default ProdDesc;
