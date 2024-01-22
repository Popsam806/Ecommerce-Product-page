import React from 'react'
import ProductImgcont from './ProductImg-cont/ProductImgcont'
import ProdDesc from './Productdesc/ProdDesc'
import "./Sect.css";
function Sect() {
  return (
    <div className='section'>
      <ProductImgcont />
      <ProdDesc />
    </div>
  )
}

export default Sect
