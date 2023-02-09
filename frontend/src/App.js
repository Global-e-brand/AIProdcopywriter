import "./App.css";
import Grid from "@mui/material/Grid";
import HeaderLogo from "./HeaderLogo";
import ButtonMain from "./ButtonMain";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Categories from "./components/categories/Categories";
import Dummy from "./Dummy";
function App() {
  const [category, setcategory] = useState("Workflow");
  return (
    <>
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
            <div className="catgory_menu">
              <Categories />
            </div>
            <div className="comonents_routes">
              <Routes>
                <Route
                  path="/category1"
                  element={
                    <Dummy
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/category2"
                  element={
                    <Dummy
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/category3"
                  element={
                    <Dummy
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
              </Routes>
            </div>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
