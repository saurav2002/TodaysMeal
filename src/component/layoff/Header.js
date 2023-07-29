import React from "react";
import Meal from "../../assets/meals.jpg";
import "./header.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>Today's Meal</h1>
        <HeaderButton onAddtwo={props.onAdd}></HeaderButton>
      </header>
      <div className="main-image">
        <img src={Meal} alt="Invaid" />
      </div>
    </>
  );
};

export default Header;
