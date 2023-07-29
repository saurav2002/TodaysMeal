import React, { useContext } from "react";
import CartContext from "../context/cart-context";
import "./CartInfo.css";
const CartInfo = (props) => {
  const final = useContext(CartContext);
  const addHandler = () => {
    final.addItem({
      id: props.items.id,
      name: props.items.name,
      amount: 1,
      price: props.items.price,
    });
  };
  const subHandler = () => {
    final.removeITem({
      id: props.items.id,
      name: props.items.name,
      amount: 1,
      price: props.items.price,
    });
  };

  return (
    <div className="main">
      <div className="innerLeft">
        <p>{props.items.name}</p>
        <span>{props.items.price}</span>
        <span style={{ fontSize: "small" }}> ×{props.items.amount}</span>

        <hr></hr>
      </div>
      <div className="inneRight">
        <button onClick={subHandler}>-</button>
        <button onClick={addHandler}>+</button>
      </div>
    </div>
  );
};

export default CartInfo;
