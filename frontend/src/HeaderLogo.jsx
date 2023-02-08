import React from "react";
import { logo } from "./assets";
import "../src/App.css";
import { Link } from "react-router-dom";

function HeaderLogo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <img
        src={logo}
        style={{ width: "15%", height: "30%", marginTop: "2%" }}
      />
      <h2>AI ProdCopywriter</h2>
    </div>
  );
}

export default HeaderLogo;
