import React, { useContext } from "react";
import "./MealRender.css";
import Form from "./Form";
// import { useContext } from "react";
import CartContext from "../context/cart-context";

const MealRender = (props) => {
  const mainData = useContext(CartContext);
  const getCart = (data) => {
    // console.log(data);
    // console.log(props);
    mainData.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: data,
      price: props.meal.price,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{props.meal.name}</h3>
        <div className="description">{props.meal.description}</div>
        <div className="price">₹{props.meal.price}</div>
      </div>
      <div>
        <Form onAddToCart={getCart} />
      </div>
    </li>
  );
};

export default MealRender;
