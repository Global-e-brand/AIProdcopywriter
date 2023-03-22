import React from "react";
import { loader } from "../../assets";
import "./loader.css";

function Loader(props) {
  return (
    <div
      className="loader"
      style={{
        backgroundColor: props.color ? props.color : "white",
        scale: props.scale ? props.scale : "1",
      }}
    >
      <span></span>
      <img src={loader} alt="" />
    </div>
  );
}

export default Loader;
