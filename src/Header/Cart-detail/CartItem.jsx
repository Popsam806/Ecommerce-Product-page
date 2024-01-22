import React, { useState, useContext } from "react";
import { ImageContext } from "../../App";
function CartItem(item) {
  const Images = useContext(ImageContext);
  const [FirstImg, SecondImg, ThirdImg, FourthImg] = Images;
  const { id, img } = FirstImg;
  const [itemAval, remItem] = useState(true);

  function delItem() {
    remItem(false);
  }

  const itemStyle = {
    display: " flex",
    gap: " 0.3rem",
    alignItems: " center",
    justifyContent: "space-between",
    textAlign: " left",
    fontSize: " 0.8125rem",
  };

  const imgStyle = {
    width: " 2.5rem",
    height: " 2.5rem",
    objectFit: " cover",
    borderRadius: " 0.3125rem",
  };

  return (
    itemAval && (
      <li style={itemStyle}>
        <img
          src={img}
          alt="cart"
          style={imgStyle}
        />
        <div>
          {item.name} <br></br>
          {item.price}
        </div>
        <i className="fas fa-times" onClick={delItem}></i>
      </li>
    )
  );
}

export default CartItem;
