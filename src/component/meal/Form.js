import React, { useState, useRef } from "react";
import InputForm from "./InputForm";
import "./Form.css";
const Form = (props) => {
  const amountInputref = useRef();
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const amount = +amountInputref.current.value;
    if (amount === 0) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    props.onAddToCart(amount);
  };
  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <InputForm
          label="Amount"
          ref={amountInputref}
          input={{
            id: Math.random().toString(),
            type: "number",
            min: "0",
            max: "5",
            defaultValue: "1",
            step: "1",
          }}
        />
        <button className="">+ Add</button>
      </form>
      <div>
        {error && (
          <p
            style={{
              color: "red",

              textAlign: "center",
            }}
          >
            Hey There Add Some Item
          </p>
        )}
      </div>
    </>
  );
};
export default Form;
