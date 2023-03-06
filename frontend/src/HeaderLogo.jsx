import React from "react";
import { logo, sidebckgnd } from "./assets";
import "../src/App.css";
import { Link } from "react-router-dom";
import "./HeaderLogo.css";
import { Grid } from "@mui/material";

function HeaderLogo() {
  return (
    <div className="hd-logo">
      <Grid container className="img-text-mobileview">
        <Grid xs={2} sm={12} md={2} className="img-logo">
          <img src={logo} />
        </Grid>
        <Grid xs={10} sm={12} md={10} className="text-logo">
          <h2 className="lg-title">AI ProdCopywriter</h2>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeaderLogo;
