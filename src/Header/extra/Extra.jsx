import React, { useState } from "react";
import "./Extra.css";

const itemsDesc = [
  {
    name: "Launder",
    price: "250",
  },
  {
    name: "Launder2",
    price: "250",
  },
];


const Btn = (props) => {
  return (
    <button className="button" onClick={props.click}>
      {props.name}
    </button>
  );
};

const Incre = () => {
  const [count, setCount] = useState(0);

  function minus() {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  }
  function plus() {
    let newCount = count + 1;
    setCount(newCount);
  }

  return (
    <div className="increm">
      <button onClick={minus}>-</button>
      <span className="num">{count}</span>
      <button onClick={plus}>+</button>
    </div>
  );
};

export { Btn, Incre, itemsDesc };
