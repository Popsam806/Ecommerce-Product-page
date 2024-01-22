import React, { useState, useContext } from "react";
import "./Productimg.css";
import { ImageContext } from "../../App";

function ProductImgcont() {
  const Images = useContext(ImageContext);
  const [FirstImg, SecondImg, ThirdImg, FourthImg] = Images;
  const { id, img } = FirstImg;
  const [thumbnail, setThumbnail] = useState(img);

  return (
    <div className="product-img">
      <div className="main-img">
        <img src={thumbnail} alt="Shoe" />
      </div>
      <ul>
        {Images.map((imgg) => (
          <li key={imgg.id} onClick={(e) => setThumbnail(imgg.img)}>
            <img src={imgg.img} alt="Shoe" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductImgcont;
