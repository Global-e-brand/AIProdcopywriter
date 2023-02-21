import React from "react";
import { loader } from "../../assets";
import "./loader.css";

function Loader() {
  return (
    <div className="loader">
      <span></span>
      <img src={loader} alt="" />
    </div>
  );
}

export default Loader;
