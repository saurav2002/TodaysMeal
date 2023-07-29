import React from "react";
import ReactDom from "react-dom";
import "./Model.css";

const Backdrop = () => {
  return <div className="backdrop" />;
};
const ModelOver = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Model = (props) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop />, document.getElementById("over"))}
      {ReactDom.createPortal(
        <ModelOver>{props.children}</ModelOver>,
        document.getElementById("over")
      )}
    </>
  );
};

export default Model;
