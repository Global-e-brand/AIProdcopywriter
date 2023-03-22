import React from "react";
import { loader } from "../../assets";
import "./loader.css";

function Loader(props) {
  return (
    <div
      className="loader-wrapper"
      style={{ scale: props.scale ? props.scale : "1" }}
    >
      <div
        className="loader"
        style={{
          backgroundColor: props.color ? props.color : "white",
        }}
      >
        <span></span>
        <img src={loader} alt="" />
      </div>
    </div>
  );
}

export default Loader;
