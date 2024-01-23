import React from "react";
import { Link } from "react-router-dom";
import "./Navlist.css";
function Navlist() {
  return (
    <ul className="navlist">
      <li className="active"><Link to="/">Collections</Link></li>
      <li><Link to="/men">Men</Link></li>
      <li><Link to="/women">Women</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  );
}

export default Navlist;
