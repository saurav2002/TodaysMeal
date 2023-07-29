import React from "react";
import "./InputForm.css";
const InputForm = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default InputForm;
