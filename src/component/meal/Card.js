import React from "react";
// import "./card.css";

const Card = (props) => {
  return <ul className="card">{props.children}</ul>;
};

export default Card;
