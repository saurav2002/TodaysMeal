import React, { useContext } from "react";
import "./HeaderButton.css";
import CartContext from "../context/cart-context";

const HeaderButton = (props) => {
  const cartItems = useContext(CartContext).item.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  return (
    <button className="button" onClick={props.onAddtwo}>
      <span>Your Cart</span>
      <span className="badge">{cartItems}</span>
    </button>
  );
};

export default HeaderButton;
