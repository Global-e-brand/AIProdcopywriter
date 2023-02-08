import "./App.css";
import { logo } from "./assets/index.js";
import Grid from "@mui/material/Grid";
import HeaderLogo from "./HeaderLogo";
import ButtonMain from "./ButtonMain";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Categories from "./components/categories/Categories";
function App() {
  const [category, setcategory] = useState("Workflow");
  return (
    <div className="App">
      <Grid container spacing={0.5}>
        <Grid item xs={3}>
          <div className="logo-panel">
            <br></br>
            <HeaderLogo />
            <br></br>
            <br></br>
            <ButtonMain />
          </div>
        </Grid>
        <Grid item xs={6}>
          {/* <hr></hr> */}
          <Categories />
          <div></div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}

export default App;
