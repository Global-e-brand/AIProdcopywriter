import React from "react";
import { logo, sidebckgnd } from "./assets";
import "../src/App.css";
import { Link } from "react-router-dom";
import "./HeaderLogo.css";
import { Grid } from "@mui/material";

function HeaderLogo() {
  return (
    <div className="logo-wrapper">
      <div className="hd-logo">
        <div className="img-logo">
          <img src={logo} />
        </div>
        <div className="text-logo">
          <h2>creativewriter.ai</h2>
        </div>
      </div>
    </div>
  );
}

export default HeaderLogo;
