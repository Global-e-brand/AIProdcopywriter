import "./App.css";
import Grid from "@mui/material/Grid";
import HeaderLogo from "./HeaderLogo";
import ButtonMain from "./ButtonMain";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/categories/Categories";
import Dummy from "./components/Form/Dummy";
function App() {
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
          <Grid item xs={8}>
            {/* <hr></hr> */}
            <div className="catgory_menu">
              <br></br>
              <Categories />
            </div>
            <div className="comonents_routes">
              <Routes>
                <Route
                  path="/productdescription"
                  element={
                    <Dummy
                      category={"Product Description"}
                      inputOne={true}
                      inputOneTitle={"What is your product called?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your product"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/adcopyvarients"
                  element={
                    <Dummy
                      category={"Ad Copy Variants"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your product"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/facebookheadlines"
                  element={
                    <Dummy
                      category={"Facebook Headlines"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/facebooklinkdescription"
                  element={
                    <Dummy
                      category={"Facebook Link Descriptions"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/facebooklisticle"
                  element={
                    <Dummy
                      category={"Facebook Listicle"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/facebookprimarytext"
                  element={
                    <Dummy
                      category={"Facebook Primary Text"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/generaladcopy"
                  element={
                    <Dummy
                      category={"General Ad Copy"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/googledescriptions"
                  element={
                    <Dummy
                      category={"Google Descriptions"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/googleheadlines"
                  element={
                    <Dummy
                      category={"Google Headlines"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/linkedinadcopy"
                  element={
                    <Dummy
                      category={"LinkedIn Ad Copy"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/audiencerefiner"
                  element={
                    <Dummy
                      category={"Audience Refiner"}
                      inputOne={true}
                      inputOneTitle={"Describe your audience"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/brandmission"
                  element={
                    <Dummy
                      category={"Brand Mission"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/brandvoice"
                  element={
                    <Dummy
                      category={"Brand Voice"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your product"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/mottogenerator"
                  element={
                    <Dummy
                      category={"Motto Generator"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/valueproposition"
                  element={
                    <Dummy
                      category={"Value Proposition"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
              </Routes>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
