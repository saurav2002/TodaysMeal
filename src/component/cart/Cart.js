import React, { useContext } from "react";
import "./Cart.css";
import Model from "./Model";
import CartContext from "../context/cart-context";
import CartInfo from "./CartInfo";

const Cart = (props) => {
  const finalContext = useContext(CartContext);

  const itemList = (
    <ul className="cartitems">
      {finalContext.item.map((items) => {
        return (
          <li key={items.id}>
            <CartInfo items={items} />
          </li>
        );
      })}
    </ul>
  );

  return (
    <Model>
      {itemList}
      <div className="total">
        <span>Total Amount</span>
        <span> ₹{finalContext.totalAmount}</span>
      </div>
      <div className="actions">
        <button className="buttons" onClick={props.onCancel}>
          Close
        </button>

        <button className="button">Order</button>
      </div>
    </Model>
  );
};

export default Cart;
