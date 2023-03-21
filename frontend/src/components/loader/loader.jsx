import React from "react";
import { loader } from "../../assets";
import "./loader.css";

function Loader(props) {
  return (
    <div
      className="loader"
      style={{ backgroundColor: props.color ? props.color : "white" }}
    >
      <span></span>
      <img src={loader} alt="" />
    </div>
  );
}

export default Loader;
